import HashMap "mo:base/HashMap";

module {


    // Randomness
    // Defer translating random bytes into usable numbers to the frontend

    public type DrawSeed = (?Nat8, ?Nat8);


    // Users

    public type UserHandle = Text;
    public type UserMap = HashMap.HashMap<UserHandle, User>;
    public type User = {
        handle : UserHandle;
        tokenBalance : Nat;
    };

}

