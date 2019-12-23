const { FeedsRepo } = require('../repo');
const {InvalidContentFeed} = require('../errors');

class FeedsService {
    constructor() {
        this.feedsRepo = new FeedsRepo();
    }


    getFeeds() {
        return this.feedsRepo.getFeeds();
    }

    postFeeds(feed) {
        if(!feed) {
            throw new InvalidContentFeed("empty content");
        }
        return this.feedsRepo.postFeed(feed);
    }
}
module.exports = { FeedsService };