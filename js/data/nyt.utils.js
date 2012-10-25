//
//
// .
//
//  Created by henryk Wollik on 25.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//


function _exception()
{
    var m = '';
    var i = -1;
    while(++i < arguments.length)
    {
        m += arguments[i];
    }

    throw m;
}

function _equalsObjectInList()
{
    var param = arguments[0];
    var b = false;
    var i = 0;
    while(++i < arguments.length)
    {
        if(param == arguments[i])
        {
            b = true;
            break;
        }
    }
    return b;
}

