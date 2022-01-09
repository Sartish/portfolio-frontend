import { sanityClient, urlFor } from "../sanity.js";
import React from "react";

const SectionTwo = ({ projects }) => {
  console.log(projects);

  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project._id}>
            <div>{project.title}</div>
            <div>{project.linkproject}</div>
            <div>{project.linkcode}</div>
            <div>{project.text}</div>
            <img className="project-image" src={urlFor(project.image)} />
          </div>
        );
      })}
      <div>{projects.name}</div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[ _type == "project"]';
  const projects = await sanityClient.fetch(query);

  if (!projects.length) {
    return {
      props: {
        projects: [],
      },
    };
  } else {
    return {
      props: {
        projects,
      },
    };
  }
};
export default SectionTwo;
