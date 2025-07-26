import { useState, useEffect } from "react";
import Section from "../shared/Section";
import Container from "../shared/Container";
import Grid from "../shared/Grid";
import projects from "../../projects";
import Card from "../shared/Card";
import { Date } from "../home/CvSection";

const shortenText = (text) => {
  const words = text.split(" ");
  if (words.length > 20) {
    return words.slice(0, 15).join(" ") + "...";
  }
  return text;
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 600);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <Section className="py-16">
      <Container>
        <Grid className="lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(project);
              }}
              className="p-6 flex flex-col gap-2 cursor-pointer project-card"
              key={project.id}
            >
              <img
                className="w-full h-32 object-cover rounded-lg"
                src={project.image}
                alt={project.title}
              />
              <h2 className="headline-caps text-xl">{project.title}</h2>
              <p>{shortenText(project.description)}</p>
              <Date>{project.year}</Date>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-4 p-2 rounded-sm skills-wrapper w-max border">
                  {project.skills.map((skill, index) => (
                    <img key={index} src={skill} width="19px" alt="" />
                  ))}
                </div>
                {project.online && (
                  <div className="flex items-center gap-2">
                    <span className="text-green-300 text-sm">Online</span>
                    <span className="rounded-full w-2 h-2 bg-green-300 inline-block"></span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </Grid>
      </Container>

      {selectedProject && (
        <div
          className={`fixed z-50 inset-0 backdrop-animation ${
            isClosing ? "hide" : ""
          } flex items-center justify-center p-4`}
          onClick={closeModal}
        >
          <div
            className={`bg-secondary border fade-box ${
              isClosing ? "hide" : ""
            } p-6 rounded-2xl shadow-lg max-w-2xl lg:max-h-[80vh] max-h-[60vh] overflow-y-auto relative`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4">
              <h2 className="text-2xl">{selectedProject.title}</h2>
              <button
                className="py-1 px-2 rounded-lg border cursor-pointer hover:bg-gray-800 transition-all"
                onClick={closeModal}
              >
                close
              </button>
            </div>

            <img
              className="w-full max-h-80 object-cover rounded-lg"
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <p className="mt-4">{selectedProject.description}</p>
            <Date>{selectedProject.year}</Date>
            <div className="my-4 flex gap-2 flex-wrap">
              {selectedProject.skills.map((skill, index) => (
                <img key={index} src={skill} width="30px" alt={skill} />
              ))}
            </div>
            <a
              className="py-1 px-2 rounded-lg border cursor-pointer hover:bg-gray-800 transition-all"
              href={selectedProject.link}
            >
              Visit project
            </a>
          </div>
        </div>
      )}
    </Section>
  );
};

export default ProjectsSection;
