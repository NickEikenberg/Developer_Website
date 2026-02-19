// TODO: Create resume data file to store this info and display it programatticaly

export default function Resume() {
  return (
    <>
      <div className="bg-gray-950 flex justify-center text-center p-4 w-full">
        <h2 className="text-2xl bg-[#d2d2d2] text-black px-4 py-2 w-2/3 font-medium">RESUME</h2>
      </div>
      <div className="font-thin">
        <section className="p-4 bg-black m-4 text-xs">
          <h3 className="text-base">Technologies</h3>
          <p>JavaScript, TypeScript, React, Redux, React Native, Next.js, Ruby, Rails, Python, Tailwind CSS,
          Jest, RSpec, AWS, Git, CI/CD (GitHub Actions, Buddy), Sentry,, Azure, PostgreSQL, MongoDB</p>
        </section>

        <section className="p-4 bg-black m-4 text-xs">
          <h3 className="text-base">Work Experience</h3>
          <div className="flex justify-between py-2">
            <h3>Assurant (Fixt) | Junior Software Engineer</h3>
            <h3>Feb 2022 - Feb 2026</h3>
          </div>
          <ol className="space-y-1">
            <li>
              - Rebuilt an outdated React application (“Web Repair”) into a modern Ruby on Rails system, replacing the
              frontend with Hotwire (Turbo + Stimulus) to deliver faster, more responsive interactions without
              traditional JavaScript-heavy SPA overhead.
            </li>
            <li>
              - Designed and implemented a new scheduling workflow allowing customers to book repairs for phones,
              computers, and household appliances, improving reliability and reducing user friction.
            </li>
            <li>
              - Migrated and refactored legacy React components into modular Rails views and Stimulus controllers,
              reducing code complexity and easing long-term maintainability.
            </li>
            <li>
              - Utilized GitHub to manage and deploy new releases of company applications, ensuring stable rollouts and
              consistent delivery of new features.
            </li>
            <li>
              - Upgraded the mission-critical “HQ” application from Rails 6 to 7, leveraging automated code-analysis and
              AI-assisted refactoring tools to accelerate migration and dependency modernization.
            </li>
          </ol>
        </section>
        <section className="p-4 bg-black m-4 text-xs">
          <h3 className="text-base">Work Experience</h3>
          <div className="flex justify-between py-2">
            <h3>ZeniMax Media/Bethesda Softworks | Quality Assurance Tester</h3>
            <h3>July 2016 - Sept 2021</h3>
          </div>
          <ol className="space-y-1">
            <li>
              - Conducted functional, regression, and compatibility testing for AAA game releases (Dishonored 2, Fallout
              76, The Elder Scrolls V: Skyrim, Wolfenstein II: The New Colossus), producing clear bug reports and
              collaborating with designers and engineers to verify fixes.
            </li>
            <li>
              - Trained and supervised new QA hires on effective testing practices and bug reporting, with many becoming
              some of the team’s most productive contributors.
            </li>
            <li>
              - Designed comprehensive test plans for core system functionality and coordinated their execution across the
              QA team to meet project deadlines.
            </li>
            <li>
              - Used Jira, Hansoft, and Helix to document issues.
            </li>
          </ol>
        </section>
      </div>
    </>
  )
}
