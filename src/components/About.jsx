import styles from './About.module.css'

function About() {
	return (
		<section id='about' className={styles.about}>
			<div className={`container ${styles.aboutInner}`}>
				<div className={styles.media}>
					<img
						src='/images/about-network.svg'
						alt='Hand interacting with a digital network interface'
						className={styles.image}
					/>
				</div>

				<div className={styles.content}>
					<span className={styles.eyebrow}>About Us</span>
					<h2 className={styles.title}>Platform Dedicated To Promoting</h2>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
						vestibulum sagittis ultrices consectetur adipiscing elit, fringilla
						quisque pulvinar.
					</p>
					<button type='button' className={styles.ctaButton}>
						What we do?
					</button>
				</div>
			</div>
		</section>
	)
}

export default About