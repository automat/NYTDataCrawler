//
//
// .
//
//  Created by henryk Wollik on 29.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//


function NYTAnalyze()
{
    this._data = null;
}

NYTAnalyze.prototype.setData = function(data)
{
    this._data = data;
};

exports = NYTAnalyze;