var chakram = require('chakram');
var data = require('../Data/dataElement');
var catdata = require('../Data/catCombo');
var env = require('../Utils/env');
var expect = chakram.expect;

// Test to create category combination
describe("Creating a category combination", function () {
  var response;
  it("Creating a category combination", function () {
    return response = chakram.post(catdata.apiCreateCatCombo,catdata.sampleCatCombo,env.auth);
  });
  it("Verifying 200 status on creating a data element", function () {
  return  expect(response).to.have.status(200);
});
});

// Verifying category combination
describe("Verifying a category combination", function () {
  var response;
  it("Verifying a category combination", function () {
    response = chakram.get(catdata.apiSearchCatCombo,env.auth);
    return  expect(response).to.have.status(200);
  });
  it("Verifying id of created categpry combination", function () {
  return  expect(response).to.have.schema(catdata.catComboType,catdata.catComboId);
});
});


// Test to check presence of data element
describe("Assert whether the data element is present or not", function () {
  var response;
  it("Looking for data element", function () {
    response = chakram.get(data.apiCheckDataElement,env.auth);
    return expect(response).to.comprise.of.json(data.errorDE);
  });
  it("Verifying 404 status on data element not found", function () {
  return expect(response).to.have.status(404);
  });
});

// Test to create data element
describe("Creating a data element", function () {
  var response;
  it("creating a data element using post", function () {
    return response = chakram.post(data.apiCreateDataElement,data.sampleDataElement,env.auth);
  });
  it("Verifying 200 status on creating a data element", function () {
  return expect(response).to.have.status(200);
});
});

//Test to search for a data element
describe("searching for data element ", function () {
  var response;
  it("searching a data element", function () {
    response = chakram.get(data.apiSearchDataElement,env.auth);
    return expect(response).to.comprise.of.json(data.searchResponse);

  });
  it("Verifying 200 status on data element search", function () {
  return expect(response).to.have.status(200);
  });
});

//Test to update a data element
describe("updating for data element ", function () {
  var response;
  it("updating a data element", function () {
    return response = chakram.put(data.apiUpdateDataElement,data.updateBody,env.auth);
  });
});

//Test to search for a data element
describe("searching for data element after updated", function () {
  var response;
  it("searching a data element after updated ", function () {
    response = chakram.get(data.apiSearchUpdatedDataElement,env.auth);
    return expect(response).to.comprise.of.json(data.updatedSearchBody);

  });
  it("Verifying 200 status on data element search", function () {
  return expect(response).to.have.status(200);
  });
});

//Test to check sharing properties a data element
describe("checking sharing properties for data element ", function () {
  var response;
  it("sharing properties of data element", function () {
    response = chakram.get(data.apiSharingDataElement,env.auth);
    return expect(response).to.have.status(200);
  });
  it("sharing properties of data element", function () {
      return expect(response).to.have.schema(data.sharingType, data.sharingBody);
  });
});

//Test to delete a data element
describe("deleting for data element ", function () {
  var response;
  it("deleting for data element", function () {
    response = chakram.delete(data.apiDeleteDataElement,"",env.auth);
    return expect(response).to.have.status(204);
  });
});


// Test to check presence of data element
describe("Assert whether the data element is present or not", function () {
  var response;
  it("Looking for data element", function () {
    response = chakram.get(data.apiCheckDataElement,env.auth);
    return expect(response).to.comprise.of.json(data.errorDE);
  });
  it("Verifying 404 status on data element not found", function () {
  return expect(response).to.have.status(404);
  });
});


// Test to delete category combination
 describe("Deleting a category combination", function () {
   var response;
   it("Deleting a category combination", function () {
    return response = chakram.delete(catdata.apiDeleteCatCombo,"",env.auth);

   });
   it("Verifying 200 status on creating a data element", function () {
   return expect(response).to.have.status(204);
 });
 });

 // Verifying category combination
 describe("Verifying a category combination", function () {
   var response;
   it("Verifying a category combination", function () {
     response = chakram.get(catdata.apiSearchCatCombo,env.auth);
     return  expect(response).to.have.status(404);
   });
   it("Verifying id of created categ0ry combination", function () {
   return expect(response).to.comprise.of.json(catdata.errorCatCombo);
 });
 });

