import ProductTemplate from './ProductTemplate';

const ProductSection = ({ title, category }) => {
    return (
        <section id={title} className="flex flex-col items-center justify-start px-6 py-10 sm:px-10">
            <h1 className="text-xl font-bold tracking-wide text-center text-green-900 capitalize border-b-4 border-green-900">{title}</h1>
            <div className="flex flex-wrap mt-10 justify-evenly">
                {
                    category.map(product => (
                        <ProductTemplate
                            key={product.id}
                            item={product}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default ProductSection;