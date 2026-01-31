import { Banknote, CloudDownload, Users, Check } from 'lucide-react'

const Engage = () => {
    const charge = [
        {
            icon: Banknote,
            label: 'transparent payment',
            head: 'Centralized invoicing and spend control',
            desc: 'Streamline your financial management with a single, consolidated invoicing system that provides full visibility and control over your spending.'
        },
        {
            icon: Users,
            label: 'full flexibility',
            head: 'Dedicated support for multiple teams.',
            desc: 'Ensure each team gets the personalized support they need with dedicated resources for seamless coordination across departments.',
        },
        {
            icon: CloudDownload,
            label: 'storage management',
            head: 'Unlimited users and asset storage.',
            desc: 'Enjoy the freedom to add unlimited users and store as many assets as needed, without worrying about capacity limits or additional costs.'
        }

    ]

    return (
        <section className="px-6 lg:px-16 py-40 text-green bg-milk">
            <div className="w-full px-6 text-center mb-16">
                <h4 className="text-center text-lg uppercase mb-4">
                    Flexible engagement models
                </h4>
                <h1 className="mx-auto lg:w-270 text-5xl lg:text-[50px] mb-6">
                    Engagement models that fit {" "}
                    <span className="font-instrument italic">your</span> needs
                </h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 mt-24 gap-y-14 lg:gap-y-0 gap-10'>
                {
                    charge.map(i => (
                        <div
                            key={i.head}
                        >
                            {
                                <i.icon className='w-19 h-19 bg-[#a09f9f] text-green p-5 rounded-lg mb-10' />
                            }

                            <h3 className='uppercase text-lg opacity-85 mb-2'>
                                {i.label}
                            </h3>

                            <h2 className='text-2xl mb-3'>
                                {i.head}
                            </h2>

                            <p className='text-lg opacity-80'>
                                {i.desc}
                            </p>

                        </div>
                    ))
                }
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-8 mt-60'>
                <div className="flex flex-col justify-between w-full lg:w-1/2 px-4 py-4 md:px-10 md:py-16 bg-[url('/src/assets/inspired.avif')] bg-no-repeat bg-cover text-white rounded-lg">
                    <div>
                        <button className='bg-transparent text-base font-medium rounded-full px-3.5 py-2 border border-green mb-4'>
                            Pricing model
                        </button>

                        <h3 className="text-5xl lg:text-6xl mb-8">                          
                            <span className="font-instrument italic">Enterprise</span>
                            {" "}plan
                        </h3>

                        <p className="text-base md:text-lg mb-8">
                            Get access to all the creative services you need in one place. Annual subscriptions range from $15,000 to $100,000 USD/month.
                        </p>
                    </div>
                        

                    <button className="bg-green text-base text-white font-medium rounded-full px-6 py-3">
                        Book a demo
                    </button>
                </div>

                <div className="flex flex-col justify-between w-full lg:w-1/2 px-4 py-4 md:px-10 md:py-16 bg-[#619e59] rounded-lg">
                    <h3 className="text-3xl lg:text-4xl mb-8">
                        Included in {" "}                     
                        <span className="font-instrument italic">all plans</span>
                    </h3>
                    
                    <div className='mt-14 space-y-5'>
                        <div className='flex items-center justify-between border-b pb-4'>
                            <p className='text-lg'>
                                Access to all creative services <br /> (based on available dollars in monthly subscription)
                            </p>

                            <Check className='w-5 h-5 text-green' />
                        </div>

                        <div className='flex items-center justify-between border-b pb-4'>
                            <p className='text-lg'>
                                Dedicated creative project manager and customer success manager
                            </p>

                            <Check className='w-5 h-5 text-green' />
                        </div>

                        <div className='flex items-center justify-between border-b pb-4'>
                            <p className='text-lg'>
                                Turnaround times starting at 12 hours
                            </p>

                            <Check className='w-5 h-5 text-green' />
                        </div>

                        <div className='flex items-center justify-between border-b pb-4'>
                            <p className='text-lg'>
                                Global timezone coverage
                            </p>

                            <Check className='w-5 h-5 text-green' />
                        </div>

                        <div className='flex items-center justify-between border-b pb-4'>
                            <p className='text-lg'>
                                AI-enhanced services
                            </p>

                            <Check className='w-5 h-5 text-green' />
                        </div>

                        <div className='flex items-center justify-between border-b pb-4'>
                            <p className='text-lg'>
                                Unlimited API calls to integrations
                            </p>

                            <Check className='w-5 h-5 text-green' />
                        </div>

                        <div className='flex items-center justify-between border-b pb-4'>
                            <p className='text-lg'>
                                Unlimited users and asset storage
                            </p>

                            <Check className='w-5 h-5 text-green' />
                        </div>

                        <div className='flex items-center justify-between border-b pb-4'>
                            <p className='text-lg'>
                                Support for multiple brands
                            </p>

                            <Check className='w-5 h-5 text-green' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Engage;