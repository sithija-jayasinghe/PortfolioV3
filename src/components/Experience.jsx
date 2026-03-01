import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'Current Company',
        role: 'Senior Fullstack Engineer',
        period: 'Jan 2023 – Present',
        points: [
            'Architected and built scalable REST APIs and microservices using Node.js and Spring Boot.',
            'Led frontend development with React and Next.js, improving performance by 40%.',
            'Mentored junior developers and conducted code reviews to maintain code quality.',
        ],
    },
    {
        company: 'Previous Company',
        role: 'Fullstack Developer',
        period: 'Jul 2021 – Dec 2022',
        points: [
            'Developed full-stack features across React frontend and .NET backend.',
            'Integrated third-party APIs and payment gateways.',
            'Built CI/CD pipelines with GitHub Actions and Docker.',
        ],
    },
    {
        company: 'Startup',
        role: 'Junior Web Developer',
        period: 'Jun 2020 – Jun 2021',
        points: [
            'Built responsive UIs with HTML, CSS, JavaScript, and React.',
            'Worked closely with design team to translate Figma mockups into pixel-perfect code.',
            'Contributed to PostgreSQL database design and query optimization.',
        ],
    },
    {
        company: 'Freelance',
        role: 'Web Developer',
        period: '2019 – 2020',
        points: [
            'Delivered 10+ client websites on time and within budget.',
            'Implemented SEO best practices, improving organic traffic by 60%.',
        ],
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
};

export default function Experience() {
    return (
        <section id="experience" className="py-28 px-6" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div
                        className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
                        style={{ color: 'var(--accent)' }}
                    >
                        Career
                    </div>
                    <h2 className="section-title" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        My Experience
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                        style={{ background: 'rgba(59,130,246,0.2)' }}
                    />

                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Dot */}
                                <div
                                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full mt-6 ring-4"
                                    style={{
                                        background: 'var(--accent)',
                                        ringColor: 'var(--accent-glow)',
                                        boxShadow: '0 0 12px var(--accent-glow)',
                                        zIndex: 1,
                                    }}
                                />

                                {/* Period (hidden on mobile) */}
                                <div className="hidden md:flex md:w-1/2 items-start pt-5 justify-end pr-8">
                                    {i % 2 === 0 && (
                                        <span className="text-sm text-gray-500 font-medium tracking-widest">
                                            {exp.period}
                                        </span>
                                    )}
                                    {i % 2 !== 0 && <div />}
                                </div>

                                {/* Card */}
                                <div className="ml-10 md:ml-0 md:w-1/2 md:pl-8">
                                    <div
                                        className="p-6 rounded-lg card-hover group"
                                        style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.06)' }}
                                    >
                                        <div
                                            className="text-xs font-bold tracking-[0.3em] uppercase mb-1"
                                            style={{ color: 'var(--accent)' }}
                                        >
                                            {exp.company}
                                        </div>
                                        <h3
                                            className="text-xl font-black mb-1"
                                            style={{ fontFamily: 'Outfit, sans-serif' }}
                                        >
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm text-gray-500 mb-4 block md:hidden">{exp.period}</span>
                                        <ul className="space-y-2 mt-3">
                                            {exp.points.map((p, j) => (
                                                <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                                                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▹</span>
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Period right side (for even items) */}
                                <div className="hidden md:flex md:w-1/2 items-start pt-5 pl-8">
                                    {i % 2 !== 0 && (
                                        <span className="text-sm text-gray-500 font-medium tracking-widest">
                                            {exp.period}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
