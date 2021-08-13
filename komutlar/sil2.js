const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
if(isNaN(args[0])) {
  var errembed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .addField(`Yanlış Kullanım!`, `Bir rakam yazmalısın!`)
    .addField(`Doğru Kullanım:`, `${ayarlar.prefix}sil2 <temizlenecek mesaj sayısı>`)
return message.channel.send(errembed);
}
  
if (args[0] < 2) return message.reply("**2** adetten az mesaj silemem!")
if (args[0] > 200) return message.reply("**200** adetten fazla mesaj silemem!")
  
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 2) return message.reply("Hiç mesaj silemedim! _(**14** günden önceki mesajları silemem!)_");
})
message.channel.send(`**${args[0]}** adet mesaj başarıyla silindi!`)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil2", "mesaj-sil2", "mesajları-sil2"],
  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'sil2',
  category: 'moderasyon',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: '.sil2 <miktar>'
};