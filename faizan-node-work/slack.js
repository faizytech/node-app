class SlackService{
    constructor(conf){
        this.conf = conf
    }

    notify(user){
        this.__sendHttpRequest(user).then(()=>{
            console.log('slack notification',user)
        })
    }

    __sendHttpRequest(){
        return Promise.resolve();
    }
}

module.exports = {SlackService};