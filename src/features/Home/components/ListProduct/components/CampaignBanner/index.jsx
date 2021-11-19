import { NavLink } from "react-router-dom";

function CampaignBanner({ linkBanner }) {
  return (
    <NavLink to="/campaign">
      <img src={linkBanner} alt="" />
    </NavLink>
  );
}

export default CampaignBanner;
