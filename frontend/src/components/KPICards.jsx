import { Card } from "react-bootstrap";

export default function KPICards({ title, value, icon, variant }) {
  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="d-flex align-items-center justify-content-between">
        <div>
          <Card.Subtitle className="mb-2 text-muted">
            {title}
          </Card.Subtitle>
          <Card.Title className="mb-0 fs-3 fw-bold">
            {value}
          </Card.Title>
        </div>
        <div className={`fs-1 text-${variant}`}>
          {icon}
        </div>
      </Card.Body>
    </Card>
  );
};

