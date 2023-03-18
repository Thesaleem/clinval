import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";


type FormData = {
    map: string,
    icp: string,

}

const Cpp = () => {
    const analytics = getAnalytics()
        logEvent(analytics, 'Cpp_Page_Loaded', {
          'name': 'Cpp'
        })
    
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [result, setResult] = useState<string>('')

    const onSubmit:SubmitHandler<FormData> = data => {
        const values = Object.values(data)
        const response = Number(values[0])- Number(values[1])
        setResult(response + '')
        const analytics = getAnalytics()
        logEvent(analytics, 'Cpp_Button', {
          'name': 'Cpp'
        })
    }
    return (
        <Section>
            <SectionTitle>Cerebral Perfusion Pressure</SectionTitle>
            <SectionText>
                Cerebral perfusion pressure (CPP) is the net pressure gradient that drives 
                oxygen delivery to cerebral tissue. CPP decreases as ICP rises which leads to 
                cerebral ischemia and other neurological injury. It helps clinicians identify 
                patients that may be undergoing inadequate cerebral perfusion.
                The Normal CPP is 60 - 70 mmHg
            </SectionText>


            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-[70%] xl:w-[50%] ">
                <div className="flex flex-col space-y-1">

                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="map" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base">
                            Mean Arterial Pressure
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="map"
                                {...register("map", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^[0-9]*\.?[0-9]+$/ ,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                placeholder="70-100"
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                            />
                            <p className="ml-2">mmHg</p>
                        </div>
                        {errors.map?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-14 md:right-[90px] xl:right-[28%]'>{errors.map?.message}</p>
                        )}
                    </div>


                    <div className="flex flex-col md:flex-row items-start relative justify-between md:items-center pt-4 pb-2">
                        <label 
                            htmlFor="icp" 
                            className="font-semibold text-sm mb-4 md:mb-0 md:text-base">
                            Intercranial Pressure
                        </label>
                        <div className="flex items-center  w-[100%] xl:w-[60%]">
                            <input
                                type="text"
                                id="icp"
                                {...register("icp", { 
                                        required: true, 
                                        pattern:{
                                            value:  /^[0-9]*\.?[0-9]+$/ ,
                                            message: 'Please enter a valid number'
                                        }
                                    }
                                )}
                                placeholder="5-15"
                                className="border-gray-300 border pl-3 p-1 focus:outline-none w-[75%]"
                            />
                            <p className="ml-2">mmHg</p>
                        </div>
                        {errors.icp?.message && (
                        <p role="alert" className='text-[13px] text-[red] md:absolute md:top-14 md:right-[90px] xl:right-[28%]'>{errors.icp?.message}</p>
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
                    Mount, Cristin A., and Joe M. Das. "Cerebral perfusion pressure." 
                    StatPearls [Internet]. StatPearls Publishing, 2021.
                </p>
               
            </div>
        </Section>
    )
}

export default Cpp