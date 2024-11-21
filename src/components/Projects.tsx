import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";

export default function Projects() {
  return (
    <section className="mx-5% h-fit">
      <p className="text-center text-base text-gray-600">Browse My Recent</p>
      <h2 className="text-center text-3xl font-bold pb-3 pt-1">Projects</h2>
      <div className="mt-8">
        <div className="flex flex-wrap gap-8">
          <article className=" flex-1 border-[1px] border-light-gray-100 p-6 rounded-3xl text-center">
            <figure>
              <img
                src={Project1}
                alt="project one image"
                aria-hidden="true"
                className="rounded-3xl w-90% h-90% m-auto"
              />
            </figure>
            <h3 className="m-4 font-semibold text-xl">Project One</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="font-semibold border-[1px] border-light-gray-100 rounded-3xl p-4 w-32">
                Github
              </button>
              <button className="font-semibold border-[1px] border-light-gray-100 rounded-3xl p-4 w-32">
                Live Demo
              </button>
            </div>
          </article>

          <article className="flex-1 border-[1px] border-light-gray-100 p-6 rounded-3xl text-center">
            <figure>
              <img
                src={Project2}
                alt="project one image"
                aria-hidden="true"
                className="rounded-3xl w-90% h-90% m-auto"
              />
            </figure>
            <h3 className="m-4 font-semibold text-xl">Project One</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="font-semibold border-[1px] border-light-gray-100 rounded-3xl p-4 w-32">
                Github
              </button>
              <button className="font-semibold border-[1px] border-light-gray-100 rounded-3xl p-4 w-32">
                Live Demo
              </button>
            </div>
          </article>

          <article className="flex-1 border-[1px] border-light-gray-100 p-6 rounded-3xl text-center">
            <figure>
              <img
                src={Project3}
                alt="project one image"
                aria-hidden="true"
                className="rounded-3xl w-90% h-90% m-auto"
              />
            </figure>
            <h3 className="m-4 font-semibold text-xl">Project One</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="font-semibold border-[1px] border-light-gray-100 rounded-3xl p-4 w-32">
                Github
              </button>
              <button className="font-semibold border-[1px] border-light-gray-100 rounded-3xl p-4 w-32">
                Live Demo
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
