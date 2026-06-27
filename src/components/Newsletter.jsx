import { useState } from 'react'
import styles from './Newsletter.module.css'

function Newsletter() {
	const [email, setEmail] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
		setEmail('')
	}

	return (
		<section className={styles.newsletter}>
			<div className='container'>
				<h2 className={styles.title}>Sign Up to Our Newsletter</h2>
				<p className={styles.subtitle}>Yours could be one of them.</p>

				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputWrapper}>
						<span className={styles.icon}>&#9993;</span>
						<input
							type='email'
							placeholder='Enter your email'
							className={styles.input}
							value={email}
							onChange={event => setEmail(event.target.value)}
							required
						/>
					</div>
					<button type='submit' className={styles.submitBtn}>
						Send
					</button>
				</form>
			</div>
		</section>
	)
}

export default Newsletter
