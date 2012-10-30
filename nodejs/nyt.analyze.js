//
//
// .
//
//  Created by henryk Wollik on 29.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//


var NYTDataAnalyzer = {};




function TermCountMerger()
{
    this._data = null;
    this._result = {tokens:null,results:[]};

}

TermCountMerger.prototype.setData = function(data)
{
    this._data = data;
};

TermCountMerger.prototype.mergeData = function(data)
{
    this._data = data;
    this._result = {tokens:null,results:[]};

    console.log(this._data[0]);

    /*
    this._result.tokens = this._data[0].tokens;

    var i = -1;
    while(++i < this._data.length)
    {
        this._result.results.push({year: this._data[i].results[0].date.substr(0,4),
                                   total:this._data[i].total});
    }
*/
    return this._result;


};

NYTDataAnalyzer.TermCountMerger = TermCountMerger;

exports.NYTDataAnalyzer = NYTDataAnalyzer;
