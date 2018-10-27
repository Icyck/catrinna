laconfig = require("./laconfig.json");
const token = process.env.token;
const Discord = require("discord.js");
const robot = new Discord.Client();

robot.on("ready", () => {
    robot.user.setPresence({
        game: { 
            name: 'Icy Day',
            type: 'WATCHING'
        },
        status: "dnd"
    })
  });

  robot.on("message", async message => {
    if(message.author.robot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = laconfig.prefix
    let messageArray = message.contest.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
      
    
  });
  

 robot.on("guildMemberAdd", async member => {
    

    let welcomechannel = member.guild.channels.find(`name`, "welcome_leaves");
    
    welcomechannel.send(`Hello ${member} welcome to Night Support! Read "<#495869652522500096>" and "<#499934754523840512>". Write in "<#495869103534243840>" ***ONLY BOT COMMAND***. P.S: Type in bot fun **~verify**.Good bye!`);


  });

 

robot.login(token);
