export default function Resume() {
  return (
    <>
      <div className="bg-gray-950 flex justify-center text-center p-4">
        <h2 className="text-xl bg-gray-300 text-black px-4">Resume</h2>
      </div>
      <div className="p-4">
        <section>
          Technologies: JavaScript, TypeScript, React, Redux, React Native, Next.js, Ruby, Rails, Python, Tailwind CSS,
          Jest, RSpec, AWS, Git, CI/CD (GitHub Actions, Buddy), Sentry,, Azure, PostgreSQL, MongoDB
        </section>

        <h3>Work Experience</h3>
        <section>
          Assurant (Fixt) | Junior Software Engineer Feb 2022 - Present
          ●
          Rebuilt an outdated React application (“Web Repair”) into a modern Ruby on Rails system, replacing the
          frontend with Hotwire (Turbo + Stimulus) to deliver faster, more responsive interactions without
          traditional JavaScript-heavy SPA overhead.
          ●
          Designed and implemented a new scheduling workflow allowing customers to book repairs for phones,
          computers, and household appliances, improving reliability and reducing user friction.
          ●
          Migrated and refactored legacy React components into modular Rails views and Stimulus controllers,
          reducing code complexity and easing long-term maintainability.
          ●
          Integrated Turbo Streams and Turbo Frames to support real-time UI updates, decreasing page reloads and
          improving user experience performance.
          ●
          Utilized GitHub to manage and deploy new releases of company applications, ensuring stable rollouts and
          consistent delivery of new features.
          ●
          Upgraded the mission-critical “HQ” application from Rails 6 to 7, leveraging automated code-analysis and
          AI-assisted refactoring tools to accelerate migration and dependency modernization.
        </section>
        <section>
          ZeniMax Media/Bethesda Softworks | Quality Assurance Tester July 2016 - Sept 2021
          ●
          Conducted functional, regression, and compatibility testing for AAA game releases (Dishonored 2, Fallout
          76, The Elder Scrolls V: Skyrim, Wolfenstein II: The New Colossus), producing clear bug reports and
          collaborating with designers and engineers to verify fixes.
          ●
          Trained and supervised new QA hires on effective testing practices and bug reporting, with many becoming
          some of the team’s most productive contributors.
          ●
          Designed comprehensive test plans for core system functionality and coordinated their execution across the
          QA team to meet project deadlines.
          ●
          Used Jira, Hansoft, and Helix to document issues, 
        </section>
      </div>
    </>
  )
}