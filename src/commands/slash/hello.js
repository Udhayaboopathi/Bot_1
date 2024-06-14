const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("hello").setDescription("i am groot"),
  run: async (client, interaction) => {
    // Creating an embed
    const embed = new EmbedBuilder()
      .setTitle("Ping Command")
      .setDescription(
        `<a:verifyblack:1132636819297685546> <#1126763501420023828> Pong! 🏓 `
      )
      .setColor('Random'); // Set the color of the embed, you can use a hex code or predefined colors

    // Sending the embedded message
    await interaction.reply({ embeds: [embed] });
  },
};
