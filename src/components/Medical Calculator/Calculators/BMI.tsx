import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";


type FormData = {
    weight: string,
    height: string,
    weightUnit: string,
    heightUnit: string,
}

const BMI = () => {
    const analytics = getAnalytics()
        logEvent(analytics, 'BMI_Page_Loaded', {
          'name': 'Body Mass Index'
        })
    
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [result, setResult] = useState<string>('')

    const onSubmit:SubmitHandler<FormData> = data => {
        const weightValue = data.weightUnit === 'lb' ? +data.weight / 2.205 : +data.weight
        const heightValue = data.heightUnit === 'in' ? +data.height / 39.37 : +data.height
        const BMI = weightValue / (Math.pow(heightValue, 2))
        const roundedBMI = (BMI + '').includes('.') ? BMI.toFixed(2) : BMI
        setResult(roundedBMI + '')
        const analytics = getAnalytics()
        logEvent(analytics, 'BMI_Button', {
          'name': 'Body Mass Index'
        })
    }
    return (
        <Section>
            <SectionTitle>
                Body Mass Index
            </SectionTitle>
            <SectionText>
                Body Mass Index (BMI) is a meaure of body fat of adult men and women using the weight 
                and height. BMI looks out for weight problems that can lead to hhealth conditions and 
                does not diagnose the body fat or health of an individual. 
                The limitations of BMI should be considered. BMI is actually a measure of excess weight 
                rather than excess body fat. Certain factors such as age, etchnicity and muscle mass can 
                influence the BMI.
            </SectionText>


            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%] ">

                <div className="flex flex-col space-y-1">

                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="weight" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base">
                            Weight
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="weight"
                                {...register("weight", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^[0-9]*\.?[0-9]+$/ ,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                            />
                            <div className="ml-2">

                                <select className="focus:outline-none" id='weightUnit' {...register("weightUnit", { required: true })}>
                                    <option value="kg">kg</option>
                                    <option value="lb"> lb</option>
                                </select>

                            </div>
                        </div>
                        {errors.weight?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-14 md:right-[90px] xl:right-[28%]'>{errors.weight?.message}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col space-y-1">

                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="height" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base">
                            Height
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="height"
                                {...register("height", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^[0-9]*\.?[0-9]+$/ ,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                            />
                            <div className="ml-2">

                                <select className="focus:outline-none" id='heightUnit' {...register("heightUnit", { required: true })}>
                                    <option value="m">m</option>
                                    <option value="in"> in</option>
                                </select>

                            </div>
                        </div>
                        {errors.weight?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-14 md:right-[90px] xl:right-[28%]'>{errors.weight?.message}</p>
                        )}
                    </div>
                </div>


                <div className=" mt-5 md:mt-7 md:w-[50%] mx-auto">
                    <button
                        disabled={!isValid}
                        className=" disabled:opacity-40 disabled:cursor-not-allowed w-full bg-btn-blue disabled:hover:bg-btn-blue hover:bg-light-blue text-white py-2 px-16 uppercase font-bold">
                        Submit
                    </button>
                </div>
            </form>

            {result && (
                <div className="mt-7 max-w-2xl">
                    <h1 className="text-xl md:text-2xl font-medium">
                        Body Mass Index: {result}
                    </h1>
                    
                </div>

            )}


            <div className="overflow-x-auto">

                <table className=" text-write mt-6 ">
                    <caption className="py-4 font-medium text-pry-blue text-start text-xl md:text-2xl">BMI Categories</caption>
                    
                    <thead>
                        <tr  className="">
                            <th  className=" px-6 py-4">BMI</th>
                            <th  className=" px-6 py-4">Weight Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  className="">
                            <td  className="px-6 text-center">Below 18.5</td>
                            <td  className=" px-6 py-4 text-center">Underweight</td>
                        </tr>
                        <tr  className="">
                            <td className="px-6 text-center">18.5 - 24.9</td>
                            <td className="px-6 py-4 text-center">Normal</td>
                        </tr>

                        <tr>
                            <td className="px-6 text-center">25.0 – 29.9</td>
                            <td className="px-6 py-4 text-center"> Overweight</td>
                        </tr>
                        <tr>
                            <td className="px-6 text-center">30.0 and Above</td>
                            <td className="px-6 py-4 text-center">Obese</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className="mt-8 py-10 max-w-2xl">
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Centers for Disease Control and Prevention. "Body mass index: Considerations for practitioners." 
                    Cdc [Internet] (2011): 1-4.                
                </p>                
            </div>
        </Section>
    )
}

export default BMI