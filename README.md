# Saga Tarot

[saga.cards](https://saga.cards).

[Figma](https://www.figma.com/file/fR4pUyIydAzbrfhump2WAI/Untitled?node-id=0%3A1)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is configured to deploy to the Internet Computer. You will need [dfx](https://sdk.dfinity.org/docs/quickstart/local-quickstart.html#download-and-install).

## Available Scripts

In the project directory, you can run:

### `npm start` (CRA)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` (CRA)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` (CRA)

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy-local`

Deploys the app to the local IC testnet. Make sure it's running: `dfx start`.\
Access the testnet canister at `<canister_id>.localhost:8000` (get canister id: `dfx canister id tarot_frontend`).

### `npm run eject` (CRA)

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More (CRA)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Stories / Epics

- [ ] users receive a "browser not supported" message if they don't have some kind of biometric sensor
    - [ ] Create "browser not supported" screen
    - [ ] Implement "browser not supported" as some kind of middleware
- [ ] users can utilize a blockchain token system to perform card draw
    - [ ] users can't draw a card if they do not have any draw tokens
    - [ ] users are presented with prompt to purchase tokens if they want to draw a card but don't have any tokens
    - [ ] users can have tokens
    - [ ] users can keep their free daily tokens for one day, then they disappear
    - [ ] users can keep their purchased tokens forever
    - [ ] users can receive a number of free daily tokens per day
    - [ ] users will have to purchase tokens to exhaust daily draw options at least most of the time
    - [ ] users can still receive free daily tokens if they have a purchased token balance
    - [ ] users can purchase tokens using a credit card
    - [ ] drawing a card reduces a users's token balance by 1
    - [ ] spending a token should reveal a creative animation indicating the reducation in their balance
    - [ ] purchasing tokens should reveal a creative animation indicating the increase in their balance
- [ ] users can receive arbitrary burn-after-reading messages from our readings oracle
    - [ ] users can receive an initial briefing in our voice the first time they use the app
    - [ ] users can receive individualized BAR messages
- [ ] users can draw tarot cards
    - [ ] users can randomly receive one of the 78 unique tarot cards in right-side-up or up-side-down orientation
- [ ] users can receive a reading based on a single card draw
    - [ ] users can select from multiple themes for a card draw
    - [ ] users receive a themetically relevant, accurate interpretation in 100 words or less for any card in any orientation in any theme that we deploy with
    - [ ] users can consume content of varying length, format, etc
    - [ ] users can percieve a high-level vibe of the reading almost immediately upon drawing their card
    - [ ] users can feel a sense of ownership and personalization for each of their readings
        - [ ] users can reveal additional meaning for a reading via additional creative interactions
            - [ ] users can reveal a contextually-relevant question via creative interaction to prompt further introspection
    - [ ] users can see thematically relevant visuals in their reading, so that the reading experience is more pleasant and the vibe of the reading can be further established
        - [ ] users can see an "elemental badge" associated with their card draw, so that the reading experience is more pleasant and the vibe of the reading can be further established
    - [ ] users can reveal their card draws with Hearthstone-like animation qualities so that they can feel the joy of digital card experience
    - [ ] users can see a beautifully typeset reading from any modern phone and browser combination
    - [ ] user readings are associated with user accounts
    - [ ] user readings last for one day before being discarded
    - [ ] users can easily see that they can scroll to see their reading after drawing their card
- [ ] users can have accounts
    - [ ] Create the initial user type
    - [ ] Create an object/actor to store user accounts
    - [ ] Familiarize with WebAuthn
    - [ ] Build a WebAuthProvider
    - [ ] Mock up login flow with knowledge of WebAuthn
    - [ ] Build Motoko WebAuthn backend methods
    - [ ] users can create an account using their device's biometric sensors, so that they can access the app
    - [ ] users can create a unique handle so their content, readings, and friends can identify them in the way they choose
    - [ ] users can access their existing account using their device's biometric sensors
- [ ] users can chat with other users
    - [ ] users can text chat with other users
    - [ ] users can connect with other users
- [ ] users can share their readings
    - [ ] users can export a png image version of their reading so that they can share it arbitrarily
    - [ ] users can export a png image summary version of their reading so that they can share a summary with the link to the full reading
    - [ ] users can share a fully interactive version of their reading with other users in the app

# Reference Materials

- [Card Inspiration](inspiration.md)
- [Token Example: HZLD](https://github.com/SuddenlyHazel/hzld_token/blob/main/token.mo)
- [Canister Architecture Example: Reversi](https://github.com/ninegua/reversi/blob/master/src/reversi/main.mo)
- [Canister Architecture Example: CanCan](https://github.com/dfinity/cancan/tree/6b28a79b5415261174bd82bc6f75ff1a3c316b7e/backend)
- [Motoko NPM](https://npm.io/search/keyword:motoko)
- [II Client Auth Flow](https://github.com/dfinity/internet-identity/blob/main/docs/internet-identity-spec.adoc#client-auth-protocol)
- https://www.npmjs.com/package/@dfinity/identity
