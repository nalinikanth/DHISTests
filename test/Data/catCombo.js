var env = require('../Utils/env');
module.exports = {
    apiCreateCatCombo: env.URL+"/api/categoryCombos/",
    apiSearchCatCombo: env.URL+"/api/categoryCombos/1234567asdf",
    apiDeleteCatCombo: env.URL+"/api/categoryCombos/1234567asdf",
    catComboType: "id",
    catComboId: "1234567asdf",
    sampleCatCombo:{
                     "code": "12",
                     "name":"abc",
                     "id": "1234567asdf",
                     "dataDimensionType": "DISAGGREGATION",
                     "displayName": "abc",
                     "publicAccess": "rw------",
                     "externalAccess": false,
                     "isDefault": false,
                     "skipTotal": false,
                     "access": {
                       "read": true,
                       "update": true,
                       "externalize": false,
                       "delete": true,
                       "write": true,
                       "manage": true
                     },
                     "userGroupAccesses": [],
                     "attributeValues": [],
                     "categoryOptionCombos": [],
                     "categories": []
                   },
    errorCatCombo:{
                               "httpStatus": "Not Found",
                               "httpStatusCode": 404,
                               "status": "ERROR",
                               "message": "DataElementCategoryCombo with id 1234567asdf could not be found."
    }
};

