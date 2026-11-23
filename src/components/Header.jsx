
import { useEffect, useState } from 'react'

function Header(){
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const updateScrollState = () => setIsScrolled(window.scrollY > 12)

        updateScrollState()
        window.addEventListener('scroll', updateScrollState, { passive: true })
        return () => window.removeEventListener('scroll', updateScrollState)
    }, [])

    return(
        <header className={`site-header${isScrolled ? ' site-header-scrolled' : ''}`}>
            <div className="site-header-inner">
                <a className="site-brand" href="#Home" aria-label="iamrhoanne home">
                    <span className="site-brand-mark" aria-hidden="true">r</span>
                    <span>iamrhoanne</span>
                </a>
                <button
                    className={`site-menu-toggle${menuOpen ? ' menu-open' : ''}`}
                    type="button"
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                    onClick={() => setMenuOpen(open => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <nav id="main-navigation" className={`site-nav-wrap${menuOpen ? ' site-nav-open' : ''}`} aria-label="Main navigation">
                    <ul className="site-nav list-none">
                        <li><a href="#Home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#Skills" onClick={() => setMenuOpen(false)}>Tech Stack</a></li>
                        <li><a href="#Experience" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#Credentials" onClick={() => setMenuOpen(false)}>Credentials</a></li>
                        <li><a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
