
 function getListItems(listName) {
 
     //Get Current Subsite 
     var curSubsiteURL = _spPageContextInfo.webServerRelativeUrl;
 
     //add a trailing / if one is not found, use for the root web of a url site collection
     if (curSubsiteURL.length > 0) {
         if (curSubsiteURL[curSubsiteURL.length - 1] != '/') curSubsiteURL += '/';
     }
 
     //Get Current SubsSite
     var curSiteURL = window.location.protocol + "//" + window.location.host + curSubsiteURL;
 
     $.ajax({
         url: curSiteURL + "/_api/web/lists/getbytitle('" + listName + "')/items",
         method: "GET",
         headers: {
             "Accept": "application/json; odata=verbose"
         },
         success: function(data) {
             return data;
         },
         error: function(data) {
             throw "Unable to access list with name " + listName + " at " + curSiteURL + ".";
         }
     })
 
 };