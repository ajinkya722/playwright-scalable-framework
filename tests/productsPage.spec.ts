import frontEndMethods from "../pages/frontEndMethods";
import { test, expect } from "@playwright/test";
import { Constants } from "../utility/constants";
import productsPageLocators from "../locators/productsPageLocators";

test.describe("Products Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(Constants.baseURL);
  });

  test("Login and verify products page", async ({ page }) => {
    const frontEnd = new frontEndMethods(page);
    await frontEnd.login(Constants.username, Constants.password);
    await expect(page.locator(productsPageLocators.headerTitle)).toContainText(
      "Swag Labs",
    );
  });
});
