import Spaceman from '/src/assets/spaceman.avif'
import Comfort from '/src/assets/comfort.avif'
import Ecovad from '/src/assets/ecovad.avif'
import { CloudCheck, Leaf, Monitor, TreePine } from 'lucide-react'

const Features = () => {
    const charge = [
        {
            icon: Leaf,
            head: '100% remote',
            desc: 'Zero daily commute emissions. No office-related energy, water, waste, or office supplies.',
        },
        {
            icon: Monitor,
            head: 'Digital-first',
            desc: 'Digital tools replace physical ones for fully paperless ops and minimal hardware.',
        },
        {
            icon: CloudCheck,
            head: 'Sustainable cloud providers',
            desc: 'Google Cloud (carbon neutral) and AWS (100% renewable energy by 2025).',
        },
        {
            icon: TreePine,
            head: 'Flexibility-powered sustainable living',
            desc: 'Remote work allows our team to live where they thrive: with more access to nature and more balanced lifestyles',
        },

    ]

    return (
        <section className="text-green">
            <div className="bg-[#e9e9e9] flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-1/2 pl-6 lg:pl-16 py-12 pr-4">
                    <h4 className="text-lg uppercase mb-9 border-b border-green">
                        security and Compliance
                    </h4>

                    <h3 className="text-4xl lg:text-5xl mb-8">
                        Your security {" "}
                        <span className="font-instrument italic">comes first</span>
                    </h3>

                    <h4 className="text-[23px] lg:text-[28px] mb-8">
                        We prioritize your privacy and security, earning the trust of over 500 leading brands worldwide.
                    </h4>

                    <ul className="text-xl lg:text-2xl list-disc space-y-6 ml-7">
                        <li>SSO</li>
                        <li>GDPR compliance</li>
                        <li>Regular security audits</li>
                        <li>Confidentiality agreements</li>
                        <li>SOC-2 compliance</li>
                        <li>Role-based access control</li>
                        <li>AI usage controlled by you</li>
                    </ul>
                </div>

                <div className="w-full lg:w-1/2">
                     <img 
                        src={Spaceman}
                        alt="Space Man" 
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>

            <div className="bg-[#75dfff] flex flex-col lg:flex-row-reverse justify-between">
                <div className="w-full lg:w-1/2 pr-6 lg:pr-16 py-12 pl-10">
                    <h4 className="text-lg uppercase mb-9 border-b border-green">
                        Global Support and Availability
                    </h4>

                    <h3 className="text-4xl lg:text-5xl mb-8">
                        <span className="font-instrument italic">Responsive</span>
                        {" "} support across time zones
                    </h3>

                    <h4 className="text-[23px] lg:text-[28px] mb-8">
                        From Sydney's sunrise to New York's nightfall, your creative work needs meet immediate attention. Our unprecedented reach ensures that creative genius is always at your fingertips.
                    </h4>

                    <ul className="text-xl lg:text-2xl list-disc space-y-6 ml-7">
                        <li>Dedicated account manager</li>
                        <li>Multilingual support</li>
                        <li>Cover for 13 different timezones</li>
                    </ul>
                </div>

                <div className="w-full lg:w-1/2">
                     <img 
                        src={Comfort}
                        alt="A woman with a laptop" 
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>

            <div className="bg-[#ffc58f] flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-1/2 pr-6 lg:pr-16 py-12 pl-10">
                    <h4 className="text-lg uppercase mb-9 border-b border-green">
                        Sustainable by design
                    </h4>

                    <h3 className="text-4xl lg:text-5xl mb-8">
                        Big impact {" "}
                        <span className="font-instrument italic">(just not the environmental kind)</span>
                    </h3>

                    <h4 className="text-[23px] lg:text-[28px] mb-8">
                        Our remote-first model broadens opportunities while minimizing our footprint. We’re also looking ahead by exploring carbon offsets, cleaner AI, and smarter data practices.
                    </h4>

                    <div className='grid md:grid-cols-2 mt-20 gap-y-14 gap-10'>
                        {
                            charge.map(i => (
                                <div
                                    key={i.head}
                                >
                                    {
                                        <i.icon className='w-15 h-15 bg-[#c2c2c2] text-green p-4 rounded-lg mb-10' />
                                    }

                                    <h2 className='text-2xl mb-2'>
                                        {i.head}
                                    </h2>

                                    <p className='text-lg opacity-80'>
                                        {i.desc}
                                    </p>

                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                     <img 
                        src={Ecovad}
                        alt="SPace Man" 
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>
        </section>
    );
}
 
export default Features;