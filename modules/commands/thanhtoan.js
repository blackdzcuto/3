 module.exports.config = {
  name: "thanhtoan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Huycutephomaique1",
  description: "Thông tin admin bot ^^",
  commandCategory: "thanhtoan",
  usages: "thanhtoan",
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
"https://i.postimg.cc/mgqJ6qtq/Thu-Bot1.png",
     ];
     var callback = () => api.sendMessage({body:`梁𝕋ℍ𝔸ℕℍ 𝕋𝕆𝔸́ℕ 𝕆ℕ𝕃ℕ𝔼梁
✔ATM:
💳vtb: 108873158562
📲Momo: 0338739954
Nội Dung Chuyển Tiền : 
dãy số trên bot gửi là nội dung chuyển tiền.
----𝕹𝖌𝖚𝖞ễ𝖓 𝕷𝖎ê𝖓 𝕸ạ𝖓𝖍----`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));
  api.sendMessage(event.threadID, event.threadID);
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };