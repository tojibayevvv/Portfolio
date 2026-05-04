const languages = [
  {
    name: 'Uzbek',
    level: 'Native',
    proficiency: 100,
    flag: '🇺🇿',
    desc: 'Mother tongue — full professional & personal fluency.',
    color: '#1DB954',
  },
  {
    name: 'Russian',
    level: 'Fluent',
    proficiency: 90,
    flag: '🇷🇺',
    desc: 'Daily use — professional communication and technical reading.',
    color: '#FF4D00',
  },
  {
    name: 'English',
    level: 'Professional',
    proficiency: 82,
    flag: '🇬🇧',
    desc: 'Business & technical English — documentation, meetings, collaboration.',
    color: '#FFD600',
  },
];

export default function Languages() {
  return (
    <section id="languages" className="py-28 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute w-96 h-96 rounded-full bg-orange-600/8 blur-[130px] left-0 top-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label font-syne text-[#FF4D00] text-xs font-bold uppercase tracking-[0.18em] mb-4 justify-center">
            Communication
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight">
            Languages <span className="text-[#FF4D00]">I Speak</span>
          </h2>
          <p className="mt-4 text-[#555] text-base max-w-sm mx-auto">
            Bridging cultures and teams through multilingual communication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {languages.map(({ name, level, proficiency, flag, desc, color }) => (
            <div
              key={name}
              className="group relative bg-[#111] border border-white/6 hover:border-white/12 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              {/* Hover glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${color}12, transparent 70%)`,
                }}
              />

              {/* Top accent bar */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-24"
                style={{ background: color }}
              />

              {/* Flag */}
              <div className="text-5xl mb-4 leading-none">{flag}</div>

              {/* Name */}
              <h3 className="font-syne font-extrabold text-xl text-white mb-1">{name}</h3>

              {/* Level badge */}
              <span
                className="inline-block font-syne font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{ color, background: `${color}18`, border: `1px solid ${color}35` }}
              >
                {level}
              </span>

              {/* Description */}
              <p className="text-[#555] text-sm leading-relaxed mb-6">{desc}</p>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-syne text-[10px] uppercase tracking-widest text-[#444]">Proficiency</span>
                  <span className="font-syne font-bold text-xs" style={{ color }}>{proficiency}%</span>
                </div>
                <div className="h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${proficiency}%`, background: color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
