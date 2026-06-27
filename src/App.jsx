import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './index.css'

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Hero />
				<About />
				<HowWeWork />
				<Testimonials />
			</main>
			<Newsletter />
			<Footer />
		</div>
	)
}

export default App
