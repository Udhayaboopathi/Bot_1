const { EmbedBuilder } = require("@discordjs/builders");
const { Client, Guild } = require("discord.js");

const { GuildMember, Embed } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  execute(member) {
    const { user, guild } = member;
    const welcomeChannel = member.guild.channels.cache.get(
      "973940777073917992"
    );
    const welcomeMessage = `welcome <@${member.id}> to the channel`;
    const welcomeEmbed = new EmbedBuilder()
      .setAuthor({
        name: "Welcome",
        iconURL: guild.iconURL({ dynamic: true }),
        url: `https://discord.gg/2KcpeUKkGU`,
      })
      .setImage(
        "https://media.discordapp.net/attachments/1106580316967145515/1130520064488124467/standard.gif"
      )
      .setTitle(`${guild}`) // Set the title of the embed
      .setDescription(
        `<a:emoji_25:1048623695620481034> Hey,${member} welcome to ${guild} 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐒𝐞𝐫𝐯𝐞𝐫!

<a:emoji_25:1048623695620481034> 𝐏𝐥𝐞𝐚𝐬𝐞 𝐫𝐞𝐚𝐝 𝐚𝐧𝐝 𝐟𝐨𝐥𝐥𝐨𝐰 <#973940778214764584>
        
<a:emoji_25:1048623695620481034> 𝐃𝐎 𝐍𝐎𝐓 𝐬𝐩𝐚𝐦 𝐥𝐢𝐧𝐤𝐬 𝐢𝐧 𝐞𝐯𝐞𝐫𝐲 𝐜𝐡𝐚𝐧𝐧𝐞𝐥 𝐚𝐧𝐝 𝐃𝐎 𝐍𝐎𝐓 𝐚𝐬𝐤 𝐭𝐡𝐞𝐦 𝐭𝐨 𝐬𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐲𝐨𝐮𝐫 𝐜𝐡𝐚𝐧𝐧𝐞𝐥 <a:emoji_32:1044270957050736690> I𝐈𝐥 𝐰𝐢𝐥𝐥 𝐤𝐢𝐜𝐤 𝐲𝐨𝐮
        
<a:emoji_25:1048623695620481034> 𝐈𝐟 𝐲𝐨𝐮 𝐧𝐞𝐞𝐝 𝐚𝐧𝐲 𝐡𝐞𝐥𝐩 <#1072226251697295410> 𝐓𝐚𝐠 <@&975416698339471360>

<a:emoji_25:1048623695620481034> 𝐈𝐟 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐣𝐨𝐢𝐧 𝐨𝐮𝐫 𝐟𝐚𝐦𝐢𝐥𝐲 𝐩𝐥𝐬 𝐜𝐡𝐞𝐜𝐤 <#1112982118163808266>

<a:emoji_25:1048623695620481034> 𝐓𝐚𝐤𝐞 𝐲𝐨𝐮𝐫 𝐅𝐚𝐦𝐢𝐥𝐲 𝐚𝐧𝐝 𝐎𝐭𝐡𝐞𝐫 𝐑𝐨𝐥𝐞𝐬 𝐢𝐧 <#1043935395613786132>

<a:emoji_25:1048623695620481034> 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐭𝐡𝐞 ${guild.memberCount} 𝐌𝐞𝐦𝐛𝐞𝐫 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐒𝐞𝐫𝐯𝐞𝐫`
      ) // Set the description of the embed
      .setColor(0xff0000)
      .setTimestamp()
      .setFooter({
        text: `${guild}`,
        iconURL: guild.iconURL({ dynamic: true }),
      })
      .setThumbnail(member.user.displayAvatarURL()); // Set the thumbnail to the user's avatar

    welcomeChannel.send({ embeds: [welcomeEmbed] });
  },
};
