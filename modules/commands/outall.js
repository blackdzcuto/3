module.exports.config = {
  name: "outall",
  version: "1.0.0", 
  hasPermssion: 2,
  credits: "Mirai",
  description: "out all box",
  commandCategory: "Hệ thống",
  usages: "outall [Text]",
  cooldowns: 5,
};
module.exports.run = async ({ api, event, args }) => {
  const fs = global.nodemodule["fs-extra"];
  const permission = ["100022938713167"];
	if (!permission.includes(event.senderID)) return api.sendMessage("CẢM ƠN BẠN ĐÃ TIN DÙNG BOT BẠN CÓ NHU CẦU THUÊ BOT THÌ LIÊN HỆ ZALO 0338739954", event.threadID, event.messageID);

  return api.getThreadList(100, null, ["INBOX"], (err, list) => {
    if (err) throw err;
    list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ?
      api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
    api.sendMessage('Đã nhận lệnh out all nhóm ', event.threadID);
  });
}