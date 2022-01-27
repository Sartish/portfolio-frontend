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
import FooterMobile from "../components/FooterMobile"
import github from "../assets/github.svg";
import newtab from "../assets/newtab.svg";
import heart from "../assets/heart.svg";
import Experience from "../components/Experience"
import HeaderDesktop from "../components/HeaderDesktop"

/* import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/Globalstyles";
import { lightTheme, darkTheme } from "../components/Themes" */


const Home = ({ projects }) => {
	const [isClick, setClick] = useState(false);
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
		<div className="w-screen">
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link href="https://fonts.googleapis.com/css2?family=Lora&family=Open+Sans:wght@300&family=Poppins:wght@100&display=swap" rel="stylesheet"></link>
			</Head>
			<NavBar />
			<StickyBar />
			<a id="home" name="home"></a>
			<HeaderDesktop />
			{isDesktopOrLaptop && (
				<section>
					{/* 				<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
					{/* 					<GlobalStyles /> */}
					{/* 				<button onClick={themeToggler}>Switch Theme</button> */}
					<div className="project-header-container">
						<a id="third-desktop" name="third-desktop">
							<div className="header-container">
								<h1>featured projects</h1>
								<h2>some stuff I have created</h2>
							</div>
						</a>
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
													<div className="social-media-icons-right">
														<a className="link-github" href={project.linkcode}>
															<Image className="github-icon" src={github} width={25}
																height={30} />
														</a>
														<a className="link-new-link" href={project.linkcode}>
															<Image className="new-link-icon" src={newtab} width={25}
																height={30} />
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
													<div className="social-media-icons-right">
														<a className="link-github" href={project.linkcode}>
															<Image className="github-icon" src={github} width={25}
																height={30} />
														</a>
														<a className="link-new-link" href={project.linkcode}>
															<Image className="new-link-icon" src={newtab} width={25}
																height={30} />
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
				</section>
			)}

			{isTabletOrMobile && (
				<section className="page-container-mobile">

					{/* 				<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
					{/* 					<GlobalStyles /> */}
					{/* 				<button onClick={themeToggler}>Switch Theme</button> */}
					<a id="third-mobile" name="third-mobile"></a>
					<div className="header-container pb-10 mt-0">
						<h1>featured projects</h1>
						<h2>some stuff I have created</h2>
					</div>
					{projects.map((project) => {
						return (
							<div key={project._id}>
								<div className="project-container-mobile">
									<section className="project-section-mobile">
										<img
											className="w-[300px] md:w-[400px]"
											src={urlFor(project.image)}
										/>
										<div className="project-title-mobile">{project.title}</div>
										<p className="project-text-mobile">
											{project.text}
											<div className="social-media-mobile">
												<div className="social-media-icons-right">
													<a className="link-github" href={project.linkcode}>
														<Image className="github-icon" src={github} width={25}
															height={30} />
													</a>
													<a className="link-new-link" href={project.linkcode}>
														<Image className="new-link-icon" src={newtab} width={25}
															height={30} />
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
				</section>
			)}
			<a id="experience" name="experience"></a>
			<Experience />
			<a id="skills" name="skille"></a>
			<Skills />
			<a id="about" name="about"></a>
			<AboutMe />
			<a id="writings" name="writings"></a>
			<WritingCard />
			<FooterMobile />
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
export default Home;
