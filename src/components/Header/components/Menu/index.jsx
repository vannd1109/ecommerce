import { ChevronRight, Dehaze } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Nav, Navbar, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import iconBeautify from "./images/beautify.png";
import iconElectric from "./images/electric.png";
import iconFashion from "./images/fashion.png";
import iconFoodHealth from "./images/food_health.png";
import iconFurniture from "./images/furniture.png";
import iconHouseholdLife from "./images/household_life.png";
import iconKitchen from "./images/kitchen.png";
import "./styles.scss";

function Menu(props) {
  return (
    <Navbar expand="lg" className="ecommerce">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ecommerce--main">
        <Nav className="me-auto d-flex justify-content-between w-100 align-items-center">
          <div className="text-uppercase border-right ecommerce__category">
            <div className="ecommerce__category--box d-flex align-items-center">
              <Dehaze fontSize="medium" />
              <Typography
                fontSize="15px"
                className="ecommerce__category--label"
              >
                Danh mục
              </Typography>
            </div>
            <ul className="ecommerce__category--list">
              <li className="ecommerce__category--item d-flex">
                <div className="ecommerce__category--item-box d-flex align-items-center border-bottom">
                  <span className="ecommerce__category--icon">
                    <img src={iconFoodHealth} alt="Thực phẩm &amp; sức khỏe" />
                  </span>
                  <NavLink
                    to="/"
                    className="ecommerce__category--item-link d-flex align-items-center"
                  >
                    Thực phẩm &amp; sức khỏe
                    <ChevronRight
                      fontSize="small"
                      className="ecommerce__category--item-right"
                    />
                  </NavLink>
                </div>

                <ul className="category__child--list">
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Thực phẩm chức năng
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Thực phẩm &amp; Đồ uống
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Chăm sóc sức khỏe
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Dụng cụ thể dục thể thao
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="ecommerce__category--item d-flex">
                <div className="ecommerce__category--item-box d-flex align-items-center border-bottom">
                  <span className="ecommerce__category--icon">
                    <img src={iconElectric} alt="Điện gia dụng" />
                  </span>
                  <NavLink
                    to="/"
                    className="ecommerce__category--item-link d-flex align-items-center"
                  >
                    Điện gia dụng
                    <ChevronRight
                      fontSize="small"
                      className="ecommerce__category--item-right"
                    />
                  </NavLink>
                </div>

                <ul className="category__child--list">
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Bình ấm
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Ấm, bình đun siêu tốc
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Bình thủy điện
                    </NavLink>
                  </li>
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Lò bếp
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Lò/ vỉ nướng
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Bếp ga/Lò ga
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Lò vi sóng
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Lò hấp
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Bếp điện từ/Bếp hồng ngoại
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Nồi áp suất
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Nồi cơm điện
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Nồi lẩu điện
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy làm bánh
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Nồi chiên
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy làm tỏi đen
                    </NavLink>
                  </li>
                </ul>

                <ul className="category__child--list">
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Sinh tố, xay, ép, pha
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy ép trái cây
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy pha cà phê
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy xay sinh tố
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy làm sữa đậu nành/ sữa chua
                    </NavLink>
                  </li>
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Điện gia đình
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy sấy
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Bàn ủi
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy hút bụi
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy may
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Quạt &amp; Máy nóng lạnh
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy khoan cầm tay
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy xịt rửa
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Đèn điện
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Máy trồng rau
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="ecommerce__category--item d-flex">
                <div className="ecommerce__category--item-box d-flex align-items-center border-bottom">
                  <span className="ecommerce__category--icon">
                    <img src={iconBeautify} alt="Làm đẹp" />
                  </span>
                  <NavLink
                    to="/"
                    className="ecommerce__category--item-link d-flex align-items-center"
                  >
                    Làm đẹp
                    <ChevronRight
                      fontSize="small"
                      className="ecommerce__category--item-right"
                    />
                  </NavLink>
                </div>

                <ul className="category__child--list">
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Mỹ phẩm
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Trang điểm
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Nước hoa
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Dưỡng da mặt
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Dưỡng toàn thân
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Chăm sóc tay và móng
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Chăm sóc tóc
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Chăm sóc cá nhân
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Thiết bị làm đẹp
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="ecommerce__category--item d-flex">
                <div className="ecommerce__category--item-box d-flex align-items-center border-bottom">
                  <span className="ecommerce__category--icon">
                    <img src={iconFashion} alt="Thời trang" />
                  </span>
                  <NavLink
                    to="/"
                    className="ecommerce__category--item-link d-flex align-items-center"
                  >
                    Thời trang
                    <ChevronRight
                      fontSize="small"
                      className="ecommerce__category--item-right"
                    />
                  </NavLink>
                </div>

                <ul className="category__child--list">
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Trang phục nữ
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Đầm
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Áo
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Quần và Váy
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Túi xách và ví
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Giày
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Dây nịt nữ
                    </NavLink>
                  </li>
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Trang phục nam
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Áo
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Quần
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Túi, ví nam
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Dây nịt nam
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Giày dép
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Trang phục thể thao
                    </NavLink>
                  </li>
                </ul>

                <ul className="category__child--list">
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Trang phục lót
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Đồ lót nữ
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Đồ lót nam
                    </NavLink>
                  </li>
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Trang sức
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Đồng hồ
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Nữ trang
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Mắt kính
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="ecommerce__category--item d-flex">
                <div className="ecommerce__category--item-box d-flex align-items-center border-bottom">
                  <span className="ecommerce__category--icon">
                    <img src={iconKitchen} alt="Nhà bếp" />
                  </span>
                  <NavLink
                    to="/"
                    className="ecommerce__category--item-link d-flex align-items-center"
                  >
                    Nhà bếp
                    <ChevronRight
                      fontSize="small"
                      className="ecommerce__category--item-right"
                    />
                  </NavLink>
                </div>
                <ul className="category__child--list">
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Hộp/bình giữ nhiệt
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Bình giữ nóng-lạnh
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Hộp bảo quản thức ăn
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Bình Ly
                    </NavLink>
                  </li>
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Đồ dùng làm bếp
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Dao làm bếp
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      vật dụng dùng cho nhà bếp
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Bàn ăn
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Kệ và giá đựng
                    </NavLink>
                  </li>
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Xoong nồi nấu ăn
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Chảo
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Nồi
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="ecommerce__category--item d-flex">
                <div className="ecommerce__category--item-box d-flex align-items-center border-bottom">
                  <span className="ecommerce__category--icon">
                    <img
                      src={iconHouseholdLife}
                      alt="Gia dụng &amp; đời sống"
                    />
                  </span>
                  <NavLink
                    to="/"
                    className="ecommerce__category--item-link d-flex align-items-center"
                  >
                    Gia dụng &amp; đời sống
                    <ChevronRight
                      fontSize="small"
                      className="ecommerce__category--item-right"
                    />
                  </NavLink>
                </div>
                <ul className="category__child--list">
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Sản phẩm sinh hoạt
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Đồ dùng sinh hoạt
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Dụng cụ vệ sinh
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Sản phẩm lắp ráp
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Sản phẩm phòng tắm
                    </NavLink>
                  </li>
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Sản phẩm trẻ em
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Sản phẩm dành cho trẻ sơ sinh
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Sản phẩm dành cho trẻ em
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Đồ chơi
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Sản phẩm bảo quản
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="ecommerce__category--item d-flex">
                <div className="ecommerce__category--item-box d-flex align-items-center border-bottom">
                  <span className="ecommerce__category--icon">
                    <img src={iconFurniture} alt="Nội thất" />
                  </span>
                  <NavLink
                    to="/"
                    className="ecommerce__category--item-link d-flex align-items-center"
                  >
                    Nội thất
                    <ChevronRight
                      fontSize="small"
                      className="ecommerce__category--item-right"
                    />
                  </NavLink>
                </div>
                <ul className="category__child--list">
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Nội thất phòng khách
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Trang trí
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Ghế ngồi
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Ghế lười
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Sofa
                    </NavLink>
                  </li>
                  <li className="category__child--item label">
                    <NavLink to="/" className="category__child--link">
                      Nội thất phòng ngủ
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Nệm
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Drap
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Võng
                    </NavLink>
                  </li>
                  <li className="category__child--item">
                    <NavLink to="/" className="category__child--link">
                      Gối
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <NavLink
            className="text-decoration-none ecommerce__link text-uppercase"
            color="secondary"
            to="/category"
          >
            Thực phẩm &amp; sức khỏe
          </NavLink>
          <NavLink
            className="text-decoration-none ecommerce__link text-uppercase"
            to="/selling"
          >
            Bán chạy
          </NavLink>
          <NavLink
            className="text-decoration-none ecommerce__link text-uppercase"
            to="/campaign"
          >
            Hồng sâm chính hãng
          </NavLink>
          <NavLink
            className="text-decoration-none ecommerce__link text-uppercase"
            to="/broadcast"
          >
            Lịch phát sóng
            <Spinner
              className="broadcast-notifination"
              animation="grow"
              size="sm"
              variant="danger"
            />
          </NavLink>
          <NavLink
            className="text-decoration-none ecommerce__link text-uppercase"
            to="/promotion"
          >
            Khuyến mãi
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
