const Command = require('./Structures/Command');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');
const { Client, Util, MessageEmbed } = require('discord.js')
const ytdl = require('ytdl-core')
const YouTube = require('simple-youtube-api')
const { util } = require('simple-youtube-api')
const PREFIX = 'n!'

///////////////////////////////////////////////////////
const client = new Client({ disableEveryone: true })//
const youtube = new YouTube(apikey)//////////////////
const queue = new Map()/////////////////////////////
///////////////////////////////////////////////////

let readys = ['print ("Hello World")', 'Hello World.']
let randomready = readys[Math.floor(Math.random() * readys.length)]

client.on('ready', () => console.log(randomready))



client.login(process.env.token)