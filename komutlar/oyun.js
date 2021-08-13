const Discord = require('discord.js');

const oyunlar = [                  'https://merciful-salty-rhythm.glitch.me/',                        
];

exports.run = function(client, message, args) {
    var oyun = args.join(' ');

    var oyun = oyunlar[Math.floor(Math.random() * oyunlar.length)];

    if(!oyun) return message.reply('Bana bir oyun sormalısın! **Örnek**: >oyun <oyun>')
    else message.channel.send(oyun)

}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyun',
  description: 'güncel oyun',
  usage: 'oyun <soru>'
};