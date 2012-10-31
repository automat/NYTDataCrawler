//
//
// .
//
//  Created by henryk Wollik on 30.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//




function NYTTestPlot()
{
    this.graphCanvasMargins = {top:5,right:5,bottom:5,left:5};
    this.graphs = [];

    this.addGraph('g00',this.mergeData(term_terrorist_scope_complete,'Terrorist'));
    /*
    this.addGraph('g01', this.mergeData(term_bin_laden_scope_complete, 'Bin Laden'));
    this.addGraph('g02',this.mergeData(term_al_quida_scope_complete,'Al-Qaida'));

    this.addGraph('g10',this.mergeData(term_afghanistan_scope_complete,'Afghanistan'));
    this.addGraph('g11',this.mergeData(term_iran_scope_complete,'Iran'));
    this.addGraph('g12',this.mergeData(term_iraq_scope_complete,'Iraq'));

    this.addGraph('g20',this.mergeData(term_war_scope_complete,'War'));
    this.addGraph('g30',this.mergeData(term_peace_scope_complete,'Peace'));
    */

    /*
    this.addGraph('g02',this.mergeData(term_war_scope_complete,'war'));

    this.addGraph('g10', this.mergeData(term_bin_laden_scope_complete, 'bin laden'));
    this.addGraph('g11', this.mergeData(term_peace_scope_complete, 'peace'));
    this.addGraph('g12', this.mergeData(term_peace_scope_complete, 'peace'));

    this.addGraph('g20', this.mergeData(term_terrorist_scope_complete, 'terrorist'));
    this.addGraph('g21', this.mergeData(term_peace_scope_complete, 'peace'));
    this.addGraph('g22', this.mergeData(term_peace_scope_complete, 'peace'));

    this.addGraph('g30', this.mergeData(term_terrorist_scope_complete, 'terrorist'));
    this.addGraph('g31', this.mergeData(term_peace_scope_complete, 'peace'));
    this.addGraph('g32', this.mergeData(term_peace_scope_complete, 'peace'));
    */



    window.addEventListener('resize',this.onResize.bind(this));
}

NYTTestPlot.prototype.addGraph = function(id,data)
{
    var g = new NYTGraph(id);
    g.addData(data);
    g.setMarginsCanvas(this.graphCanvasMargins);
    g.render();

    this.graphs.push(g);

};

NYTTestPlot.prototype.onResize = function(e)
{
    var i = -1;

    while(++i < this.graphs.length)
    {
        this.graphs[i].setSize(this.graphs[i].canvas.parent.offsetWidth,
                               this.graphs[i].canvas.parent.offsetHeight);
        this.graphs[i].render();
    }

};


function NYTGraph(parentDomElementId)
{
    this.canvas = new Canvas(parentDomElementId);
    this.ctx    = this.canvas.getContext();
    this.canvas.setSize(this.canvas.parent.offsetWidth,
                        this.canvas.parent.offsetHeight);

    this._data   = [];

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

    var data       = this._data;
    var curData    = data[0];
    var curDataLen = curData.results.length;
    var plotPoints = [];
    var plotSegWidth =  sizeGraph.width / (curDataLen - 1) ;

    var p = {x:0,y:0};

    var i;

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

                while (++i < curDataLen)
                {
                    p.x = i * plotSegWidth;
                    p.y = height;

                    plotPoints.push(this._projectValue(i, plotSegWidth, height, curData.results[i].total, curData.max.total));

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

                i = -1;

                var dataStep = Math.round(height / dataResolution);
                var dataC    = Math.round(curData.max.total / dataResolution);

                c.setTextBaseLine(Canvas.TEXT_BASELINE_MIDDLE);
                c.setTextAlign(Canvas.TEXT_ALIGN_RIGHT);



                while(++i < dataResolution + 1)
                {
                    p.x = 0;
                    p.y = height - i * dataStep;

                    c.line(p.x, p.y, p.x-5, p.y);
                    c.text(NYTUtils.roundHundred(dataC * i), p.x - 10, p.y+2);
                }

                i = 0;

                while(++i < plotPoints.length)
                {
                    this._drawWeightedLine(plotPoints[i-1][0],plotPoints[i-1][1],
                                           plotPoints[i][0],plotPoints[i][1],
                                           curData.results[i-1].total,
                                           curData.results[i].total,
                                           curData.min.total,
                                           curData.max.total);
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

NYTGraph.prototype._drawWeightedLine = function(x0,y0,x1,y1,value0,value1,minValue,maxValue)
{
    var c = this.canvas;
    var max = 10;
    var i = -1;
    var l = 100;

    var f;

    var v0,v1;

    c.noStroke();

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
    this._data.push(data);
    return this;
};

NYTGraph.prototype.setSize = function(width,height)
{
    this.canvas.setSize(width,height);
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