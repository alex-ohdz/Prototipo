import Tooltip from "react-bootstrap/Tooltip";
export const RenderTooltip = ({picture}) => {
	return (
	<Tooltip id="imgTooltip">
	  <span><em>{picture.name}</em>,probando {picture.status}</span>
	</Tooltip>
	)
  };
  //