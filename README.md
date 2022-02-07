# Command-and-Event-Handler-for-v13-slash-
Code by TylerPotts patched by Allu#6595 for replit.com




Make sure you forked this repo to replit before reading the next steps!
On pc click on code then copy the link then go to replit.com and click on new repl then import from GitHub and paste the link there
On mobile go to desktop mode and do the same steps above.



Hi, I'll show you how to make this command and event handler work.

Step 1 Go to index.js and configure your bot status from line 54 to 57 (optional)

Step 2 Go to events folder then ready.js and on line 9 change the string in console.log("Max is online") to whatever you want in the console to show when the bot is started. (also optional )
Step 3 Go to secrets tab and add a secret called "token" without the apostrophes, then paste your bot's token in the value.

Step 4 That's all you need to do!

##Credits to Tyler Potts for the tutorial of the command and event handler!*

Visit his channel:- https://youtube.com/c/TylerPotts

If you are having any issues with the code, dm me on discord, My username is *Allu#6595

To add new commands;

Go to commands folder and add a new command file named whatever you want in js format

here's the basic command structure

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = { data: new SlashCommandBuilder() .setName("Command name") .setDescription("Description of the command"), async execute(interation) { interation.reply({ content: "The reply", ephemeral: true <= Set it to false if you want the reply to be visible to everyone }); } }

#If you want this code in your own bot, you can copy paste the code and install these packages.

@discordjs/rest @discordjs/builders discord-api-types discord.js v13
