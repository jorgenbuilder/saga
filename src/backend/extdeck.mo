import Array "mo:base/Array";
import Cycles "mo:base/ExperimentalCycles";
import Debug "mo:base/Debug";
import Error "mo:base/Error";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Result "mo:base/Result";

import AID "mo:ext/util/AccountIdentifier";
import ExtCore "mo:ext/Core";
import ExtNonFungible "mo:ext/NonFungible";

shared actor class BetaDeck (creator : Principal) = canister {

    ////////////
    // Types //
    //////////

    // Tarot
    type Asset = Text;
    // Ext: Core
    type AccountIdentifier = ExtCore.AccountIdentifier;
    type SubAccount = ExtCore.SubAccount;
    type User = ExtCore.User;
    type Balance = ExtCore.Balance;
    type TokenIdentifier = ExtCore.TokenIdentifier;
    type TokenIndex  = ExtCore.TokenIndex;
    type Extension = ExtCore.Extension;
    type CommonError = ExtCore.CommonError;
    type BalanceRequest = ExtCore.BalanceRequest;
    type BalanceResponse = ExtCore.BalanceResponse;
    type TransferRequest = ExtCore.TransferRequest;
    type TransferResponse = ExtCore.TransferResponse;
    // Ext: Nonfungible
    type MintRequest  = ExtNonFungible.MintRequest;

    ////////////
    // State //
    //////////

    stable var boss : Principal = creator;

    let EXTENSIONS : [Extension] = ["@ext/common", "@ext/nonfungible"];

    stable let assets : [var ?Asset] = Array.init<?Asset>(80, null);

    stable var nextTokenId : TokenIndex = 0;

    stable var stableLedger : [(TokenIndex, AccountIdentifier)] = [];
    
    var ledger : HashMap.HashMap<TokenIndex, AccountIdentifier> = HashMap.fromIter(stableLedger.vals(), 0, ExtCore.TokenIndex.equal, ExtCore.TokenIndex.hash);

    system func preupgrade() {
        stableLedger := Iter.toArray(ledger.entries());
    };

    system func postupgrade() {
        stableLedger := [];
    };

    ///////////////
    // EXT Funs //
    /////////////

    // Ext core

    public shared query func extensions () : async [Extension] {
        EXTENSIONS;
    };

    public shared query func balance (request : BalanceRequest) : async BalanceResponse {
        if (not ExtCore.TokenIdentifier.isPrincipal(request.token, Principal.fromActor(canister))) {
            return #err(#InvalidToken(request.token));
        };
        let token = ExtCore.TokenIdentifier.getIndex(request.token);
        let aid = ExtCore.User.toAID(request.user);
        switch (ledger.get(token)) {
            case (?owner) {
                if (AID.equal(aid, owner)) return #ok(1);
                return #ok(0);
            };
            case Null #err(#InvalidToken(request.token));
        };
    };

    public shared({ caller }) func transfer (request : TransferRequest) : async TransferResponse {
        if (request.amount != 1) {
            return #err(#Other("Only logical transfer amount for an NFT is 1, got" # Nat.toText(request.amount) # "."));
        };
        if (not ExtCore.TokenIdentifier.isPrincipal(request.token, Principal.fromActor(canister))) {
            return #err(#InvalidToken(request.token));
        };
        let token = ExtCore.TokenIdentifier.getIndex(request.token);
        let owner = ExtCore.User.toAID(request.from);
        let agent = AID.fromPrincipal(caller, request.subaccount);
        let recipient = ExtCore.User.toAID(request.to);
        switch (ledger.get(token)) {
            case (?tokenOwner) {
                if (AID.equal(owner, tokenOwner) and AID.equal(owner, agent)) {
                    ledger.put(token, recipient);
                    return #ok(request.amount);
                };
                #err(#Unauthorized(owner));
            };
            case Null return #err(#InvalidToken(request.token));
        };
    };

    // Ext nonfungible

    public shared query func bearer (token : TokenIdentifier) : async Result.Result<AccountIdentifier, CommonError> {
        if (not ExtCore.TokenIdentifier.isPrincipal(token, Principal.fromActor(canister))) {
            return #err(#InvalidToken(token));
        };
        let i = ExtCore.TokenIdentifier.getIndex(token);
        switch (ledger.get(i)) {
            case (?owner) #ok(owner);
            case Null #err(#InvalidToken(token));
        };
    };

    public shared({ caller }) func mintNFT (request : MintRequest) : async () {
        assert(caller == boss);
        let recipient = ExtCore.User.toAID(request.to);
        let token = nextTokenId;

        ledger.put(token, recipient);
        nextTokenId := nextTokenId + 1;
    };

    // Just useful things

    public shared({ caller }) func changeBoss (newBoss : Principal) {
        assert(caller == boss);
        boss := newBoss;
    };

    public query func readLedger () : async [(TokenIndex, AccountIdentifier)] {
        Iter.toArray(ledger.entries());
    };

    public func acceptCycles() : async () {
        let available = Cycles.available();
        let accepted = Cycles.accept(available);
        assert (accepted == available);
    };

    public query func availableCycles() : async Nat {
        return Cycles.balance();
    };

    /////////////////
    // Tarot Funs //
    ///////////////

    // Administrative

    stable var productionMode : Bool = false;

    public shared({caller}) func uploadAsset(index : Nat, payload : Text) : async Result.Result<Text, CommonError> {
        assert(caller == boss);
        if (productionMode) return #err(#Other("Cannot edit assets once canister is in production mode."));
        assets[index] := ?payload;
        #ok("Ok");
    };

    public shared query func validateAssets () : async Result.Result<Text, CommonError> {
        var i = 0;
        var missingAssets : Bool = false;
        while (i < 79) {
            if (Option.isNull(assets[i])) {
                missingAssets := true;
                Debug.print("Missing asset #" # Nat.toText(i));
            };
            i += 1;
        };
        if (missingAssets) {
            #err(#Other("Invalid canister assets for production release."));
        } else {
            #ok("Assets are valid");
        };
    };

    public shared({caller}) func lockAssets() : async Result.Result<Text, CommonError> {
        productionMode := true;
        #ok("This canister is now locked.");
    };

    // Serving NFT assets

    public shared query func serveAsset(index : Nat) : async ?Text {
        assets[index];
    };

    // Querying a user's NFT ownership

    public shared query func getUserTokens (user: User) : async [TokenIdentifier] {
        // Not really sure how to come up with a tokenidentifier
        var i = 0;
        Array.map<AccountIdentifier, TokenIdentifier>(Iter.toArray<AccountIdentifier>(ledger.entries()), func (entry : AccountIdentifier) {
            i += 1;
            return ""
        });
    };

};
