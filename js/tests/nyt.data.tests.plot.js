//
//
// .
//
//  Created by henryk Wollik on 30.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//




function NYTTestPlot(id)
{
    this.graph = new NYTGraph(id,window.innerWidth,window.innerHeight);
    this.graph.setData(this.mergeData(term_terrorist_scope_complete,'terrorist'));
    this.graph.render();

    window.addEventListener('resize',this.onResize.bind(this));
}


function NYTGraph(parentDomElementId,width,height)
{
    this.canvas = new Canvas(parentDomElementId);
    this.ctx    = this.canvas.getContext();
    this.canvas.setSize(width,height);

    this._data   = null;

    this._margins = {canvas:   {top:30,right:30,bottom:30,left:30},
                     container:{top:30,right:40,bottom:40,left:50},
                     label:    {top:30,left:60},
                     graph:    {top:0,right:0,bottom:0,left:0}};

    this._sizes   = {canvas:   {width:0,height:0},
                     container:{width:0,height:0},
                     inner:    {width:0,height:0},
                     graph:    {width:0,height:0}};

    this._properties = {axis:{X:{},Y:{}}};

    this.axisXProperty   = {showStartEnd:true,
                            frequenceTick:2,
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


NYTGraph.prototype.setData = function(data)
{
    this._data = data;
};

NYTGraph.prototype.render = function()
{
    if(!this._data)return;

    this._updateSizes();

    var c = this.canvas;

    var width,height;

    var marginCanvas  = this._margins.canvas;
    var sizeContainer = this._sizes.container;

    var marginContainer    = this._margins.container;

    var marginLabel = this._margins.label;

    var axisXProperty = this.axisXProperty;

    var axisYProperty = this.axisYProperty;

    var dataResolution = 5;

    var sizeContainerInner = this._sizes.inner;

    var marginGraph = this._margins.graph;
    var sizeGraph   = this._sizes.graph;




    var data    = this._data;
    var dataLen = data.results.length;
    var plotPoints = [];
    var plotSegWidth =  sizeGraph.width / (dataLen - 1) ;

    var p = {x:0,y:0};

    var i;

    //Background

    c.setFill('rgb(213, 217, 222)');
    c.noStroke();
    c.rect(0,0, c.width, c.height);

    // BEGIN - Canvas
    c.translate(Canvas.POINT_HALF_FLOAT.x,Canvas.POINT_HALF_FLOAT.y);

    c.push();
    {
        width  = sizeContainer.width;
        height = sizeContainer.height;

        // BEGIN - Container-Inner

        c.translate(marginCanvas.left, marginCanvas.top);

        c.setFill('#F2F4F5');
        c.rect(0, 0, width, height);

        c.push();
        {
            width  = sizeContainerInner.width;
            height = sizeContainerInner.height;

            // BEGIN - Container-Inner

            c.translate(marginContainer.left, marginContainer.top);
            c.setStroke('#BAC2C9');
            c.setFill('#BAC2C9');


            // BEGIN - Graph

            c.push();
            {
                width  = sizeGraph.width;
                height = sizeGraph.height;

                c.translate(marginGraph.left,marginGraph.top);
                c.line(0,height,width,height);

                i = -1;

                c.setTextAlign(Canvas.TEXT_ALIGN_CENTER);

                while (++i < dataLen)
                {
                    p.x = i * plotSegWidth;
                    p.y = height;

                    plotPoints.push(this._projectValue(i, plotSegWidth, height, data.results[i].total, data.max.total));

                    if(i%axisXProperty.frequenceTick==0 || (i == dataLen-1 && axisXProperty.showStartEnd))
                    {
                        this._drawAxisXTick(axisXProperty.mainTick,p);
                    }
                    else
                    {
                        this._drawAxisXTick(axisXProperty.subTick, p);
                    }

                    if (i % axisXProperty.frequenceLabel == 0 || (i == dataLen-1 && axisXProperty.showStartEnd))
                    {
                        c.text(NYTDataScope.YEAR[i], p.x, p.y + axisXProperty.mainTick.size + 15);
                    }


                }

                c.line(0,0,0,height);

                i = -1;

                var dataStep = Math.round(height / dataResolution);
                var dataC    = Math.round(data.max.total / dataResolution);

                c.setTextBaseLine(Canvas.TEXT_BASELINE_MIDDLE);
                c.setTextAlign(Canvas.TEXT_ALIGN_RIGHT);



                while(++i < dataResolution + 1)
                {
                    p.x = 0;
                    p.y = height - i * dataStep;

                    c.line(p.x, p.y, p.x-5, p.y);
                    c.text(NYTUtils.roundHundred(dataC * i), p.x - 10, p.y+2);
                }



                c.lineArray(plotPoints);

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
            c.text('Query: ' + data.tokens.toString(),0,0);
            c.text('Date: ' + data.results[0].year + ' - ' + data.results[data.results.length - 1].year,0,+ 15);



        }
        c.pop();

        // End - Label

    }
    c.pop();

    // End - Canvas
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

NYTGraph.prototype.setSize = function(width,height)
{
    this.canvas.setSize(width,height);
};

NYTTestPlot.prototype.onResize = function(e)
{
    this.graph.setSize(window.innerWidth,window.innerHeight);
    this.graph.render();
};


NYTTestPlot.prototype.mergeData = function(data,tokens)
{

    var mergedData =  {tokens:tokens,
                       results:[],
                       min:{index:0,year:0,total:Infinity},
                       max:{index:0,year:0,total:-Infinity},
                       total:0};

    var results = data.results;
    var total = 0;
    var resultTotal = 0;
    var i = -1;
    var year;

    while(++i < results.length)
    {
        year = NYTDataScope.YEAR[i];

        resultTotal = results[i].total;
        mergedData.results.push({year:year,total:resultTotal});
        total += resultTotal;

        if(resultTotal < mergedData.min.total )
        {
            mergedData.min.total = resultTotal;
            mergedData.min.year  = year;
            mergedData.min.index = i;
        }
        else if(resultTotal > mergedData.max.total)
        {
            mergedData.max.total = resultTotal;
            mergedData.max.year  = year;
            mergedData.max.index = i;
        }

    }

    mergedData.total = total;
    return mergedData;

};