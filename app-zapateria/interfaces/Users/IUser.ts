

export interface IUser {
    cod?: number;
    email: string;
    password: string;
    usuario: string;
    isActive?: boolean;
    token?: string;
    roles?: string[]
}

