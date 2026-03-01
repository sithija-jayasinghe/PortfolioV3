import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { Link } from 'react-scroll';

const stats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '20+', label: 'Completed Projects' },
    { value: '10K+', label: 'Hours Worked' },
];

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ background: 'var(--bg-primary)' }}
        >
            <ParticleBackground />

            {/* Rotated email on left */}
            <div
                className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 items-center gap-3 z-10"
                style={{ transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center', left: '-60px' }}
            >
                <span className="w-12 h-px bg-blue-500" />
                <a
                    href="mailto:sithija@example.com"
                    className="text-xs tracking-[0.3em] uppercase text-gray-500 hover:text-blue-400 transition-colors whitespace-nowrap"
                >
                    sithija.harshana@gmail.com
                </a>
            </div>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

                    {/* Left: Title + subtitle + CTA */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h1
                                className="leading-none mb-6"
                                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, textTransform: 'uppercase' }}
                            >
                                <span
                                    className="block accent-glow"
                                    style={{
                                        fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                                        color: 'var(--accent)',
                                        letterSpacing: '-0.03em',
                                    }}
                                >
                                    FULLSTACK
                                </span>
                                <span
                                    className="block text-white"
                                    style={{
                                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                                        letterSpacing: '-0.03em',
                                    }}
                                >
                                    ENGINEER
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                            className="text-gray-400 max-w-md mb-8 leading-relaxed"
                            style={{ fontSize: '1.05rem' }}
                        >
                            Hi! I'm{' '}
                            <span className="text-white font-semibold">Sithija Harshana Jayasinghe</span>.
                            A passionate Fullstack Engineer with 5+ years of experience building
                            high-performance, scalable, and responsive web solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex items-center gap-4 flex-wrap"
                        >
                            <Link to="contact" smooth duration={600} offset={-70}>
                                <button className="btn-primary text-sm">Hire Me</button>
                            </Link>
                            <Link to="projects" smooth duration={600} offset={-70}>
                                <button
                                    className="text-sm font-bold tracking-widest uppercase px-8 py-3 border border-white/20 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all cursor-pointer"
                                    style={{ fontFamily: 'Outfit, sans-serif' }}
                                >
                                    View Work
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="flex flex-row lg:flex-col gap-8 lg:gap-10 lg:text-right"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="group">
                                <div
                                    className="font-black accent-text accent-glow"
                                    style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1 }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 text-sm mt-1 tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs tracking-widest uppercase text-gray-600">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
}
