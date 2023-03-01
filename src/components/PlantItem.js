import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price, alias }) {
	return (
		<li className='lmr-plant-item' onClick={() => handleClick}>
			<span className='lmr-plant-item-price'>{price}€</span>
			<img className='lmr-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<p className='lmr-plant-item-alias'>surnom: {alias}</p>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
				
			</div>
		</li>
	)
}

export default PlantItem