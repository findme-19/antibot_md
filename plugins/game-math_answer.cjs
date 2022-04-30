global.math = global.math ? global.math : {}
let handler = async (m, {
	conn
}) => {
	if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
	let id = m.chat
	if (!m.quoted || m.quoted.sender != conn.user.jid || !/^Berapa hasil dari/i.test(m.quoted.text)) return !0
	global.math = global.math ? global.math : {}
	if (!(id in global.math)) return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, [
		['math', '/math']
	], m)
	if (m.quoted.id == global.math[id][0].id) {
		let math = JSON.parse(JSON.stringify(global.math[id][1]))
		if (m.text == math.result) {
			global.db.data.users[m.sender].exp += math.bonus
			clearTimeout(global.math[id][3])
			delete global.math[id]
			conn.sendButton(m.chat, `*Jawaban Benar!*\n+${math.bonus} XP`, author, null, [
				['again', `/math ${math.mode}`]
			], m)
		} else {
			if (--global.math[id][2] == 0) {
				clearTimeout(global.math[id][3])
				delete global.math[id]
				conn.sendButton(m.chat, `*Kesempatan habis!*\nJawaban: *${math.result}*`, author, null, [
					['again', `/math ${math.mode}`]
				], m)
			} else m.reply(`*Jawaban Salah!*\nMasih ada ${global.math[id][2]} kesempatan`)
		}
	}
	return !0
}

module.exports = handler