import { sanityClient, urlFor } from "../sanity"
import React, { useState } from "react"
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import SectionOne from '../components/SectionOne'
import Head from 'next/head'
import github from "../assets/github.svg";
import Image from "next/image";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/Globalstyles";
import { lightTheme, darkTheme } from "../components/Themes"
import { useMediaQuery } from "react-responsive";

const Home = ({ projects }) => {

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});

	<Head>
		<title>My page title</title>
		<link
			href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
			rel="stylesheet"
		/>
	</Head>
	console.log(projects)

	const [theme, setTheme] = useState('light');
	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />
				<button onClick={themeToggler}>Switch Theme</button>
				<Header />
				<SectionOne />
				<div className={styles.container}>
					{projects.map((project) => {
						return (
							<div key={project._id}>
								{isDesktopOrLaptop &&
									<div className="project-container-desktop">
										<section className={isDesktopOrLaptop ? "project-section-desktop" : "project-section-mobile"}>
											<a href={project.linkproject} className={project.id % 2 === 0 ? 'project-info-left-first-section' : 'project-info-right-first-section'} >
												<img className="project-image" src={urlFor(project.image)} />
											</a>
											<div className={project.id % 2 === 0 ? 'project-info-right-first-section' : 'project-info-left-first-section'}>
												<div className="project-title">{project.title}</div>
												<div>{project.text}</div>
												<div className="tech-attributes">
													<div>{project.tech[1]}</div>
													<div>{project.tech[2]}</div>
													<div>{project.tech[3]}</div>
													<div>{project.tech[4]}</div>
													<div>{project.tech[5]}</div>
												</div>
												<div>{project.linkcode}</div>
											</div>
											<a href={project.linkproject} className={project.id % 2 === 0 ? 'project-info-left-second-section' : 'project-info-right-second-section'}>
												<img className="project-image" src={urlFor(project.image)} />
											</a>
											<div className={project.id % 2 === 0 ? 'project-info-right-second-section' : 'project-info-left-second-section'}>
												<div>{project.title}</div>
												<div>{project.linkcode}</div>
												<div>{project.text}</div>
												<div className="tech-attributes">
													<div>{project.tech[1]}</div>
													<div>{project.tech[2]}</div>
													<div>{project.tech[3]}</div>
													<div>{project.tech[4]}</div>
													<div>{project.tech[5]}</div>
												</div>
											</div>
										</section>
									</div>
								}


								{isTabletOrMobile &&
									<div className="project-container-mobile">
										<section className={"project-section-mobile"}>
											<a href={project.linkproject} className="project-image" >
												<img className="project-image-mobile" src={urlFor(project.image)} />
											</a>
											<div className="project-info-mobile">
												<div className="project-title">{project.title}</div>
												<div>{project.text}</div>
												<div className="tech-attributes">
													<div>{project.tech[1]}</div>
													<div>{project.tech[2]}</div>
													<div>{project.tech[3]}</div>
													<div>{project.tech[4]}</div>
													<div>{project.tech[5]}</div>
												</div>
												<div>{project.linkcode}</div>
											</div>
										</section>
									</div>
								}
							</div>
						)
					})
					}
					<div>{projects.name}</div>
				</div>
			</>
		</ThemeProvider>
	)
}

export const getServerSideProps = async () => {
	const query = '*[ _type == "project"]'
	const projects = await sanityClient.fetch(query)

	if (!projects.length) {
		return {
			props: {
				projects: [],
			},
		}
	} else {
		return {
			props: {
				projects,
			},
		}
	}
}
export default Home 