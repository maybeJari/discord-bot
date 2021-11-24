import { ICommand } from "wokcommands";
const { MessageEmbed } = require("discord.js");

export default {
    category: 'Developer',
    description: 'Eval',

    slash: 'both',
    testOnly: false,
    ownerOnly: true,

    callback: ({ client, message, args }) => {
      try {
        const code = args.join(" ");
        if (!code) {
           return message.channel.send("What do you want to evaluate?")
        }
        
        let evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

          let embed = new MessageEmbed()
          .setAuthor("Eval", message.author.avatarURL())
          .addField("Input", `\`\`\`${code}\`\`\``)
          .addField("Output", `\`\`\`${evaled}\`\`\``)
          .setColor("GREEN")

        message.channel.send({embeds: [embed]});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`\n${err}\`\`\``);
}
    },
} as ICommand