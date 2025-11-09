import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        try {
            const t = localStorage.getItem('theme');
            return (t === 'light' ? 'light' : 'dark');
        } catch {
            return 'dark';
        }
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') root.classList.add('dark');
        else root.classList.remove('dark');
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            // ignore localStorage write errors (privacy mode)
            try {
                console.debug('Could not persist theme', (e as Error).message);
            } catch {
                // swallow any logging issues
            }
        }
    }, [theme]);

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <header className="w-full bg-white/80 dark:bg-gray-900/80 sticky top-0 backdrop-blur z-40 border-b border-slate-200 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold">RR</div>
                    <span className="font-semibold">
                        Rohit Ramchandani
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
                    <Link to="/about" className="hover:text-slate-900 dark:hover:text-white">
                        About
                    </Link>
                    <Link to="/experience" className="hover:text-slate-900 dark:hover:text-white">
                        Experience
                    </Link>
                    <Link to="/skills" className="hover:text-slate-900 dark:hover:text-white">
                        Skills
                    </Link>
                    <Link to="/projects" className="hover:text-slate-900 dark:hover:text-white">
                        Projects
                    </Link>
                    <Link to="/contact" className="hover:text-slate-900 dark:hover:text-white">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggle}
                        aria-label="Toggle theme"
                        className="p-2 rounded-md border bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-sm"
                    >
                        {theme === 'dark' ? '🌙' : '☀️'}
                    </button>

                    <div className="hidden md:flex items-center">
                        <Link to="/contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
