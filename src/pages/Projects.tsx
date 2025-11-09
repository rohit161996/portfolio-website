import resume from '../data/resume';

export const Projects = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold">Projects (placeholders)</h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resume.projects.map((p, i) => (
          <div key={i} className="p-4 bg-white border rounded-lg">
            <h4 className="font-medium">{p.title}</h4>
            <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
          </div>
        ))}

        {/* placeholders */}
        <div className="p-4 bg-white border rounded-lg text-slate-500">Placeholder project card — add details later.</div>
        <div className="p-4 bg-white border rounded-lg text-slate-500">Placeholder project card — add details later.</div>
      </div>
    </div>
  );
};

export default Projects;
