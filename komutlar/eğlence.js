const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Mays v12 sürümüyle sizlerle")
.setTitle(" ➤Mays logo menüsü komutları" )
 .setTimestamp()
.setDescription(" **!espri** \n **!token** \n **!sor** \n **!banner**   \n **!green** \n  **!habbo** \n **!kalın** \n  **!neonmavi** ")
.setImage("https://cdn.discordapp.com/attachments/790999702765961258/791798016583008297/wp2490739.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'eğlence',
  description: 'Yardım Menüsü.',
   usage:'eğlence'
}