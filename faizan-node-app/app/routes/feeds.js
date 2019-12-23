const { FeedsController } = require('../controllers');

class FeedRoutes{
    constructor(router){

        this.feedController = new FeedsController();
        this.router = router;
        this.registerRoutes()
        
        this.feeds = [];
    }

    registerRoutes(){
        this.router.get("/api/v1/feeds/",(req,res) => this.feedController.getFeeds(req,res))
        this.router.post("/api/v1/feeds/",(req,res) => this.feedController.postFeeds(req,res))
    }

    
}
module.exports = {FeedRoutes}