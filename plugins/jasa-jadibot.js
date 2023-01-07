import db from '../lib/database.js'
//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

let handler = async (m, { conn, command }) => {
	let ini_txt = db.data.datas.teksjadibot || `❤‍🩹 *[ Chat Dengan owner ]*
wa.me/6281216328228



- Request Fitur? *Chat Link Creator di atas.*`
	//m.reply(ini_txt)
	command = command.toLowerCase()
	conn.relayMessage(m.chat,  {
		requestPaymentMessage: {
			currencyCodeIso4217: 'USD',
			amount1000: command.includes('prem') ? '0670' : command.includes('sewa') ? 1010 : 1680,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: ini_txt,
					contextInfo: {
						mentionedJid: [m.sender],
						externalAdReply: {
							showAdAttribution: true
						}
					}
				}
			}
		}
	}, {})
	
	/*const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = require("@adiwajshing/baileys")
	let fs = require('fs')
	var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/anime.jpg') }, { upload: conn.waUploadToServer })
	var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
			"product": {
				"productImage": messa.imageMessage,
				"productId": "5838766206142201",
				"title": `Sewa Bot`,
				"description": `gaktau`,
				"currencyCode": "IDR",
				"bodyText": `gaktaukalo`,
				"footerText": `koncol`,
				"priceAmount1000": "15000000",
				"productImageCount": 100,
				"firstImageId": 1,
				"salePriceAmount1000": "15000000",
				"retailerId": `ꪶ𝐖𝐫𝐚𝐧𝐳𝐓𝐚𝐦𝐩𝐚𝐧𝐳⿻ꫂ`,
				"url": "wa.me/6282337245566"
			},
			"businessOwnerJid": "6282337245566@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: m })
	conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })*/
}

handler.menugroup = ['jadibot']
handler.tagsgroup = ['group']
handler.command = /^(jadibot)$/i

export default handler
