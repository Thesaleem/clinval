import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";

type FormData = {
    weight: string,
    potassium: string,
    unit: string,
    electrolyteUnit: string,

}

const Potassium = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [result, setResult] = useState<string>('')
    const [unit, setUnit] = useState<string>('')
    const [total, setTotal] = useState<number>()


    const onSubmit:SubmitHandler<FormData> = data => {
        const {unit, weight, electrolyteUnit, potassium} = data
        const weightValue = unit === 'lb' ? +weight / 2.205 : +weight
        const deficit = (3.5 - +potassium) * weightValue * 0.4

        setTotal(weightValue + deficit)
        setResult(deficit + '')
        setUnit(electrolyteUnit)
        const analytics = getAnalytics()
        logEvent(analytics, 'Potassium_Deficit_Calculator_Button', {
          'name': 'Potassium Deficit'
        })
    }

    return (
        <Section>
            <SectionTitle>Potassium Deficit Calculator</SectionTitle>
            <SectionText>
                Potassium is the most abundant cation in the intracellular fluid (ICF), balancing the sodium
                contained in the extracellular fluid (ECF) and maintaining electroneutrality of bodily
                fluids. Potassium regulation is primarily under the control of the
                kidneys with excess dietary potassium being excreted in the urine.
                Although mild abnormalities of serum potassium are considered a
                nuisance, severe hyperkalemia or hypokalemia can be life threatening.
                Caution must be exercised when repleting potassium with IV agents
                given possible vein irritation and/or thrombophlebitis. Infusion
                exceeding 10mEq/h requires cardiac monitoring and the maximum rate
                being 40mEq/h must be administered via a central line. In cases of
                refractory hypokalemia, be sure to check for hypomagnesemia and in
                such cases, magnesium replacement should accompany potassium
                replacement.
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
                            htmlFor="potassium" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base md:w-[40%]">
                            Current Potassium Level
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="potassium"
                                {...register("potassium", { 
                                        required: true, 
                                        pattern:{
                                            value: /^[0-9]*\.?[0-9]+$/ ,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                placeholder="3.5-5.5"
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                                
                            />
                            <div className="ml-2">

                                <select className="focus:outline-none" id='electrolyteUnit' {...register("electrolyteUnit", { required: true })}>
                                    <option value="mEq/L">mEq/L</option>
                                    <option value="mmol/L"> mmol/L</option>
                                </select>
                            </div>
                        </div>
                        {errors.electrolyteUnit?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-[70px] md:right-[90px] xl:right-[28%]'>{errors.electrolyteUnit?.message}</p>
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
                        NB: This formula does not factor in chronic loses and the fact that the bulk of potassium is intracellular
                    </h1>
                    <h1 className="text-xl md:text-xl mt-3 leading-9">
                        Potassium deficit: {`${result}${unit}`}
                    </h1>
                    <h1 className="text-xl md:text-xl mt-3 leading-9">
                        Daily requirement is 1 mmol per kilogram and total requirement(daily reqiurement plus deficit) would be {`${total}${unit}`}
                    </h1>
                </div>
            )}


            <div className="mt-8 py-10 max-w-2xl">    
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Edited by Chisholm-Burns, Marie A., et al. Pharmacotherapy principles & practice. 
                    McGraw-Hill Education, 2016.
                </p>
                <p className="pt-2">
                    <a href=" https://www.medicinehack.com/2011/07/hypokalemia-potassium-replacement.html">
                        Hypokalemia - Potassium replacement calculation 

                    </a>
                </p>
               
            </div>
        </Section>
    );
}

export default Potassium