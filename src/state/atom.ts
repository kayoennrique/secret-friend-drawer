import { atom } from "recoil";

export const listParticipantsState = atom<string[]>({
    key: 'listParticipantsState',
    default: []
});

export const resultOfSecretFriend = atom<Map<string, string>>({
    key: 'resultOfSecretFriend',
    default: new Map
});

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
});