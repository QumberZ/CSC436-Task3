import products from "../utils/products";

const ArrayFilter = () => {
  const saleProducts = products.filter(({ onSale }) => onSale !== false);

  return (
    <div>
      <h1>Products for Sale: </h1>
      <ul>
        {saleProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArrayFilter;
