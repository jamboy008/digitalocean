import { useState } from 'react'
import styles from './Testimonials.module.css'

const reviews = [
	{
		id: 'leo-aminoff',
		avatar: '/images/avatar-leo.svg',
		quote:
			'I recently concluded a complete messaging revamp for an exciting com',
		name: 'Leo Aminoff',
		role: 'Product Designer',
	},
	{
		id: 'carla-dias',
		avatar: '/images/avatar-carla.svg',
		quote:
			'I recently concluded a complete messaging revamp for an excitin company',
		name: 'Carla Dias',
		role: 'Product Designer',
	},
]

function Testimonials() {
	const [startIndex, setStartIndex] = useState(0)

	const handlePrev = () => {
		setStartIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setStartIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1))
	}

	return (
		<section id='reviews' className={styles.testimonials}>
			<div className='container'>
				<div className={styles.header}>
					<h2 className={styles.title}>What Our Customers are Saying.</h2>

					<div className={styles.arrows}>
						<button
							type='button'
							className={styles.arrowBtn}
							aria-label='Previous review'
							onClick={handlePrev}
						>
							&#8592;
						</button>
						<button
							type='button'
							className={styles.arrowBtn}
							aria-label='Next review'
							onClick={handleNext}
						>
							&#8594;
						</button>
					</div>
				</div>

				<div className={styles.grid}>
					{reviews.map(review => (
						<div key={review.id} className={styles.card}>
							<div className={styles.accentBar} />
							<img
								src={review.avatar}
								alt={review.name}
								className={styles.avatar}
							/>
							<div className={styles.cardBody}>
								<p className={styles.quote}>{review.quote}</p>
								<p className={styles.name}>&mdash; {review.name}</p>
								<p className={styles.role}>{review.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
