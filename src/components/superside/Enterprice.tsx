import creative from '/src/assets/creative.avif'

const enterprise = [
    {
        num: 1,
        head: 'Consultation',
        desc: 'We take the time to thoroughly understand your goals, challenges, and vision to ensure we’re aligned with your business needs and objectives.'
    },
    {
        num: 2,
        head: 'Customized plan',
        desc: 'Based on our consultation, we craft a comprehensive strategy and assemble a creative team tailored to meet your specific project requirements and business goals.'
    },
    {
        num: 3,
        head: 'Onboarding',
        desc: 'We ensure a smooth and efficient integration of our team into your workflow, adapting to your existing processes and tools for seamless collaboration.'
    },
    {
        num: 4,
        head: 'Execution',
        desc: 'Our team works diligently to deliver top-tier creative solutions, ensuring every aspect meets the highest standards, while aligning with your project timeline.'
    },
    {
        num: 5,
        head: 'Review & optimize',
        desc: 'We continuously review our progress, gathering feedback to make necessary adjustments and improvements, ensuring that we consistently exceed expectations.'
    },
]

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

            <div className='flex flex-col md:flex-row justify-between gap-18 mt-68 px-6 lg:px-16'>
                <div className="w-full lg:w-1/2">
                    <h4 className="text-lg uppercase mb-8 ">
                        how we work
                    </h4>

                    <h3 className="text-5xl lg:text-6xl mb-6">
                        A partnership designed for {" "}
                        <span className="font-instrument italic">your success.</span>
                    </h3>

                    <p className="lg:text-lg">
                        Our collaborative process ensures your objectives are met every time.
                    </p>
                </div>

                <div
                    className="w-full lg:w-1/2 relative"
                >
                    
                    <div className="absolute left-6 lg:left-7 top-0 h-full w-0.5 bg-milk/30 z-0"></div>

                    {
                        enterprise.map(on => (
                            <div
                                className="relative flex gap-6 mb-20"
                                key={on.num}
                            >
                                <div className="font-instrument relative z-30 w-14 h-14 rounded-full border-2 border-milk/30 bg-green flex items-center justify-center font-semibold text-2xl">
                                    {on.num}
                                </div>

                                <div>
                                    <h3 className="text-[27px] mb-2">
                                        {on.head}
                                    </h3>
                                    <p className="text-milk/80 max-w-md leading-relaxed text-lg">
                                        {on.desc}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
}
 
export default Enterprice;

// import { motion } from "framer-motion";
// import creative from "/src/assets/creative.avif";

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: 60 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const Enterprice = () => {
//   return (
//     <section className="bg-green py-36 text-milk">

//       {/* ================= TOP SECTION ================= */}
//       <div>
//         <h4 className="w-1/2 text-lg uppercase mb-8 border-b border-white ml-6 lg:ml-16">
//           Built for enterprise
//         </h4>

//         <div className="flex flex-col lg:flex-row justify-between gap-10">
//           <div className="w-full lg:w-1/2 space-y-7 px-6 lg:px-16">
//             <h3 className="text-4xl lg:text-5xl">
//               Is your creative team stretched to its limit?{" "}
//               <span className="font-instrument italic">
//                 Join the club.
//               </span>
//             </h3>

//             <h4 className="text-2xl lg:text-[28px]">
//               From Figma and Colgate Palmolive to Intuit and Reddit, even the most iconic brands face relentless creative challenges.
//             </h4>

//             <p className="lg:text-lg">
//               We work as a true extension of your team, stepping in to relieve bottlenecks and deliver at scale.
//             </p>

//             <button className="bg-transparent text-base text-milk font-medium rounded-full px-6 py-3 border border-milk">
//               Book a demo
//             </button>
//           </div>

//           <div className="w-full lg:w-1/2 pr-0 lg:pr-16">
//             <img
//               src={creative}
//               alt="Video About Superside"
//               className="mx-auto lg:rounded-2xl w-full"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ================= HOW WE WORK ================= */}
//       <div className="flex flex-col lg:flex-row justify-between gap-16 mt-36 px-6 lg:px-16">

//         {/* LEFT SIDE */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h4 className="text-lg uppercase mb-8">
//             how we work
//           </h4>

//           <h3 className="text-5xl lg:text-6xl mb-6 leading-tight">
//             A partnership designed for your{" "}
//             <span className="font-instrument italic">
//               success.
//             </span>
//           </h3>

//           <p className="lg:text-lg">
//             Our collaborative process ensures your objectives are met every time.
//           </p>
//         </motion.div>

//         {/* RIGHT SIDE - TIMELINE */}
//         <motion.div
//           className="w-full lg:w-1/2 relative"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {/* Vertical Line */}
//           <div className="absolute left-6 top-0 h-full w-[2px] bg-milk/30"></div>

//           {/* ITEM 1 */}
//           <motion.div
//             variants={itemVariants}
//             className="relative flex gap-6 mb-16"
//           >
//             <div className="relative z-10 w-12 h-12 rounded-full border border-milk flex items-center justify-center font-semibold">
//               1
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold mb-2">
//                 Consultation
//               </h3>
//               <p className="text-milk/80 max-w-md leading-relaxed">
//                 We take the time to thoroughly understand your goals,
//                 challenges, and vision to ensure alignment.
//               </p>
//             </div>
//           </motion.div>

//           {/* ITEM 2 */}
//           <motion.div
//             variants={itemVariants}
//             className="relative flex gap-6"
//           >
//             <div className="relative z-10 w-12 h-12 rounded-full border border-milk flex items-center justify-center font-semibold">
//               2
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold mb-2">
//                 Customized plan
//               </h3>
//               <p className="text-milk/80 max-w-md leading-relaxed">
//                 Based on our consultation, we craft a comprehensive strategy
//                 tailored to your specific business needs.
//               </p>
//             </div>
//           </motion.div>

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Enterprice;