import Information from "@/components/information";
import { projects } from "@/lib/Projects";
import Image from "next/image";
import Link from "next/link";
import arrIco from "@/public/backarr.png";

interface pageProps {
  params: { title: string };
}
export default async function Project({ params }: pageProps) {
  const title = params.title;
  const project = projects.find(
    (project) =>
      project.title.toLocaleLowerCase().replace(/\s+/g, "-") ===
      title.toLowerCase()
  );

  const PorjectInfo = () => {
    if (project == null) {
      return <div>404 not found</div>;
    } else {
      return (
        <div className="ml-0 md:ml-[35%]  md:pl-20 pl-5 pt-[5vh] md:py-[3%] bg-neutral-950 ease-in-out duration-150 text-white h-full min-h-screen">
          <Link href="/">
            <Image
              width="50"
              height="50"
              alt="back to home"
              src={arrIco}
              className=" invert mb-6"
            />
          </Link>
          <h1 className="text-5xl lg:text-8xl ">{project.title}</h1>
          <div className="py-8 w-[90%] md:w-[80%] text-md">
            <h2 className="font-light opacity-60 mb-2">{`(${project.discription})`}</h2>
            <p className=" font-regular">{project.long}</p>
            <Link
              href={project.link}
              target="blank"
              className="mt-2 hover:text-blue-800 block text-blue-500 font-medium"
            >
              Visit Website
            </Link>
            <div className="mt-6">
              <span className="text-lg font-medium">GitHub</span>
              <div className="felx gap-2">
                <Link
                  href={`https://github.com/shobky/${title.toLowerCase()}`}
                  target="blank"
                  className="hover:opacity-75 block"
                >
                  <Image
                    alt={title}
                    width="1200"
                    height="1200"
                    className="w-[80%] md:w-[45%]"
                    src={`https://opengraph.githubassets.com/1/shobky/${title.toLowerCase()}`}
                  />
                </Link>
                <br />
                {project.repos &&
                  project.repos.map((repo) => (
                    <Link
                      key={title}
                      href={`https://github.com/shobky/${title.toLowerCase()}`}
                      target="blank"
                      className="hover:opacity-75"
                    >
                      <Image
                        alt={title}
                        width="1200"
                        height="1200"
                        className="w-[80%] md:w-[45%]"
                        src={`https://opengraph.githubassets.com/1/shobky/${repo.toLowerCase()}`}
                      />
                      <br />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div className="hidden md:block">
        <Information />
      </div>
      <PorjectInfo />
    </>
  );
}
