//
//
// .
//
//  Created by henryk Wollik on 26.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//




function NYTDataCrawler()
{
    this.__interval        = 2000;
    this.__requestList     = null;
    this.__currentPass     = -1;
    this.__maxPass         = -1;
    this.__timeout         = null;
    this.__callback        = null;
    FlyJSONP.init({debug:true});
}

NYTDataCrawler.MSG_CRAWL_BEGIN = 'Preparing data collecting.'
NYTDataCrawler.MSG_CRAWL_END   = 'Data collected.';

NYTDataCrawler.prototype.reset = function()
{
    this.__interval        = 2000;
    this.__currentPass     = -1;
    this.__maxPass         = -1;
    this.__timeout         = null;
    this.__callback        = null;
};

NYTDataCrawler.prototype.setDebug = function(b)
{

};

NYTDataCrawler.prototype.setRequestList = function(list)
{
    this.__requestList = list;
    this.__maxPass = this.__requestList.length;
};

NYTDataCrawler.prototype.crawl = function()
{
    this.__log(NYTDataCrawler.MSG_CRAWL_BEGIN);
    this.__getJSON();
};

NYTDataCrawler.prototype.__getJSON = function()
{
    /*
    this.__continue();
*/

    var currurl = this.__requestList[0];

    console.log(currurl);

    FlyJSONP.get({
        url:currurl,
        success:function (data){this.__onGet(data);},
        error:function (errorMsg){this.__onAbort(errorMsg);this.__abort();}
    });

};

NYTDataCrawler.prototype.__onGet = function(data)
{
    this.__continue();
};

NYTDataCrawler.prototype.__onAbort = function(errorMsg)
{
    console.log(errorMsg)
};

NYTDataCrawler.prototype.__onComplete = function()
{
    this.__abort();
};

NYTDataCrawler.prototype.__continue = function()
{
    if(this.__currentPass == this.__maxPass-1)this.__onComplete();
    this.__currentPass++;
    this.__timeout = setTimeout(this.__getJSON, this.__interval);
};

NYTDataCrawler.prototype.__abort = function()
{
    clearTimeout(this.__timeout);
};

NYTDataCrawler.prototype.__log = function(msg)
{
    console.log(msg);
};
