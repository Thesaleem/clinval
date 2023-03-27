import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";

import '../../UI/Table.css'


type FormData = {
    activeCancer: string,
    paralysis: string,
    bedridden: string,
    tender: string,
    swollenLeg: string,
    swollenCalf: string,
    edema: string,
    collateralVeins: string,
    previousDVT: string,
    alternativeDiagnosis: string,
}

const Wells = () => {
    const analytics = getAnalytics()
        logEvent(analytics, 'Wells_DVT_Page_Loaded', {
          'name': 'Wells DVT Criteria'
        }) 
    
    const [result, setResult] = useState<string>('')
    const { register, handleSubmit, formState: { isValid } } = useForm<FormData>({mode: 'onChange'});
    const onSubmit:SubmitHandler<FormData> = data => {
        const values = Object.values(data)
        const response = values.reduce((acc, cur) => acc + parseInt(cur), 0)
        setResult(response + '')
        const analytics = getAnalytics()
        logEvent(analytics, 'Wells_DVT_Button', {
          'name': 'Wells DVT Criteria'
        })        
    }
    return (
        <Section>
                <SectionTitle>Wells Criteria for DVT</SectionTitle>
                <SectionText>
                    Wells score gives an insight or objectively qualifies your risk of developing DVT. 
                    The presence or absence of a range of clinical features are computed to give a score 
                    on a patient which can be used to prioritise investigation and treatment.
                </SectionText>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%]">
                <div className="flex flex-col space-y-4">
                    
                    <div className="flex justify-between">
                        <p className="font-semibold">Active cancer, or cancer that’s been treated within last six months</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="active-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("activeCancer", { required: true })} type="radio" id='active-yes' value="1" />
                            </div>

                            <div className="ml-4">
                                <label htmlFor="active-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("activeCancer", { required: true })} type="radio" id='active-no' value="0" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <p className="font-semibold">Paralysis or Paresis or recent cast of lower extremity?</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="paralysis-yes"  className="mr-3 font-semibold ">Yes</label>
                                <input {...register("paralysis", { required: true })} type="radio" id='paralysis-yes' value="1" />                    
                            </div>

                            <div className="ml-4">
                                <label htmlFor="paralysis-no"  className="mr-3 font-semibold ">No</label>
                                <input {...register("paralysis", { required: true })} type="radio" id='paralysis-no' value=" 0" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <p className="font-semibold">Recently bedridden for more than 3 days within last 4 weeks or had major surgery in last 12 weeks</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="bedridden-yes"  className="mr-3 font-semibold ">Yes</label>
                                <input {...register("bedridden", { required: true })} type="radio" id='bedridden-yes' value="1" />
                            </div>

                            <div className="ml-4">
                                <label htmlFor="bedridden-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("bedridden", { required: true })} type="radio" id='bedridden-no' value=" 0" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-semibold">Localized tenderness along a deep venous systemtender</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="tender-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("tender", { required: true })} type="radio" id='tender-yes' value="1" />                    
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="tender-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("tender", { required: true })} type="radio" id='tender-no' value="0" />                    
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-semibold">Swelling of entire leg</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="swollenLeg-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("swollenLeg", { required: true })} type="radio" id='swollenLeg-yes' value="1" />
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="swollenLeg-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("swollenLeg", { required: true })} type="radio" id='swollenLeg-no' value=" 0" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <p className="font-semibold">Unilateral calf swelling {'>3'} cm compared to the other leg</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="swollenCalf-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("swollenCalf", { required: true })} type="radio" id='swollenCalf-yes' value="1" />
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="swollenCalf-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("swollenCalf", { required: true })} type="radio" id='swollenCalf-no' value=" 0" />
                            </div>
                        </div>
                    </div>
                   
                    <div className="flex justify-between">
                        <p className="font-semibold">Unilateral pitting edema</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="edema-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("edema", { required: true })} type="radio" id='edema-yes' value="1" />
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="edema-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("edema", { required: true })} type="radio" id='edema-no' value=" 0" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-between">
                        <p className="font-semibold">Collateral (nonvaricose) superficial veins </p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="collateralVeins-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("collateralVeins", { required: true })} type="radio" id='collateralVeins-yes' value="1" />
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="collateralVeins-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("collateralVeins", { required: true })} type="radio" id='collateralVeins-no' value=" 0" />
                            </div>
                        </div>
                    </div>
                   
                    <div className="flex justify-between">
                        <p className="font-semibold">Previously diagnosed with DVT</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="previousDVTalternativeDiagnosis-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("previousDVT", { required: true })} type="radio" id='previousDVTalternativeDiagnosis-yes' value="1" />
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="previousDVTalternativeDiagnosis-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("previousDVT", { required: true })} type="radio" id='previousDVTalternativeDiagnosis-no' value=" 0" />
                            </div>
                        </div>
                    </div>
                   
                    <div className="flex justify-between">
                        <p className="font-semibold">Alternative diagnosis more likely than DVT</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="alternativeDiagnosis-yes" className="mr-3 font-semibold ">Yes</label>
                                <input {...register("alternativeDiagnosis", { required: true })} type="radio" id='alternativeDiagnosis-yes' value="-2" />
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="alternativeDiagnosis-no" className="mr-3 font-semibold ">No</label>
                                <input {...register("alternativeDiagnosis", { required: true })} type="radio" id='alternativeDiagnosis-no' value=" 0" />
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
                        Result: {result} point{+result >= 0 ? '' : 's'}
                    </h1>
                </div>
            )}


            <table className=" text-write mt-6">
                <caption className="py-4 font-medium text-pry-blue text-start text-xl md:text-2xl">Result Interpretation</caption>
                
                <thead>
                    <tr  className="">
                        <th  className=" px-6 py-4"> Score</th>
                        <th  className=" px-6 py-4">Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className="">
                        <td  className=" text-center">3 or higher</td>
                        <td  className=" px-6 py-4 text-center">High risk of DVT</td>

                    </tr>
                    <tr  className="">
                        <td className="text-center">1 or 2</td>
                        <td className="px-6 py-4 text-center">Moderate risk of DVT</td>
                    </tr>
                    <tr>
                        <td className="text-center">0 or less</td>
                        <td className="px-6 py-4 text-center">Low risk of DVT</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-8 py-10 max-w-2xl">
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Ministry of Health-Ghana National Drugs Programme (GNDP). 
                    Standard Treatment Guidelines; 2017 Ministry of Health: Accra, Ghana, 2017; 
                    pp. 123. ISBN 9789988257873.
                </p>                
            </div>
        </Section>
    )
}

export default Wells