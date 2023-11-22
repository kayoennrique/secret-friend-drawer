import { useNavigate } from "react-router-dom";
import { useListOfParticipants } from "../state/hook/useListOfParticipants";
import './Footer.css';
import { useSorter } from "../state/hook/useSorter";

const Footer = () => {
    const participants = useListOfParticipants();
    const navigateTo = useNavigate();
    const draw = useSorter();
    const started = () => {
        draw();
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