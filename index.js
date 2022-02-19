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
        exec('npm run push2',{cwd: 'D:/NODEJSCOURSE/GA'},(error,stdout,stderr) => {
            if(error) console.log(error)
        })
        console.log('Done')
    }
})
slackEvent.on('error',console.error)

slackEvent.start(port).then(() => {
    console.log(`listening to port ${port}`)
});




    // if(text === 'how are you'){
    //     console.log('Pushing Code 2')
    //     exec('npm run push3',{cwd: 'D:/NODEJSCOURSE/GA'},(error,stdout,stderr) => {
    //         if(error) console.log(error)
    //     })
    //     console.log('Done 2')
    // }