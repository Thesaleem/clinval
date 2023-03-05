const Footer = () => {
    return (
        <div className="bg-pry-blue text-off-white  pb-9 ">
            <div className="flex flex-col md:flex-row items-center justify-between w-[90%] pt-6 lg:pt-8 mt-10 mx-auto ">
                <div className="flex items-center">
                        <h1 className="self-center text-xl font-semibold whitespace-nowrap">clinval</h1>
                </div>
    
                <span className="text-sm mt-4 md:mt-0sm:text-center">
                        &copy; 2023 <a href="/" className="hover:underline">Saleem</a>. 
                        All Rights Reserved.
                </span>
      
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-3xl">
                    <a href="https://twitter.com/thesaleem_" target="_blank" rel="noreferrer" className="transition-all ease-in duration-500 hover:scale-125"> 
                        <i className="fa-brands fa-twitter"></i> 
                    </a>
                    <a href="https://github.com/thesaleem" target="_blank" rel="noreferrer" className="transition-all ease-in duration-500 hover:scale-125">
                        <i className="fa-brands fa-github"></i>
                    </a>                          
                    <a href="mailto:adekunleismail14@gmail.com" className='transition-all ease-in duration-500 hover:scale-125' >
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer