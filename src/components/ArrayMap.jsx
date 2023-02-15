import products from "../utils/products";

const ArrayMap = () => {
  return (
    <div className="products">
      <ol>
        {products.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default ArrayMap;
