import Campaign from "./components/Campaign";

function ListProduct(props) {
  const { data } = props;
  return (
    <section className="list__product">
      {data.length > 0 &&
        data.map((item) => <Campaign item={item} key={item.id} />)}
    </section>
  );
}

export default ListProduct;
