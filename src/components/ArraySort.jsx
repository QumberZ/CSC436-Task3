import products from "../utils/products";

const ArraySort = () => {

    const sortedProducts = [...products].sort((a, b) => a.price - b.price);

    return (
      <div>
        <h1>Products:</h1>
        <ul>
          {sortedProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
    
    
    
    export default ArraySort;