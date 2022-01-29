import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
	return (
		<div className="mt-20 lg:mt-40 lg:mb-40">
			<div className="header-container pb-10">
				<h1>Experience</h1>
				<h2>What has led me to this moment</h2>
			</div>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#CFD7C0', color: 'black', font: 'Poppins', fontWeight: '400' }}
					contentArrowStyle={{ borderRight: '7px solid  #CFD7C0' }}
					date="2021 - present"
					iconStyle={{ background: '#CFD7C0', color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Software Engineer, Capgemini</h3>
					<h4 className="vertical-timeline-element-subtitle">Oslo</h4>
					<p contentStyle={{ fontWeight: '800' }}>
						Developer for clients, mainly in the frontend team, using React & Redux.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#CFD7C0', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #CFD7C0' }}
					date="2020-2021"
					iconStyle={{ background: '#CFD7C0', color: 'black' }}

				>
					<h3 className="vertical-timeline-element-title">Frontend developer, Technigo</h3>
					<h4 className="vertical-timeline-element-subtitle">Stockholm</h4>
					<p>
						Frontend developer bootcamp student and code coach in HTML, JavaScript & React.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#CFD7C0', color: '' }}
					contentArrowStyle={{ borderRight: '7px solid  #CFD7C0' }}
					date="2019-2021"
					iconStyle={{ background: '#CFD7C0', color: '#fff' }}

				>
					<h3 className="vertical-timeline-element-title">Application Consultant, Capgemini</h3>
					<h4 className="vertical-timeline-element-subtitle">Malmoe & Copenhagen</h4>
					<p>
						Consultant mainly within SAP and testing.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="November 2019"
					iconStyle={{ background: '#f8f2e1', color: '#fff' }}
					contentStyle={{ background: '#f8f2e1', color: '' }}
					contentArrowStyle={{ borderRight: '7px solid  #f8f2e1' }}

				>
					<h3 className="vertical-timeline-element-title">Scrum Master</h3>
					<h4 className="vertical-timeline-element-subtitle">Certification</h4>
					<p>
						Professional scrum master certification (PSM 1).
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2017-2019"
					iconStyle={{ background: '#f8f2e1', color: '#fff' }}
					contentStyle={{ background: '#f8f2e1', color: '' }}
					contentArrowStyle={{ borderRight: '7px solid  #f8f2e1' }}

				>
					<h3 className="vertical-timeline-element-title">MSc. International Business & Politics.</h3>
					<h4 className="vertical-timeline-element-subtitle">CBS, Copenhagen</h4>
					<p>
						Master degree from Copenhagen business school.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2015-2017"
					iconStyle={{ background: '#f8f2e1', color: '#fff' }}
					contentStyle={{ background: '#f8f2e1', color: '' }}
					contentArrowStyle={{ borderRight: '7px solid  #f8f2e1' }}

				>
					<h3 className="vertical-timeline-element-title">BSc. Business Administration and Sociology</h3>
					<h4 className="vertical-timeline-element-subtitle">CBS, Copenhagen</h4>
					<p>
						Business & marketing and minor in sociology.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	)

}

export default Experience 