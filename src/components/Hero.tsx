import resume from '../data/resume';
import ProfileImg from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold">Hi — I'm Rohit</h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl whitespace-pre-line">{resume.about}</p>

                <div className="mt-6 flex gap-3 items-center">
                    <Link to="/projects" className="px-5 py-3 bg-indigo-600 text-white rounded-md">
                        See projects
                    </Link>
                    <Link to="/contact" className="px-4 py-3 border rounded-md text-slate-700 dark:text-slate-200">
                        Contact me
                    </Link>
                    <a href="./resume.pdf" download className="px-5 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-800 transition">
                        Download Resume
                    </a>
                </div>
            </div>

            <div className="order-first md:order-last flex justify-center md:justify-end">
                <div className="w-full rounded-3xl border p-6 bg-white shadow dark:bg-gray-800">
                    <img src={ProfileImg} alt="Profile" className="rounded-3xl w-64 h-64 object-cover shadow-lg mx-auto" />
                    <div className="mt-4 text-sm text-slate-600 dark:text-slate-400 text-center">
                        Download Resume or View Contact Details Below.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
