// Alright, let's start by ripping EXT
// GOAL: Have an NFT in Stoic wallet
// TODO: Have a look at what Plug supports for tokens

// This is the stuff to support IC ledger's legacy account ID stuff. It uses a different crypto algo than the more modern principals
// I'm not sure what the deal with the SubAccount is yet, though.
// TODO: What's the deal with sub account?
type AccountIdentifier = Text;
type SubAccount = [Nat8];

// So here's the part where we allow a user to use either a legacy account id, or the more modern principal
// The Toniq source code calls out the fact that a Principal can reflect a user or a canister
type User = {
    #address : AccountIdentifier;
    #principal : Principal;
};

// Balance is an unbound positive whole number
type Balance = Nat;

// A global UUID for a token.
// The EXT standard defines this as "hex encoded, domain seperator + canister id + token index, variable length"
// I'd like to have a well documented function to perfom that concatenation, as some questions naturally pop to mind in reading that
// TODO: Make a token identifier generation function
type TokenIdentifier = Text;

// This is the index of a token within a canister. As the Toniq source indicates, using a Nat32 means we can have 2^36 unique tokens in a single canister.
type TokenIndex = Nat32;

// The namesake of the EXT standard. Simply a string like "burnable" or "archive" or "ledger" indicating an extension to the base token standard.
type Extension = Text;

// Okay, so not sure exactly what this is going to be useful for. This is just some arbitrary data that will be passed around with a transaction.
type Memo = Blob;

// One of the things that I don't love about reading the types of a program first is that they don't seem to be good at describing certain things about the program.
// The first time I read these next types, it was really unclear to me how they fit into the picture. Feels like looking at a func interface would be more useful.

// Callbacks for notifications
// Token transfer requests can optionally supply a boolean notify param. If true, this will call the provided notify callback on the provided notify service (canister)
type NotifyCallback = shared (TokenIdentifier, User, Balance, Memo) -> async ?Balance;
// Let's unpack this a little. We're declaring that a callback must be a shared function that accepts a global token uuid for the token to be transfered, a user to transfer the token to,
// actually Toniq source says that this is the origin user, not the destination... not really sure how that works.
// the quantity of the token to transfer, and an arbitrary blob... which really seems like it should be optional. Rebbu added some color: "our Metadata scheme is just Blob - reason being
// is that there is native serialization/deserialization library for Motoko that can convert an object to/from a Blob..." so I guess one can just stuff an arbitray object in here to
// represent transaction metadata. The callback must then asyncronously return an optional Balance... What does that optional balance return value indicate? It indicates the balance
// actually transfered. The notify callback allows the receiver to only accept a portion of the balance of a transaction.
// This next one just specifies a canister that has the capabilities defined by the callback. There are definitely some typos in the Toniq source... pretty sure this is right:
type NotifyService = actor { tokenTransferNotification : NotifyCallback }; 

// You can request a user's balance for a token
type BalanceRequest = {
    user : User;
    token : TokenIdentifier;
};
type BalanceResponse = Result<Balance, {
    #InvalidToken : TokenIdentifier;
    #Other : Text;
}>;

// You can request to transfer a token balance between users
type TransferRequest = {
    from : User;
    to : User;
    token : TokenIdentifier;
    amount : Balance;
    memo : Memo;
    notify : Bool;
    subaccount : ?SubAccount;
};
type TransferResponse = Result<Balance, {
    #Unauthorized : AccountIdentifier;
    #InsufficientBalance;
    #Rejected;
    #InvalidToken : TokenIdentifier;
    #CannotNotify : AccountIdentifier;
    #Other : Text;
}>;

type Token = actor {
    extensions : query () -> async [Extension];
    balance : query (request : BalanceRequest) -> async BalanceResponse;
    transfer : shared (request : TransferRequest) -> async TransferResponse;
};