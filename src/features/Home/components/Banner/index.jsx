import imgHoneyLand from "./images/honey_land.png";
import imgSongYen from "./images/song_yen.png";
import imgNatureGift from "./images/nature_gift.png";
import imgliveGift from "./images/live_gift.png";
import imgPerfect from "./images/perfect.png";
import imgMagicKorea from "./images/magic_korea.png";
import imgNagakawa from "./images/nagakawa.png";
import imgUudai from "./images/uu_dai.png";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";

function Banner(props) {
  return (
    <section className="banner">
      <Row>
        <Col sm={3}>
          <div className="banner__item">
            <NavLink to="/">
              <img src={imgHoneyLand} alt="" />
            </NavLink>
          </div>
        </Col>
        <Col sm={3}>
          <div className="banner__item">
            <NavLink to="/">
              <img src={imgSongYen} alt="" />
            </NavLink>
          </div>
        </Col>
        <Col sm={3}>
          <div className="banner__item">
            <NavLink to="/">
              <img src={imgNatureGift} alt="" />
            </NavLink>
          </div>
        </Col>
        <Col sm={3}>
          <div className="banner__item">
            <NavLink to="/">
              <img src={imgliveGift} alt="" />
            </NavLink>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <div className="banner__item">
            <NavLink to="/">
              <img src={imgPerfect} alt="" />
            </NavLink>
          </div>
        </Col>
        <Col sm={3}>
          <div className="banner__item">
            <NavLink to="/">
              <img src={imgMagicKorea} alt="" />
            </NavLink>
          </div>
        </Col>
        <Col sm={3}>
          <div className="banner__item">
            <NavLink to="/">
              <img src={imgNagakawa} alt="" />
            </NavLink>
          </div>
        </Col>
        <Col sm={3}>
          <div className="banner__item">
            <NavLink to="/">
              <img src={imgUudai} alt="" />
            </NavLink>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Banner;
