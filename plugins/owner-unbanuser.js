import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : ''
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    try {
        let user = db.data.users[who]
        user.banned = false
        user.permaban = false
        user.lastbanned = 0
        conn.reply(m.chat, `berhasil unbanned`, m)
    } catch (e) {
        console.log(e)
        m.reply(`User tidak ada dalam database.`)
    }
}

handler.menuowner = ['ban @tag']
handler.tagsowner = ['owner']
handler.command = /^(unban)$/i

handler.owner = true

export default handler