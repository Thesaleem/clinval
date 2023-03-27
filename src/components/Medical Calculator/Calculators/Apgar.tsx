import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import '../../UI/Table.css'
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";


type FormData = {
    heartRate: string,
    respiration: string,
    activity: string,
    color: string,
    response: string,

}




const Apgar = () => {
    const analytics = getAnalytics()
    logEvent(analytics, 'Apgar_Score_Page_Loaded', {
        'name': 'Apgar Score'
      }) 
    
    const { register, handleSubmit, formState: { isValid } } = useForm<FormData>({mode: 'onChange'});
    const [result, setResult] = useState<string>()


    const onSubmit:SubmitHandler<FormData> = data => {

        console.log(data);
        const values = Object.values(data)
        const response = values.reduce((acc, cur) => acc + parseInt(cur), 0)
        setResult(response + '')
        const analytics = getAnalytics()
        logEvent(analytics, 'Apgar_Score_Button', {
            'name': 'Apgar  Score'
          }) 
    }

    return (
        <Section>
        <SectionTitle>
            Apgar Score
        </SectionTitle>
        <SectionText>
            The apgar score was developed in 1952 by Dr. Virgina Apgar, an anesthesiologist at Columbia University.
            The score is used for assessing a neonate after birth and also response to resuscitation. The apgar score indiciates 
            clinical signs of neonatal distress such as cyanosis or pallor, bradycardia, depressed reflex response to stimulation, 
            hypotonia, and apnea or gasping respirations. The score is recorded at 1 minute and 5 minutes after birth and 
            5 minutes interval until 20 minutes for infants with a score less than 7. Score of 7 - 10 is considered reassuring. 
        </SectionText>
        <SectionText>
            It is worthy to note that a score of 0 after 10 minutes of age is useful in determining if resuscitative efforts should be 
            continued as reports show only few infants with an apgar score of 0 at 10 minutes survive with normal neurologic outcome.
            The 2011 Neonatal Resuscitation Program guidelines state that “if you can confirm that no heart rate has been detectable 
            for at least 10 minutes, discontinuation of resuscitative efforts may be appropriate” 
        </SectionText>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%]">
            <div className="flex flex-col space-y-1">

                <div className="flex relative justify-between items-center pt-4 pb-2">
                    <label 
                        htmlFor="respiration" 
                        className="font-semibold text-sm py-2 md:text-base">
                        Respiration
                    </label>
                    <div className="flex items-center w-[50%]  xl:w-[60%]">
                    
                        <div className="w-full md:w-[auto]">
                            <select className="focus:outline-none w-full md:w-[auto]" id='respiration' {...register("respiration", { required: true } )}>
                                <option value="2">Regular Breathing</option>
                                <option value="1">Irregular/Slow</option>
                                <option value="0">None</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="flex relative justify-between items-center pt-4 pb-2">
                    <label 
                        htmlFor="heartRate" 
                        className="font-semibold text-sm py-2 md:text-base">
                        Heart Rate
                    </label>
                    <div className="flex items-center w-[50%]  xl:w-[60%]">
                    
                        <div className="w-full md:w-[auto]">
                            <select className="focus:outline-none w-full md:w-[auto]" id='heartRate' {...register("heartRate", { required: true } )}>
                                <option value="2">≥ 100bpm</option>
                                <option value="1">{'< 100bpm'}</option>
                                <option value="0">None</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex relative justify-between items-center pt-4 pb-2">
                    <label 
                        htmlFor="activity" 
                        className="font-semibold text-sm py-2 md:text-base">
                        Activity/Muscle Tone
                    </label>
                    <div className="flex items-center w-[50%]  xl:w-[60%]">
                    
                        <div className="w-full md:w-[auto]">
                            <select className="focus:outline-none w-full md:w-[auto]" id='activity' {...register("activity", { required: true } )}>
                                <option value="2">Activity</option>
                                <option value="1">Some extremity flexion</option>
                                <option value="0">None</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="flex relative justify-between items-center pt-4 pb-2">
                    <label 
                        htmlFor="color" 
                        className="font-semibold text-sm py-2 md:text-base">
                        Appearance
                    </label>
                    <div className="flex items-center w-[50%]  xl:w-[60%]">
                    
                        <div className="w-full md:w-[auto]">
                            <select className="focus:outline-none w-full md:w-[auto]" id='color' {...register("color", { required: true } )}>
                                <option value="2">Pink</option>
                                <option value="1">Blue extremities</option>
                                <option value="0">Blue all over</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex relative justify-between items-center pt-4 pb-2">
                    <label 
                        htmlFor="response" 
                        className="font-semibold text-sm py-2 md:text-base">
                        Grimace
                    </label>
                    <div className="flex items-center w-[50%]  xl:w-[60%]">
                    
                        <div className="w-full md:w-[auto]">
                            <select className="focus:outline-none w-full md:w-[auto]" id='response' {...register("response", { required: true } )}>
                                <option value="2">Sneeze/Cough</option>
                                <option value="1">Whimpering/Grimace</option>
                                <option value="0">None</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>


            <div className="mt-5 md:mt-7 md:w-[50%] mx-auto xl:mx-16">
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
                        Apgar score: {`${result} ${+result > 1 ? 'points' : 'point'}`}
                    </h1>
                </div>
            )}
        
        <div className="overflow-x-auto">

            <table className=" text-write mt-6">
                <caption className="py-4 font-medium text-pry-blue text-start text-xl md:text-2xl">Apgar Score Interpretation</caption>
                
                <thead>
                    <tr  className="">
                        <th  className=" px-6 py-4">Score</th>
                        <th  className=" px-6 py-4">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className="">
                        <td  className=" px-6 text-start">≥ 7</td>
                        <td  className=" px-6 py-4 text-center">Generally normal</td>
                    </tr>

                    <tr  className="">
                        <td className=" px-6 text-start">4 - 6 </td>
                        <td className="px-6 py-4 text-center">Moderately abnormal</td>
                    </tr>

                    <tr>
                        <td className=" px-6 text-start"> 0–3 </td>
                        <td className="px-6 py-4 text-center">Low, needs intervention</td>
                    </tr>
                </tbody>
            </table>
        </div>

        
        <div className="mt-8 py-10 max-w-2xl">
            <p className="font-semibold text-xl text-pry-blue">References</p>
            <p className="pt-2">
                American Academy of Pediatrics Committee on Fetus and Newborn, et al. "The apgar score." Pediatrics 136.4 (2015): 819-822.
            </p>                
            <p className="pt-2">
                Simon, Leslie V., Muhammad F. Hashmi, and Bradley N. Bragg. "APGAR score." (2017).
            </p>                
                          
        </div>
    </Section>
    )
}

export default Apgar