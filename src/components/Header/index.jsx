import { Dehaze } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";

function Header(props) {
  return (
    <Navbar bg="light" expand="lg" className="nav__ecommerce">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav__ecommerce--main">
        <Nav className="me-auto d-flex justify-content-between w-100 align-items-center">
          <div className="text-uppercase border-right d-flex align-items-center nav__ecommerce--category">
            <Dehaze fontSize="large" />
            <Typography className="nav__ecommerce--label">Danh mục</Typography>
          </div>
          <NavLink
            className="text-decoration-none nav__ecommerce--link text-uppercase"
            color="secondary"
            to="/category"
          >
            Thực phẩm &amp; sức khỏe
          </NavLink>
          <NavLink
            className="text-decoration-none nav__ecommerce--link text-uppercase"
            to="/selling"
          >
            Bán chạy
          </NavLink>
          <NavLink
            className="text-decoration-none nav__ecommerce--link text-uppercase"
            to="/campaign"
          >
            Hồng sâm chính hãng
          </NavLink>
          <NavLink
            className="text-decoration-none nav__ecommerce--link text-uppercase"
            to="/broadcast"
          >
            Lịch phát sóng
          </NavLink>
          <NavLink
            className="text-decoration-none nav__ecommerce--link text-uppercase"
            to="/promotion"
          >
            Khuyến mãi
          </NavLink>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
