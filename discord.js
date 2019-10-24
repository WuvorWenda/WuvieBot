const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!').then(sentMessage => {
                sentMessage.delete(9000)
                });
    msg.react(''); // insert here your emote unicode token
    const attachment = new Attachment('https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png');
    msg.channel.send(attachment).then(sentMessage => {
                sentMessage.delete(8000);
        });




  }
});

client.login('your oath token');

