import { useRouteError } from "react-router-dom";
import image from '../../assets/undraw_notfound.png'
import NavBar from "../Landing Page/Navbar";

type ErrorMsg = {
    status: number,
    
}

const ErrorPage = () => {
    const error = useRouteError() as ErrorMsg

    let title = 'An error occured'
    let message = 'Something went wrong!'

    if(error.status === 404){
        message = 'Could  not find Page'
    }

    return (
        <>
        <NavBar />
        <div className="h-[80vh]">
            <div className="font-jost flex flex-col-reverse lg:flex-row justify-center items-center pt-6 ">
                <div className="">
                    <h1 className="text-8xl">Oops!</h1>
                    <h1 className="py-3 text-2xl">{title}</h1>
                    <p className="text-2xl"> {message}</p>
                </div>
                <div className="w-[40%] mb-10 lg:mb-0 lg:ml-40">
                    <img src={image} alt="error notice" className="w-full" />
                </div>
            </div>
        </div>
        </>

    )
}

export default ErrorPage