const { utc } = require('moment');
const os = require('os');
const ms = require('ms');
const { Client, Util, MessageEmbed } = require('discord.js')
const ytdl = require('ytdl-core')
const YouTube = require('simple-youtube-api')
const { util } = require('simple-youtube-api')
const PREFIX = 'n!'


const client = new Client({ disableEveryone: true })
//const youtube = new YouTube(apikey)
const queue = new Map()

let readys = ['print ("Hello World")', 'Hello World.']
let randomready = readys[Math.floor(Math.random() * readys.length)]

client.on('ready', async () => {
    console.log(randomready)
    let statuses = [` | ${PREFIX}help.`, ` | Music in ${client.guilds.cache.size} guilds.`, ` | ${client.user.username}!`]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)]

        client.user.setActivity(status, { type: "listening" })
    }, 2000)
})

var swearWord = ["kkr", "kanker", "kqnker", "kqnk3r"]
//var link = ["https://", "www."]
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return message.channel.send(":x: | Sorry, my commands do not work in DM.");


    var msg = message.content.toLowerCase();

    for (let i = 0; i < swearWord.length; i++) {

        if (msg.includes(swearWord[i])) {

            message.delete();

            var embedswear = new discord.MessageEmbed()
                .setAuthor(`${message.author.tag} has been warned`, message.author.displayAvatarURL())
                .setDescription(`**Reason:** Bad word usage`)
            return message.channel.send(embedswear)
        }
    }
})








client.login(process.env.token)