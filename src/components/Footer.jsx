export default function Footer() {
    return (
        <footer
            className="py-12 px-6 border-t"
            style={{ background: 'var(--bg-secondary)', borderColor: 'rgba(255,255,255,0.05)' }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Big name */}
                <div
                    className="text-5xl md:text-7xl font-black tracking-tight opacity-10 select-none"
                    style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--accent)' }}
                >
                    SITHIJA
                </div>

                <div className="text-center md:text-right">
                    <a
                        href="mailto:sithija.harshana@gmail.com"
                        className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
                    >
                        sithija.harshana@gmail.com
                    </a>
                    <p className="text-xs text-gray-700 mt-2">
                        © {new Date().getFullYear()} Sithija Harshana Jayasinghe. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
