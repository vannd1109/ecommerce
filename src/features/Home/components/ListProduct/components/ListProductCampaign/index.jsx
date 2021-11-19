import { Row } from "react-bootstrap";
import Item from "../Item";

function ListProductCampaign(props) {
  const { items } = props;
  return (
    <Row>
      {items.length > 0 &&
        items.map((item) => <Item item={item} key={item.id} />)}
    </Row>
  );
}

export default ListProductCampaign;
