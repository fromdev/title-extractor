'use strict'

var request = require('request');
var extractor = require('unfluff');

const extractTitle = function (url) {
    return new Promise((resolve, reject) => {
        if (url) {
            request(url, function (error, response, html) {
                if (!error) {
                    var data = extractor(html);
                    console.log(data);
                    return resolve(data);
                } else {
                    console.log(error);
                    return reject({"error": 'Error extracting title for ' + url});
                }
            });
        } else {
            return reject({"error": 'Please provide valid URL'});
        }
    });
}

module.exports = {
    extractTitle: extractTitle
};
