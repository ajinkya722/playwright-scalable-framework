import { Page, Locator } from "@playwright/test";

class LoginPage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private errorMessage: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {
    this.usernameInput = this.page.locator('[data-test="username"]');
    this.passwordInput = this.page.locator('[data-test="password"]');
    this.errorMessage = this.page.locator('[data-test="error"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
  }

  async navigate() {
    await this.page.goto("/");
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