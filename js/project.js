//
//
// .
//
//  Created by henryk Wollik on 25.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

function Project()
{
    //this.testMap();
    var h = 'hy';

    this.testNYTArticleSearch();



}



Project.prototype.testNYTArticleSearch = function()
{
    //http://developer.nytimes.com/docs/read/article_search_api#h2-queries

    var query = NYTArticleSearchQuery.query();

    //test 1

    query.searchKeywords(['absantee ballot']);
    console.log(query.resultQuery());
    query.clear();

    query.searchKeywords(['absantee ballot']).
          searchKeywordsInField(['election'],FIELD_TITLE);
    console.log(query.resultQuery());
    query.clear();

    query.searchKeywordsInField(['election'],FIELD_TITLE).
          searchKeywordsInField(['turnout'],FIELD_ABSTRACT);
    console.log(query.resultQuery());
    query.clear();

    query.searchKeywordsInField(['bailout'],FIELD_TITLE).
          addReturnFields([RETURN_TITLE,RETURN_LEAD_PARAGRAPH,RETURN_URL,RETURN_DATE]);
    console.log(query.resultQuery());
    query.clear();

    query.searchKeywordsInField(['bailout'],FIELD_TITLE).
          addReturnFacetes([NYTFacet.facetWithType(FACET_ORG)]).
          setDateBegin('20081001').
          setDateEnd('20081201').
          addReturnFields([FACET_ORG]);
    console.log(query.resultQuery());
    query.clear();

    query.searchKeywords(['obama']).
          addFacetes(NYTFacet.facetWithTypeandQuery(FACET_DES,'primaries and caucuses'));
    console.log(query.resultQuery());
    query.clear();






};

Project.prototype.testMap = function()
{
    var countries  = new NYTRessource().getCountriesData();
    var map        = new Map('canvasContainer');

    var oceans     = new MapLayer('oceans',     OCEANS,     {fillStyle:'rgb(250,250,250)'});
    var gratulices = new MapLayer('gratulices', GRATULICES, {strokeStyle:'rgb(240,240,240)'});
    var land       = new MapLayer('land',       LAND,       {fillStyle:'#fff',
                                                             shadowColor:'rgba(0,0,0,0.25)',
                                                             shadowBlur:2,
                                                             shadowOffsetX:0,
                                                             shadowOffsetY:0});
    var lakes      = new MapLayer('lakes',      LAKES,      {fillStyle:'rgb(220,220,220)'});
    var rivers     = new MapLayer('rivers',     RIVERS,     {strokeStyle:'rgb(220,220,220)'});
    var regions    = new MapLayer('regions',    REGIONS,    {strokeStyle:'rgb(150,150,150)'});
    var georegions = new MapLayer('georegions', GEOGRAPHIC_REGIONS_POLYS, {strokeStyle:'rgb(150,150,150)'});
    var countries  = new MapLayer('countries',  COUNTRIES,  {fillStyle:'rgb(200,200,200)'});

    countries.excludeElement(countries.getElementsWithPropertyAndKey('NAME', 'Antarctica'));

    var tinycountries = new MapLayer('tinycountries', TINY_COUNTRIES, {fillStyle:'rgb(0,0,0)'});
    var boundaries    = new MapLayer('boundaries', BOUNDARIES, {strokeStyle:'rgb(255,255,255)'});
    var popplaces     = new MapLayer('popplaces', POPULATED_PLACES, {fillStyle:'rgba(255,50,50,0.2)', strokeStyle:'rgb(255,50,50)'});
    var geoLines       = new MapLayer('geoLines', GEOGRAPHIC_LINES, {strokeStyle:'rgb(0,0,0)'});
    var urbanAreas     = new MapLayer('urbanareas', URBAN_AREAS, {fillStyle:'rgb(160,160,160)'});

    var countryCenters = new DataLayer('countriescenter', COUNTRIE_INFO_GEOJSON, {fillStyle:'rgba(255,50,50,1)', strokeStyle:'rgb(255,50,50)'});

    map.addLayer(oceans);
    map.addLayer(gratulices);
    //map.addLayer(geoLines);
    // map.addLayer(land);

    map.addLayer(countries);
    //map.addLayer(georegions);
    map.addLayer(lakes);
    map.addLayer(rivers);
    //map.addLayer(regions);
    map.addLayer(boundaries);
    map.addLayer(countryCenters);

    map.render();

};

