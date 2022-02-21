const {WebClient} = require('@slack/web-api')
const {createEventAdapter} = require('@slack/events-api')
const {exec} = require('child_process')
const {Octokit} = require('@octokit/rest')

require('dotenv').config()

const port = 8000;

const web = new WebClient(process.env.SLACK_BOT_TOKEN)
const slackEvent = createEventAdapter(process.env.SIGNIN_SECRET);
const octokit = new Octokit();
// const client = new WebClient(process.env.SLACK_BOT_TOKEN);

slackEvent.on('app_mention',async (event) => {
    let text = event.text;
    text = text.split(' ').slice(0,-1)
    text = text.join(' ')
    console.log(text);

    if(text === 'deploy'){
        await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
            headers: {authorization: `token ${process.env.CODE}`},
            owner: 'Yash-Khatri-31',
            repo: 'GA',
            workflow_id: 'main.yml',
            ref: 'main'
          })
    }
})
slackEvent.on('error',console.error)

slackEvent.start(port).then(() => {
    console.log(`listening to port ${port}`)
});