import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import '../../UI/Table.css'
import { drugs } from "../../../assets/dosingCalc";
import { useState } from "react";
import arrow from '../../../assets/reuse.png'

type FormData = {
    convertFrom: string,
    convertTo: string,
    dose: string,
}


const Corticosteroid = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [selectDrugs, setSelectDrugs] = useState(drugs)
    const [from, setFrom] = useState<string>()
    const [to, setTo] = useState<string>()
    const [dose, setDose] = useState<number>()
    const [result, setResult] = useState<string>()
    
    const onSubmit:SubmitHandler<FormData> = data => {
        const drugFrom = drugs.find(item => item.drug === data.convertFrom)
        const drugTo = drugs.find(item => item.drug === data.convertTo)
        const estimatedDose = (drugTo!.value / drugFrom!.value) * +data.dose

        const checkedDose = (estimatedDose + '').includes('.') ? estimatedDose.toFixed(2) : estimatedDose
        setFrom(data.convertFrom)
        setTo(data.convertTo)
        setDose(+data.dose)
        setResult(checkedDose + '')
    }


    function handleOption (selectedValue: string) {
        setSelectDrugs(() => drugs)
        setSelectDrugs(prev => prev.filter(item =>item.drug !== selectedValue))
    }

    return (
        <Section>
            <SectionTitle>
                Corticosteroid Conversion
            </SectionTitle>
            <SectionText>
                This steroid conversion calculator is a tool used to estimate the correct 
                corticosteroid dosage. The calculation is based on steroid equivalency i.e. 
                the idea that steroid can be substituted with one another putting into consideration 
                their potency and duration of action. 
            </SectionText>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%]">
                <div className="flex flex-col space-y-1">

                    <div className="flex relative justify-between items-center pt-4 pb-2">
                        <label 
                            htmlFor="convertFrom" 
                            className="font-semibold text-sm py-2 md:text-base">
                            Convert from
                        </label>
                        <div className="flex items-center xl:w-[60%]">
                        
                            <div className="">
                                <select className="focus:outline-none" id='convertFrom' {...register("convertFrom", {onChange: (e) => handleOption(e.target.value)})}>
                                    <option value="Cortisone">Cortisone</option>
                                    <option value="Hydrocortisone">Hydrocortisone</option>
                                    <option value="Methylprednisolone">Methylprednisolone</option>
                                    <option value="Prednisolone">Prednisolone</option>
                                    <option value="Prednisone">Prednisone</option>
                                    <option value="Triamcinolone">Triamcinolone</option>
                                    <option value="Betamethasone">Betamethasone</option>
                                    <option value="Dexamethasone">Dexamethasone</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="flex relative justify-between items-center pt-4 pb-2">
                        <label 
                            htmlFor="dose" 
                            className="font-semibold text-sm py-2  md:text-base">
                            Dose
                        </label>
                        <div className="flex items-center w-[50%] md:w-[40%] xl:w-[60%]">
                            <input
                                type="text"
                                id="dose"
                                {...register("dose", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^\d+(\.\d+)?$/,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%] md:w-[55%]"
                            />
                            <p className="ml-2">mg</p>
                        </div>
                        {errors.dose?.message && (
                        <p role="alert" className='text-[13px] text-[red] absolute md:top-14 top-12 right-4 md:right-[6rem] lg:right-[7.5rem] xl:right-[28%]'>{errors.dose?.message}</p>
                        )}
                    </div>

                    <div className="flex relative justify-between items-center pt-4 pb-2">
                        <label 
                            htmlFor="convertTo" 
                            className="font-semibold text-sm py-2 md:text-base">
                            Convert to
                        </label>
                        <div className="flex items-center xl:w-[60%]">
                        
                            <div className="">
                                <select className="focus:outline-none" id='convertTo' {...register("convertTo", { required: true })}>
                                    {selectDrugs.map((item) => {
                                        return (
                                            <option key={item.drug} value={item.drug}>
                                                {item.drug}
                                            </option>
                                        ) 
                                    })}
                                </select>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-5 md:mt-7 md:w-[50%] mx-auto xl:mx-16">
                    <button
                        disabled={!isValid}
                        className=" disabled:opacity-40 disabled:cursor-not-allowed w-full bg-btn-blue disabled:hover:bg-btn-blue hover:bg-light-blue text-white py-2 px-16 uppercase font-bold">
                        Submit
                    </button>
                </div>
            </form>

            {result  && (
                    <div className="mt-7 max-w-2xl">
                        <h1 className="text-xl md:text-2xl font-medium">
                            Estimated dose:
                        </h1>
                        <div className="flex items-center space-x-6 justify-center md:justify-start">
                            <p className="md:text-xl font-medium"> {from} {dose} mg</p>
                            <img src={arrow} className='w-8' alt="" />
                            <p className="md:text-xl font-medium"> {to} {result} mg</p>
                        </div>
                    </div>
                )}
            
            <div className="overflow-x-auto">

                <table className=" text-write mt-6 ">
                    <caption className="py-4 font-medium text-pry-blue text-start text-xl md:text-2xl">Conversion Table</caption>
                    
                    <thead>
                        <tr  className="">
                            <th  className=" px-6 py-4">Glucocorticoid</th>
                            <th  className=" px-6 py-4">Approximate equivalent dose (mg)</th>
                            <th  className=" px-6 py-4">Half-life (hr)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={3} className='text-center font-semibold py-2'>Short Acting</td>
                        </tr>
                        <tr  className="">
                            <td  className=" text-center">Cortisone</td>
                            <td  className=" px-6 py-4 text-center">25</td>
                            <td  className=" px-6 py-4 text-center">8-12</td>

                        </tr>
                        <tr  className="">
                            <td className="text-center">Hydrocortisone</td>
                            <td className="px-6 py-4 text-center">20</td>
                            <td className="px-6 py-4 text-center">8-12</td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-center font-semibold py-2'>Intermediate Acting</td>
                        </tr>
                        <tr>
                            <td className="text-center">Methylprednisolone</td>
                            <td className="px-6 py-4 text-center"> 4</td>
                            <td className=" md:px-6 py-4 text-center">18-36</td>
                        </tr>
                        <tr>
                            <td className="text-center">Prednisolone</td>
                            <td className="px-6 py-4 text-center"> 5</td>
                            <td className="px:14 md:px-6 py-4 text-center">18-36</td>
                        </tr>
                        <tr>
                            <td className="text-center">Prednisone</td>
                            <td className="px-6 py-4 text-center">5</td>
                            <td className="px:14 md:px-6 py-4 text-center">18-36</td>
                        </tr>
                        <tr>
                            <td className="text-center">Triamcinolone</td>
                            <td className="px-6 py-4 text-center">4</td>
                            <td className="px:14 md:px-6 py-4 text-center">18-36</td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-center font-semibold py-2'>Long Acting</td>
                        </tr>
                        <tr>
                            <td className="text-center">Betamethasone</td>
                            <td className="px-6 py-4 text-center">0.6 – 0.75</td>
                            <td className="px:14 md:px-6py-4 text-center">36-54</td>
                        </tr>
                        <tr>
                            <td className="text-center">Dexamethasone</td>
                            <td className="px-6 py-4 text-center">0.75</td>
                            <td className="px:14 md:px-6py-4 text-center">36-54</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <div className="mt-8 py-10 max-w-2xl">
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Dixon JS. Second-line Agents in the Treatment of Rheumatic Diseases. 
                    Informa Health Care, 1991. (456).
                </p>                
                <p className="pt-2">
                    Meikle AW and Tyler FH. Potency and duration of action of glucocorticoids. 
                    Am J of Med 1977;63;200.
                </p>                
                <p className="pt-2">
                    Webb R, Singer M. Oxford Handbook of Critical Care. Oxford ; New York : 
                    Oxford University Press, 2005.
                </p>                
            </div>
        </Section>
    )
}

export default Corticosteroid