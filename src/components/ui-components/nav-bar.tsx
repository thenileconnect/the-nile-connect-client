import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCpu, FiLayers, FiUsers, FiUserCheck, FiHelpCircle } from 'react-icons/fi';

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const navItems = [
        { href: "/process", label: "Process", icon: FiCpu },
        { href: "/services", label: "Services", icon: FiLayers },
        { href: "/about", label: "About us", icon: FiUsers },
        { href: "/talents", label: "Talents", icon: FiUserCheck },
        { href: "/faq", label: "FAQ", icon: FiHelpCircle },
    ];

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setHasScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    return (
        <nav className={`flex flex-wrap items-center justify-between px-6 py-5 shadow-md mx-auto fixed top-0 left-0 right-0 max-w-7xl z-50 transition-colors duration-300 ${hasScrolled ? 'bg-[#0a0a0a] text-white' : ''}`}>
            <div className="text-xl font-bold text-white">
                <Link href="/"><span className="text-[#B9FD50]">Nile</span>Connect</Link>
            </div>
            <motion.button
                className="lg:hidden text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isMenuOpen ? "close" : "open"}
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
            <div className="hidden lg:flex lg:items-center lg:w-auto">
                <div className="lg:flex-grow">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.href} className={`flex items-center lg:inline-flex lg:mt-0 font-bold mr-4 hover:text-accent transition-colors duration-200 text-white`}>
                            <item.icon className="mr-2" />
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div>
                    <Link href="/get-started" className="inline-block px-4 py-2 text-black bg-accent rounded hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
                        Get Started
                    </Link>
                </div>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className={`w-full lg:hidden ${hasScrolled ? 'bg-black text-white' : ''}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link href={item.href} className={`flex items-center mt-4 font-bold mr-4 hover:text-[#D6CDA4] transition-colors duration-200 ${hasScrolled ? 'text-white' : 'text-black dark:text-white'}`}>
                                        <item.icon className="mr-2" />
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <Link href="/get-started" className="inline-block px-4 py-2 text-black bg-accent rounded hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}   