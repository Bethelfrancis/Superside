const Sponsor = () => {
    const brands = [
        "Amazon", "Shopify", "Reddit", "Salesforce", "Meta", 
        "Google", "Microsoft", "Spotify", "Uber", "Airbnb",
        "Netflix", "Stripe", "Figma", "Slack", "Zoom"
    ];

    const duplicatedBrands = [...brands, ...brands];

    return (
        <section className="text-green py-16 overflow-hidden">
            <div className="px-6 mb-14 lg:mb-20">
                <h4 className="text-center text-lg font-medium uppercase tracking-wider">
                    Trusted by 500+ Global brands
                </h4>
            </div>

            <div className="relative overflow-hidden mb-10">
                <div className="flex w-max animate-scroll pause-on-hover">
                    {
                        duplicatedBrands.map((brand, index) => (
                        <div
                            key={`row1-${brand}-${index}`}
                            className="shrink-0 mx-8 md:mx-12"
                        >
                            <div className="flex items-center justify-center h-12 px-6 rounded-lg shadow-sm border border-green">
                                <span className="text-lg font-semibold whitespace-nowrap">
                                    {brand}
                                </span>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>

            <div className="relative overflow-hidden">
                <div className="flex w-max animate-scroll-reverse pause-on-hover">
                    {
                        [...duplicatedBrands].reverse().map((brand, index) => (
                            <div
                                key={`row2-${brand}-${index}`}
                                className="shrink-0 mx-8 md:mx-12"
                            >
                                <div className="flex items-center justify-center h-12 px-6 rounded-lg shadow-sm border border-border">
                                    <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                                        {brand}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
