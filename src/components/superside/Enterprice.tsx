import creative from '/src/assets/creative.avif'

const Enterprice = () => {
    return (
        <section className="bg-green py-36 text-milk">
            <div>
                <h4 className="w-1/2 text-lg uppercase mb-8 border-b border-white ml-6 lg:ml-16 ">
                    Built for enterprise 
                </h4>

                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="w-full lg:w-1/2 space-y-7 px-6 lg:px-16">
                        <h3 className="text-4xl lg:text-5xl">
                            Is your creative team stretched to its limit?  {" "}
                            <span className="font-instrument italic">Join the club.</span>
                        </h3>

                        <h4 className="text-2xl lg:text-[28px]">
                            From Figma and Colgate Palmolive to Intuit and Reddit, even the most iconic brands face relentless creative challenges. When scaling in-house isn’t the solution, they turn to Superside.
                        </h4>

                        <p className="lg:text-lg">
                            We work as a true extension of your team, stepping in to relieve bottlenecks and deliver at scale without sacrificing quality.
                        </p>

                        <button className="bg-transparent text-base text-milk font-medium rounded-full px-6 py-3 border border-milk">
                            Book a demo
                        </button>
                    </div>

                    <div className='w-full lg:w-1/2 pr-0 lg:pr-16'>
                        <img 
                            src={creative}
                            alt="Vidoe About Superside" 
                            className='mx-auto lg:rounded-2xl w-full'
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-10 mt-68 px-6 lg:px-16'>
                <div className="w-full lg:w-1/2">
                    <h4 className="text-lg uppercase mb-8 ">
                        how we work
                    </h4>

                    <h3 className="text-5xl lg:text-6xl mb-6">
                        A partnership designed for your {" "}
                        <span className="font-instrument italic">success.</span>
                    </h3>

                    <p className="lg:text-lg">
                        Our collaborative process ensures your objectives are met every time.
                    </p>
                </div>

                <div>
                    
                </div>
            </div>
        </section>
    );
}
 
export default Enterprice;