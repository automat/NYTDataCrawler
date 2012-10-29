//
//
// .
//
//  Created by henryk Wollik on 29.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var NYTCrawler = require('./nyt.crawler');
var data       = require('./nyt.crawler.requests');
var nytas      = require('./nyt.crawler.article');
var NYTAnalyze = require('./nyt.analyze');
var scopes     = require('./nyt.crawler.data');
var testJSON   = require('../data/term_peace_germany_scope_complete.json');


function crawl()
{
    var query;

    var crawler;
    var crawlRequest;

    var yearScope = scopes.SCOPES_YEAR;
    var dateScope = scopes.SCOPES_DATE;

    var searchQueries = [
        ["weapons of mass destruction"]
    ];

    var returnFacets = [new nytas.NYTFacet(nytas.RETURN_GEO)];

    query = nytas.NYTArticleSearchQuery.query();

    var requestPaths = [];

    var i = -1;

    while (++i < yearScope.length)
    {
        query.clear();
        requestPaths.push(query.searchKeywords(searchQueries[0])
                               //.addReturnFacetes(returnFacets)
                               .setDateBegin(yearScope[i] + dateScope[0])
                               .setDateEnd(yearScope[i] + dateScope[1])
                               .requestPath()
                               .toString());
    }

    crawlRequest = requestPaths;

    crawler = new NYTCrawler();

    crawler.setInterval(500)
           .setSaveFilePath('../data/')
           .setSaveFilename('term_weapons_of_mass_destruction_scope_complete.json')
           .setRequestList(crawlRequest)
           .crawl();
}

function convert()
{
    var s = new NYTAnalyze.NYTDataAnalyzer.TermCountMerger();

   // s.mergeData(testJSON);

    console.log(testJSON);

}

function main()
{
    //convert();
    crawl();
}


main();

