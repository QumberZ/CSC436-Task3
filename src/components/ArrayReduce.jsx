import products from "../utils/products";

const ArrayReduce = () => {
  const totalProductsPrice = products.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  return (
    <div>
      <p className="text-center">
        {" "}
        The total cost of all the products in the store is ${totalProductsPrice}
        .
      </p>
    </div>
  );
};

export default ArrayReduce;
