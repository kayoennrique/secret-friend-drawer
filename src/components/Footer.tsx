import { useNavigate } from "react-router-dom";
import { useListDeParticipants } from "../state/hook/useListDeParticipants";

const Footer = () => {
    const participants = useListDeParticipants();
    const navigateTo = useNavigate();
    const started = () => {
        navigateTo('/sorteio')
    }
    return (
        <footer>
            <button
                disabled={participants.length < 3}
                onClick={started}
            >
                Iniciar Brincadeira!
            </button>
        </footer>
    );
}

export default Footer;