import resume from '../data/resume';

export const Hero = () => {
  return (
    <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold">Hi — I'm Rohit</h1>
        <p className="mt-4 text-slate-700 max-w-xl whitespace-pre-line">{resume.about}</p>

        <div className="mt-6 flex gap-3">
          <a href="#projects" className="px-5 py-3 bg-indigo-600 text-white rounded-md">See projects</a>
          <a href="#contact" className="px-4 py-3 border rounded-md text-slate-700">Contact me</a>
        </div>
      </div>

      <div className="order-first md:order-last">
        <div className="w-full rounded-2xl border p-6 bg-white shadow">
          <div className="h-48 bg-slate-100 rounded-md flex items-center justify-center text-slate-400">Personal branding / illustration</div>
          <div className="mt-4 text-sm text-slate-600">Download résumé or view contact below.</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
