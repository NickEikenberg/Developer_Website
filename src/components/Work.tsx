import { work } from '../util/work'

export default function Work() {
  return (
    <>
      <div className="bg-gray-950 flex justify-center text-center p-4 w-full">
        <h2 className="text-2xl bg-[#d2d2d2] text-black px-4 py-2 w-2/3 font-medium">MY WORK</h2>
      </div>
      <div className="font-thin">
              {work.map((work, i) => (
                <section className="p-4 bg-black m-4 text-xs space-y-2" key={i}>
                  <h3 className="text-base">{work.title}</h3>
                  <div className="w-full flex justify-center">
                    <div className="w-4/5 border-4 border-[#1a2732]">
                      <img src={work.image} />
                    </div>
                  </div>
                  <p>{work.description}</p>
                  {work.link && work.github &&
                    <p className='text-right'><a href={work.link}>Link</a> | <a href={work.github}>GitHub</a></p>
                  }
                </section>
              ))}
            </div>
    </>
  )
}
