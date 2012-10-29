//
//
// .
//
//  Created by henryk Wollik on 29.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var NYT_API_ARTICLE_SEARCH_KEY     = "ac4190b51fdaa3113d81a263750fcf16:6:66636531";

var NYT_ARTICLE_SEARCH_API_BASE_URL = "http://api.nytimes.com/svc/search/v1/article?";
var NYT_ARTICLE_SEARCH_API_URL      = "/svc/search/v1/article?";

exports.NYT_ARTICLE_SEARCH_API_BASE_URL = NYT_ARTICLE_SEARCH_API_BASE_URL;
exports.NYT_ARTICLE_SEARCH_API_URL = NYT_ARTICLE_SEARCH_API_URL;

// abstract
//
// A summary of the article, written by Times indexers.
// Note: there can be a significant gap (as much as a year) between the publication
// of the article and the writing of the abstract. As an alternative, use body.
//
var FIELD_ABSTRACT  = "abstract";
var RETURN_ABSTRACT = "abstract";

exports.FIELD_ABSTRACT = FIELD_ABSTRACT;
exports.RETURN_ABSTRACT = RETURN_ABSTRACT;

// author
//
// An author note, such as an e-mail address or short biography (compare byline)
//
var SEARCH_AUTHOR = "author";
var RETURN_AUTHOR = "author";

exports.SEARCH_AUTHOR = SEARCH_AUTHOR;
exports.RETURN_AUTHOR = RETURN_AUTHOR;



// body
//
// A portion of the beginning of the article. Note: Only a portion of the article
// body is included in responses. But when you search against the body field,
// you search the full text of the article.
//
var FIELD_BODY = "body";
var RETURN_BODY = "body";

exports.FIELD_BODY = FIELD_BODY;
exports.RETURN_BODY = RETURN_BODY;

// byline
//
// The article byline, including the author's name
//
var FIELD_BYLINE = "byline";
var RETURN_BYLINE = "byline";

exports.FIELD_BYLINE = FIELD_BYLINE;
exports.RETURN_BYLINE = RETURN_BYLINE;

// comments
//
// Indicates whether user comments are associated with the article
// (for articles from 2007 to present). To retrieve comments, use the Community API.
//
var SEARCH_COMMENTS = "comments";
var RETURN_COMMENTS = "comments";

exports.SEARCH_COMMENTS = SEARCH_COMMENTS;
exports.RETURN_COMMENTS = RETURN_COMMENTS;

// fee
//
// Indicates whether users must pay a fee to retrieve the full article
//
var SEARCH_FEE = "fee";
var RETURN_FEE = "fee";

exports.SEARCH_FEE = SEARCH_FEE;
exports.RETURN_FEE = RETURN_FEE;

// lead_paragraph
//
// The first paragraph of the article (as it appeared in the printed newspaper)
//
var SEARCH_LEAD_PARAGRAPH = "lead_paragraph";
var RETURN_LEAD_PARAGRAPH = "lead_paragraph";

exports.SEARCH_LEAD_PARAGRAPH = SEARCH_LEAD_PARAGRAPH;
exports.RETURN_LEAD_PARAGRAPH = RETURN_LEAD_PARAGRAPH;

// multimedia
//
// Associated multimedia features (interactive graphics, slideshows, etc.),
// including URLs (see also the related_multimedia field).
// "Multimedia" does not include photos; use the small_image fields for photo metadata.
//
var RETURN_MULTIMEDIA = "multimedia";

exports.RETURN_MULTIMEDIA = RETURN_MULTIMEDIA;

// nytd_byline
//
// The article byline, formatted for NYTimes.com
//
var SEARCH_NYTD_BYLIEN = "nytd_byline";
var RETURN_NYTD_BYLIEN = "nytd_byline";

exports.SEARCH_NYTD_BYLIEN = SEARCH_NYTD_BYLIEN;
exports.RETURN_NYTD_BYLIEN = RETURN_NYTD_BYLIEN;

// nytd_title
//
// The article title on NYTimes.com (this field may or may not match the title field;
// headlines may be shortened and edited for the web)
//
var EARCH_NYTD_TITLE = "nytd_title";
var RETURN_NYTD_TITLE = "nytd_title";

exports.EARCH_NYTD_TITLE = EARCH_NYTD_TITLE;
exports.RETURN_NYTD_TITLE = RETURN_NYTD_TITLE;

// related_media
//
// Indicates whether multimedia features are associated with this article.
// Additional metadata for each related multimedia feature appears in the multimedia array.
// "Multimedia" does not include photos; use the small_image fields for photo metadata
//
var SEARCH_RELATED_MEDIA = "related_media";
var RETURN_RELATED_MEDIA = "related_media";

exports.SEARCH_RELATED_MEDIA = SEARCH_RELATED_MEDIA;
exports.RETURN_RELATED_MEDIA = RETURN_RELATED_MEDIA;

// small_image small_image_url small_image_height small_image_width
//
// The small_image field indicates whether a thumbnail image
// is associated with the article. The small_image_url field
// provides the URL of the image on NYTimes.com.
// The small_image_height and small_image_width fields provide the image dimensions.
//
var SEARCH_SMALL_IMAGE = "small_image";
var RETURN_SMALL_IMAGE = "small_image";
var RETURN_SMALL_IMAGE_URL = "small_image_url";
var RETURN_SMALL_IMAGE_HEIGHT = "small_image_height";
var RETURN_SMALL_IMAGE_WIDTH = "small_image_width";

exports.SEARCH_SMALL_IMAGE = SEARCH_SMALL_IMAGE;
exports.RETURN_SMALL_IMAGE = RETURN_SMALL_IMAGE;
exports.RETURN_SMALL_IMAGE_URL = RETURN_SMALL_IMAGE_URL;
exports.RETURN_SMALL_IMAGE_HEIGHT = RETURN_SMALL_IMAGE_HEIGHT;
exports.RETURN_SMALL_IMAGE_WIDTH = RETURN_SMALL_IMAGE_WIDTH;

// text
//
// The text field consists of title + byline + body (combined in an OR search)
// and is the default field for keyword searches. For more information, see Constructing a Search Query.
//
var FIELD_TEXT = "__text";

exports.FIELD_TEXT = FIELD_TEXT;

// title
//
// The article title (headline); corresponds to the headline that appeared in the printed newspaper
//
var FIELD_TITLE = "title";
var RETURN_TITLE = "title";

exports.FIELD_TITLE = FIELD_TITLE;
exports.RETURN_TITLE = RETURN_TITLE;

// tokens
//
// Your query terms, returned for your reference
//
var RETURN_TOKENS = "tokens";

exports.RETURN_TOKENS = RETURN_TOKENS;

// url
//
// The URL of the article on NYTimes.com
//
var SEARCH_URL = "url";
var RETURN_URL = "url";

exports.SEARCH_URL = SEARCH_URL;
exports.RETURN_URL = RETURN_URL;

// word_count
//
// The full article word count
//
var RETURN_WORD_COUNT = "word_count";

exports.RETURN_WORD_COUNT = RETURN_WORD_COUNT;

var RETURN_DATE = "date";

exports.RETURN_DATE = RETURN_DATE;


var RANK_NEWEST  = "newest";
var RANK_OLDEST  = "oldest";
var RANK_CLOSEST = "closest";

exports.RANK_NEWEST = RANK_NEWEST;
exports.RANK_OLDEST = RANK_OLDEST;
exports.RANK_CLOSEST = RANK_CLOSEST;

//internal

var QUERY        = "query=";
var RETURN_FIELD = "&fields=";
var RETURN_FACET = "&facets=";
var API_KEY = "&api-key=";

var PREFIX_EXCLUDE = "-";
var PREFIX_EMPTY   = "";
var PREFIX_SPACE = " ";

var PREFIX_FIELD_TEXT     = "__text:";
var PREFIX_FIELD_TITLE    = "title:";
var PREFIX_FIELD_ABSTRACT = "abstract:";
var PREFIX_FIELD_BODY     = "body:";
var PREFIX_FIELD_BYLINE   = "byline:";

var SEPERATOR_SPACE = " ";
var SEPERATOR_COMMA = ",";

var EMPTY_STRING = "";

var PARAM_BEGIN_DATE = "&begin_date=";
var PARAM_END_DATE   = "&end_date=";
var PARAM_OFFSET     = "&offset=";
var PARAM_EMPTY = "";

//Exceptions

var RAISE_INVALID_FACET         = "Invalid Facet";
var FORMAT_INVALID_FACET        = "Format of facet %@ is not of type return";
var RAISE_INVALID_FIELD         = "Invalid Field";
var FORMAT_INVALID_FIELD        = "Format of field %@ is invalid";
var RAISE_INVALID_DATE          = "Invalid Date";
var FORMAT_INVALID_DATE         = "Format of date %@ is invalid. Format is YYYYMMDD";
var RAISE_INVALID_RETURN_FIELD  = "Invalid Return-Field";
var FORMAT_INVALID_RETURN_FIELD = "Format of field %@ is invalid";

//Formats for query build

var FORMAT_FIRST_ARG = "%@%";
var FORMAT_EACH_ARG  = "%@%@%";

/*
 *
 *
 * Utils
 *
 *
 */

var NYTUtils = {};

NYTUtils.throwException = function(message,hint,object)
{
    throw message.replace("%@",object)+hint;

    /*
    var e='',i=-1,l=arguments.length;
    while(++i<l)e+=arguments[i];
    throw e;
    */
};


NYTUtils.objectEqualsObjects = function()
{
    var o=arguments[0],i=-1,l=arguments.length;
    while(++i<l)if(o==arguments[i])return true;return false;
};

NYTUtils.logArgs = function(args)
{
    console.log.apply(console,args);
};

function MutableString()
{
    this.__text = arguments.length > 0 ? arguments[0] : "";
}

MutableString.prototype.set = function(text)
{
    this.__text = text;
};

MutableString.prototype.charAt = function(index)
{
    return this.__text.charAt(index);
};

MutableString.prototype.charCodeAt = function(index)
{
    return this.__text.charCodeAt(index);
};

MutableString.prototype.concat = function()
{
    return new MutableString(this.__text.concat(arguments));
};

MutableString.prototype.indexOf = function(searchvalue,start)
{
    return this.__text.indexOf(searchvalue,start);
};

MutableString.prototype.lastIndexOf = function(searchvalue,start)
{
    return this.__text.lastIndexOf(searchvalue,start);
};

MutableString.prototype.match = function(regex)
{
    return this.__text.match(regex);
};

MutableString.prototype.replace = function(searchvalue,newvalue)
{
    return this.__text.replace(searchvalue,newvalue);
};

MutableString.prototype.search = function(searchvalue)
{
    return this.__text.search(searchvalue);
};

MutableString.prototype.slice = function(start,end)
{
    return new MutableString(this.__text.slice(start,end));
};

MutableString.prototype.split = function(separator,limit)
{
    return this.__text.split(separator,limit);
};

MutableString.prototype.substr = function(start,length)
{
    return this.__text.substr(start,length);
};

MutableString.prototype.substring = function(from, to)
{
    return this.__text.substr(from, to);
};

MutableString.prototype.toLowerCase = function()
{
    return this.__text.toLowerCase();
};

MutableString.prototype.toUpperCase = function()
{
    return this.__text.toUpperCase();
};


MutableString.prototype.size = function()
{
   return this.__text.length;
};


MutableString.prototype.append = function(string)
{
    this.__text += string;
};

MutableString.prototype.prepend = function(string)
{
   this.__text = string + this.__text;
};

MutableString.prototype.clear = function()
{
    this.__text = "";
};

MutableString.prototype.copy = function()
{
    return new MutableString(this.__text);
};

MutableString.prototype.toString = function()
{
    return this.__text;
};

/*
 *
 *
 * Facets
 *
 *
 */

// classifiers_facet
//
// Taxonomic classifiers that reflect Times content categories, such as Top/News/Sports
//
var FACET_CLASSIFIERS  = "classifiers_facet";
var RETURN_CLASSIFIERS = "classifiers_facet";

exports.FACET_CLASSIFIERS = FACET_CLASSIFIERS;
exports.RETURN_CLASSIFIERS = RETURN_CLASSIFIERS;


// column_facet
//
// A Times column title (if applicable), such as  Weddings or Ideas & Trends
//
var FACET_COLUMN  = "column_facet";
var RETURN_COLUMN = "column_facet";

exports.FACET_COLUMN = FACET_COLUMN;
exports.RETURN_COLUMN = RETURN_COLUMN;

// date
//
// The publication date in YYYYMMDD format
//
var FACET_DATE  = "date";

exports.FACET_DATE = FACET_DATE;
// day_of_week_facet
//
// The day of the week (e.g., Monday, Tuesday) the article was published
// (compare publication_day, which is the numeric date rather than the day of the week)
//
var FACET_DAY_OF_WEEK  = "day_of_week_facet";
var RETURN_DAY_OF_WEEK = "day_of_week_facet";

exports.FACET_DAY_OF_WEEK = FACET_DAY_OF_WEEK;
exports.RETURN_DAY_OF_WEEK = RETURN_DAY_OF_WEEK;

// dbpedia_ressource
//
// DBpedia person names mapped to Times per_facet terms. This field is case sensitive: values must be Mixed Case.
// The Times per_facet is often more comprehensive than dbpedia_resource, but the DBpedia name is easier to use with
// other data sources. For more information about linked open data, see data.nytimes.com.
//

var FACET_DBPEDIA_RESOURCE  = "dbpedia_resource";
var RETURN_DBPEDIA_RESOURCE = "dbpedia_resource";

exports.FACET_DBPEDIA_RESOURCE = FACET_DBPEDIA_RESOURCE;
exports.RETURN_DBPEDIA_RESOURCE = RETURN_DBPEDIA_RESOURCE;

// dbpedia_resource_url
//
// URLs to DBpedia person names that have been mapped to Times per_facet terms.
// This field is case sensitive: values must be Mixed Case.
// For more information about linked open data, see data.nytimes.com.
//
var FACET_DBPEDIA_RESOURCE_URL  = "dbpedia_resource_url";
var RETURN_DBPEDIA_RESOURCE_URL = "dbpedia_resource_url";

exports.FACET_DBPEDIA_RESOURCE_URL = FACET_DBPEDIA_RESOURCE_URL;
exports.RETURN_DBPEDIA_RESOURCE_URL = RETURN_DBPEDIA_RESOURCE_URL;

// des_facet
//
// Descriptive subject terms assigned by Times indexers.
// This facet is included in the facet_terms field (see the description in this table).
//
// When used in a request, values must be UPPERCASE
//
var FACET_DES  = "des_facet";
var RETURN_DES = "des_facet";

exports.FACET_DES = FACET_DES;
exports.RETURN_DES = RETURN_DES;

// desk_facet
//
// The Times desk that produced the story (e.g., Business/Financial Desk)
//
var FACET_DESK  = "desk_facet";
var RETURN_DESK = "desk_facet";

exports.FACET_DESK = FACET_DESK;
exports.RETURN_DESK = RETURN_DESK;

// geo_facet
//
// Standardized names of geographic locations, assigned by Times indexers.
// This facet is included in the facet_terms field (see the description in this table).
//
// When used in a request, values must be UPPERCASE
//
var FACET_GEO  = "geo_facet";
var RETURN_GEO = "geo_facet";

exports.FACET_GEO = FACET_GEO;
exports.RETURN_GEO = RETURN_GEO;

// material_type_facet
//
// The general article type, such as Biography, Editorial or Review
//
var FACET_MATERIAL_TYPE  = "material_type_facet";
var RETURN_MATERIAL_TYPE = "material_type_facet";

exports.FACET_MATERIAL_TYPE = FACET_MATERIAL_TYPE;
exports.RETURN_MATERIAL_TYPE = RETURN_MATERIAL_TYPE;

// nytd_des_facet
//
// Descriptive subject terms, assigned for use on NYTimes.com
// (to get standardized terms, use the TimesTags API)
//
// When used in a request, values must be Mixed Case
//
var FACET_NYTD_DES  = "nytd_des_facet";
var RETURN_NYTD_DES = "nytd_des_facet";

exports.FACET_NYTD_DES = FACET_NYTD_DES;
exports.RETURN_NYTD_DES = RETURN_NYTD_DES;

// nytd_geo_facet
//
// Standardized names of geographic locations, assigned for use on NYTimes.com
// (to get standardized terms, use the TimesTags API)
//
// When used in a request, values must be Mixed Case
//
var FACET_NYTD_GEO  = "nytd_geo_facet";
var RETURN_NYTD_GEO = "nytd_geo_facet";

exports.FACET_NYTD_GEO  = FACET_NYTD_GEO;
exports.RETURN_NYTD_GEO = RETURN_NYTD_GEO;

// nytd_org_facet
//
// Standardized names of organizations, assigned for use on NYTimes.com
// (to get standardized terms, use the TimesTags API)
//
// When used in a request, values must be Mixed Case
//
var FACET_NYTD_ORG = "nytd_org_facet";
var RETURN_NYTD_ORG = "nytd_org_facet";

exports.FACET_NYTD_ORG = FACET_NYTD_ORG;
exports.RETURN_NYTD_ORG = RETURN_NYTD_ORG;

// nytd_per_facet
//
// Standardized names of people, assigned for use on NYTimes.com
// (to get standardized terms, use the TimesTags API)
//
// When used in a request, values must be Mixed Case
//
var FACET_NYTD_PER  = "nytd_per_facet";
var RETURN_NYTD_PER = "nytd_per_facet";

exports.FACET_NYTD_PER = FACET_NYTD_PER;
exports.RETURN_NYTD_PER = RETURN_NYTD_PER;

// nytd_section_facet
//
// The section the article appears in (on NYTimes.com)
//
var FACET_NYTD_SECTION  = "nytd_section_facet";
var RETURN_NYTD_SECTION = "nytd_section_facet";

exports.FACET_NYTD_SECTION  = FACET_NYTD_SECTION;
exports.RETURN_NYTD_SECTION = RETURN_NYTD_SECTION;

// nytd_works_mentioned_facet
//
// Literary works mentioned (titles formatted for use on NYTimes.com)
//
var FACET_NYTD_WORKS_MENTIONED = "nytd_works_mentioned_facet";
var RETURN_NYTD_WORKS_MENTIONED = "nytd_works_mentioned_facet";

exports.FACET_NYTD_WORKS_MENTIONED = FACET_NYTD_WORKS_MENTIONED;
exports.RETURN_NYTD_WORKS_MENTIONED = RETURN_NYTD_WORKS_MENTIONED;

// org_facet
//
// Standardized names of organizations, assigned by Times indexers.
// This facet is included in the facet_terms field (see the description in this table).
//
// When used in a request, values must be UPPERCASE
//
var FACET_ORG  = "org_facet";
var RETURN_ORG = "org_facet";

exports.FACET_ORG = FACET_ORG;
exports.RETURN_ORG = RETURN_ORG;

// page_facet
//
// The page the article appeared on (in the printed paper)
//
var FACET_PAGE  = "page_facet";
var RETURN_PAGE = "org_facet";

exports.FACET_PAGE = FACET_PAGE;
exports.RETURN_PAGE = RETURN_PAGE;

// per_facet
//
// Standardized names of people, assigned by Times indexers.
// This facet is included in the facet_terms field (see the description in this table).
//
// When used in a request, values must be UPPERCASE
//
var FACET_PER  = "per_facet";
var RETURN_PER = "per_facet";

exports.FACET_PER = FACET_PER;
exports.RETURN_PER = RETURN_PER;

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

exports.FACET_PUBLICATION_DAY    = FACET_PUBLICATION_DAY;
exports.FACET_PUBLICATION_MONTH  = FACET_PUBLICATION_MONTH;
exports.FACET_PUBLICATION_YEAR   = FACET_PUBLICATION_YEAR;
exports.RETURN_PUBLICATION_DAY   = RETURN_PUBLICATION_DAY;
exports.RETURN_PUBLICATION_MONTH = RETURN_PUBLICATION_MONTH;
exports.RETURN_PUBLICATION_YEAR  = RETURN_PUBLICATION_YEAR;

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

exports.FACET_SECTION_PAGE = FACET_SECTION_PAGE;
exports.RETURN_SECTION_PAGE = RETURN_SECTION_PAGE;

// source_facet
//
// The originating body (e.g., The New York Times or The International Herald Tribune)
//
var FACET_SOURCE  = "source_facet";
var RETURN_SOURCE = "source_facet";

exports.FACET_SOURCE = FACET_SOURCE;
exports.RETURN_SOURCE = RETURN_SOURCE;

// works_mentioned_facet
//
// Literary works mentioned in the article
//
var FACET_WORKS_MENTIONED  = "works_mentioned_facet";
var RETURN_WORKS_MENTIONED = "works_mentioned_facet";

exports.FACET_WORKS_MENTIONED = FACET_WORKS_MENTIONED;
exports.RETURN_WORKS_MENTIONED = RETURN_WORKS_MENTIONED;


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

exports.NYTFacet = NYTFacet;

/*
 * http://developer.nytimes.com/docs/read/article_search_api
 */

function NYTArticleSearchQuery()
{
    this._searchSet        = false;
    this._excludeSet       = false;
    this._facetesSet       = false;
    this._returnFacetesSet = false;
    this._returnFieldsSet  = false;

    this._queryKeywords     = new MutableString();
    this._queryExcludes     = new MutableString();
    this._queryFacets       = new MutableString();
    this._queryReturnFields = new MutableString();
    this._queryReturnFacets = new MutableString();

    this._paramBeginDate = '';
    this._paramEndDate   = '';

    this._offset = -1;

    this._apikey = API_KEY + NYT_API_ARTICLE_SEARCH_KEY;
}

//
// Offset
//

NYTArticleSearchQuery.prototype.setOffset = function(offset)
{
    this._offset = offset;
    return this;
};

//
// Begin and End Date
//

NYTArticleSearchQuery.prototype.setDateBegin = function(yyyymmdd)
{
    if(!this._dataIsValid(yyyymmdd))NYTUtils.throwException(RAISE_INVALID_DATE,FORMAT_INVALID_DATE,yyyymmdd);
    this._paramBeginDate = yyyymmdd;
    return this;
};

NYTArticleSearchQuery.prototype.setDateEnd = function(yyyymmdd)
{
    if(!this._dataIsValid(yyyymmdd))NYTUtils.throwException(RAISE_INVALID_DATE,FORMAT_INVALID_DATE,yyyymmdd);
    this._paramEndDate = yyyymmdd;
    return this;
};

NYTArticleSearchQuery.prototype.setDateBeginWithYear = function(year,month,day)
{
    this.setDateBegin(year+(month>9?month:'0'+month)+(day>9?day:'0'+day));
};

NYTArticleSearchQuery.prototype.setDateEndWithYear = function(year,month,day)
{
    this.setDateEnd(year+(month>9?month:'0'+month)+(day>9?day:'0'+day));
};

//
// Search Keywords
//

NYTArticleSearchQuery.prototype.searchKeywords = function(keywords)
{
    this._setString(this._queryKeywords,
                    keywords,
                    this._searchSet ? PREFIX_FIELD_TEXT : PREFIX_EMPTY,
                    SEPERATOR_SPACE,
                    this._searchSet ? PREFIX_SPACE : null);


   this._searchSet = true;
    return this;
};

NYTArticleSearchQuery.prototype.searchKeywordsInField = function(keywords,field)
{
    if(!this._fieldIsValid(field))
    {
        NYTUtils.throwException(RAISE_INVALID_FIELD,FORMAT_INVALID_FIELD,field);
    }

    var prefix = this._prefixForField(field);


    this._setString(this._queryKeywords,
                    keywords,
                    prefix,
                    SEPERATOR_SPACE,
                    this._searchSet ? SEPERATOR_SPACE : null);

    this._searchSet = true;
    return this;
};

NYTArticleSearchQuery.prototype.excludeKeywords = function(keywords)
{
    var excludePrefix = this._excludeSet ? this._excludePrefixForField(FIELD_TEXT) : PREFIX_EXCLUDE;

    this._setString(this._queryKeywords,
                    arguments,
                    excludePrefix,
                    SEPERATOR_SPACE,
                    this._excludeSet ? SEPERATOR_SPACE : null);

    this._excludeSet = true;
    return this;
};

NYTArticleSearchQuery.prototype.exludeKeywordsInField = function(keywords,field)
{
    if(!this._fieldIsValid(field))
    {
        NYTUtils.throwException(RAISE_INVALID_FIELD,FORMAT_INVALID_FIELD,field);
    }

    var prefix = PREFIX_EXCLUDE+this._prefixForField(field);

    this._setString(this._queryKeywords,
                    keywords,
                    prefix,
                    SEPERATOR_SPACE,
                    this._excludeSet ? SEPERATOR_SPACE : null);

    this._excludeSet = true;
    return this;
};

NYTArticleSearchQuery.prototype.addFacetes = function()
{
    this._setString(this._queryFacets,
                    arguments,
                    PREFIX_EMPTY,
                    SEPERATOR_SPACE,
                    this._facetesSet ? SEPERATOR_SPACE : null);

    this._facetesSet = true;
    return this;
};

NYTArticleSearchQuery.prototype.addReturnFields = function(returnFields)
{
    if(!this._returnFieldIsValid(returnFields[0]))
    {
        NYTUtils.throwException(RAISE_INVALID_RETURN_FIELD,FORMAT_INVALID_RETURN_FIELD,returnFields[0]);
    }

    this._setString(this._queryReturnFields,
                    returnFields,
                    PREFIX_EMPTY,
                    SEPERATOR_COMMA,
                    null);

    this._returnFieldsSet = true;
    return this;
};

NYTArticleSearchQuery.prototype.addReturnFacetes = function(returnFacetes)
{
    if(!returnFacetes[0].isReturnFacet)
    {
        NYTUtils.throwException(RAISE_INVALID_FACET,FORMAT_INVALID_FACET,returnFacetes[0]);
    }

    this._setString(this._queryReturnFacets,
                    returnFacetes,
                    PREFIX_EMPTY,
                    SEPERATOR_COMMA,
                    null);

    this._returnFacetesSet = true;
    return this;
};

//
// Construct query parts
//

NYTArticleSearchQuery.prototype._setString = function(string,args,prefix,seperator,firstSeperator)
{
    var firstArg            = args[0];
    var formatIsFacet       = firstArg instanceof NYTFacet;
    var formatIsReturnFacet = formatIsFacet && firstArg.isReturnFacet;

    var first = formatIsFacet ? firstArg : this._ANDStringFromString(firstArg);

    string.append((prefix ? (firstSeperator ? firstSeperator+prefix : prefix) :
                            (firstSeperator ? firstSeperator+PREFIX_EMPTY : PREFIX_EMPTY)) + first);

    var i = 0;
    var a;
    while(++i < args.length)
    {
        a = args[i];

        if(formatIsReturnFacet && !a.isReturnFacet())
        {
            NYTUtils.throwException(RAISE_INVALID_FACET,FORMAT_INVALID_FACET,a.name);
        }

        string.append(seperator+
                      prefix+
                      (formatIsFacet?a:this._ANDStringFromString(a)));
    }



};

//
// misc
//

NYTArticleSearchQuery.prototype._fieldIsValid = function(field)
{
    return NYTUtils.objectEqualsObjects(field,FIELD_ABSTRACT,
                                              FIELD_TITLE,
                                              FIELD_BODY,
                                              FIELD_TEXT,
                                              FIELD_BYLINE);
};

NYTArticleSearchQuery.prototype._returnFieldIsValid = function(returnField)
{
    return NYTUtils.objectEqualsObjects(returnField, RETURN_ABSTRACT,
                                                     RETURN_AUTHOR,
                                                     RETURN_BODY,
                                                     RETURN_BYLINE,
                                                     RETURN_CLASSIFIERS,
                                                     RETURN_COLUMN,
                                                     RETURN_COMMENTS,
                                                     RETURN_DAY_OF_WEEK,
                                                     RETURN_DBPEDIA_RESOURCE,
                                                     RETURN_DBPEDIA_RESOURCE_URL,
                                                     RETURN_DES,
                                                     RETURN_DESK,
                                                     RETURN_FACET,
                                                     RETURN_FEE,
                                                     RETURN_GEO,
                                                     RETURN_LEAD_PARAGRAPH,
                                                     RETURN_MATERIAL_TYPE,
                                                     RETURN_MULTIMEDIA,
                                                     RETURN_NYTD_BYLIEN,
                                                     RETURN_NYTD_DES,
                                                     RETURN_NYTD_GEO,
                                                     RETURN_NYTD_ORG,
                                                     RETURN_NYTD_PER,
                                                     RETURN_NYTD_SECTION,
                                                     RETURN_NYTD_TITLE,
                                                     RETURN_NYTD_WORKS_MENTIONED,
                                                     RETURN_ORG,
                                                     RETURN_PAGE,
                                                     RETURN_PER,
                                                     RETURN_PUBLICATION_DAY,
                                                     RETURN_PUBLICATION_MONTH,
                                                     RETURN_PUBLICATION_YEAR,
                                                     RETURN_RELATED_MEDIA,
                                                     RETURN_SECTION_PAGE,
                                                     RETURN_SMALL_IMAGE,
                                                     RETURN_SMALL_IMAGE_HEIGHT,
                                                     RETURN_SMALL_IMAGE_URL,
                                                     RETURN_SMALL_IMAGE_WIDTH,
                                                     RETURN_SOURCE,
                                                     RETURN_TITLE,
                                                     RETURN_TOKENS,
                                                     RETURN_URL,
                                                     RETURN_WORD_COUNT,
                                                     RETURN_WORKS_MENTIONED);
};

NYTArticleSearchQuery.prototype._prefixForField = function(field)
{
    return field == FIELD_ABSTRACT ? PREFIX_FIELD_ABSTRACT :
           field == FIELD_TITLE    ? PREFIX_FIELD_TITLE    :
           field == FIELD_BODY     ? PREFIX_FIELD_BODY     :
           field == FIELD_BYLINE   ? PREFIX_FIELD_BYLINE   :
           field == FIELD_TEXT     ? PREFIX_EMPTY :
           PREFIX_EMPTY;
};

NYTArticleSearchQuery.prototype._excludePrefixForField = function(field)
{
    return PREFIX_EXCLUDE+this._prefixForField(field);
};

NYTArticleSearchQuery.prototype.resultQuery = function()
{
    var result   = '';
    var keywords = this._queryKeywords;

    var excludes = this._queryExcludes.size() > 0 ?
                   SEPERATOR_SPACE + this._queryExcludes :
                   EMPTY_STRING;

    var facets   = this._queryFacets.size() > 0 ?
                   SEPERATOR_SPACE + this._queryFacets :
                   EMPTY_STRING;

    var rfacets  = this._queryReturnFacets.size() > 0 ?
                   RETURN_FACET + this._queryReturnFacets :
                   EMPTY_STRING;

    var rfields  = this._queryReturnFields.size() > 0 ?
                   RETURN_FIELD + this._queryReturnFields :
                   EMPTY_STRING;

    var pBDate   = this._paramBeginDate.length > 0 ?
                   PARAM_BEGIN_DATE + this._paramBeginDate :
                   EMPTY_STRING;

    var pEDate   = this._paramEndDate.length > 0 ?
                   PARAM_END_DATE + this._paramEndDate :
                   EMPTY_STRING;

    result+=QUERY+keywords+excludes+facets+rfacets+pBDate+pEDate+rfields;

    return result;
};

NYTArticleSearchQuery.prototype._dataIsValid = function(date)
{
    return date.length == 8;
};

NYTArticleSearchQuery.prototype._exception = function()
{
    var m = '';
    var i = -1;
    while(++i < arguments.length)
    {
        m += arguments[i];
    }

    throw m;
};

NYTArticleSearchQuery.prototype._ANDStringFromString = function(string)
{
    return string.indexOf(' ') > 0 ? "'"+string+"'": string;
};

NYTArticleSearchQuery.prototype.requestURL = function()
{
    var s = NYT_ARTICLE_SEARCH_API_BASE_URL+this.resultQuery()+this._apikey;
    return encodeURI(s);
};

NYTArticleSearchQuery.prototype.requestPath = function()
{
    var s = NYT_ARTICLE_SEARCH_API_URL + this.resultQuery() + this._apikey;
    return encodeURI(s);
};

NYTArticleSearchQuery.prototype.clear = function()
{
    this._searchSet = false;
    this._excludeSet = false;
    this._facetesSet = false;
    this._returnFacetesSet = false;
    this._returnFieldsSet = false;

    this._queryKeywords.clear();
    this._queryExcludes.clear();
    this._queryFacets.clear();
    this._queryReturnFields.clear();
    this._queryReturnFacets.clear();

    this._paramBeginDate = '';
    this._paramEndDate = '';

    this._offset = -1;

    return this;
};

NYTArticleSearchQuery.query = function()
{
    return new NYTArticleSearchQuery();
};

exports.NYTArticleSearchQuery = NYTArticleSearchQuery;

