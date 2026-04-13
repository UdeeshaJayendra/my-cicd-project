const request = require("supertest");
const app = require("./index");

test("homepage returns a message", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("Hello from my CI/CD app!");
});

test("health check returns ok", async () => {
  const response = await request(app).get("/health");
  expect(response.status).toBe(200);
  expect(response.body.status).toBe("ok");
});