let { WA_MESSAGE_STUB_TYPES, URL_REGEX } = require('@adiwajshing/baileys')
let chalk = require('chalk')

module.exports = function (m, conn = {user: {}}) {
  let sender = typeof m.text == 'string' || m.mtype ? [m.sender] : m.messageStubParameters
  sender = sender.map(v => v.split`@`[0] + (conn.getName(v) ? ' ~' + conn.getName(v) : '')).join` & `
  let chat = conn.getName(m.chat)
  let ansi = '\x1b['
  
  console.log(
    `\n\n--------------------------------------------------------------------------------------------------------------------
    ${chalk.bgGreen(chalk.black('%s'))}\n${chalk.green('%s')} ${chalk.yellow('%s')} ${chalk.blue('to')} ${chalk.green('%s')}
    ${m.text}`,
    (conn.user.jid + ' ~' + conn.user.name).replace('@s.whatsapp.net', ''),
    sender,
    (m ? m.exp : '?') + (global.DATABASE.data.users[m.sender] ? '|' + global.DATABASE.data.users[m.sender].exp : ''),
    m.chat + (chat ? ' ~' + chat : ''),
  )
}

delete require.cache[require.resolve(__filename)]
