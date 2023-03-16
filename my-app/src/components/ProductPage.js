import { useEffect, useState } from "react";
import "../scss/ProductPage.scss";
import getProductData from "../Services/productService";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getProductData().then((data) => setProducts(data)).catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter((product) => {
    if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    if (filter === "lowToHigh" && product.price > 20) {
      return false;
    }

    if (filter === "highToLow" && product.price <= 20) {
      return false;
    }

    return true;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div className="filter-bar">
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="lowToHigh">Price Low to High</option>
          <option value="highToLow">Price High to Low</option>
        </select>
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <img className="product-image" src={product.image} alt={product.title} />
            <h3 className="product-name">{product.title}</h3>
            <p className="product-details">{product.description}</p>
            <div className="price-addToCart">
              <p className="product-price">${product.price}</p>
              <button className="addtocart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
