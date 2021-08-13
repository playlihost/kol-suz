const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("GRAY")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/790999702765961258/791775226186563635/6faf3b2ff385f75cc6b46e61e60c1979.gif"
    )
    .setDescription(
      `Toplamda Botta **9** Adet Komut Bulunuyor!` +
        "\n\n `!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 

:white_small_square: | **lb!sil** sohbeti siler
:white_small_square: | **lb!sil2** lb!sil in gelişmişidir
:white_small_square: | **lb!oyun** botun oyununa gidersiniz
:white_small_square: | **lb!yardım** yardımlarını gösterir
:white_small_square: | **lb!ingilizce** ingilizceyi türkçeye çevirir
:white_small_square: | **lb!oto** otomatik olarak her dilden türkçeye çevirir
:white_small_square: | **lb!reklam-engel** reklam engel açar
:white_small_square: | **lb!küfür-engel** küfür engel açar
`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:white_small_square: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucu Yok]() \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=875468682392907817&permissions=8&scope=bot) \n > » [Oy Verebilirsiniz]() `
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
