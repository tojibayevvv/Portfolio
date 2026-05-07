import profileImg from "../assets/picture.png";

const techTicker = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Supabase', 'SQL', 'Tailwind CSS',
    'JavaScript', 'TypeScript', 'REST APIs', 'Git', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'Supabase', 'SQL', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'REST APIs', 'Git',
];

const miniStats = [
    { val: '2+', label: 'Years Experience' },
    { val: '15+', label: 'Projects Built' },
    { val: '5+', label: 'Happy Clients' },
]

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
        >
            {/* Glow blobs */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[140px] -top-24 -left-40 pointer-events-none" />
            <div className="absolute w-[380px] h-[380px] rounded-full bg-yellow-500/8 blur-[120px] top-1/3 right-0 pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-orange-500/8 blur-[100px] bottom-0 left-1/2 pointer-events-none" />

            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(#FF4D00 1px, transparent 1px), linear-gradient(90deg, #FF4D00 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-36 items-center">

                    {/* ── Left: copy ── */}
                    <div>
                        {/* Status badge */}
                        <div className="animate-fade-in inline-flex items-center gap-2.5 bg-[#FF4D00]/10 border border-[#FF4D00]/30 text-[#FF4D00] font-syne text-xs font-bold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#FF4D00] status-pulse block" />
                            Available for Freelance
                        </div>

                        <h1 className="font-syne font-extrabold leading-[1.0] tracking-tight text-[clamp(3rem,6.5vw,5.2rem)] animate-fade-up delay-100">
                            Frontend<br />
                            <span className="text-[#FF4D00]">Developer</span><br />
                            & Creator
                        </h1>

                        <p className="mt-6 text-[#888] text-base leading-relaxed max-w-md animate-fade-up delay-200">
                            Passionate about turning complex ideas into elegant, blazing-fast interfaces.
                            Specialized in <span className="text-white font-medium">React.js</span> with a
                            full-stack edge — I bridge beautiful UIs with solid backends via{' '}
                            <span className="text-white font-medium">Node.js, SQL & Supabase</span>.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 bg-[#FF4D00] hover:bg-[#ff6a2c] text-white font-syne font-bold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,77,0,0.4)]"
                            >
                                View Projects
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 border border-white/15 hover:border-[#FF4D00]/50 hover:text-[#FF4D00] text-[#ccc] font-syne font-bold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
                            >
                                Contact Me
                            </a>
                        </div>

                        {/* Mini stats */}
                        <div className="mt-12 flex gap-10 animate-fade-up delay-400">
                            {miniStats.map(({ val, label }) => (
                                <div key={label}>
                                    <p className="font-syne font-extrabold text-4xl text-[#FF4D00] leading-none">{val}</p>
                                    <p className="text-[#555] text-xs mt-1 uppercase tracking-widest font-syne">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: photo placeholder ── */}
                    <div className="flex justify-center animate-float">
                        <div className="relative w-72 md:w-80 lg:w-[340px]">
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 rounded-3xl border border-[#FF4D00]/20 animate-spin-slow" />
                            <div
                                className="relative w-full aspect-[3/4] bg-[#141414] border-2 border-dashed border-[#FF4D00]/30 rounded-2xl flex flex-col items-center justify-center gap-3 text-[#555] hover:border-[#FF4D00]/60 transition-colors duration-300 overflow-hidden group cursor-pointer"
                            >
                                {/* Inner glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF4D00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <svg
                                    className="w-14 h-14 text-[#FF4D00]/40 group-hover:text-[#FF4D00]/70 transition-colors"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <img src={profileImg} alt="" className="w-full aspect-[3/4] object-cover rounded-2xl" />

                                {/* Corner accents */}
                                <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#FF4D00]/40 rounded-tl-md" />
                                <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#FF4D00]/40 rounded-tr-md" />
                                <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#FF4D00]/40 rounded-bl-md" />
                                <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#FF4D00]/40 rounded-br-md" />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-[#FF4D00] text-white font-extrabold tracking-[2px] text-sm px-4 py-2 rounded-full shadow-xl">
                                Abdulloh Tojibayev
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech ticker */}
            <div className="mt-20 relative overflow-hidden border-y border-white/5 py-3">
                <div className="animate-marquee flex gap-10 whitespace-nowrap">
                    {techTicker.map((t, i) => (
                        <span key={i} className="font-syne font-bold text-xs uppercase tracking-widest text-[#333] hover:text-[#FF4D00] transition-colors cursor-default">
                            {t} <span className="text-[#FF4D00] mx-2">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
