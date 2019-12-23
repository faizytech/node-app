const {SlackService} = require('./slack');
const {GmailService} = require('./gmail');
const {FacebookService} = require('./facebook');

const {UserService} = require('./user');

const fbService = new FacebookService();
const gmailService = new GmailService();
const slackService = new SlackService();

const userService = new UserService(fbService,gmailService,slackService);
userService.login();