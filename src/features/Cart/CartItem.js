import ItemCount from "./ItemCount";

const CartItem = ({ item }) => {
    return (
        <div className="flex items-center justify-start">
            <div className="mr-5 border">
                <div className="w-16 h-16 bg-center bg-contain" style={{ backgroundImage: `url(${item.item.image})` }} />
                <span className="text-sm font-semibold tracking-tight text-gray-700">
                    {item.item.name}
                </span>
            </div>
            <ItemCount count={item.count} />
        </div>
    )
}

export default CartItem;