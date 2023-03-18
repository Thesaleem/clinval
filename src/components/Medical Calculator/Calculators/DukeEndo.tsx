import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";


type FormData = {
    pathlesions:string[],
    major: string[],
    minor: string[]
}

const DukeEndo = () => {
  const analytics = getAnalytics()
        logEvent(analytics, 'Duke_Criteria_Page_Loaded', {
          'name': 'Duke Criteria'
        })
  
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode: 'onChange'});
    const [result, setResult] = useState<string>('')

    const onSubmit:SubmitHandler<FormData> = data => {
        const {pathlesions, major, minor} = data
        if (
          pathlesions.length >= 1 ||
          major.length >= 2 ||
          (major.length >= 1 && minor.length >= 3) ||
          minor.length >= 5
        ) {
          setResult("Definite Infective Endocarditis");
        }
        else if ((major.length === 1 && minor.length <=2) || (minor.length >=3 && minor.length <= 4)){
            setResult("Possible Infective Endocarditis");
        }
        else {
            setResult('Rejected')
        }
        const analytics = getAnalytics()
        logEvent(analytics, 'Duke_Criteria_Button', {
          'name': 'Duke Criteria'
        })
    }
    return (
      <Section>
        <SectionTitle>Duke Criteria for Infective Endocarditis</SectionTitle>
        <SectionText>
          The duke criteria are a set of clinical criteria set forward for the
          diagnosis of infective endocarditis (IE). These criteria are based on
          clinical, echocardiographic and biological findings, as well as the
          results of blood cultures and serologies.
          <p>For diagnosis, the requirement is: </p>
          <ul className="list-disc pl-7">
            <li className="">One or more Pathologic criteria, or</li>
            <li className="">2 major clinical criteria or</li>
            <li>1 major and 3 minor clinical criteria or</li>
            <li>5 minor clinical criteria</li>
          </ul>
          <p className="font-semibold">Possible IE</p>
          <ul className="list-disc pl-7">
            <li className="">
              1 major and 1 or 2 minor clinical criterion, or
            </li>
            <li>3 minor criterion.</li>
          </ul>
          <p className="font-semibold">Rejected</p>
          <ul className="list-disc pl-7">
            <li className="">
              Firm alternative diagnosis explaining evidence of IE, or
            </li>
            <li>
              Resolution of IE symptoms with antibiotics for less than or equal
              to 4 days, or
            </li>
            <li>
              No pathological evidence of IE at surgery or autopsy, with
              antibiotic therapy {"< 4 "}days, or
            </li>
            <li>Does not meet criteria of “possible”, as above.</li>
          </ul>
        </SectionText>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 md:w-[70%] xl:w-[50%] "
        >
          <div className="flex flex-col space-y-1">
            <fieldset>
              <legend className="font-semibold text-xl text-pry-blue">
                Pathological Criteria
              </legend>
              <div className="flex justify-between pt-4 pb-2 items-center">
                <div className="md:w-[70%] md:text-justify">
                  <label
                    htmlFor="microorganisms"
                    className="mb-4 md:mb-0 "
                  >
                    Microorganisms; demonstrated by culture or histologic
                    examination of a vegetation that has embolized, or an
                    intracardiac abscess specimen
                  </label>
                </div>
                <div className="ml-10">
                  <input
                    className="md:scale-[2.3] scale-150"
                    type="checkbox"
                    value={"true"}
                    id="microorganisms"
                    placeholder="microorganisms"
                    {...register("pathlesions", {})}
                  />
                </div>
              </div>

              <div className="flex justify-between pt-2 md:pt-4 pb-2 items-center">
                <div className="md:w-[70%] md:text-justify">
                  <label
                    htmlFor="pathlesions"
                    className=" mb-4 md:mb-0 "
                  >
                    Pathologic lesions; vegetation or intracardiac abscess
                    confirmed by histologic examination showing active
                    endocarditis
                  </label>
                </div>
                <div className="ml-10">
                  <input
                    className="md:scale-[2.3] scale-150"
                    type="checkbox"
                    value={"true"}
                    id="pathlesions"
                    placeholder="pathlesions"
                    {...register("pathlesions", {})}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-semibold text-xl text-pry-blue">
                Major Criteria
              </legend>
              <div className="flex justify-between pt-4 pb-2 items-center">
                <div className="md:w-[70%] md:text-justify">
                  <label
                    htmlFor="bloodculture"
                    className=" mb-4 md:mb-0 "
                  >
                    Blood culture positive for infective endocarditis
                  </label>
                </div>
                <div className="ml-10">
                  <input
                    className="md:scale-[2.3] scale-150"
                    type="checkbox"
                    id="bloodculture"
                    {...register("major", {})}
                  />
                </div>
              </div>

              <div className="flex md:justify-between pt-2 md:pt-4 pb-2 items-center">
                <div className="md:w-[70%] md:text-justify">
                  <label
                    htmlFor="echo"
                    className=" tmb-4 md:mb-0  "
                  >
                    Echocardiogram or clinical evidence of endocardial
                    involvement
                  </label>
                </div>
                <div className="ml-10">
                  <input
                    className="md:scale-[2.3] scale-150"
                    type="checkbox"
                    id="echo"
                    {...register("major", {})}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-semibold text-xl text-pry-blue">
                Minor Criteria
              </legend>

              <div className="flex justify-between pt-4 pb-2 items-center">
                <div className="md:w-[70%] md:text-justify">
                  <label
                    htmlFor="predisposition"
                    className="  mb-4 md:mb-0 "
                  >
                    Predisposition: Predisposing heart condition or injection
                    drug use
                  </label>
                </div>
                <div className="ml-10">
                  <input
                    className="md:scale-[2.3] scale-150"
                    type="checkbox"
                    id="predisposition"
                    {...register("minor", {})}
                  />
                </div>
              </div>

              <div className="flex justify-between pt-2 md:pt-4 pb-2 items-center">
                <div className="md:w-[70%] md:text-justify">
                  <label
                    htmlFor="fever"
                    className="  mb-4 md:mb-0  "
                  >
                    Fever: Temperature greater than 38°C (100.4°F)
                  </label>
                </div>
                <div className="ml-10">
                  <input
                    className="md:scale-[2.3] scale-150"
                    type="checkbox"
                    id="fever"
                    {...register("minor", {})}
                  />
                </div>
              </div>

              <div className="flex justify-between pt-2 md:pt-4 pb-2 items-center">
                <div className="md:w-[70%] md:text-justify">
                  <label
                    htmlFor="vascular"
                    className="mb-4 md:mb-0  "
                  >
                    Vascular phenomena: Major arterial emboli, septic pulmonary
                    infarcts, mycotic aneurysm, intracranial hemorrhage,
                    conjunctival hemorrhages, and Janeway lesions
                  </label>
                </div>
                <div className="ml-10">
                  <input
                    className="md:scale-[2.3] scale-150"
                    type="checkbox"
                    id="vascular"
                    {...register("minor", {})}
                  />
                </div>
              </div>

              <div className="flex justify-between pt-2 md:pt-4 pb-2 items-center">
                <div className="md:w-[70%] md:text-justify">
                  <label
                    htmlFor="immunologic"
                    className=" mb-4 md:mb-0  "
                  >
                    Immunologic phenomena: Glomerulonephritis, Osler nodes, Roth
                    spots, and Rheumatoid factor
                  </label>
                </div>
                <div className="ml-10">
                  <input
                    className="md:scale-[2.3] scale-150"
                    type="checkbox"
                    id="immunologic"
                    {...register("minor", {})}
                  />
                </div>
              </div>

              <div className="flex justify-between pt-2 md:pt-4 pb-2 items-center">
                <div className="md:w-[70%] md:text-justify">
                  <label
                    htmlFor="microbiologic"
                    className=" mb-4 md:mb-0"
                  >
                    Microbiologic evidence: Positive blood culture but does not
                    meet a major criterion as noted abovea or serologic evidence
                    of active infection with organism consistent with IE
                  </label>
                </div>
                <div className="ml-10">
                  <input
                    className="md:scale-[2.3] scale-150"
                    type="checkbox"
                    id="microbiologic"
                    {...register("minor", {})}
                  />
                </div>
              </div>
            </fieldset>
          </div>

          <div className=" mt-5 md:mt-7 md:w-[50%] mx-auto">
            <button
              disabled={!isValid}
              className=" disabled:opacity-40 disabled:cursor-not-allowed w-full bg-btn-blue disabled:hover:bg-btn-blue hover:bg-light-blue text-white py-2 px-16 uppercase font-bold"
            >
              Submit
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-7 max-w-2xl">
            <h1 className="text-xl md:text-2xl font-medium">
              Result: {result}
            </h1>
          </div>
        )}

            <div className="mt-8 py-10 max-w-2xl">
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Weerakkody Y, Feger J, Hacking C, et al. Duke criteria for infective endocarditis. 
                    Reference article, Radiopaedia.org (Accessed on 14 Feb 2023)
                </p>
                <p className="pt-2">
                    Habib, Gilbert, et al. "2015 ESC Guidelines for the management of infective endocarditis." 
                    Kardiologia Polska (Polish Heart Journal) 73.11 (2015): 963-1027.
                </p>
                
            </div>
      </Section>
    );
}

export default DukeEndo