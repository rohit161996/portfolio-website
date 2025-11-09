import resume from '../data/resume';

export const Contact = () => {
  return (
    <div className="py-10" id="contact">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-4 text-slate-700 dark:text-slate-300">Email: <a className="text-indigo-600 dark:text-indigo-400 hover:underline" href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a></p>
      <p className="mt-2 text-slate-700 dark:text-slate-300">Phone: {resume.contact.phone1} • {resume.contact.phone2}</p>
    </div>
  );
};

export default Contact;
