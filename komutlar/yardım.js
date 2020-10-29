const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
   const filter = (reaction, user) => {
  return ["👤","🎮","🛠","🎉","💠","➕","💡"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};

  const yardım = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} - Tarafından İstendi`)
      .setColor("PURPLE")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`**Kullanıcı Komutları: 👤 \n Eğlence Komutları: 🎮 \n Moderasyon Komutları: 🛠 \n Çekiliş Komutları: 🎉 \n Logo Komutları: 💠 \n Davet Komutları: ➕ \n Ana Menü: 💡**`)
  .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
 var menü = await message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 99999 });
  let emojiler = ["👤","🎮","🛠","🎉","💠","➕","💡"]
  await menü.react(emojiler[0])
  await menü.react(emojiler[1])
  await menü.react(emojiler[2])
  await menü.react(emojiler[3])
  await menü.react(emojiler[4])
  await menü.react(emojiler[5])
  await menü.react(emojiler[6])
collector.on('collect', (reaction, user) => {

  if(reaction.emoji.name == "👤") {
    const onlycode = new Discord.MessageEmbed()
      .setColor("PURPLE")
 .addField("**Kullanıcı Komutları <a:asagiokk:726382461331963957>**", `\n**g!**__afk (sebep)__ = **__AFK Olursunuz.__** \n**g!**__avatarım__ = **__Avatarınızı Gösterir.__** \n**g!**__davet__ = **__Botun İletişim Yerlerini Atar.__** \n**g!**__havadurumu (Yer)__ = **__Seçtiğiniz Yerin Hava Durumu Bilgilerini Atar.__** \n**g!**__istatistik__ = **__Botun İstatistik Bilgilerini Atar.__** \n**g!**__ping__ = **__Botun Pingini Atar.__** \n**g!**__say__ = **__Sunucunuzdaki kişileri sayar ve bilgileri atar.__** \n**g!**__sunucu-ikon__ = **__Sunucunuzun Resmini Atar.__** \n**g!**__izinlerim__ = **__Rolünüzdeki İzinleri Gösterir.__** \n**g!**__google__ = **__Googlede İstediğiniz Şeyi Aratırsınız.__** \n**g!**__mc ip__ = **__Minecraft Sunucu İstatistiğini Gösterir.__** \n**g!**__uptime link__ = **__Projenizi Uptimeler Uyarı! HTTP Desteklememektedir. NOT: Güvenlik İçin Dm Den Kullanın.__** \n**g!**__giriş-sıram__ = **__Sunucuya Giriş Sıranızı Gösterir.__** \n**g!**__tiktok kullanıcıadı__ = **__TikTok Kullanıcı Bilgilerini Gösterir.__** \n**g!**__sunucubilgi__ = **__Sunucunun Bilgilerini Gösterir.__**`)
 .addField("**Kullanıcı Komutları [ 2 ] <a:asagiokk:726382461331963957>**", `\n**g!**__kullanıcıbilgi__ = **__Kullanıcının Bilgilerini Gösterir.__**`)
    .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
  .setThumbnail(client.user.avatarURL())
    menü.edit(onlycode)
  } 
  if(reaction.emoji.name == "🎮") {
       const onlycode = new Discord.MessageEmbed()
         .setColor("PURPLE")
   .addField("**Eğlence Komutları <a:asagiokk:726382461331963957>**", `\n**g!**__ara155__ = **__Polisi Arar.__** \n**g!**__ascii (mesaj)__ = **__Şekilli Yazı Yazarsınız.__** \n**g!**__emojiyazı (mesaj)__ = **__Emojili Yazı Yazarsınız.__** \n**g!**__espri__ = **__Bot Espri Yapar.__** \n**g!**__fbi__ = **__Fbi Baskını Gifi Atar.__** \n**g!**__kasaaç__ = **__Kasa Açarsınız.__** \n**g!**__kralol__ = **__Profilinize Kral Efekti Ekler__** \n**g!**__yazı-tura__ = **__Bot Yazı Tura Atar.__** \n**g!**__ara112__ = **__112 Yi Arar.__** \n**g!**__zarat__ = **__Zar Atarsınız.__** \n**g!**__vine__ = **__Rasgele Komik Paylaşımlar Atar.__** \n**g!**__kafasınasık @kullanıcı__ = **__İstediğiniz Kişinin Kafasına Sıkar.__** \n**g!**__adamasmaca__ = **__Adam Asmaca Oyununu Oynarsınız.__**`)
    .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
  .setThumbnail(client.user.avatarURL())
    menü.edit(onlycode)
  }
  if(reaction.emoji.name == "🛠") {
    const onlycode = new Discord.MessageEmbed()
      .setColor("PURPLE")
    .addField("**Moderasyon Komutları <a:asagiokk:726382461331963957>**", `\n**g!**__ban-limit (limit sayısı)__ = **__Ban Limitini Ayarlarsınız.__** \n**g!**__ban @kullanıcı [sebep]__ = **__Seçtiğiniz Kişiyi Banlasrsınız.__** \n**g!**__ban-sistemi-sıfırla__ = **__Ban Sistemini Sıfırlarsınız.__** \n**g!**__anti-raid #kanal__ = **__Anti Raidi Açarsınız.__** \n**g!**__anti-raid kapat__ = **__Anti Raidi Kapatırsınız.__** \n**g!**__botizni (botıd)__ = **__Seçtiğiniz Botun Sunucuya Girmesine İzin Verirsiniz.__** \n**g!**__botizni iptal (botıd)__ = **__Seçtiğiniz Botun Sunucuya Girmesini Engellersiniz.__** \n**g!**__cevaplama #kanal__ = **__Seçtiğiniz kanalda bot artık cevap vermez. Aynısını Gene Yazınca Artık Cevap Verir.__** \n**g!**__kayıtayarla #kanal @verilecekrol__ = **__Kayıt Sistemini Ayarlarsınız.__** \n**g!**__kayıtol isim yaş__ = **__Kayıt Sistemi Açıldıktan Sonra Bu Şekilde Kayıt Olunur.__** \n**g!**__otorol @rol #kanal__ = **__Otorolü Açarsınız.__** \n**g!**__otorol-kapat__ = **__Otorol Sistemini   Kapatırsınız.__** \n**g!**__snipe__ = **__Son Silinen Mesajı Gösterir.__**`)
  .addField("**Moderasyon Komutları [ 2 ] <a:asagiokk:726382461331963957>**", `\n**g!**__sil 1-1000__ = **__1 İle 1000 Arasında Mesaj Silersiniz.__** \n**g!**__spam aç/kapat__ = **__Spam Korumasını Açarsınız / Kapatırsınız.__**  \n**g!**__sayaç #kanal sayı__ = **__Sayaç Sistemini Açarsınız.__** \n**g!**__sayaç sıfırla__ = **__Sayaç sistemini kapatırsınız.__** \n**g!**__sa-as aç/kapat__ = **__Sa As Sistemini Açarsınız / Kapatırsınız.__** \n**g!**__sipariş yap/sıfırla/ayarla__ = **__Sipariş Sistemi.__** \n**g!**__hg-bb-ayarla #kanal__ = **__HG-BB Yi Ayarlar.__** \n**g!**__hg-bb-sıfırla__ = **__HG-BB Yi Kapatır.__** \n**g!**__yazırol @rol yazı__ = **__Yazı Rol Sistemi.__** \n**g!**__yazırol-kapat__ = **__Yazı Rolü Sıfırlar.__** \n**g!**__reklam-filtre__ = **__Reklam Sistemi, Kapatmak İçin Tekrar Kullanınız.__** \n**g!**__sunucu-kur__ = **__Sununuza Hazır Kanallar Kurar.__**`)
  .addField("**Moderasyon Komutları [ 3 ] <a:asagiokk:726382461331963957>**",`\n**g!**__görsel-engel #kanal/kapat__ = **__Etiketlediğiniz Kanalda Sadece GIF & Resim Atabilirler.__** \n**g!**__küfür-filtre__ = **__Küfür Filtresi Kapatmak İçin Komudu Tekrar Kullanın.__** \n**g!**__reaction-role #kanal mesajid emoji @rol__ = **__Emojiye Basınca Rol Verir Uyarı! Sadece Discordun Kendi Emojileri İle Çalışmaktadır.__** \n**g!**__yasaklı-kelime kelime__ = **__Sunucuda Ayarladığınız Kelimeyi Yazarsa Siler Ve Uyarır.__** \n**g!**__yasaklı-kelime-kapat__ = **__Yasaklı Kelimeyi Sıfırlar.__** \n**g!**__starboard-kanal #kanal__ = **__:star2: Emojisine Basıldığı Zaman Kanala Mesaj Atar.__** \n**g!**__starboard-kanal-sıfırla__ = **__StarBoard Kanalını Sıfırlar.__** \n**g!**__panel-kur__ = **__Sunucu Paneli Kurar.__** \n**g!**__panel-sil__ = **__Sunucu Paneli Siler.__**`)
    .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
  .setThumbnail(client.user.avatarURL())
    menü.edit(onlycode)
  }
  if(reaction.emoji.name == "🎉") {
    const onlycode = new Discord.MessageEmbed()
      .setColor("PURPLE")
 .addField("**Çekiliş Komutları <a:asagiokk:726382461331963957>**", `\n**g!**__çekiliş__ = **__Çekiliş Yaparısnız__** \n**g!**__yenikişiseç__ = **__Çekilişde Yeni Kişi Seçersiniz.__** \n**g!**__çekilişdurdur__ = **__Çekilişi Durdurursunuz.__** \n**g!**__çekilişibitir__ = **__Çekilişi Bitirirsiniz.__**`)
.setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
  .setThumbnail(client.user.avatarURL())
 menü.edit(onlycode)
  }
   if(reaction.emoji.name == "💠") {
    const onlycode = new Discord.MessageEmbed()
      .setColor("PURPLE")
 .addField("**Logo Komutları <a:asagiokk:726382461331963957>**", `\n**g!**__discord-logo__ = **__Discord Logosu__** \n**g!**__gold-logo__ = **__Altın Logosu.__** \n**g!**__grafiti-logo__ = **__Grafiti Logosu.__** \n**g!**__kalp-logo__ = **__Kalp Logosu.__** \n**g!**__müzik-logo__ = **__Müzik Logosu.__** \n**g!**__m-logo__ = **__M Logosu.__** \n**g!**__arrow-logo__ = **__Ok Logosu.__** \n**g!**__bubble-logo__ = **__Buuble Logosu.__** \n**g!**__bubble2-logo__ = **__Buuble 2 Logosu.__** \n**g!**__comic-logo__ = **__Comic Logosu.__** \n**g!**__cool-logo__ = **__Cool Logosu.__**`)
.setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
  .setThumbnail(client.user.avatarURL())
 menü.edit(onlycode)
  }
     if(reaction.emoji.name == "➕") {
    const onlycode = new Discord.MessageEmbed()
      .setColor("PURPLE")
 .addField("**Davet Komutları <a:asagiokk:726382461331963957>**", `\n**g!**__rütbe-ekle @rol davet__ = **__Rütbe Ekler__** \n**g!**__rütbeler__ = **__Rütbeleri Gösterir 1 Den 10'a Kadar__** \n**g!**__rütbe-sıfırla__ = **__Rütbeyi Sıfırlar.__** \n**g!**__davetleri-sıfırla__ = **__Davetleri Sıfırlar.__** \n**g!**__top__ = **__Lider Tablosunu Gösterir.__** \n**g!**__davetlerim__ = **__Davetlerinizi Gösterir.__** \n**g!**__bonus-ekle__ = **__Bonus Ekler.__** \n**g!**__davet-kanal #kanal__ = **__Davet Kanalını Ayarlar.__** \n**g!**__davet-kanal-sıfırla__ = **__Davet Kanalını Sıfırlar.__**`)
.setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
  .setThumbnail(client.user.avatarURL())
 menü.edit(onlycode)
  }
 if(reaction.emoji.name == "💡") {
 menü.edit(yardım)
  }
});

collector.on('end', collected => {
  console.log(`Collected ${collected.size} items`);
});

};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['help'],
 permLevel: 0,
};

exports.help = {
 name: 'yardım',
 description: '',
 usage: ''
};