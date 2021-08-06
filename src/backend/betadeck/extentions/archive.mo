// Ripping from Toniq again. This one has a "TODO" at the top of the source.
// This is one of the more useful extensions. I'd like to make it work.
// Basically, adds transaction history to a token

type Date = Nat64;
type TransactionId = Nat;
type Transaction = {
    txid : TransactionId;
    request : TransferRequest;
    date : Date;
};

type TransactionRequest = {
    query : {
        #txid : TransactionId;
        #user : User;
        #date : (Date, Date);  // range
        #page : (Nat, Nat);  // per page, page
        #all;
    };
    token : TokenIdentifier;
};

type Token_Archive = actor {
    // This method name sucks. Lost of the method names in the EXT standard... I have opinions about.
    add : shared (request : TransferRequest) -> TransactionId;
    transactions : query (request : TransactionRequest) -> async Result<[Transaction], CommonError>;
};