export interface LoginResponse {
    access_token: string;
    roles:        Role[];
    email:        string;
}

export interface Role {
    authority: string;
}
