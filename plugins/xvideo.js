// XVIDEO DOWNLOAD COMMAND

const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://www.dark-yasiya-api.site/' // API LINK ( DO NOT CHANGE THIS!! )



cmd({
    pattern: "xvideo",
    alias: ["xvdl","xvdown"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    use: '.xvideo < text >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝗆𝖾 𝖥𝖾𝗐 𝖶𝗈𝗋𝖽 !")
    
const xv_list = await fetchJson(`${apilink}/search/xvideo?text=${q}`)
if(xv_list.result.length < 0) return await reply("Not results found !")

const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${xv_list.result[0].url}`)
    
  // FIRST VIDEO
  
const msg = `
        🔞 *𝐒𝐄𝐍𝐔-𝐌𝐃 𝐗𝐕𝐈𝐃𝐄𝐎 𝐃𝐋* 🔞
    
🥵 *ᴛɪᴛʟᴇ* - ${xv_info.result.title}
🥵 *ᴠɪᴇᴡꜱ* - ${xv_info.result.views}
🥵 *ʟɪᴋᴇ* - ${xv_info.result.like}

> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐒𝐄𝐍𝐔-𝐌𝐃 💛`

// Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: msg,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '𝐒𝐄𝐍𝐔-𝐌𝐃',
          newsletterJid: "120363388320701164@newsletter,
          },
          externalAdReply: {
              title: `𝐒𝐄𝐍𝐔-𝐌𝐃 Xvideo Downloader`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: xv_info.result.image,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

// SEND VIDEO
await conn.sendMessage(from, { document: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });


} catch (error) {
console.log(error)
reply(error)
}
})

