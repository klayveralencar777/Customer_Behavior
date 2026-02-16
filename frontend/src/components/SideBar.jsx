
import { Nav } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

export default function SideBar(){
  return (
    <div
      className="d-flex flex-column p-3 text-white bg-dark"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      

      <Nav className="flex-column gap-2">
        <Nav.Link href="/dashboard" className="text-white">
          <FaTachometerAlt className="me-2" />
          Dashboard
        </Nav.Link>

        <Nav.Link href="/customers" className="text-white">
          <FaUsers className="me-2" />
          Clientes
        </Nav.Link>

        <Nav.Link href="/transactions" className="text-white">
          <FaShoppingCart className="me-2" />
          Transações
        </Nav.Link>

        <Nav.Link href="/products" className="text-white">
          <FaChartLine className="me-2" />
          Produtos
        </Nav.Link>
      </Nav>
    </div>
  );
};


