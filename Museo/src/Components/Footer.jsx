export const Footer = () => {
  return (
    <footer>
      <div className="col row" id="seccionA">
        <div className="info col-md-6 col-sm-6">
          <h4>Visitanos</h4>
          <hr />
          <p>
            aqui va la direccion de el museo
            <br />
            Remedios ,Villa Clara Cuba
          </p>
        </div>
        <div className="horario col-md-6 col-sm-6">
          <h4>Horarios</h4>
          <hr />
          <p></p>
        </div>
      </div>
      
      <div className="redes container">
        <ul>
          <li>
            <a href="">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bi bi-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bi bi-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
