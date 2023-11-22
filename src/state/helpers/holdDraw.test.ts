import { holdDraw } from "./holdDraw";

describe('given a secret friend draw', () => {
    test('each participant does not draw their own name', () => {

        const participants = [
            'Ana',
            'Catarina',
            'Vinicios',
            'Juliana',
            'João',
            'Nathália'
        ];

        const sortition = holdDraw(participants)
        participants.forEach(participant => {
            const secretFriend = sortition.get(participant)
            expect(secretFriend).not.toEqual(participant)
        });
    });
});