import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const socials = [
    { icon: FiGithub, href: 'https://github.com/', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/', label: 'Twitter' },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-28 px-6"
            style={{ background: 'var(--bg-primary)' }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div
                        className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
                        style={{ color: 'var(--accent)' }}
                    >
                        Get In Touch
                    </div>

                    <h2
                        className="section-title mb-6"
                        style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
                    >
                        Have a project{' '}
                        <span style={{ color: 'var(--accent)' }}>in mind?</span>
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or
                        opportunities to be part of your vision. Let's build something great together.
                    </p>

                    {/* Email CTA */}
                    <a
                        href="mailto:sithija.harshana@gmail.com"
                        className="inline-flex items-center gap-3 text-xl font-bold mb-12 group transition-all"
                        style={{ color: 'var(--accent)', fontFamily: 'Outfit, sans-serif' }}
                    >
                        <FiMail className="text-2xl group-hover:scale-110 transition-transform" />
                        <span className="border-b-2 pb-1 group-hover:opacity-80 transition-opacity"
                            style={{ borderColor: 'var(--accent)' }}
                        >
                            sithija.harshana@gmail.com
                        </span>
                    </a>

                    {/* Social icons */}
                    <div className="flex justify-center gap-6">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                whileHover={{ y: -4 }}
                                className="w-12 h-12 flex items-center justify-center rounded-lg text-gray-400 hover:text-blue-400 transition-colors"
                                style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                <Icon className="text-xl" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
