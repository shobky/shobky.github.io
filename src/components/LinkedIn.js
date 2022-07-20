import "../styles/linkedIn.css";

const LinkedIn = () => {
  return (
    <div>
      <div className="fake_nav flex_space_between">
        <p className="section_name">Linkedin</p>
      </div>
      <div className="linkedin_container">
        <header>
          <div className="cover">
            <img
              className="my_picture"
              src={
                "https://media-exp1.licdn.com/dms/image/C4D03AQGG-7YsIhDLdA/profile-displayphoto-shrink_200_200/0/1651987060583?e=1663804800&v=beta&t=3xFUgrr8OwbPe5oX3dvNa_TDYLPbxSyGFxPjSJrgGng"
              }
            />
          </div>
          <div className="flex_space_between profile">
            <div className="details">
              <h1 className="my_name">
                <a targ="blank" style={{color:"black", textDecoration:"none"}} href="https://www.linkedin.com/in/ahmed-shobky-a27173212/">
                  Ahmed Shobky
                </a>
              </h1>
              <p className="my_title">React Developer</p>
              <p className="for-phone-only">Upwork · Udacity</p>
              <p className="for-phone-only">Faculty of Port Said</p>
              <p className="my_location">Port Said, Egypt</p>
              <p className="my_connections">48 connerctions</p>
            </div>
            <div className="experience_section">
              <div>
                <p className="icon udacity">U</p>
                <p className="field">Udacity</p>
              </div>
              <div>
                <p className="icon upwork">UP</p>
                <p className="field">Upwork</p>
              </div>
            </div>
          </div>
        </header>
        <div className="content_container">
          <h1 className="about_me-header">About </h1>
          <p className="about_me-text">
            A Thriving and Extremely Passionate Software Developer, aiming for
            Creativity and Best Practice. <br /> <br /> Currently working as a
            Frontend Developer with React library and super interested in
            becoming a Fullstack Developer soon.
          </p>
        </div>
        <div className="content_container">
          <h1 className="experience_header">Experience</h1>
          <div className="job_info">
            <p className="work_icon">UP</p>
            <p className="job_title">React Developer</p>
            <p>Upwork · Freelance</p>
            <p style={{ color: " rgb(61, 61, 61)" }}>
              Oct 2021 - Present · 10 mos
            </p>
            <p style={{ color: " rgb(61, 61, 61)" }}>Portsaid</p>
            <p className="skills">
              <span style={{ color: "black" }}>Skills:</span> React.js ·
              JavaScript · E-Commerce · React Hooks · React Router · Node.js ·
              Email.js · Responsive Web Design · Front-end Development ·
              JavaScript eXtension (JSX) · User Experience (UX)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedIn;
