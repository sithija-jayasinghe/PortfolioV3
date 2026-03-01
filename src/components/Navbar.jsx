import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/70 border-b border-white/5 py-3' : 'py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <span
                    className="font-black text-2xl tracking-widest"
                    style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--accent)' }}
                >
                    SHJ
                </span>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={600}
                                offset={-70}
                                className="text-sm font-medium tracking-widest uppercase text-gray-400 hover:text-white transition-colors cursor-pointer hover:text-blue-400"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hire Me CTA */}
                <Link
                    to="contact"
                    smooth={true}
                    duration={600}
                    offset={-70}
                    className="hidden md:block btn-primary text-sm cursor-pointer"
                >
                    Hire Me
                </Link>

                {/* Hamburger */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0f0f0f] border-t border-white/10"
                    >
                        <ul className="flex flex-col items-center gap-6 py-8">
                            {navLinks.map(link => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={600}
                                        offset={-70}
                                        onClick={() => setOpen(false)}
                                        className="text-base font-medium tracking-widest uppercase text-gray-300 hover:text-blue-400 cursor-pointer transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={600}
                                    onClick={() => setOpen(false)}
                                    className="btn-primary text-sm cursor-pointer"
                                >
                                    Hire Me
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
