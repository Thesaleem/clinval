import ActiveNav from "../../assets/ActiveNav"
import { useState } from "react"
import Specialty from "./Specialty"
import category, {sortedCategory} from "../../assets/category"
import Ordered from "./Ordered"

const Calculator = () => {
    const [active, setActive] = useState('By Specialty')
    const isActive = active === 'By Specialty'

    const mapSpecialty = category.map(item => {
        return <Specialty key={item.id} option={item} />
    })
    const mapOrdered = sortedCategory.map(item => {
        return <Ordered key={item.id} option={item}/>
    })
    return (
        <div className=" py-5 w-[90%] my-0 mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold">Clinical Calculators</h1>
            <hr className="border-black my-4 opacity-30" />
            <ActiveNav active={active} setActive={setActive} />
            {isActive && mapSpecialty}
            {!isActive && mapOrdered}
        </div>
    )
}

export default Calculator