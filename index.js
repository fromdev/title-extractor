'use strict'

var request = require('request');
var extractor = require('unfluff');

const extractTitle = function (req, res) {
    var url = req.query.u;
    if (url) {
        request(url, function (error, response, html) {
            if (!error) {
                var data = extractor(html);
                console.log(data);
                return res.send(data);
            } else {
                console.log(error);
                return res.send({"error": 'Error extracting title for ' + url});
            }
        });
    } else {
        return res.send({"error": 'Please provide valid URL'});
    }
};

module.exports = extractTitle;

module.exports.extractTitle = extractTitle;

