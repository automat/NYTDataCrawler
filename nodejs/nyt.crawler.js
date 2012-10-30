//
//
// .
//
//  Created by henryk Wollik on 26.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var http     = require('http'),
    https    = require('https'),
    fs       = require('fs'),
    nytas    = require('./nyt.crawler.article'),
    scopes   = require('./nyt.crawler.data');

var NYT_API_HOST_URL = 'api.nytimes.com';

var MSG_INIT             = 'Init',
    MSG_FILE_PATH_SET    = 'File path set',
    MSG_FILE_PATH        = '- filepath=',
    MSG_FILE_NAME_SET    = 'File name set',
    MSG_FILE_NAME        = '- filename=',
    MSG_REQUEST_LIST_SET = 'Request list set',
    MSG_REQUEST_LIST     = '- requests=',
    MSG_INTERVAL_SET     = 'Interval set',
    MSG_INTERVAL         = '- interval=',
    MSG_BEGIN_CRAWL      = 'Start crawling ...',
    MSG_COMPLETE_CRAWL   = 'Crawl complete!',
    MSG_CURRENT_PASS     = 'currentPass=',
    MSG_CURRENT_REQUEST  = 'currentRequest=',
    MSG_BEGIN_PASS       = 'Start pass ...',
    MSG_COMPLETE_PASS    = 'Pass complete!',
    MSG_FILE_WRITING     = 'Writing file ...',
    MSG_FILE_COMPLETE    = 'File saved succesfully!',
    MSG_FILE_ERROR       = 'Error! File not saved.',
    MSG_FINISHED         = 'Done!';

function NYTCrawler()
{
    this.__dataRaw        = '';
    this.__outputRAW      = {tokens:[],results:[]};
    this.__interval       = 2000;
    this.__currentRequest = null;
    this.__requestList    = null;
    this.__currentPass    = -1;
    this.__maxPass        = -1;
    this.__timeout        = null;
    this.__callback       = null;
    this.__maxRequests    = 4000;
    this.__outputFilePath = null;
    this.__outputFilename = null;
    this.__options        = {host:NYT_API_HOST_URL,path:'',encoding:'utf8',json:true};
    this.__doLog          = true;
}



NYTCrawler.prototype.setJSONFormat  = function()
{

};

NYTCrawler.prototype.setSaveFilePath = function(path)
{
    this.__outputFilePath = path;

    this.__log(MSG_FILE_PATH_SET);
    this.__log(MSG_FILE_PATH+this.__outputFilePath);

    return this;
};

NYTCrawler.prototype.setSaveFilename = function(name)
{
    this.__outputFilename = name;

    this.__log(MSG_FILE_NAME_SET);
    this.__log(MSG_FILE_NAME+this.__outputFilename);

    return this;
};

NYTCrawler.prototype.setRequestList = function(list)
{
    this.__requestList = list;
    this.__maxPass     = this.__requestList.length;

    this.__log(MSG_REQUEST_LIST_SET);
    this.__log(MSG_REQUEST_LIST + this.__requestList);

    return this;
};

NYTCrawler.prototype.setInterval = function(interval)
{
    this.__interval = interval;

    this.__log(MSG_INTERVAL_SET);
    this.__log(MSG_INTERVAL + this.__interval);

    return this;
};

NYTCrawler.prototype.crawl = function()
{
    this.__log(MSG_BEGIN_CRAWL);

    this.__continue();
};

NYTCrawler.prototype.__onRequestGet = function(chunk)
{
    this.__dataRaw += chunk;
};

NYTCrawler.prototype.__onRequestFinished = function()
{
    this.__log('- '+MSG_COMPLETE_PASS);
    this.__outputRAW.results.push(JSON.parse(this.__dataRaw));
    this.__dataRaw = '';
    this.__continue();
};

NYTCrawler.prototype.__onRequestError = function(error)
{
    console.log(error);
};

NYTCrawler.prototype.__onComplete = function()
{
    this.__log(MSG_COMPLETE_CRAWL);
    this.__log(MSG_FILE_WRITING);

    var t = this;



    fs.writeFile(this.__outputFilePath+this.__outputFilename,JSON.stringify(this.__outputRAW),
    function(error){if(error)t.__log(error + " " + MSG_FILE_ERROR);else t.__onFileWriteComplete();});
};

NYTCrawler.prototype.__onFileWriteComplete = function()
{
    this.__log(MSG_FILE_COMPLETE);
    this.__log(MSG_FINISHED);
};


NYTCrawler.prototype.__continue = function()
{
    if(this.__currentPass == this.__maxPass-1)
    {
        this.__onComplete();
        return;
    }

    this.__currentPass++;
    this.__currentRequest = this.__requestList[this.__currentPass];
    this.__timeout = setTimeout(this.__getJSON.bind(this), this.__interval);
};

NYTCrawler.prototype.__getJSON = function()
{
    this.__log('- '+MSG_BEGIN_PASS);
    this.__log('-- '+MSG_CURRENT_PASS+this.__currentPass);
    this.__log('-- '+MSG_CURRENT_REQUEST+this.__currentRequest);

    this.__options.path = this.__currentRequest;
    var t = this;


    this.__requestHttp(this.__onRequestGet.bind(this),
                       this.__onRequestFinished.bind(this),
                       this.__onRequestError.bind(this));


    /*
    http.get(this.__options,function(res)
    {
        res.on('data',

            function(chunk)
            {
                t.__onRequestGet(chunk);
            }
        );

        res.on('end',

            function()
            {
                if(res.statusCode == 200)
                {
                    t.__onRequestFinished();
                }
            }
        );
    }).on('error',
        function(e)
        {
            t.__onRequestError(e);
        }
    );
    */
};

NYTCrawler.prototype.__requestHttp = function(callbackGet,callbackFinished,callbackError)
{
    http.get(this.__options,function(res)
       {
           res.on('data',function(chunk){callbackGet(chunk);});
           res.on('end', function(){if(res.statusCode == 200){callbackFinished();}});
       }).on('error',function(e){callbackError(e);});
};

NYTCrawler.prototype.testRequest = function(request)
{
    this.__options.path = request;
    var o = '';
    this.__requestHttp(function(chunk){o+=chunk},function(){console.log(o)},null);
};

NYTCrawler.prototype.reset = function()
{
    this.__outputRAW   = '';
        this.__interval    = 2000;
        this.__requestList = null;
        this.__currentPass = -1;
        this.__maxPass     = -1;
        this.__timeout     = null;
        this.__callback    = null;
        this.__maxRequests = 4000;

    return this;
};

NYTCrawler.prototype.description = function()
{
    return "requestList="+this.__requestList+" output="+this.__outputFilePath+this.__outputFilename;
};

NYTCrawler.prototype.__log = function(msg)
{
    if(this.__doLog == true)
    {
        console.log("NYTCrawler: " + msg);
    }
};

module.exports = NYTCrawler;













