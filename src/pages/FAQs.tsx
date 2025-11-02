import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/faq.scss';

// It's cleaner to manage your FAQ data as an array of objects
const faqsData = [
    {
        question: 'What services do you offer?',
        answer: 'We offer a range of services including web development, mobile app development, digital marketing, UI/UX design, cloud solutions, and IT consulting.',
    },
    {
        question: 'How can I get a quote for my project?',
        answer: 'You can contact us through our website or chat with us directly via WhatsApp to discuss your project requirements and get a personalized quote.',
    },
    {
        question: 'What is your development process?',
        answer: 'Our development process includes initial consultation, planning, design, development, testing, and deployment. We ensure regular communication with our clients throughout the process.',
    },
    {
        question: 'Do you provide post-launch support?',
        answer: 'Yes, we offer post-launch support and maintenance services to ensure your digital platform remains up-to-date and performs optimally.',
    },
    {
        question: 'How long does it take to complete a project?',
        answer: 'The timeline for project completion varies depending on the scope and complexity of the project. We provide estimated timelines during the initial consultation phase.',
    },
];


export default function FAQs() {
    // State to keep track of the currently open FAQ item
    // 'null' means all are closed
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Function to handle clicking on a question
    const handleClick = (index: number | null) => {
        // If the clicked item is already open, close it.
        // Otherwise, open the new item.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-heading-section">
                <h5>Frequently Asked Ques.</h5>
                <p>Find answers to the most common questions about our services.</p>
            </div>
            <div className="faq-content-section">
                {/* Map over the data array to render each FAQ item */}
                {faqsData.map((faq, index) => (
                    // Add the 'open' class dynamically
                    <div 
                        className={`faq-item ${openIndex === index ? 'open' : ''}`} 
                        key={index}
                    >
                        {/* Add the onClick handler to the question box */}
                        <div className='quesBx' onClick={() => handleClick(index)}>
                            <h6>{faq.question}</h6>
                            {/* The 'closed' class is now used for styling the icon's rotation */}
                            <FaChevronDown className='closed'/>
                        </div>
                        {/* The answer <p> will be shown/hidden using CSS */}
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}