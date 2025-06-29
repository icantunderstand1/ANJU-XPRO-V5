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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZHdFNKK1RiWlRteHNPU3hIWmZxb1BsdWcvV1ExZ1pvSHdWS3JRdUVuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JFT2lMMEthRzRWYURWWFZNMWtmOUVpdTZ5TDhwTXlhRGVrY2cvTzBCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTVNPdGhBMHM1bk40N3dTTjlnbTI0bG1tZGNOMWZTcmZhUVc3U2JmaUZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUzF2ZEJjUTg5R0t3ZlltU21BUjdIdDBSakhZeG9ER0RXQ2tDWUt0ckFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllPUVRRR3RSdXJ0Y3ZhbWo1SWREU2RVTjRlMC95WE9GenhXeCtWU2Q5bWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQySjlab0ZKRXprZ3ZMd0lERGkrTFRDOHZMZVN5QXQvQ3RzU01EajlxU3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05sT01oNnJJak9tWVM0bm1oWXdra3c1cnM2WjlBMjhMMEY1Um9kL0lYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3dJRHdvN2hyWXpJaDE3WTVMVzRoRkpDclp3bmRHRFRvUU1KSmQ2a3ZoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQVmZQRXBIQTFoT09LRE95WmtneitZZCs2Y2FkdEwxZis4dGZXTkF3NWtHcnQ2K2FCNnJkSEQzckdKUEdHcHQ4aDE4RVNDeHdkMnJSTkpsbm51Zml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6Ilg4YmpWMEdoSWJreGFzT0NoaFBRTXh0Y1lkOVNaT2UwaG40OHBIWXVmNEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im4yci02ZzRaUUZ1OFhEX0F6OXNLU3ciLCJwaG9uZUlkIjoiODhlMTNkMDgtMTc3ZS00ZDI4LThiNTEtMjVkMWYwNjk4Njg3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRLOHhOelF6VEFWVXJ6b2Z2UGRqUjBsbE1EZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySURnSmlTcTc0NFU5UUxJYjVxS2F1NTN0Z3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlRNNjhBSk4iLCJtZSI6eyJpZCI6Ijk0Nzg4MzY0MzA4OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XlPCdl57wnZec8J2Xn/Cdl5Qg8J2Xo/Cdl5TwnZen8J2Xm/Cdl6jwnZegIiwibGlkIjoiMjIxNTI2MjI1ODkxNDEzOjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLMlk1T2tIRVArcGdzTUdHQk1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJVDRkWks2V2hwT01razRJUGhmNzJndXpvTDMyZWc0b25FRjBJNTNEM1JNPSIsImFjY291bnRTaWduYXR1cmUiOiJ3cERybkVUdHQwUkhpWGh3N0d2WTF4QnBMbDZCdFJEWVFudk9kMVhFYVU2ZTlwQkJhaVB2Mzd6cmQ0eFc0cko3S2dxRnFPQWRJWjhPOVZUeUhTTk9DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWHo2OEVOejV0Y1djNG5tbzJRcHBZb2hkTGt0TVZ0UGNyWVU4QVlYNHpsQ25ZOW8vV0ZxMWswZU9Mb1hEakJUSE5VRU84SitZbkdVUGNlVm94Q3QralE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4ODM2NDMwODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNFK0hXU3Vsb2FUakpKT0NENFgrOW9MczZDOTlub09LSnhCZENPZHc5MFQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTE2MDA3NiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZmUCJ9",
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
