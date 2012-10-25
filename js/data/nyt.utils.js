//
//
// .
//
//  Created by henryk Wollik on 25.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var NYTUtils = {};

NYTUtils.throwException = function()
{
    var e='',i=-1,l=arguments.length;
    while(++i<l)e+=arguments.length;
    throw e;
};


NYTUtils.objectEqualsObjects = function()
{
    var o=arguments[0],i=-1,l=arguments.length;
    while(++i<l)if(o==arguments[i])return true;return false;
};

NYTUtils.logArgs = function(args)
{
    console.log.apply(console,args);
};

function MutableString()
{
    this.text = arguments.length > 0 ? arguments[0] : "";
}

MutableString.prototype.charAt = function(index)
{
    return this.text.charAt(index);
};

MutableString.prototype.charCodeAt = function(index)
{
    return this.text.charCodeAt(index);
};

MutableString.prototype.concat = function()
{
    return new MutableString(this.text.concat(arguments));
};

MutableString.prototype.indexOf = function(searchvalue,start)
{
    return this.text.indexOf(searchvalue,start);
};

MutableString.prototype.lastIndexOf = function(searchvalue,start)
{
    return this.text.lastIndexOf(searchvalue,start);
};

MutableString.prototype.match = function(regex)
{
    return this.text.match(regex);
};

MutableString.prototype.replace = function(searchvalue,newvalue)
{
    return this.text.replace(searchvalue,newvalue);
};

MutableString.prototype.search = function(searchvalue)
{
    return this.text.search(searchvalue);
};

MutableString.prototype.slice = function(start,end)
{
    return new MutableString(this.text.slice(start,end));
};

MutableString.prototype.split = function(separator,limit)
{
    return this.text.split(separator,limit);
};

MutableString.prototype.substr = function(start,length)
{
    return this.text.substr(start,length);
};

MutableString.prototype.substring = function(from, to)
{
    return this.text.substr(from, to);
};

MutableString.prototype.toLowerCase = function()
{
    return this.text.toLowerCase();
};

MutableString.prototype.toUpperCase = function()
{
    return this.text.toUpperCase();
};

//noinspection JSValidateTypes
MutableString.prototype.length = function()
{
    return this.text.length;
};

MutableString.prototype.append = function(string)
{
    this.text += string;
};

MutableString.prototype.toString = function()
{
    return this.text;
};