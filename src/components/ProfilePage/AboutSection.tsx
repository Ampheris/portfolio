import ProfileCard from '../ProfileCard';

export default function AboutSection() {
  const currentAge = new Date().getFullYear() - 1997;
  const dogAge = new Date().getFullYear() - 2018;

  return (
    <section id="about" className="bg-gray-900/50  py-24 md:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-purple-400 md:text-5xl">
          About Me
        </h2>
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex w-full justify-center md:w-auto">
            <ProfileCard />
          </div>
          <div className="flex-1">
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              I'm a {currentAge} year old full-stack developer based in Helsingborg, Sweden, living
              together with my fiancé and our {dogAge} year old Bichon havanese dog. I hold a
              Bachelor's degree in Software Engineering with a specialization in Web Programming,
              and I enjoy working across the entire stack. Everything from shaping intuitive user
              interfaces to designing and maintaining reliable back-end systems.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Since 2019, I have been volunteering at Råtthjälpen, a non-profit organization focused
              on helping rats and other small animals find safe, permanent homes. In 2020, I began
              developing their internal CRM system, handling everything from data modeling and APIs
              to admin views and workflows, with the goal of simplifying daily operations and giving
              volunteers more time to focus on the animals.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              I've always had a strong eye for detail and a curiosity for how things work end to
              end. I love turning ideas into complete, well-thought-out applications and
              continuously improving them through iteration. My goal is to build meaningful software
              that solves real problems, and I have several exciting full-stack projects I’m looking
              forward to exploring in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
