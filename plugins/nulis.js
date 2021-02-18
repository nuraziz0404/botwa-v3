let handler  = async (m, { conn, args }) => {
  let teks = args.join` `
  conn.sendFile(m.chat, `http://lolhuman.herokuapp.com/api/nulis?apikey=0ebc7844cb4b0ae7b4f85f25&text=${teks}`, 'nulis.jpg', 'Nih a tulisannya')
  }
handler.command = /^nulis$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

