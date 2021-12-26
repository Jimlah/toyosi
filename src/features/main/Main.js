import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import NavBar from "../../components/layouts/NavBar";
import ProductDetail from './../../components/Product/ProductDetail';
import db from './../../db';
import ProductSection from './../../components/Product/ProductSection';
import food from './../../assets/img/food.svg';

const Main = () => {
    console.log(db);
    return (
        <div className="font-sans bg-fixed bg-gray-200 ">
            <NavBar />
            <Header />
            <ProductDetail />
            <div className="flex items-center px-6 space-x-4 overflow-x-auto bg-white h-11 sm:px-10">
                {Object.keys(db).map((key) => (
                    <a href={`#${key}`} key={key} className="px-3 py-1 text-sm font-bold text-gray-500 border rounded-full hover:bg-green-500 hover:text-white">{key}</a>
                ))}
            </div>
            <main className="bg-fixed bg-left bg-repeat bg-contain bg-opacity-10" style={{ backgroundImage: `url(${food})` }}>
                <div className="bg-white bg-opacity-70">
                    {
                        Object.keys(db).map((category, index) => (
                            <ProductSection
                                key={index}
                                category={db[category]}
                                title={category}
                            />
                        ))
                    }
                </div>
            </main>
            <Footer />
        </div>
    )

}

export default Main;