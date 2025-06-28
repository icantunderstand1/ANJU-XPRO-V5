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
    "session id",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94788364308",
  PASSWORD: 
    process.env.PASSWORD || "akila@1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdQMjNETitQSDMvMEJzRHc3NE1tdzdLTndzcGEvTmtibjRwZzNvM1drcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWNoUWNvNFRPbnVpOUwwTm1IQ24wSE53c2lTOUpNRUh5UjBnVFR0WHVsVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQi9ZR2d3MGZzL3FXcG9xaDhhQ0lvMENuWksxS29UOVhjUmxaSUpSRUhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRHZ6Y3AvTjZEbVpHWEFuNEttcGdQdDdDU0xvWVFHcXJaSUh1UmxQeUdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllOV1hYVEhBd3JWNlRnYTJWQ1N6TDI3bW1TM1R4c05OUnV4STZaY1J3MFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVaR0Y0VE9EemtCOXVlYUl2NWx6SzREa01mMGtaR0lxdnlkMjl0TWgvV0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlaRUJDdDVzamVtYUJpNXJjcWNlM1VzVFhXc1ZlMzA0Qmw4eVkrbElGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTdNamhQejdDNjdLaDVqUnROTmFweE1LVlc0U2VEdzFVbWxOcFNBc2hGYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhZOXY2YktkVVNxd1JrU0tXakpadjZabzhCRzhSOFBHTXZQTHFlcm8wYTNBZzFvT2xna0FqaVg4THdndTY3cDhUTkc1ZFd2YmVvaTduWHo3SktJVmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6IkZ4SXVSODZ3Q0U5bVlXUUJOTzlZLzFQdEJYQVNRYm4wbStJWTFTWFdSZms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImIyOFhmVDBTUk5HQ0tTZ0NMVDA3a1EiLCJwaG9uZUlkIjoiZTRmNGQ4NTEtM2ZkOC00YTYxLWE0OTAtNDM1ZDQ2MWFjYjZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpPK1JmV1pYTGE2YmFuU0Y0TG1HL3laMXViUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1cUtxSmI1Q2xId2g2THV5bDJXenR0M0xtNXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRFMzNVBHUTciLCJtZSI6eyJpZCI6Ijk0Nzg4MzY0MzA4Ojk4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl5TwnZee8J2XnPCdl5/wnZeUIPCdl6PwnZeU8J2Xp/Cdl5vwnZeo8J2XoCIsImxpZCI6IjIyMTUyNjIyNTg5MTQxMzo5OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0syWTVPa0hFT0twLzhJR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IklUNGRaSzZXaHBPTWtrNElQaGY3Mmd1em9MMzJlZzRvbkVGMEk1M0QzUk09IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1raVZsUFBVVVVnZC9yRi92SStKYk5uSXFIVmZPbE8yK3lXY3pRaWc5K3BJVzFtemVYWXY2MFZyZ2poQVBCU2R0c0tuNUZyTVdaS1RPS2lSL2U2SEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhcU5rRk9HYTdRendVSmxqbFpjU0lqYVhGSTgxWndQa0NkYTJoN2l6aklrNDNGM2pqd0RRd0hpa1Qvdi83eVdMVW16TnNsOThoakxsSWVtbFNqNDRpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg4MzY0MzA4Ojk4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNFK0hXU3Vsb2FUakpKT0NENFgrOW9MczZDOTlub09LSnhCZENPZHc5MFQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTExMDg5NiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZmUCJ9",
};
