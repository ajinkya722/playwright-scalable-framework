import { Page, Locator } from "@playwright/test";
import { Constants } from "../utility/constants";

class LoginPage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private errorMessage: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {
    this.usernameInput = this.page.locator('[class*="oxd-input"] [placeholder="Username"]');
    this.passwordInput = this.page.locator('[class*="oxd-input"] [placeholder="Password"]');
    this.errorMessage = this.page.locator('[class*="oxd-input-group"] [class*="oxd-input-field-error-message"]');
    this.loginButton = this.page.locator('[class*="orangehrm-login-button"]');
  }

  async navigate() {
    await this.page.goto(Constants.baseURL);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getLoginErrorMessage(): Promise<string> {
    return (await this.errorMessage.textContent()) ?? "";
  }

  async isLoginErrorVisible(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }
}

export default LoginPage;