import React from "react";
import CardComponent from "./card-component";
import Pro1 from "../assets/img/p1.jpeg";
import Pro3 from "../assets/img/p2.jpeg";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <div
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
      id="project"
    >
      <Fade left cascade>
        <section className="div-1">
          <h1 className="heading">Featured Projects..</h1>
          <div>
            {ProjectData.map((data, ind) => {
              const { github, external, img, title, text, skills } = data;
              return (
                <CardComponent
                  key={data + ind}
                  github={github}
                  external={external}
                  img={img}
                  title={title}
                  text={text}
                  skills={skills}
                />
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="https://github.com/Shriraj26"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="btn btn-outline-light"
              style={{ width: "fit-content" }}
            >
              More Projects
            </a>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Projects;

const ProjectData = [
  {
    title: "Project Management Tool",
    img: Pro1,
    skills: "React, Redux, Next.JS, Chakra UI, Node.JS, Express, Firebase, Socket.IO",
    github: "https://github.com/roshan0708/HealthDoc",
    text: "Developed a robust project management tool akin to Jira, facilitating the creation of projects and seamless assignment of tasks to users. Furthermore, the system incorporates the ability to attach comments to tasks, promoting effective collaboration.",
    external: "https://healthdoc.herokuapp.com/",
  },
  {
    title: "In-Memory Database",
    img: Pro3,
    skills: "Java, Design Patterns",
    github: "https://github.com/roshan0708/MeTalk",
    text: "Built an in-memory database in Java that stores values of several data types, such as Strings, Arrays, Objects, and Primitives.",
    external: ""
  }
  // {
  //   title: "Ecommerce Site",
  //   img: Pro1,
  //   skills: "React.js, Redux, Firebase, Stripe API, SASS",
  //   github: "https://github.com/roshan0708/React-ecommerce",
  //   text: "Designed and developed an ecommerce site where user can purchase clothes and make payments along with the signin and signup functionality.",
  //   external: "https://crwn-live0708.herokuapp.com/",
  // },
  // {
  //   title: "Recipe App",
  //   img: Pro3,
  //   skills: "React.js, Edamam API",
  //   github: "https://github.com/roshan0708/recipe_app",
  //   text: "Constructed web app for searching recipe of a food item and displaying it in the form of tables.",
  //   external: "https://roshan0708.github.io/recipe_app/",
  // },
];