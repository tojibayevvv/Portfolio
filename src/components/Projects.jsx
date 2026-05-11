const projects = [
  {
    num: '01',
    title: 'Finance Manager',
    description:
      'This project is designed for small and medium businesses in Uzbekistan to manage their finances in a centralized and efficient way. It enables users to log income and expenses via a Telegram bot using text or voice messages, while providing a web dashboard for real-time monitoring and analysis.',
    tags: ['React.js', 'Node.js', 'Supabase', 'Nodemon', 'Telegram Bot'],
    accent: '#FF4D00',
    link: 'https://finance-project-365.vercel.app/',
    github: 'https://github.com/tojibayevvv/finance-project-365',
  },
  {
    num: '02',
    title: 'InClean',
    description:
      'InClean.lt is a professional cleaning service dedicated to delivering high-quality cleaning solutions for homes, apartments, offices, and post-construction buildings. We provide reliable, efficient, and detail-oriented cleaning services tailored to meet the needs of both residential and commercial clients, ensuring every space is spotless, fresh, and comfortable.',
    tags: ['React.js', 'Supabase', 'PostgreSQL', 'DnD Kit'],
    accent: '#FFD600',
    link: 'https://inclean.lt/',
    github: '#',
  },
  {
    num: '03',
    title: 'Aqlli Bozor (AI based)',
    description:
      `AI.AqlliBozor.uz is a smart digital management platform created to modernize and optimize traditional marketplaces across Uzbekistan. Developed in collaboration with a republic organization, the system helps bazaar administrations track daily income from vendors, monitor financial activity, and generate detailed analytics on money flow — including daily, monthly, and annual reports.

      By introducing transparency, automation, and real-time financial insights, AI.AqlliBozor.uz has significantly increased marketplace efficiency and revenue generation. In many markets, the platform helped increase revenue by 2x, and in some cases up to 4x, creating substantial economic impact and higher government revenue through improved financial control and reporting.
      `,
    tags: ['React.js', 'Express.js', 'SQL', 'Recharts', 'JWT'],
    accent: '#22C55E',
    link: 'https://ai.aqllibozor.uz',
    github: '#',
  },
  {
    num: '04',
    title: 'Xbuild',
    description:
      'XBuild is a SaaS-based CRM & ERP platform designed for construction companies and urban development businesses. The system helps companies manage employees, track expenses, organize projects, and streamline daily operations through a centralized digital solution. Originally created from a friend’s idea to support urban developers, XBuild has grown into a successful platform generating over $5,000 in annual revenue.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Swagger'],
    accent: '#818CF8',
    link: 'https://xbuild.uz/',
    github: '#',
  },
  {
    num: '05',
    title: 'Navro',
    description:
      'Navro is a modern rental platform designed to help users easily find apartments and houses for both living and vacation stays. The platform connects property owners with renters through a simple and user-friendly experience, offering convenient search, property listings, and booking solutions for comfortable short-term and long-term rentals.',
    tags: ['React.js', 'Socket.io', 'Node.js', 'Supabase'],
    accent: '#F43F5E',
    link: 'https://xbuild-five.vercel.app',
    github: '#',
  },
  {
    num: '06',
    title: 'Rest API',
    description:
      'User Service API is a RESTful API project built to demonstrate my Node.js backend development skills. The service was developed using Node.js, Express, TypeScript, MongoDB, and JWT authentication, focusing on secure and scalable user management. The API includes user registration and authentication, JWT-based authorization, role-based access control, user retrieval by ID, admin-only access to all users, and user blocking functionality. This project showcases my experience in backend architecture, authentication systems, database integration, and API development best practices.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    accent: '#FF4D00',
    link: '#',
    github: '#',
  },
  {
    num: '07',
    title: 'Beauty Point',
    description:
      'Beauty Pint is a modern web platform for showcasing beauty products, including skincare, makeup, and personal care items. It features a clean UI, responsive design, and smooth navigation, allowing users to explore products easily and efficiently.The project highlights strong frontend development skills, with a focus on performance, usability, and scalable interface design.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    accent: '#FF4D00',
    link: 'https://cosmetic-nine-wine.vercel.app/',
    github: '#',
  },
];

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute w-80 h-80 rounded-full bg-yellow-500/6 blur-[120px] right-0 top-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label font-syne text-[#FF4D00] text-xs font-bold uppercase tracking-[0.18em] mb-4">
              Portfolio
            </p>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight">
              Featured <span className="text-[#FF4D00]">Projects</span>
            </h2>
          </div>
          <p className="text-[#555] text-sm max-w-xs leading-relaxed">
            A selection of work that showcases problem-solving, clean architecture, and polished UX.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ num, title, description, tags, accent, link, github }) => (
            <div
              key={num}
              className="group bg-[#111] border border-white/6 hover:border-white/12 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Thumb */}
              <div className="relative h-48 bg-[#0e0e0e] flex items-center justify-center border-b border-white/5 overflow-hidden">
                {/* Background glow */}
                <div
                  className="absolute w-40 h-40 rounded-full blur-[60px] opacity-20 group-hover:opacity-35 transition-opacity"
                  style={{ background: accent }}
                />
                {/* Large number */}
                <span
                  className="font-syne font-extrabold text-[6rem] leading-none select-none"
                  style={{ color: `${accent}15` }}
                >
                  {num}
                </span>
                {/* Hover icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                    style={{ background: `${accent}18`, borderColor: `${accent}40` }}
                  >
                    <svg className="w-6 h-6" style={{ color: accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-syne font-extrabold text-lg text-white mb-3">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed flex-1">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="font-syne font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[#888]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/5">
                  <a
                    href={link}
                    target="_blank"
                    className="inline-flex items-center gap-2 font-syne font-bold text-xs uppercase tracking-wider transition-colors"
                    style={{ color: accent }}
                  >
                    Live Demo <ArrowIcon />
                  </a>
                  <a
                    href={github}
                    className="inline-flex items-center gap-2 font-syne font-bold text-xs uppercase tracking-wider text-[#555] hover:text-white transition-colors ml-auto"
                  >
                    <GithubIcon /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/12 hover:border-[#FF4D00]/40 text-[#aaa] hover:text-[#FF4D00] font-syne font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            <GithubIcon /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
