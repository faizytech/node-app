const { FeedRoutes } = require('./feeds');

const initializeRoutes = routes => {
    new FeedRoutes(routes);
}
module.exports = { initializeRoutes }