const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "919436923341" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919436923341";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_24_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNCxcbiAgICAgICAgODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgyLFxuICAgICAgICA2NixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNYRC94UmYraDFHVzJrK3RXc0ZiTVljaEpacGpJVTR0SFltb0E0Q0M3eE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkEza2VFNnNDUlhLbG9YcnhhVW1fSVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjYyZWNjZGYtNWRhNy00MTYxLTkyM2QtYzcxYmQ1NmNmNjk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgNTYsXG4gICAgICAyMSxcbiAgICAgIDIwNixcbiAgICAgIDE3OCxcbiAgICAgIDI1MyxcbiAgICAgIDE3OCxcbiAgICAgIDEzOCxcbiAgICAgIDI1LFxuICAgICAgMjMzLFxuICAgICAgMjM5LFxuICAgICAgMTYwLFxuICAgICAgMTk4LFxuICAgICAgNzgsXG4gICAgICA3OCxcbiAgICAgIDI1MixcbiAgICAgIDIzNyxcbiAgICAgIDIxNixcbiAgICAgIDYzLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDI5LFxuICAgICAgMTI2LFxuICAgICAgNDksXG4gICAgICA1MCxcbiAgICAgIDM3LFxuICAgICAgMTQsXG4gICAgICAyMjMsXG4gICAgICAxNTEsXG4gICAgICA1MixcbiAgICAgIDIzMSxcbiAgICAgIDg2LFxuICAgICAgMTQwLFxuICAgICAgMjcsXG4gICAgICA2OSxcbiAgICAgIDQxLFxuICAgICAgODYsXG4gICAgICA3MCxcbiAgICAgIDEzMyxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY0MUdIQ0xSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk0MzY5MjMzNDE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzY5MzcyODkxNzUxOTY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPaWZrcTBGRUxlV3pyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNWaXlUcHpEbUdMWWxicWxweURLckREMnpDV1lMaGlCbGxtc29tSDhEMGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicEVadGx4ME9ISVlFOTdMNklQUHlZa2gwWlZkejJrTWpORy9GZVRkbjRGY0ZEQTZaK3MrLzFLRzR4aG55WGYyNWdlckI3OFcrL2FKV2VXVDA2M3BpRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTHd4RnZrYWZZQVB0T1ZwL21GamdZMVRDUm0yeWEyN0VjVmxjMUxGVms2WWE0VGdtYkhla2wyRnRxZGFvajYzQlk4UnNtK3p3STFKNmhVbzFNZEhPaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NDM2OTIzMzQxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NDU0NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOVnRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5WdC5qc29uIjogIntcImtleURhdGFcIjpcImNKZTRkcWVZcTBYS0xXaUJVUlc2dTkxT1d0N0JHRkR3N2k5K2hRazc1dG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzNjg0ODEwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
