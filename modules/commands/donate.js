 module.exports.config = {
  name: "donate",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Huycutephomaique1",
  description: "Thông tin admin bot ^^",
  commandCategory: "Tiện ích",
  usages: "donate",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/rpZPmTFh/nh.png",
     ];
     var callback = () => api.sendMessage({body:`梁Ủ𝐍𝐆 𝐇Ộ 𝐀𝐃𝐌𝐈𝐍 𝐌𝐔𝐀 𝐌Ì 𝐓Ô𝐌梁
✔ᴅᴏɴᴀᴛᴇ:
💳vtb: 108873158562
📲Momo: 0338739954
Nội Dung Chuyển Tiền : Tên box + tên QTV box
----𝕹𝖌𝖚𝖞ễ𝖓 𝕷𝖎ê𝖓 𝕸ạ𝖓𝖍----`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
