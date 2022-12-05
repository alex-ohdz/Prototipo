import React from "react";

export const VisitaParts = () => {
  return (
    <>
      <h4 id="titleVisita">Tipos de visitas</h4>
      <div className="salasM">
        <p>
          <b>Dirigidas : </b>son aquellas que estás destinadas a orientar a los
          visitantes por el orden lógico de la muestra que se exhibe en el Museo.
        </p>
        <p>
          <b>Especializadas : </b>son aquellas que profundizan en las
          especificidades de la muestra.
        </p>
      </div>
      <h6 className="titleSalas">Salas del Museo:</h6>
      <div className="salasM">
        <p> Sala1: Introductoria y presentación</p>
        <p>Sala 2: Historia y extensión de la fiesta al resto de los pueblos</p>
        <p>
          Sala 3: Parranderos ilustres, de actividades y exposición
          (polivalente)
        </p>
        <p>Sala 4: Música, faroles e insignias</p>
        <p>Sala 5: Fuegos artificiales</p>
        <p>Sala 6: Trabajos de plazas</p> <p>Sala 7: Carrozas</p>
        <p>Sala 8: Parranditas infantiles y artistas populares (polivalente)</p>
      </div>
    </>
  );
};
