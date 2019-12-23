const {FeedsService} = require('../services');

class FeedsController
{
    constructor(){
        this.feedsService = new FeedsService();
    }

    getFeeds(req, res) {
        res.json({"feeds": this.feedsService.getFeeds()})
    }
  
    postFeeds(req, res) {
      console.log(req.body);
        this.feedsService.postFeeds(req.body);
        // this.getFeeds();
        res.json({"created": true, feeds: this.feedsService.getFeeds()})
    }
}

module.exports = { FeedsController }