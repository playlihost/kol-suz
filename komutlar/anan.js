const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("ANAN yükleniyor.").then(message => {
    var virtualdevelopment = [
     "Ananmı Ben babanım olm",
    ];
    var espri = virtualdevelopment[Math.floor(Math.random() * virtualdevelopment.length)];
    message.edit(`${espri}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["espiri", "espri-yap", "yap-espri", "yapbi-espri"],
  permLevel: 0
};

exports.help = {
  name: "anan",
  description: "virtualdevelopment",
  usage: "anan"
};