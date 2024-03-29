import cardiology from './category image/heart.png'
import emergency from './category image/warning.png'
import nephrology from './category image/kidney.png'
import neurology from './category image/brain.png'
import pediatrics from './category image/child.png'
import respirology from './category image/lungs.png'
 type CalcObj = {
    specialty: string,
    image: string,
    id: number,
    calculators:{
        id: number,
        calculator: string,
        url: string
    }[]
}[]
const category: CalcObj = [
    {
        specialty: 'Cardiology',
        image: cardiology,
        id: 1,
        calculators: [
            {
                id: 1.1,
                calculator: 'CHA2DS2-VASc Score for Atrial Fibrillation',
                url: 'cha2ds2-vasc-score'
            },
            {
                id: 1.2,
                calculator: 'Duke Criteria for Endocarditis',
                url: 'duke-criteria'
            },
            {
                id: 1.3,
                calculator: 'Mean Arterial Pressure',
                url: 'mean-arterial-pressure'
            },
            {
                id: 1.4,
                calculator: 'Body Mass Index',
                url: 'body-mass-index'
            },
        ]
    },
    {
        specialty: 'Emergency',
        id: 2,
        image: emergency,
        calculators: [
            {
                id: 2.1,
                calculator: 'Wells Criteria for DVT',
                url: 'wells-criteria'
            },
            {
                id: 2.2,
                calculator: 'Anion Gap',
                url: 'anion-gap'
            },
            {
                id: 2.3,
                calculator: 'Parkland Formula',
                url: 'parkland-formula'
            },
            {
                id: 2.4,
                calculator: 'Wallace Rule of Nine',
                url: 'rule-of-nine'
            },
        ]
    },
    {
        specialty: 'Nephrology',
        id: 3,
        image: nephrology,
        calculators: [
            {
                id: 3.1,
                calculator: 'Potassium Calculator',
                url: 'potassium-calculator'
            },
            {
                id: 3.2,
                calculator: 'Fluid Maintenance Calculator using Holliday-Segar Rule',
                url: 'holliday-segar-rule'
            },
        ]
    },
    {
        specialty: 'Neurology',
        id: 4,
        image: neurology,
        calculators: [
            {
                id: 4.1,
                calculator: 'Cerebral Perfusion Pressure',
                url: 'cerebral-perfusion-pressure'
            },
        ]
    },
    {
        specialty: 'Paediatrics',
        id: 5,
        image: pediatrics,
        calculators: [
            {
                id: 5.1,
                calculator: 'Weight Estimation',
                url: 'weight-estimation'
            },
            {
                id: 5.2,
                calculator: 'Apgar Score',
                url: 'apgar-score'
            },
        ]
    },
    {
        specialty: 'Respirology',
        id: 6,
        image: respirology,
        calculators: [
            {
                id: 6.1,
                calculator: 'CURB-65',
                url: 'curb-65'
            },
            {
                id: 6.2,
                calculator: 'Smoking Pack Years',
                url: 'smoking-pack-years'
            }
        ]
    }
    
]
export const sortedCategory = category
  .map((items) => items.calculators) //fetch out only the calculator array
  .flat() //join all the calculator arrays into one array
  .sort((a, b) => //sort it out alphabetically.
    a.calculator < b.calculator ? -1 : a.calculator > b.calculator ? 1 : 0
    );

  export default category