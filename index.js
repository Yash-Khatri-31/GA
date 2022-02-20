const {WebClient} = require('@slack/web-api')
const {createEventAdapter} = require('@slack/events-api')
const {exec} = require('child_process')

require('dotenv').config()

const port = 8000;

const slackEvent = createEventAdapter(process.env.SIGNIN_SECRET);
// const client = new WebClient(process.env.SLACK_BOT_TOKEN);

slackEvent.on('app_mention',(event) => {
    let text = event.text;
    text = text.split(' ').slice(0,-1)
    text = text.join(' ')
    console.log(text);

    if(text === 'deploy'){
        console.log('Pushing Code')
        exec(`curl -X POST -H "Accept: application/vnd.github.v3+json" -H "Authorization: token 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" https://api.github.com/repos/Yash-Khatri-31/GA/actions/workflows/main.yml/dispatches -d '{"ref":"main"}'`,{cwd: 'D:/NODEJSCOURSE/GA'},(error,stdout,stderr) => {
            if(error) console.log(error)
        })
        console.log('Done')
    }
})
slackEvent.on('error',console.error)

slackEvent.start(port).then(() => {
    console.log(`listening to port ${port}`)
});


// -d '{"ref":"main"}'