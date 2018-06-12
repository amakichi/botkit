module.exports = function(controller) {

  controller.hears(['^出勤', '^退勤'], 'direct_message', function(bot, message) {
      if (message.match('出勤')) {
          bot.reply(message, '出勤を記録しました。');
      } else if (message.match('退勤')) {
          bot.reply(message, '退勤を記録しました。');
      }
  });

};
