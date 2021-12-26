import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../features/main/CartSlice';
import { clearDetail } from '../../features/main/DetailSlice';
import { FaTimes } from 'react-icons/fa';

const ProductDetail = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    }

    const { detail } = useSelector(state => state.detail);
    const dispatch = useDispatch();

    if (!detail) {
        return null;
    }

    return (
        <div className={`fixed top-0 right-0 z-40 w-full h-screen max-w-xs font-sans transition-all duration-300 bg-white border-l border-green-300 border-opacity-50 ${detail ? "" : "translate-x-full"}`}>
            <div className="relative flex flex-col items-start justify-start w-full h-full divide-y divide-green-300 divide-opacity-50">
                <button className='absolute right-0 top-24' onClick={() => dispatch(clearDetail())}>
                    <FaTimes className="w-6 h-6 text-green-500" />
                </button>
                <div className="flex flex-col items-start flex-1 p-6 overflow-y-auto">
                    <div className="flex flex-col items-center justify-center flex-grow w-full h-full">
                        <div className="w-full h-48 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${detail.url})` }} >

                        </div>
                    </div>
                    <div className={`w-full  whitespace-normal text-clip h-32 ${expanded ? "" : "max-h-32 overflow-hidden "}`} >
                        <h3 className="mb-2 text-lg font-bold leading-5 tracking-wide">{detail.name}</h3>
                        <p className="text-xs text-justify text-gray-400 text-clip">
                            {detail.description}
                        </p>
                    </div>
                    <button className="text-xs font-semibold text-blue-500 hover:text-blue-600" onClick={handleExpand}>Read More...</button>
                </div>
                <div className="flex-initial w-full p-6">
                    <h2 className="mb-5 font-bold tracking-wide text-center capitalize">details</h2>
                    <div >
                        <div className="flex items-center justify-between mb-5 text-sm font-semibold text-gray-700">
                            <span className="px-8 py-1 border border-gray-200 rounded-full">
                                1
                            </span>
                            <span className="px-8 py-1 border border-gray-200 rounded-full">
                                Numbers
                            </span>
                        </div>
                        <button onClick={() => dispatch(addItem(detail))} className="flex items-center justify-center w-full py-3 text-sm text-center text-white capitalize bg-green-500 rounded-full hover:bg-green-600">
                            <span>&#8358; {detail.price} - Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail