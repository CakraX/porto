const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'ReactJS', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB'],
  devops: ['Git & GitHub', 'Docker', 'AWS (EC2, S3)', 'CI/CD', 'Postman'],
}

const portfolioProjects = [
  {
    title: 'ERP System for Fashing Design Company',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    situation:
      'A fashion design company needed to replace disconnected spreadsheets with one ERP platform for purchasing, production tracking, and finance reporting.',
    task:
      'I was assigned to build key ERP modules and ensure data consistency between inventory, production, and accounting workflows.',
    action:
      'I implemented React dashboards for operational teams, created backend services in Node.js with PostgreSQL transactions, and introduced role-based access plus Dockerized deployment for staging and production.',
    result:
      'The system reduced manual reconciliation by 48%, shortened weekly reporting cycles, and improved cross-department visibility for management.',
    link: '#',
  },
  {
    title: 'Export Import Warehouse',
    technologies: ['React', 'Express', 'MongoDB', 'AWS'],
    situation:
      'A logistics business handling export-import cargo needed real-time warehouse visibility for inbound and outbound goods across multiple zones.',
    task:
      'My responsibility was to build a warehouse system that tracks stock movement, document status, and shipment readiness in near real-time.',
    action:
      'I developed scanning and monitoring interfaces in React, built event-driven APIs in Express, optimized MongoDB collections for movement history, and deployed services to AWS with automated CI/CD checks.',
    result:
      'Warehouse processing time per shipment improved by 31%, stock discrepancies dropped significantly, and operations teams gained faster decision-making through live dashboards.',
    link: '#',
  },
]

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Raveloux indonesia',
    period: '2022 - Present',
    responsibilities:
      'Build and maintain full-stack business applications, design scalable features, and collaborate across product and operations teams to deliver reliable internal systems.',
  },
  {
    role: 'Backend Engineer',
    company: 'victory Laris Transindo',
    period: '2020 - 2022',
    responsibilities:
      'Designed and maintained backend services, optimized database performance, and integrated third-party logistics APIs to support warehouse and shipment workflows.',
  },
]

const testimonials = [
  {
    quote:
      'Cakra built our ERP system with clear production and finance workflows. The platform made our reporting faster and gave our team much better control over daily operations.',
    name: 'Mario Tri Doyok',
    title: 'Head of Production at Raveloux Indonesia',
  },
  {
    quote:
      'For our export-import warehouse, Cakra delivered accurate stock movement tracking and real-time visibility. Shipment coordination is now more reliable and significantly faster.',
    name: 'Merry Riana',
    title: 'Head of Warehouse at Victory Laris Transindo',
  },
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 inline-block rounded-full bg-amber/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-slate">{description}</p> : null}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffaf2] font-body text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-peach/35 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-mint/35 blur-3xl" />
        <div className="absolute bottom-12 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky/20 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <p className="font-display text-lg font-bold tracking-tight">CakraX</p>
        <nav className="hidden gap-6 text-sm font-semibold md:flex">
          <a href="#about" className="hover:text-peach">About</a>
          <a href="#skills" className="hover:text-peach">Skills</a>
          <a href="#portfolio" className="hover:text-peach">Portfolio</a>
          <a href="#contact" className="hover:text-peach">Contact</a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 pt-8 md:grid-cols-[1.3fr_1fr] md:items-center lg:px-8">
          <div className="animate-rise">
            <p className="mb-4 inline-block rounded-full border border-ink/20 px-4 py-1 text-xs font-bold uppercase tracking-widest">
              Available for Freelance Projects
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Cakra Julianto
              <span className="mt-2 block text-peach">Full-Stack Web Developer</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate">
              Building scalable and high-performance web solutions that help businesses move faster, convert better, and stay reliable at scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="rounded-xl bg-ink px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-slate"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-ink/30 px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-ink"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="animate-rise rounded-3xl border border-white/60 bg-white/70 p-6 shadow-glow backdrop-blur [animation-delay:140ms]">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white">
              <img
                src="https://system.raveloux.com/storage/order_detail/37550/293151029108-37550-69b6797f981bc.jpeg"
                alt="Professional developer portrait"
                className="h-72 w-full rounded-xl object-cover"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-lg font-bold">4+ yrs</p>
                  <p>Experience</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-lg font-bold">20+</p>
                  <p>Projects</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-lg font-bold">12</p>
                  <p>Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="About Me"
            title="Turning product goals into clean and maintainable web apps"
            description="I started in web development out of curiosity and grew into full-stack engineering by building real products that solve operational and user-experience problems."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-glow">
              <h3 className="font-display text-xl font-bold">Brief Bio</h3>
              <p className="mt-3 text-slate">
                I enjoy crafting end-to-end experiences from user interface to API architecture. My work focuses on performance, accessibility, and business impact.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-glow">
              <h3 className="font-display text-xl font-bold">Core Skills</h3>
              <p className="mt-3 text-slate">
                React, Node.js, database design, cloud deployment, and CI/CD workflows for reliable production delivery.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-glow">
              <h3 className="font-display text-xl font-bold">Key Values</h3>
              <p className="mt-3 text-slate">
                Timeliness, attention to detail, and clear communication with stakeholders at every stage of development.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Skills"
            title="A balanced toolkit for shipping modern web products"
            description="I focus on practical technologies that help teams iterate quickly without sacrificing quality."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-xl font-bold">Front-End</h3>
              <ul className="mt-4 space-y-2 text-slate">
                {skills.frontend.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-xl font-bold">Back-End</h3>
              <ul className="mt-4 space-y-2 text-slate">
                {skills.backend.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-xl font-bold">DevOps & Tools</h3>
              <ul className="mt-4 space-y-2 text-slate">
                {skills.devops.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Portfolio"
            title="Selected projects with measurable outcomes"
            description="Each project below is structured using the STAR method to show context, contribution, and impact."
          />
          <div className="space-y-8">
            {portfolioProjects.map((project) => (
              <article key={project.title} className="rounded-3xl bg-white p-7 shadow-glow">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                  <a
                    href={project.link}
                    className="rounded-lg border border-ink/20 px-4 py-2 text-xs font-bold uppercase tracking-wide hover:border-ink"
                  >
                    Live Preview
                  </a>
                </div>
                <p className="text-sm font-semibold text-slate">
                  Technologies: {project.technologies.join(', ')}
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold">Situation</h4>
                    <p className="mt-1 text-slate">{project.situation}</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Task</h4>
                    <p className="mt-1 text-slate">{project.task}</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Action</h4>
                    <p className="mt-1 text-slate">{project.action}</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Result</h4>
                    <p className="mt-1 text-slate">{project.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Experience"
            title="Professional timeline"
            description="A mix of product-focused company work and client delivery across different industries."
          />
          <div className="space-y-4">
            {experiences.map((experience) => (
              <article
                key={experience.role + experience.company}
                className="rounded-2xl border border-ink/10 bg-white p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">
                    {experience.role} · {experience.company}
                  </h3>
                  <p className="text-sm font-semibold text-slate">{experience.period}</p>
                </div>
                <p className="mt-3 text-slate">{experience.responsibilities}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Testimonials"
            title="What clients say"
            description="Feedback that reflects collaboration quality and business results."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-2xl bg-ink p-6 text-white shadow-glow">
                <blockquote className="text-sm leading-relaxed">“{item.quote}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-white/75">{item.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something impactful together"
            description="Tell me about your project, timeline, and goals. I’ll get back to you soon."
          />
          <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
            <form className="rounded-2xl bg-white p-6 shadow-glow">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate">
                  Name
                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-ink/15 px-3 py-2 outline-none transition focus:border-ink"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm font-semibold text-slate">
                  Email
                  <input
                    type="email"
                    className="mt-2 w-full rounded-lg border border-ink/15 px-3 py-2 outline-none transition focus:border-ink"
                    placeholder="name@email.com"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm font-semibold text-slate">
                Message
                <textarea
                  rows="5"
                  className="mt-2 w-full rounded-lg border border-ink/15 px-3 py-2 outline-none transition focus:border-ink"
                  placeholder="Tell me about your project"
                />
              </label>
              <button
                type="submit"
                className="mt-5 rounded-xl bg-peach px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
              >
                Send Message
              </button>
            </form>

            <aside className="rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-2xl font-bold">Reach Me Directly</h3>
              <p className="mt-3 text-slate">
                Prefer direct contact? Send an email or connect via social platforms below.
              </p>
              <ul className="mt-6 space-y-3 text-slate">
                <li>
                  <span className="font-bold text-ink">Email:</span> cakrajulianto10@gmail.com
                </li>
                <li>
                  <span className="font-bold text-ink">GitHub:</span> https://github.com/CakraX
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}
