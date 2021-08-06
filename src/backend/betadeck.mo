/*
 * - Transfer tokens (base)
 * - Query token balance (base)
 * - Query user ledger presence (custom, does this person own one of these decks?)
 * - Limited edition decks and unlimited edition decks (finite tokens and infinite, custom?)
 * - Fuck, tangent, I really want to create certified portable data records of request to draw and certified random draw and certified ownership of deck used to draw. User did this thing at this time with this other thing: irreducible fact, totally portable.
 * - Transaction history (archive)
 * - 
 */

// Gave the standards a good read, let's write some canister Motoko next.


// Whoa, what the fuck is "this" doing here
// TODO: Look into Motoko "this"
shared (install) actor class betadeck(init_minter: Principal) = this {

    private let EXTENSIONS : [Text] = [];

    shared query func extensions () : async [Text] {
        EXTENSIONS;
    };
};