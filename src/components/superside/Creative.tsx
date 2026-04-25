import Piscart from '/src/assets/picsart.avif'
import Reddit from '/src/assets/reddit.avif'
import Oyster from '/src/assets/oyster.avif'
import Antler from '/src/assets/antler.avif'
import Pernod from '/src/assets/pernod.avif'
import Roland from '/src/assets/roland.avif'
import { ClockFading, PenTool, Stars, Users } from 'lucide-react'

const Creative = () => {
    const portfolioImages = [
        {
            id: 1,
            src: Piscart,
            label: 'Brand',
            brand: "Picsart Ricard",
            desc: [
                'Ad Creative',
                'Social Media Creative'
            ]
        },
        {
            id: 2,
            src: Reddit,
            label: "saas",
            brand: "Pernod Ricard",
            desc: [
                'Motion Design',
                'Social Media Creative'
            ]
        },
        {
            id: 3,
            src: Oyster,
            label: "saas",
            brand: "Oyster",
            desc: [
                'Illustration Design',
                'eBook & Digital Reports'
            ]
        },
        {
            id: 4,
            src: Antler,
            label: "venture capital",
            brand: "Antler",
            desc: [
                    'Brand Identity',
                    'Motion Design',
                    'Social Media Creative'
                ]
        },
        {
            id: 5,
            src: Pernod,
            label: "Food & Beverages",
            brand: "Pernodt Ricard",
            desc: [
                'Video Production',
                'eBook & Digital Reports'
            ]
        },
        {
            id: 6,
            src: Roland,
            label: "Manufacturing",
            brand: "Roland",
            desc: [
                'Ad Creative',
                'Social Media Creative'
            ]
        },
    ];
    
    const trust = [
        {
            num: '8d',
            desc: 'The average time from contract start to submitting the first project'
        },
        {
            num: '70%',
            desc: 'Less turnaround times for our customers on average.'
        },
        {
            num: '150+',
            desc: 'Enterprise customers. We help big brands grow even faster.'
        }
    ]

    const duplicatedImages = [...portfolioImages, ...portfolioImages];
    
    return (
        <section className="bg-green py-20 text-milk">
            <div className="w-full px-6 text-center mb-16">
                <h4 className="text-center text-lg uppercase mb-8">
                    full-stack creative 
                </h4>
                <h1 className="mx-auto lg:w-270 text-5xl md:text-6xl lg:text-[70px] mb-6">
                    From day-to-day production to your brand’s {" "}
                    <span className="font-instrument italic">pivotal moments</span>
                </h1>
                <p className="text-[#a09f9f] text-lg font-medium">
                    Your in-house team just got a whole lot more powerful.
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex items-stretch w-max animate-scroll gap-4 lg:gap-7 my-20">
                    {
                        duplicatedImages.map((sub, index) => (
                            <div
                                key={`${sub.id}-${index}`}
                                className="group animi relative rounded-xl flex w-60 lg:w-100 h-90 lg:h-120 bg-white p-2 lg:p-4 hover:-translate-y-3"
                            >
                                <img
                                    src={sub.src}
                                    alt={sub.brand}
                                    className="w-full h-full absolute top-0 left-0 object-cover rounded-xl "
                                />

                                <div className='flex flex-col justify-between z-30 text-[#a09f9f] w-full'>

                                    <h2 className='text-center text-milk text-2xl lg:text-3xl font-instrument font-medium'>
                                        {sub.brand}
                                    </h2>

                                    <div className='relative'>
                                        <div className='hidden absolute top-6 animi opacity-0 group-hover:opacity-100 group-hover:-top-12 lg:flex flex-wrap gap-3 items-center mt-4'>
                                            {
                                                sub.desc.map(i => 
                                                    <button className='bg-transparent text-[13px] text-white font-medium rounded-full px-2 py-1 border border-white'>{i}</button>
                                                )
                                            }
                                        </div>
                                    </div>
                                        
                                </div>
                                
                                
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='w-full mt-60 px-6 lg:px-16 '>
                <div className='flex flex-col lg:flex-row justify-between gap-4'>
                    <div className='w-1/2 '>
                        <h4 className="text-lg uppercase mb-4">
                            easy & hassle-free 
                        </h4>
                        <h1 className="text-5xl lg:text-6xl mb-4">
                            <span className="font-instrument italic">Supercharge</span> {" "}
                            your pipeline
                        </h1>
                    </div>
                        
                    <p className=" lg:w-[35%] text-[#a09f9f] text-lg font-medium">
                        With super-responsive account management global time zone availability, rapid turnarounds and top creative talent, we’re built to help you grow and iterate quickly.
                    </p>
                </div>

                <div className='mt-28'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-5 mb-8'>
                        <div className='flex flex-col justify-between rounded-xl text-green bg-[#ffc58f] h-80 lg:h-110 p-4 lg:p-6 w-full lg:w-[35%]'>
                            <div>
                                <span>
                                    <Users className='w-10 h-10' />
                                </span>

                                <h2 className='text-3xl mt-4'>
                                    Dedicated, experienced creative teams
                                </h2>
                            </div>

                            <div>
                                <h4 className='text-xl font-medium mb-2.5'>
                                    Get access to top global creative talent
                                </h4>

                                <p>
                                    Get all of the creative support you need. Scale up with ease.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-start lg:justify-between rounded-xl text-milk bg-[url("/src/assets/inhouse.avif")] bg-no-repeat bg-cover h-90 lg:h-110 p-4 lg:p-6 w-full lg:w-[65%]'>
                            <div>
                                <span>
                                    <PenTool className='w-10 h-10' />
                                </span>

                                <h2 className='text-3xl mt-4 mb-6'>
                                    Every creative service you"ll ever need
                                </h2>
                            </div>

                            <div>
                                <h4 className='text-xl font-medium mb-2.5'>
                                    Supercharge your in-house team
                                </h4>

                                <p>
                                    From social graphics and presentations to video ads, VR, and motion graphics – on demand and on your team.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between items-center gap-5 '>
                        <div className='flex flex-col justify-start lg:justify-between rounded-xl text-milk bg-[url("/src/assets/ai.avif")] bg-no-repeat bg-cover h-90 lg:h-110 p-4 lg:p-6 w-full lg:w-[65%]'>
                            <div>
                                <span>
                                    <Stars className='w-10 h-10' />
                                </span>

                                <h2 className='text-3xl mt-4 mb-6'>
                                    Your team’s shortcut to AI
                                </h2>
                            </div>

                            <div>
                                <h4 className='text-xl font-medium mb-2.5'>
                                    Add efficiency and possibility
                                </h4>

                                <p>
                                    Get the rewards of creative AI without the hassle. Every hour saved goes right back to you.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-between rounded-xl text-green bg-[#75dfff] h-80 lg:h-110 p-4 lg:p-6 w-full lg:w-[35%]'>
                            <div>
                                <span>
                                    <ClockFading className='w-10 h-10' />
                                </span>

                                <h2 className='text-3xl mt-4'>
                                    Flexible pricing, super responsive service
                                </h2>
                            </div>

                            <div>
                                <h4 className='text-xl font-medium mb-2.5'>
                                    We’re made to keep up with you
                                </h4>

                                <p>
                                    Efficient, flexible, reliable and always-on, with affordable pricing and global time zone support.                                
                                </p>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14 mt-24 px-6 lg:px-16 '>
                {
                    trust.map(i => (
                        <div 
                            key={i.num}
                            className='flex md:flex-row space-y-3 flex-col-reverse items-start md:items-center gap-7 border-b border-[#a09f9f]'
                        >
                            <p className='text-[#a09f9f] text-xl'>
                                {i.desc}
                            </p>

                            <h4 className='text-8xl font-instrument'>
                                {i.num}
                            </h4>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
 
export default Creative;