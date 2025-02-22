import React from "react";
import "./Resume.scss";

const Resume = () => {
  const contactInfo = [
    "avinashgangapatruni27@gmail.com",
    "https://mywebsite.com",
    "linkedin.com/in/avinash-gangapatruni",
    "github.com/AvinashGangapatruni",
  ];
  const education = [
    {
      title: "Bachelor of Technology",
      duration: "2023 - 2026",
      institution: "Aditya Engineering College",
      description:
        "During my B.Tech, I immersed myself in hands-on projects involving modern programming languages, web development tools, and system design. This practical experience helped me build a solid technical foundation and prepared me for real-world challenges in the IT field.",
    },
    {
      title: "Diploma",
      duration: "2020 - 2023",
      institution: "Andhra Polytechnic",
      description:
      "During my Diploma, I focused on developing a strong understanding of core technical concepts through both coursework and practical training. This period allowed me to explore different areas of technology, improve my problem-solving abilities, and gain insights into industry practices.",
    },
    {
      title: "Secondary Education",
      duration: "2019 - 2020",
      institution: "Aditya School",
      description: "During my 10th, I excelled in academics with a keen interest in mathematics and science, particularly physics. I was fascinated by the way these subjects explained the world around me, from the smallest particles to the largest celestial bodies. I enjoyed the challenge of problem-solving and the satisfaction of finding the right solution. ",
    },
  ];
  const internships = [
    {
      company: "Technical Hub.",
      duration: "June 2024 - July 2024",
      location: "Surampalem, Andhra Pradesh, India",
      responsibilities: [
        "Acquired in-depth knowledge of web technologies, including HTML, CSS, JavaScript, React.js, and Node.js",
        "Worked with databases like MongoDB and MySQL for efficient data management.",
        "Implemented authentication and authorization using JWT and OAuth.",
        "Integrated RESTful APIs to enable seamless frontend-backend communication.",
        "Continuously learned and explored modern web development frameworks and best practices.",
      ],
    },
    
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <a
          href="https://drive.google.com/file/d/11Vz2FvBzMtLUEsO3Qd0aUE_F1synIcNQ/view?usp=drive_link"
          className="icon resume"
          target="_blank"
          download="Resume"
          aria-label="Download Resume"
        >
          <i className="bi bi-download"></i>
        </a>

        <p className="justify">
          I am an enthusiastic and dedicated IT graduate with a solid foundation
          in programming and web development. I am eager to leverage my
          skills to contribute to innovative projects and solutions. Committed
          to continuous learning and growth, I aim to apply my technical
          knowledge and problem-solving abilities in a dynamic work environment
          where I can collaborate with experienced professionals and drive
          impactful results.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Avinash Gangapatruni</h4>
              <p className="justify">
                I am an aspiring and passionate IT professional with a strong
                foundation in programming and web development. I recently
                graduated with a degree in Information Technology.
              </p>
              <ul>
                {contactInfo.map((contact, index) => (
                  <li key={index}>{contact}</li>
                ))}
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.title}</h4>
                <h5>{edu.duration}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p className="justify">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Internships</h3>
            {internships.map((internship, index) => (
              <div className="resume-item" key={index}>
                <h4>{internship.company}</h4>
                <h5>{internship.duration}</h5>
                <p>
                  <em>{internship.location}</em>
                </p>
                <ul>
                  {internship.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="justify">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
