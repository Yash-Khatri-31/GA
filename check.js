const {exec} = require('child_process');

exec(process.env.CODE, {cwd: 'D:/NODEJSCOURSE/GA'},(error,stdout,stderr) => {
    if(error) console.log(error)
    console.log(stdout)
})