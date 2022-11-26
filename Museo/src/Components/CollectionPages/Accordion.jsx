import Accordion from 'react-bootstrap/Accordion';

export const AccordionSlider = (props) => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <Accordion.Body>
         {props.slide.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

