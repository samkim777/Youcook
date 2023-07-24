import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from '@jest/globals';
import "@testing-library/jest-dom/extend-expect";
import Login from "../pages/auth.js";
import Registration from "../pages/register.js";




describe("Renders login page button correctly", () => {
    test("Login page should have Login button", () => {
        render(<BrowserRouter><Login /> </BrowserRouter>);
        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();
    });
});


describe("Renders register page button correctly", () => {
    test("Register page should have Register button", () => {
        render(<BrowserRouter> <Registration /> </BrowserRouter>)
        const registerButton = screen.getByRole("button", { name: "Create Account" });
        expect(registerButton).toBeInTheDocument();
    })
})


describe("Test if login form has register button", () => {
    test("Login page should have register button", () => {
        render(<BrowserRouter> <Login /> </BrowserRouter>);
        const register = screen.getByRole("link", { name: "Register" });
        expect(register).toBeInTheDocument();
    })
})