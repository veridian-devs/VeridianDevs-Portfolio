import { Element } from 'react-scroll';
import '../styles/work.scss';

export default function Works() {
    const images = [
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753716964/YAATRIKA_b2lzzo.png',
            alt: 'Work 1 - YAATRIKA',
            url: 'https://yaatrika.vercel.app/',
        },
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753791886/PORTFOLIO_si86bg.jpg',
            alt: 'Work 2 - PORTFOLIO_SHIVAM-SAXENA',
            url: 'https://shiv-am-saxena.vercel.app/',
        },
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753716963/UNIONYX_muncwf.png',
            alt: 'Work 3 - UNIONYX',
            url: 'https://unionyx.vercel.app/',
        },
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753792035/music-web_qcxufi.png',
            alt: 'Work 4 - MUSIC-WEB',
            url: 'https://mehrotravinayak6.github.io/music_web/',
        },
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753792027/Musica_fee4bp.png',
            alt: 'Work 5 - MUSICA',
            url: 'https://mehrotravinayak6.github.io/musica/',
        },
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753792021/Serinidad_homes_dz59fx.png',
            alt: 'Work 6 - SERENIDAD_HOMES',
            url: 'https://mehrotravinayak6.github.io/SERENI/',
        },
    ];
    return (
        <Element name='works' className="section-work">
            <div className="work-content">
                <div className="work-heading-top-section">
                    <h3>Our Works</h3>
                </div>
                <div className="work-content-bottom-section">
                    <div className="image-loop">
                        {images.map((image, index) => (
                            <div key={index} className="work-image-container">
                                <img src={image.src} alt={image.alt} />
                                <a href={image.url} target="_blank" rel="noopener noreferrer">
                                    <span>Visit Site</span>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="image-loop">
                        {images.map((image, index) => (
                            <div key={index} className="work-image-container">
                                <img src={image.src} alt={image.alt} />
                                <a href={image.url} target="_blank" rel="noopener noreferrer">
                                    <span>Visit Site</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    )
}
