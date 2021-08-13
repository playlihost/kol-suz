const Discord = require('discord.js');

const oyunlar = [                  'Bu kesin.',
                                    'Kesinlikle öyle.',
                                    'Kuşkusuz.',
                                    'Evet, Kesinlikle.',
                                    'Buna güvenebilirsin.',
                                    'Gördüğüm kadarıyla, Evet.',
                                    'Büyük olasılıkla.',
                                    'Görünüşe göre, iyi.',
                                    'Evet.',
                                    'İşaretler eveti gösteriyor.',
                                    'Anlayamadım, tekrar edin.',
                                    'Daha sonra sor.',
                                    'Şimdi söylemesen iyi olur.',
                                    'Tahmin edemiyorum...',
                                    'Konsantre ol ve tekrar sor.',
                                    'Buna güvenme.',
                                    'Cevabım, hayır.',
                                    'Kaynaklarım hayır diyor.',
                                    'Görünüşe göre, bu iyi değil.',
                                    'Çok şüpheli.',
                                    'Şüpheli.',
                                    'Büyük olasılıkla, hayır.',
                                    'İçgüdüm, hayır diyor.',
                                    'Kararsız kaldım, bidaha sormaya ne dersin?'                         
];

exports.run = function(client, message, args) {
    var oyun = args.join(' ');

    var oyun = cevaplar[Math.floor(Math.random() * oyunlar.length)];

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