import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Destacado = () => {
  const cardInfo = [
    {
      image: "src/Images/cartasDes/1.jpg",
      title: "mgAAA",
      text: "Probandoooooo",
    },
    {
      image: "src/Images/cartasDes/4.jpg",
      title: "DOS3",
      text: "Probandoooooo2222",
    },
    {
      image: "src/Images/cartasDes/4.jpg",
      title: "DOS3",
      text: "Probandoooooo2222",
    },
    {
      image: "src/Images/cartasDes/4.jpg",
      title: "DOS3",
      text: "Probandoooooo2222",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <>
        <Col>
          <Card className="shadow rounded cartas" key={index} >
            <Card.Img variant="top" src={card.image} />
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
      <Row xs={2} sm={2} md={3} lg={4} className="g-4">
        {cardInfo.map(renderCard)}
      </Row>
    </div>
  );
};
