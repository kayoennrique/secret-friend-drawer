import { useListDeParticipants } from "../state/hook/useListDeParticipants";

const ListParticipants = () => {

    const participants: string[] = useListDeParticipants();
    return (
        <ul>
            {participants.map(participant => <li key={participant}>{participant}</li>)}
        </ul>
    );
}

export default ListParticipants;