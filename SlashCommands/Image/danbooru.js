const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const Danbooru = require('danbooru');
const booru = new Danbooru();

module.exports = {
  name: 'danbooru',
  description: 'Get an image from danbooru',
  options: [
    {
      type: 3,
      name: 'tags',
      description: 'Post tags. Up to 2 tags. Tags separated with space',
      required: false,
    },
  ],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    let [tags] = args;
    if (!tags) tags = 'uncensored female_pubic_hair';
    if (!interaction.channel.nsfw)
      return interaction.followUp({ content: `Not an NSFW Channel!` });
    let limit = 10000 || 5000 || 2500 || 1000 || 500 || 250 || 100 || 0;
    let page =
      10000 ||
      5000 ||
      2500 ||
      1000 ||
      500 ||
      250 ||
      100 ||
      50 ||
      25 ||
      15 ||
      10 ||
      5 ||
      2 ||
      1 ||
      0;

    booru.posts({ tags: tags, limit: limit, page: page }).then((posts) => {
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
            .setFooter(interaction.user.tag)
            .setColor('FUCHSIA')
            .setTimestamp();

          interaction.followUp({ embeds: [embed] });
        } else {
          const embed = new MessageEmbed()
            .setTitle(`${fileName}`)
            .setURL(`${postUrl}`)
            .setDescription(
              `Artist : ${artist}\nCharacter : ${character}\nCopyright : ${copyright}\nImage Size : ${resolution}\nExtension : ${extension}`
            )
            .setImage(`${imageUrl}`)
            .setFooter(interaction.user.tag)
            .setColor('FUCHSIA')
            .setTimestamp();

          interaction.followUp({ embeds: [embed] });
        }
      } catch (err) {
        console.log(err);
      }
    });
  },
};
