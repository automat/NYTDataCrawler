//
//
// .
//
//  Created by henryk Wollik on 29.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var NYTCrawler = require('./nyt.crawler.server');
var data       = require('./nyt.crawler.requests');
var NYTAricleSearch = require('./nyt.crawler.article');


var query;

var crawler;
var crawlRequest;

function init()
{
    query = NYTAricleSearch.NYTArticleSearchQuery();

    crawlRequest = data.queries00;
    crawler = new NYTCrawler();
    crawler.setSaveFilePath('../data/');
    crawler.setSaveFilename('war1981-2012.json');
    crawler.setRequestList(crawlRequest);

}

function main()
{
    crawler.crawl();
    //crawler.crawl();

   // crawler.testRequest('/svc/search/v1/article?format=json&api-key=ac4190b51fdaa3113d81a263750fcf16:6:66636531');
    ///svc/search/v1/article?query=war&facets=geo_facet&begin_date=19810101&end_date=19811231&api-key=ac4190b51fdaa3113d81a263750fcf16:6:66636531

    //crawler.testRequest('/svc/search/v1/article?query=war&facets=geo_facet&begin_date=19810101&end_date=19811231&api-key=ac4190b51fdaa3113d81a263750fcf16:6:66636531');
}

init();
main();

