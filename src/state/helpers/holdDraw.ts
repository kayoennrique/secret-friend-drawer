import shuffle from "just-shuffle";

export function holdDraw (participants: string[]) {
    const  totalParticipants = participants.length;
    const scrambled = shuffle(participants);
    const result = new Map<string, string>();
    for (let index = 0; index < totalParticipants; index++) {    
        const friendIndex = index === (totalParticipants - 1) ? 0 : index + 1;
        result.set(scrambled[index], scrambled[friendIndex]);
    }
    return result;
}