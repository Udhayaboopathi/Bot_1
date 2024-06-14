const { EmbedBuilder } = require("discord.js");
const samp = require("samp-query");
const AsciiTable = require("ascii-table");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("iuplayer")
    .setDescription("IRANDAAM ULAGAM RP தமிழ் | BOTH PC AND MOBILE |"),
  run: async (client, interaction) => {
    const color = 0xff0000;

    const table1 = new AsciiTable()
      .setHeading(" ID", "NICK")
      .setAlign(2, AsciiTable.RIGHT);
    const table2 = new AsciiTable()
      .setHeading(" ID", "NICK")
      .setAlign(2, AsciiTable.RIGHT);
    const table3 = new AsciiTable()
      .setHeading(" ID", "NICK")
      .setAlign(2, AsciiTable.RIGHT);
    const table4 = new AsciiTable()
      .setHeading(" ID", "NICK")
      .setAlign(2, AsciiTable.RIGHT);
    const table5 = new AsciiTable()
      .setHeading(" ID", "NICK")
      .setAlign(2, AsciiTable.RIGHT);

    const options = {
      host: "148.113.8.240",
      port: 1111,
    };
    await samp(options, (error, query) => {
      if (error) {
        console.error(error);
        return interaction.reply(
          "An error occurred while fetching server information."
        );
      }

      if (!query || !query.hostname) {
        return interaction.reply("Unable to retrieve server information.");
      }

      const embed = new EmbedBuilder()
        .setAuthor({
          name: "OnlinePlayers",
          iconURL:
            "https://media.discordapp.net/attachments/973940779502424094/1077639272938606663/20230221_221608.png?width=655&height=468",
          url: "https://discord.gg/zNECMfFzjp",
        })
        .setColor(color)
        .setTitle(`**${query["hostname"]}**`);
      // .setImage(
      //   "https://media.discordapp.net/attachments/789003482711195688/1115624615373447199/1686047823935.png"
      // );

      if (query["online"] > 0) {
        if (query["online"] > 100) {
          embed.addFields({
            name: "PLAYERS LIST",
            value:
              "*Number of players is grather than 100. I cannot list them!*",
          });
        } else if (query["players"].length == 0) {
          embed.addFields({
            name: "PLAYERS LIST",
            value: "*I could not get the players list. Try again...*",
          });
        } else {
          if (query["online"] > 0) {
            for (var i = 0; i < 20; i++) {
              if (query["players"][i] !== undefined) {
                table1.addRow(
                  query["players"][i]["id"],
                  query["players"][i]["name"]
                  // query["players"][i]["score"]
                );
              }
            }
            embed.addFields({
              name: `${query["online"]}/${query["maxplayers"]}`,
              value: "```\n" + table1 + "```",
            });
          }
          if (query["online"] > 20) {
            for (var i = 20; i < 40; i++) {
              if (query["players"][i] !== undefined) {
                table2.addRow(
                  query["players"][i]["id"],
                  query["players"][i]["name"]
                  // query["players"][i]["score"]
                );
              }
            }
            embed.addFields({
              name: "\u200B",
              value: "```\n" + table2 + "```",
            });
          }
          if (query["online"] > 40) {
            for (var i = 40; i < 60; i++) {
              if (query["players"][i] !== undefined) {
                table3.addRow(
                  query["players"][i]["id"],
                  query["players"][i]["name"]
                  // query["players"][i]["score"]
                );
              }
            }
            embed.addFields({
              name: "\u200B",
              value: "```\n" + table3 + "```",
            });
          }
          if (query["online"] > 60) {
            for (var i = 60; i < 80; i++) {
              if (query["players"][i] !== undefined) {
                table4.addRow(
                  query["players"][i]["id"],
                  query["players"][i]["name"],
                  query["players"][i]["score"]
                );
              }
            }
            embed.addFields({
              name: "\u200B",
              value: "```\n" + table4 + "```",
            });
          }
          if (query["online"] > 80) {
            for (var i = 80; i < 100; i++) {
              if (query["players"][i] !== undefined) {
                table5.addRow(
                  query["players"][i]["id"],
                  query["players"][i]["name"],
                  query["players"][i]["score"]
                );
              }
            }
            embed.addFields({
              name: "\u200B",
              value: "```\n" + table5 + "```",
            });
          }
        }
        return interaction.reply({ embeds: [embed] });
      } else if (query["online"] == 0) {
        embed.addFields({ name: "PLAYERS LIST", value: "*Server is empty*" });
        return interaction.reply({ embeds: [embed] });
      }
      return interaction.reply({ embeds: [embed] });
    });
  },
};
