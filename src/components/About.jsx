import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss,
    SiNodedotjs, SiExpress, SiSpring, SiDotnet,
    SiPostgresql, SiMongodb, SiMysql, SiFirebase,
    SiGit, SiDocker, SiGithub, SiFigma
} from 'react-icons/si';

const tabs = {
    Frontend: [
        { icon: SiReact, label: 'React' },
        { icon: SiNextdotjs, label: 'Next.js' },
        { icon: SiTypescript, label: 'TypeScript' },
        { icon: SiJavascript, label: 'JavaScript' },
        { icon: SiHtml5, label: 'HTML5' },
        { icon: SiTailwindcss, label: 'Tailwind' },
    ],
    Backend: [
        { icon: SiNodedotjs, label: 'Node.js' },
        { icon: SiExpress, label: 'Express' },
        { icon: SiSpring, label: 'Spring Boot' },
        { icon: SiDotnet, label: '.NET' },
    ],
    Database: [
        { icon: SiPostgresql, label: 'PostgreSQL' },
        { icon: SiMongodb, label: 'MongoDB' },
        { icon: SiMysql, label: 'MySQL' },
        { icon: SiFirebase, label: 'Firebase' },
    ],
    Tools: [
        { icon: SiGit, label: 'Git' },
        { icon: SiDocker, label: 'Docker' },
        { icon: SiGithub, label: 'GitHub' },
        { icon: SiFigma, label: 'Figma' },
    ],
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function About() {
    const [activeTab, setActiveTab] = useState('Frontend');

    return (
        <section id="about" className="py-28 px-6" style={{ background: 'var(--bg-secondary)' }}>
            <div className="max-w-7xl mx-auto">

                {/* Quote */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2
                        className="section-title max-w-4xl leading-tight"
                        style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
                    >
                        I believe in a{' '}
                        <span style={{ color: 'var(--accent)' }}>user-centered</span>{' '}
                        design approach, ensuring every project is tailored to meet the
                        specific needs of its users.
                    </h2>
                </motion.div>

                {/* Bio + About */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div
                            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
                            style={{ color: 'var(--accent)' }}
                        >
                            About Me
                        </div>
                        <h3
                            className="text-3xl font-black mb-6"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                            Hi, I'm Sithija.
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            I'm a Fullstack Engineer dedicated to turning ideas into creative solutions.
                            I specialize in creating seamless and intuitive user experiences paired with
                            robust, scalable backends.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My approach focuses on building high-performing, maintainable solutions
                            tailored to both user needs and business objectives — prioritizing
                            performance, accessibility, and clean architecture.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <a
                                href="/cv.pdf"
                                download
                                className="btn-primary text-sm"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        className="relative"
                    >
                        <div
                            className="w-full h-64 lg:h-full rounded-lg flex items-center justify-center relative overflow-hidden"
                            style={{ background: 'var(--bg-card)', border: '1px solid rgba(59,130,246,0.15)' }}
                        >
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    background: 'radial-gradient(circle at 50% 50%, #3B82F6, transparent 70%)',
                                }}
                            />
                            <div className="text-center z-10">
                                <div
                                    className="text-7xl font-black mb-2 accent-glow"
                                    style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--accent)' }}
                                >
                                    SHJ
                                </div>
                                <div className="text-gray-500 text-sm tracking-widest uppercase">
                                    Fullstack Engineer
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div
                        className="text-xs font-bold tracking-[0.3em] uppercase mb-6"
                        style={{ color: 'var(--accent)' }}
                    >
                        My Stack
                    </div>
                    <h3
                        className="section-title mb-8"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                        Tech I Use
                    </h3>

                    {/* Tabs */}
                    <div className="flex gap-2 flex-wrap mb-8">
                        {Object.keys(tabs).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-all ${activeTab === tab
                                    ? 'text-white'
                                    : 'text-gray-500 hover:text-gray-300'
                                    }`}
                                style={
                                    activeTab === tab
                                        ? { background: 'var(--accent)', fontFamily: 'Outfit, sans-serif' }
                                        : { background: 'var(--bg-card)', fontFamily: 'Outfit, sans-serif', border: '1px solid rgba(255,255,255,0.06)' }
                                }
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Icons grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {tabs[activeTab].map(({ icon: Icon, label }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05, duration: 0.3 }}
                                className="flex flex-col items-center gap-3 p-5 rounded-lg card-hover group cursor-default"
                                style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.05)' }}
                            >
                                <Icon className="text-3xl text-gray-400 group-hover:text-blue-400 transition-colors" />
                                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors tracking-wide">
                                    {label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
