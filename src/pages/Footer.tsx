import { Link } from 'react-router';
import '../styles/footer.scss'


const Logo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100"
            zoomAndPan="magnify"
            viewBox="0 0 350 350"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            version="1.2"
        >
            <defs>
            <clipPath id="03b3bdc84e">
                <path d="M 112.5 117.855469 L 262.5 117.855469 L 262.5 234.105469 L 112.5 234.105469 Z M 112.5 117.855469 " />
            </clipPath>
            </defs>
            <g id="5bc1b15809">
            <g clipRule="nonzero" clipPath="url(#03b3bdc84e)">
                <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 205.777344 117.867188 L 133.964844 117.867188 L 145.195312 140.894531 L 112.5 140.820312 L 158.03125 234.082031 L 204.269531 140.832031 L 233.804688 140.699219 L 189.460938 231.183594 L 205.773438 231.183594 C 237.078125 231.183594 262.503906 205.914062 262.503906 174.613281 C 262.507812 143.3125 237.078125 117.867188 205.777344 117.867188 Z M 158.054688 223.460938 L 120.042969 145.558594 L 144.347656 145.625 L 170.445312 198.480469 Z M 158.054688 223.460938 "
                />
            </g>
            </g>
        </svg>
    );
};
export default function Footer() {
    return (
        <footer>
            <div className="logo-copyright-section">
                <div>
                    <Logo />
                    <h6>Veridian Devs</h6>
                </div>
                <p>© {new Date().getFullYear()} Veridian Devs. All rights reserved.</p>
            </div>
            <div className="legal-section">
                <p className='footer-heading'>Legal</p>
                <Link to='/privacy-policy'>Privacy Policy</Link>
                <Link to='/terms-and-conditions'>Terms of Service</Link>
            </div>
            <div className="socialmedia-handles">
                <p className='footer-heading'>Social Media</p>
                <a href="https://twitter.com/VeridianDevs">Twitter</a>
                <a href="https://github.com/veridian-devs">Github</a>
                <a href="https://linkedin.com/company/veridian-devs">LinkedIn</a>
                <a href="https://instagram.com/veridiandevs">Instagram</a>
            </div>
            <div className="faded-logo-text">
                <p>Veridian Devs.</p>
            </div>
        </footer>
    )
}
