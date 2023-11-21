import { useRef, useState } from "react"
import { useAddParticipant } from "../state/hook/useAddParticipant"
import { useErrorMessage } from "../state/hook/useErrorMessage"

const Form = () => {
    
    const [name, setName] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const addToList = useAddParticipant();

    const errorMessage = useErrorMessage();
    
    const addParticipant = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        addToList(name);
        setName('');
        inputRef.current?.focus();
    }
    
    return (<form onSubmit={addParticipant}>
        <input
            ref={inputRef}
            value={name}
            onChange={evt => setName(evt.target.value)}
            type="text"
            placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!name}>Adicionar</button>
        {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>)
}

export default Form;