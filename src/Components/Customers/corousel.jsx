import Carousel from 'react-bootstrap/Carousel';
import img5 from './Images/img5.jpg';
import img2 from './Images/img2.jpg';
import img4 from './Images/img4.jpg';
import img3 from './Images/img3.webp';

function DarkVariantExample() {
  return (
    <Carousel  data-bs-theme="dark" style={{ marginTop: "70px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
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
          src={img2}
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
          src={img5}
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