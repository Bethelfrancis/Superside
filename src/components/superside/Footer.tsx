import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <section className="px-6 lg:px-16 w-full pt-56 pb-14 bg-[url('/src/assets/footer.avif')] bg-no-repeat bg-cover text-white">
            <div className="w-full text-center">
                <h3 className="mx-auto md:w-190 text-4xl md:text-7xl">
                    Your {" "}
                    <span className="font-instrument italic">creative team’s</span> creative team™
                </h3>


                <button className="bg-[#bdff67] text-base text-green font-medium rounded-full px-6 py-3 mt-7">
                    Book a demo
                </button>
            </div>

            <div className="w-full flex flex-col lg:flex-row justify-between gap-7 mt-36">
                <div className="w-full lg:w-1/2 mb-20 lg:mb-0">
                    <h3 className="text-xl font-semibold border-t border-white mb-10 lg:mb-20">
                        Services
                    </h3>

                    <div className="flex flex-wrap space-y-8 justify-between gap-7">
                        <div>
                            <h5 className="text-xl font-medium mb-6">
                                Creative design services 
                            </h5>

                            <ul className="opacity-70 space-y-4">
                                <li>Social media creative</li>
                                <li>Presentation design</li>
                                <li>Illustration design</li>
                                <li>Branding services</li>
                                <li>eBooks & report design</li>
                                <li>Concept creation</li>
                                <li>Print design</li>
                                <li>Packaging & merchandise design</li>
                            </ul>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h5 className="text-xl font-medium mb-6">
                                    Specialized production services 
                                </h5>

                                <ul className="opacity-70 space-y-4">
                                    <li>Video production</li>
                                    <li>Motion design</li>
                                    <li>Immersive design</li>
                                    <li>Email creation</li>
                                    <li>Web design</li>
                                    <li>Design Systems</li>
                                    <li>Product Design</li>
                                    <li>Copywriting</li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-6">
                                    AI services 
                                </h5>

                                <ul className="opacity-70 space-y-4">
                                    <li>AI-powered creative</li>
                                    <li>AI consulting</li>
                                    <li>Automation</li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-6">
                                    Marketing services 
                                </h5>
                                 
                                <ul className="opacity-70 space-y-4">
                                    <li>Marketing strategy</li>
                                    <li>Campaign strategy</li>
                                </ul>
                            </div>
                        </div>

                            
                    </div>
                            
                </div>


                <div className="w-full lg:w-1/2">
                    <h3 className="text-xl font-semibold border-t border-white mb-10 lg:mb-20">
                        Navigation
                    </h3>

                    <div className="flex flex-wrap space-y-8 justify-between gap-7">
                        <div>
                            <h5 className="text-xl font-medium mb-6">
                                Main
                            </h5>

                            <ul className="opacity-70 space-y-4">
                                <li>Our work</li>
                                <li>Our people</li>
                                <li>About us</li>
                                <li>Pricing</li>
                                <li>Trust center</li>
                                <li>Careers</li>
                                <li>Superside vs. Alternatives</li>
                                <li>Forrester TEI Report</li>
                            </ul>
                        </div>

                        <div className="lg:mr-30">
                            <h5 className="text-xl font-medium mb-6">
                                Learn
                            </h5>

                            <ul className="opacity-70 space-y-4">
                                <li>Blog</li>
                                <li>Events & Summits</li>
                                <li>Guides</li>
                                <li>Reports</li>
                                <li>Customer Stories</li>
                                <li>Video Library</li>
                                <li>Playbooks</li>
                                <li>What's new</li>
                                <li>Help Center</li>
                            </ul>
                        </div>
                    </div>
                            
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center lg:items-end mt-28 space-y-5">
                <div className="text-center lg:text-left">
                    <a href="/">
                        <span className="font-semibold text-4xl text-milk">Superside</span>
                    </a>

                    <p className="opacity-70 text-[16px]">© 2026 Superside. All rights reserved.</p>
                </div>

                <ul className="flex gap-4 md:gap-7 flex-wrap justify-center underline opacity-70">
                    <li>Privacy policy</li>
                    <li>Terms of use</li>
                    <li>Status page</li>
                    <li>DMCA</li>
                </ul>

                <div className="flex gap-7 items-center">
                    <Facebook className="w-11 h-11 border border-white rounded-full p-2" />
                    <Linkedin className="w-11 h-11 border border-white rounded-full p-2" />
                    <Youtube className="w-11 h-11 border border-white rounded-full p-2" />
                    <Instagram className="w-11 h-11 border border-white rounded-full p-2" />
                </div>
            </div>
        </section>
    );
}
 
export default Footer;