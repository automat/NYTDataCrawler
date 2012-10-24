//
//
// .
//
//  Created by henryk Wollik on 24.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

function AbstractMapLayer(id,data,style)
{
    this.id          = id;
    this.style       = style;
    this.canvas      = null;
    this.ctx         = null;
    this.bbox        = null;
    this.rbox        = null;
    this.scale       = 1;
    this.elements    = [];

    this.processData(data);
}

AbstractMapLayer.prototype.processData = function(data)
{
    var i = -1;
    var feature;
    while (++i < data.features.length)
    {
        feature = data.features[i];
        this.elements.push({properties:feature.properties,
                            geometry:feature.geometry,
                            style:this.style,
                            exclude:false});
    }
};

AbstractMapLayer.prototype.getElementsWithPropertyAndKey = function(property,key)
{
    var res;
    var i = -1;

    while(++i < this.elements.length)
    {
        if(this.elements[i].properties[property] == key)
        {
            res = this.elements[i];
            break;
        }
    }

    return res;

};

AbstractMapLayer.prototype.removeElement   = function(element)
{
    this.elements.splice(this.elements[this.elements.indexOf(element)],1);
};

AbstractMapLayer.prototype.addElement = function(element)
{
    this.elements.push(element);
}


AbstractMapLayer.prototype.excludeElement  = function(element)
{
    element.exclude = true;
};


AbstractMapLayer.prototype.setElementStyle = function(element,style)
{
    element.style = style;
    this.render();
};

AbstractMapLayer.prototype.getElementsProperties = function()
{
    var res = [];
    var i = -1;

    for(var p in this.elements[0].properties)
    {
        res.push(p);
    }

    return p;
};

AbstractMapLayer.prototype.setCanvas = function(canvas)
{
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.setStyle(this.style);
};

AbstractMapLayer.prototype.setStyle = function (style)
{
    this.style = style;

    for(var e in this.elements)
    {
        e.style = this.style;
    }

};

AbstractMapLayer.prototype.setRenderBox = function (rbox)
{
    this.rbox = rbox;
};

AbstractMapLayer.prototype.setBoundingBox = function (bbox)
{
    this.bbox = bbox;
};

AbstractMapLayer.prototype.projectPoint = function(x,y)
{
    return {x:(x - this.bbox.x) * this.scale,
            y:(y - this.bbox.y) * this.scale};
};

AbstractMapLayer.prototype.getElementBoundingBox = function (element)
{
    var b = {x:0, y:0, width:0, height:0};

    var i = -1;
    var xMax = -Infinity,
        yMax = -Infinity,
        xMin = Infinity,
        yMin = Infinity;

    var geom = element.geometry;

    console.log(geom.coordinates.length);

    switch (element.geometry.type)
    {
        case GEOMETRY_TYPE_POLYGON:

            while(++i < geom.coordinates[0].length)
            {
                xMax = geom.coordinates[0][i][0];// > xMax ? geom.coordinates[0][i][0] : xMax;
                yMax = geom.coordinates[0][i][1];// > yMax ? geom.coordinates[0][i][0] : yMax;

                //xMin = geom.coordinates[0][i][0] < xMin ? geom.coordinates[0][i][0] : xMin;
                //yMin = geom.coordinates[0][i][1] < yMin ? geom.coordinates[0][i][0] : yMin;
            }


            break;



        case GEOMETRY_TYPE_MULTIPOLYGON:
            break;
        case GEOMETRY_TYPE_POINT:
                    break;
    }

    return [xMin,yMin,xMax,yMax];

};