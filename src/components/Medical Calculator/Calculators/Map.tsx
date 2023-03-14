import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";



type FormData = {
    sbp: string,
    dbp: string,

}

const Map = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [result, setResult] = useState<string>('')

    const onSubmit:SubmitHandler<FormData> = data => {
        const response = Math.round(+data.dbp + ((+data.sbp - +data.dbp) / 3))
        setResult(response + '')
        const analytics = getAnalytics()
        logEvent(analytics, 'Mean_Arterial_Pressure_Button', {
          'name': 'Mean Arterial Pressure'
        })
    }
    return (
        <Section>
            <SectionTitle>
                Mean Arterial Pressure
            </SectionTitle>
            <SectionText>
                Mean Arterial Pressure (MAP) is the average arterial pressure 
                throughout a cardiac cycle, systole and diastole.  
                It is influenced by cardiac output and systemic vascular resistance. 
                Depending on the MAP, patients with abnormal values can be treated with 
                fluids, vasopressors, vasodilators etc.
            </SectionText>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%] ">
                <div className="flex flex-col space-y-1">

                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="sbp" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base">
                            Systolic Blood Pressure
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="sbp"
                                {...register("sbp", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^[0-9]\d*$/ ,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                placeholder="100-120"
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                            />
                            <p className="ml-2">mmHg</p>
                        </div>
                        {errors.sbp?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-14 md:right-[90px] xl:right-[28%]'>{errors.sbp?.message}</p>
                        )}
                    </div>


                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="dbp" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base">
                            Diastolic Blood Pressure
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="dbp"
                                {...register("dbp", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^[0-9]\d*$/ ,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                placeholder="60-80"
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                            />
                            <p className="ml-2">mmHg</p>
                        </div>
                        {errors.dbp?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-14 md:right-[90px] xl:right-[28%]'>{errors.dbp?.message}</p>
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

            {result  && (
                <div className="mt-7 max-w-2xl">
                    <h1 className="text-xl md:text-2xl font-medium">
                        Result: {result}mmHg
                    </h1>
                </div>
            )}

            <div className="mt-8 py-10 max-w-2xl">    
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    DeMers, Daniel, and Daliah Wachs. "Physiology, mean arterial pressure." 
                    StatPearls [Internet]. StatPearls Publishing, 2021.
                </p>
               
            </div>
        </Section>
    )
}

export default Map