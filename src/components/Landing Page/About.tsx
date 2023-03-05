import image from '../../assets/pexels.jpg'
const About = () => {
    return (
        <div className="w-[90%] xl:w-[70%] xl:justify-between mt-10 mx-auto flex flex-col xl:flex-row items-center">

            <div className="md:w-[430px] xl:w-[375px]">
                <img className='w-full h-full object-contain' src={image} alt="" />
            </div>

            <div className="xl:w-[40%] md:w-[46%] mt-7 xl:mt-0">
                <p className="text-sm font-semibold text-subhead-blue">Who we are?</p>
                <h1 className="font-bold text-pry-blue text-5xl mt-2">About Clinval</h1>
                <div className="text-write md:text-xl">
                    <p className="leading-8 pt-3 text-start md:pt-8 md:text-lg">
                        Our easy-to-use
                        platform provides instant, accurate
                        calculations for a range of clinical values,
                        including BMI, creatinine clearance, and
                        drug dosing. 
                    </p>
                    <p className="leading-8 text-start md:text-lg md:pt-3">
                        Our platform is perfect for
                        doctors, pharmacists, nurses, and other
                        healthcare professionals who need to
                        make quick, accurate calculations in a
                        high-pressure environment.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About