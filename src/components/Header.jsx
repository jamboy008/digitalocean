import { useState } from 'react'
import styles from './Header.module.css'

const navLinks = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Reviews', href: '#reviews' },
]

function Header() {
	const [activeLink, setActiveLink] = useState('Home')
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className={styles.header}>
			<div className={`container ${styles.headerInner}`}>
				<a href='#home' className={styles.logo}>
					<img
						src='/images/logo.svg'
						alt='DigitalOcean logo'
						className={styles.logoIcon}
					/>
					
				</a>

				<nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
					<ul className={styles.navList}>
						{navLinks.map(link => (
							<li key={link.label}>
								<a
									href={link.href}
									className={`${styles.navLink} ${
										activeLink === link.label ? styles.navLinkActive : ''
									}`}
									onClick={() => {
										setActiveLink(link.label)
										setIsMenuOpen(false)
									}}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<button type='button' className={styles.ctaButton}>
					Get Started
				</button>

				<button
					type='button'
					className={styles.menuToggle}
					aria-label='Toggle menu'
					onClick={() => setIsMenuOpen(prev => !prev)}
				>
					<span />
					<span />
					<span />
				</button>
			</div>
		</header>
	)
}

export default Header
