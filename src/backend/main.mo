import Array "mo:base/Array";
import Error "mo:base/Error";
import Float "mo:base/Float";
import Hash "mo:base/Hash";
import Int "mo:base/Int";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Principal "mo:base/Principal";
import Random "mo:base/Random";
import Time "mo:base/Time";

import DB "mo:crud/Database";


actor {

    // Types --------

    // Datastore

    type Id = Nat;
    type Timestamp = Int;

    // Tarot

    type TarotCardSuits = {#trump; #wands; #pentacles; #swords; #cups;};

    type TarotCard = {
        index : Nat;
        name : Text;
        number : Nat;
        suit : TarotCardSuits;
    };

    type TarotCardData1 = {
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

    type TarotCardData2 = {
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

    type CardDraw = {
        principal : Principal;
        card: Nat;  // TarotCard;
        reversed : Bool;
        timestamp : Timestamp;
        theme: Text;
    };

    type NextAvailableDraw = {
        principal : Principal;
        theme : Text;
        now : Timestamp;
        lastDraw : ?Timestamp;
        interval : Timestamp;
        nextDraw : Timestamp;
    };


    // Constants --------

    let drawThemes : [Text] = ["general", "love", "career"];
    let drawInterval : Int = 1 * Float.toInt(1e9) * 60 * 60 * 24;


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

    public func getExistingDraw (principalText : Text, theme : Text) : async ?(Id, CardDraw) {
        // TODO: Verify the principal somehow? Require a cyrptographic signature (face id to draw)??? Overkill maybe
        let principal = Principal.fromText(principalText);  // This provides some validation for the principal

        if (Array.find<Text>(drawThemes, func (t : Text) { t == theme; }) == null) {
            throw Error.reject("Unsupported draw theme");
        };

        Array.filter<(Id, CardDraw)>(Iter.toArray(cardDraws.entries()), func (id : Id, x : CardDraw) {
            if (x.principal != principal) {
                return false;
            };
            if (x.theme != theme) {
                return false;
            };
            if (Time.now() - x.timestamp > drawInterval) {
                return false;
            };
            return true;
        }).vals().next();
    };

    public func nextDrawTime (principalText : Text, theme : Text) : async NextAvailableDraw {
        // TODO: Verify the principal somehow? Require a cyrptographic signature (face id to draw)??? Overkill maybe
        let principal = Principal.fromText(principalText);  // This provides some validation for the principal

        if (Array.find<Text>(drawThemes, func (t : Text) { t == theme; }) == null) {
            throw Error.reject("Unsupported draw theme");
        };

        let existingDraw = await getExistingDraw(principalText, theme);

        return {
            principal = principal;
            theme = theme;
            now = Time.now();
            interval = drawInterval;
            lastDraw = do {
                switch (existingDraw) {
                    case null { null; };
                    case (?(id, draw)) { ?draw.timestamp };
                };
            };
            nextDraw = do {
                switch (existingDraw) {
                    case null { Time.now(); };
                    case (?(id, draw)) { draw.timestamp + drawInterval; };
                };
            };
        };
    };

    public func createDailyDraw (principalText : Text, theme : Text) : async CardDraw {
        // TODO: This should be signed by the principal drawing the card AND the application principal
        // TODO: Verify the principal somehow? Require a cyrptographic signature (face id to draw)??? Overkill maybe
        let principal = Principal.fromText(principalText);  // This provides some validation for the principal

        if (Array.find<Text>(drawThemes, func (t : Text) { t == theme; }) == null) {
            throw Error.reject("Unsupported draw theme");
        };

        switch (
            await getExistingDraw(principalText, theme)
        ) {
            case null { (); };
            case (?(id, existingDraw)) {
                return existingDraw;
            };
        };

        let randomness = Random.Finite(await Random.blob());
        
        let draw = {
            principal = principal;
            theme = theme;
            timestamp = Time.now();
            card = do {
                switch (randomness.byte()) {
                    case null { throw Error.reject("Randomness failure"); };
                    case (?seed) { Int.abs(Float.toInt(Float.fromInt(Nat8.toNat(seed)) / 255.0 * 100.0)); };
                };
            };
            reversed = do {  // TODO: Get tarot card data from datastore instead of returning a Nat for cardindex
                switch (randomness.byte()) {
                    case null { throw Error.reject("Randomness failure"); };
                    case (?seed) { Nat8.toNat(seed) > Int.abs(Float.toInt(0.66 * 255.0)); };
                };
            };
        };

        ignore cardDraws.create(draw);
        return draw;
    };

    public func listPrincipleDailyDraws (principalText : Text) : async [CardDraw] {
        // Return any card draws from the principal today
        // Restrict access to the principal

        // TODO: Verify the principal somehow? Require a cyrptographic signature (face id to draw)??? Overkill maybe
        let principal = Principal.fromText(principalText);  // This provides some validation for the principal

        Array.mapFilter<(Id, CardDraw), CardDraw>(Iter.toArray(cardDraws.entries()), func (id, draw) {
            if (draw.principal != principal) { return null; };
            if (draw.timestamp < Time.now() - drawInterval) { return null; };
            ?draw;
        });
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