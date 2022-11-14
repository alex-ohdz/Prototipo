// import React, { Component } from "react";
// import Slider from "react-slick";
import { arteInfo } from "../../assets/Data/data";
// export const Colleccion = () => {

//   return
//   <h1>Collecion</h1>
  
// }
//  class AsNavFor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nav1: null,
//       nav2: null
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       nav1: this.slider1,
//       nav2: this.slider2
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Slider Syncing (AsNavFor)</h2>
//         <h4>First Slider</h4>
//         <Slider
//           asNavFor={this.state.nav2}
//           ref={slider => (this.slider1 = slider)}
//         >
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         <h4>Second Slider</h4>
//         <Slider
//           asNavFor={this.state.nav1}
//           ref={slider => (this.slider2 = slider)}
//           slidesToShow={3}
//           swipeToSlide={true}
//           focusOnSelect={true}
//         >
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }



















export const Colleccion = () => {

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
        {arteInfo.map(renderImage)}

    </div>
  );
};

