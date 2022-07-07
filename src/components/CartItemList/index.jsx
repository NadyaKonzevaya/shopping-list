import CartItem from "components/CartItem";
import PropTypes from "prop-types";
    

const CartItemList = ({ items}) => (
    <div className="cart-item-list">
        {
            items.map(item => <CartItem key={item.id} item={ item} />)
        }
    </div>
)

CartItemList.propTypes = {
    items: PropTypes.arrayOf(
         PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default CartItemList;