const yaml = require('js-yaml');
const fs = require('fs');

const {WebClient} = require('@slack/web-api')
const {createEventAdapter} = require('@slack/events-api')

const port = 8000;

const slackEvent = createEventAdapter('3c0f4d61d01a5b207c7135018a6f63f9');
const client = new WebClient('xoxb-3103804815844-3092172404727-AzWbChFBRDLyXX2dXtFajMD3');

slackEvent.on('app_mention',(event) => {
    console.log(`Message is ${event.text} `);

    // let mainText = event.text;
    // let route  = yaml.safeLoad(fs.readFileSync('./.github/workflows/main.yml', 'utf8'));
    // route.jobs.build.steps.with.slackmessage = mainText ;
    // console.log(mainText);
    // console.log(route.jobs.build.steps.with.slackmessage)
    // fs.writeFile('./.github/workflows/main.yml', yaml.safeDump(route));

    (async () => {
        try{
            await client.chat.postMessage({channel:event.channel , text:event.text})
        }catch(error){
            console.log(error.data)
        }
    })();

});

slackEvent.on('error',console.error)

slackEvent.start(port).then(() => {
    console.log(`listening to port ${port}`)
});


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