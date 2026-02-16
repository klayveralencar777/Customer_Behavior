
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
  FaShoppingBag,
  FaChartLine,
} from "react-icons/fa";
import KPICards from "../components/KPICards";

export default function Dashboard() {
  return (
    <Container className="mt-4">
      <Row className="g-3">
        <Col md={4}>
          <KPICards
            title="Clientes"
            value="1.245"
            icon={<FaUsers />}
            variant="primary"
          />
        </Col>

        <Col md={4}>
          <KPICards
            title="Lucro"
            value="R$ 32.400"
            icon={<FaDollarSign />}
            variant="success"
          />
        </Col>

        <Col md={4}>
          <KPICards
            title="Transações"
            value="320"
            icon={<FaShoppingCart />}
            variant="warning"
          />
        </Col>

        <Col md={4}>
          <KPICards
            title="Total de Compras"
            value="R$ 18.750"
            icon={<FaShoppingBag />}
            variant="danger"
          />
        </Col>

        <Col md={4}>
          <KPICards
            title="Total de Vendas"s
            value="R$ 51.150"
            icon={<FaChartLine />}
            variant="success"
          />
        </Col>
      </Row>
    </Container>
  );
}


