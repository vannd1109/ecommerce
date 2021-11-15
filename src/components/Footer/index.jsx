import MenuFooter from "./MenuFooter";
import logoSCJ from "./images/logo-scj.png";
import note from "./images/note.png";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import "./styles.scss";

function Footer(props) {
  return (
    <footer className="footer">
      <MenuFooter />
      <section className="company__info d-flex align-items-center justify-content-between border-top pt-4 pb-3">
        <div className="company__info--img">
          <NavLink to="/">
            <img src={logoSCJ} alt="SCJ Mall" />
          </NavLink>
        </div>
        <div className="company__info--des">
          <Typography className="company__info--des-name text-uppercase mb-2">
            công ty tnhh scj tv shopping
          </Typography>
          <Typography className="company__info--des-license">
            GCNĐKDN số: 0310625379, cấp ngày 29/01/2011, bởi Sở KHĐT TP. Hồ Chí
            Minh
          </Typography>
          <p className="company__info--des-address">
            Địa chỉ: Số 38 Huỳnh Lan Khanh, Phường 2, Quận Tân Bình, TP. Hồ Chí
            Minh
          </p>
        </div>
        <div className="company__info--note">
          <a href="http://online.gov.vn/Home/WebDetails/11819?AspxAutoDetectCookieSupport=1">
            <img src={note} alt="Thông báo công thương" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
