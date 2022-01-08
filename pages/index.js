import { sanityClient, urlFor } from "../sanity";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/Globalstyles";
import { lightTheme, darkTheme } from "../components/Themes";

const Home = ({ projects }) => {
  <Head>
    <title>My page title</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/a41f6ad251.js"
      crossorigin="anonymous"
    ></script>
  </Head>;
  console.log(projects);

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={themeToggler}>Switch Theme</button>
        <Header />
        <SectionOne />
        <div className={styles.container}>
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
      </>
    </ThemeProvider>
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
export default Home;
