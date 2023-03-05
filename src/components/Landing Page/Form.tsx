import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
    name: string,
    email: string,
    professionQuestion: string,
    profession: string,
    comments: string
}
const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const professionQues = watch('professionQuestion')
    const submit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    }


    return (
        <div className="bg-form-blue pb-7">
            <div className="w-[90%] mt-10 mx-auto  pt-3 md:pt-5">
                <p className="text-sm font-semibold text-center text-subhead-blue">
                    Contact us
                </p>
                <h1 className="font-bold text-pry-blue text-center text-2xl md:text-4xl mt-2">
                    Get in touch if you have a<br /> feedback or contribution
                </h1>
                <form
                action=""
                onSubmit={handleSubmit(submit)}
                className="md:flex flex-col items-center text-write font-semibold text-[15px]"
                >
                    <div className="py-4 flex flex-col md:w-[50%] lg:w-[30%]">
                        <label htmlFor="name"> Name</label>
                        <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        className={`${errors.name?.type === "required" ? 'border-[red]' : 'border-gray-300'} border mt-3 h-12 pl-4 p-1 focus:outline-none w-full`}
                        />
                        {errors.name?.type === "required" && (
                        <p role="alert" className='text-[13px] text-[red]'>Name is required</p>
                        )}
                    </div>
                    <div className="pb-4 flex flex-col md:w-[50%] lg:w-[30%]">
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        id="email"
                        {...register("email", { 
                                required: true, 
                                pattern:{
                                    value:  /^\S+@\S+$/i ,
                                    message: 'Please enter a valid email'
                                }
                            }
                        )}
                        className={`${errors.email?.type === "required" || errors.email?.message ? 'border-[red]' : 'border-gray-300'} border mt-3 h-12 pl-4 p-1 focus:outline-none w-full`}
                        />
                        {errors.email?.message && (
                        <p role="alert" className='text-[13px] text-[red]'>{errors.email?.message}</p>
                        )}
                        {errors.email?.type === "required" && (
                        <p role="alert" className='text-[13px] text-[red]'>Email is required</p>
                        )}
                    </div>

                    <div className="pb-4 md:w-[50%] lg:w-[30%]">
                        <p>Are you a healthcare professional?</p>
                        <div className="flex">
                            <div className="flex items-center ">
                                <label htmlFor="isHealthCareProfessional" className="mr-3">
                                Yes
                                </label>
                                <input
                                id="isHealthCareProfessional"
                                {...register("professionQuestion", { required: true })}
                                type="radio"
                                value="Yes"
                                />
                            </div>
                            <div className="flex items-center ml-4">
                                <label htmlFor="isNotHealthCareProfessional" className="mr-3">
                                No
                                </label>
                                <input
                                id="isNotHealthCareProfessional"
                                {...register("professionQuestion", { required: true })}
                                type="radio"
                                value=" No"
                                />
                            </div>
                        </div>
                        {errors.professionQuestion?.type === "required" && (
                        <p role="alert" className='text-[13px] text-[red]'>Please select an option</p>
                        )}
                    </div>

                {professionQues === 'Yes' && 
                    <div className="pb-4 flex flex-col md:w-[50%] lg:w-[30%]">
                        <label htmlFor="profession">Profession</label>

                        <select
                        id="profession"
                        {...register("profession", { required: true })}
                        className="border-gray-300 border mt-3 p-1 focus:outline-none w-full"
                        >
                        <option value="Pharmacist">Pharmacist</option>
                        <option value=" Doctor"> Doctor</option>
                        <option value=" Nurses"> Nurses</option>
                        <option value=" Student"> Student</option>
                        <option value=" Others "> Others </option>
                        </select>
                        {errors.profession?.type === "required" && (
                        <p role="alert" className='text-[13px] text-[red]'>Select your profession</p>
                        )}
                    </div>}

                    <div className="pb-4 flex flex-col md:w-[50%] lg:w-[30%]">
                        <label htmlFor="comments">Comments</label>

                        <textarea
                        rows={4}
                        id="comments"
                        {...register("comments", { required: true })}
                        className="border-gray-300 border mt-3 p-1 pl-4 focus:outline-none w-full"
                        />
                        {errors.comments?.type === "required" && (
                        <p role="alert" className='text-[13px] text-[red]'>Please leave a comment</p>
                        )}
                    </div>

                    <button className="mt-5 md:mt-0 w-full md:w-[50%] lg:w-[30%] bg-btn-blue hover:bg-light-blue text-white py-2 px-16 uppercase font-bold">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form 