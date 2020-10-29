const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 if (message.author.id == "708746139092123679" || message.author.id == "713644490765893662" || message.author.id == "726062744687607916" || message.author.id == "721708890147782707") {
  let nesne = args[0]
  if (!nesne) return message.reply('Herhangi bir ID belirtiniz.')
  
  db.delete(`üyelikk_${nesne}`)
  
  message.channel.send(`<:dogru:712581613669580800> **${nesne}** ID'li kişi, özel üyelik sisteminden kaldırıldı.`)
  if (message.client.users.cache.get(''+nesne+'').send(`\`Gold üyeliğinizin süresi doldu\``)){
 
} else return
  message.client.channels.cache.get('732328925509976094').send(`\`${nesne}\` ID'li Kullanıcının Gold Üyeliği Silindi`)
 }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold-kaldır'],
    kategori: 'yapımcı',
  permLevel: 0
};
exports.help = {
  name: 'gold-üye-kaldır',

  description: 'Gold üye siler.',
  usage: 'gold-üye-kaldır'
};