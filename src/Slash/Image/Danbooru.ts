import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import Danbooru from 'danbooru';
const booru = new Danbooru();

export const slash: Slash = {
	name: 'danbooru',
	description: 'Get an images from danbooru',
	testOnly: false,
	options: [
		{
			type: 3,
			name: 'tags',
			description: 'Post tags. Up to 2 tags. Tags separated with space',
			required: false,
		},
	],
	run: async (client, interaction, args) => {
		let [tags] = args;
		if (!tags) tags = 'uncensored female_pubic_hair';
		if (interaction.channel.type === 'GUILD_TEXT' && !interaction.channel.nsfw)
			return interaction.followUp({
				content: `Not an NSFW Channel!`,
				ephemeral: true,
			});

		booru.posts({ tags: tags }).then((posts) => {
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
						.setFooter({ text: interaction.user.tag })
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
						.setFooter({ text: interaction.user.tag })
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
