const Discord = require('discord.js');
const client = new Discord.Client();

// Set up a Map to store the links that have already been posted
const postedLinks = new Map();

client.on('message', message => {
    // Only process messages that are not from the bot and are in a server (not a DM)
    if (message.author.id === client.user.id || !message.guild) return;

    // Check if the message contains a link
    if (message.content.includes('http')) {
        // Get the link from the message
        const link = message.content.split(' ')[0];

        // Check if the link has already been posted
        if (postedLinks.has(link)) {
            // Remove the message and send a response to the user
            message.delete();
            message.channel.send(`The link ${link} has already been posted in this channel. You can find the original post here: ${postedLinks.get(link)}`);
        } else {
            // Add the link to the Map and store the message's ID
            postedLinks.set(link, message.id);
        }
    }
});

client.login('MTA1NDUwMjY2MDY0NjEyMTU3Mg.GmXgg7.UfCrVZpdyBmvdO7Z_3XLd4XCC6i5C0rR4QC8o8');
