

var _NYTGraphPresets = {};

_NYTGraphPresets.Color = {};

_NYTGraphPresets.ColorCanvas    = color(0,0);
_NYTGraphPresets.ColorContainer = color(255,1);
_NYTGraphPresets.ColorLabel     = color(0,1);
_NYTGraphPresets.ColorAxes      = color(186,194,201);


var NYTGraphOptions = {};

NYTGraphOptions.RoundTen      = 'ten';
NYTGraphOptions.RoundHundred  = 'hundred';
NYTGraphOptions.RoundThousand = 'thousand';

function NYTGraph(parentDomElementId)
{
    this.canvas = new Canvas(parentDomElementId);
    this.ctx    = this.canvas.getContext();
    this.canvas.setSize(this.canvas.parent.offsetWidth,
                        this.canvas.parent.offsetHeight);

    this._data              = [];
    this._dataLength        = 0;
    this._dataResultsLength = 0;
    this._dataTotalMax      = -Infinity;
    this._dataTotalMin      =  Infinity;
    this._dataResolution    = 5;

    this._margins = {canvas:   {top:30,right:30,bottom:30,left:30},
                     container:{top:30,right:40,bottom:40,left:50},
                     label:    {top:30,left:60},
                     graph:    {top:10,right:0,bottom:0,left:0}};

    this._sizes   = {canvas:   {width:0,height:0},
                     container:{width:0,height:0},
                     inner:    {width:0,height:0},
                     graph:    {width:0,height:0}};

    this._properties = {canvas:   {color:_NYTGraphPresets.ColorCanvas},
                        container:{color:_NYTGraphPresets.ColorContainer},
                        inner:    {},
                        label:    {font: {family:'Arial',
                                          color:_NYTGraphPresets.ColorLabel,
                                          size:16,
                                          weight:'bold'}
                                       ,
                                   color:_NYTGraphPresets.ColorLabel},
                        axisX:    {showStartEnd:true,
                                   frequenceTick:4,
                                   frequenceLabel:4,
                                   width:1,
                                   color:_NYTGraphPresets.ColorAxes,
                                   mainTick:{size:5,
                                             width:2},
                                   subTick: {size:0,
                                             width:1},
                                   label:{font: {family:'Arial',
                                                 color:color(150),
                                                 size:10,
                                                 weight:'normal'}}},
                        axisY:    {showStartEnd:true,
                                   frequenceTick:2,
                                   frequenceLabel:4,
                                   width:1,
                                   color:color(186,194,201),
                                   mainTick:{size:5,
                                             width:2},
                                   subTick: {size:0,
                                             width:1},
                                   label:{font:{family:'Arial',
                                                color: color(150),
                                                size:  10,
                                                weight:'normal'}}},
                        roundingFactor:NYTGraphOptions.RoundHundred
                        };

    this._plotPoints = [];
    this._plotSegWidth = 0;




}

NYTGraph.prototype.render = function()
{
    if(this._data.length == 0)return;



    this._updateSizes();

    var c            = this.canvas;


    var p = {x:0,y:0};

    var i,j;

    c.noStroke();

    this._drawCanvasBackground();
    c.translate(Canvas.POINT_HALF_FLOAT.x,Canvas.POINT_HALF_FLOAT.y);

    c.push();
    {
        this._translateToMargin(this._margins.canvas);
        this._drawContainerBackground();

        c.push();
        {
            this._translateToMargin(this._margins.container);

            c.push();
            {
                this._translateToMargin(this._margins.graph);

                this._drawAxisX();
                this._drawAxisY();

                var data,plotPoints;

                i = -1;
                while(++i < this._dataLength)
                {
                    data = this._data[i];

                    plotPoints = this._plotPoints[i];
                    this._projectPoints(plotPoints, data);
                    this._drawPlotPoints(plotPoints, data);

                }


            }
            c.pop();
        }
        c.pop();

        c.push();
        {
            this._translateToMargin(this._margins.label);
            this._setFont(this._properties.label.font);
            c.setTextBaseLine(Canvas.TEXT_BASELINE_TOP);
            c.setTextAlign(Canvas.TEXT_ALIGN_LEFT);
            c.text(this._data[0].tokens.toString(),0,0);
        }
        c.pop();
    }
    c.pop();
};


/*
 *
 * Translation methods
 * ------------------------------------------------------------------------------------------
 */

NYTGraph.prototype._translateToMargin = function(margin)
{
    this.canvas.translate(margin.left,margin.top);
};

