import { test, expect } from "@playwright/test";
import loginPageLocators from "../locators/loginPageLocators";
import productsPageLocators from "../locators/productsPageLocators";
import { Constants } from "../utility/constants";

test.describe("SauceDemo Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(Constants.baseURL);
  });

  test("Verify SauceDemo page", async ({ page }) => {
    await expect(page).toHaveTitle("Swag Labs");
    await expect(page.locator(loginPageLocators.loginButton)).toBeVisible();
  });

  test("should login with valid credentials", async ({ page }) => {
    console.log("Username: ", Constants.username);
    console.log("Password: ", Constants.password);
    await page.locator(loginPageLocators.usernameInput).fill(Constants.username);
    await page.locator(loginPageLocators.passwordInput).fill(Constants.password);
    await page.locator(loginPageLocators.loginButton).click();
    await expect(page.locator(productsPageLocators.headerTitle)).toContainText("Swag Labs");
  });
});
