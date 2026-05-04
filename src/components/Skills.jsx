const skillGroups = [
  {
    category: 'Frontend',
    color: '#FF4D00',
    skills: [
      { name: 'React.js',      level: 95, icon: '⚛️' },
      { name: 'JavaScript',    level: 92, icon: '🟨' },
      { name: 'TypeScript',    level: 80, icon: '🔷' },
      { name: 'Tailwind CSS',  level: 90, icon: '💨' },
      { name: 'HTML / CSS',    level: 95, icon: '🎨' },
    ],
  },
  {
    category: 'Backend',
    color: '#FFD600',
    skills: [
      { name: 'Node.js',       level: 82, icon: '🟢' },
      { name: 'Express.js',    level: 80, icon: '🚂' },
      { name: 'REST APIs',     level: 85, icon: '🔗' },
    ],
  },
  {
    category: 'Database',
    color: '#22C55E',
    skills: [
      { name: 'SQL',           level: 78, icon: '🗃️' },
      { name: 'Supabase',      level: 80, icon: '⚡' },
      { name: 'MongoDB',       level: 75, icon: '🍃' },
    ],
  },
  {
    category: 'Tools',
    color: '#818CF8',
    skills: [
      { name: 'Git / GitHub',  level: 88, icon: '🐙' },
      { name: 'Figma',         level: 72, icon: '🎭' },
      { name: 'Vite',          level: 85, icon: '⚡' },
    ],
  },
];

function SkillBar({ name, level, icon, color }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-syne font-semibold text-sm text-[#ccc] group-hover:text-white transition-colors flex items-center gap-2">
          <span>{icon}</span>{name}
        </span>
        <span className="font-syne font-bold text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${level}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-orange-600/8 blur-[120px] -left-24 bottom-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label font-syne text-[#FF4D00] text-xs font-bold uppercase tracking-[0.18em] mb-4 justify-center">
            My Skills
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight">
            Tech <span className="text-[#FF4D00]">Stack</span>
          </h2>
          <p className="mt-4 text-[#666] text-base max-w-md mx-auto">
            Tools & technologies I use to craft exceptional digital experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ category, color, skills }) => (
            <div
              key={category}
              className="bg-[#111] border border-white/6 hover:border-white/12 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-1 h-6 rounded-full"
                  style={{ background: color }}
                />
                <h3
                  className="font-syne font-extrabold text-sm uppercase tracking-widest"
                  style={{ color }}
                >
                  {category}
                </h3>
              </div>

              {/* Bars */}
              <div className="space-y-5">
                {skills.map((s) => (
                  <SkillBar key={s.name} {...s} color={color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech pills row */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {[
            'React.js','Node.js','Express.js','MongoDB','Supabase','PostgreSQL',
            'SQL','Tailwind CSS','TypeScript','REST APIs','Vite','Git',
          ].map((t) => (
            <span
              key={t}
              className="font-syne font-bold text-xs uppercase tracking-wider bg-[#141414] border border-white/8 hover:border-[#FF4D00]/40 hover:text-[#FF4D00] hover:-translate-y-0.5 text-[#aaa] px-4 py-2 rounded-full transition-all duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