/*
 *
 * Draw - Plot points
 * ------------------------------------------------------------------------------------------
 */

NYTGraph.prototype._drawPlotPoints = function(plotPoints,data)
{
    var i = 0;

    while (++i < this._dataResultsLength)
    {
        this._drawWeightedLine(plotPoints[i - 1][0], plotPoints[i - 1][1],
                               plotPoints[i][0], plotPoints[i][1],
                               data.results[i - 1].total,
                               data.results[i].total,
                               this._dataTotalMin,
                               this._dataTotalMax);
    }
};


/*
 *
 * Draw - Integrator Plot
 * ------------------------------------------------------------------------------------------
 */

NYTGraph.prototype._drawWeightedLine = function(x0,y0,x1,y1,value0,value1,minValue,maxValue)
{
    var c = this.canvas;
    var max = 10;
    var i = -1;
    var l = 100;
    var l0 = 100;

    var f;

    var v0, v1;

    c.noStroke();

    i = -1;
    c.setFill('rgba(0,0,0,0.05)');
    while (++i < l0)
    {
        f = NYTUtils.interpolate(value0, value1, i / l) / (maxValue);

        c.circle(NYTUtils.interpolate(x0, x1, i / l0),
            NYTUtils.interpolate(y0, y1, i / l0) + 1,
            f * max + 1);
    }

    i = -1;
    while (++i < l)
    {
        f = NYTUtils.interpolate(value0, value1, i / l) / (maxValue);

        c.setFill('rgb(' + parseInt(f * 255) + ',' + 0/*parseInt(255 - (f * 255))*/ + ',0)');

        c.circle(NYTUtils.interpolate(x0, x1, i / l),
            NYTUtils.interpolate(y0, y1, i / l),
            f * max);
    }
};

/*
 *
 * Update all sizes according to div width & height
 * ------------------------------------------------------------------------------------------
 */

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

    this._calcPlotSegWidth();

};

/*
 *
 * Calculate plot points distance
 * ------------------------------------------------------------------------------------------
 */

NYTGraph.prototype._calcPlotSegWidth = function()
{
   this._plotSegWidth = this._sizes.graph.width / (this._dataResultsLength - 1) ;
};

NYTGraph.prototype._setFont = function(fontProperty)
{
    var c = this.canvas;
    c.setFontFamily(fontProperty.family);
    c.setFontSize(fontProperty.size);
    c.setFontWeight(fontProperty.weight);
    c.setFill(fontProperty.color);
};

/*
 *
 * Draw - Axis X
 * ------------------------------------------------------------------------------------------
 */

NYTGraph.prototype._drawAxisX = function()
{
    var c = this.canvas;

    c.setStroke(this._properties.axisX.color);
    c.setFill(this._properties.axisX.label.font.color);

    var i = -1;
    var p = {x:0,y:0};

    var axisXProperty = this._properties.axisX,
        axisYProperty = this._properties.axisY;

    var datLen = this._dataResultsLength;
    var width  = this._sizes.graph.width,
        height = this._sizes.graph.height;

    c.setTextAlign(Canvas.TEXT_ALIGN_CENTER);

    this._setFont(this._properties.axisX.label.font);

    while (++i < datLen)
    {
        p.x = i * this._plotSegWidth;
        p.y = height;

        if (this._showAxisXMainTick(i,axisXProperty) || (i == datLen - 1 && axisXProperty.showStartEnd))
        {
            this._drawAxisXTick(axisXProperty.mainTick, p);
        }
        else
        {
            this._drawAxisXTick(axisXProperty.subTick, p);
        }

        if (this._showAxisXLabel(i,axisXProperty)|| (i == datLen - 1 && axisXProperty.showStartEnd))
        {

            c.text(NYTDataScope.YEAR[i], p.x, p.y + axisXProperty.mainTick.size + 15);
        }
    }

    c.line(0,height,width,height);
};

NYTGraph.prototype._showAxisXMainTick = function(step,axisProperty)
{
    return step % axisProperty.frequenceTick == 0;
};

NYTGraph.prototype._showAxisXLabel = function(step,axisProperty)
{
    return step % axisProperty.frequenceLabel == 0;
};


NYTGraph.prototype._drawAxisXTick = function(axisProperty,p)
{
    var c = this.canvas;
    c.line(p.x, p.y, p.x, p.y + axisProperty.size);
};

/*
 *
 * Draw - Axis Y
 * ------------------------------------------------------------------------------------------
 */

