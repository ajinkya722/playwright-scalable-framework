import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/loginPage";
import { Constants } from "../../utility/constants";

test.describe("Login Page Validations", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(); 
  });

  test("should validate login errors properly", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // // empty username & password
    // await loginPage.login("", "");
    // expect(await loginPage.getLoginErrorMessage()).toContain(
    //   "Username is required",
    // );

    // // only username
    // await loginPage.login("standard_user", "");
    // expect(await loginPage.getLoginErrorMessage()).toContain(
    //   "Password is required",
    // );

    // valid login
    await loginPage.login(Constants.username, Constants.password);
    expect(await loginPage.isLoginErrorVisible()).toBeFalsy();
  });
});