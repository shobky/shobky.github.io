import Navigation from "../components/Navigation";
import "../styles/resume.css";
const Resume = () => {
  const resumeActive = {color:"grey", textDecoration:"underline"};


  return (
    <div className="resume_containe">
      <nav>
        <Navigation resumeActive={resumeActive}/>
      </nav>
    </div>
  );
};

export default Resume;
