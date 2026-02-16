import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/SideBar";

export default function Layout() {
  return (
    <Container fluid>
      <Row>
       
        <Col md={3} lg={2} className="p-0">
          <SideBar></SideBar>
        </Col>

        <Col md={9} lg={10} className="bg-light min-vh-100">
          <Container className="mt-4">
            <Outlet />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

