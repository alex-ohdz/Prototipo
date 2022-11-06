import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

let arrayIMG=[];
const imagesCartas = () =>{

  for (let i = 0; i < 5; i++) {
    arrayIMG.push(i);
    
    console.log(arrayIMG); 
       
  }
};
imagesCartas();


export const Destacado = () => {
  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-0">
        {/* {Array.from({ length:4 }).map((_, idx) => ( */}
          <Col>
            <Card className=" shadow bg-white rounded">
              <Card.Img 
                variant="top"
                src="src/Images/4.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        {/* ))} */}
      </Row>
    </>
  );
};
