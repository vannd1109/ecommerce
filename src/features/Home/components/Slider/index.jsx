import { Carousel } from "react-bootstrap";
import imgSlider_1 from "./images/slider_1.jpg";
import imgSlider_2 from "./images/slider_2.jpg";
import imgSlider_3 from "./images/slider_3.jpg";
import imgSlider_4 from "./images/slider_4.jpg";
import imgSlider_5 from "./images/slider_5.jpg";
import imgSlider_6 from "./images/slider_6.jpg";

function Slider(props) {
  return (
    <Carousel
      style={{
        borderLeft: "0.1px solid transparent",
        borderRight: "0.1px solid transparent",
      }}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlider_1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlider_2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlider_3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlider_4} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlider_5} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlider_6} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
