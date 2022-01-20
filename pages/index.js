import { sanityClient, urlFor } from "../sanity";
import React, { useState } from "react";
import Head from 'next/head'
import WritingCard from "../components/WritingCard";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Plant from "../components/Plant";
import Skills from "../components/Skills";
import NavBar from "../components/NavBar"
import StickyBar from "../components/StickyBar";
import github from "../assets/github.svg";
import newtab from "../assets/newtab.svg";
import heart from "../assets/heart.svg";

/* import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/Globalstyles";
import { lightTheme, darkTheme } from "../components/Themes" */




const Home = ({ projects }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width:  1024px)",
	});

	console.log(projects);

	const [theme, setTheme] = useState("light");
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
			</Head>
			<NavBar />

			{isDesktopOrLaptop && (
				<section className="page-container">
					<StickyBar />
					{/* 				<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
					{/* 					<GlobalStyles /> */}
					{/* 				<button onClick={themeToggler}>Switch Theme</button> */}
					<Header />

					<Plant />
					<AboutMe />
					<Skills />
					<div className="project-header-container">
						<h1 className="featured-project-header-desktop">Featured Projects</h1>
						<h2 className="featured-project-second-header-desktop">Some stuff I have created</h2>
					</div>
					{projects.map((project) => {
						return (
							<div key={project._id}>
								<div className="project-container-desktop">
									<section
										className={
											isDesktopOrLaptop
												? "project-section-desktop"
												: "project-section-mobile"
										}
									>
										<a
											href={project.linkproject}
											className={
												project.id % 2 === 0
													? "project-info-left-first-section"
													: "project-info-right-first-section"
											}
										>
											<img
												className="project-image-desktop"
												src={urlFor(project.image)}
											/>
										</a>
										<div
											className={
												project.id % 2 === 0
													? "project-info-right-first-section"
													: "project-info-left-first-section"
											}
										>
											<div className="project-title">{project.title}</div>
											<p className="project-text">
												{project.text}
												<div className="social-media-desktop">
													<div className="social-media-icon-left">
														<a className="link-new-link" href={project.linkcode}>
															<Image className="new-link-icon" src={heart} width={30}
																height={40} />
														</a>
													</div>
													<div className="social-media-icons-right">
														<a className="link-github" href={project.linkcode}>
															<Image className="github-icon" src={github} width={30}
																height={40} />
														</a>
														<a className="link-new-link" href={project.linkcode}>
															<Image className="new-link-icon" src={newtab} width={30}
																height={40} />
														</a>
													</div>
												</div>
											</p>

											<div className="tech-attributes">
												<div>{project.tech[1]}</div>
												<div>{project.tech[2]}</div>
												<div>{project.tech[3]}</div>
												<div>{project.tech[4]}</div>
												<div>{project.tech[5]}</div>
												<div>{project.tech[6]}</div>
												<div>{project.tech[7]}</div>
												<div>{project.tech[8]}</div>
											</div>
										</div>

										<a
											href={project.linkproject}
											className={
												project.id % 2 === 0
													? "project-info-left-second-section"
													: "project-info-right-second-section"
											}
										>
											<img
												className="project-image-desktop"
												src={urlFor(project.image)}
											/>
										</a>
										<div
											className={
												project.id % 2 === 0
													? "project-info-right-second-section"
													: "project-info-left-second-section"
											}
										>
											<div className="project-title">{project.title}</div>
											<p className="project-text">
												{project.text}
												<div className="social-media-desktop">
													<div className="social-media-icon-left">
														<a className="link-new-link" href={project.linkcode}>
															<Image className="new-link-icon" src={heart} width={30}
																height={40} />
														</a>
													</div>
													<div className="social-media-icons-right">
														<a className="link-github" href={project.linkcode}>
															<Image className="github-icon" src={github} width={30}
																height={40} />
														</a>
														<a className="link-new-link" href={project.linkcode}>
															<Image className="new-link-icon" src={newtab} width={30}
																height={40} />
														</a>
													</div>
												</div>
											</p>
											<div className="tech-attributes">
												<div>{project.tech[1]}</div>
												<div>{project.tech[2]}</div>
												<div>{project.tech[3]}</div>
												<div>{project.tech[4]}</div>
												<div>{project.tech[5]}</div>
												<div>{project.tech[6]}</div>
												<div>{project.tech[7]}</div>
												<div>{project.tech[8]}</div>
											</div>
										</div>
									</section>
								</div>
							</div>
						);
					})}
					{/* 				</ThemeProvider> */}
					<WritingCard />
				</section>
			)}

			{isTabletOrMobile && (
				<section className="page-container-mobile">
					{/* 				<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
					{/* 					<GlobalStyles /> */}
					{/* 				<button onClick={themeToggler}>Switch Theme</button> */}
					<Header />
					<AboutMe />
					<h1 className="featured-project-header-mobile">Featured Projects</h1>
					{projects.map((project) => {
						return (
							<div key={project._id}>
								<div className="project-container-mobile">
									<section className="project-section-mobile">
										<img
											className="project-image-mobile"
											src={urlFor(project.image)}
										/>
										<div className="project-title-mobile">{project.title}</div>
										<p className="project-text-mobile">
											{project.text}
											<div className="social-media-mobile">
												<div className="social-media-icon-left">
													<a className="link-new-link" href={project.linkcode}>
														<Image className="new-link-icon" src={heart} width={30}
															height={40} />
													</a>
												</div>
												<div className="social-media-icons-right">
													<a className="link-github" href={project.linkcode}>
														<Image className="github-icon" src={github} width={30}
															height={40} />
													</a>
													<a className="link-new-link" href={project.linkcode}>
														<Image className="new-link-icon" src={newtab} width={30}
															height={40} />
													</a>
												</div>
											</div>
										</p>
										<div className="tech-attributes-mobile">
											<div>{project.tech[1]}</div>
											<div>{project.tech[2]}</div>
											<div>{project.tech[3]}</div>
											<div>{project.tech[4]}</div>
											<div>{project.tech[5]}</div>
											<div>{project.tech[6]}</div>
											<div>{project.tech[7]}</div>
											<div>{project.tech[8]}</div>
										</div>
									</section>
								</div>
							</div>
						);
					})}
					{/* 				</ThemeProvider> */}
					<WritingCard />
				</section>
			)}
		</>
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
