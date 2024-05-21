import { useStateValue } from "../StateProvider";
import "./Product.css";
const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    console.log("clicked");
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
      </div>

      <img src={image} alt="img" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
