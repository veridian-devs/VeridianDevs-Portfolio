import '../styles/legalPages.scss';

const TermsAndConditions = () => {
    return (
        <div className="legal-container">
            <h1>Terms and Conditions</h1>
            <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

            <p>
                Please read these Terms and Conditions ("Terms", "Terms and
                Conditions") carefully before using the www.veridiandevs.tech website
                (the "Service") operated by Veridian Devs ("us", "we", or "our").
            </p>
            <p>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply to
                all visitors, users, and others who access or use the Service.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing or using the Service, you agree to be bound by these
                Terms. If you disagree with any part of the terms, then you may not
                access the Service.
            </p>

            <h2>2. Use of Our Services</h2>
            <p>
                You agree to use our Service only for lawful purposes. You may not
                use our Service:
            </p>
            <ul>
                <li>
                    In any way that breaches any applicable local, national, or
                    international law or regulation.
                </li>
                <li>
                    To transmit, or procure the sending of, any unsolicited or
                    unauthorized advertising or promotional material (spam).
                </li>
                <li>
                    To knowingly transmit any data, send or upload any material that
                    contains viruses, Trojan horses, worms, or other harmful
                    programs.
                </li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
                The Service and its original content (excluding content provided by
                users), features, and functionality are and will remain the
                exclusive property of Veridian Devs and its licensors. This
                includes, but is not limited to, the text, graphics, logos, images,
                and software. Our portfolio (e.g., "YAATRIKA", "UNIONYX") is
                showcased as examples of our work and all rights to such work are
                retained by us or our clients as per our individual project
                agreements.
            </p>

            <h2>4. Links to Other Web Sites</h2>
            <p>
                Our Service may contain links to third-party web sites or services
                that are not owned or controlled by Veridian Devs.
            </p>
            <p>
                Veridian Devs has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any third-party
                web sites or services. You further acknowledge and agree that
                Veridian Devs shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be caused by
                or in connection with the use of or reliance on any such content,
                goods or services available on or through any such web sites or
                services.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
                Your use of the Service is at your sole risk. The Service is
                provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
                provided without warranties of any kind, whether express or implied,
                including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
                In no event shall Veridian Devs, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill,
                or other intangible losses, resulting from (i) your access to or use
                of or inability to access or use the Service; (ii) any conduct or
                content of any third party on the Service; (iii) any content
                obtained from the Service; and (iv) unauthorized access, use or
                alteration of your transmissions or content, whether based on
                warranty, contract, tort (including negligence) or any other legal
                theory, whether or not we have been informed of the possibility of
                such damage.
            </p>

            <h2>7. Governing Law</h2>
            <p>
                These Terms shall be governed and construed in accordance with the
                laws of [Your Jurisdiction, e.g., State of Delaware, USA or
                Republic of India], without regard to its conflict of law
                provisions.
            </p>

            <h2>8. Changes</h2>
            <p>
                We reserve the right, at our sole discretion, to modify or replace
                these Terms at any time. We will try to provide at least 30 days'
                notice prior to any new terms taking effect. By continuing to access
                or use our Service after those revisions become effective, you agree
                to be bound by the revised terms.
            </p>

            <h2>9. Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us:
            </p>
            <ul>
                <li>By email: <a href='mailto:veridiandevs@gmail.com'>veridiandevs@gmail.com</a></li>
            </ul>
        </div>
    );
};

export default TermsAndConditions;