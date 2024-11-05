const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_06_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjA1LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5LFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqc0V4Uk5HMmx0UEhvMGRCZXJUUSs5S2xKMFp5dEJMaW1DNGFVS1NGZVVrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQyNzY3ODg1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0I2QjNGMkRGRTlBNjM3Q0U4MUVGM0Q5NTY3NUZBREJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNzc2MDExXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlk4UEI3azNtUUlhTVl5bWRoR2NfUmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjJmZjMyYjctZTVmNS00OGNmLTg1Y2EtZThhNGJmOTkwOGYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTAsXG4gICAgICAxMTcsXG4gICAgICAyMzMsXG4gICAgICA4NCxcbiAgICAgIDIzMCxcbiAgICAgIDI0MSxcbiAgICAgIDY3LFxuICAgICAgMjQzLFxuICAgICAgMjQ2LFxuICAgICAgMTQ1LFxuICAgICAgMTgwLFxuICAgICAgMTE3LFxuICAgICAgMjE5LFxuICAgICAgMTAwLFxuICAgICAgMjQ5LFxuICAgICAgMzYsXG4gICAgICAxMjIsXG4gICAgICA2LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDEwOSxcbiAgICAgIDEzMixcbiAgICAgIDE1MyxcbiAgICAgIDE4LFxuICAgICAgMTY0LFxuICAgICAgMSxcbiAgICAgIDIzOCxcbiAgICAgIDI0OSxcbiAgICAgIDc2LFxuICAgICAgMTIzLFxuICAgICAgMTI2LFxuICAgICAgMjcsXG4gICAgICAyMjMsXG4gICAgICAyNTEsXG4gICAgICAyMzcsXG4gICAgICAxNTgsXG4gICAgICAxNDYsXG4gICAgICAxNDgsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkZESFcyUEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQyNzY3ODg1Mzo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcItiy24zZgNmA2JTZgNmA2YDZkdmSzaLZgNmA2YbYqFxcblxcblxcbiBcXG5cXG5cXG5cXG7htJtcXG5cXG7htIBcXG5cXG7JtFxcblxcbuG0j1xcblxcbsqfXFxuXFxuyapcXG5cXG5cXG5cXG5cXG5cXG7htLdcIixcbiAgICBcImxpZFwiOiBcIjI5MDAwMDg4OTgxNjkzOjQ0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05uaTY0NEdFTUNYcHJrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMzhSYzE2ekkzb21UZExkbVo0T0c3WWMwZ09UWGhpNVNLUWJpSWlRMzRubz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzb0xCT0lKZzNsOFRJZzdjemlyWU9BeUdvZndwTlkyZXd0NzIveUZGVUJjV1BJSDZaOFZ2ZTRER1VLYUhNU2lTbnFQd0k4cE1TT2Q0Qm05V0lSdHdDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJISTJjTndGZitBcXpEQkNqVUFnQ1BETVc3YklGZGFoWUhkb2FsUlQ2NFFkWWF1TEIxcUN1a0FnRnlodFhxV1MzZDlUYVI1WVhzUWwrUncyUnZEbXVnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0Mjc2Nzg4NTM6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDc3NjAwMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZDQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkNBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQkxkcXB0N0RoVUVQTVgwcXF6SnNuTVVhcUxRbzA3THYxRjRTR09VbzVyTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQxNzM4NTg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAyNjkwODI4NjJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
