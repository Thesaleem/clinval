import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";


type FormData = {
    weight: string,
    unit: string,
}

const HollidaySegar = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [dailyVol, setDailyVol] = useState<string>('')
    const [fluidRate, setFluidRate] = useState<string>('')

    const onSubmit:SubmitHandler<FormData> = data => {
        const weightValue = data.unit === 'lb' ? +data.weight / 2.205 : +data.weight
        let fluidVol;
        if (weightValue < 11 ){
            fluidVol = Math.ceil(100 * weightValue)
        } else if (weightValue < 21){
            fluidVol = Math.ceil((50 * (weightValue - 10)) + 1000)
        }
        else {
            fluidVol = Math.ceil((20 * (weightValue - 20)) + 1500)
        }
        const rate = Math.round(fluidVol / 24)
        setDailyVol(fluidVol + '')
        setFluidRate(rate + '')
        
    }
    return (
        <Section>
            <SectionTitle>
                Fluid Maintenance Calculator Using Holliday-Segar Rule
            </SectionTitle>
            <SectionText>
                Holliday and Segar derived the maintenance fluid calculator in 
                1957 for the paediatric population but has persisted in use for both 
                adult and paediatric patients. The idea behind the formula is based 
                on the assumption that hospitalised patients have greater energy 
                expenditure and determines fluid requirements based on weight alone. 
                There are other maintenance formulas but the 4-2-1 remains the most widely used.
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

                                <select className="focus:outline-none" id='unit' {...register("unit", { required: true })}>
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


                <div className=" mt-5 md:mt-7 md:w-[50%] mx-auto">
                    <button
                        disabled={!isValid}
                        className=" disabled:opacity-40 disabled:cursor-not-allowed w-full bg-btn-blue disabled:hover:bg-btn-blue hover:bg-light-blue text-white py-2 px-16 uppercase font-bold">
                        Submit
                    </button>
                </div>
            </form>

            {dailyVol && (
                <div className="mt-7 max-w-2xl">
                    <h1 className="text-xl md:text-2xl font-medium">
                        Total Fluid Volume: {dailyVol} ml
                    </h1>
                    <h1 className="text-xl md:text-2xl font-medium">
                        Infusion Rate: {fluidRate} ml/hr
                    </h1>
                    
                </div>

            )}


            <div className="mt-8 py-10 max-w-2xl">
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Holliday MA and Segar WE. 
                    The maintenance need for water in parenteral fluid therapy.
                    Pediatrics 1957, 19 (5): 823-32
                </p>                
            </div>
        </Section>
    )
}

export default HollidaySegar