// src/utils/validators.ts

export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export function validateBearerToken(token: string | undefined): boolean {
    return Boolean(token && token.startsWith('Bearer '));
}

export function validateMailId(mailId: string): boolean {
    return /^[a-fA-F0-9]{24}$/.test(mailId);
}

export function validatePlayerName(playerName: string): boolean {
    return playerName.length > 0 && playerName.length <= 30;
}