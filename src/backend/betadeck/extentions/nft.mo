// Ripping this from Toniq's source again
// I don't know if a standardized way to mint NFT is desireable.
// This extension allows us to mint NFTs and find out who owns an NFT
// I need to be able to see if a user owns one of the NFTs in the canister

type MintRequest = {
    to : User;
    metadata : ?Blob;
};

type Token_NonFungible = actor {
    bearer: shared query (token : TokenIdentifier) -> async Result<AccountIdentifier, CommonError>;
    mintNFT: shared (request : MintRequest) -> async ();
};