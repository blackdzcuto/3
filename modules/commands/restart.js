module.exports.config = {
	name: "khoidong",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Khởi động lại Bot",
	commandCategory: "Dành cho Admin",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`mọi người đợi bé tí bé update nhé !`, threadID, () => process.exit(1));
}