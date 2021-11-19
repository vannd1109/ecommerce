import CampaignBanner from "../CampaignBanner";
import ListProductCampaign from "../ListProductCampaign";

function Campaign(props) {
  const { item } = props;
  return (
    <div className="product__campaign mt-3 mb-3">
      <CampaignBanner linkBanner={item.linkBanner} />
      <ListProductCampaign items={item.items} />
    </div>
  );
}

export default Campaign;
