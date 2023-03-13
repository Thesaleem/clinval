
type CalcFormat = {
    calculator: string,
    id: number,
    url: string
}[]

type StateData = {
    drug: string,
    value: number,
    type?: string, 
}[]

const dosingCalc: CalcFormat = [
    {
        calculator: 'Corticosteroid Converter',
        id: 1,
        url: 'corticosteroid'   
    },
    {
        calculator: 'Diuretics Converter',
        id: 2,
        url: 'diuretics'
    },
    {
        calculator: 'Opioid Converter',
        id: 3,
        url: 'opioid'
    },
]


export const drugs: StateData = [
    {
        drug: "Cortisone",
        value: 25
    },
    {
        drug: "Hydrocortisone",
        value: 20
    },
    {
        drug: "Methylprednisolone",
        value: 4
    },
    {
        drug: "Prednisolone",
        value: 5
    },
    {
        drug: "Prednisone",
        value: 5
    },
    {
        drug: "Triamcinolone",
        value: 4
    },
    {
        drug: "Betamethasone",
        value: 0.75
    },
    {
        drug: "Dexamethasone",
        value: 0.75
    },

];

export const opioidDrugs = [
    {
        drug: "Codeine",
        value: 0.15
    },
    {
        drug: 'Tramadol',
        value: 0.1
    },
    {
        drug: "Fentanyl",
        value: 2.4
    },
    {
        drug: "Hydrocodone",
        value: 1
    },
    {
        drug: "Hydromorphone",
        value: 4
    },
    {
        drug: "Morphine",
        value: 1
    },
    {
        drug: "Oxycodone",
        value: 1.5
    },
    {
        drug: "Oxymorphone",
        value: 3
    },
    {
        drug: "Methadone",
        value: {
            '0': 0,
            '1-20': 4,
            '21-40': 8,
            '41-60': 10,
            '61': 12
        }
    },

];

export const diureticsDrugs: StateData = [
    {
        drug: "Furosemide Oral",
        value: 1,
        type: 'loop'
    },
    {
        drug: "Furosemide IV",
        value: 2,
        type: 'loop'
    },
    {
        drug: 'Bumetanide',
        value: 40,
        type: 'loop'
    },
    {
        drug: "Torsemide",
        value: 2,
        type: 'loop'
    },
    {
        drug: "Hydrochlorothiazide",
        value: 1,
        type: 'thiazide'
    },
    {
        drug: "Chlorthalidone",
        value: 2,
        type: 'thiazide'
    },
    {
        drug: "Indapamide",
        value: 10,
        type: 'thiazide'
    },
    {
        drug: "Chlorothiazide",
        value: 0.1,
        type: 'thiazide'
    },
    {
        drug: "Metolazone",
        value: 10,
        type: 'thiazide'
    },
    {
        drug: "Bendroflumethiazide",
        value: 10,
        type: 'thiazide'
    },
]

export default dosingCalc