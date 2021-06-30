export interface User {
    handle: string;
    tokenBalance: number;
}

export const defaultUser: User = {
    handle: '@default',
    tokenBalance: 100,
};
