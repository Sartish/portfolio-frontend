import { sanityClient, urlFor } from "../sanity"
import React, { useState } from "react"
import Header from '../components/Header'
import SectionOne from '../components/SectionOne'
import Image from "next/image";

/* import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/Globalstyles";
import { lightTheme, darkTheme } from "../components/Themes" */
import { useMediaQuery } from "react-responsive";
import github from '../assets/github.svg'
import newtab from '../assets/newtab.svg'

const Home = ({ projects }) => {

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width:  1024px)",
	});


	console.log(projects)

	const [theme, setTheme] = useState('light');
	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<>
			{isDesktopOrLaptop &&
				<section className="page-container">
					{/* 				<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
					{/* 					<GlobalStyles /> */}
					{/* 				<button onClick={themeToggler}>Switch Theme</button> */}
					<Header />
					<SectionOne />
					{projects.map((project) => {
						return (
							<div key={project._id}>

								<div className="project-container-desktop">
									<section className={isDesktopOrLaptop ? "project-section-desktop" : "project-section-mobile"}>
										<a href={project.linkproject} className={project.id % 2 === 0 ? 'project-info-left-first-section' : 'project-info-right-first-section'} >
											<img className="project-image" src={urlFor(project.image)} />
										</a>
										<div className={project.id % 2 === 0 ? 'project-info-right-first-section' : 'project-info-left-first-section'}>
											<div className="project-title">{project.title}</div>
											<p className="project-text">{project.text}
												<div className="social-media-desktop">
													<a className="link-github" href={project.linkcode}><Image className="github-icon" src={github} /></a>
													<a className="link-new-link" href={project.linkcode}><Image className="new-link-icon" src={newtab} /></a>
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


										<a href={project.linkproject} className={project.id % 2 === 0 ? 'project-info-left-second-section' : 'project-info-right-second-section'}>
											<img className="project-image" src={urlFor(project.image)} />
										</a>
										<div className={project.id % 2 === 0 ? 'project-info-right-second-section' : 'project-info-left-second-section'}>
											<div className="project-title">{project.title}</div>
											<p className="project-text">{project.text}
												<div className="social-media-desktop">
													<a className="link-github" href={project.linkcode}><Image className="github-icon" src={github} /></a>
													<a className="link-new-link" href={project.linkcode}><Image className="new-link-icon" src={newtab} /></a>
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
						)
					})
					}
					{/* 				</ThemeProvider> */}
				</section>
			}







			{isTabletOrMobile &&
				<section className="page-container-mobile">
					{/* 				<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
					{/* 					<GlobalStyles /> */}
					{/* 				<button onClick={themeToggler}>Switch Theme</button> */}
					<Header />
					<SectionOne />
					{projects.map((project) => {
						return (
							<div key={project._id}>
								<div className="project-container-mobile">
									<section className={"project-section-mobile"}>
										<a href={project.linkproject} className="project-image" >
											<img className="project-image-mobile" src={urlFor(project.image)} />
										</a>
										<div className="project-info-mobile">
											<div className="project-title">{project.title}</div>
											<p className="project-text">{project.text}
												<div className="social-media-desktop">
													<a className="link-github" href={project.linkcode}><Image className="github-icon" src={github} /></a>
													<a className="link-new-link" href={project.linkcode}><Image className="new-link-icon" src={newtab} /></a>
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
											<div>{project.linkcode}</div>
										</div>
									</section>
								</div>

							</div>
						)
					})
					}
					{/* 				</ThemeProvider> */}
				</section >
			}

		</>
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