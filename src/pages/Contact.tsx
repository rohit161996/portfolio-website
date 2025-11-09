import resume from '../data/resume';
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">
                I'm always open to discussing new projects, opportunities, or collaborations.
            </p>

            <div className="mt-10 bg-white dark:bg-gray-900 border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-sm">
                
                {/* Email */}
                <div className="mb-6">
                    <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Email</p>
                    <a
                        href={`mailto:${resume.contact.email}`}
                        className="text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                        {resume.contact.email}
                    </a>
                </div>

                {/* Phone Numbers */}
                <div className="mb-6">
                    <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                    <div className="text-slate-700 dark:text-slate-300 space-y-1">
                        <a href={`tel:${resume.contact.phone1}`} className="hover:underline">{resume.contact.phone1}</a><br/>
                        <a href={`tel:${resume.contact.phone2}`} className="hover:underline">{resume.contact.phone2}</a>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    {/* LinkedIn */}
                    <a
                        href={resume.contact.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-slate-100 shadow hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
                    >
                        🔗 LinkedIn
                    </a>

                    {/* GitHub */}
                    <a
                        href={resume.contact.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-slate-100 shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                    >
                        🐙 GitHub
                    </a>

                    {/* Download Resume */}
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
                    >
                        📄 Download Résumé
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Contact;
