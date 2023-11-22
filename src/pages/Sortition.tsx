import { useState } from "react";
import { useListOfParticipants } from "../state/hook/useListOfParticipants";
import { useDrawResult } from "../state/hook/useDrawResult";

const Sortition = () => {
    const participants = useListOfParticipants();
    const [participantOfTheTime, setParticipantOfTheTime] = useState('');
    const [secretFriend, setSecretFriend] = useState('');
    const result = useDrawResult();

    const draw = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (result.has(participantOfTheTime)) {
            setSecretFriend(result.get(participantOfTheTime)!);
        }
    }

    return (
        <section>
            <form onSubmit={draw}>
                <select
                    required
                    name="participantOfTheTime"
                    id="participantOfTheTime"
                    placeholder="Selecione o seu nome"
                    value={participantOfTheTime}
                    onChange={e => setParticipantOfTheTime(e.target.value)}
                >
                    {participants.map
                        (participant =>
                            <option
                                key={participant}
                            >{participant}
                            </option>)
                    }
                </select>
                <button>Sortear</button>
            </form>
            {secretFriend && <p role='alert'>{secretFriend}</p>}
        </section>
    )
}

export default Sortition;