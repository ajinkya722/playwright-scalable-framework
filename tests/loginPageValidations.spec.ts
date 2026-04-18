import {test, expect} from '@playwright/test';
import loginPageLocators from '../locators/loginPageLocators';

test.describe('Login Page Validations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('should show error for empty username and password', async ({ page }) => {
    await page.locator(loginPageLocators.loginButton).click();
    await expect(page.locator(loginPageLocators.errorMessage)).toContainText('Username is required');
    await page.locator(loginPageLocators.usernameInput).fill('standard_user');
    await page.locator(loginPageLocators.loginButton).click();
    await expect(page.locator(loginPageLocators.errorMessage)).toContainText('Password is required');
    await page.locator(loginPageLocators.passwordInput).fill('secret_sauce');
    await page.locator(loginPageLocators.loginButton).click();
    await expect(page.locator(loginPageLocators.errorMessage)).not.toBeVisible();
  })
});