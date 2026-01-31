import { ClockFading, PenTool, PieChart, Users } from 'lucide-react'
import Ai from '/src/assets/ai.avif'


const Team = () => {
    const charge = [
        {
            icon: Users,
            head: 'Create and manage teams with custom roles and permissions',
            desc: 'Easily build teams and assign roles so everyone has the right access. No more, no less.'
        },
        {
            icon: PenTool,
            head: 'Set budgets, track spend in real time, and get low-balance alerts',
            desc: 'Stay on top of spending with live tracking, budget limits, and alerts before funds run low.',
        },
        {
            icon: PieChart,
            head: 'Access detailed usage and budget reports by team, project, or account',
            desc: 'Break down usage by team, project, or account to get the insights you need, fast.'
        },
        {
            icon: ClockFading,
            head: 'See team and account balances right from the Superspace homepage',
            desc: 'Check balances at a glance. No digging, no delays, just instant visibility.'
        },

    ]

    return (
        <section className="bg-milk py-28 text-green px-6 lg:px-16">
            <div className="w-full px-6 text-center mb-16">
                <h4 className="text-center text-lg uppercase mb-8">
                    Team and Budget Management tools, built for scale
                </h4>
                <h1 className="mx-auto lg:w-270 text-5xl md:text-6xl lg:text-[70px] mb-6">
                    Now in {" "}
                    <span className="font-instrument italic">Superspace</span>
                    —more control, less chaos 
                </h1>
                <p className="mx-auto lg:w-4xl text-lg font-medium opacity-60">
                    Superside’s new team and budget management tools help enterprise teams stay organized and on budget without the manual overhead. More visibility. Smoother ops. Happier teams.
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-24 gap-y-14 lg:gap-y-0 gap-10'>
                {
                    charge.map(i => (
                        <div
                            key={i.head}
                        >
                            {
                                <i.icon className='w-15 h-15 bg-[#a09f9f] text-green p-4 rounded-lg mb-6' />
                            }

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

            <div className='w-full my-24'>
                <img 
                    src={Ai}
                    alt="Vidoe About Superside" 
                    className='mx-auto rounded-2xl'
                />
            </div>
        </section>
    );
}
 
export default Team;