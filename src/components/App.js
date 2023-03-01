import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.jpg'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-de rosie' className='lmr-logo' />
				<h1 className='lmr-title'>La maison de Rosie </h1>
			</Banner>
			<p className='lmr-descript'> Bienvenue sur le site des plantes amies des animaux 🐱🐰</p>
			<div className='lmr-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
				
			</div>
			<Footer />
		</div>
	)
}

export default App