//
//
// .
//
//  Created by henryk Wollik on 23.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

function Map(id, renderBox)
{
    this.parent = document.getElementById(id);
    this.parent.style.position = 'absolute';
    this.parent.top = '0px';
    this.parent.left = '0px';
    this.parent.zIndex = -1;
    this.layers = [];
    this.renderBox = renderBox;

}

Map.prototype.addLayer = function (layer)
{
    var canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.left = '0px';
    canvas.style.top = '0px';
    canvas.style.width = this.renderBox.width + 'px';
    canvas.style.height = this.renderBox.height + 'px';
    this.parent.appendChild(canvas);
    canvas.width  = parseInt(canvas.style.width);
    canvas.height = parseInt(canvas.style.height);

    layer.setContext(canvas.getContext('2d'));
    layer.setBoundingBox({x:-180, y:-90, width:360, height:180});
    layer.setRenderBox(this.renderBox);

    this.layers.push(layer);



};

Map.prototype.render = function()
{
    var i = -1;
    while(++i<this.layers.length)
    {
        this.layers[i].render();
    }

};

var GEOMETRY_TYPE_POLYGON = 'Polygon',
    GEOMETRY_TYPE_MULTIPOLYGON = 'MultiPolygon',
    GEOMETRY_TYPE_LINESTRING = 'LineString',
    GEOMETRY_TYPE_MULTILINESTRING = 'MultiLineString',
    GEOMETRY_TYPE_POINT = 'Point';

function MapLayer(id,dataGeoJSON, style)
{
    this.id = id;
    this.style = style;
    this.ctx = null;
    this.bbox = null;
    this.rbox = null;
    this.elements = [];
    this.processData(dataGeoJSON);
}

MapLayer.prototype.processData = function(data)
{
    var i = -1;
    var feature;
    while(++i < data.features.length)
    {
        feature = data.features[i];
        this.elements.push({properties:feature.properties, geometry:feature.geometry, style:this.style, exclude:false});
    }
};

MapLayer.prototype.getElementsWithPropertyAndKey = function(property,key)
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

MapLayer.prototype.excludeElement  = function(element)
{
    element.exclude = true;
};


MapLayer.prototype.setElementStyle = function(element,style)
{
    element.style = style;
    this.render();
};

MapLayer.prototype.getElementsProperties = function()
{
    var res = [];
    var i = -1;

    for(var p in this.elements[0].properties)
    {
        res.push(p);
    }

    return p;
};

MapLayer.prototype.setContext = function(ctx)
{
    this.ctx = ctx;
    this.setStyle(this.style);
};

MapLayer.prototype.setStyle = function (style)
{
    this.style = style;

    for(var e in this.elements)
    {
        e.style = this.style;
    }

};

MapLayer.prototype.setRenderBox = function (rbox)
{
    this.rbox = rbox;
};

MapLayer.prototype.setBoundingBox = function (bbox)
{
    this.bbox = bbox;
};



MapLayer.prototype.renderPolygons = function ()
{
    var elements = this.elements;

    var ctx = this.ctx;

    var sc = Math.max(this.rbox.width / this.bbox.width,this.rbox.height / this.bbox.height); //min
   // var sc = 14;
    var element;
    var geometry;
    var coordinates;
    var coords,coord;

    var i = -1;
    var j, k, l;
    var x, y;

    ctx.save();
    ctx.scale(1,-1);
    ctx.translate(0,-(this.rbox.height));

    //ctx.translate(-1800,-2200);

    while (++i < elements.length)
    {
        element     = elements[i];
        geometry    = element.geometry;
        //noinspection JSUnresolvedVariable
        coordinates = geometry.coordinates;

        if(element.exclude == true)continue;

        if (geometry.type == GEOMETRY_TYPE_MULTIPOLYGON )
        {
            j = -1;

            while(++j < coordinates.length)
            {
                coords = coordinates[j];

                k = -1;
                while(++k < coords.length)
                {
                    coord = coords[k];

                    this.renderPolygon(coord,sc);
                    this.applyElementStyle(element);
                }


            }
        }
        else if(geometry.type == GEOMETRY_TYPE_POLYGON  )
        {
            this.renderPolygon(coordinates[0],sc);
            this.applyElementStyle(element);
        }
        else if(geometry.type == GEOMETRY_TYPE_MULTILINESTRING)
        {

            j = -1;
            while(++j < coordinates.length)
            {
                coords = coordinates[j];
                k=-1;
                while (++k < coords.length)
                {
                    coord = coords[k];

                    this.renderPolygon(coord, sc,0.5);

                    this.applyElementStyle(element);
                }

            }

        }
        else if(geometry.type == GEOMETRY_TYPE_LINESTRING)
        {
            this.renderPolygon(coordinates,sc,0.5);
            this.applyElementStyle(element);
        }
        else if(geometry.type == GEOMETRY_TYPE_POINT)
        {

            var x,y;

            x = (coordinates[0] - this.bbox.x) * sc;
                y = (coordinates[1] - this.bbox.y) * sc ;

            ctx.beginPath();
            ctx.arc(x,y, i/50,0, Math.PI*2,true);
            ctx.closePath();
            this.applyElementStyle(element);
        }
    }

    ctx.restore();

};

