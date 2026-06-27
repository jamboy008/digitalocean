import styles from './Footer.module.css'

const footerColumns = [
	{
		title: 'Resources',
		links: [
			'Start Business',
			'Digital Marketing',
			'Course Creation',
			'Business Accelerator',
		],
	},
	{
		title: 'Mission',
		links: [
			'About Digital Analyst',
			'Team',
			'Become a Partner',
			'Privacy Policy',
		],
	},
]

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.footerGrid}`}>
				<div className={styles.brandColumn}>
					<div className={styles.logo}>
						<img
							src='/images/logo.svg'
							alt='DigitalOcean logo'
							className={styles.logoIcon}
						/>
						<span className={styles.logoText}>DigitalOcean</span>
					</div>
					<p className={styles.brandLine}>Smart business</p>
					<p className={styles.brandLine}>Community</p>
				</div>

				{footerColumns.map(column => (
					<div key={column.title} className={styles.column}>
						<h3 className={styles.columnTitle}>{column.title}</h3>
						<ul className={styles.linkList}>
							{column.links.map(link => (
								<li key={link}>
									<a href='#' className={styles.link}>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}

				<div className={styles.column}>
					<h3 className={styles.columnTitle}>Contact</h3>
					<ul className={styles.linkList}>
						<li className={styles.link}>041-774073</li>
						<li>
							<a href='mailto:hello@digitalanalyst.org' className={styles.link}>
								hello@digitalanalyst.org
							</a>
						</li>
						<li>
							<a href='#' className={styles.link}>
								Contact Form
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className={styles.bottomBar}>
				<div className={`container ${styles.bottomBarInner}`}>
					<p className={styles.copyright}>
						&copy; 2021 Digitalanalyst.org. A 5O-non profit organization.
						EIN-:0410655
					</p>

					<div className={styles.socials}>
						<a href='#' aria-label='Facebook' className={styles.socialIcon}>
							<img src="./public/images/facebook" alt="" />
						</a>
						<a href='#' aria-label='Twitter' className={styles.socialIcon}>
							<img src="./public/images/Twitter" alt="" />
						</a>
						<a href='#' aria-label='YouTube' className={styles.socialIcon}>
							<img src="./public/images/youtube" alt="" />
						</a>
						<a href='#' aria-label='Instagram' className={styles.socialIcon}>
							<img src="./public/images/Instagram" alt="" />
						</a>
					</div>

					<button type='button' className={styles.signUpBtn}>
						Sign Up
					</button>
				</div>
			</div>
		</footer>
	)
}

export default Footer
