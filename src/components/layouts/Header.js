import BgHeader from '../../assets/img/BgHeader.jpg'

const Header = () => {
    return (
        <header className="bg-center bg-cover " style={{ backgroundImage: `url(${BgHeader})` }}>
            <div className='w-full h-full px-6 bg-gray-700 bg-opacity-20 sm:px-10'>
                <div className='flex flex-col w-full max-w-sm space-y-8 font-sans text-white pt-36'>
                    <h2 className='w-full max-w-xs text-5xl font-semibold text-left first-letter:capitalize'>
                        Quality Assured Products
                    </h2>
                    <p className='text-sm leading-5 tracking-tight text-opacity-50'>
                        Rosh farms and agro-consult is agricultural marketing firm that helps to bring farm produce and product to the door step of wholesalers, retailers and consumers.
                        The firm with her expertise in agriculture  helps intending farmers to setup their farms, offers extension agents services to farmers to help solve farm crisis.
                    </p>
                    <div className='w-full max-w-sm p-6 text-xs font-medium text-gray-900 bg-white'>
                        <p className=''>
                            Also with her acumen knowledge she helps intending farmers come up with their business plans and proposals to act as a guide for the perfect running of the day to day activities on the farm.
                        </p>
                        <p>
                            She has helped more than 10 commercial farms with not less than 500 hectares to set up farms on the cultivation of various agricultural crops, also  she is into the export of agricultural produce and products to overseas.
                        </p>
                        <p>
                            She is particular about food security in Nigeria, zero hunger zero poverty, empowerment to women as in accordance to sustainable development goals.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;