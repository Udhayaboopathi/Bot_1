const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("acrp")
    .setDescription("𝐀𝐓𝐋𝐀𝐍𝐓𝐈𝐂 𝐂𝐈𝐓𝐘 𝐑𝐎𝐋𝐄𝐏𝐋𝐀𝐘 - 𝐒𝐀𝐌𝐏"),
  run: async (client, interaction) => {
    // Creating an embed
    const embed = new EmbedBuilder()
      .setAuthor({
        name: "ACRP",
        iconURL:
          "https://images-ext-2.discordapp.net/external/0PkT8ORkhaDX4pHPf6eqgYgQzU6ijtUkFZkL4P_yTM4/%3Fsize%3D1024/https/cdn.discordapp.com/icons/855732105682485248/a_a786c4ce3cee0eb661663fefbf93bbea.gif?width=473&height=473",
        url: "https://discord.gg/atlantic-city-roleplay-tamil-855732105682485248",
      })
      .setTitle("𝐀𝐓𝐋𝐀𝐍𝐓𝐈𝐂 𝐂𝐈𝐓𝐘 𝐑𝐎𝐋𝐄𝐏𝐋𝐀𝐘 - 𝐒𝐀𝐌𝐏")
      .setURL(
        "https://discord.gg/atlantic-city-roleplay-tamil-855732105682485248"
      )
      .setColor('Random')
      .setThumbnail(
        "https://media.discordapp.net/attachments/973940779502424094/1077639272938606663/20230221_221608.png?width=662&height=473"
      )
      .setImage("https://i.ytimg.com/vi/xe9I5Mlp2Cc/hqdefault.jpg")
      .addFields(
        {
          name: ":crown: Owned by",
          value: "karthigenius!",
          inline: true,
        },
        {
          name: ":calendar: Created On",
          value: "06/19/2021",
          inline: true,
        },
        {
          name: "IP",
          value: "51.79.162.218:7777",
        },
        {
          name: "PASS",
          value: "acrp@2k23",
        },
        {
          name: "Server Link",
          value:
            "https://discord.gg/atlantic-city-roleplay-tamil-855732105682485248",
        }
      );

    await interaction.reply({ embeds: [embed] });
  },
};
