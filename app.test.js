const request = require("supertest");
const express = require('express');
const app = express();

describe("GET /", () => {
    it("should return 404 status code and an error message", async () => {
      const res = await request(app).get("/*");
      expect(res.status).toBe(404);
    });
  });