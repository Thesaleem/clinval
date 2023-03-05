const Testimonials = () => {
    return (
      <div className="w-[90%]  mt-16 md:mt-24  mx-auto">
        <p className="text-sm font-semibold text-center text-subhead-blue">
          What people say about us
        </p>
        <h1 className="font-bold text-pry-blue text-center text-5xl mt-2">
          Testimonials
        </h1>

        <div className="mt-7 text-write flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between">

            <div className="bg-hero-blue md:w-[32%] p-5 flex flex-col justify-between rounded-lg">
                <p className="">
                    <span className="font-bold text-2xl">"</span> Using this calculator has saved me so much time and made my work
                    so much easier. I can't imagine going back to doing these
                    calculations manually! <span className="font-bold text-2xl">"</span>
                </p>

                <p className="pt-3 font-semibold md:text-lg">Dr. Ajayi J, Pharm.D</p>
            </div>
            
            <div className="bg-hero-blue md:w-[32%] p-5 flex flex-col justify-between rounded-lg">
                <p className="">
                    <span className="font-bold text-2xl">"</span> I've been using this medical calculator for months now and it has
                    been incredibly helpful in my practice. It's simple to use and
                    saves me time in my calculations. Highly recommend! <span className="font-bold text-2xl">"</span>
                </p>

                <p className="pt-3 font-semibold md:text-lg">Dr. Yus U, MD</p>
            </div>
           
            <div className="bg-hero-blue md:w-[32%] p-5 flex flex-col justify-between rounded-lg">
                <p className="">
                    <span className="font-bold text-2xl">"</span> As a student, I've tried several medical calculators before, but this one is by
                    far the best. It's user-friendly and has all the calculations I
                    need in one place. Thank you for creating this! <span className="font-bold text-2xl">"</span>
                </p>

                <p className="pt-3 font-semibold md:text-lg">Sarah O</p>
            </div>

        </div>
      </div>
    );
}

export default Testimonials