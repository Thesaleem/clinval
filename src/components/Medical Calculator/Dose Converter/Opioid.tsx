import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import '../../UI/Table.css'
import { opioidDrugs } from "../../../assets/dosingCalc";
import { useState } from "react";
import arrow from '../../../assets/reuse.png'
import { getAnalytics, logEvent } from "firebase/analytics";


type FormData = {
    drug: string,
    dose: string,
}

type DrugsData = {
    drug: string,
    value: number | {[key: string]: number}
}


const getDoseRange = (dose: number): string => {
    if(dose >= 1 && dose <= 20){
        return '1-20'
    }
    else if(dose >= 21 && dose <= 40){
        return '21-40'
    }
    else if(dose >= 41 && dose <= 60){
        return '41-60'
    } else if (dose >= 61){
        return '61'
    } else {
        return '0'
    }

}

const Opioid = () => {
    const analytics = getAnalytics()
        logEvent(analytics, 'Opioid_Converter_Page_Loaded', {
            'name': 'Opioid Converter'
          }) 
    
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [result, setResult] = useState<string>()
    const [dose, setDose] = useState('')
    const [drug, setDrug] = useState('')

    const watchDrug = watch('drug')
    const onSubmit:SubmitHandler<FormData> = data => {
        const {dose, drug} = data
        const selectedDrug = opioidDrugs.find(item => item.drug === drug) as DrugsData
        let estimatedEquiv: number
        if(selectedDrug!.drug === 'Methadone'){
            const doseRange = getDoseRange(+dose)
            const factor = (selectedDrug!.value as {[key: string]: number})[doseRange]

            estimatedEquiv = factor * +dose
        } else {
             estimatedEquiv = +selectedDrug.value * +dose
        }
        const answer   = (estimatedEquiv + '').includes('.') ? estimatedEquiv.toFixed(2) : estimatedEquiv
        setResult(answer + '')
        setDose(dose)
        setDrug(drug)
        const analytics = getAnalytics()
        logEvent(analytics, 'Opioid_Converter_Button', {
            'name': 'Opioid Converter'
          }) 
    }

    return (
        <Section>
        <SectionTitle>
            Opioid Conversion
        </SectionTitle>
        <SectionText>
            Calculating doses of opioids is important to appropriately prescribe, manage, titrate and taper opioids. 
            Morphine milligram equivalents (MME) is an opioid dosage's equivalency to morphine. It is usually used to 
            track or gauge the overdose potential of the amount of opioid that is being given at a particular time.

        </SectionText>
        <SectionText>
            Do not use the calculated dose in MMEs to determine dosage 
            for converting one opioid to another—the new opioid should be lower to avoid unintentional 
            overdose caused by incomplete cross-tolerance and individual differences in opioid pharmacokinetics. 
            Consult the medication label.

        </SectionText>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%]">
            <div className="flex flex-col space-y-1">

                <div className="flex relative justify-between items-center pt-4 pb-2">
                    <label 
                        htmlFor="drug" 
                        className="font-semibold text-sm py-2 md:text-base">
                        Drug (opioid)
                    </label>
                    <div className="flex items-center w-[50%]  xl:w-[60%]">
                    
                        <div className="w-full md:w-[auto]">
                            <select className="focus:outline-none w-full md:w-[auto]" id='drug' {...register("drug", { required: true } )}>
                                <option value="Codeine">Codeine</option>
                                <option value="Fentanyl">Fentanyl Patch</option>
                                <option value="Hydrocodone">Hydrocodone</option>
                                <option value="Hydromorphone">Hydromorphone</option>
                                <option value="Tramadol">Tramadol</option>
                                <option value="Morphine">Morphine</option>
                                <option value="Oxycodone">Oxycodone</option>
                                <option value="Oxymorphone">Oxymorphone</option>
                                <option value="Methadone">Methadone</option>
                            </select>

                        </div>
                    </div>
                </div>

                <div className="flex relative justify-between items-center pt-4 pb-2">
                    <label 
                        htmlFor="dose" 
                        className="font-semibold text-sm py-2 w-[40%]  md:text-base">
                        Total Daily Dose of Opioid
                    </label>
                    <div className="flex items-center w-[50%] xl:w-[60%]">
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
                        <p className="ml-2">{watchDrug === 'Fentanyl' ? 'mcg/hr' : 'mg/day'}</p>
                    </div>
                    {errors.dose?.message && (
                    <p role="alert" className='text-[13px] text-[red] absolute md:top-14 top-16 right-4 md:right-[6rem] lg:right-[7.5rem] xl:right-[28%]'>{errors.dose?.message}</p>
                    )}
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
                        Oral Morphine Equivalent:
                    </h1>
                    <div className="flex items-center space-x-6 justify-center md:justify-start">
                            <p className="md:text-xl font-medium"> {drug} {dose} {watchDrug === 'Fentanyl' ? 'mcg/hr' : 'mg/day'}</p>
                            <img src={arrow} className='w-8' alt="" />
                            <p className="md:text-xl font-medium"> Morphine {result} MME/day</p>
                        </div>
                </div>
            )}
        
        <div className="overflow-x-auto">

            <table className=" text-write mt-6">
                <caption className="py-4 font-medium text-pry-blue text-start text-xl md:text-2xl">Morphine Milligram Equivalents</caption>
                
                <thead>
                    <tr  className="">
                        <th  className=" px-6 py-4">Opioid</th>
                        <th  className=" px-6 py-4">Conversion Factor (MME)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className="">
                        <td  className=" px-6 text-start">Codeine</td>
                        <td  className=" px-6 py-4 text-center">0.15</td>
                    </tr>

                    <tr  className="">
                        <td className=" px-6 text-start">Fentanyl (mcg/hr)</td>
                        <td className="px-6 py-4 text-center">2.4</td>
                    </tr>

                    <tr>
                        <td className=" px-6 text-start">Hydrocodone</td>
                        <td className="px-6 py-4 text-center">1</td>
                    </tr>
                    <tr>
                        <td className=" px-6 text-start">Hydromorphone</td>
                        <td className="px-6 py-4 text-center">4</td>
                    </tr>
                    <tr>
                        <td className="px-6 text-start">Morphine</td>
                        <td className="px-6 py-4 text-center">1</td>
                    </tr>
                    <tr>
                        <td className="px-6 text-start">Tramadol</td>
                        <td className="px-6 py-4 text-center">0.1</td>
                    </tr>
                    <tr>
                        <td className=" px-6 text-start">Oxycodone</td>
                        <td className="px-6 py-4 text-center">1.5</td>
                    </tr>

                    <tr>
                        <td className=" px-6 text-start">Oxymorphone</td>
                        <td className="px-6 py-4 text-center">3</td>
                    </tr>
                    <tr>
                        <td className=" px-6 py-2 text-start font-semibold" colSpan={3}>Methadone</td>
                    </tr>
                    <tr>
                        <td className=" px-6 text-center">1-20 mg/day</td>
                        <td className="px-6 py-4 text-center">4</td>
                    </tr>
                    <tr>
                        <td className=" px-6 text-center">21-40 mg/day</td>
                        <td className="px-6 py-4 text-center">8</td>
                    </tr>
                    <tr>
                        <td className=" px-6 text-center">41-60 mg/day</td>
                        <td className="px-6 py-4 text-center">10</td>
                    </tr>
                    <tr>
                        <td className=" px-6 text-center">{'>61 mg/day'}</td>
                        <td className="px-6 py-4 text-center">12</td>
                    </tr>
                </tbody>
            </table>
        </div>

        
        <div className="mt-8 py-10 max-w-2xl">
            <p className="font-semibold text-xl text-pry-blue">References</p>
            <p className="pt-2">
                Dowell, Deborah, Tamara M. Haegerich, and Roger Chou. 
                "CDC guideline for prescribing opioids for chronic pain—United States, 2016." Jama 315.15 (2016): 1624-1645.
            </p>                
            <p className="pt-2">
                Centers for Disease Control and Prevention. "Calculating total daily dose of opioids 
                for safer dosage." (2017).
            </p>                
                          
        </div>
    </Section>
    )
}

export default Opioid