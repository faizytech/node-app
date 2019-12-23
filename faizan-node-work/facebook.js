class FacebookService{
    constructor(conf){
        this.conf = conf
    }

    notify(user){
        this.__sendHttpRequest().then(()=>{
            console.log('facebook notification',$user)
        })
    }

    __sendHttpRequest(){
        return Promise.resolve();
    }
}
module.exports = {FacebookService};