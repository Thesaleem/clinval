import dosingCalc from "../../assets/dosingCalc"
import Ordered from "./Ordered"

interface optionProp {
    option: {
        id: number,
        calculator: string,
        url: string
    }
}


const Converter = () => {
    
    return (
        <div className=" py-5 w-[90%] my-0 mx-auto text-pry-blue ">
            <h1 className="text-2xl md:text-3xl font-semibold">Dose Converters</h1>
            <hr className="border-black my-4 opacity-30" />
            <div className="">
                <p  className='font-semibold inline-block'>Drugs</p>
                <div className="h-[2px] bg-[#007acc] w-[48px] mt-2 "></div>
                {dosingCalc.map(item => {
                    return <Ordered key={item.id} option={item} />
                })}
            </div>
        </div>
    )
}

export default Converter