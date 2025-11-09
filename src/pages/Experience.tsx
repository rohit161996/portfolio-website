import resume from '../data/resume';

export const Experience = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
                Experience
            </h2>

            <div className="space-y-10">
                {resume.experience.map((job, idx) => (
                    <div
                        key={idx}
                        className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-slate-700 
                        rounded-xl shadow-sm hover:shadow-md transition p-6"
                    >
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    {job.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {job.company} • {job.location}
                                </p>
                            </div>

                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {job.dates}
                            </p>
                        </div>

                        {/* Bullet List */}
                        <ul className="mt-4 list-disc list-inside text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                            {job.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
