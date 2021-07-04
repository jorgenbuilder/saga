const StyleConstants = {
    colours: {
        dark: {
            uiDark: 'hsl(0, 8%, 10%)',
            uiMedium: 'hsl(0, 32%, 20%)',
            uiLight: 'hsl(0, 40%, 30%)',
        },
    },
    dimensions: {
        corners: {
            default: {
                value: 20,
                unit: 'px',
            },
        },
    },
};

const TarotCardStyleConstants = {
    // The standard size for our tarot style playing cards is 2.75” x 4.75”
    // https://printninja.com/printing-resource-center/printing-options/custom-game-printing/card-dimensions/tarot-style-playing-cards#:~:text=The%20standard%20size%20for%20our,game%20that%20requires%20multiple%20decks.
    width: '2.75in',
    height: '4.75in',
    corners: '.125in',
};

const ThreeTarotCardSize = {
    // Smallest whole numbers with preserved aspect ratio
    width: 11,
    height: 19,
    corners: .5,
};

export {
    StyleConstants,
    TarotCardStyleConstants,
    ThreeTarotCardSize,
}