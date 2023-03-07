import {motion} from 'framer-motion'
import arrowIcon from '../../assets/category image/icon-arrow-down.svg'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

interface optionProps {
    option: {    
        specialty: string,
        image: string,
        id: number,
        calculators:{
            id: number,
            calculator: string,
            url: string
        }[]
    }
}
const Specialty = ({option}: optionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true)

        }, 500)

        return () => clearTimeout(delay)        
    },[])

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    const childVariant = {
        hidden: {opacity: 0, x: -16},
        visible: {
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.2
            },
        }
    }

    const dropdownVariant = {
        hidden: {scale: 0, height: 0},
        visible: {
            scale: 1,
            height: 'auto',
            transition: {
                type: 'spring',
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.04,
            }
        }
    }

    return (
        <div id={option.id + ''} className="mt-5 md:w-[60%] lg:w-[50%]">
            <div onClick={handleToggle} className="cursor-pointer">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={option.image} alt="" className='w-[30px]' />
                        <div className="ml-3 text-lg md:text-xl font-semibold">{option.specialty}</div>
                    </div>
                    <img src={arrowIcon} alt="" className={`w-[18px] ${isOpen ? 'rotate-180' : ''} transition-all duration-150 ease-in-out`} />
                </div>
                <div className={` ${isLoaded ? 'visible' : 'invisible'} pl-4 pt-2`}>
                    <motion.ul
                        variants={dropdownVariant}
                        animate={isOpen ? 'visible' : 'hidden'}
                    >
                        {option.calculators.map(item => {
                            return (
                              <motion.li
                                id={item.id + ""}
                                key={item.id}
                                variants={childVariant}
                                className='hover:text-medium-gray '
                              >
                                <Link to={item.url}>
                                    {item.calculator}
                                </Link>
                              </motion.li>
                            );
                        })}

                    </motion.ul>
                </div>
            </div>
            <hr className="border-black my-2 opacity-30" />

        </div>
    )
}

export default Specialty

