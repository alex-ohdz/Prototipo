
export const Colleccion = () => {
  const imgInfo = [
    {
      imageSrc: "src/Images/Collecion/Arte/A1.jpg",
    },
    {
      imageSrc: "src/Images/Collecion/Arte/A2.jpg",
    },
    {
      imageSrc: "src/Images/Collecion/Arte/A3.jpg",
    },
  ];

  const renderImage = (img, index) => {
    return (
        <img
        className="img-fluid imgArte"
        key={index}
        src={img.imageSrc}
        alt=""
      />
    );
  };
  return (
    <div id="ImgCollecion">
      <h1 className="text-center">Colecciones</h1>
        {imgInfo.map(renderImage)}

    </div>
  );
};
