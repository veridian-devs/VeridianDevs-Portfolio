import '../styles/comparision.scss'
import { Timeline } from '../components/Timeline';
import { Element } from 'react-scroll';
export default function Comparision() {
    const timelineData = [{
        title: '01. Expert Developer and Designer.',
        content: (<p className='timeline-dark__entry-content'>Our team of seasoned developers and designers bring a wealth of experience to every project, ensuring top-notch quality and innovation.</p>)
    }, {
        title: '02. Easy project management.',
        content: (<p className='timeline-dark__entry-content'>We utilize user-friendly project management tools that allow for seamless collaboration, transparent communication, and efficient workflow.</p>)
    }, {
        title: '03. Cost Efficient.',
        content: (<p className='timeline-dark__entry-content'>Our services are competitively priced to provide maximum value without compromising on quality, helping you achieve your goals within budget.</p>)
    }, {
        title: '04. Updates every 24-Hours.',
        content: (<p className='timeline-dark__entry-content'>Stay informed with daily updates on project progress, milestones achieved, and upcoming tasks to ensure transparency and alignment.</p>)
    }];
    return (
        <Element name='comparision' className="section-comparision">
            <div className="comparision-heading-section">
                <h4>Why Veridian Devs?</h4>
                <p>Because we deliver exceptional digital solutions that drive results.</p>
            </div>
            <div className='comparision-timeline-section'>
                <div className="comparision-content-video">
                    <video autoPlay loop muted playsInline>
                        <source src="https://res.cloudinary.com/dj046hh4m/video/upload/v1762072123/sphere_uyvxzh.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Overlay Content */}
                    <div className="video-overlay" />
                </div>
                <div className="comparision-timeline-content">
                    <Timeline data={timelineData} />
                </div>
            </div>
        </Element>
    )
}
