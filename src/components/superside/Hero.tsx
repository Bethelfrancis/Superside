import Piscart from '/src/assets/picsart.avif'
import Reddit from '/src/assets/reddit.avif'
import Oyster from '/src/assets/oyster.avif'
import Antler from '/src/assets/antler.avif'
import Pernod from '/src/assets/pernod.avif'
import Roland from '/src/assets/roland.avif'

const Hero = () => {
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

    const duplicatedImages = [...portfolioImages, ...portfolioImages];

    return (
        <section className="lg:pt-52 pt-36 pb-16 overflow-hidden">
            <div className="w-full px-6 text-center mb-16">
                <h1 className="mx-auto lg:w-5xl text-green text-5xl md:text-6xl lg:text-7xl mb-6">
                    A dedicated creative team, {" "}
                    <span className="font-instrument italic">built for your creative team</span>
                </h1>
                <button className="bg-green text-base text-white font-medium rounded-full px-6 py-3 mt-4">
                    Book a demo
                </button>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex items-stretch w-max animate-scroll pause-on-hover">
                    {
                        duplicatedImages.map((sub, index) => (
                            <div
                                key={`${sub.id}-${index}`}
                                className="relative rounded-xl overflow-hidden shrink-0 w-70 lg:w-120 mx-2.5"
                            >
                                <img
                                    src={sub.src}
                                    alt={sub.brand}
                                    className="w-full h-70 lg:h-100 object-cover"
                                />
                                
                                <div className='bg-green text-[#a09f9f] p-8'>
                                    <h4 className='uppercase text-[16px] mb-2.5'>
                                        {sub.label}
                                    </h4>

                                    <h2 className='text-milk text-3xl font-instrument font-medium'>
                                        {sub.brand}
                                    </h2>

                                    {/* <div className='flex gap-3 items-center mt-4'>
                                        {
                                            sub.desc.map(i => 
                                                <button className='bg-transparent text-base text-[#a09f9f] font-medium rounded-full px-3.5 py-2 border border-[#a09f9f]'>{i}</button>
                                            )
                                        }
                                    </div> */}
                                </div>
                                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                            {sub.brand}
                                        </span>
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='w-full text-center text-green mt-20 lg:mt-52'>
                <p className='mx-auto lg:w-5xl text-2xl md:text-[33px] leading-8'>
                    85% of enterprise creative teams are stretched to their limit. Superside expands capabilities and <span className='font-instrument italic'>boosts your team’s capacity</span>—all through a custom subscription. No hiring required.
                </p>
            </div>
        </section>
    );
};

export default Hero;
