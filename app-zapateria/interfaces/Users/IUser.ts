

export interface IUser {
    cod?: string;
    email: string;
    password: string;
    usuario: string;
    isActive?: boolean;
    token?: string;
    roles?: string[]
}

