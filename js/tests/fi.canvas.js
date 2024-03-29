//
//
// .
//
//  Created by henryk Wollik on 30.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//


_InternalCanvasOptions = {};

_InternalCanvasOptions.DEFAULT_WIDTH  = 300;
_InternalCanvasOptions.DEFAULT_HEIGHT = 300;

/*
 *
 *  Convenience wrapper for canvas
 *
 */

function Canvas(parentDomElementId)
{
    this.parent = document.getElementById(parentDomElementId);
    this._size = {width:300, height:300};
    this._canvas = document.createElement('canvas');
    this.setSize(_InternalCanvasOptions.DEFAULT_WIDTH,
                 _InternalCanvasOptions.DEFAULT_HEIGHT);
    this._canvas.style.position = 'absolute';
    this._canvas.style.left = '0px';
    this._canvas.style.top = '0px';
    this.parent.appendChild(this._canvas);
    this.context = this._canvas.getContext('2d');

    this._fontProperties = {style:'', weight:'bold', size:20, family:'Arial'};
    this._textProperties = {lineHeight:1};
    this._applyFontStyle();
}

/*
 *
 *  Font
 *
 */

Canvas.FONT_STYLE_NON_ITALIC = '';
Canvas.FONT_STYLE_ITALIC = 'italic';
Canvas.FONT_WEIGHT_REGULAR = 'normal';
Canvas.FONT_WEIGHT_BOLD = 'bold';

Canvas.prototype.setFontStyle = function (style)
{
    this._fontProperties.style = style;
    this._applyFontStyle();
};

Canvas.prototype.setFontWeight = function (weight)
{
    this._fontProperties.weight = weight;
    this._applyFontStyle();
};

Canvas.prototype.setFontSize = function (size)
{
    this._fontProperties.size = size;
    this._applyFontStyle();
};

Canvas.prototype.setFontFamily = function (family)
{
    this._fontProperties.family = family;



    this._applyFontStyle();
};

Canvas.prototype.setFontProperties = function (fontProperties)
{
    for (var p in fontProperties)
    {
        this._fontProperties[p] = fontProperties[p];
    }

    this._applyFontStyle();
};

Canvas.prototype._applyFontStyle = function ()
{
    this.context.font =

        this._fontProperties.weight + " " +
            this._fontProperties.size + "px " +
            this._fontProperties.family;

};

/*
 *
 *  Text
 *
 */

Canvas.TEXT_BASELINE_BOTTOM = 'bottom';
Canvas.TEXT_BASELINE_TOP = 'top';
Canvas.TEXT_BASELINE_MIDDLE = 'middle';

Canvas.TEXT_ALIGN_START = 'start';
Canvas.TEXT_ALIGN_END = 'end';
Canvas.TEXT_ALIGN_LEFT = 'left';
Canvas.TEXT_ALIGN_RIGHT = 'right';
Canvas.TEXT_ALIGN_CENTER = 'center';

Canvas.prototype.setTextBaseLine = function (textBaseLine)
{
    this.context.textBaseline = textBaseLine;
};

Canvas.prototype.setTextAlign = function (textAlign)
{
    this.context.textAlign = textAlign;
};

Canvas.prototype.setTextLineHeight = function(lineHeight)
{
    this._textProperties.lineHeight = lineHeight;

};

Canvas.prototype.text = function (string, x, y)
{
    this.context.fillText(string, Math.round(x) - 0.5, Math.round(y) - 0.5);
};

Canvas.prototype.textWrap = function(string,x,y,width,height)
{
    var ctx = this.context;
    var lines   = this._wrapText(string,width - ctx.measureText('A').width);
    var size    = this._fontProperties.size;
    var lHeight = this._textProperties.lineHeight;
    var cHeight = 0;
    var rHeight = 0;
    lines.forEach(function(line,i){cHeight=i*size*lHeight;rHeight+=cHeight;ctx.fillText(line,x,y+cHeight);});

    return rHeight*0.5;
};

Canvas.prototype.textWrapWithBackgroundColor = function(string,x,y,width,height,textColor,backColor)
{
    var ctx = this.context;
    var lines   = this._wrapText(string,width - ctx.measureText('A').width);
    var size    = this._fontProperties.size;
    var lHeight = this._textProperties.lineHeight;
    var cHeight = 0;
    var rHeight = 0;
    lines.forEach(function (line, i)
    {
        ctx.fillStyle = backColor;
        cHeight = i * size * lHeight;
        rHeight += cHeight;
        ctx.fillRect(x, y, ctx.measureText(line).width, cHeight);
        ctx.fillStyle = textColor;
        ctx.fillText(line, x, y + cHeight);
    });

    return rHeight*0.5;
};


Canvas.prototype.getTextWidth = function (string)
{
    var metrics = this.context.measureText(string);
    return metrics.width;
};

