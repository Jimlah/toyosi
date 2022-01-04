import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const ItemCount = ({product}) => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <button className="px-3 py-1 text-white bg-blue-500 rounded focus:outline-none hover:bg-blue-600">
                <AiOutlineMinus />
            </button>
            <span>1</span>
            <button className="px-3 py-1 text-white bg-blue-500 rounded focus:outline-none hover:bg-blue-600">
                <AiOutlinePlus />
            </button>
        </div>
    )
}

export default ItemCount