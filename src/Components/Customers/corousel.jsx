import Carousel from 'react-bootstrap/Carousel';
import Img5 from './Images/img5.jpg';
import Img2 from './Images/img2.jpg';
import Img4 from './Images/img4.jpg';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" style={{ margin: "40px" }}>
      <Carousel.Item>

        <img
          className="d-block w-100"
          src={Img4}
          alt="First slide"
          style={{
            height: "500px",
            "@media (max-width: 768px)": {
              height: "300px",
            },
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
          style={{
            height: "500px",
            "@media (max-width: 768px)": {
              height: "300px",
            },
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img5}
          alt="Third slide"
          style={{
            height: "500px",
            "@media (max-width: 768px)": {
              height: "300px",
            },
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;


// import Carousel from 'react-bootstrap/Carousel';
// import Img5 from './Images/img5.jpg'
// function IndividualIntervalsExample() {
//   return (
//     <Carousel style={{color:'black'}}>
//       {/* <h1>hiiii</h1> */}
//       <Carousel.Item interval={1000}>
//         {/* <ExampleCarouselImage text="First slide" /> */}
//         <Carousel.Caption style={{color:'black'}}>
//           <h3 style={{color:'black'}}>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption >
//         <img
//           className="d-block w-100"
//           src={Img5}
//           alt="Third slide"
//           style={{
//             height: "500px",
//             // "@media (max-width: 768px)": {
//             //   height: "300px",
//             // },
//           }}
//         />
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         {/* <ExampleCarouselImage text="Second slide" /> */}
//         <Carousel.Caption style={{color:'black'}}>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption >
//         <img
//           className=""
//           src={Img5}
//           alt="Third slide"
//           style={{
//             height: "500px",
//             // "@media (max-width: 768px)": {
//             //   height: "300px",
//             // },
//           }}
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="Third slide" /> */}
//         <Carousel.Caption style={{color:'black'}}>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption >
//         <img
//           className="d-block w-100"
//           src={Img5}
//           alt="Third slide"
//           style={{
//             height: "500px",
//             // "@media (max-width: 768px)": {
//             //   height: "300px",
//             // },
//           }}
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default IndividualIntervalsExample;