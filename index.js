const text = 'Hello Sir';

module.exports = text;











// const Slack = require('slack-node');

// const token = "xoxb-3103804815844-3090836486951-E6oNLfteiLIZmgODt3nZg0Zq"

// const slack = new Slack(token);

// slack.api('chat.postMessage', {
//     text:'Yo',
//     channelid:'C032NCAKJPR'
// },function(err,res){
//     console.log(res)
// });

// // const {WebClient, ErrorCode} = require('@slack/web-api');

// // const web = new WebClient(token);

// // const channelId = 'C032NCAKJPR';

// // (async () => {
// //     const result = await web.chat.postMessage({
// //         text:'yo',
// //         channel:channelId
// //     })
// //     console.log(`${result.ts}`)
// // })();