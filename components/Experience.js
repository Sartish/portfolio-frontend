import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
	return (
		<>
			<div className="header-container">
				<h1>Experience</h1>
				<h2>What has led me to this moment</h2>
			</div>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#CFD7C0', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #CFD7C0' }}
					date="2011 - present"
					iconStyle={{ background: '#CFD7C0', color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Creative Director</h3>
					<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
					<p>
						Creative Direction, User Experience, Visual Design, Project Management, Team Leading
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#CFD7C0', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #CFD7C0' }}
					date="2010 - 2011"
					iconStyle={{ background: '#CFD7C0', color: 'black' }}

				>
					<h3 className="vertical-timeline-element-title">Art Director</h3>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>
						Creative Direction, User Experience, Visual Design, SEO, Online Marketing
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#CFD7C0', color: '' }}
					contentArrowStyle={{ borderRight: '7px solid  #CFD7C0' }}
					date="2008 - 2010"
					iconStyle={{ background: '#CFD7C0', color: '#fff' }}

				>
					<h3 className="vertical-timeline-element-title">Web Designer</h3>
					<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
					<p>
						User Experience, Visual Design
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2006 - 2008"
					iconStyle={{ background: '#CFD7C0', color: '#fff' }}
					contentStyle={{ background: '#CFD7C0', color: '' }}
					contentArrowStyle={{ borderRight: '7px solid  #CFD7C0' }}

				>
					<h3 className="vertical-timeline-element-title">Web Designer</h3>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>
						User Experience, Visual Design
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="April 2013"
					iconStyle={{ background: '#f8f2e1', color: '#fff' }}
					contentStyle={{ background: '#f8f2e1', color: '' }}
					contentArrowStyle={{ borderRight: '7px solid  #f8f2e1' }}

				>
					<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
					<h4 className="vertical-timeline-element-subtitle">Online Course</h4>
					<p>
						Strategy, Social Media
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="November 2012"
					iconStyle={{ background: '#f8f2e1', color: '#fff' }}
					contentStyle={{ background: '#f8f2e1', color: '' }}
					contentArrowStyle={{ borderRight: '7px solid  #f8f2e1' }}

				>
					<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
					<h4 className="vertical-timeline-element-subtitle">Certification</h4>
					<p>
						Creative Direction, User Experience, Visual Design
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2002 - 2006"
					iconStyle={{ background: '#f8f2e1', color: '#fff' }}
					contentStyle={{ background: '#f8f2e1', color: '' }}
					contentArrowStyle={{ borderRight: '7px solid  #f8f2e1' }}

				>
					<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
					<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
					<p>
						Creative Direction, Visual Design
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</>
	)

}

export default Experience 