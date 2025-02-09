import { Container } from "react-bootstrap";
import logo from "../assets/logo.svg";

function HomePage() {
    return (
        <>
            <Container>
                <img height={200} alt="useless" src={logo}>
                </img>
            </Container>
        </>
    );
}

export default HomePage;