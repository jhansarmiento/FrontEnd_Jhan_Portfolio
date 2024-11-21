import aboutPic from "../assets/about-pic.png"
import experience from "../assets/experience.png"
import education from "../assets/education.png"

export default function AboutMe() {
  return (
    <section className="mx-5% mb-14">
        <p className="text-center text-base text-gray-600">Get To Know More</p>
        <h2 className="text-center text-3xl font-bold pb-3 pt-1">About Me</h2>
        <div className="min-[1200px]:flex min-[1200px]:gap-10 min-[1200px]:items-center">
            <figure>
                <img 
                    src={aboutPic} 
                    alt="About Picture" 
                    className="m-auto rounded-xl w-auto h-46vw mb-8 max-h-[400px] max-w-[400px]"/>
            </figure>
            <article className="flex flex-col justify-center min-[1200px]:items-center">
                <div className="flex max-[600px]:flex-wrap gap-8 my-8 max-[1200px]:mt-0">
                    <div className="p-6 border-[1px] border-black rounded-3xl flex flex-1 flex-col items-center">
                        <img src={experience} alt="experience icon" aria-hidden="true" className="w-8 h-8"/>
                        <p className="font-semibold text-lg">Experience</p>
                        <p className="text-center">Entry Level <br/> Frontend Development</p>
                    </div>
                    <div className="p-6 border-[1px] border-black rounded-3xl flex flex-1 flex-col items-center">
                        <img src={education} alt="experience icon" aria-hidden="true" className="w-8 h-8"/>
                        <p className="font-semibold text-lg">Education</p>
                        <p className="text-center">Pursuing a B.Sc. in <br/>Systems Engineering (5th semester)</p>
                    </div>
                </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, itaque. Quod ab delectus maiores omnis facere pariatur mollitia dolorem, nam illo minima, culpa alias, laborum minus. Consectetur placeat esse sapiente.</p>
            </article>
        </div>
    </section>
  )
}
