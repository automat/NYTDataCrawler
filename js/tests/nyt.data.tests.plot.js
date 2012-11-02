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

    this.addGraph('g00',this.mergeData(term_terrorist_scope_complete,'TERRORIST'));
        //.addData(this.mergeData(term_iraq_scope_complete, 'Bin Laden'));
    //this.graphs[0].render();

    this.addGraph('g01', this.mergeData(term_bin_laden_scope_complete, 'BIN LADEN'));
    this.addGraph('g02',this.mergeData(term_al_quida_scope_complete,'AL-QAIDA'));

    this.addGraph('g10',this.mergeData(term_afghanistan_scope_complete,'AFGHANISTAN'));
    this.addGraph('g11',this.mergeData(term_iran_scope_complete,'IRAN'));
    this.addGraph('g12',this.mergeData(term_iraq_scope_complete,'IRAQ'));

    this.addGraph('g20',this.mergeData(term_war_scope_complete,'WAR / PEACE'))
        .addData(this.mergeData(term_peace_scope_complete,'PEACE'));

    this.addGraph('g30',this.mergeData(term_good_scope_complete,'GOOD / BAD / EVIL'))
        .addData(this.mergeData(term_bad_scope_complete,'BAD'))
        .addData(this.mergeData(term_evil_scope_complete,'EVIL'));

    this.addGraph('g40',this.mergeData(term_germany_scope_complete,'GERMANY'));
    this.addGraph('g41',this.mergeData(term_japan_scope_complete,'JAPAN'));

    this.addGraph('g42',this.mergeData(term_america_scope_complete,'AMERICA'));
    this.addGraph('g43',this.mergeData(term_china_scope_complete,'CHINA'));

    this.addGraph('g50',this.mergeData(term_hitler_scope_complete,'HITLER'));
       this.addGraph('g51',this.mergeData(term_stalin_scope_complete,'STALIN'));
    this.addGraph('g52',this.mergeData(term_bush_scope_complete,'BUSH'));

    this.addGraph('g60',this.mergeData(term_good_scope_complete,'GOOD'));
    this.addGraph('g61',this.mergeData(term_bad_scope_complete,'BAD'));
    this.addGraph('g62',this.mergeData(term_evil_scope_complete,'EVIL'));


    this.addGraph('g70',this.mergeData(term_bush_scope_complete,'BUSH / OBAMA'))
        .addData(this.mergeData(term_obama_scope_complete),'OBAMA');


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
    //g.canvas.setFontFamily('QuicksandBook');
    //g.canvas.setFontSize(10);

    var properties = g.getProperties();

    properties.container.color  = color(0,0);
    properties.axisX.color      = color(180);
    properties.axisX.label.color = color(150);
    properties.axisY.label.color = color(150);

    properties.label.font.family = 'PFDinDisplayProThin';
    properties.label.font.size   = 14;
    properties.label.font.color  = color(50);

    g.setMarginsLabel({top:50,left:70});



    properties.axisX.label.font.family = 'PFDinDisplayProThin';
    properties.axisY.label.font.family = 'PFDinDisplayProThin';
    properties.axisX.label.font.color  = color(80);
    properties.axisY.label.font.color  = color(80);

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


