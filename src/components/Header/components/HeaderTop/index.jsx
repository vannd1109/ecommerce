import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";
import { Badge, Typography } from "@mui/material";
import { FormControl, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import imgLogo from "./images/LOGO_SCJ_mall.png";
// import iconElectric from "./images/electric.png";
// import iconFashion from "./images/fashion.png";
// import iconFoodHealth from "./images/food_health.png";
// import iconFurniture from "./images/furniture.png";
// import iconHouseholdLife from "./images/household_life.png";
// import iconKitchen from "./images/kitchen.png";
import "./styles.scss";

function HeaderTop(props) {
  return (
    <section className="header__top d-flex justify-content-between">
      <Navbar expand="lg">
        <NavLink to="/">
          <img src={imgLogo} alt="Shopping Mall" />
        </NavLink>
        <Navbar.Collapse id="navbarScroll">
          <form className="d-flex header__top--search">
            <FormControl
              type="search"
              placeholder="Nhập nội dung cần tìm"
              className="me-2"
              aria-label="Search"
            />
            <Search className="header__top--search-icon" fontSize="large" />
          </form>
        </Navbar.Collapse>
      </Navbar>
      <div className="header__top--right mt-2">
        <ul className="d-flex header__top--list">
          <li className="header__top--item">
            <NavLink to="/order">Tài khoản</NavLink>
          </li>
          <li className="header__top--item order">
            <NavLink to="/order">Theo dõi đơn hàng</NavLink>
          </li>
          <li className="header__top--item">
            <NavLink to="/ebill">Tra cứu hóa đơn</NavLink>
          </li>
        </ul>
        <ul className="d-flex header__top--list justify-content-around mt-3">
          <li className="header__top--item text-center">
            <AccountCircle className="header__top--icon" />
            <Typography>
              <small>Đăng nhập</small> /<small>Đăng ký</small>
            </Typography>
          </li>
          <li className="header__top--item text-center">
            <NavLink to="/cart">
              <Badge badgeContent={4} color="error">
                <ShoppingCart className="header__top--icon" fontSize="medium" />
              </Badge>
              <Typography>
                <small>Giỏ hàng</small>
              </Typography>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HeaderTop;
