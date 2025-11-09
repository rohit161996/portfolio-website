import resume from '../data/resume';

export const About = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-4 text-slate-700 max-w-3xl whitespace-pre-line">{resume.about}</p>
    </div>
  );
};

export default About;
