import { MessageEmbed, TextChannel } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
    name: 'nuke-channel',
    description: 'Nuke a channel by recreating the channel',
    aliases: [],
    usage: '',
    testOnly: false,
    permissions: ['MANAGE_CHANNELS', 'MANAGE_MESSAGES', 'SEND_MESSAGES'],
    run: async (client, message, args) => {
        (message.channel as TextChannel).clone().then(ch => {
            ch.setParent((message.channel as TextChannel).parentId);
            ch.setPosition((message.channel as TextChannel).position);
            message.channel.delete();

            ch.send({
                embeds: [
                    new MessageEmbed()
                        .setTitle(':white_check_mark: Successfully nuked channel!')
                        .setDescription(
                            `Action performed by : ${message.author}\n(_This message will be deleted in 8 seconds_)`
                        )
                        .setColor('RED')
                        .setTimestamp(),
                ],
            }).then(msg => setTimeout(() => msg.delete(), 8000));
        });
    },
};
