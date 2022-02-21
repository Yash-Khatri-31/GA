const {exec} = require('child_process');

exec(`curl -X POST -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${process.env.CODE}" https://api.github.com/repos/Yash-Khatri-31/GA/actions/workflows/main.yml/dispatches -d "{\"ref\":\"main\"}"`,{cwd: 'D:/NODEJSCOURSE/GA'},(error,stdout,stderr) => {
            if(error) console.log(error)
})

// curl -X POST -H "Accept: application/vnd.github.v3+json" -H "Authorization: token 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" https://api.github.com/repos/Yash-Khatri-31/GA/actions/workflows/main.yml/dispatches -d "{\"ref\":\"main\"}"