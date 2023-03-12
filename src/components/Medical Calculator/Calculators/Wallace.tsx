import Section, {SectionText, SectionTitle} from "../../UI/Section";
import { Link } from "react-router-dom";
import imageAdult from '../../../assets/ruleOfNinesAdult.png'
import imageChildren from '../../../assets/ruleOfNinesChildren.png'



const Wallace = () => {

    return (
        <Section>
            <SectionTitle>
                Rule of Nines
            </SectionTitle>
            <SectionText>
                The Rule of Nines also known as the Wallace Rule of Nines, 
                is used to asses the total body surface area (TBSA) in burn patients.
                Measuring TBSA is important to calculate initial fluid requirement 
                alongside the use of <Link to=''>Parkland Formula</Link>. This tool is only utilized for 
                second-degree and third-degree burns. Changes may be made to the Rule of Nines 
                based on body mass index (BMI) and age.
            </SectionText>
            <SectionText>
                Upon initiation of fluid resuscitation, it is crucial to ensure adequate perfusion, hydration,
                and optimal renal function. The estimated fluid derived from the Rule of Nines and intravenous 
                fluid formula serve as guidelines and should be closely monitored and adjusted where possible.
                Managing severe burns requires constant attention to detail, as even small errors can lead to 
                increased morbidity and mortality in critically ill patients.
            </SectionText>

            <div className="mt-10 space-y-10">
                <div className="">
                    <img src={imageAdult} alt="TBSA for Adults" />
                    <p className="mt-3 font-semibold">Diagram of rule of Nines modifications for adults.</p>
                    <p  className="mt-2 text-sm italic">Image Adapted from <a href="https://calculate.qxmd.com/storage/file-sources/15/ruleOfNines@2x.png" className="hover:text-blue-600 hover:underline">QxMD</a></p>
                </div>
                <div className="max-w-2xl">
                    <img src={imageChildren} alt="TBSA for Children" />
                    <p className="mt-3 font-semibold">Diagram of rule of Nines modifications for paediatric patients.</p>
                    <p  className="mt-2 text-sm italic">Image Adapted from <a href="https://www.statpearls.com/pictures/getimagecontent//21639" className="hover:text-blue-600 hover:underline">StatPearls</a></p>
                </div>
            </div>

            <div className="mt-8 py-10 max-w-2xl">
                <p className="font-semibold text-xl text-pry-blue">References</p>
                <p className="pt-2">
                    Moore, Ross A., Abdul Waheed, and Bracken Burns. "Rule of nines." 
                    StatPearls [Internet]. StatPearls Publishing, 2022.
                </p>                
            </div>
        </Section>
    )
}

export default Wallace