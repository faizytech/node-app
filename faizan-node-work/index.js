
class UserService{
    constructor(slack,gmail,facebook){
        this.slack = slack;
        this.gmail = gmail;
        this.facebook = facebook;
    }

    login(){
        return this.getUser().then()
    }

    getUser(user){
        // return Promise.resolve(
        // {
        //     'hasFacebookLinked' : true,
        //     'hasGmailLinked' : true,
        //     'hasSlackLinked' : true,
        //     'Name' : 'Faizan',
        //     'Age' : '32'
        // });
        return {
            'hasFacebookLinked' : true,
            'hasGmailLinked' : true,
            'hasSlackLinked' : true,
            'Name' : 'Faizan',
            'Age' : '32'
        };
    }
}
module.exports = {UserService};