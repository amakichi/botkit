module.exports = function(controller) {

  controller.hears(['^出勤'], 'direct_message', function(bot, message) {
    bot.reply(message, '出勤を記録しました。');
  });

  controller.hears(['^退勤'], 'direct_message', function(bot, message) {
    bot.reply(message, '退勤を記録しました。');
  });

};
