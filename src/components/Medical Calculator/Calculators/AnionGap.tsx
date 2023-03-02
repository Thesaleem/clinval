import { useState, MouseEvent } from "react";


const AnionGap = () => {
    // const [unit, setUnit] = useState(Array(3).fill(true))
    

    // const handleUnitClick = (index: number): void => {
    //     setUnit(prev => prev.map((unit, i) => i === index ? !unit : true))
    // }
    // console.log(unit);

   const [result, setResult] = useState<number>() 
    const formState = {
        sodium: '',
        chloride: '',
        bicarbonate: ''
    }
    
    const formTouchedState = {
        sodium: false,
        chloride: false,
        bicarbonate: false,
    }
    
    const [formData, setformData] = useState(formState)
    const [formTouched, setformTouchedState] = useState(formTouchedState)
    

    const formValid = {
        sodium: formData.sodium.match(/^[0-9]\d*$/) && formData.sodium.trim() !== '',
        chloride: formData.chloride.match(/^[0-9]\d*$/) && formData.chloride.trim() !== '',
        bicarbonate: formData.bicarbonate.match(/^[0-9]\d*$/) && formData.bicarbonate.trim() !== ''
    }

    const formInvalid = {
        sodium: !formValid.sodium && formTouched.sodium,
        chloride: !formValid.chloride && formTouched.chloride,
        bicarbonate: !formValid.bicarbonate && formTouched.bicarbonate
    }

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setformData (prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value 
            }
        })
    }

    const inputBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name} = event.target
        setformTouchedState(prev => {
            return {
                ...prev,
                [name]: true 
            }
        })
    }

    const handleResults = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const resultAG = +formData.sodium - (+formData.chloride + +formData.bicarbonate)
        setResult(resultAG)
    }
    
    let formIsValid = formValid.sodium && formValid.chloride && formValid.bicarbonate
    // console.log(formIsValid);

    const errorMsg = (
                    <div className="absolute top-14 right-24 xl:right-40">
                        <p role="alert" className='text-[13px] text-[red]'>Please enter a valid number</p>
                    </div>
                )

    return (
        <div className="w-[90%] md:w-[75%] mt-10 mx-auto pt-3 md:pt-5 ">
            <h2 className="text-2xl md:text-3xl font-medium">Anion Gap</h2>
            <p className="max-w-2xl leading-9 mt-3 text-justify">
                Anion gap test is used to check the pH balance of the blood. It
                indicates if the blood is too acidic or basic. The anion gap measures
                the difference between the negatively charged and positively charged
                electrolytes in the blood. Too high means the blood is more acidic
                than normal and too low means it isn’t acidic enough. Both conditions
                can be serious.
            </p>


            <form action="" className="mt-4 md:w-[70%] xl:w-[50%]">
                <p className="mt-8 text-lg text-center"> 1mmol/L = 1mEq/L </p>

                <div className="flex relative justify-between items-center pt-4 pb-2">

                    <label htmlFor="sodium" className="font-semibold text-sm md:text-base"> Sodium </label>
                    <div className="flex xl:w-[60%]">
                        
                        <input
                            type="text"
                            id="sodium"
                            name="sodium"
                            className='border-gray-300 border pl-3 p-1 focus:outline-none w-full'
                            placeholder='135-145'
                            value={formData.sodium}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler}
                        />

                        <button type="button"  className="ml-2 p-2 border border-gray-300 hover:border-gray-500 hover:bg-slate-100">mEq/L</button>
                    </div>

                    {formInvalid.sodium && errorMsg}
                </div>

                <div className="flex relative justify-between items-center pb-2 pt-4 ">

                    <label htmlFor="chloride" className="font-semibold text-sm md:text-base"> Chloride </label>
                    <div className="flex xl:w-[60%]">
                        <input
                            type="text"
                            id="chloride"
                            name="chloride"
                            className='border-gray-300 border pl-3 p-1 focus:outline-none w-full'
                            placeholder='96-106'
                            value={formData.chloride}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler}

                        />
                        <button type="button" className="ml-2 p-2 border border-gray-300 hover:border-gray-500 hover:bg-slate-100">mEq/L</button>
                    </div>

                    {formInvalid.chloride && errorMsg}

                </div>

                <div className="flex relative justify-between items-center pb-2 pt-4">

                    <label htmlFor="bicarbonate" className="font-semibold text-sm md:text-base"> Bicarbonate </label>
                    <div className="flex xl:w-[60%]">
                        <input
                            type="text"
                            id="bicarbonate"
                            name="bicarbonate"
                            className='border-gray-300 border pl-3 p-1 focus:outline-none w-full'
                            placeholder='22-29'
                            value={formData.bicarbonate}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler}

                        />
                        <button type="button" className="ml-2 p-2 border border-gray-300 hover:border-gray-500 hover:bg-slate-100">mEq/L</button>
                    </div>

                    {formInvalid.bicarbonate && errorMsg}

                </div>

                <div className=" mt-5 md:mt-7 md:w-[50%] mx-auto">
                    <button disabled={!formIsValid} onClick={handleResults} className=" disabled:opacity-40 disabled:cursor-not-allowed w-full bg-[#282525] text-white py-2 px-16 uppercase font-bold">
                        Submit
                    </button>
                </div>

            </form>

            {result && <div className="mt-7">
                <h1 className="text-xl md:text-2xl font-medium">Result: {result}mEq/L</h1>
            </div>}


            <div className="mt-8 py-10">
                <p className="font-semibold text-sm md:text-xl">References</p>
                <a href="https://medlineplus.gov/lab-tests/anion-gap-blood-test/">MedLine Plus</a>
            </div>
            
        </div>
    );
}

export default AnionGap