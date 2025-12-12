// @ts-check
import { test, expect } from '@playwright/test';
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

test.describe('Login Tests',() => {
  test ('login',async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
  })

  test('valid login', async ({ page }) => {
    await page.fill ('#username', USERNAME);
    await page.fill ('#password', PASSWORD);
    await page.click ('#login-button');
    await expect(page).toHaveTitle('swag labs');
  });
})
  