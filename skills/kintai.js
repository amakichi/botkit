
// 勤怠登録用mongo生成
var MongoClient = require("mongodb").MongoClient;
 
// 接続文字列
var url = "mongodb://localhost:27017/botkitdb";

// デフォルトの打刻function
function insert(checkInDiv) {
  // MongoDB へ 接続
  MongoClient.connect(url, (error, db) => {
    var collection;
    // コレクションの取得
    collection = db.collection('kintai');
    // 時刻を現在時刻で生成
    var time;
    time = new Date();

    // 打刻のフラグに応じて出勤/退勤を行う
    if (checkInDiv == '出勤') {
      // 出勤の打刻
      // コレクションにドキュメントを挿入
      collection.insertOne({
        "start": time
      }, (error, result) => {
          db.close();
          return false;
        });
    } else {
      // 退勤の打刻
    }
  });
  return true;

}


module.exports = function(controller) {

  controller.hears(['^出勤'], 'direct_message', function(bot, message) {
    if (insert('出勤')) {
      bot.reply(message, '出勤を記録しました。');
    } else {
      bot.reply(message, '打刻に失敗しました。もう一度行って下さい。');
    }
  });

  controller.hears(['^退勤'], 'direct_message', function(bot, message) {
    bot.reply(message, '退勤を記録しました。');
  });

};
