//
//
// .
//
//  Created by henryk Wollik on 29.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var NYTCrawler = require('./nyt.crawler.server');

var crawler;

function init()
{
    crawler = new NYTCrawler();
    crawler.setSaveFilePath('../data/');
    crawler.setSaveFilename('test.json');
    crawler.setRequestList(['/svc/search/v1/article?format=json&api-key=ac4190b51fdaa3113d81a263750fcf16:6:66636531',
        '/svc/search/v1/article?format=json&api-key=ac4190b51fdaa3113d81a263750fcf16:6:66636531']);

}

function main()
{
    //console.log(crawler.description());
    crawler.crawl();
}

init();
main();

