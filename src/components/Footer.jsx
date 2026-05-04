export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-syne font-extrabold text-lg tracking-tight">
          <span className="text-[#FF4D00]">&lt;</span>YN<span className="text-[#FF4D00]">/&gt;</span>
        </a>
        <p className="text-[#444] text-xs font-syne uppercase tracking-widest">
          © {year} · Built with React & Tailwind CSS
        </p>
        <a
          href="#home"
          className="text-[#555] hover:text-[#FF4D00] transition-colors"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
