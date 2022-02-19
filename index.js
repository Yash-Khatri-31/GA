
const { exec } = require('child_process');

const {WebClient} = require('@slack/web-api')
const {createEventAdapter} = require('@slack/events-api')

require('dotenv').config()

const port = 8000;

const slackEvent = createEventAdapter(process.env.SIGNIN_SECRET);
const client = new WebClient(process.env.SLACK_BOT_TOKEN);

slackEvent.on('message',(event) => {
    if(event.text === 'deploy'){

    }
})

slackEvent.on('error',console.error)

slackEvent.start(port).then(() => {
    console.log(`listening to port ${port}`)
});