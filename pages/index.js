import { sanityClient, urlFor } from "../sanity";
import React, { useEffect } from "react";
import Head from 'next/head'
import WritingCard from "../components/WritingCard";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Aos from 'aos';
import 'aos/dist/aos.css';

import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import NavBar from "../components/NavBar"
import StickyBar from "../components/StickyBar";
import FooterMobile from "../components/FooterMobile"
import github from "../assets/github.svg";
import newtab from "../assets/newtab.svg";

import Experience from "../components/Experience"
import HeaderDesktop from "../components/HeaderDesktop"
import Contact from "../components/Contact"
import CreatedBy from "../components/CreatedBy"

const Home = ({ projects }) => {

	useEffect(() => {
		Aos.init({ duration: 500 });
	}, []);

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width:  1024px)",
	});

	console.log(projects);

	return (
		<div className="w-screen">
			<Head>
				<title>Sara Carlstein</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link href="https://fonts.googleapis.com/css2?family=Lora&family=Open+Sans:wght@300&family=Poppins:wght@100&display=swap" rel="stylesheet"></link>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			</Head>
			<NavBar />
			<StickyBar />
			<a id="home" name="home"></a>
			<HeaderDesktop />
			{isDesktopOrLaptop && (
				<section>
					<div className="project-header-container">
						<a id="third-desktop" name="third-desktop">
							<div className="header-container" data-aos="fade-up">
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
											<img data-aos="fade-right"
												className="project-image-desktop"
												src={urlFor(project.image)}
											/>
										</a>
										<div
											data-aos="fade-right"
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
														<a className="link-new-link" href={project.linkproject}>
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
											<img data-aos="fade-left"
												className="project-image-desktop"
												src={urlFor(project.image)}
											/>
										</a>
										<div data-aos="fade-left"
											className={
												project.id % 2 === 0
													? "project-info-right-second-section"
													: "project-info-left-second-section"
											}
										>
											<div className="project-title">{project.title}</div>
											<p className="project-text" >
												{project.text}
												<div className="social-media-desktop">
													<div className="social-media-icons-right">
														<a className="link-github" href={project.linkcode}>
															<Image className="github-icon" src={github} width={25}
																height={30} />
														</a>
														<a className="link-new-link" href={project.linkproject}>
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
					<div className="header-container pb-10 mt-0" data-aos="fade-up">
						<h1>featured projects</h1>
						<h2>some stuff I have created</h2>
					</div>
					{projects.map((project) => {
						return (
							<div key={project._id}>
								<div className="project-container-mobile" data-aos="fade-up">
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
													<a className="link-new-link" href={project.linkproject}>
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
			<a id="skills" name="skills"></a>
			<Skills />
			<a id="about" name="about"></a>
			<AboutMe />
			<a id="writings" name="writings"></a>
			<WritingCard />
			<a id="contact" name="contact"></a>
			<Contact />
			<CreatedBy />
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
