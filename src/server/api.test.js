const request = require("supertest");
const app = require("../../app.js");

describe("OPTIONS /api", () => {
    it("should return 200 status code", async () => {
      const res = await request(app).options("/api");
      expect(res.status).toBe(200);
    });
  });

