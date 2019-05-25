
const discord = require("discord.js");
const config = require("./config.json");
const bot = new discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is ready for action!`);
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}help`) {
      return message.channel.send("I'm Don't have help . :cry:");
});

bot.login(config.token);
