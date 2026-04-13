const request = require("supertest");
const app = require("./index");

test("homepage returns HTML dashboard", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
});

test("api returns a message", async () => {
  const response = await request(app).get("/api");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("Hello from my CI/CD app!");
});

test("health check returns ok", async () => {
  const response = await request(app).get("/api/health");
  expect(response.status).toBe(200);
  expect(response.body.status).toBe("ok");
});

test("pipeline status returns passing", async () => {
  const response = await request(app).get("/api/pipeline");
  expect(response.status).toBe(200);
  expect(response.body.status).toBe("passing");
});