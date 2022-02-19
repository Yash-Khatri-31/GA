const {exec} = require('child_process')

exec('git push',{cwd: 'D:/NODEJSCOURSE/GA'},(error,stdout,stderr) => {
    if(error) console.log(error)
    console.log(stdout)
})