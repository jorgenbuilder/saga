import Array "mo:base/Array";
import Error "mo:base/Error";
import HashMap "mo:base/HashMap";
import Random "mo:base/Random";
import Text "mo:base/Text";

import Types "./types";

actor {


    // Internal State --------

    var users : Types.UserMap = HashMap.HashMap(10, Text.equal, Text.hash);


    // Public Methods --------

    // Card Draw

    public func drawCard () : async Types.DrawSeed {

        // Provides two random bytes to generate card index and orientation.
        // TODO: Validate user has tokens available. Don't burn.

        let r = Random.Finite(await Random.blob());
        (r.byte(), r.byte())

    };

    // Users

    public query func listUsers () : async [Types.User] {
        var list : [Types.User] = [];
        for ((handle, user) in users.entries()) {
            list := Array.append(list, [user]);
        };
        list;
    };

    public query func getUser (handle : Types.UserHandle) : async ?Types.User {
        users.get(handle);
    };

    public func addUser (user: Types.User) : async () {
        if (users.get(user.handle) != null) {
            throw Error.reject("Handle already exists");
        };
        users.put(user.handle, user);
    };
}