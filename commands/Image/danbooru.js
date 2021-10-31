const { Client, Message, MessageEmbed } = require('discord.js');
const Danbooru = require('danbooru');
const booru = new Danbooru();

module.exports = {
  name: 'danbooru',
  description: 'Search for an images from danbooru',
  aliases: ['booru'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let tag = args.join(' ');
    // If there's no tag specified, Search for default tag.
    if (!tag) tag = 'uncensored female_pubic_hair';
    if (!message.channel.nsfw)
      return message.reply({ content: `Not an NSFW Channel!` });

    booru.posts({ tags: tag, limit: 10000 }).then((posts) => {
      const index = Math.floor(Math.random() * posts.length);
      const post = posts[index];
      const postId = post.id || 'None';
      const postUrl = `https://danbooru.donmai.us/posts/${postId}`;
      const artist = post.tag_string_artist || 'Unknown';
      const character = post.tag_string_character || 'Unknown';
      const copyright = post.tag_string_copyright || 'Original';
      const imageUrl = post.file_url;
      const extension = post.file_ext || 'Unknown';
      const fileName = `${post.md5}.${post.file_ext}` || 'Unknown';
      const resolution =
        `${post.image_width}x${post.image_height}` || 'Unknown';

      try {
        if (extension === 'mp4') {
          const embed = new MessageEmbed()
            .setTitle(`${fileName}`)
            .setURL(`${postUrl}`)
            .setDescription(
              `Artist : ${artist}\nCharacter : ${character}\nCopyright : ${copyright}\nImage Size : ${resolution}\nExtension : ${extension}`
            )
            .addField(`Post URL`, `${postUrl}`)
            .addField(`Video URL`, `${imageUrl}`)
            .setFooter(message.author.tag)
            .setColor('FUCHSIA')
            .setTimestamp();

          message.channel.send({ embeds: [embed] });
        } else {
          const embed = new MessageEmbed()
            .setTitle(`${fileName}`)
            .setURL(`${postUrl}`)
            .setDescription(
              `Artist : ${artist}\nCharacter : ${character}\nCopyright : ${copyright}\nImage Size : ${resolution}\nExtension : ${extension}`
            )
            .setImage(`${imageUrl}`)
            .setFooter(message.author.tag)
            .setColor('FUCHSIA')
            .setTimestamp();

          message.channel.send({ embeds: [embed] });
        }
      } catch (err) {
        console.log(err);
      }
    });
  },
};
