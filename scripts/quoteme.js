// Description:
//   Hubot will give a random quote from a movie you name
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot is it weekend ?  - returns whether is it weekend or not
//   hubot is it holiday ?  - returns whether is it holiday or not

var jsdom = require('jsdom');

module.exports = function(robot) {
    robot.respond(/quote me (.*)/i, function(msg) {
    	var movie = msg.match[1].trim(),
    	movie = movie.toLowerCase();

    	robot.http("http://www.moviequotedb.com/browse.html")
    		.get(function(err, res, body) {
    			if (err) {
    				return msg.reply("Something went wrong because I was coded by a total fuckwit");
    			} else {
    				jsdom.env(
					  body,
					  ["http://code.jquery.com/jquery.js"],
					  function (err, window) {
					    var movie;

					    $('content').find('a').each(function(e) {

					    });
					  }
					);
    			}
    		});
    });
}