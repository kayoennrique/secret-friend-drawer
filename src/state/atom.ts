import { atom } from "recoil";

export const listParticipantsState = atom<string[]>({
    key: 'listParticipantsState',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})