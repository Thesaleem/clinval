import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";


type FormData = {
    weight: string,
    tbsa: string,
    unit: string,

}


const Parkland = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [result, setResult] = useState<string>('')

    const onSubmit:SubmitHandler<FormData> = data => {
        const weightValue = data.unit === 'lb' ? +data.weight / 2.205 : +data.weight
        const fluidVol = ((weightValue * 4) * +data.tbsa ) / 1000
        setResult(fluidVol + '')
        const analytics = getAnalytics()
        logEvent(analytics, 'Parkland_Formula_Button', {
          'name': 'Parkland Formula'
        })
    }

    return (
        <Section>
            <SectionTitle>Parkland Formula</SectionTitle>
            <SectionText>
                Aggressive fluid resuscitation is important in the management of
                severe burn patients. The parkland formula is the widely used
                treatment protocol that aids in calculating the initial fluid
                requirements for these patients. This formula is used specifically for
                patients who have sustained large deep partial thickness burns or full
                thickness burns with greater than 20% of their total body surface area (TBSA)
                in adults and greater than 10% in children and elderly. The total body
                surface area with burns and patient’s weight is needed to calculate
                this formula. The TBSA can be gotten from “The Wallace Rule of Nines".
                The calculated fluid is giving with the first 24 hours period from the
                time injury was sustained. 50% given in the first 8 hours and 50%
                given in the next 16 hours. Ringers Lactate is the IV solution of
                choice.
            </SectionText>


            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%] ">
                <div className="flex flex-col space-y-1">

                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="weight" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base ">
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
                    

                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="tbsa" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base md:w-[40%]">
                            Total Body Surface Area with 2nd or 3rd Degree Burns?
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="tbsa"
                                {...register("tbsa", { 
                                        required: true, 
                                        pattern:{
                                            value: /^(100(\.0{1,2})?|\d{1,2}(\.\d{1,2})?)$/,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                placeholder="0-100"
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                                
                            />
                            <p className="ml-2">mmHg</p>
                        </div>
                        {errors.tbsa?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-[70px] md:right-[90px] xl:right-[28%]'>{errors.tbsa?.message}</p>
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
                    <h1 className="text-xl md:text-xl leading-9">
                         {result}L of fluid requirements from time of burn in the first 24 hours.
                    </h1>
                    <h1 className="text-xl md:text-xl mt-3 leading-9">
                         {+result / 2}L of fluid required in the first 8 hours from time of burn at a rate of {(+result / 2) / 8 * 1000}ml/hour.
                    </h1>
                    <h1 className="text-xl md:text-xl mt-3 leading-9 ">
                         {+result / 2}L of fluid required in the next 16 hours at a rate of {(+result / 2) / 16 * 1000}ml/hour.
                    </h1>
                </div>
            )}
            


            <div className="mt-8 py-10 max-w-2xl">    
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Mehta, Mitali, and Gregory J. Tudor. "Parkland formula." (2019).
                </p>
               
            </div>
        </Section>
    );
}

export default Parkland