/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/


const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴛᴀᴋᴀ-ʟɪᴛᴇ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟣 •༆$ℭ𝔥𝔯𝔦𝔰_𝔇𝔦𝔬𝔯🚹࿇*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟤 ᛕ꠸ꪀᧁꪻꪖᛕꪖ*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ Bᴜᴛ Chris_Dior.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᛕ꠸ꪀᧁꪻꪖᛕꪖ*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ Dᴏᴜᴀʟᴀ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • TAKA-LITE - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠Lᴏʀᴅ ᛕ꠸ꪀᧁꪻꪖᛕꪖ*
*│  ◦* *▢➠Tʜᴇ Mr Dior²³⁷*
*│  ◦* *▢➠Kerm*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᛕ꠸ꪀᧁꪻꪖᛕꪖ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
