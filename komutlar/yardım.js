const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/790999702765961258/791775226186563635/6faf3b2ff385f75cc6b46e61e60c1979.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `!örnek`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 

:white_small_square: | **!örnek:** Kendinize özel logo yapma komutlarını gösterir
:white_small_square: | **!örnek:** Kendi avatarınızı gösterir yada etiketlediğiniz kişinin avatarını gösterir
:white_small_square: | **!örnek:** Botun pingini gösterir
:white_small_square: | **!örnek:** bulunduğunuz sunucunun bilgisini gösterir
:white_small_square: | **!örnek:** olduğunuz sunucunun resmini gösterir
:white_small_square: | **!örnek:** botun yetkilerini gösterir
:white_small_square: | **!örnek:** istediğiniz kişinin profil bilgilerini gösterir
`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:white_small_square: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/74MZyfZ24d) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=791609110658547782&permissions=8&scope=bot) \n > » [Oy Verebilirsiniz](https://top.gg/bot/791609110658547782/vote) `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
