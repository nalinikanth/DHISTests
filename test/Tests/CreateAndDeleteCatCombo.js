var chakram = require('chakram');
var data = require('../Data/catCombo');
var env = require('../Utils/env');
var expect = chakram.expect;

// Test to create category combination
describe("Creating a category combination", function () {
  var response;
  it("Creating a category combination", function () {
    return response = chakram.post(data.apiCreateCatCombo,data.sampleCatCombo,env.auth);
  });
  it("Verifying 200 status on creating a data element", function () {
  return  expect(response).to.have.status(200);
});
});

// Verifying category combination
describe("Verifying a category combination", function () {
  var response;
  it("Verifying a category combination", function () {
    response = chakram.get(data.apiSearchCatCombo,env.auth);
    return  expect(response).to.have.status(200);
  });
  it("Verifying id of created categpry combination", function () {
  return  expect(response).to.have.schema(data.catComboType,data.catComboId);
});
});


// Test to delete category combination
 describe("Deleting a category combination", function () {
   var response;
   it("Deleting a category combination", function () {
    return response = chakram.delete(data.apiDeleteCatCombo,"",env.auth);

   });
   it("Verifying 200 status on creating a data element", function () {
   return expect(response).to.have.status(204);
 });
 });

 // Verifying category combination
 describe("Verifying a category combination", function () {
   var response;
   it("Verifying a category combination", function () {
     response = chakram.get(data.apiSearchCatCombo,env.auth);
     return  expect(response).to.have.status(404);
   });
   it("Verifying id of created categ0ry combination", function () {
   return expect(response).to.comprise.of.json(data.errorCatCombo);
 });
 });