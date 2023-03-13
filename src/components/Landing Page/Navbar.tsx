import { useState, useEffect } from 'react'
import  ReactDOM  from 'react-dom'
import { Link } from 'react-router-dom'
import Logo from '../../assets/clinval'
import PharmLogo from '../../assets/PharmacyLogo'

interface HamburgerProps {
    open: boolean,
    onClose: () => void,
}

const Backdrop: React.FC <HamburgerProps> = (props) => {
    return <div onClick={props.onClose} className={`${props.open ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all duration-500 ease-in-out`}></div>            
}
const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

    useEffect(() => {
        if (hamburgerOpen){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    })

    const onHamburger = () => {
        setHamburgerOpen((prevState: typeof hamburgerOpen) => !prevState)
    }

    return (
        <header className='bg-hero-neon sticky top-0 z-10'>
            <nav className="text-pry-blue flex justify-between items-center pt-5 pb-3 w-[90%] my-0 mx-auto">
                <Link to="/" className=''>
                    <div className="flex items-center">
                        <PharmLogo />
                        <span className="-ml-2">
                            <Logo />
                        </span>
                    </div>
                </Link>

                {/* <div className={`fixed z-20 left-0 right-0 bottom-0 pt-28 md:pt-0 bg-hero-blue md:bg-inherit w-1/2 md:w-auto h-[100vh] transition-all duration-500 translate-x-[200%] ${hamburgerOpen ? "translate-x-full" : undefined} md:-translate-x-0 md:static md:h-auto`}>
                    <ul className=" relative top-5 md:static font-semibold flex space-y-3 md:space-y-0 flex-col items-center md:flex-row justify-between">
                        <Link to='/calculator' onClick={hamburgerOpen ? onHamburger : undefined} className='hover:text-medium-gray cursor-pointer'>Medical Calculator</Link>
                        <Link to='/dose-converter' onClick={hamburgerOpen ? onHamburger : undefined} className='hover:text-medium-gray cursor-pointer md:ml-8'>Dosing Conversion</Link>
                    </ul>
                </div>

                <div onClick={onHamburger} className={`md:hidden hamburger-menu w-[35px] h-[24px] flex flex-col justify-center cursor-pointer ${hamburgerOpen ? 'fixed z-20 right-6 top-9' : undefined}`}>
                    <div className={`mb-1  w-6 h-[2px] transition-all duration-150 ease-in bg-black ${hamburgerOpen ? 'rotate-45 translate-y-1' : undefined}`}></div>
                    <div className={`w-6 h-[2px] transition-all duration-150 ease-in bg-black ${hamburgerOpen ? 'opacity-0' : undefined}`}></div>
                    <div className={`mt-1 w-6 h-[2px] transition-all duration-150 ease-in bg-black ${hamburgerOpen ? '-rotate-45 -translate-y-2 ' : undefined}`}></div>
                </div> */}

                <div className='hidden md:block'>
                    <ul className="font-semibold flex items-center justify-between">
                        <Link to='/calculator' className='hover:text-medium-gray cursor-pointer'>Medical Calculator</Link>
                        <Link to='/dose-converter' className='hover:text-medium-gray cursor-pointer md:ml-8'>Dosing Conversion</Link>
                    </ul>
                </div>

                <div onClick={onHamburger} className={`md:hidden hamburger-menu w-[35px] h-[24px] flex flex-col justify-center cursor-pointer ${hamburgerOpen ? 'fixed z-30 right-6 top-9' : undefined}`}>
                    <div className={`mb-1  w-6 h-[2px] transition-all duration-150 ease-in bg-black ${hamburgerOpen ? 'rotate-45 translate-y-1' : undefined}`}></div>
                    <div className={`w-6 h-[2px] transition-all duration-150 ease-in bg-black ${hamburgerOpen ? 'opacity-0' : undefined}`}></div>
                    <div className={`mt-1 w-6 h-[2px] transition-all duration-150 ease-in bg-black ${hamburgerOpen ? '-rotate-45 -translate-y-2 ' : undefined}`}></div>
                </div>

                <div className={`fixed md:hidden z-20 pt-28 bg-hero-blue  top-0 right-0 w-1/2 h-screen transition-all duration-500  ${hamburgerOpen ? "translate-x-0" : 'translate-x-[200%]'} border border-[red]`}>
                    <ul className="font-semibold flex flex-col space-y-3  items-center justify-between">
                        <Link to='/calculator' className='hover:text-medium-gray cursor-pointer'>Medical Calculator</Link>
                        <Link to='/dose-converter' className='hover:text-medium-gray cursor-pointer md:ml-8'>Dosing Conversion</Link>
                    </ul>
                </div>

                {ReactDOM.createPortal(<Backdrop onClose={onHamburger} open={hamburgerOpen}/>, document.querySelector('#overlays') as HTMLElement)}
            </nav>
            <div className=" w-[90%] my-0 mx-auto">
                <hr className="border-black opacity-20" />
            </div>
        </header>
    )
}

export default NavBar