import React from 'react';
import './Resume.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as EducationIcon } from '../../images/education.svg';
import { ReactComponent as WorkIcon } from '../../images/work.svg';

// const buttonOnClick = () => {
//     window.open(
//         'https://drive.google.com/file/d/1ndscAS5yvPQ9FTSJokRaTljW2pDl9wvL/view?usp=sharing'
//     );
// }
    
const Resume = () => (    
    <div className='about container'>
        <div className='resume__box'>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="October 2022 - present"
                    iconStyle={{ background: 'rgb(24, 0, 157)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Frontend Developre</h3>
                    <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="September - October 2021"
                    iconStyle={{ background: 'rgb(24, 0, 157)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Frontend Developre</h3>
                    <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
                    <p>
                    Web store pages layout [HTML, CSS, JS]
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="June 2021 — July 2022"
                    iconStyle={{ background: 'rgb(24, 0, 157)', color: '#fff' }}
                    icon={<EducationIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification | IT school GoIT (online) </h4>
                    <p>
                    Completed Full Stack Developer cours
                    </p>
                    <ul>
                        <li>HTML;</li>
                        <li>CSS;</li>
                        <li>JavaScript;</li>
                        <li>React;</li>
                        <li>Node</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2018 - September 2021"
                    iconStyle={{ background: 'rgb(24, 0, 157)', color: '#fff'}}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">JSC 'UKRTELECOM'</h3>
                    <h4 className="vertical-timeline-element-subtitle">Chernihiv, Ukraine</h4>
                    <ul>
                        <li>accounting of non-current assets of the enterprise;</li>
                        <li>depreciation;</li>
                        <li>annual and technical inventory;</li>
                        <li>formation, acceptance and control of primary documentation;</li>
                        <li>successful completion of internal audit</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="September 2014 - December 2019"
                    iconStyle={{ background: 'rgb(24, 0, 157)', color: '#fff' }}
                    icon={<EducationIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Chernihiv National Technological University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Master's Degree in Accounting</h4>
                    <p>
                    Specialty of Accounting and Audit
                    </p>
                </VerticalTimelineElement>

</VerticalTimeline>

            
            {/* <button
                className='resume__button'
                onClick={buttonOnClick}
            >
                Download CV
                <Download />
           </button> */}
        </div>
    </div>
);


export default Resume;