const request = require("supertest");
const app = require("../../app.js");

describe("OPTIONS /api", () => {
    it("should return 200 status code", async () => {
      const res = await request(app).options("/api");
      expect(res.status).toBe(200);
    });
  });

  describe("GET /api", () => {
    it("should return 405 status code and an error message", async () => {
      const res = await request(app).get("/api");
      expect(res.status).toBe(405);
      expect(res.body).toHaveProperty("error");
    });
  });

  describe("GET /api/tictactoe/{box}", () => {
    it("should return an object with the Player attribute", async () => {
      const res = await request(app).get("/api/tictactoe/1");
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("Player");
    });
  });

  describe("GET /api/reset/", () => {
    it("should return 200 status code", async () => {
      const res = await request(app).get("/api/reset");
      expect(res.status).toBe(200);
    });
  });

  describe("GET /api/resetscores/", () => {
    it("should return an object with the greeting attribute", async () => {
      const res = await request(app).get("/api/resetscores");
      expect(res.status).toBe(200);
    });
  });