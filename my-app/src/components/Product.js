import { useSelector } from "react-redux";
import { Statuses } from "../store/productSlice";
import "../scss/ProductPage.scss";

const Products = () => {
    const { data: products, status } = useSelector((state) => state.product);

    if (status === Statuses.LOADING)
        return <h2>Loading...</h2>;

    if (status === Statuses.ERROR)
        return <h2>Something went wrong!</h2>;

    return (
        <div className="products">
            {products.map((product) => (
                <div key={product.id}>
                    <img className="product-image" src={product.image} alt={product.title} />
                    <h3 className="product-name" >{product.title}</h3>
                    <p className="product-details">{product.description}</p>
                    <div className="price-addToCart">
                        <p className="product-price">${product.price}</p>
                        <button className="addtocart-button">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
