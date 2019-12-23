class GmailService{
    constructor(conf){
        this.conf = conf
    }

    notify(user){
        this.__sendHttpRequest(user).then(()=>{
            console.log('Gmail notification',user)
        })
    }

    __sendHttpRequest(){
        return Promise.resolve();
    }
}

module.exports = {GmailService};