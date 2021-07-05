import Array "mo:base/Array";
import Error "mo:base/Error";
import Float "mo:base/Float";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
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
    type Index = Nat;
    type Timestamp = Int;

    // Tarot

    type TarotCardSuits = Text; //{#trump : Text; #wands : Text; #pentacles : Text; #swords : Text; #cups : Text;};

    type TarotCard = {
        index : Nat;
        name : Text;
        number : Nat;
        suit : TarotCardSuits;
    };

    type TarotCardData1 = {
        index : Nat;
        arcana : Text;
        keywords : [Text];
        meanings : {
            light : [Text];
            shadow : [Text];
        };
        element : Text;
        questions : [Text];
        fortunes : [Text];
        affirmation : Text;  // Optional, but indicating such breaks my import script. Empty strings instead.
        archetype : Text;  // Optional, but indicating such breaks my import script. Empty strings instead.
        hebrew : Text;  // Optional, but indicating such breaks my import script. Empty strings instead.
        numerology : Text;  // Optional, but indicating such breaks my import script. Empty strings instead.
        astrology : Text;  // Optional, but indicating such breaks my import script. Empty strings instead.
        mythology : Text;  // Optional, but indicating such breaks my import script. Empty strings instead.
    };

    type TarotCardData2 = {
        index : Nat;
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
        cardIndex: Nat;
        card: TarotCard;
        data1: TarotCardData1;
        data2: TarotCardData2;
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

    let cardDraws = DB.Database<Id, CardDraw>(getNextId, Nat.equal, #hash(Hash.hash));

    stable let tarotCards = Array.init<?TarotCard>(78, null);
    stable let tarotCardData1 = Array.init<?TarotCardData1>(78, null);
    stable let tarotCardData2 = Array.init<?TarotCardData2>(78, null);


    // Private Methods --------

    // Admin

    public func importTarotCards (cards: [TarotCard]) : async () {
        // TODO: Move the tests from the frontend into here
        for (card in Iter.fromArray(cards)) {
            tarotCards[card.index] := ?card;
        };
    };

    public func listTarotCards () : async [?TarotCard] {
        Array.freeze(tarotCards);
    };

    public func importTarotCardData1 (cards: [TarotCardData1]) : async () {
        for (card in Iter.fromArray(cards)) {
            tarotCardData1[card.index] := ?card;
        };
    };

    public func listTarotCardData1 () : async [?TarotCardData1] {
        Array.freeze(tarotCardData1);
    };

    public func importTarotCardData2 (cards: [TarotCardData2]) : async () {
        for (card in Iter.fromArray(cards)) {
            tarotCardData2[card.index] := ?card;
        };
    };

    public func listTarotCardData2 () : async [?TarotCardData2] {
        Array.freeze(tarotCardData2);
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
        let index = do {
            switch (randomness.byte()) {
                case null { throw Error.reject("Randomness failure"); };
                case (?seed) { Int.abs(Float.toInt(Float.fromInt(Nat8.toNat(seed)) / 255.0 * 100.0)); };
            };
        };
        
        let draw = {
            principal = principal;
            theme = theme;
            timestamp = Time.now();
            cardIndex = index;
            card = do {
                switch (tarotCards[index]) {
                    case null { throw Error.reject("Missing data"); };
                    case (?card) { card; };
                };
            };
            data1 = do {
                switch (tarotCardData1[index]) {
                    case null { throw Error.reject("Missing data"); };
                    case (?card) { card; };
                };
            };
            data2 = do {
                switch (tarotCardData2[index]) {
                    case null { throw Error.reject("Missing data"); };
                    case (?card) { card; };
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