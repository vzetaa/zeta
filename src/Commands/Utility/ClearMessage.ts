import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
    name: 'clear',
    description: 'Clear messages in specified amount',
    aliases: ['cls', 'purge'],
    usage: '<amount 1-100>',
    testOnly: false,
    permissions: ['SEND_MESSAGES', 'MANAGE_MESSAGES'],
    run: async (client, message, args) => {
        const amount = Number(args[0]) || parseInt(args[0]);
        if (isNaN(amount) || !Number.isInteger(amount))
            return message.reply({
                content: `Please enter a number of message to clear!`,
            });
        if (amount < 2 || amount > 100)
            return message.reply({
                content: `Please enter a number of message between 2 and 100`,
            });
        try {
            await message.delete();
            if (message.channel.type === 'GUILD_TEXT')
                await message.channel.bulkDelete(amount).then(async m => {
                    let embed = new MessageEmbed()
                        .setColor('#00ffff')
                        .setDescription(`:white_check_mark:  Cleared **${m.size}**/**${amount}** messages!`);

                    message.channel.send({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 4000));
                });
        } catch (e) {
            console.log(e);
            message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
            });
        }
    },
};
