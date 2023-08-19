import request from "supertest";
import app from "../index.js";
import { UserModel } from "../models/Users.js";

describe("POST /register", () => {
  // Test case for successful registration
  it("should register a new user", async () => {
    const newUser = { username: "testuser", password: "testpassword" };

    const response = await request(app)
      .post("/register")
      .send(newUser)
      .expect(200);

    expect(response.body.message).toBe("User registered successfully");

    // Check if the user is actually saved in the database
    const user = await UserModel.findOne({ username: newUser.username });
    expect(user).toBeTruthy();
  });

  // Test case for registering a user with an existing username
  it("should return 400 if username already exists", async () => {
    const existingUser = { username: "existinguser", password: "testpassword" };

    await UserModel.create(existingUser);

    const response = await request(app)
      .post("/register")
      .send(existingUser)
      .expect(400);

    expect(response.body.message).toBe("Username already exists");
  });
});
