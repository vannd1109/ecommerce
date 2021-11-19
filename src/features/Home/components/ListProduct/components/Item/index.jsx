import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";

function Item(props) {
  const { item } = props;
  return (
    <Col sm={4}>
      <div className="product__item mt-3">
        <NavLink to="/">
          <img className="product__item--img" src={item.linkImg} alt="" />
        </NavLink>
        <NavLink to="/" className="product__item--name">
          {item.name}
        </NavLink>
        <div className="product__item--price">
          <span className="product__item--price-percent">{item.percent}%</span>
          <span className="product__item--price-salePrice">
            {item.salePrice}
          </span>
          <span className="product__item--price-sell">{item.price}</span>
        </div>
      </div>
    </Col>
  );
}

export default Item;
