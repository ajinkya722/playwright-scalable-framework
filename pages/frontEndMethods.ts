import { Page, expect } from "@playwright/test";
import loginPageLocators from "../locators/loginPageLocators";
import productsPageLocators from "../locators/productsPageLocators";
import { Constants } from "../utility/constants";

class frontEndMethods {
 private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async login(username: string, password: string) {
      await this.page.locator(loginPageLocators.usernameInput).fill(username);
      await this.page.locator(loginPageLocators.passwordInput).fill(password);
      await this.page.locator(loginPageLocators.loginButton).click();
  }
}

export default frontEndMethods;