import { useListOfParticipants } from "../state/hook/useListOfParticipants";

const ListParticipants = () => {

    const participants: string[] = useListOfParticipants();
    return (
        <ul>
            {participants.map(participant => <li key={participant}>{participant}</li>)}
        </ul>
    );
}

export default ListParticipants;