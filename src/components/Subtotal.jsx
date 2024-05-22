import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <NumericFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator=","
        decimalScale={2}
        prefix="$"
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
