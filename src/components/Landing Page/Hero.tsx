const Hero = () => {
    return (
        <div className="hero text-off-white py-16 md:py-28">
            <div className="w-[90%] my-0 mx-auto">
                <div className="md:max-w-4xl md:text-center md:mx-auto">
                    <h1 className="font-semibold text-3xl md:text-[40px]">The Ultimate Medical Calculator for Healthcare Professionals</h1>
                    <p className="leading-8 pt-3 text-justify md:pt-8 md:text-lg">
                        Our easy-to-use
                        platform provides instant, accurate
                        calculations for a range of clinical values,
                        including BMI, creatinine clearance, and
                        drug dosing. 
                    </p>
                    <p className="leading-8 text-justify md:text-lg md:pt-3">
                        Our platform is perfect for
                        doctors, pharmacists, nurses, and other
                        healthcare professionals who need to
                        make quick, accurate calculations in a
                        high-pressure environment.
                    </p>
                    
                    <div className="text-start mt-8">
                        <button className="py-4 px-5 rounded-lg hover:bg-off-white hover:text-black md:text-lg border border-off-white">Try the Calculator Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero