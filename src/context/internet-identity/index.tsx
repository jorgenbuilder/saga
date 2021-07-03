import { createContext, ReactNode, useMemo, useState } from 'react';

import * as identity from '@dfinity/identity';
import { Principal } from '@dfinity/principal';
import { useEffect } from 'react';

interface InternetIdentityReady {
    kind: "authorize-ready"
}

interface InternetIdentityAuthResponse {
    kind: "authorize-client-success";
    delegations: [{
        delegation: {
            pubkey: Uint8Array;
            expiration: bigint;
            targets?: Principal[];
        };
        signature: Uint8Array;
    }];
    userPublicKey: Uint8Array;
}

interface InternetIdentityAuthResponseFailure {
    kind: "authorize-client-failure";
    text: string;
}

interface InternetIdentityState {
    authenticate: () => void;
    isAuthed?: boolean;
};

const DefaultState: InternetIdentityState = {
    authenticate: () => {},
    isAuthed: undefined,
};

const InternetIdentityContext = createContext<InternetIdentityState>(DefaultState);

export default function InternetIdentityProvider ({ children }: { children?: ReactNode}) {

    const [isAuthed, setIsAuthed] = useState<boolean>();

    useEffect(() => {
        const sessionStoredAuthResponse = window.sessionStorage.getItem('authResponse');
        if (typeof sessionStoredAuthResponse !== 'string') {
            setIsAuthed(false);
            return;
        }
        const authResponse: InternetIdentityAuthResponse = JSON.parse(sessionStoredAuthResponse);
        try {
            const expiration = new Date(authResponse.delegations[0].delegation.expiration as unknown as number);
            const expired = expiration < new Date();
            if (expired) {
                setIsAuthed(false);
                return;
            }
            setIsAuthed(true);
            return;
        } catch (e) {
            console.log(`Failed to obtain existing auth response`, e);
            setIsAuthed(false);
            return;
        }
    }, []);

    const sessionKey = useMemo<identity.Ed25519KeyIdentity>(() => {
        const existingKey = window.sessionStorage.getItem('sessionKey');

        if (existingKey) {
            try {
                // @ts-ignore
                const parsed = identity.Ed25519KeyIdentity.fromSecretKey(existingKey.split(',').map(x => parseInt(x)));
                console.log(`Retrieved existing session key.`);
                return parsed;
            } catch (error) {
                console.log(`Error while retrieving existing session key.`, error);
            }
        }
        const newKey = identity.Ed25519KeyIdentity.generate();
        window.sessionStorage.setItem('sessionKey', newKey.getKeyPair().secretKey.join(','));
        return newKey;
    }, []);

    async function authenticate() {
        const identityWindow = window.open('https://identity.ic0.app/#authorize', 'identityWindow', 'menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes');

        window.addEventListener('message', subscribeWindowEvents);

        function subscribeWindowEvents (event: MessageEvent<InternetIdentityReady | InternetIdentityAuthResponse | InternetIdentityAuthResponseFailure>) {
            if (!event || event.origin !== "https://identity.ic0.app") {
                return;
            }  
            switch (event.data.kind) {
                case 'authorize-ready':
                    identityWindow?.postMessage({
                        kind: 'authorize-client',
                        sessionPublicKey: sessionKey.getPublicKey().toDer(),
                    }, "https://identity.ic0.app");
                break;
                case 'authorize-client-success':
                    setIsAuthed(true);
                    window.sessionStorage.setItem('authResponse', JSON.stringify(event.data, (key, value) =>
                        key === 'expiration'
                            ? Math.floor(Number(value) / 1e6)
                            : value
                    ));
                    cleanup();
                break;
                case 'authorize-client-failure':
                    console.error('Internet Identity issued a failure to authorize.', event.data);
                    cleanup();
                break;
            }
        }

        function cleanup () {
            window.removeEventListener('message', subscribeWindowEvents);
            identityWindow?.close();
        };
    };

    const value = {
        authenticate,
        isAuthed,
    };

    return <InternetIdentityContext.Provider
        value={value}
    >
        {children}
    </InternetIdentityContext.Provider>;
};

export {
    InternetIdentityContext,
};
