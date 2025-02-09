import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Container>
                <h1>Layout</h1>
                <Outlet />
            </Container>
        </>
    );
}

export default Layout;