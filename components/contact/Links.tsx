import "./styles.css";

const contacts = [
  { link: "shobkyy@gmail.com", id: 1 },
  { link: "github.com/shobky", id: 2 },
  { link: "linkedin.com/in/ahmed-shobky", id: 3 },
  { link: "twitter.com/_shobky", id: 4 },
];

export const Links = ({ counter }: { counter: number }) => {
  return (
    <div>
      {contacts.map(
        contact =>
          counter >= contact.id && (
            <p
              key={contact.id}
              className={`text-md md:text-[calc(.7vw+.7vh)] rotate-90 link-animation-1 absolute w-fit link-animation-${contact.id}`}
            >
              <a
                className="hover:text-cyan-400"
                target="blank"
                href={contact.link}
              >
                {contact.link}
              </a>
            </p>
          )
      )}
    </div>
  );
};
