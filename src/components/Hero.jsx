import styles from './Hero.module.css'

function Hero() {
	return (
		<section id='home' className={styles.hero}>
			<div className={`container ${styles.heroInner}`}>
				<div className={styles.content}>
					<span className={styles.eyebrow}>Smart Business</span>
					<h1 className={styles.title}>
						Connecting people <br />
						is our <span className={styles.highlight}>business</span>
					</h1>
					<p className={styles.description}>
						As a rule the organization settles on the invention and create
						visions. Regularly it supplies supporting statistical.
					</p>

					<div className={styles.actions}>
						<button type='button' className={styles.primaryBtn}>
							Get Started
						</button>
						<button type='button' className={styles.playBtn}>
							<span className={styles.playIcon}>&#9658;</span>
							Play Video
						</button>
					</div>
				</div>

				<div className={styles.media}>
					<img
						src='/images/rasm1.svg'
						alt='Team collaborating around a table'
						className={styles.image}
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
