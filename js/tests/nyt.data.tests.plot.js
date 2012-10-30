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
    this.canvas = new Canvas(id);
    this.ctx    = this.canvas.getContext();

    this.canvas.setSize(window.innerWidth,window.innerHeight);

    this.mergedTermTerrorist = this.mergeData(term_terrorist_scope_complete,'terrorist');

    window.addEventListener('resize',this.onResize.bind(this));

    /*
    this.parent = document.getElementById(id);
    this.canvas = document.createElement('canvas');
    this.parent.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.mergedTermTerrorist = this.mergeData(term_terrorist_scope_complete,'terrorist');
    */

}

NYTTestPlot.prototype.onResize = function(e)
{
    this.canvas.setSize(window.innerWidth,window.innerHeight);
    this.plot();

};

NYTTestPlot.prototype.plot = function()
{
    var c = this.canvas;

    var width,height;

    var marginCanvas  = {top:30,right:30,bottom:30,left:30};
    var sizeContainer = {width:  Math.round(c.width- marginCanvas.left-marginCanvas.right),
                         height: Math.round(c.height-marginCanvas.top-marginCanvas.bottom)};

    var marginContainer    = {top:30,right:40,bottom:40,left:50};

    var marginLabel = {top:40,left:40};

    var sizeContainerInner = {width:  Math.round(sizeContainer.width - marginContainer.left - marginContainer.right),
                              height: Math.round(sizeContainer.height - marginContainer.top - marginContainer.bottom)};

    var marginGraph = {top:0,right:0,bottom:0,left:0};
    var sizeGraph   = {width: Math.round(sizeContainerInner.width - marginGraph.left - marginGraph.right),
                       height:Math.round(sizeContainerInner.height - marginGraph.top - marginGraph.bottom)};

    var sizePlotIndicator = 5;


    var data    = this.mergedTermTerrorist;
    var dataLen = data.results.length;
    var plotPoints = [];
    var plotSegWidth =  sizeGraph.width / (dataLen - 1) ;

    var p0 = {x:0,y:0},
        p1 = {x:0,y:0};

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
            c.line(0,height,width,height);

            // BEGIN - Graph

            c.push();
            {
                width  = sizeGraph.width;
                height = sizeGraph.height;

                c.translate(marginGraph.left,marginGraph.top);

                i = -1;

                c.setTextAlign(Canvas.TEXT_ALIGN_CENTER);

                while (++i < dataLen)
                {
                    p0.x = i * plotSegWidth;
                    p0.y = height;
                    p1.x = p0.x;
                    p1.y = p0.y + sizePlotIndicator;

                    c.line(p0.x, p0.y, p1.x, p1.y);

                    plotPoints.push(this.projectValue(i, plotSegWidth, height, data.results[i].total, data.max.total));

                    if(i%4==0)c.text(NYTDataScope.YEAR[i], p1.x, p1.y + 15);

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
            c.translate(marginLabel.top,marginLabel.left);

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

NYTTestPlot.prototype.projectValue = function (index, segWidth, segMaxHeight, value, maxValue)
{
    return [index * segWidth,segMaxHeight- segMaxHeight * value / maxValue];
};


/*
NYTTestPlot.prototype.plot = function()
{


    var c = this.canvas;

    var padding = 30;

    var width  = c.width  - padding ;
    var height = c.height - padding ;

    var paddingBottomDate = 5;
    var paddingBottomTime = 30;

    var data = this.mergedTermTerrorist;

    var paddingChartHorizontal = 15;
    var paddingChartTop    = 30;
    var paddingChartBottom = 15;

    var chartWidth = (-padding + width) - paddingChartHorizontal*2 ;
    var chartHeight;

    var segLength = data.results.length;
    var segWidth  = chartWidth / (segLength - 1);

    var x,y;
    x = y = padding;
    c.push();
    c.translate(Canvas.POINT_HALF_FLOAT);
    c.line({x:x,y:height-paddingBottomDate},{x:width,y:height-paddingBottomDate},'rgb(0,0,0)');
    c.line({x:x,y:padding+paddingChartTop},{x:x,y:height-paddingBottomDate},'rgb(0,0,0)');
    c.setTextBaseLine(Canvas.TEXT_BASELINE_TOP);
    c.setTextAlign(Canvas.TEXT_ALIGN_CENTER);
    c.setStrokeStyle('rgb(150,150,150)');
    c.setFillStyle('rgb(150,150,150)');
    var i = -1;

    var points = [];


    x+=paddingChartHorizontal;

    var maxBarHeight = height - padding - paddingChartTop;

    var chartVBase = height - paddingChartBottom;

    function projectValue(index,value,maxValue)
    {
        return {x:x+index*segWidth,y:chartVBase - maxBarHeight * value / maxValue};
    }

    points.push({x:x,y:chartVBase});

    while(++i < segLength)
    {
        var p1 = {x:x + i*segWidth,y:height-paddingBottomDate};
        var p2 = {x:x + i*segWidth,y:height};

        c.line(p1,p2);

        var str = i.toString();

        //points.push({x:x+ i*segWidth,y: chartVBase - maxBarHeight * data.results[i].total/data.max.total});

        points.push(projectValue(i,data.results[i].total,data.max.total));
       // console.log(data.results[i].total/data.total);


        p1.y+=15;


        c.text(NYTDataScope.YEAR[i],p1);
    }

    points.push({x:x+ (segLength-1)*segWidth,y:chartVBase});

    function plotPoint(p,value)
    {
        c.circle(p,30);
        c.text(value,{x:p.x + 40, y:p.y});
    }




    //
    c.lineArray(points);
    c.setStrokeStyle('rgb(50,50,50)');
    c.stroke();


    c.pop();

    //ctx.fillStyle = "rgba(0,0,0,1)"; // shave off 70% opacity off the whole scene
    //ctx.fillRect(0,0,100,120);


};
*/

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