Canvas.prototype.getTextHeight = function ()
{
    return this._fontProperties.size;
};

Canvas.prototype.getTextWidth = function (string)
{
    return this.context.measureText(string).width;
};

Canvas.prototype._wrapText = function(text, maxWidth) {

    var ctx = this.context;

    var words = text.split(' '),
        lines = [],
        line = "";
    if (ctx.measureText(text).width < maxWidth) {
        return [text];
    }
    while (words.length > 0) {
        while (ctx.measureText(words[0]).width >= maxWidth) {
            var tmp = words[0];
            words[0] = tmp.slice(0, -1);
            if (words.length > 1) {
                words[1] = tmp.slice(-1) + words[1];
            } else {
                words.push(tmp.slice(-1));
            }
        }
        if (ctx.measureText(line + words[0]).width < maxWidth) {
            line += words.shift() + " ";
        } else {
            lines.push(line);
            line = "";
        }
        if (words.length === 0) {
            lines.push(line);
        }
    }
    return lines;
};

/*
 *
 *  Size
 *
 */

Canvas.prototype.getSize = function ()
{
    return {width:this._size.width, height:this._size.height};
};

Canvas.prototype.setSize = function (width, height)
{
    this._size.width = width;
    this._size.height = height;

    this._canvas.style.width = this._size.width + 'px';
    this._canvas.style.height = this._size.height + 'px';

    this._canvas.width = parseInt(this._canvas.style.width) * 2;
    this._canvas.height = parseInt(this._canvas.style.height) * 2;

    this._canvas.getContext('2d').scale(2, 2);

    this.width = this._size.width;
    this.height = this._size.height;
};

/*
 *
 *  Context
 *
 */

Canvas.prototype.getContext = function ()
{
    return this.context;
};

/*
 *
 *  Primitives
 *
 */

Canvas.prototype.line = function (x0, y0, x1, y1)
{
    var ctx = this.context;

    ctx.moveTo(Math.round(x0), Math.round(y0));
    ctx.lineTo(Math.round(x1), Math.round(y1));
    this.stroke();

};

Canvas.prototype.lineArray = function (array)
{
    var ctx = this.context;
    var i = 0;

    ctx.beginPath();
    ctx.moveTo(array[0][0], array[0][1]);
    while (++i < array.length)
    {
        ctx.lineTo(array[i][0], array[i][1]);
    }

    this.stroke();
};

Canvas.prototype.polygon = function (array)
{
    var ctx = this.context;
    var i = 0;

    ctx.moveTo(array[0][0], array[0][1]);
    while (++i < array.length)
    {
        ctx.lineTo(array[i][0], array[i][1]);
    }
    ctx.moveTo(array[array.length - 1][0], array[array.length - 1][1]);

    this.stroke();
    this.fill();
};

Canvas.prototype.circle = function (x, y, radius)
{
    var ctx = this.context;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();

    this.stroke();
    this.fill();
};

Canvas.prototype.rect = function (x, y, width, height)
{
    var ctx = this.context;

    ctx.fillRect(Math.round(x) - 0.5, Math.round(y) - 0.5, width, height);
    ctx.strokeRect(Math.round(x), Math.round(y), width, height);
};

/*
 *
 *  Context Tools
 *
 */

Canvas.POINT_HALF_FLOAT = {x:0.5, y:0.5};

Canvas.prototype.push = function ()
{
    this.context.save();
};

Canvas.prototype.pop = function ()
{
    this.context.restore();
};

Canvas.prototype.translate = function (x, y)
{
    this.context.translate(x, y);
};

Canvas.prototype.scale = function (s)
{
    this.context.scale(s);
};

Canvas.prototype.fill = function ()
{
    this.context.fill();
};

Canvas.prototype.setFill = function (fillStyle)
{
    this.context.fillStyle = fillStyle ? fillStyle : this.context.fillStyle;
};

Canvas.prototype.noFill = function ()
{
    this.context.fillStyle = 'rgba(0,0,0,0)';
};

Canvas.prototype.stroke = function ()
{
    this.context.stroke();
};

Canvas.prototype.setStroke = function (strokeStyle)
{
    this.context.strokeStyle = strokeStyle ? strokeStyle : this.context.strokeStyle;
};

Canvas.prototype.noStroke = function ()
{
    this.context.strokeStyle = 'rgba(0,0,0,0)';
};

function color()
{
    var r, g, b, a = 1.0;
    var s = 'rgba';

    switch (arguments.length)
    {
        case 1:
            r = g = b = arguments[0];
            break;
        case 2:
            r = g = b = arguments[0];
            a = arguments[1];
            break;
        case 3:
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            break;
        case 4:
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            a = arguments[3];
            break;
    }

    return s + '(' + r + ',' + g + ',' + b + ',' + a + ')';
}
