import { resume } from '../util/resume'
 
export default function Resume() {
  return (
    <div className="max-h-screen">
      <div className="bg-gray-950 flex justify-center text-center p-4 w-full">
        <h2 className="text-2xl bg-[#d2d2d2] text-black px-4 py-2 w-2/3 font-medium">RESUME</h2>
      </div>
      <div className="font-thin overflow-scroll">
        <section className="p-4 bg-black m-4 text-xs">
          <h3 className="text-base">Technologies</h3>
          <h2>Some text</h2>
          <h3>some bullcrap</h3>
          <h1>Something New</h1>
          <p>JavaScript, TypeScript, React, Redux, React Native, Next.js, Ruby, Rails, Python, Tailwind CSS,
          Jest, RSpec, AWS, Git, CI/CD (GitHub Actions, Buddy), Sentry,, Azure, PostgreSQL, MongoDB</p>
        </section>

        {resume.map((item, i) => (
          <section className="p-4 bg-black m-4 text-xs" key={i}>
            <h3 className="text-base">{item.type}</h3>
            <div className="flex justify-between py-2">
              <h3>{item.title}</h3>
              <h3>{item.date}</h3>
            </div>
            <ol className="space-y-1">
              {item.list_items.map(list_item => (
                <li>- {list_item}</li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
