//
//
// .
//
//  Created by henryk Wollik on 30.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var fs       = require('fs');

var MSG_ERROR_SET_DIRECTORY = 'Error! Set directory!',
    MSG_ERROR_SET_FILENAME  = 'Error! Set filename!';

function NYTJSONLoader()
{
    this.__directory = '';
    this.__filename  = '';
}

NYTJSONLoader.prototype.setDirectory = function(directoryPath)
{
    this.__directory = directoryPath;
    
    return this;
};

NYTJSONLoader.prototype.setFileName  = function(fileName)
{
    this.__filename = fileName;
    
    return this;
};

NYTJSONLoader.prototype.load = function()
{
    if(this.__directory.length == 0)
    {
        throw MSG_ERROR_SET_DIRECTORY;
    }
    else if(this.__filename.length == 0)
    {
        throw MSG_ERROR_SET_FILENAME;
    }

    return this.__load(this.__directory + this.__filename);

};

NYTJSONLoader.prototype.__load =  function(filePath)
{
    var c = JSON.parse(fs.readFileSync(filePath,'utf8'));
    return c;
};

var MSG_ERROR_SET_OUTPUT_DIRECTORY = 'Error! Set output directory!',
    MSG_ERROR_SET_OUTPUT_FILENAME  = 'Error! Set output filename!',
    MSG_ERROR_SET_INPUT_DIRECTORY  = 'Error! Set input  directory!',
    MSG_ERROR_SET_INPUT_FILENAME   = 'Error! Set input  filename!';

var STR_VAR    = 'var';
var STR_EQUALS = '=';
var STR_SPACE  = ' ';

var STR_EXPORTS = 'exports.';

function NYTJSONMerger()
{
    this.__inputDirectory  = '';
    this.__inputFilename   = '';
    this.__outputDirectory = '';
    this.__outputFilename  = '';

    this.__outputDirectoryExists = false;
    this.__outputFilenameExists  = false;

    this.__jsonLoader      = new NYTJSONLoader();
}

NYTJSONMerger.prototype.setInputDirectory = function(directoryPath)
{
    this.__inputDirectory = directoryPath;
    this.__jsonLoader.setDirectory(this.__inputDirectory);

    return this;
};

NYTJSONMerger.prototype.setInputFilename  = function(fileName)
{
    this.__inputFilename = fileName;
    this.__jsonLoader.setFileName(this.__inputFilename);

    return this;
};

NYTJSONMerger.prototype.setOutputDirectory = function(directoryPath)
{
    this.__outputDirectory = directoryPath;

    return this;
};



NYTJSONMerger.prototype.__load = function()
{
   return this.__jsonLoader.load();
};

NYTJSONMerger.prototype.__getVarName = function(filename)
{
    return filename.substr(0,filename.indexOf('.json'));

};





exports.NYTJSONMerger = NYTJSONMerger;
exports.NYTJSONLoader = NYTJSONLoader;