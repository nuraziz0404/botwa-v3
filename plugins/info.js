let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙

➥ Github: https://github.com/nuraziz0404/botwa-v3
➥ Instagram: https://www.instagram.com/cr.azyz

〘 Thanks To 〙 
➥ Allah SWT

〘 DONASI 〙 
➥ pulsa : 089694553246


〘 CRazyzBOT 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

