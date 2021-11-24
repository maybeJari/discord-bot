module.exports = async (client: { guilds: { cache: { forEach: (arg0: (guild: { memberCount: number; }) => void) => void; size: any; }; }; user: { setPresence: (arg0: { activities: { name: string; type: string; }[]; }) => void; }; }) => {
    let statuses = 0;
    setInterval(async () => {

        let count = 0;

        client.guilds.cache.forEach((guild: { memberCount: number; }) => {
	    count += guild.memberCount;
	    });

        const arrayOfStatus = [
            `over ${client.guilds.cache.size} servers!`,
            `over ${count} users!`,
            `default Prefix is: 'h!'`,
        ];
        
        statuses++;
        if (statuses >= arrayOfStatus.length) statuses = 0;
        const status = arrayOfStatus[statuses];
        // console.log(status)
        client.user?.setPresence({
            activities: [
                {
                    name: status,
                    type: 'WATCHING'
                },
            ],
        })
    }, 60000)
}