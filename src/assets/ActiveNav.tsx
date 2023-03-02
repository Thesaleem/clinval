import './ActiveNav.css'

interface Props {
    active: string,
    setActive: (x: string) => void,
}
const ActiveNav: React.FC<Props> = (props) => {

    const handleActive = ( specialty:string): void => {
        // const id = e.currentTarget.innerText
        props.setActive(specialty)

        console.log(props.active);
    }
    return (
        <div className="">
            <ul className="flex">
                <li className="cursor-pointer" onClick={() => handleActive('By Specialty')}>
                    <p className='font-semibold'>By Specialty</p>
                    <div className={`color-div ${props.active === 'By Specialty' ? 'active' : ''} mt-2`}></div>
                </li>

                <li className="ml-4 cursor-pointer" onClick={() => handleActive('Alphabetically')}>
                    <p className='font-semibold'>Alphabetically</p>
                    <div className={`color-div ${props.active === 'Alphabetically' ? 'active' : ''} mt-2`}></div>
                </li>
            </ul>
        </div>
    )
}

export default ActiveNav