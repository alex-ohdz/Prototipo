import Accordion from 'react-bootstrap/Accordion';

export const AccordionSlider = ({picture}) => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <Accordion.Body>
         {picture.location.name}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

