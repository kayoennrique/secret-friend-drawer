import { useNavigate } from "react-router-dom";
import { useListDeParticipants } from "../state/hook/useListDeParticipants";
import './Footer.css';

const Footer = () => {
    const participants = useListDeParticipants();
    const navigateTo = useNavigate();
    const started = () => {
        navigateTo('/sorteio');
    }
    return (
        <footer className="footer-settings">
            <button
                className="button"
                disabled={participants.length < 3}
                onClick={started}
            >Iniciar brincadeira</button>
            <img src="/images/bags.png" alt="Sacolas de compras" />
        </footer>
    );
}

export default Footer;