MapLayer.prototype.getElementBoundingBox = function(element)
{
    var b = {x:0,y:0,width:0,height:0};

    var i = -1;
    var xMax = -Infinity,
        yMax = -Infinity,
        xMin =  Infinity,
        yMin =  Infinity;

    var geom = element.geometry;

    switch (element.geometry.type)
    {
        case GEOMETRY_TYPE_POLYGON:
        break;
        case GEOMETRY_TYPE_MULTIPOLYGON:
        break;
    }

};

MapLayer.prototype.applyElementStyle = function(element)
{
    var ctx = this.ctx;

    for (var p in element.style)
        {
            this.ctx[p] = element.style[p];
        }

    if(element.style.strokeStyle)ctx.stroke();
    if(element.style.fillStyle)ctx.fill();

};

MapLayer.prototype.renderPolygon = function(polygon,sc,offset)
{
    var os = offset ? offset : 0;

    var ctx = this.ctx;
    var x,y;

    var i = 0;
    ctx.beginPath();
    x = (polygon[i][0] - this.bbox.x) * sc - os;
    y = (polygon[i][1] - this.bbox.y) * sc - os;
    ctx.moveTo(x,y);
    while(++i < polygon.length)
    {
        x = (polygon[i][0] - this.bbox.x) * sc - os;
        y = (polygon[i][1] - this.bbox.y) * sc - os;
        ctx.lineTo(x,y);
    }

    return ctx;

};

MapLayer.prototype.render = function ()
{
    this.ctx.clearRect(0, 0, this.rbox.width, this.rbox.height);
    this.renderPolygons();
};


function DataLayer(id,data,style)
{
    this.id = id;
    this.style = style;
    this.ctx = null;
    this.bbox = null;
    this.rbox = null;
    this.elements = [];

    this.processData(data);
}

DataLayer.prototype.processData = function(data)
{
    var i = -1;
    var feature;
    while(++i < data.features.length)
    {
        feature = data.features[i];
        this.elements.push({properties:feature.properties, geometry:feature.geometry, style:this.style, exclude:false});
    }
};

DataLayer.prototype.render = function()
{
    var elements = this.elements;

    var ctx = this.ctx;

    var sc = Math.max(this.rbox.width / this.bbox.width, this.rbox.height / this.bbox.height); //min
    // var sc = 14;
    var element;
    var geometry;
    var coordinates;
    var coords, coord;

    var i = -1;
    var j, k, l;
    var x, y;



    ctx.save();
    ctx.scale(1, -1);
    ctx.translate(0, -(this.rbox.height));
    while(++i < elements.length)
    {
        element    = elements[i];



        coordinates = element.geometry.coordinates;


        var x,y;

                    x = (coordinates[0] - this.bbox.x) * sc;
                        y = (coordinates[1] - this.bbox.y) * sc ;

                    ctx.beginPath();
                    ctx.arc(x,y, element.properties.POP_EST/10000000,0, Math.PI*2,true);
                    ctx.closePath();
                    this.applyElementStyle(element);



    }
    ctx.restore();

};

DataLayer.prototype.setContext = function(ctx)
{
    this.ctx = ctx;
    this.setStyle(this.style);
};

DataLayer.prototype.setStyle = function (style)
{
    this.style = style;

    for(var e in this.elements)
    {
        e.style = this.style;
    }

};

DataLayer.prototype.setRenderBox = function (rbox)
{
    this.rbox = rbox;
};

DataLayer.prototype.setBoundingBox = function (bbox)
{
    this.bbox = bbox;
};

DataLayer.prototype.applyElementStyle = function(element)
{
    var ctx = this.ctx;

    for (var p in element.style)
        {
            this.ctx[p] = element.style[p];
        }

    if(element.style.strokeStyle)ctx.stroke();
    if(element.style.fillStyle)ctx.fill();

};



