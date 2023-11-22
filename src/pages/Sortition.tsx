import { useState } from "react";
import Card from "../components/Card";
import { useListOfParticipants } from "../state/hook/useListOfParticipants"
import { useDrawResult } from "../state/hook/useDrawResult"

import './Sortition.css'

const Sortition = () => {

    const participants = useListOfParticipants()

    const [participantOfTheTime, setParticipantOfTheTime] = useState('')
    const [secretFriend, setSecretFriend] = useState('')

    const result = useDrawResult()

    const draw = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (result.has(participantOfTheTime)) {
            setSecretFriend(result.get(participantOfTheTime)!)
            setTimeout(() => {
                setSecretFriend('')
            }, 5000)

        }
    }

    return (<Card>
        <section className="sortition">
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={draw}>
                <select
                    required
                    name="participantOfTheTime"
                    id="participantOfTheTime"
                    placeholder="Selecione o seu nome"
                    value={participantOfTheTime}
                    onChange={e => setParticipantOfTheTime(e.target.value)}
                >
                    <option>Selecione seu nome</option>
                    {participants.map(participant => <option key={participant}>{participant}</option>)}
                </select>
                <p>Clique em sortear para ver quem é seu amigo oculto!</p>
                <button className="button-draw">Sortear</button>
            </form>
            {secretFriend && <p className="result" role="alert">{secretFriend}</p>}
            <footer className="sorteio">
                <img src="/images/plane.png" className="plane" alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>)
}

export default Sortition;