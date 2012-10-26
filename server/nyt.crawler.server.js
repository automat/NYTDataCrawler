//
//
// .
//
//  Created by henryk Wollik on 26.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var http     = require('http'),
    https    = require('https');

function NYTCrawler()
{
    this.__interval    = 2000;
    this.__requestList = null;
    this.__currentPass = -1;
    this.__maxPass     = -1;
    this.__timeout     = null;
    this.__callback    = null;
}

NYTCrawler.prototype.reset = function()
{
    this.__interval    = 2000;
    this.__requestList = null;
    this.__currentPass = -1;
    this.__maxPass     = -1;
    this.__timeout     = null;
    this.__callback    = null;
};

NYTCrawler.prototype.crawl = function()
{

};

NYTCrawler.prototype.getJSON = function(callback)
{
    var options = {host:'api.nytimes.com',path:'/svc/search/v1/article?format=json&api-key=ac4190b51fdaa3113d81a263750fcf16:6:66636531'};
    console.log(options.host+options.path);

    http.get(options,function(res)
    {
        var json = "";

        res.on('data',

            function(chunk)
            {
                json += chunk;
            }
        );

        res.on('end',

            function()
            {
                if(res.statusCode == 200)
                {
                    console.log(json);
                }
            }
        );
    }).on('error',

        function(e)
        {
            console.log('error: ' + e);
        }

    );
};

var crawler = new NYTCrawler();
crawler.getJSON(null);











