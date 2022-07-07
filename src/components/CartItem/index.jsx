import PropTypes from "prop-types";

const CartItem = ({ item }) => {
    const amount = item.count * item.price;

    return (
    <div className="cart-item">
        <span>{item.name}</span>
        <span>{item.price}$</span>

        <div>
            <button>-</button>
            <span>{item.count}</span>
            <button>+</button>
        </div>

        <span>{amount}$</span>
        <button>X</button>
        </div>
    )
};

CartItem.propTypes = {
    items: PropTypes.arrayOf(
         PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
        })
    ),
};
export default CartItem;