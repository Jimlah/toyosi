import CartItem from "./CartItem"
import { useSelector } from 'react-redux';
import useArrayCountValue from './../../hooks/useArrayCountValue';

const Cart = () => {

    const { items } = useSelector(state => state.cart);
    const products = useArrayCountValue(items);

    return (
        <div className="fixed top-0 right-0 w-64 h-screen pt-20 overflow-y-auto bg-white">
            <h1 className="mt-2 text-center " >Cart</h1>
            <div className="flex flex-col items-center justify-start w-full px-5 py-5 border">
                {
                    products.map((item, index) => <CartItem key={index} item={item} />)
                }
                {
                    products.length === 0 && <div className="text-center text-gray-500">No items in cart</div>
                }
            </div>
        </div>
    )
}

export default Cart

