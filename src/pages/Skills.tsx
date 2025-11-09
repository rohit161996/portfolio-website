import resume from '../data/resume';

export const Skills = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold">Skills</h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg">
          <h4 className="font-medium">Languages</h4>
          <div className="mt-2 text-slate-600 dark:text-slate-300">{resume.skills.languages.join(', ')}</div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg">
          <h4 className="font-medium">Frameworks / Libraries</h4>
          <div className="mt-2 text-slate-600 dark:text-slate-300">{resume.skills.frameworks.join(', ')}</div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg">
          <h4 className="font-medium">Databases</h4>
          <div className="mt-2 text-slate-600 dark:text-slate-300">{resume.skills.databases.join(', ')}</div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg">
          <h4 className="font-medium">Developer Tools</h4>
          <div className="mt-2 text-slate-600 dark:text-slate-300">{resume.skills.tools.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