NYTGraph.prototype._drawAxisY = function()
{
    var c = this.canvas;
    var p = {x:0,y:0};

    var dataStep = Math.round(this._sizes.graph.height / this._dataResolution);
    var dataC = Math.round(this._dataTotalMax / this._dataResolution);
    var value;


    c.setTextBaseLine(Canvas.TEXT_BASELINE_MIDDLE);
    c.setTextAlign(Canvas.TEXT_ALIGN_RIGHT);
    this._setFont(this._properties.axisY.label.font);

    var i = -1;
    while (++i < this._dataResolution + 1)
    {
        p.x = 0;
        p.y = this._sizes.graph.height - i * dataStep;

        value = this._properties.roundingFactor == NYTGraphOptions.RoundHundred ?
                NYTUtils.roundHundred(dataC * i) : value

        c.line(p.x, p.y, p.x - 5, p.y);
        c.text(value, p.x - 10, p.y + 2);
    }
    c.line(0, 0, 0, this._sizes.graph.height);

};

/*
 *
 * Draw - Backgrounds
 * ------------------------------------------------------------------------------------------
 */

NYTGraph.prototype._drawCanvasBackground = function()
{
    this._drawFilledRect(this._sizes.canvas,
                         this._properties.canvas.color);
};

NYTGraph.prototype._drawContainerBackground = function()
{
    this._drawFilledRect(this._sizes.container,
                         this._properties.container.color);
};

NYTGraph.prototype._drawFilledRect = function(size,color)
{
    var c = this.canvas;
    c.setFill(color);
    c.rect(0,0,size.width,size.height);
};


/*
 *
 * PlotPoints - Projection
 * ------------------------------------------------------------------------------------------
 */

/**
   * (INTERNAL) Project a single data value to a specific height (height of the graph container).
   *
   * @param {number} index        The current index of the loop
   * @param {number} segWidth     The distance between two plot points
   * @param {number} segMaxHeight The maximum height of the point
   * @param {number} value        The actual data value of the plotted point
   * @param {number} maxValue     The maximum value of the data used to normalize the data value
   *
   * @returns {Array} Return the projected point in format [x,y]
   */

NYTGraph.prototype._projectValue = function (index, segWidth, segMaxHeight, value, maxValue)
{
    return [index * segWidth,segMaxHeight- segMaxHeight * value / maxValue];
};

/**
   * (INTERNAL) Project all plot points according to the data and specified margins.
   *
   * @param {Array} points The plot point array
   * @param {Array} data   The data array
   *
   */

NYTGraph.prototype._projectPoints = function(points,data)
{
    var i = -1;

    while(++i < this._dataResultsLength)
    {
        points[i] = this._projectValue(i,this._plotSegWidth,this._sizes.graph.height,data.results[i].total,this._dataTotalMax);
    }

};

/*
 *
 * Data - Add data to graph
 * ------------------------------------------------------------------------------------------
 */

/**
   * Add Data to the graph.
   *
   * @param {Array} data The data to be added
   *
   * @returns {Object} The graph
   */

NYTGraph.prototype.addData = function(data)
{
    if(this._data.length == 0)
    {
        this._dataResultsLength = data.results.length;
    }
    else if(data.results.length != this._dataResultsLength)
    {
        throw 'Data has invalid length';
    }

    this._data.push(data);
    this._dataLength = this._data.length;
    this._allocateNewPlotPloints();
    this._calcDataTotalMaxMin();

    return this;
};

/*
 * Add new plotpoints for data
 */

NYTGraph.prototype._allocateNewPlotPloints = function()
{
    this._plotPoints.push([]);
    var pp = this._plotPoints[this._plotPoints.length-1];
    var i = -1;
    while(++i < this._dataResultsLength)
    {
        pp.push([0,0]);
    }
};
  
NYTGraph.prototype._calcDataTotalMaxMin = function()
{
    var i = -1;
    var data = this._data[this._data.length -1];

    this._dataTotalMax = data.max.total > this._dataTotalMax ? data.max.total : this._dataTotalMax;
    this._dataTotalMin = data.min.total < this._dataTotalMin ? data.min.total : this._dataTotalMin;
};


/*
 *
 * Margins - Setter
 * ------------------------------------------------------------------------------------------
 */

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

/*
 *
 * Overall size - Setter
 * ------------------------------------------------------------------------------------------
 */

NYTGraph.prototype.setSize = function(width,height)
{
    this.canvas.setSize(width,height);
};

/*
 *
 * Property - Getter
 * ------------------------------------------------------------------------------------------
 */

NYTGraph.prototype.getProperties = function()
{
    return this._properties;
};


