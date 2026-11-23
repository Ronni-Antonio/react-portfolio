import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faPhone, faEnvelope, faMapLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Footer(){
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const updateVisibility = () => setShowBackToTop(window.scrollY > 400)

        updateVisibility()
        window.addEventListener('scroll', updateVisibility, { passive: true })
        return () => window.removeEventListener('scroll', updateVisibility)
    }, [])

    const scrollToTop = () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }

    return(
        <footer className="site-footer">
            <div className="site-footer-inner">
                <div className="footer-intro">
                    <a className="footer-brand" href="#Home">iamrhoanne<span>.</span></a>
                    <p>Thanks for stopping by. I enjoy turning thoughtful ideas into useful digital experiences.</p>
                    <p className="footer-note">Let’s build something together.</p>
                </div>
                <div className="footer-column">
                    <h2>Explore</h2>
                    <ul className="footer-links">
                        <li><a href="#Home"><FontAwesomeIcon icon={faArrowRight} /> Home</a></li>
                        <li><a href="#Skills"><FontAwesomeIcon icon={faArrowRight} /> Tech Stack</a></li>
                        <li><a href="#Experience"><FontAwesomeIcon icon={faArrowRight} /> Projects</a></li>
                        <li><a href="#Credentials"><FontAwesomeIcon icon={faArrowRight} /> Credentials</a></li>
                        <li><a href="#Contact"><FontAwesomeIcon icon={faArrowRight} /> Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Get in touch</h2>
                    <ul className="footer-contact">
                        <li><FontAwesomeIcon icon={faPhone} /><a href="tel:09126872700">0912-687-2700</a></li>
                        <li><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:rhoanneantonio1@gmail.com">rhoanneantonio1@gmail.com</a></li>
                        <li><FontAwesomeIcon icon={faMapLocationDot} /><span>Pasig, Philippines</span></li>
                    </ul>
                    <ul className="footer-socials" aria-label="Social links">
                        <li>
                            <a href="https://www.linkedin.com/in/rhoanne-antonio-3a6767364/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="home-social">          <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/rhoanneantonio" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="home-social">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/rhoannenicole.antonio.9" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="home-social">
                            <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Rhoanne Antonio</span>
                <a href="#Home">Back to top <span aria-hidden="true">↑</span></a>
            </div>
            {showBackToTop && (
                <button className="back-to-top" type="button" onClick={scrollToTop} aria-label="Scroll to the top of the page" title="Back to top">
                    <ArrowUp size={21} aria-hidden="true" />
                </button>
            )}
        </footer>
    )
}

export default Footer
