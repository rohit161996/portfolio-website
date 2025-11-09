import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header className="w-full bg-white/80 sticky top-0 backdrop-blur z-40 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold">RR</div>
          <span className="font-semibold">Rohit</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <Link to="/about" className="hover:text-slate-900">About</Link>
          <Link to="/experience" className="hover:text-slate-900">Experience</Link>
          <Link to="/skills" className="hover:text-slate-900">Skills</Link>
          <Link to="/projects" className="hover:text-slate-900">Projects</Link>
          <Link to="/contact" className="hover:text-slate-900">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Get in touch</a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
