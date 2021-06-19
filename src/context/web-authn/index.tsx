import { createContext } from 'react';

interface WebAuthnState {
    authenticated: boolean;
};

const DefaultState: WebAuthnState = {
    authenticated: false,
};

export const WebAuthnContext = createContext<WebAuthnState>(DefaultState);

export default function WebAuthnProvider () {};
