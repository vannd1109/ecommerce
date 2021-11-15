import { Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import fb from "./images/facebook.png";
import zalo from "./images/zalo.png";
import youtube from "./images/youtube.png";
import cod from "./images/cod.png";
import banking from "./images/internet-bank.png";
import nganLuong from "./images/vi-ngan-luong.png";
import qrCode from "./images/qr-code-app.png";
import appStore from "./images/appstore.png";
import chPlay from "./images/chplay.png";

function MenuFooter(props) {
  return (
    <ul className="menu__bottom pt-4 pb-4 d-flex justify-content-between border-top mt-4">
      <li className="menu__bottom--item">
        <Typography className="text-uppercase">Hỗ trợ khách hàng</Typography>
        <div className="menu__bottom--item-box border mt-2">
          <div className="menu__bottom--item-advise pb-1">
            <small className="d-flex justify-content-center">
              Tổng đài tư vấn miễn phí
            </small>
            <Link
              className="d-flex text-decoration-none justify-content-center"
              href="tel:18008033"
            >
              1800 8033
            </Link>
            <small className="d-flex justify-content-center mt-2">
              Thời gian
            </small>
            <small className="d-flex justify-content-center">
              Thứ 2 - Thứ 6: 8h - 17h
            </small>
            <small className="d-flex justify-content-center">
              Thứ 7: 8h - 12h
            </small>
          </div>
          <div className="menu__bottom--item-advise border-top pt-1">
            <small className="d-flex justify-content-center">
              Chăm sóc khách hàng
            </small>
            <Link
              className="d-flex text-decoration-none justify-content-center"
              href="tel:02862882633"
            >
              028 6288 2633
            </Link>
            <Link
              className="d-flex text-decoration-none justify-content-center"
              href="tel:0379419969"
            >
              037 9419 969
            </Link>
            <Link
              className="d-flex text-decoration-none justify-content-center"
              href="tel:0901550200"
            >
              090 1550 200
            </Link>
            <Link
              className="d-flex text-decoration-none justify-content-center"
              href="tel:0853638151"
            >
              085 3638 151
            </Link>
          </div>
        </div>
      </li>

      <li className="menu__bottom--item">
        <Typography className="text-uppercase">Về chúng tôi</Typography>
        <div className="menu__bottom--item-appendix">
          <NavLink className="d-flex" to="/gioi-thieu">
            Giới thiệu SCJ
          </NavLink>
          <NavLink className="d-flex" to="/dieu-khoan-su-dung">
            Điều khoản sử dụng
          </NavLink>
          <NavLink className="d-flex" to="/chinh-sach-bao-mat">
            Chính sách bảo mật
          </NavLink>
          <NavLink className="d-flex" to="/lien-he">
            Liên hệ
          </NavLink>
          <NavLink className="d-flex" to="/huong-dan-mua-hang">
            Hướng dẫn mua hàng
          </NavLink>
          <NavLink className="d-flex" to="/chinh-sach-khach-hang">
            Chính sách khách hàng
          </NavLink>
        </div>
      </li>

      <li className="menu__bottom--item">
        <Typography className="text-uppercase">Thanh toán</Typography>
        <Typography className="mt-3">
          <img src={cod} alt="Thanh toán bằng tiền mặt" />
        </Typography>
        <Typography className="mt-3">
          <img src={banking} alt="Thanh toán bằng chuyển khoản" />
        </Typography>
        <Typography className="mt-3">
          <img src={nganLuong} alt="Thanh toán bằng ngân lượng" />
        </Typography>
      </li>

      <li className="menu__bottom--item">
        <Typography className="text-uppercase">Kết nối với scj</Typography>
        <div className="menu__bottom--item-appendix">
          <NavLink className="d-flex align-items-center text-capitalize" to="/">
            <img src={fb} alt="Facebook" /> facebook
          </NavLink>
          <NavLink className="d-flex align-items-center text-capitalize" to="/">
            <img src={zalo} alt="Zalo" /> zalo
          </NavLink>
          <NavLink className="d-flex align-items-center text-capitalize" to="/">
            <img src={youtube} alt="Youtube" /> youtube
          </NavLink>
        </div>
      </li>

      <li className="menu__bottom--item">
        <Typography className="text-uppercase">Tải ứng dụng</Typography>
        <div className="menu__bottom--item-appendix">
          <Typography
            className="mt-3 d-flex align-items-center"
            fontSize="small"
          >
            <img src={qrCode} alt="Quét mã QR Code để tải app" /> Quét mã QR
            Code để tải app
          </Typography>
          <NavLink className="d-flex align-items-center text-capitalize" to="/">
            <img src={appStore} alt="Tải app qua App Store" />
          </NavLink>
          <NavLink className="d-flex align-items-center text-capitalize" to="/">
            <img src={chPlay} alt="Tải app qua CH Play" />
          </NavLink>
        </div>
      </li>
    </ul>
  );
}

export default MenuFooter;
