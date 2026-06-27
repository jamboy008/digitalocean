import styles from './HowWeWork.module.css'

const steps = [
	{
		id: 'start-design',
		icon: '/images/icon-rocket.svg',
		title: 'Start Design',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.',
		highlighted: true,
	},
	{
		id: 'go-to-code',
		icon: '/images/icon-gear.svg',
		title: 'Go to Code',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.',
		highlighted: false,
	},
	{
		id: 'final-delivered',
		icon: '/images/icon-check.svg',
		title: 'Final Deliverd',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.',
		highlighted: false,
	},
]

function HowWeWork() {
	return (
		<section id='services' className={styles.howWeWork}>
			<div className='container'>
				<h2 className={styles.title}>How We Work</h2>

				<div className={styles.grid}>
					{steps.map(step => (
						<div
							key={step.id}
							className={`${styles.card} ${
								step.highlighted ? styles.cardHighlighted : ''
							}`}
						>
							<div className={styles.iconWrapper}>
								<img src={step.icon} alt='' className={styles.icon} />
							</div>
							<h3 className={styles.cardTitle}>{step.title}</h3>
							<p className={styles.cardDescription}>{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default HowWeWork
