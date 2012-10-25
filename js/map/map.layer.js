//
//
// .
//
//  Created by henryk Wollik on 24.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

function MapLayer(id, data, style)
{
    AbstractMapLayer.call(this, id, data, style);
}

MapLayer.prototype = Object.create(AbstractMapLayer.prototype);
MapLayer.prototype.constructor = MapLayer;

MapLayer.prototype.renderPolygons = function ()
{
    var elements = this.elements;

    var ctx = this.ctx;

    this.scale = Math.max(this.rbox.width / this.bbox.width, this.rbox.height / this.bbox.height); //min
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

    //ctx.translate(-1800,-2200);

    while (++i < elements.length)
    {
        element = elements[i];
        geometry = element.geometry;
        //noinspection JSUnresolvedVariable
        coordinates = geometry.coordinates;

        if (element.exclude == true)continue;

        if (geometry.type == GEOMETRY_TYPE_MULTIPOLYGON)
        {
            j = -1;

            while (++j < coordinates.length)
            {
                coords = coordinates[j];
                k = -1;
                while (++k < coords.length)
                {
                    this.renderElement(element.style,coords[k]);
                }

            }
        }
        else if (geometry.type == GEOMETRY_TYPE_POLYGON)
        {
            this.renderElement(element.style,coordinates[0]);
        }
        else if (geometry.type == GEOMETRY_TYPE_MULTILINESTRING)
        {
            j = -1;
            while (++j < coordinates.length)
            {
                coords = coordinates[j];
                k = -1;
                while (++k < coords.length)
                {
                    this.renderElement(element.style,coords[k]);
                }
            }
        }
        else if (geometry.type == GEOMETRY_TYPE_LINESTRING)
        {
            this.renderElement(element.style,coordinates);
        }
        else if (geometry.type == GEOMETRY_TYPE_POINT)
        {

            var x, y;

            x = (coordinates[0] - this.bbox.x) * this.scale;
            y = (coordinates[1] - this.bbox.y) * this.scale;

            ctx.beginPath();
            ctx.arc(x, y, i / 50, 0, Math.PI * 2, true);
            ctx.closePath();
            this.applyElementStyle(element);
        }
    }

    ctx.restore();

};

MapLayer.prototype.renderElement = function(style,polygon)
{
    this.renderPolygon(polygon, this.scale, 0.5);
    this.applyElementStyle(style);
};

MapLayer.prototype.applyElementStyle = function (style)
{
    var ctx = this.ctx;

    for (var p in style)
    {
        this.ctx[p] = style[p];
    }

    if (style.strokeStyle)ctx.stroke();
    if (style.fillStyle)ctx.fill();

};




MapLayer.prototype.renderPolygon = function (polygon, sc, offset)
{
    var os = offset ? offset : 0;

    var ctx = this.ctx;
    var p;

    var i = 0;
    ctx.beginPath();
    p = this.projectPoint(polygon[i][0],polygon[i][1]);
    ctx.moveTo(p.x - os, p.y - os);
    while (++i < polygon.length)
    {
        p = this.projectPoint(polygon[i][0],polygon[i][1]);
        ctx.lineTo(p.x - os, p.y - os);
    }


    return ctx;

};



MapLayer.prototype.render = function ()
{
    this.ctx.clearRect(0, 0, this.rbox.width, this.rbox.height);
    this.renderPolygons();
};

function DataLayer(id, data, style)
{
    AbstractMapLayer.call(this, id, data, style);

}

DataLayer.prototype = Object.create(AbstractMapLayer.prototype);
DataLayer.prototype.constructor = MapLayer;

DataLayer.prototype.render = function ()
{
    var elements = this.elements;

    var ctx = this.ctx;

    this.scale = Math.max(this.rbox.width / this.bbox.width, this.rbox.height / this.bbox.height); //min
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
     ctx.save();
    while (++i < elements.length)
        {
            element = elements[i];

            coordinates = element.geometry.coordinates;

            var p = this.projectPoint(coordinates[0],coordinates[1]);

            ctx.beginPath();
            ctx.arc(p.x, p.y, 100/*element.properties.POP_EST / 10000000*/, 0, Math.PI * 2, true);
            ctx.closePath();
            this.applyElementStyle(element);

        }
    i = -1;
   // ctx.globalCompositeOperation = "destination-in"
    ctx.globalCompositeOperation = "destination-out";
    while (++i < elements.length)
    {
        element = elements[i];

        coordinates = element.geometry.coordinates;

        var p = this.projectPoint(coordinates[0],coordinates[1]);

        ctx.beginPath();
        ctx.arc(p.x, p.y, 90/*element.properties.POP_EST / 10000000*/, 0, Math.PI * 2, true);
        ctx.closePath();
        this.applyElementStyle(element);

    }
    ctx.restore();
    ctx.save();
    i = -1;
    while (++i < elements.length)
        {
            element = elements[i];

            coordinates = element.geometry.coordinates;

            var p = this.projectPoint(coordinates[0],coordinates[1]);
            var s = element.properties.NAME;

            ctx.beginPath();

            ctx.arc(p.x, p.y, 2 / element.properties.ScaleRank , 0, Math.PI * 2, true);
            ctx.closePath();
            this.applyElementStyle(element);
            /*
            ctx.save();
            ctx.translate(p.x - ctx.measureText(s).width * 0.5, p.y + 8);
            ctx.scale(1,-1);
            ctx.font = 2 * 10/element.properties.LabelRank  + 'px verdana';
            console.log(element.properties.LabelRank/10);
            ctx.fillStyle ='rgb(110,110,110)';
            ctx.fillText(s,0,0);


            ctx.restore();
            */


        }
    ctx.restore();

    ctx.fillStyle = "rgba(0,0,0,0.75)"; // shave off 70% opacity off the whole scene
    //ctx.fillRect(0,0,this.rbox.width,this.rbox.height);

    ctx.restore();

};

DataLayer.prototype.setPlotFunction = function(f)
{
    this.plotFunction = f.bind(this);
};


//function(ctx,elements,renderbox,)

DataLayer.prototype.applyElementStyle = function (element)
{
    var ctx = this.ctx;

    for (var p in element.style)
    {
        this.ctx[p] = element.style[p];
    }

    if (element.style.strokeStyle)ctx.stroke();
    if (element.style.fillStyle)ctx.fill();

};



