import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { cardInfo } from "../assets/Data/data";

export const Destacado = () => {
  const renderCard = (card, index) => {
    return (
      <>
        <Col>
          <Card
            className="cartas"
            data-aos="zoom-out-up"
            key={index}
          >
            <Card.Img className="lazyload" variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  };
  return (
    <div id="destacado">
      <h2>DESTACADO</h2>
      <Row xs={1} sm={2} md={2} lg={3} className="g-4">
        {cardInfo.map(renderCard)}
      </Row>
    </div>
  );
};
