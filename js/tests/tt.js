function NYTGraph(parentDomElementId)
{
    this.canvas = new Canvas(parentDomElementId);
    this.ctx    = this.canvas.getContext();
    this.canvas.setSize(this.canvas.parent.offsetWidth,
                        this.canvas.parent.offsetHeight);

    this._data   = [];
    this._dataLength = 0;

    this._segWidth = 0;


    this._margins = {canvas:   {top:30,right:30,bottom:30,left:30},
                     container:{top:30,right:40,bottom:40,left:50},
                     label:    {top:30,left:60},
                     graph:    {top:10,right:0,bottom:0,left:0}};

    this._sizes   = {canvas:   {width:0,height:0},
                     container:{width:0,height:0},
                     inner:    {width:0,height:0},
                     graph:    {width:0,height:0}};



    this._properties = {axis:{X:{},Y:{}}};

    this.axisXProperty   = {showStartEnd:true,
                            frequenceTick:4,
                            frequenceLabel:4,
                            width:1,
                            color:0,
                            mainTick:{size:5,width:2},
                            subTick: {size:0,width:1}};

    this.axisYProperty    = {showStartEnd:true,
                            frequenceTick:2,
                            frequenceLabel:4,
                            width:1,
                            color:0,
                            mainTick:{size:5,width:2},
                            subTick: {size:0,width:1}};

}

NYTGraph.prototype.render = function()
{
    if(this._data.length == 0)return;



    this._updateSizes();

    var c = this.canvas;

    var width,height;

    var marginCanvas    = this._margins.canvas,
        marginContainer = this._margins.container,
        marginLabel     = this._margins.label,
        marginGraph     = this._margins.graph;

    var sizeContainer      = this._sizes.container,
        sizeContainerInner = this._sizes.inner,
        sizeGraph          = this._sizes.graph;

    var axisXProperty = this.axisXProperty,
        axisYProperty = this.axisYProperty;

    var dataResolution = 5;

    var i;
    var j;



    var data = this._data;
    var curData = data[0];
    var curDataLen = curData.results.length;
    var plotPoints = [];

    i = -1;
    while(++i < data.length)
    {
        plotPoints.push([]);
    }

    var curPlotPoints = plotPoints[0];

    var plotSegWidth = sizeGraph.width / (curDataLen - 1);

    var p = {x:0, y:0};

    var dataTotalMax = -Infinity;
    var dataTotalMin =  Infinity;

    i = -1;
    while(++i < data.length)
    {
        dataTotalMax = data[i].max.total > dataTotalMax ? data[i].max.total : dataTotalMax;
        dataTotalMin = data[i].min.total < dataTotalMin ? data[i].min.total : dataTotalMin;
    }

    //Background

    //c.setFill('rgb(213, 217, 222)');
    c.noStroke();
    //c.rect(0,0, c.width, c.height);

    // BEGIN - Canvas
    c.translate(Canvas.POINT_HALF_FLOAT.x,Canvas.POINT_HALF_FLOAT.y);

    c.push();
    {
        width  = sizeContainer.width;
        height = sizeContainer.height;

        // BEGIN - Container-Inner

        c.translate(marginCanvas.left, marginCanvas.top);

        //c.setFill('#F2F4F5');
       // c.rect(0, 0, width, height);

        c.push();
        {
            width  = sizeContainerInner.width;
            height = sizeContainerInner.height;

            // BEGIN - Container-Inner

            c.translate(marginContainer.left, marginContainer.top);
            //c.setStroke('#BAC2C9');
            c.setStroke(color(160));
            //c.setFill('#BAC2C9');
            c.setFill(color(160));

            // BEGIN - Graph

            c.push();
            {
                width  = sizeGraph.width;
                height = sizeGraph.height;

                c.translate(marginGraph.left,marginGraph.top);
                c.line(0,height,width,height);



                c.setTextAlign(Canvas.TEXT_ALIGN_CENTER);

                //drawXAxis



                i = -1;

                while (++i < curDataLen)
                {
                    p.x = i * plotSegWidth;
                    p.y = height;

                    curPlotPoints.push(this._projectValue(i, plotSegWidth, height, curData.results[i].total, dataTotalMax));

                    if(i%axisXProperty.frequenceTick==0 || (i == curDataLen-1 && axisXProperty.showStartEnd))
                    {
                        this._drawAxisXTick(axisXProperty.mainTick,p);
                    }
                    else
                    {
                        this._drawAxisXTick(axisXProperty.subTick, p);
                    }

                    if (i % axisXProperty.frequenceLabel == 0 || (i == curDataLen-1 && axisXProperty.showStartEnd))
                    {
                        c.text(NYTDataScope.YEAR[i], p.x, p.y + axisXProperty.mainTick.size + 15);
                    }


                }



                c.line(0,0,0,height);



                var dataStep = Math.round(height / dataResolution);
                var dataC    = Math.round(dataTotalMax / dataResolution);

                c.setTextBaseLine(Canvas.TEXT_BASELINE_MIDDLE);
                c.setTextAlign(Canvas.TEXT_ALIGN_RIGHT);


                i = -1;
                while(++i < dataResolution + 1)
                {
                    p.x = 0;
                    p.y = height - i * dataStep;

                    c.line(p.x, p.y, p.x-5, p.y);
                    c.text(NYTUtils.roundHundred(dataC * i), p.x - 10, p.y+2);
                }

                i = 0;
                while(++i < curPlotPoints.length)
                {
                    this._drawWeightedLine(curPlotPoints[i-1][0],curPlotPoints[i-1][1],
                                           curPlotPoints[i][0],curPlotPoints[i][1],
                                           curData.results[i-1].total,
                                           curData.results[i].total,
                                           curData.min.total,
                                           dataTotalMax);
                }

                //c.lineArray(plotPoints);

                // END -Graph
            }
            c.pop();

            // END - Container-Inner

        }
        c.pop();

        // End - Container

        // Begin - Label
        c.push();
        {
            c.translate(marginLabel.left,marginLabel.top);

            c.setTextBaseLine(Canvas.TEXT_BASELINE_TOP);
            c.setTextAlign(Canvas.TEXT_ALIGN_LEFT);
            c.setFill('#000000');
            c.text(curData.tokens.toString(),0,0);



        }
        c.pop();

        // End - Label

    }
    c.pop();

    // End - Canvas
};

