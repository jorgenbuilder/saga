import React from 'react';

interface EnvState {
    principal: string;
    host: string;
    isLocal: boolean;
};

interface ContextProviderProps {
    children?: React.ReactNode;
};

const PRODUCTION_PRINCIPAL = 'l2jyf-nqaaa-aaaah-qadha-cai';

const defaultState: EnvState = {
    principal: window.location.host.includes('localhost')
        ? 'rrkah-fqaaa-aaaaa-aaaaq-cai'
        : PRODUCTION_PRINCIPAL,
    host: window.location.host.includes('localhost')
        ? `http://localhost:8000`
        : 'https://raw.ic0.app',
    isLocal: false,
};

export const envContext = React.createContext<EnvState>(defaultState);
export const useEnv = () => React.useContext(envContext);

export default function EnvProvider({ children }: ContextProviderProps) {

    const principal = defaultState.principal;
    const host = defaultState.host;
    const isLocal = window.location.host.includes('localhost');

    return <envContext.Provider
        value={{
            principal,
            host,
            isLocal,
        }}
        children={children} 
    />
};