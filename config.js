import {
	watchFile,
	unwatchFile
} from 'fs'
import chalk from 'chalk'
import {
	fileURLToPath
} from 'url'

global.owner = [
	//  ['6281234288573'],
	//['12546153210'],
	//['62895368900456'],
	['6282331033919', 'need me?', true]
	// [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
	// name: 'https://website'
	nrtm: 'https://nurutomo.herokuapp.com',
	ghst: 'https://ghostui-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
	// 'https://website': 'apikey'
	'https://ghostui-api.herokuapp.com': 'apikey mu'
}

// Sticker WM
global.packname = 'I hope You\'re fine'
global.author = 'Β©wuis'
global.nomorown = '6282331033919'
global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
	emoticon(string) {
		string = string.toLowerCase()
		let emot = {
			level: 'π§¬',
			limit: 'π',
			health: 'β€οΈ',
			exp: 'βοΈ',
			money: 'π΅',
			potion: 'π₯€',
			diamond: 'π',
			common: 'π¦',
			uncommon: 'π',
			mythic: 'π³οΈ',
			legendary: 'ποΈ',
			pet: 'π',
			trash: 'π',
			armor: 'π₯Ό',
			sword: 'βοΈ',
			wood: 'πͺ΅',
			rock: 'πͺ¨',
			string: 'πΈοΈ',
			horse: 'π',
			cat: 'π',
			dog: 'π',
			fox: 'π¦',
			petFood: 'π',
			iron: 'βοΈ',
			gold: 'π',
			emerald: 'π'
		}
		let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
		if (!results.length) return ''
		else return emot[results[0][0]]
	}
}


let file = fileURLToPath(
	import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})
