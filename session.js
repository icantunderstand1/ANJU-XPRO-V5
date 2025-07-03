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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtaZ0U2YmNEaUtxR1FUbG1NZmduK1FzZTZPeG5RTEtrWkdnYnhPcUszTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM29iakJwL0ZTVUlxZ3N5WFF5R0U1ZEdXNm1Pdy9PWlRzeDEvMmptNjJEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQXEvM2VhbS84Vm5mZWZTVnJuclBmTHhHQ1lFSjRhanBjNjZFaHNBN1dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQnJYdkZTVWFWQ0RSU1E0SXpwZU9mWVBweVd1c2JOV2ZDTnE3bmxLQjNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBDSVcyV1BFb0JaWUlGU3h4bHdVOTNGZHlHNTI5d2cwK0p5c2dISGZJR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllrOGlRMjNRbHVBS3U1NlZ4bWZndjhXcWZlUWFLYlMvS2xlZnlneEJIVlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9uS2FrWCtkcVlhVE1ETWhhWWRURGtxUkVUZUQ1OU9pZXl2QURYa0dVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHhWODRzMnl0Wk5najFEc2puanltckRiRHNINTZ2UmxINGVsMmtvaE1sRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc4R09qR3VaUW5mdGswbXdNN1lYOWg4cFoxUnFMNkZHamQ1cGRBTkl0Z2E0dVF2dmJUYWZLazlXbFpRZDRYTXArVk04N01EK3FIRWRkWG5PWFBEbmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJvRWJIVVdPNFZacENRcmxNa1AxaTM0dkdzeVBXTkhBdzJGTXg0YXo5SjFvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4UnAzckxaSlNFU18wamdhLWVxUzd3IiwicGhvbmVJZCI6Ijg2ZWYyYWE4LWU5ZTktNGU2OC04ZDc1LTQ1ZGY3OTI2MmIwZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzcHhZMHBIQWNKbXY5UStjVWd3TUNkTk5rS289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEpYUjBKVjhUeUlydGZrZ2RES2dNZlZobkVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikw3M0RRVktEIiwibWUiOnsiaWQiOiI5NDc4ODM2NDMwODo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl5TwnZee8J2XnPCdl5/wnZeUIPCdl6PwnZeU8J2Xp/Cdl5vwnZeo8J2XoCIsImxpZCI6IjIyMTUyNjIyNTg5MTQxMzo3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJZNU9rSEVNUG5tY01HR0JjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSVQ0ZFpLNldocE9Na2s0SVBoZjcyZ3V6b0wzMmVnNG9uRUYwSTUzRDNSTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMkVZZWZabXltNm5jSDU5bjVoVFR3YTVXczhYZ0NOTndZNksrQUh2UzZrQ05iWmRXZWc5M2wwMktsSDVjN3BET3RZcnlPVkU3MFJBendDOFRtQ3J4Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6InU2bm9POVFWMGg0ZXpHdk1icEJYeU1yeXFTVjZwVkdnZEkxd1E2Z1dPREt0STdCanVBcStid0JtbHJiWnp0a2I0ekw3azNsdi9RbjdSU1VRcUlqd2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODgzNjQzMDg6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTRStIV1N1bG9hVGpKSk9DRDRYKzlvTHM2Qzk5bm9PS0p4QmRDT2R3OTBUIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE1NDQ3ODQsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGZlAifQ==",
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
