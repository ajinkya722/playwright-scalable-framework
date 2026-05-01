import { test, expect } from "@playwright/test";
import { Constants } from "../utility/constants";
import LoginPage from "../pages/loginPage";

test.describe("SauceDemo Login Tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Constants.baseURL);
    loginPage = new LoginPage(page);
  });

  test("Verify SauceDemo page", async ({ page }) => {
    await expect(page).toHaveTitle("Swag Labs");
    // await expect(page.locator(loginPageLocators.loginButton)).toBeVisible();
  });

  test("should login with valid credentials", async () => {
    await loginPage.login(Constants.username, Constants.password);
  });
});