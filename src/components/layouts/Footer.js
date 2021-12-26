import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="flex flex-col gap-10 px-6 py-10 text-white bg-green-700 md:flex-row items-left sm:px-10">
            <div className='mt-10 md:w-1/3'>
                <h2 className='text-xl font-bold'>Rosh</h2>
                <div className='flex items-center justify-start mt-5'>
                    <AiFillLinkedin className="w-8 h-8 text-white" />
                    <AiFillFacebook className="w-8 h-8 text-white" />
                    <AiFillInstagram className="w-8 h-8 text-white" />
                </div>
                <div className='mt-5 text-sm font-medium' >
                    <p>
                        She is particular about food security in Nigeria, zero hunger zero poverty, empowerment to women as in accordance to sustainable development goals.
                    </p>
                    <p>
                        Her services are second to none Nigeria as she provides them Integrity and selflessness
                    </p>
                </div>
            </div>

            <h1 className="mt-10 text-4xl font-bold uppercase md:w-1/3">
                Rosh farms and agro-consult
            </h1>

            <div className='mt-10 md:w-1/3'>
                <h2 className='text-xl font-bold'>Contact Us</h2>
                <div className='flex flex-col items-start justify-start mt-5 space-y-2'>
                    <p className='flex space-x-5 text-sm font-medium'>
                        <span className='font-bold'>Address:</span>
                        <span>
                            Plot 1, Block 1,
                            <br />
                            Ojodu Road,
                            <br />
                            Off Ojodu Road,
                            <br />
                            Ojodu,
                            <br />
                            Lagos
                        </span>
                    </p>
                    <p className='flex space-x-5 text-sm font-medium'>
                        <span className='font-bold'>Phone:</span>
                        <span>
                            +234 816 066 0666
                        </span>
                    </p>
                    <p className='flex space-x-5 text-sm font-medium'>
                        <span className='font-bold'>Email:</span>
                        <span>
                            olatoyosi@gmail.com
                        </span>
                    </p>
                </div>
            </div>

        </footer>
    )

}

export default Footer;