//
//
// .
//
//  Created by henryk Wollik on 25.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var NYTUtils = {};

NYTUtils.throwException = function(message,hint,object)
{
    throw message.replace("%@",object)+hint;

    /*
    var e='',i=-1,l=arguments.length;
    while(++i<l)e+=arguments[i];
    throw e;
    */
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
    this.__text = arguments.length > 0 ? arguments[0] : "";
}

MutableString.prototype.set = function(text)
{
    this.__text = text;
};

MutableString.prototype.charAt = function(index)
{
    return this.__text.charAt(index);
};

MutableString.prototype.charCodeAt = function(index)
{
    return this.__text.charCodeAt(index);
};

MutableString.prototype.concat = function()
{
    return new MutableString(this.__text.concat(arguments));
};

MutableString.prototype.indexOf = function(searchvalue,start)
{
    return this.__text.indexOf(searchvalue,start);
};

MutableString.prototype.lastIndexOf = function(searchvalue,start)
{
    return this.__text.lastIndexOf(searchvalue,start);
};

MutableString.prototype.match = function(regex)
{
    return this.__text.match(regex);
};

MutableString.prototype.replace = function(searchvalue,newvalue)
{
    return this.__text.replace(searchvalue,newvalue);
};

MutableString.prototype.search = function(searchvalue)
{
    return this.__text.search(searchvalue);
};

MutableString.prototype.slice = function(start,end)
{
    return new MutableString(this.__text.slice(start,end));
};

MutableString.prototype.split = function(separator,limit)
{
    return this.__text.split(separator,limit);
};

MutableString.prototype.substr = function(start,length)
{
    return this.__text.substr(start,length);
};

MutableString.prototype.substring = function(from, to)
{
    return this.__text.substr(from, to);
};

MutableString.prototype.toLowerCase = function()
{
    return this.__text.toLowerCase();
};

MutableString.prototype.toUpperCase = function()
{
    return this.__text.toUpperCase();
};


MutableString.prototype.size = function()
{
   return this.__text.length;
};


MutableString.prototype.append = function(string)
{
    this.__text += string;
};

MutableString.prototype.prepend = function(string)
{
   this.__text = string + this.__text;
};

MutableString.prototype.clear = function()
{
    this.__text = "";
};

MutableString.prototype.copy = function()
{
    return new MutableString(this.__text);
};

MutableString.prototype.toString = function()
{
    return this.__text;
};