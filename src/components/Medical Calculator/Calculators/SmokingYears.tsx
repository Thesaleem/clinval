import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";


type FormData = {
    cigpacks: string,
    years: string,

}


const SmokingYears = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [result, setResult] = useState<string>('')

    const onSubmit:SubmitHandler<FormData> = data => {
        const response = Math.round(+data.cigpacks * +data.years)
        setResult(response + '')
    }
    return (
        <Section>
            <SectionTitle>
                Pack Years
            </SectionTitle>
            <SectionText>
                It is used to quantify smoking history. Smoking pack years can give a 
                doctor or other health care provider an idea of a patient's risk level of developing lung cancer and other lung diseases.
            </SectionText>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%] ">
                <div className="flex flex-col space-y-1">

                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="cigpacks" 
                            className="font-semibold text-sm md:w-[40%] mb-4 md:mb-0 md:text-base">
                            Pack of cigarettes smoked per day (1 pack = 20 cigarettes)
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="cigpacks"
                                {...register("cigpacks", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^[0-9]*\.?[0-9]+$/,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                            />
                            <p className="ml-2">packs</p>
                        </div>
                        {errors.cigpacks?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-[70px] md:right-[90px] xl:right-[28%]'>{errors.cigpacks?.message}</p>
                        )}
                    </div>


                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="years" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base md:w-[40%]">
                            Number of years patient has smoked
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="years"
                                {...register("years", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^[0-9]*\.?[0-9]+$/,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                            />
                            <p className="ml-2">years</p>
                        </div>
                        {errors.years?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-14 md:right-[90px] xl:right-[28%]'>{errors.years?.message}</p>
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
                        Result: {result} pack years
                    </h1>
                </div>
            )}

            <div className="mt-8 py-10 max-w-2xl">    
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Dictionary, N. D. "National Cancer Institute at the National Institutes of Health." (2015).
                </p>
               
            </div>
        </Section>
    )
}

export default SmokingYears