import { createContext, ReactNode, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { useEffect } from 'react';
import { Identity } from '@dfinity/agent';

interface InternetIdentityState {
    authenticate: () => void;
    isAuthed?: boolean;
    identity?: Identity;
};

const DefaultState: InternetIdentityState = {
    authenticate: () => { },
    isAuthed: undefined,
    identity: undefined,
};

const InternetIdentityContext = createContext<InternetIdentityState>(DefaultState);

export default function InternetIdentityProvider({ children }: { children?: ReactNode }) {

    const [isAuthed, setIsAuthed] = useState<boolean>();
    const [identity, setIdentity] = useState<Identity>()

    useEffect(() => {
        AuthClient.create()
            .then(client => client.isAuthenticated())
            .then(setIsAuthed);
    }, []);

    useEffect(() => {
        AuthClient.create()
            .then(client => client.getIdentity())
            .then(setIdentity);
    }, [isAuthed]);

    async function authenticate() {
        AuthClient.create()
            .then(client => client.login({
                onSuccess: () => setIsAuthed(true),
            }));
    };

    const value = {
        authenticate,
        isAuthed,
        identity,
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
