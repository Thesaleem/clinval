import Section, { SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import '../../UI/Table.css'
import { diureticsDrugs } from "../../../assets/dosingCalc";
import { useState, useEffect } from "react";
import arrow from '../../../assets/reuse.png'
import { getAnalytics, logEvent } from "firebase/analytics";


type FormData = {
    type: string,
    convertFrom: string,
    convertTo: string,
    dose: string,
}

type DrugData = {
    drug: string,
    value: number,
    type: string, 
}


const Corticosteroid = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [from, setFrom] = useState<string>()
    const [to, setTo] = useState<string>()
    const [dose, setDose] = useState<number>()
    const [result, setResult] = useState<string>()
    
    const watchType = watch('type')

    useEffect(() => {
        if (watchType === "Loop") {
            setValue("convertFrom", "Furosemide Oral");
            setValue("convertTo", "Furosemide Oral");
          } else if (watchType === "Thiazide") {
            setValue("convertFrom", "Hydrochlorothiazide");
            setValue("convertTo", "Hydrochlorothiazide");
          }
    }, [watchType, setValue])

    const onSubmit:SubmitHandler<FormData> = data => {
        const {convertFrom, convertTo, dose} = data
        const convertedFromDrug = diureticsDrugs.find(item => item.drug === convertFrom) as DrugData
        const convertedToDrug = diureticsDrugs.find(item => item.drug === convertTo) as DrugData
        let drugEquivalent: number = 0
        let standardEquivalent: number //furosemide is the standard for loops and hydrochlorothiazide is for thiazides
        if(convertedFromDrug.type === 'loop'){
            standardEquivalent =  convertedFromDrug.value * +dose
            drugEquivalent = standardEquivalent / convertedToDrug.value
            console.log(drugEquivalent);
        } else if(convertedFromDrug.type === 'thiazide'){
            standardEquivalent = convertedFromDrug.value * +dose
            drugEquivalent = standardEquivalent / convertedToDrug.value
            console.log(drugEquivalent);
        }
        const answer = (drugEquivalent + '').includes('.') ? drugEquivalent.toFixed(2) : drugEquivalent
        setFrom(convertFrom)
        setTo(convertTo)
        setDose(+dose)
        setResult(answer + '')
        const analytics = getAnalytics()
        logEvent(analytics, 'Diuretics_Converter_Button', {
          'name': 'Diuretics Converter'
        })
    }    

    return (
        <Section>
            <SectionTitle>
                Diuretics Conversion
            </SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%]">
                <div className="flex flex-col space-y-1">

                    <div className="flex relative justify-between items-center pt-4 pb-2">
                        <label 
                            htmlFor="type" 
                            className="font-semibold text-sm py-2 md:text-base">
                            Type of Diuretic
                        </label>
                        <div className="flex items-center w-[53%] xl:w-[60%]">
                        
                            <div className="">
                                <select className="focus:outline-none" id='type' {...register("type",  { required: true })}>
                                    <option value="Loop">Loop</option>
                                    <option value="Thiazide">Thiazide</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="flex relative justify-between items-center pt-4 pb-2">
                        <label 
                            htmlFor="convertFrom" 
                            className="font-semibold text-sm py-2 md:text-base">
                            Convert from
                        </label>
                        <div className="flex items-center xl:w-[60%]">

                            { watchType === 'Loop' || !watchType ?
                            
                            <div className="">
                                <select className="focus:outline-none" id='convertFrom' {...register("convertFrom",  { required: true })} defaultValue='Furosemide Oral'>
                                    <option value="Furosemide Oral">Furosemide Oral</option>
                                    <option value="Furosemide IV">Furosemide IV</option>
                                    <option value="Bumetanide">Bumetanide (Oral / IV)</option>
                                    <option value="Torsemide">Torsemide  (Oral / IV)</option>
                                </select>
                            </div>  
                            
                            :

                            <div className="">
                                <select className="focus:outline-none" id='convertFrom' {...register("convertFrom",  { required: true })} defaultValue='Hydrochlorothiazide'>
                                    <option value="Hydrochlorothiazide">Hydrochlorothiazide</option>
                                    <option value="Indapamide">Indapamide</option>
                                    <option value="Chlorthalidone">Chlorthalidone</option>
                                    <option value="Chlorothiazide">Chlorothiazide</option>
                                    <option value="Metolazone">Metolazone</option>
                                    <option value="Bendroflumethiazide">Bendroflumethiazide</option>
                                </select>
                            </div>
                            }
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
                        
                            {watchType === 'Loop' || !watchType ? 
                            
                            <div className="">
                                <select className="focus:outline-none" id='convertTo' {...register("convertTo",  { required: true })}>
                                    <option value="Furosemide Oral">Furosemide Oral</option>
                                    <option value="Furosemide IV">Furosemide IV</option>
                                    <option value="Bumetanide">Bumetanide (Oral / IV)</option>
                                    <option value="Torsemide">Torsemide  (Oral / IV)</option>
                                </select>
                            </div> :

                            <div className="">
                                <select className="focus:outline-none" id='convertTo' {...register("convertTo",  { required: true })}>
                                    <option value="Hydrochlorothiazide">Hydrochlorothiazide</option>
                                    <option value="Indapamide">Indapamide</option>
                                    <option value="Chlorthalidone">Chlorthalidone</option>
                                    <option value="Chlorothiazide">Chlorothiazide</option>
                                    <option value="Metolazone">Metolazone</option>
                                    <option value="Bendroflumethiazide">Bendroflumethiazide</option>
                                </select>
                            </div>
                            }
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
                        <div className="flex items-center md:space-x-6 justify-between md:justify-start">
                            <p className="md:text-xl font-medium w-[40%] md:w-auto "> {from} {dose} mg</p>
                            <img src={arrow} className='w-8 ' alt="" />
                            <p className="md:text-xl font-medium w-[40%] md:w-auto"> {to} {result} mg</p>
                        </div>
                    </div>
                )}
            
            <div className="overflow-x-auto">

                <table className=" text-write mt-6 ">
                    <caption className="py-4 font-medium text-pry-blue text-start text-xl md:text-2xl">Diuretic Dose Equivalency Table</caption>
                    
                    <thead>
                        <tr  className="">
                            <th  className=" px-6 py-4">Diuretic</th>
                            <th  className=" px-6 py-4">Equipotent Dose (mg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} className='text-center font-semibold py-2'>Loop Diuretics</td>
                        </tr>

                        <tr  className="">
                            <td  className="px-6 text-center">Furosemide Oral</td>
                            <td  className="px-6 py-4 text-center">40</td>
                        </tr>
                        
                        <tr  className="">
                            <td  className="px-6 text-center">Furosemide IV</td>
                            <td  className="px-6 py-4 text-center">20</td>
                        </tr>

                        <tr  className="">
                            <td className="px-6 text-center">Bumetanide (Oral/ IV)</td>
                            <td className="px-6 py-4 text-center">1</td>
                        </tr>
                       
                        <tr  className="">
                            <td className="px-6 text-center">Torsemide (Oral/ IV)</td>
                            <td className="px-6 py-4 text-center">20</td>
                        </tr>

                        <tr>
                            <td colSpan={3} className='text-center font-semibold py-2'>Thiazide Diuretics</td>
                        </tr>
                        <tr>
                            <td className="px-6 text-center">Hydrochlorothiazide</td>
                            <td className="px-6 py-4 text-center">25</td>
                        </tr>
                        <tr>
                            <td className="px-6 text-center">Chlorthalidone</td>
                            <td className="px-6 py-4 text-center">12.5</td>
                        </tr>
                        <tr>
                            <td className="px-6 text-center">Indapamide</td>
                            <td className="px-6 py-4 text-center">2.5</td>
                        </tr>
                        <tr>
                            <td className="px-6 text-center">Chlorothiazide</td>
                            <td className="px-6 py-4 text-center">250</td>
                        </tr>
                        <tr>
                            <td className="px-6 text-center">Metolazone</td>
                            <td className="px-6 py-4 text-center">2.5</td>
                        </tr>
                        <tr>
                            <td className="px-6 text-center">Bendroflumethiazide</td>
                            <td className="px-6 py-4 text-center">2.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <div className="mt-8 py-10 max-w-2xl">
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Jentzer, Jacob C., Tracy A. DeWald, and Adrian F. Hernandez. 
                    "Combination of loop diuretics with thiazide-type diuretics in heart failure." 
                    Journal of the American College of Cardiology 56.19 (2010): 1527-1534.
                </p>                
                <p className="pt-2">
                    Dietrich, Eric A., and Kyle Davis. "Hydrochlorothiazide for Hypertension: 
                    Is It the Diuretic of Choice?." Consultant 56.6 (2016): 544-545.
                </p>                
                <p className="pt-2">
                    Pham, David, and Justin L. Grodin. "Dilemmas in the dosing of heart failure drugs: 
                    titrating diuretics in chronic heart failure." Cardiac failure review 3.2 (2017): 108.
                </p>                
            </div>
        </Section>
    )
}

export default Corticosteroid