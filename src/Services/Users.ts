export interface User {
    handle: string;
    tokenBalance: number;
    admin: boolean;
}

export const defaultUser: User = {
    handle: '@default',
    tokenBalance: 100,
    admin: true,
};

console.log(getUser, addUser);
