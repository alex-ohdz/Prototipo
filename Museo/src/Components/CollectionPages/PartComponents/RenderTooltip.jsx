import Tooltip from "react-bootstrap/Tooltip";
export const RenderTooltip = (props) => {
	return (
	<Tooltip id="imgTooltip" {...props}>
	  <span><em>{props.slide.title}</em>, {props.slide.autor}</span>
	</Tooltip>
	)
  };