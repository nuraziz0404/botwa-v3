const { MessageType } = require("@adiwajshing/baileys");
const {execFile} = require('child_process');
const dwebp = require('dwebp-bin');


const handler  = async (m, { conn }) => {
  let d = new Date
  let locale = 'id'
  let time = d.toLocaleTimeString(locale, {
    second: 'numeric'
  })
  var out = `tmp/${time}.png`
  if (!m.quoted) return conn.reply(m.chat, 'Tag stikernya dengan Benarr!', m)
  var q = { message: { [m.quoted.mtype]: m.quoted }}
  if (/sticker/.test(m.quoted.mtype)) {
    const savedFilename = await conn.downloadAndSaveMediaMessage (q, 'tmp/toimg')
    await execFile(dwebp, [savedFilename, '-o', out], error => {
      if (error) {
        throw error;
      }
      console.log('Image is converted!');
      conn.sendFile(m.chat, out, 'sticker.png', 'Berhasil')
    })
  }
}
handler.command = /^toimg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

