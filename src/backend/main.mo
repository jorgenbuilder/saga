import HashMap "mo:base/HashMap";
import Error "mo:base/Error";
import Text "mo:base/Text";

actor {
    type Handle = Text;
    type User = { handle : Handle; tokenBalance : Nat; isAdmin : Bool; };
    type UserMap = HashMap.HashMap<Handle, User>;

    var users : UserMap = HashMap.HashMap(1, Text.equal, Text.hash);

    public func getUser (handle : Handle) : async ?User {
        users.get(handle);
    };

    public func addUser (user: User) : async () {
        if (users.get(user.handle) != null) {
            throw Error.reject("Handle already exists");
        };
        users.put(user.handle, user);
    };
}