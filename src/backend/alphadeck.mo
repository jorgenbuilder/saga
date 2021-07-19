import Array "mo:base/Array";
import Blob "mo:base/Blob";
import Bool "mo:base/Bool";
import Debug "mo:base/Debug";
import Error "mo:base/Error";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Time "mo:base/Time";


shared({ caller }) actor class AlphaDeck() {

    type CardAsset = Text;
    type NFT = {
        var owner : ?Principal;
    };

    ////////////////////////////////
    // Primary entity datastores //
    //////////////////////////////

    stable let tarotCards : [var ?CardAsset] = Array.init<?CardAsset>(79, null);
    stable var nfts : [var NFT] = Array.init<NFT>(10, { var owner = null });

    //////////////////////////////////
    // Admin canister setup things //
    ////////////////////////////////

    var lockStage1Time : Int = 0;
    stable var productionMode : Bool = false;

    public shared({caller}) func uploadAsset(index : Nat, payload : Text) : () {
        tarotCards[index] := ?payload;
    };

    public shared({caller}) func lockForProduction() : async Text {
        ignore validateAssets();
        lockStage1Time := Time.now();
        "You won't be able to upload assets after locking this canister. Confirm by calling confirmLockForProduction within the next minute.";
    };

    public shared({caller}) func confirmLockForProduction() : async Text {
        ignore validateAssets();
        if (lockStage1Time - Time.now() >= 60_000_000_000) {
            productionMode := true;
            return "This canister is now locked.";
        };
        "To lock this canister, call lockForProduction then confirmLockForProduction within one minute.";
    };

    public query func validateAssets () : async () {
        // Image processing is probably not something I feel like doing in Motoko right now
        // So like, frontend validate image file types and dimensions
        var i = 0;
        while (i < 79) {
            if (tarotCards[i] == null) {
                throw Error.reject("Invalid canister assets for production release.");
            };
            i += 1;
        };
    };

    ////////////////////////////////////////
    // Admin inventory management things //
    //////////////////////////////////////

    public shared({caller}) func grantUnownedDeckToPrincipal(principal : Text) : () {
        ignore grantNFT(Principal.fromText(principal));
    };

    public shared({caller}) func mintNewDecks(count : Nat) : () {
        // This is gnarly
        nfts := Array.thaw(Array.append<NFT>(Array.freeze(nfts), Array.freeze(Array.init<NFT>(count, { var owner = null }))));
    };

    ///////////////////////////
    // General logic things //
    /////////////////////////

    func getUnclaimedNFTs() : [var NFT] {
        Array.thaw(Array.filter<NFT>(Array.freeze(nfts), func (x: NFT) { x.owner == null }));
    };

    func _getPrincipalNFT(principal : Principal) : ?Nat {
        var i = 0;
        while (i < nfts.size()) {
            if (nfts[i].owner == ?principal) {
                return ?i;
            };
            i += 1;
        };
        return null;
    };

    func grantNFT(principal : Principal) : ?NFT {
        var i = 0;
        while (i < nfts.size()) {
            if (Option.isNull(?nfts[i])) {
                var nft = nfts[i];
                nft.owner := ?principal;
                return ?nft;
            };
            i += 1;
        };
        return null;
    };

    /////////////////////////////////
    // Essential public interface //
    ///////////////////////////////

    public shared query func serveCard(index : Nat) : async ?Text {
        tarotCards[index];
    };

    public shared query func serveAllCards() : async [?Text] {
        Array.freeze(tarotCards);
    };

    public shared query func supplyTotal() : async Nat {
        nfts.size();
    };

    public shared query func supplyAvailable() : async Nat {
        getUnclaimedNFTs().size();
    };

    public shared query func getPrincipalNFT(principal : Principal) : async ?Nat {
        _getPrincipalNFT(principal);
    };

    public shared({caller}) func transferNFT(transferTo : Principal) : async () {
        var i = 0;
        while (i < nfts.size()) {
            if (nfts[i].owner == ?caller) {
                nfts[i].owner := ?transferTo;
            };
        };
    };

    public shared({caller}) func claimNFT() : async () {
        // maybe use motoko base response
        if (getUnclaimedNFTs().size() == 0) {
            throw Error.reject("There are no available NFTs.");
        };
        if (Option.isNull(_getPrincipalNFT(caller))) {
            throw Error.reject("Principals can only have one NFT.");
        };
        ignore grantNFT(caller);
    };

    ////////////////////
    // Gotta have it //
    //////////////////

    public shared query func ping() : async Text {
        return "Pong";
    };
};
