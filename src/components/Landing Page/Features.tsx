import image from '../../assets/undraw_online.png'

const Features = () => {
    return (
        <div className="w-[90%] mt-10 mx-auto ">
            <h1 className="text-3xl md:text-[40px] text-center">Features</h1>
            <div className="md:flex justify-center pt-3 md:pt-5 ">

                <ul className="md:text-xl text-justify leading-9 list-disc pl-4 md:pt-7">
                    <li className='pt-3 md:pt-5'>
                        Instant, accurate calculations for a
                        range of clinical values
                    </li>
                    <li className='pt-3 md:pt-5'>
                        User-friendly interface that is easy to
                        navigate
                    </li>
                    <li className='pt-3 md:pt-5'>
                        Dose equivalence of drugs in the same
                        class
                    </li>
                    <li className='pt-3 md:pt-5'>
                        Compatibility with a range of devices
                        and browsers
                    </li>    

                </ul>
                <div className="w-[40%] ml-11 hidden md:block">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Features