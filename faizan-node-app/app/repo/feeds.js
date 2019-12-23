class FeedsRepo {
    constructor() {
      this.feeds = [];
    }
  
    getFeeds() {
      return this.feeds;
    }
  
    postFeed(feed) {
      this.feeds.push(feed);
    }
  }
  
  module.exports = { FeedsRepo };