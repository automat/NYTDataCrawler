//
//
// .
//
//  Created by henryk Wollik on 25.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

// classifiers_facet
//
// Taxonomic classifiers that reflect Times content categories, such as Top/News/Sports
//
var FACET_CLASSIFIERS  = "classifiers_facet";
var RETURN_CLASSIFIERS = "classifiers_facet";


// column_facet
//
// A Times column title (if applicable), such as  Weddings or Ideas & Trends
//
var FACET_COLUMN  = "column_facet";
var RETURN_COLUMN = "column_facet";

// date
//
// The publication date in YYYYMMDD format
//
var FACET_DATE  = "date";

// day_of_week_facet
//
// The day of the week (e.g., Monday, Tuesday) the article was published
// (compare publication_day, which is the numeric date rather than the day of the week)
//
var FACET_DAY_OF_WEEK  = "day_of_week_facet";
var RETURN_DAY_OF_WEEK = "day_of_week_facet";

// dbpedia_ressource
//
// DBpedia person names mapped to Times per_facet terms. This field is case sensitive: values must be Mixed Case.
// The Times per_facet is often more comprehensive than dbpedia_resource, but the DBpedia name is easier to use with
// other data sources. For more information about linked open data, see data.nytimes.com.
//

var FACET_DBPEDIA_RESOURCE  = "dbpedia_resource";
var RETURN_DBPEDIA_RESOURCE = "dbpedia_resource";

// dbpedia_resource_url
//
// URLs to DBpedia person names that have been mapped to Times per_facet terms.
// This field is case sensitive: values must be Mixed Case.
// For more information about linked open data, see data.nytimes.com.
//
var FACET_DBPEDIA_RESOURCE_URL  = "dbpedia_resource_url";
var RETURN_DBPEDIA_RESOURCE_URL = "dbpedia_resource_url";

// des_facet
//
// Descriptive subject terms assigned by Times indexers.
// This facet is included in the facet_terms field (see the description in this table).
//
// When used in a request, values must be UPPERCASE
//
var FACET_DES  = "des_facet";
var RETURN_DES = "des_facet";

// desk_facet
//
// The Times desk that produced the story (e.g., Business/Financial Desk)
//
var FACET_DESK  = "desk_facet";
var RETURN_DESK = "desk_facet";

// geo_facet
//
// Standardized names of geographic locations, assigned by Times indexers.
// This facet is included in the facet_terms field (see the description in this table).
//
// When used in a request, values must be UPPERCASE
//
var FACET_GEO  = "geo_facet";
var RETURN_GEO = "geo_facet";

// material_type_facet
//
// The general article type, such as Biography, Editorial or Review
//
var FACET_MATERIAL_TYPE  = "material_type_facet";
var RETURN_MATERIAL_TYPE = "material_type_facet";

// nytd_des_facet
//
// Descriptive subject terms, assigned for use on NYTimes.com
// (to get standardized terms, use the TimesTags API)
//
// When used in a request, values must be Mixed Case
//
var FACET_NYTD_DES  = "nytd_des_facet";
var RETURN_NYTD_DES = "nytd_des_facet";

// nytd_geo_facet
//
// Standardized names of geographic locations, assigned for use on NYTimes.com
// (to get standardized terms, use the TimesTags API)
//
// When used in a request, values must be Mixed Case
//
var FACET_NYTD_GEO  = "nytd_geo_facet";
var RETURN_NYTD_GEO = "nytd_geo_facet";

// nytd_org_facet
//
// Standardized names of organizations, assigned for use on NYTimes.com
// (to get standardized terms, use the TimesTags API)
//
// When used in a request, values must be Mixed Case
//
var FACET_NYTD_ORG = "nytd_org_facet";
var RETURN_NYTD_ORG = "nytd_org_facet";

// nytd_per_facet
//
// Standardized names of people, assigned for use on NYTimes.com
// (to get standardized terms, use the TimesTags API)
//
// When used in a request, values must be Mixed Case
//
var FACET_NYTD_PER  = "nytd_per_facet";
var RETURN_NYTD_PER = "nytd_per_facet";

// nytd_section_facet
//
// The section the article appears in (on NYTimes.com)
//
var FACET_NYTD_SECTION  = "nytd_section_facet";
var RETURN_NYTD_SECTION = "nytd_section_facet";

// nytd_works_mentioned_facet
//
// Literary works mentioned (titles formatted for use on NYTimes.com)
//
var FACET_NYTD_WORKS_MENTIONED = "nytd_works_mentioned_facet";
var RETURN_NYTD_WORKS_MENTIONED = "nytd_works_mentioned_facet";

// org_facet
//
// Standardized names of organizations, assigned by Times indexers.
// This facet is included in the facet_terms field (see the description in this table).
//
// When used in a request, values must be UPPERCASE
//
var FACET_ORG  = "org_facet";
var RETURN_ORG = "org_facet";

// page_facet
//
// The page the article appeared on (in the printed paper)
//
var FACET_PAGE  = "page_facet";
var RETURN_PAGE = "org_facet";

// per_facet
//
// Standardized names of people, assigned by Times indexers.
// This facet is included in the facet_terms field (see the description in this table).
//
// When used in a request, values must be UPPERCASE
//
var FACET_PER  = "per_facet";
var RETURN_PER = "per_facet";

// publication_day publication_month //publication_year
//
// The day (DD), month (MM) and year (YYYY) segments of date, separated for use as facets
//
var FACET_PUBLICATION_DAY    = "publication_day";
var FACET_PUBLICATION_MONTH  = "publication_month";
var FACET_PUBLICATION_YEAR   = "publication_year";
var RETURN_PUBLICATION_DAY   = "publication_day";
var RETURN_PUBLICATION_MONTH = "publication_month";
var RETURN_PUBLICATION_YEAR  = "publication_year";

// section_page_facet
//
// The full page number of the printed article (e.g., D00002).
//
// This data is added to the API 7 days after the article is published.
// Some articles that appear on NYTimes.com do not appear in the printed
// newspaper and thus do not have a value for section_page_facet.
//
var FACET_SECTION_PAGE  = "section_page_facet";
var RETURN_SECTION_PAGE = "section_page_facet";

// source_facet
//
// The originating body (e.g., The New York Times or The International Herald Tribune)
//
var FACET_SOURCE  = "source_facet";
var RETURN_SOURCE = "source_facet";

// works_mentioned_facet
//
// Literary works mentioned in the article
//
var FACET_WORKS_MENTIONED  = "works_mentioned_facet";
var RETURN_WORKS_MENTIONED = "works_mentioned_facet";


var RAISE_INVALID     = "Invalid Facet";
var RAISE_WRONG_TYPE  = "Wrong Facet type";
var FORMAT_INVALID    = "Format of facet %@ is invalid";
var FORMAT_WRONG_TYPE = "Type of Facet is of type return. Use initWithType:query: or facetWithType:query with";


function NYTFacet()
{
    this.name          = '';
    this.query         = '';
    this.isReturnFacet = false;

    switch (arguments.length)
    {
        case 1:
            this.setFacet(arguments[0]);
            this.isReturnFacet = true;
            break;

        case 2:
            this.setFacet(arguments[0]);
            this.setFacetQuery(arguments[1]);
            break;
    }
}

NYTFacet.facetWithTypeandQuery = function(type,query)
{
    return new NYTFacet(type,query);
};

NYTFacet.facetWithType = function(type)
{
    return new NYTFacet(type);
};

NYTFacet.prototype.setFacet = function(facet)
{
    if(
        NYTUtils.objectEqualsObjects(facet,FACET_CLASSIFIERS,
                                           FACET_COLUMN,
                                 FACET_DATE,
                                 FACET_DAY_OF_WEEK,
                                 FACET_DBPEDIA_RESOURCE,
                                 FACET_DBPEDIA_RESOURCE_URL,
                                 FACET_DES,
                                 FACET_DESK,
                                 FACET_GEO,
                                 FACET_MATERIAL_TYPE,
                                 FACET_NYTD_DES,
                                 FACET_NYTD_GEO,
                                 FACET_NYTD_ORG,
                                 FACET_NYTD_PER,
                                 FACET_NYTD_SECTION,
                                 FACET_NYTD_WORKS_MENTIONED,
                                 FACET_ORG,
                                 FACET_PAGE,
                                 FACET_PER,
                                 FACET_PUBLICATION_DAY,
                                 FACET_PUBLICATION_MONTH,
                                 FACET_PUBLICATION_YEAR,
                                 FACET_SECTION_PAGE,
                                 FACET_SOURCE,
                                 FACET_WORKS_MENTIONED))
    {
        this.name = facet;
        this.isReturnFacet = false;
        return;

    }
    else if(
        NYTUtils.objectEqualsObjects(facet,RETURN_CLASSIFIERS,
                                           RETURN_CLASSIFIERS,
                                           RETURN_DAY_OF_WEEK,
                                           RETURN_DBPEDIA_RESOURCE,
                                           RETURN_DBPEDIA_RESOURCE_URL,
                                           RETURN_DES,
                                           RETURN_DESK,
                                           RETURN_GEO,
                                           RETURN_MATERIAL_TYPE,
                                           RETURN_NYTD_DES,
                                           RETURN_NYTD_GEO,
                                           RETURN_NYTD_ORG,
                                           RETURN_NYTD_PER,
                                           RETURN_NYTD_SECTION,
                                           RETURN_NYTD_WORKS_MENTIONED,
                                           RETURN_ORG,
                                           RETURN_PAGE,
                                           RETURN_PER,
                                           RETURN_PUBLICATION_DAY,
                                           RETURN_PUBLICATION_MONTH,
                                           RETURN_PUBLICATION_YEAR,
                                           RETURN_SECTION_PAGE,
                                           RETURN_SOURCE,
                                           RETURN_WORKS_MENTIONED))
    {
        this.name = facet;
        this.isReturnFacet = false;
        return;
    }

    NYTUtils.throwException(RAISE_INVALID,FORMAT_WRONG_TYPE,facet);
};

NYTFacet.prototype.setFacetQuery = function(facetquery)
{
    if(this.isReturnFacet)
    {
        NYTUtils.throwException(RAISE_WRONG_TYPE,FORMAT_WRONG_TYPE,facetquery);
    }

    if(!NYTUtils.objectEqualsObjects(this.name,FACET_DES,FACET_GEO,FACET_ORG,FACET_PER))
    {
        this.query = facetquery.toUpperCase();
    }
    else this.query = facetquery;
};

NYTFacet.prototype.toString = function()
{
    return this.isReturnFacet ? this.name : this.name + this.query;
};
/*
NYTFacet.prototype.toString = function()
{
    return "name= " + this.name + " query= " + this.query + " isReturnFacet= " + this.isReturnFacet;
};
*/
