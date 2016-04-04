var env = require('../Utils/env');
module.exports = {
    apiCreateDataElement: env.URL+"/api/dataElements/",
    apiSearchDataElement: env.URL+"/api/dataElements.json?filter=name:eq:TestDataElement",
    apiSearchUpdatedDataElement: env.URL+"/api/dataElements.json?filter=name:eq:Test Data Element",
    apiUpdateDataElement: env.URL+"/api/dataElements/abcd1234567/name/",
    apiSharingDataElement: env.URL+"/api/sharing?type=dataElement&id=abcd1234567",
    apiDeleteDataElement:  env.URL+"/api/dataElements/abcd1234567/",
    apiCheckDataElement: env.URL+"/api/dataElements/abcd1234567/",
    sampleDataElement:{
                          "aggregationLevels": [],
                          "aggregationType": "SUM",
                          "attributeValues": [],
                          "categoryCombo": {
                              "id": "1234567asdf"
                          },
                          "code": "TestDataElement",
                          "displayName": "TestDataElement",
                          "displayShortName": "TestDataElement",
                          "domainType": "AGGREGATE",
                          "externalAccess": false,
                          "id": "abcd1234567",
                          "name": "TestDataElement",
                          "valueType": "NUMBER",
                          "optionSetValue": false,
                          "publicAccess": "rw------",
                          "shortName": "TestDataElement",
                          "zeroIsSignificant": false
                      },
    errorDE: {
             "httpStatus": "Not Found",
             "httpStatusCode": 404,
             "status": "ERROR",
             "message": "DataElement with id abcd1234567 could not be found."
           },
    searchResponse:{
                     "pager": {
                       "page": 1,
                       "pageCount": 1,
                       "total": 1,
                       "pageSize": 50
                     },
                     "dataElements": [
                       {
                         "id": "abcd1234567",
                         "displayName": "TestDataElement"
                       }
                     ]
                   },
    updatedSearchBody:{
                        "pager": {
                          "page": 1,
                          "pageCount": 1,
                          "total": 1,
                          "pageSize": 50
                        },
                        "dataElements": [
                          {
                            "id": "abcd1234567",
                            "displayName": "Test Data Element"
                          }
                        ]
                      },
    updateBody:{"name": "Test Data Element"},
    sharingType:"meta",
    sharingBody: {"allowPublicAccess":true,"allowExternalAccess":false}
};

