import Hash "mo:base/Hash";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Random "mo:base/Random";
import Time "mo:base/Time";

import DB "mo:crud/Database";


actor {

    // Types --------

    // Datastore

    public type Id = Nat;
    public type Timestamp = Int;

    // Tarot

    public type TarotCard = {
        index : Nat;
        name : Text;
        number : Nat;
        suit : {#trump; #wands; #pentacles; #swords; #cups;};
    };

    public type TarotCardData1 = {
        arcana : Text;
        keywords : [Text];
        meanings : {
            light : [Text];
            shadow : [Text];
        };
        element : Text;
        questions : [Text];
        fortunes : [Text];
        affirmation : ?Text;
        archetype : ?Text;
        hebrew : ?Text;
        numerology : ?Text;
        astrology : ?Text;
        mythology : ?Text;
    };

    public type TarotCardData2 = {
        description : Text;
        keywordsGeneralUpright : [Text];
        keywordsGeneralReversed : [Text];
        keywordsLoveUpright : [Text];
        keywordsLoveReversed : [Text];
        keywordsCareerUpright : [Text];
        keywordsCareerReversed : [Text];
        meaningUpright : Text;
        meaningReversed : Text;
        meaningLoveUpright : Text;
        meaningLoveReversed : Text;
        meaningCareerUpright : Text;
        meaningCareerReversed : Text;
    };

    public type DrawTheme = {#general; #love; #career;};

    public type CardDraw = {
        principal : Principal;
        card : TarotCard;
        reversed : Bool;
        timestamp : Timestamp;
        theme: DrawTheme;
    };


    // Data Store --------

    func getNextId (record: Any, id: ?Id) : Id {
        switch (id) {
            case (?id) id + 1;
            case (null) 0;
        }
    };

    let tarotCards = DB.Database<Id, TarotCard>(getNextId, Nat.equal, #hash(Hash.hash));
    let tarotCardData1 = DB.Database<Id, TarotCardData1>(getNextId, Nat.equal, #hash(Hash.hash));
    let tarotCardData2 = DB.Database<Id, TarotCardData2>(getNextId, Nat.equal, #hash(Hash.hash));
    let cardDraws = DB.Database<Id, CardDraw>(getNextId, Nat.equal, #hash(Hash.hash));


    // Private Methods --------

    // Admin

    func importTarotCards (cards: [TarotCard]) : async () {
        // tarotCards.read();
    };

    func listTarotCards () : async [TarotCard] {
        let cards = tarotCards.entries();
        var response : [TarotCard] = [];
        for (card in cards) {
            // Push card
        };
        return response;
    };

    func importTarotCardData1 (cards: [TarotCard]) : async () {
        // tarotCardData1.read();
    };

    func listTarotCardData1 () : async [TarotCardData1] {
        let cards = tarotCardData1.entries();
        var response : [TarotCardData1] = [];
        for (card in cards) {
            // Push card
        };
        return response;
    };

    func importTarotCardData2 (cards: [TarotCard]) : async () {
        // Expose an API for the principle to upload card data set #1
    };

    func listTarotCardData2 () : async [TarotCardData2] {
        let cards = tarotCardData2.entries();
        var response : [TarotCardData2] = [];
        for (card in cards) {
            // Push card
        };
        return response;
    };


    // Public Methods --------

    // Card Draw

    public func createDailyDraw (principal : Principal, theme : DrawTheme) : async CardDraw {
        // TODO: Verify the principal somehow? Require a cyrptographic signature (face id to draw)??? Overkill maybe
        // TODO: Check to see if a draw already exists for today + principal + theme
        let timestamp = Time.now();
        let randomness = Random.Finite(await Random.blob());
        let reversed = randomness.byte() > 0.66 * 255;
        let cardIndex = randomness.byte() / 255 * 100;
        return {
            principal: principal;
            theme: theme;
            timestamp: timestamp;
            card: cardIndex;
            reversed: reversed;
        };
    };

    public func listPrincipleDailyDraws () : async [CardDraw] {
        // Return any card draws from the principal today
        // Restrict access to the principal
        let draws = cardDraws.entries();
        let userDraws : [CardDraw] = [];
        for (draw in draws) {
            // Filter and push
        };
        return userDraws;
    };

    public func getCardDraw (id: Nat) : async DB.Res<CardDraw> {
        // Get a card draw by Id
        // Require a cryptographic signature from the principal
        cardDraws.read(id);
    };

    public query func countDraws () : async Nat {
        Iter.size(cardDraws.entries());
    };

}