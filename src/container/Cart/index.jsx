import CartInputForm from "components/CartInputForm";
import Loader from "components/Loader";
import CartItemList from "components/CartItemList";
import TotalAmount from "components/TotalAmount";


const initialState = [
    {id: "1", name: "printer", price: 110, count: 2},
    {id: "2", name: "RAM", price: 30, count: 1},
    {id: "3", name: "motherboard", price: 150, count: 1},
];

const Cart = () => {
    return (
        <div className="cart">
            <CartInputForm />
            <Loader />
            <CartItemList items={ initialState} />
            <TotalAmount items={ initialState} />
        </div>
    )
}

export default Cart;