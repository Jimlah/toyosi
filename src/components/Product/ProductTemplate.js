import { addItem } from "../../features/main/CartSlice";
import { useDispatch } from 'react-redux';
import { setDetail } from "../../features/main/DetailSlice";

const ProductTemplate = ({ item }) => {

    const dispatch = useDispatch();

    return (
        <div className="flex flex-col p-4 m-5 space-y-2 font-sans transition-all duration-500 bg-white border border-green-200 w-44 rounded-xl hover:shadow-xl shadow-green-300">
            <div className="w-full h-40 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${item.url})` }} />
            <div className="flex flex-col items-start justify-start space-y-1 ">
                <button onClick={() => { dispatch(setDetail(item)) }} className="font-sans text-sm font-bold tracking-wide hover:text-opacity-50">{item.name}</button>
                <div className="flex items-center justify-between w-full">
                    <p className="leading-3">
                        <span className="text-xs text-gray-300">Price</span><br />
                        <span className="text-xs font-bold tracking-tighter text-gray-700">&#8358; {item.price}</span>
                    </p>
                    <button
                        onClick={() => dispatch(addItem(item))}
                        className="px-2 py-1 text-xs font-semibold text-gray-600 transition-all duration-700 border border-green-200 rounded-full hover:bg-green-500 hover:text-white">
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductTemplate;