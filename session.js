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
  SESSION_DIR: process.env.SESSION_DIR || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0s3cVZpRHVaWnFTWThIYkJlT0Z6eGdaYmJFbjJvcFN1aVN5NlFpcHVHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWNIdnp6TUFMUXZQWDI1Wm5hWU12ZE4rTjlweStJQWM4SlJmdTZxR3doUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TmdMSUs2Y0I2b0ljS2E2L0RIWXVQWWtjL2p4clNuRVBSbWtMM0YrRmw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUzNxUjdjbmN3Rkk0K2V4SkpCS3lVVkNjZ2ppNWNGK21jZjVnTXBCQWxRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRFRmNFOTFEN2pyNkV4RFJ0YkZ0QVVlYTYzYVk0M3ZHeVNNbEhnYkQ4a1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVRdWh3WWxPcmNJZ3JoUE1mM1M4ZkRoWW9VKzh0SnNsSjB0WUJOa1M2MkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01UNmhZdzhaaExraDVKZ0p5S3dFSXZSUXdadlhrNG1zS2RkY2NOZVVWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1hFSlN0ZEx3SEt1Zlo3TGZXT0ZCZk5KTHRQc1Fhc1QzQndkcnZvazhoOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFWZVVSc200WEdRRExxTmphcERKUnNYVEdFeU96NHlTeFA4MGt0RGV2SGtzdEZ0MGNFcXVrbXdnNXNyNHZobGllbHMza05IY2dyQm51V2p4bzBtYUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJTMEVFTURvNUwzRVFuUVVTUG1SOUN1U3JSOUtLTG1hQ21sYmEzZ0NNWjdVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzdjVNVnlwc1RRaXZrSTR4MWgxWG53IiwicGhvbmVJZCI6ImE5Y2M3MWQxLWZhNjctNDc4My1iYmZjLTBiY2MxNDIzODY1ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5N3dCaDhyb0xBVER3WHhRMjNOV2VNM0dFTzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiei9hcEd1V0E4VG1yWThxTFpVMktsUjFKWjlZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlRVFdaR0xBIiwibWUiOnsiaWQiOiI5NDc4ODM2NDMwODoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl5TwnZee8J2XnPCdl5/wnZeUIPCdl6PwnZeU8J2Xp/Cdl5vwnZeo8J2XoCIsImxpZCI6IjIyMTUyNjIyNTg5MTQxMzoxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJZNU9rSEVKcWZnc01HR0JFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSVQ0ZFpLNldocE9Na2s0SVBoZjcyZ3V6b0wzMmVnNG9uRUYwSTUzRDNSTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ0pGUjRMVEVwZnZMdVRCdXpuamhKdkZwcmNjcFArcjdIWSszU056WDNzY3IrOFY5emd2VGZnUXdyN01uRytCU3ZzVkJsT2FxY3hPRnlHMXRMUVlmRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImNKRW9hTDdiVWZnNFBHR3hxU0lkVXVpWXQ1aGkxZzNKb0JVMkVDVm1qTjZjLzNoQnlvSEI2anhxWlNpdjRMc1VJOFhhL1J5ZFVaWGNqMGh5aVc5OEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODgzNjQzMDg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTRStIV1N1bG9hVGpKSk9DRDRYKzlvTHM2Qzk5bm9PS0p4QmRDT2R3OTBUIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTExNTg2OTYsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGZlAifQ==",
};
