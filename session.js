//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0x4dnluUEdFTng2d1dYZkUyV2hhWnRSL0FQVE44NFJaL0FJNmtEVnlVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXA1N2xMZjc2WDRvUFB3SE5OYUxBM2JBN3pzdUxFczFodXFESW5GdEVRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQUZFeDNrY3B6Z3pJcEZGWFpDSlJKaHpiMHVKUHRyNXVvMjJ1NEo2c2tNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZHVlbXJYSEQybmYxRGptaUVBSXNZSFczTDUreXBHTkR5MG1uR2g0V1FJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDUHJ5aFYxdlU3NDJ5djVoRWs5bWRlUmRWNWxCeTZoWFVGRjVDTm9GMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVOUzJ1VlUvRHd4b1lLbEVUdXRSVjJQL1NPdWpWUWlEQVlwdTJsVkUxbmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pvaWxyMDAyM3l5VTg3S1lVa29sdEhvQ25ZWjhRbFU1OXpmZEtSNWdtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEJvMlRhamlYM2xvb0UxU2t4T3JtRTloRUVOR3ZpQ1VOcGZrRnFOMyswOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNUzBRR1l6SkhtRGpzZERYdmhIS2RYWFg0eXZrb3g0NVEyWFJxK2ZmN25VeHpHZ2VIRUZKOTZSNkxOaEpVd3pCMmVLc3lsTFp4bzJ4SmpnS3laV2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6ImRQVER5QjVESnNFMGc4bEhMNmVMVzBvYW5VSmhpWlliKzdwRGtFWVFkWTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im54OFc1dVRNUUtXLXVzWHB2Sk44Y3ciLCJwaG9uZUlkIjoiMTE3MjMwNzQtYzUwYy00NWJlLWIyYmYtMmY0MDJiZGNjMGI0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhQNUcrbnJRVCtyN3lRRUVaOXpGdzBKTnJmbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZ3o3UVlCYzh6dHU2NkFWR1NoejBUeDIzbTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkI0QTZGMkQiLCJtZSI6eyJpZCI6Ijk0Nzg4MzY0MzA4OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XlPCdl57wnZec8J2Xn/Cdl5Qg8J2Xo/Cdl5TwnZen8J2Xm/Cdl6jwnZegIiwibGlkIjoiMjIxNTI2MjI1ODkxNDEzOjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLMlk1T2tIRVBMOGlzTUdHQlVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJVDRkWks2V2hwT01razRJUGhmNzJndXpvTDMyZWc0b25FRjBJNTNEM1JNPSIsImFjY291bnRTaWduYXR1cmUiOiJqbDdxYU4wZXpjZExPRW5FUGp1L0RFbEdHd3JuQVh1Rko3Mm5QS1QwL1M3RHFYUDUrQmNCQkp4bklvS1dnNXVCbXRqS1p2bStnME9GZkJjYkVRSGpEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibUExNzhMQ3k2bGJJSUpzTGpiL09HL0FyRzJPQkJ6cDFsNDNLQkMxbVBFeEFGeWIrY0hEaDg0enUvbVM3eFl2bHJSekI4Z05VMnNhUVhEemNUNFFEanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4ODM2NDMwODo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNFK0hXU3Vsb2FUakpKT0NENFgrOW9MczZDOTlub09LSnhCZENPZHc5MFQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTMwMTc2MSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZmUCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94788364308",
  PASSWORD: 
    process.env.PASSWORD || "akila@1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
