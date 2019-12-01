var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("https://shrouded-springs-69483.herokuapp.com");

// UNIT test begin

describe("Sample record status unit test",function(){

  // test post method with a appropriate request body. It should response 200 status code.
  it("should response 200 status code",function(done){
    this.timeout(30000) // all tests in this suite get 30 seconds before timeout
    //calling ADD api
    server
    .post('/records')
    .send({
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: 2700,
      maxCount: 3000
    })
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      should.exist(res.status);
      res.status.should.equal(200);
      done();
    });
  });

  // test post method with a missing request body. It should response -1 in the response
  it("should response -1 code: missing request body",function(done){
    this.timeout(30000) // all tests in this suite get 30 seconds before timeout
    //calling ADD api
    server
    .post('/records')
    .send({
      startDate: "2016-01-26",
      minCount: 2700,
      maxCount: 3000
    })
    .expect("Content-type",/json/)
    .expect(0)
    .end(function(err,res){
      should.exist(res.status);
      res.body.code.should.equal(-1);
      done();
    });
  });

});