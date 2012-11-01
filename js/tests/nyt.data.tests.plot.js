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
        //.addData(this.mergeData(term_iraq_scope_complete, 'Bin Laden'));
    //this.graphs[0].render();

    this.addGraph('g01', this.mergeData(term_bin_laden_scope_complete, 'Bin Laden'));
    this.addGraph('g02',this.mergeData(term_al_quida_scope_complete,'Al-Qaida'));

    this.addGraph('g10',this.mergeData(term_afghanistan_scope_complete,'Afghanistan'));
    this.addGraph('g11',this.mergeData(term_iran_scope_complete,'Iran'));
    this.addGraph('g12',this.mergeData(term_iraq_scope_complete,'Iraq'));

    this.addGraph('g20',this.mergeData(term_war_scope_complete,'War'))
        .addData(this.mergeData(term_peace_scope_complete,'Peace'));

    this.addGraph('g30',this.mergeData(term_good_scope_complete,'good'))
        .addData(this.mergeData(term_bad_scope_complete,'bad'))
        .addData(this.mergeData(term_evil_scope_complete,'evil'));

    this.addGraph('g40',this.mergeData(term_germany_scope_complete,'Germany'));
    this.addGraph('g41',this.mergeData(term_japan_scope_complete,'Japan'));

    this.addGraph('g42',this.mergeData(term_america_scope_complete,'America'));
    this.addGraph('g43',this.mergeData(term_china_scope_complete,'China'));

    this.addGraph('g50',this.mergeData(term_hitler_scope_complete,'Hitler'));
       this.addGraph('g51',this.mergeData(term_stalin_scope_complete,'Stalin'));
    this.addGraph('g52',this.mergeData(term_bush_scope_complete,'Bush'));

    this.addGraph('g60',this.mergeData(term_good_scope_complete,'good'));
    this.addGraph('g61',this.mergeData(term_bad_scope_complete,'bad'));
    this.addGraph('g62',this.mergeData(term_evil_scope_complete,'evil'));

    var i = -1;

    while(++i < this.graphs.length)
    {
        this.graphs[i].render();
    }


    window.addEventListener('resize',this.onResize.bind(this));
}

NYTTestPlot.prototype.addGraph = function(id,data)
{
    var g = new NYTGraph(id);
    g.addData(data);
    g.setMarginsCanvas(this.graphCanvasMargins);

    var properties = g.getProperties();

    properties.container.color  = color(0,0);
    properties.axisX.color      = color(180);
    properties.axisX.label.color = color(180);
    properties.axisY.label.color = color(180);

    this.graphs.push(g);
    return g;

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


