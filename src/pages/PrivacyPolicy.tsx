import '../styles/legalPages.scss'; // Import the shared SCSS file

const PrivacyPolicy = () => {
    return (
        <div className="legal-container">
            <h1>Privacy Policy for Veridian Devs</h1>
            <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

            <p>
                Veridian Devs ("us", "we", or "our") operates the www.veridiandevs.tech
                website (the "Service"). This page informs you of our policies
                regarding the collection, use, and disclosure of personal data when
                you use our Service and the choices you have associated with that data.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
                We collect several different types of information for various
                purposes to provide and improve our Service to you.
            </p>

            <h3>Types of Data Collected</h3>
            <ul>
                <li>
                    <strong>Personal Data:</strong> While using our Service, especially
                    through our "Request a Callback" or "Chat Now" features, we may
                    ask you to provide us with certain personally identifiable
                    information that can be used to contact or identify you ("Personal
                    Data"). This may include, but is not limited to:
                    <ul>
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Company Name</li>
                    </ul>
                </li>
                <li>
                    <strong>Usage Data:</strong> We may also collect information on how
                    the Service is accessed and used ("Usage Data"). This Usage Data
                    may include information such as your computer's Internet Protocol
                    address (e.g. IP address), browser type, browser version, the
                    pages of our Service that you visit, the time and date of your
                    visit, the time spent on those pages, unique device identifiers,
                    and other diagnostic data.
                </li>
                <li>
                    <strong>Cookies & Tracking Data:</strong> We use cookies and similar
                    tracking technologies to track the activity on our Service and hold
                    certain information.
                </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
                Veridian Devs uses the collected data for various purposes:
            </p>
            <ul>
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>
                    To provide customer support (e.g., fulfilling your "Request a
                    Callback")
                </li>
                <li>
                    To gather analysis or valuable information so that we can improve
                    our Service
                </li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent, and address technical issues</li>
            </ul>

            <h2>Data Sharing and Disclosure</h2>
            <p>
                We will not sell or rent your personal information to third parties.
                We may disclose your Personal Data in the good faith belief that such
                action is necessary to:
            </p>
            <ul>
                <li>To comply with a legal obligation</li>
                <li>To protect and defend the rights or property of Veridian Devs</li>
                <li>
                    To prevent or investigate possible wrongdoing in connection with the
                    Service
                </li>
                <li>
                    To protect the personal safety of users of the Service or the
                    public
                </li>
            </ul>

            <h2>Security of Data</h2>
            <p>
                The security of your data is important to us, but remember that no
                method of transmission over the Internet or method of electronic
                storage is 100% secure. While we strive to use commercially
                acceptable means to protect your Personal Data, we cannot guarantee
                its absolute security.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify
                you of any changes by posting the new Privacy Policy on this page.
                You are advised to review this Privacy Policy periodically for any
                changes.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact
                us:
            </p>
            <ul>
                <li>By email: <a href='mailto:veridiandevs@gmail.com'>veridiandevs@gmail.com</a></li>
                <li>By visiting this page on our website: [Link to Contact Page]</li>
            </ul>
        </div>
    );
};

export default PrivacyPolicy;