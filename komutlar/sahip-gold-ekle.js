const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  if (message.author.id == "708746139092123679" || message.author.id == "713644490765893662" || message.author.id == "726062744687607916" || message.author.id == "721708890147782707") {
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.reply('Herhangi bir ID belirtiniz.')
  
  db.set(`üyelikk_${nesne}`, 'üyelik')
  const embed = new Discord.MessageEmbed()
  .setDescription(`<:dogru:712581613669580800> **${nesne}** ID'li kişi, özel üyelik sistemine eklendi.`)
  message.channel.send(embed)
 message.client.channels.cache.get('732328925509976094').send(`\`${nesne}\` ID'li Kullanıcı Gold Üyeliğe Eklendi`)
if (message.client.users.cache.get(''+nesne+'').send(`\`Gold üyeliğiniz aktif edildi\``)){
  

} else return
 }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold-ekle'],
    kategori: 'yapımcı',
  permLevel: 0
};
exports.help = {
  name: 'gold-üye-ekle',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};