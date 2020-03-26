const request = require('supertest');

const server = require('./server');


//can make a function asynchononous by typing `asyc function(){}`

describe("server.js", function() {
    describe("GET /", function() {
      it("should return 200 OK", function() {
        return request(server)
            .get("/")
            .expect(200)
      });
      it.todo("should return JSON");
      it.todo('should respond with { api: "up" }');
    });
  });