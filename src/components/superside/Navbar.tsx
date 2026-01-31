import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "Services", hasDropdown: true },
        { label: "Our Work", hasDropdown: false },
        { label: "Why Us", hasDropdown: true },
        { label: "Resources", hasDropdown: true },
        { label: "Pricing", hasDropdown: false },
        { label: "Enterprise", hasDropdown: false},
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-20 bg-milk backdrop-blur-3xl">
            <div className="px-6 lg:px-16 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/">
                        <span className="font-semibold text-3xl text-green">Superside</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                className="flex items-center gap-1 px-4 py-2 text-base text-green rounded-lg"
                            >
                                {item.label}
                                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                            </button>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button className="bg-green text-base text-white font-medium rounded-full px-6 py-3">
                            Book a demo
                        </button>
                        <button className="bg-transparent text-base text-green font-medium rounded-full px-6 py-3 border border-green">
                            Sign in
                        </button>
                        
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full h-screen left-0 right-0 bg-milk border-b border-border py-4 animate-fade-in-up z-40">
                        <nav className="flex flex-col gap-2 px-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    className="flex items-center justify-between py-3 text-left font-medium text-foreground border-b border-border last:border-0"
                                >
                                    {item.label}
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                </button>
                            ))}
                            <div className="flex flex-col gap-3 pt-4">
                                <button className="w-full">Log in</button>
                                <button className="w-full rounded-full">Book a demo</button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
