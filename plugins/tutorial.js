let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial memakai Bot WA:


Ketik di *[Terminal]*
1) $apt install git
2) $apt install ffmpeg
3) $apt install imagemagick
4) $apt install nodejs
5) $git clone https://github.com/nuraziz0404/botwa-v3
6) $cd botwa-v3
7) npm i
8) node index.js


`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

