import { Element } from 'react-scroll';
import '../styles/services.scss';

export default function Services() {
    return (
        <Element name='services' className="section-services">
            <div className="services-heading-section">
                <h5>Our Services</h5>
                <p>Comprehensive solutions tailored to your digital needs.</p>
            </div>
            <div className="services-content-section">
                <div className="service-card">
                    <h6>Web Development</h6>
                    <p>Building responsive and engaging websites to establish your online presence.</p>
                </div>
                <div className="service-card">
                    <h6>Mobile App Development</h6>
                    <p>Creating user-friendly mobile applications for both Android and iOS platforms.</p>
                </div>
                <div className="service-card">
                    <h6>Digital Marketing</h6>
                    <p>Enhancing your brand visibility through targeted digital marketing strategies.</p>
                </div>
                <div className="service-card">
                    <h6>UI/UX Design</h6>
                    <p>Designing intuitive interfaces to provide an exceptional user experience.</p>
                </div>
                <div className="service-card">
                    <h6>Cloud Solutions</h6>
                    <p>Offering scalable cloud services to optimize your business operations.</p>
                </div>
                <div className="service-card">
                    <h6>IT Consulting</h6>
                    <p>Providing expert advice to help you navigate the complexities of technology.</p>
                </div>
            </div>
        </Element>
    )
}
