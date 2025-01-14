module.exports = (Discord, client, message) => {
    const prefix = 'prefix';

    const words = [
        //all the cuss words here with a comma

    ]

    if (!message.content.startsWith(prefix) || message.author.bot) {
        for (const curseWords of words) {
            if (message.content.toLowerCase().includes(curseWords)) {
                curseMsg = message.fetch(message.id)
                if (curseMsg) {
                    message.delete(curseMsg)
                    message.reply("Message deleted,\nPlease don't use the those words unless you want to get **muted** or **banned**");
                }
                else {
                    return;
                }
            } else {
                continue;
            }
        }
        return
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.command.get(cmd) || client.command.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, args, Discord);
    else message.channel.send('No such command exists so far.');
}