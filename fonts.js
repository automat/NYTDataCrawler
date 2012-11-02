//
//
// .
//
//  Created by henryk Wollik on 02.11.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var Fonts = {};

Fonts._families = [];
Fonts._css = [];

Fonts.addFont = function()
{
    var i = -1;
    while(++i < arguments.length)
    {
        Fonts._families.push(arguments[i]);
    }
};

Fonts.addSourceCss = function()
{
    var i = -1;
    while(++i < arguments.length)
    {
        Fonts._css.push(arguments[i]);
    }
};


Fonts.init = function(callback)
{
   WebFontConfig = {
        custom:{
            families:Fonts._families,
            urls:    Fonts._css
        },
        active:callback
    };
    (function ()
    {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
}