NYTGraph.prototype._getPlotPoints = function(plotPoints,segwidth,height)
{

};

/*

NYTGraph.prototype._drawAxisX = function(segWidth,height)
{
    var p = {x:0,y:0};
    var i = -1;
    var axisXProperty = this.axisXProperty;
    var dataLen = this._data[0].lekngthg

    while (++i < this._data[0].length)
                    {
                        p.x = i * segWidth;
                        p.y = height;

                        //curPlotPoints.push(this._projectValue(i, plotSegWidth, height, curData.results[i].total, dataTotalMax));

                        if(i%axisXProperty.frequenceTick==0 || (i == curDataLen-1 && axisXProperty.showStartEnd))
                        {
                            this._drawAxisXTick(axisXProperty.mainTick,p);
                        }
                        else
                        {
                            this._drawAxisXTick(axisXProperty.subTick, p);
                        }

                        if (i % axisXProperty.frequenceLabel == 0 || (i == curDataLen-1 && axisXProperty.showStartEnd))
                        {
                            c.text(NYTDataScope.YEAR[i], p.x, p.y + axisXProperty.mainTick.size + 15);
                        }


                    }
};

*/

NYTGraph.prototype._drawWeightedLine = function(x0,y0,x1,y1,value0,value1,minValue,maxValue)
{
    var c = this.canvas;
    var max = 10;
    var i = -1;
    var l = 100;
    var l0 = 100;

    var f;

    var v0,v1;

    c.noStroke();

    i = -1;
    c.setFill('rgba(0,0,0,0.05)');
    while(++i < l0)
    {
        f = NYTUtils.interpolate(value0,value1,i/l)/(maxValue);






        c.circle(NYTUtils.interpolate(x0,x1,i/l0),
                 NYTUtils.interpolate(y0,y1,i/l0)+1,
                 f * max+1);
    }

    i = -1;
        while(++i < l)
        {
            f = NYTUtils.interpolate(value0,value1,i/l)/(maxValue);




            c.setFill('rgb('+ parseInt(f * 255) + ',' + 0/*parseInt(255 - (f * 255))*/ + ',0)');

            c.circle(NYTUtils.interpolate(x0,x1,i/l),
                     NYTUtils.interpolate(y0,y1,i/l),
                     f * max);
        }



};

NYTGraph.prototype._updateSizes = function()
{
    var margins = this._margins;
    var sizes   = this._sizes;

    sizes.canvas.width  = this.canvas.width;
    sizes.canvas.height = this.canvas.height;

    sizes.container.width  = Math.round(sizes.canvas.width  - margins.canvas.left - margins.canvas.right);
    sizes.container.height = Math.round(sizes.canvas.height - margins.canvas.top  - margins.canvas.bottom);

    sizes.inner.width  = Math.round(sizes.container.width  - margins.container.left - margins.container.right);
    sizes.inner.height = Math.round(sizes.container.height - margins.container.top  - margins.container.bottom);

    sizes.graph.width  = Math.round(sizes.inner.width  - margins.graph.left - margins.graph.right);
    sizes.graph.height = Math.round(sizes.inner.height - margins.graph.top  - margins.graph.bottom);

};

NYTGraph.prototype._projectValue = function (index, segWidth, segMaxHeight, value, maxValue)
{
    return [index * segWidth,segMaxHeight- segMaxHeight * value / maxValue];
};

NYTGraph.prototype._drawAxisXTick = function(axisProperty,p)
{
    var c = this.canvas;

    c.line(p.x, p.y, p.x, p.y + axisProperty.size);
};

NYTGraph.prototype.setMarginsCanvas = function(margins)
{
    this._setMargins(margins,this._margins.canvas);
    return this;
};

NYTGraph.prototype.setMarginsContainer = function(margins)
{
    this._setMargins(margins,this._margins.container);
    return this;
};

NYTGraph.prototype.setMarginsLabel = function(margins)
{
    this._setMargins(margins,this._margins.label);
    return this;
};

NYTGraph.prototype.setMarginsGraph = function(margins)
{
    this._setMargins(margins,this._margins.graph);
    return this;
};

NYTGraph.prototype._setMargins = function(margins,dest)
{
    for(var p in margins)dest[p] = margins[p];
};

NYTGraph.prototype.addData = function(data)
{
    if(this._data.length == 0)this._dataLength = data.length;
    else if(this._data.length > 0 && data.length != this._dataLength)throw 'FUCKA';

    this._data.push(data);
    return this;
};

NYTGraph.prototype.setSize = function(width,height)
{
    this.canvas.setSize(width,height);
};//
//
// .
//
//  Created by henryk Wollik on 01.11.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//
