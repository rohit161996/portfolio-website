import resume from '../data/resume';

export const Experience = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-8">
        {resume.experience.map((job, idx) => (
          <div key={idx}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{job.title} — {job.company}</h3>
                <div className="text-sm text-slate-500">{job.location} • {job.dates}</div>
              </div>
            </div>

            <ul className="mt-3 list-disc ml-5 text-slate-700 space-y-2">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
