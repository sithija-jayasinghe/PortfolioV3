import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
    {
        num: '_01.',
        title: 'E-Commerce Platform',
        desc: 'A full-featured e-commerce platform with product management, cart, checkout, and payment integration.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        github: 'https://github.com',
        live: 'https://example.com',
        color: '#3B82F6',
    },
    {
        num: '_02.',
        title: 'Healthcare Dashboard',
        desc: 'Multi-role healthcare management system with appointment scheduling, patient records, and analytics.',
        tags: ['Next.js', 'TypeScript', '.NET', 'MongoDB'],
        github: 'https://github.com',
        live: 'https://example.com',
        color: '#6366F1',
    },
    {
        num: '_03.',
        title: 'Real-Time Chat App',
        desc: 'Scalable real-time messaging application with WebSockets, rooms, and file sharing.',
        tags: ['React', 'Socket.io', 'Express', 'Redis'],
        github: 'https://github.com',
        live: 'https://example.com',
        color: '#0EA5E9',
    },
    {
        num: '_04.',
        title: 'Task Management SaaS',
        desc: 'Collaborative project management tool with Kanban boards, drag & drop, and team workspaces.',
        tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
        github: 'https://github.com',
        live: 'https://example.com',
        color: '#8B5CF6',
    },
    {
        num: '_05.',
        title: 'Restaurant Ordering System',
        desc: 'QR-based digital menu and ordering system for restaurants with real-time order management.',
        tags: ['React', 'Spring Boot', 'MySQL', 'Docker'],
        github: 'https://github.com',
        live: 'https://example.com',
        color: '#EC4899',
    },
    {
        num: '_06.',
        title: 'DevPortfolio Generator',
        desc: 'A CLI + web tool to generate beautiful developer portfolios from a JSON config.',
        tags: ['Node.js', 'React', 'MongoDB', 'Vercel'],
        github: 'https://github.com',
        live: 'https://example.com',
        color: '#14B8A6',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
};

export default function Projects() {
    return (
        <section id="projects" className="py-28 px-6" style={{ background: 'var(--bg-secondary)' }}>
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
                        Portfolio
                    </div>
                    <h2 className="section-title" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Selected Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                            className="group relative rounded-lg overflow-hidden card-hover"
                            style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            {/* Top color bar */}
                            <div className="h-1 w-full" style={{ background: project.color }} />

                            <div className="p-6">
                                {/* Number */}
                                <div
                                    className="text-xs font-black tracking-widest mb-3 font-mono"
                                    style={{ color: project.color, opacity: 0.7 }}
                                >
                                    {project.num}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl font-black mb-3 group-hover:text-blue-400 transition-colors"
                                    style={{ fontFamily: 'Outfit, sans-serif' }}
                                >
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.desc}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded font-medium"
                                            style={{ background: 'rgba(59,130,246,0.1)', color: 'var(--accent)' }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
                                    >
                                        <FiGithub /> Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors"
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
