export const Footer = () => {
    return (
        <footer className="w-full border-t border-slate-200 bg-white/60 mt-auto dark:bg-gray-900/60 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Rohit Ramchandani
            </div>
        </footer>
    );
};

export default Footer;
