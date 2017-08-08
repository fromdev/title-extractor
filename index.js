'use strict'

var request = require('request');
var extractor = require('unfluff');

const extractTitle = function (url, callback) {
    if (url) {
        request(url, function (error, response, html) {
            if (!error) {
                var data = extractor(html);
                console.log(data);
                return callback(data);
            } else {
                console.log(error);
                return callback({"error": 'Error extracting title for ' + url});
            }
        });
    } else {
        return callback({"error": 'Please provide valid URL'});
    }
};

module.exports = extractTitle;

module.exports.extractTitle = extractTitle;

