import Array "mo:base/Array";
import Blob "mo:base/Blob";
import Bool "mo:base/Bool";
import Debug "mo:base/Debug";
import Error "mo:base/Error";
import Int "mo:base/Int";
import Int8 "mo:base/Int";
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Time "mo:base/Time";


shared({ caller }) actor class AlphaDeck() {

    ////////////
    // Types //
    //////////

    type CardAsset = Text;
    type NFT = {
        var owner : Principal;
        var timestamp : Int;
        var alias : ?Text;
    };
    type frozeNFT = {
        owner : Principal;
        timestamp : Int;
        alias : ?Text;
    };

    /////////////
    // Stores //
    ///////////

    stable let tarotCards : [var ?CardAsset] = Array.init<?CardAsset>(80, null);
    stable var nfts : [var NFT] = [var];

    /////////////
    // Admin  //
    ///////////

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
        if (Time.now() - lockStage1Time <= 60_000_000_000) {
            productionMode := true;
            return "This canister is now locked.";
        };
        "To lock this canister, call lockForProduction then confirmLockForProduction within one minute.";
    };

    public query func validateAssets () : async () {
        var i = 0;
        while (i < 79) {
            if (Option.isNull(tarotCards[i])) {
                throw Error.reject("Invalid canister assets for production release.");
            };
            i += 1;
        };
    };

    //////////////
    // Private //
    ////////////

    func _getPrincipalNFT(principal : Principal) : ?NFT {
        Array.find<NFT>(Array.freeze(nfts), func (nft) { nft.owner == principal });
    };

    /////////////
    // Public //
    ///////////

    public shared query func serveCard(index : Nat) : async ?Text {
        Debug.print("Query: serve card: " # Nat.toText(index) # ".");
        tarotCards[index];
    };

    public shared query func supplyTotal() : async Nat {
        let size = nfts.size();
        Debug.print("Query: total supply: " # Nat.toText(size));
        size;
    };

    public shared query func listNFT() : async [frozeNFT] {
        Debug.print("Query: List all NFTs.");
        Array.map<NFT, frozeNFT>(Array.freeze(nfts), func (nft) {
            return {
                owner = nft.owner;
                timestamp = nft.timestamp;
                alias = nft.alias;
            };
        });
    };

    public shared query func getPrincipalNFT(principal : Principal) : async ?frozeNFT {
        Debug.print("Query: NFT owned by principal.");
        switch (_getPrincipalNFT(principal)) {
            case (?nft) return ?{
                owner = nft.owner;
                timestamp = nft.timestamp;
                alias = nft.alias;
            };
            case (null) null;
        };
    };

    public shared func claimNFT(principal: Principal) : async ()  {
        Debug.print("Func: Claiming an NFT: " # Principal.toText(principal) # ".");
        if (not Option.isNull(_getPrincipalNFT(principal))) {
            throw Error.reject("Principals can only have one NFT.");
        };
        var mint : NFT = {
            var timestamp = Time.now();
            var owner = principal;
            var alias = null;
        };
        nfts := Array.thaw<NFT>(Array.append<NFT>(Array.freeze(nfts), [mint]));
        return;
    };

    ////////////////////
    // Gotta have it //
    //////////////////

    public shared query func ping() : async Text {
        return "Pong";
    };
};
