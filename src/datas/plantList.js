import nepeta from '../assets/Nepeta.jpg'
import herbe from '../assets/herbe.jpg'
import callisia from '../assets/callisia.jpg'
import Saintpaulia from '../assets/Saintpaulia.jpg'
import beaucarnea from '../assets/beaucarnea.jpg'
import papyrus from '../assets/papyrus.jpg'
import mint from '../assets/mint.jpg'
import Chlorophytum from '../assets/Chlorophytum.jpg'
import carex from '../assets/carex.jpg'

export const plantList = [
	{
		name: 'Nepeta cataria',
		category: 'Chat',
		id: '1ed',
		bestSale: true,
		light: 3,
		water: 3,
		cover: nepeta,
		alias: 'Menthe des chats',
		price: 15
	},
	{
		name: 'Cyperus zumula',
		category: 'Chat',
		id: '2ab',
		light: 1,
		water: 3,
		cover: herbe,
		alias:'Herbe a chats',
		price: 2
	},

	{
		name: 'Callisia turtle',
		category: 'Lapin',
		id: '3sd',
		light: 3,
		water: 2,
		cover: callisia,
		alias:'Liane tortue',
		price: 9
	},
	{
		name: 'Chlorophytum ',
		category: 'Chat',
		id: '4kk',
		light: 2,
		water: 2,
		cover: Chlorophytum,
		alias:'plante araignée',
		price: 20
	},
	{
		name: 'Beaucarnea recurvata',
		category: 'Chat',
		id: '5pl',
		light: 3,
		water: 1,
		cover: beaucarnea,
		alias:"pied-d'éléphant",
		price: 25
	},

	{
		name: 'Carex oshimensis',
		category: 'Chat',
		id: '8fp',
		light: 1,
		water: 1,
		cover: carex,
		alias: 'La laîche du Japon',
		price: 6
	},
	{
		name: 'Cyperus alternifolius',
		category: 'Chat',
		id: '7ie',
		bestSale: true,
		light: 2,
		water: 3,
		cover: papyrus,
		alias: 'Papyrus',
		price: 15
	},
	{
		name: 'Saintpaulia',
		category: 'Chien',
		id: '9vn',
		light: 1,
		water: 1,
		cover: Saintpaulia,
		alias: 'violette africaine',
		price: 8
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4
	}
]