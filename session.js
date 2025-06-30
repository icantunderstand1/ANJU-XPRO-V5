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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JJZ2NrdTNFOHc1WlVqSVFDcFNtNG9rejNyUlowekdhWmZSY01wUTdsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSC95d1EzNGFqWDFQUUNwQS9Gc1k2Y3FLOUZzbzFNTW5pSE9BRUJBS1ZpYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSXRKdmlscjdnOG5FUWVoSjJtOU1QUjd4MGhSR2cwZlgzNE4zZFNNeW13PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJR1poSlh1L1dxUkZOM3IzNHZ0WFBPNjkzZWQ4dXB4ZUNPOW1KLzBOT0dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLQjZ1S0EzQnlpckVhYXJMQVNSaEpmWCtUZlFyY2tqMUYxYVZvcTRSV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo2d0VmUjhJZ2RJSUkwV2pEbGd0enZRVTkxVEN4cjhwQ0lTZ2RNS3ljRE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid042ODc5OU16T3JzaDc4ZVQ5Q3JPS0dUTDdnRmVHdTN3SDdBa1hoTnVYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVFlMXNadFFtT0d0SXluTGp0UWhza0ltSUZRY3hIck1ZblY3OUlIM29Ydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxnVU5LUlMyWU9PRU5aUmFkY1JKWklUR0J0enFwSGVidnZIUjR1ajhoaThuaFU0TC8rdHNMUGRjWU1TUVVoN2VjcSsxSlhOcFBUeWE2eTcrdmMwTWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJGY3NNc1pzcEFmK0pRb1VaY3g3aU5tdWdldXlIUGlocnRtU0I2ajlxTkhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQxMDkxMjQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVEQkJBMjA0MUQxNTY5QTA3N0Y1QTgyRkIxNkQxRUVCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTEyNzY3Njl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQxMDkxMjQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBBMDhFNTVEODc3MTgwOEQ1Mzk4MjhGNTc1REU1MzI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTEyNzY3Njl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBwZVpwcFJXVDZhYzNsX0tqTVlGZWciLCJwaG9uZUlkIjoiMTUzMWMxYzAtNzAxOS00NDJjLWJhYTItMTEyNDk0MGMzNDQyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpkVkRWZkRqbUowVVYxcmlVVHVoT1RHeHNDND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSb29HUHZ1SStvQ3hTWjRHVjFjUkI4RjBYdHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRURBQ0JaN1giLCJtZSI6eyJpZCI6Ijk0NzQxMDkxMjQ5OjhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1MDk4OTg4NTMyOTUyMjo4QGxpZCIsIm5hbWUiOiJXLkQuUy5EIERpc2FuYXlha2EifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uaXllVUZFTkc1aWNNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRhM3JZcXF4dFhhNk9EWVlxdFZhLzZJOVh2Zkw1SGphMGx5dWFyYkFiVk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdvQndBczNCdlQxcU9uOXFnbHNSMnh6czUxdVlvVElueWFTYW56cmZ4QlBEeVViK0lDY05LNHd2bE5nMm5adTU1eFZjblliOVFUOTAwMXluc0NZU0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUNjlkQ0VJYlBuQVl6c2lrOVhFSDBOM3lyRENkbXFPK3Z6Q1Babi9Qa3EvekYvSVJBU1pSZVZkR2pBVzJ0QTZHSzE4RkhXaWx5ckl5NEs4Z09rRXVndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQxMDkxMjQ5OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTJ0NjJLcXNiVjJ1amcyR0tyVld2K2lQVjczeStSNDJ0SmNybXEyd0cxVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMjc2NzY3LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU03QSJ9",
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
