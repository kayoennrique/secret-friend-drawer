import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import ListParticipants from "../components/ListParticipants";

const Configuration = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Form />
                <ListParticipants />
                <Footer />
            </section>
        </Card>
    );
}

export default Configuration;