//
//
// .
//
//  Created by henryk Wollik on 25.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var NYT_ARTICLE_SEARCH_API_BASE_URL = "http://api.nytimes.com/svc/search/v1/article?";
var NYT_ARTICLE_SEARCH_API_URL      = "/svc/search/v1/article?";
// abstract
//
// A summary of the article, written by Times indexers.
// Note: there can be a significant gap (as much as a year) between the publication
// of the article and the writing of the abstract. As an alternative, use body.
//
var FIELD_ABSTRACT  = "abstract";
var RETURN_ABSTRACT = "abstract";

// author
//
// An author note, such as an e-mail address or short biography (compare byline)
//
var SEARCH_AUTHOR = "author";
var RETURN_AUTHOR = "author";

// body
//
// A portion of the beginning of the article. Note: Only a portion of the article
// body is included in responses. But when you search against the body field,
// you search the full text of the article.
//
var FIELD_BODY = "body";
var RETURN_BODY = "body";

// byline
//
// The article byline, including the author's name
//
var FIELD_BYLINE = "byline";
var RETURN_BYLINE = "byline";

// comments
//
// Indicates whether user comments are associated with the article
// (for articles from 2007 to present). To retrieve comments, use the Community API.
//
var SEARCH_COMMENTS = "comments";
var RETURN_COMMENTS = "comments";

// fee
//
// Indicates whether users must pay a fee to retrieve the full article
//
var SEARCH_FEE = "fee";
var RETURN_FEE = "fee";

// lead_paragraph
//
// The first paragraph of the article (as it appeared in the printed newspaper)
//
var SEARCH_LEAD_PARAGRAPH = "lead_paragraph";
var RETURN_LEAD_PARAGRAPH = "lead_paragraph";

// multimedia
//
// Associated multimedia features (interactive graphics, slideshows, etc.),
// including URLs (see also the related_multimedia field).
// "Multimedia" does not include photos; use the small_image fields for photo metadata.
//
var RETURN_MULTIMEDIA = "multimedia";

// nytd_byline
//
// The article byline, formatted for NYTimes.com
//
var SEARCH_NYTD_BYLIEN = "nytd_byline";
var RETURN_NYTD_BYLIEN = "nytd_byline";

// nytd_title
//
// The article title on NYTimes.com (this field may or may not match the title field;
// headlines may be shortened and edited for the web)
//
var EARCH_NYTD_TITLE = "nytd_title";
var RETURN_NYTD_TITLE = "nytd_title";

// related_media
//
// Indicates whether multimedia features are associated with this article.
// Additional metadata for each related multimedia feature appears in the multimedia array.
// "Multimedia" does not include photos; use the small_image fields for photo metadata
//
var SEARCH_RELATED_MEDIA = "related_media";
var RETURN_RELATED_MEDIA = "related_media";

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

// text
//
// The text field consists of title + byline + body (combined in an OR search)
// and is the default field for keyword searches. For more information, see Constructing a Search Query.
//
var FIELD_TEXT = "__text";

// title
//
// The article title (headline); corresponds to the headline that appeared in the printed newspaper
//
var FIELD_TITLE = "title";
var RETURN_TITLE = "title";

// tokens
//
// Your query terms, returned for your reference
//
var RETURN_TOKENS = "tokens";

// url
//
// The URL of the article on NYTimes.com
//
var SEARCH_URL = "url";
var RETURN_URL = "url";

// word_count
//
// The full article word count
//
var RETURN_WORD_COUNT = "word_count";

var RETURN_DATE = "date";


var RANK_NEWEST  = "newest";
var RANK_OLDEST  = "oldest";
var RANK_CLOSEST = "closest";

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