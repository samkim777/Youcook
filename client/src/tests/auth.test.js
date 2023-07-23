import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from '@jest/globals';
import "@testing-library/jest-dom/extend-expect";
import Login from "../pages/auth.js";





describe("Renders login page correctly", () => {
    test("Login page should have Login button", () => {
        render(<BrowserRouter><Login /> </BrowserRouter>);
        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();
    });
});