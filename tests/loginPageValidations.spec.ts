import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";

test.describe("Login Page Validations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("should show error for empty username and password", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    // empty username & password
    await loginPage.login("", "");
    await expect(page.locator('[data-test="error"]')).toContainText(
      "Username is required",
    );

    // only username
    await loginPage.login("standard_user", "");
    await expect(page.locator('[data-test="error"]')).toContainText(
      "Password is required",
    );

    // valid login
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page.locator('[data-test="error"]')).not.toBeVisible();
  });
});