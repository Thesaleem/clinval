import { type } from "@testing-library/user-event/dist/type"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const parentVariant = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 0.5,
            delayChildren: 0.3,
            staggerChildren: 0.04,
        }
    }
}

const childVariant = {
    hidden: {opacity: 0, x: -16},
    visible: {
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.2,
            type: 'spring',
            damping: 8
        },
    }
}
interface optionProp {
    option: {
        id: number,
        calculator: string,
        url: string
    }
}
const Ordered = ({option}: optionProp) => {
    return (
      <div className="mt-5 md:w-[60%] lg:w-[50%]">
        <motion.ul
          variants={parentVariant}
          initial="hidden"
          animate="visible"
          className="pl-4"
        >
          <motion.li key={option.id} variants={childVariant} className='hover:text-medium-gray '>
            <Link to={option.url}>
                {option.calculator}
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    );
}

export default Ordered