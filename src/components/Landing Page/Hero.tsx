import { useNavigate } from 'react-router-dom'
import HealthcareWorker from '../../assets/Healthcare_worker.png'

const Hero = () => {

    const navigate = useNavigate()
    const handleNavigate = (): void => {
        navigate('/calculator')
    }
    return (
        <div className="bg-hero-neon py-10 md:py-16 hero-section">
            <div className="w-[90%] my-0 mx-auto flex items-center flex-col xl:flex-row xl:justify-between">
                <div className="xl:w-[60%]">
                    <h1 className="font-semibold text-pry-blue text-3xl md:text-6xl">The Ultimate Medical Calculator for Healthcare Professionals</h1>
                    <p className='leading-8 pt-3 text-justify md:pt-8 text-write md:text-xl font-medium w-[80%]'>Say goodbye to manual calculations and hello to accuracy</p>            
                    <div className="text-start mt-8">
                        <button onClick={handleNavigate} className="py-3 px-8 rounded-sm bg-btn-blue hover:bg-light-blue text-white">Get Started</button>
                    </div>
                </div>
                <div className="relative mt-5 xl:mt-0">
                    <img src={HealthcareWorker} alt="Healthcare Worker" className=' z-10'/>
                    <div className="md:w-[500px] md:h-[500px] rounded-[100%] bg-shadow-blue absolute top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero