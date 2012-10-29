//
//
// .
//
//  Created by henryk Wollik on 18.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

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


