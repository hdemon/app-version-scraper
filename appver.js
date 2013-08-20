#! /usr/bin/env node

var request = require('request'),
    cheerio = require('cheerio'),
    optimist = require('optimist');

var argv = optimist.argv,
    id = argv._,
    type = argv.type;

if (type === "android") {
  request("https://play.google.com/store/apps/details?id=" + argv._ , function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      console.log($('div[itemprop="softwareVersion"]').text().slice(1));
    }
  })
} else if (type === "ios") {
  request("https://itunes.apple.com/jp/app/id"+ argv._ , function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      console.log($('li.release-date').next().text().slice("バージョン: ".length));
    }
  })
}
