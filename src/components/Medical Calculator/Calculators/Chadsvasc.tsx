import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import '../../UI/Table.css'


type FormData = {
    age: string,
    sex: string,
    chf: string,
    hypertension: string,
    vdd: string,
    stroke: string,
    diabetes: string
}

const Chadsvasc = () => {
    const [result, setResult] = useState<string>('')
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const onSubmit:SubmitHandler<FormData> = data => {
        const values = Object.values(data)
        const response = values.reduce((acc, cur) => acc + parseInt(cur), 0)
        setResult(response + '')
    }
  return (

        <Section>
                <SectionTitle>CHA<sub>2</sub>DS<sub>2</sub>-VASc Score for AF</SectionTitle>
                <SectionText>
                    The CHA2DS2-VASc score is a point-based system used to stratify the
                    risk of stroke in AF patients. The acronym CHA<sub>2</sub>DS<sub>2</sub>-VASc stands for
                    congestive heart failure, hypertension, age ≥75 (doubled), diabetes,
                    stroke (doubled), vascular disease, age 65 to 74 and sex category
                    (female).
                </SectionText>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%]">
                <div className="flex flex-col space-y-4">


                    <div className="flex justify-between">

                        <label htmlFor="age">Age</label>

                        <select id='age' {...register("age", { required: true })}>
                            <option value="0">{"< 65 years"}</option>
                            <option value="1"> 65 - 74 years</option>
                            <option value="2">{' > 75 years'}</option>
                        </select>

                    </div>

                    
                    <div className="flex justify-between">
                        <p>Sex</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="male" className="mr-3">Male</label>
                                <input {...register("sex", { required: true })} type="radio" id='male' value="0" />
                            </div>

                            <div className="ml-4">
                                <label htmlFor="female" className="mr-3">Female</label>
                                <input {...register("sex", { required: true })} type="radio" id='female' value="1" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <p>Congestive Heart Failure History</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="chf-yes"  className="mr-3">Yes</label>
                                <input {...register("chf", { required: true })} type="radio" id='chf-yes' value="1" />                    
                            </div>

                            <div className="ml-4">
                                <label htmlFor="chf-no"  className="mr-3">No</label>
                                <input {...register("chf", { required: true })} type="radio" id='chf-no' value=" 0" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <p>Hypertension History</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="hypertension-yes"  className="mr-3">Yes</label>
                                <input {...register("hypertension", { required: true })} type="radio" id='hypertension-yes' value="1" />
                            </div>

                            <div className="ml-4">
                                <label htmlFor="hypertension-no" className="mr-3">No</label>
                                <input {...register("hypertension", { required: true })} type="radio" id='hypertension-no' value=" 0" />
                            </div>
                        </div>
                    </div>



                    <div className="flex justify-between">
                        <p>Stroke, TIA or Thromboembolism History</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="stroke-yes" className="mr-3">Yes</label>
                                <input {...register("stroke", { required: true })} type="radio" id='stroke-yes' value="1" />                    
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="stroke-no" className="mr-3">No</label>
                                <input {...register("stroke", { required: true })} type="radio" id='stroke-no' value="0" />                    
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <p>Vascular Disease History</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="vdd-yes" className="mr-3">Yes</label>
                                <input {...register("vdd", { required: true })} type="radio" id='vdd-yes' value="1" />
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="vdd-no" className="mr-3">No</label>
                                <input {...register("vdd", { required: true })} type="radio" id='vdd-no' value=" 0" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <p>Diabetes History</p>


                        <div className="flex">
                            <div className="ml-4">
                                <label htmlFor="diabetes-yes" className="mr-3">Yes</label>
                                <input {...register("diabetes", { required: true })} type="radio" id='diabetes-yes' value="1" />
                            </div>
                            
                            <div className="ml-4">
                                <label htmlFor="diabetes-no" className="mr-3">No</label>
                                <input {...register("diabetes", { required: true })} type="radio" id='diabetes-no' value=" 0" />
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
                <div className="mt-7">
                    <h1 className="text-xl md:text-2xl font-medium">
                        Result: {result} point{+result === 0 ? '' : 's'}
                    </h1>
                </div>
            )}

            <table className=" text-write mt-6">
                <caption className="py-4 font-medium text-pry-blue text-start text-xl md:text-2xl">Stroke prevention in atrial fibrillation</caption>
                
                <thead>
                    <tr  className="">
                        <th  className=" px-6 py-4"> CHA<sub>2</sub>DS<sub>2</sub>-VASc score</th>
                        <th  className=" px-6 py-4">Recommendation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className="">
                        <td  className=" text-center">0</td>
                        <td  className=" px-6 py-4 text-center">No antiplatelet or anticoagulant treatment</td>

                    </tr>
                    <tr  className="">
                        <td className="text-center">1</td>
                        <td className="px-6 py-4 text-center">Oral anticoagulant should be considered</td>
                    </tr>
                    <tr>
                        <td className="text-center">{' > 2'}</td>
                        <td className="px-6 py-4 text-center"> Oral anticoagulation indicated</td>
                    </tr>
                </tbody>
            </table>

            
            <table className=" text-write mt-6">
                <caption className="py-4 font-medium text-pry-blue text-start text-xl md:text-2xl">Stroke Risk Stratification With the CHA<sub>2</sub>DS<sub>2</sub>-VASc scores</caption>
                
                <thead>
                    <tr  className="">
                        <th  className=" px-6 py-4"> CHA<sub>2</sub>DS<sub>2</sub>-VASc score</th>
                        <th  className=" px-6 py-4">Adjusted stroke risk (% per year)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className="">
                        <td  className=" text-center">0</td>
                        <td  className=" py-4 text-center">0</td>

                    </tr>
                    <tr  className="">
                        <td className="text-center">1</td>
                        <td className="py-4 text-center">1.3</td>
                    </tr>
                    <tr>
                        <td className="text-center">2</td>
                        <td className="py-4 text-center">2.2</td>
                    </tr>
                    <tr>
                        <td className="text-center">3</td>
                        <td className="py-4 text-center">3.2</td>
                    </tr>
                    <tr>
                        <td className="text-center">4</td>
                        <td className="py-4 text-center">4.0</td>
                    </tr>
                    <tr>
                        <td className="text-center">5</td>
                        <td className="py-4 text-center">6.7</td>
                    </tr>
                    <tr>
                        <td className="text-center">6</td>
                        <td className="py-4 text-center">9.8</td>
                    </tr>
                    <tr>
                        <td className="text-center">7</td>
                        <td className="py-4 text-center">9.6</td>
                    </tr>
                    <tr>
                        <td className="text-center">8</td>
                        <td className="py-4 text-center">6.7</td>
                    </tr>
                    <tr>
                        <td className="text-center">9</td>
                        <td className="py-4 text-center">15.2</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-8 py-10">
            <p className="font-semibold text-sm md:text-xl text-pry-blue">References</p>
            <p className="pt-2">
                Gažová, Andrea, et al. "Predictive value of CHA2DS2-VASc scores regarding the 
                risk of stroke and all-cause mortality in patients with atrial fibrillation 
                (CONSORT compliant)." Medicine 98.31 (2019).
            </p>
            <p className="pt-2">
                Connolly, Stuart J., et al. "Apixaban in patients with atrial fibrillation." 
                New England Journal of Medicine 364.9 (2011): 806-817.
            </p>
            <p className="pt-2">
                Hindricks, Gerhard, et al. "2020 ESC Guidelines for the diagnosis and management 
                of atrial fibrillation developed in collaboration with the European Association for 
                Cardio-Thoracic Surgery (EACTS) The Task Force for the diagnosis and management of 
                atrial fibrillation of the European Society of Cardiology (ESC) Developed with the 
                special contribution of the European Heart Rhythm Association (EHRA) of the ESC." 
                European heart journal 42.5 (2021): 373-498.
            </p>
        </div>
        </Section>

  );
};

export default Chadsvasc;
