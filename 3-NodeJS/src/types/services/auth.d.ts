export interface TokenResult {
    token: string;
    refreshToken: string;
}

export interface GetUserArgs {
    email: string;
    password: string;
}
