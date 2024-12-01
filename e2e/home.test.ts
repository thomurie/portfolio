import { test, expect } from '@playwright/test';

test('Home page should load correctly', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Thomas Urie/);
	await expect(page.locator('h1')).toHaveText(/Thomas Urie/);
});
