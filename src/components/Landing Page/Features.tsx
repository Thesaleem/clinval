
import { useNavigate } from 'react-router-dom'
import doctor from '../../assets/doctor.png'
import './Features.css'

const Features = () => {
    const navigate = useNavigate()
    const handleNavigate = (): void => {
        navigate('/calculator')
    }

    return (
        <div className="w-[90%] mt-16 mx-auto">
            <p className="text-sm font-semibold text-subhead-blue  text-center">What we offer</p>
            <h1 className="font-bold text-pry-blue  text-center text-5xl mt-2 mb-4">Features</h1>
            <div className="md:flex justify-center pt-3 md:pt-5 ">

                <ul className="md:text-xl text-justify leading-9 md:pt-7">
                    <li className='pt-3 flex items-start md:pt-5 '>
                        <div className="check w-[26px] h-[19px] mt-[8px] md:mt-0 md:w-[24px] md:h-[24px] "></div>
                        <p className='ml-3'>
                            Instant, accurate calculations for a
                            range of clinical values
                        </p>
                    </li>
                    
                    <li className='pt-3 flex items-start md:pt-5 '>
                        <div className="check w-[20.22px] h-[19px] mt-[8px] md:mt-0 md:w-[24px] md:h-[24px] "></div>
                        <p className='ml-3'>
                            User-friendly interface that is easy to
                            navigate
                        </p>
                    </li>
                    
                    <li className='pt-3 flex items-start md:pt-5 '>
                        <div className="check w-[20.22px] h-[19px] mt-[8px] md:mt-0 md:w-[24px] md:h-[24px] "></div>
                        <p className='ml-3'>
                            Dose equivalence of drugs in the same
                            class
                        </p>
                    </li>

                    <li className='pt-3 flex items-start md:pt-5'>
                        <div className="check w-[26px] h-[19px] mt-[8px] md:mt-0 md:w-[24px] md:h-[24px]"></div>
                        <p className='ml-3'>
                            Compatibility with a range of devices
                            and browsers
                        </p>
                    </li>
   

                </ul>

                <div className="md:w-[40%] h-[550px] mt-4 md:mt-0 md:ml-11 bg-hero-blue rounded-lg relative">
                    <img src={doctor} alt="" className='h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                    <div className="w-[300px] md:h-[315px] hidden md:block bg-white rounded-lg absolute md:-bottom-20 lg:-bottom-8 md:-left-64 lg:-left-52 xl:-left-32 shadow-custom">
                        <div className="w-[90%] mx-auto">
                            
                            <div className="flex justify-between items-center">
                                <p className='text-pry-blue font-bold text-3xl py-6'>clinval</p>
                                <div className="flex">
                                    <div className="bg-hero-blue h-[10px] w-[10px] rounded-[20px]"></div>
                                    <div className="bg-hero-blue h-[10px] w-[10px] ml-2 rounded-[20px]"></div>
                                    <div className="bg-hero-blue h-[10px] w-[10px] ml-2 rounded-[20px]"></div>
                                </div>
                            </div>

                            <div className="bg-hero-blue h-[8px] mt-6"></div>
                            <div className="bg-hero-blue h-[8px] w-[60%] mt-6"></div>
                            <div className="bg-hero-blue h-[8px] w-[80%] mt-6"></div>
                            <button onClick={handleNavigate} className='py-3 px-8 w-full mt-12 rounded-sm bg-btn-blue hover:bg-light-blue text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features