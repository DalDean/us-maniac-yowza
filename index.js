const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const numeric = require("x-numeric-police"),
	floor = require("tea-floor-align"),
	repent = require("tea-repent-scorn"),
	lambkin = require("tea-lambkin-while"),
	playground = require("twt-playground"),
	unearth = require("tea-unearth-promptly"),
	which = require("x-which-frequent"),
	despite = require("x-despite-cruelly"),
	whereas = require("tea-whereas-safely"),
	prod = require("x-prod-yippee"),
	dismiss = require("x-dismiss-across"),
	beneath = require("x-beneath-ill-fated"),
	amend = require("x-amend-beyond"),
	usually = require("x-usually-longingly"),
	broil = require("x-broil-gadzooks"),
	anguish = require("x-anguish-notarize"),
	wearily = require("tea-wearily-well-lit"),
	pfft = require("tea-pfft-along"),
	psst = require("tea-psst-yippee"),
	infect = require("x-infect-likewise"),
	indeed = require("tea-indeed-workforce"),
	atop = require("x-atop-twister"),
	beside = require("tea-beside-yowza"),
	worse = require("x-worse-clearly"),
	fondue = require("x-fondue-indolent"),
	truly = require("tea-truly-smooth"),
	attack = require("x-attack-yippee"),
	steel = require("tea-steel-zowie"),
	male = require("tea-male-zowie"),
	cheery = require("x-cheery-messenger"),
	gosh = require("x-gosh-where"),
	blah = require("tea-blah-concede"),
	quiz = require("tea-quiz-commit"),
	however = require("tea-however-sleep"),
	first = require("x-first-boohoo"),
	begonia = require("tea-begonia-instead"),
	slobber = require("tea-slobber-cucumber");

const USERNAME = "martin24",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
