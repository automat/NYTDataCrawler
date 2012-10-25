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
    this.scale         = 1;
    this.layers = [];
    this.renderBox = renderBox ? renderbox : {width:window.innerWidth,height:window.innerHeight};

    window.addEventListener('resize', this.onResize.bind(this));

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

    layer.setCanvas(canvas);
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

Map.prototype.onResize = function(e)
{
    var i = -1;

    this.renderBox.width  = window.innerWidth;
    this.renderBox.height = window.innerHeight;

    var layer;

    while(++i < this.layers.length)
    {
        layer = this.layers[i];
        layer.canvas.style.width  = this.renderBox.width + 'px';
        layer.canvas.style.height = this.renderBox.height + 'px';
        layer.canvas.width   = parseInt(layer.canvas.style.width);
        layer.canvas.height  = parseInt(layer.canvas.style.height);
        layer.setRenderBox(this.renderBox);

    }

    this.render();

};

var GEOMETRY_TYPE_POLYGON = 'Polygon',
    GEOMETRY_TYPE_MULTIPOLYGON = 'MultiPolygon',
    GEOMETRY_TYPE_LINESTRING = 'LineString',
    GEOMETRY_TYPE_MULTILINESTRING = 'MultiLineString',
    GEOMETRY_TYPE_POINT = 'Point';







