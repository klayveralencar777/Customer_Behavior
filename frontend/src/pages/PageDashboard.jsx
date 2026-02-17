
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
  FaShoppingBag,
  FaChartLine,
} from "react-icons/fa";
import KPICards from "../components/KPICards";
import { useEffect, useState } from "react";
import { getMetrics } from "../services/metricsService";


export default function Dashboard() {
  
  const[data, setData] = useState("");
  
  useEffect(()=> {
      async function viewDashboard() {
        try {
            const metrics = await getMetrics();
            setData(metrics);
          
        } catch (error) {
          console.log(error);
          
        }
      }

      viewDashboard();
  },[]);
  
  return (
    <Container className="mt-4">
      <Row className="g-3">
        <Col md={4}>
          <KPICards
            title="Clientes"
            value= {data.totalCustomers}
            icon={<FaUsers />}
            variant="primary"
          />
        </Col>

        <Col md={4}>
          <KPICards
            title="Lucro"
            value={`R$ ${data.profit}`}
            icon={<FaDollarSign />}
            variant="success"
          />
        </Col>

        <Col md={4}>
          <KPICards
            title="Transações"
            value={data.totalTransactions}
            icon={<FaShoppingCart />}
            variant="warning"
          />
        </Col>

        <Col md={4}>
          <KPICards
            title="Total de Compras"
            value={`R$ ${data.totalPurchase}`}
            icon={<FaShoppingBag />}  
            variant="danger"
          />
        </Col>

        <Col md={4}>
          <KPICards
            title="Total de Vendas"
            value={`R$ ${data.totalSale }`}
            icon={<FaChartLine />}
            variant="success"
          />
        </Col>
      </Row>
    </Container>
  );
}


