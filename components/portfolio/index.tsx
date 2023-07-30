import Cover from "./Cover";
import { projects } from "./Projects";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {projects.map(project => (
        <div
          key={project.link}
          className="relative ease-in-out duration-75 aspect-square h-full w-full"
        >
          <a href={project.link} target="blank" className="group">
            <Cover
              src={project.cover}
              styles="absolute object-cover w-full h-full  opacity-75 hover:opacity-0 duration-75"
            />
            <h1 className="hover:bg-black absolute inset-0 flex flex-col items-center justify-center text-white text-[calc(1.5vw+1.5vh)] font-semibold ">
              {project.title}
              <p className="text-white text-[calc(.8vw+.8vh)] text-center -mb-5 font-light z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.discription}
              </p>
            </h1>
          </a>
        </div>
      ))}
    </div>
  );
}
