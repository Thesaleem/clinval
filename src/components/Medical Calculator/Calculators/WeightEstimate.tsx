import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";

type FormData = {
    age: string,
    unit: string,
}

const WeightEstimate = () => {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const watchUnit = watch('unit')
    const [result, setResult] = useState<string>('')

    const onSubmit:SubmitHandler<FormData> = data => {
        const {unit, age} = data
        let childAge = 0
        let estimatedWeight;
        if(unit === 'months' && +age <= 12){
            estimatedWeight = ((0.5 * +age) + 4).toFixed(2)
        }
        else if (unit === 'months' && +age > 12){
            childAge = +age / 12
        } else {
            childAge = +age
        }
        
        if (childAge >= 1 && childAge <= 5){
            estimatedWeight = Math.round((2 * childAge) + 8)
        }
        else if (childAge >= 6 && childAge <= 12){
            estimatedWeight = Math.round((3 * childAge) + 7)
        }
        setResult(estimatedWeight + '')
    }
    return (
        <Section>
            <SectionTitle>
                Paediatric Weight Estimation
            </SectionTitle>
            <SectionText>
                This formula was adopted from the New Advanced Paediatric Life Support. 
                It is used for children up to 12 years (144 months).
            </SectionText>


            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%] ">
                <div className="flex flex-col space-y-1">

                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="age" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base">
                            Age
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="age"
                                {...watchUnit === 'months' && {...register("age", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^(0|[1-9]\d?|1[0-3]\d|14[0-4])(\.00)?$/,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}}
                                {...watchUnit === 'years' && {...register("age", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^([0-9]|[1-9][0-2])(\.\d+)?$/,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}}
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                            />
                            <div className="ml-2">

                                <select className="focus:outline-none" id='unit' {...register("unit", { required: true })}>
                                    <option value="years">years</option>
                                    <option value="months">months</option>
                                </select>

                            </div>
                        </div>
                        {errors.age?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-14 md:right-[90px] xl:right-[28%]'>{errors.age?.message}</p>
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
                        Estimated weight: {result}kg
                    </h1>
                    <h1 className="text-xl md:text-2xl font-medium">
                    </h1>
                    
                </div>

            )}


            <div className="mt-8 py-10 max-w-2xl">
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Graves, Lara, et al. "A comparison of actual to estimated weights in Australian 
                    children attending a tertiary children's’ hospital, using the original and updated APLS, 
                    Luscombe and Owens, Best Guess formulae and the Broselow tape." Resuscitation 85.3 (2014): 392-396.
                </p>                
            </div>
        </Section>
    )
}

export default WeightEstimate