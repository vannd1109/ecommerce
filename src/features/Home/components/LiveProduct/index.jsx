import imgLiveProduct from "./images/live-product.jpg";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./styles.scss";

function LiveProduct(props) {
  return (
    <section className="live mt-3 mb-3">
      <div className="live__box d-flex align-items-center border justify-content-between">
        <div className="live__box--img border">
          <NavLink to="/">
            <img src={imgLiveProduct} alt="Xe đạp" />
          </NavLink>
        </div>
        <div className="live__box--info">
          <div className="live__box--info-time">
            <Typography>
              <span>ON AIR</span>
              <span>22:30 ~ 23:28</span>
            </Typography>
          </div>
          <div className="live__box--info-des">
            <Typography>
              [KINGTONG] xe đạp Kington tặng balo du lịch+ loa bluetooth 5 trong
              1
            </Typography>
          </div>
          <div className="live__box--info-price">
            <Typography>2.490.000đ</Typography>
          </div>
        </div>
        <div className="live__box--action d-flex flex-column">
          <Button variant="outlined" size="small" color="error">
            xem chi tiết
          </Button>
          <Button variant="outlined" size="small" color="error">
            lịch phát sóng
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LiveProduct;
