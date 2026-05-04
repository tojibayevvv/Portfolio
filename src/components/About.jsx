const highlights = [
  { icon: '⚡', label: 'React.js Expert', desc: 'Hooks, Context, Redux, React Query' },
  { icon: '🔧', label: 'Full-Stack Ready', desc: 'Node, Express, REST & GraphQL APIs' },
  { icon: '🗄️', label: 'Database Fluent', desc: 'SQL, MongoDB, Supabase, PostgreSQL' },
  { icon: '🎨', label: 'UI Craftsman',   desc: 'Tailwind, Figma-to-Code, Animations' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Blob */}
      <div className="absolute w-96 h-96 rounded-full bg-orange-600/8 blur-[130px] right-0 top-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: card stack decoration */}
          <div className="hidden lg:flex items-center justify-center relative h-96">
            {/* Back card */}
            <div className="absolute w-60 h-72 bg-[#1A1A1A] border border-white/6 rounded-2xl rotate-[-8deg] top-4 left-8" />
            {/* Middle card */}
            <div className="absolute w-60 h-72 bg-[#1C1C1C] border border-white/8 rounded-2xl rotate-[4deg]" />
            {/* Front card */}
            <div className="relative w-60 h-72 bg-[#212121] border border-[#FF4D00]/20 rounded-2xl rotate-[-2deg] flex flex-col items-center justify-center gap-4 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-[#FF4D00]/10 border border-[#FF4D00]/25 flex items-center justify-center text-3xl">
                🚀
              </div>
              <p className="font-syne font-bold text-white text-lg">Frontend Dev</p>
              <p className="text-[#555] text-xs font-syne uppercase tracking-widest">React Specialist</p>
              <div className="mt-2 flex gap-2">
                {['#FF4D00', '#FFD600', '#22C55E'].map((c) => (
                  <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="section-label font-syne text-[#FF4D00] text-xs font-bold uppercase tracking-[0.18em] mb-4">
              About Me
            </p>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              Building interfaces<br />
              <span className="text-[#FF4D00]">people love</span> to use
            </h2>
            <p className="text-[#777] text-base leading-relaxed mb-4">
              I'm a Frontend Developer with a deep passion for React.js and modern web technologies.
              I specialize in building performant, accessible, and visually compelling web applications
              that deliver real value to users and businesses alike.
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-10">
              Beyond the frontend, I bring full-stack experience — from designing RESTful APIs with
              Node.js & Express.js, managing relational databases with SQL, to leveraging Supabase
              and MongoDB for scalable, modern architectures.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="group bg-[#141414] hover:bg-[#1a1a1a] border border-white/6 hover:border-[#FF4D00]/25 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-2xl mb-3 block">{icon}</span>
                  <p className="font-syne font-bold text-white text-sm mb-1">{label}</p>
                  <p className="text-[#555] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
