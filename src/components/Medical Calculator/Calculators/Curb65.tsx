import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";


type FormData = {
    confusion: string,
    urea: string,
    repiratoryRate: string,
    bloodPressure: string,
    age: string,
}


const Curb65 = () => {
    const [result, setResult] = useState<string>('')
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const onSubmit:SubmitHandler<FormData> = data => {
        const values = Object.values(data)
        const response = values.reduce((acc, cur) => acc + parseInt(cur), 0)
        setResult(response + '')
        const analytics = getAnalytics()
        logEvent(analytics, 'Curb65_Button', {
          'name': 'Curb65'
        })
    }
    return (
        <Section>
            <SectionTitle>CURB-65</SectionTitle>
            <SectionText>
                It is a severity score to predict mortality secondary to 
                community acquired pneumonia and it can be used to identify 
                patients that can be managed as outpatient.
            </SectionText>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%]">
                <div className="flex flex-col space-y-4">


                    <div className="flex justify-between">

                    <p className="font-semibold">Confusion</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="confusion-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("confusion", { required: true })} type="radio" id='confusion-yes' value="1" />
                            </div>

                            <div className="ml-4">
                                <label htmlFor="confusion-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("confusion", { required: true })} type="radio" id='confusion-no' value="0" />
                            </div>
                        </div>

                    </div>


                    <div className="flex justify-between">
                        <p className="font-semibold">{'Urea >19mg/dl (>7mmol/l)'}</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="urea-yes"  className="mr-3 font-semibold ">Yes</label>
                                <input {...register("urea", { required: true })} type="radio" id='urea-yes' value="1" />                    
                            </div>

                            <div className="ml-4">
                                <label htmlFor="urea-no"  className="mr-3 font-semibold ">No</label>
                                <input {...register("urea", { required: true })} type="radio" id='urea-no' value=" 0" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <p className="font-semibold">Respiratory Rate ≥ 30/min</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="rr-yes"  className="mr-3 font-semibold ">Yes</label>
                                <input {...register("repiratoryRate", { required: true })} type="radio" id='rr-yes' value="1" />
                            </div>

                            <div className="ml-4">
                                <label htmlFor="rr-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("repiratoryRate", { required: true })} type="radio" id='rr-no' value=" 0" />
                            </div>
                        </div>
                    </div>



                    <div className="flex justify-between">
                        <p className="font-semibold">{'Systolic BP <90 mmHg or Diastolic BP ≤ 60 mmHg'}</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="bp-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("bloodPressure", { required: true })} type="radio" id='bp-yes' value="1" />                    
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="bp-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("bloodPressure", { required: true })} type="radio" id='bp-no' value="0" />                    
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-semibold">Age ≥ 65 years</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="age-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("age", { required: true })} type="radio" id='age-yes' value="1" />
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="age-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("age", { required: true })} type="radio" id='age-no' value=" 0" />
                            </div>
                        </div>
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
                        Result: {result} point{+result === 0 ? '' : 's'}
                    </h1>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className=" text-write mt-6">
                    <caption className="py-4 font-medium text-pry-blue text-start text-xl md:text-2xl">Score Interpretation</caption>
                    
                    <thead>
                        <tr  className="">
                            <th  className=" px-6 py-4"> CURB-65 score</th>
                            <th  className=" px-6 py-4">Mortality Risk</th>
                            <th  className=" px-6 py-4">Recommendation per Derivation Study</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  className="">
                            <td  className=" text-center">0</td>
                            <td  className=" px-6 py-4 text-center">0.60%</td>
                            <td  className=" px-6 py-4 text-center">Low risk, consider home treatment</td>

                        </tr>
                        <tr  className="">
                            <td className="text-center">1</td>
                            <td className="px-6 py-4 text-center">2.70%</td>
                            <td className="px-6 py-4 text-center">Low risk, consider home treatment</td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td className="px-6 py-4 text-center">6.80%</td>
                            <td className="px-6 py-4 text-center">Short inpatient hospitalization or closely supervised outpatient treatment</td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td className="px-6 py-4 text-center">14.0%</td>
                            <td className="px-6 py-4 text-center">Severe pneumonia, hospitalize and consider admitting to intensive care</td>
                        </tr>
                        <tr>
                            <td className="text-center">4 or 5</td>
                            <td className="px-6 py-4 text-center"> 27.8%</td>
                            <td className="px-6 py-4 text-center"> Severe pneumonia, hospitalize and consider admitting to intensive care</td>
                        </tr>
                    
                    </tbody>
                </table>

            </div>


            <div className="mt-8 py-10 max-w-2xl">
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Nguyen, Yann et al. “Applicability of the CURB-65 pneumonia severity score for 
                    outpatient treatment of COVID-19.” The Journal of infection vol. 81,3 (2020): e96-e98. 
                    doi:10.1016/j.jinf.2020.05.049
                </p>
                
            </div>
        </Section>
    )
}

export default Curb65