import { AnyChannel, Message, MessageEmbed, TextChannel } from 'discord.js';
import { Event } from '../Interfaces';
import Schema from '../Schema/Picture';
const originChannel: string = process.env.UPLOAD_CHANNEL;

export const event: Event = {
	name: 'messageCreate',
	run: async (client, message: Message) => {
		const debugChannel: AnyChannel = client.channels.cache.find(
			(channel) => channel.id === '899997057849393225'
		);
		if (originChannel.includes(message.channel.id)) {
			if (message.author.bot) return;
			const imgUrl: string | string[] =
				message.attachments.size > 0
					? message.attachments.map((att) => att.url)
					: message.content;
			const fixedImg: string = imgUrl[0];
			try {
				Schema.findOne({ Url: fixedImg }, async (err: Error, data) => {
					if (data) {
						data.Url = fixedImg;
						data.Channel = message.channel.id;
						data.save();
					} else {
						new Schema({
							Url: fixedImg,
							Channel: message.channel.id,
						}).save();
					}
					const embed: MessageEmbed = new MessageEmbed()
						.setTitle(
							`:white_check_mark: Successfully uploaded one message to database!`
						)
						.setURL(fixedImg)
						.setImage(fixedImg)
						.setColor('GREY')
						.setTimestamp();
					(debugChannel as TextChannel).send({ embeds: [embed] });
					console.log('Saved one message to database!');
				});
			} catch (err: any) {
				(debugChannel as TextChannel).send({
					content: `An error occured!\n\`\`\`yml\n${err}\n\`\`\``,
				});
				console.log(err);
			}
		}
	},
};
