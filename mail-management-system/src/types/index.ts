// src/types/index.ts

export interface Mail {
    id: string;
    senderId: string;
    recipientId: string;
    subject: string;
    body: string;
    items: Item[];
    createdAt: Date;
}

export interface Item {
    id: string;
    name: string;
    description: string;
    value: number;
}

export interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    isAdmin: boolean;
}

export interface AuthToken {
    userId: string;
    expiresIn: number;
}