import { expect, test } from '@playwright/test'

test('renders the marketing home page', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: /更少 Token/ })).toBeVisible()
  await expect(page.getByRole('link', { name: '免费试用生成器' })).toBeVisible()
  await expect(page.getByText('把生成成本和使用门槛一起降下来。')).toBeVisible()
})

test('renders pricing plans', async ({ page }) => {
  await page.goto('/pricing')

  await expect(page.getByRole('heading', { name: '按生成规模和集成深度选择。' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Free' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Pro' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Team' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Enterprise' })).toBeVisible()
})

test('switches locale and theme from the header', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: '语言' }).click()
  await expect(page.getByRole('heading', { name: /fewer tokens/ })).toBeVisible()

  await page.getByRole('button', { name: 'Theme' }).click()
  await expect(page.locator('body')).toHaveClass(/theme-light/)
})

test('registers, opens dashboard, and logs out', async ({ page }) => {
  const email = `e2e-${Date.now()}@mokelay.test`

  await page.goto('/register')
  await page.getByLabel('姓名').fill('E2E Builder')
  await page.getByLabel('邮箱').fill(email)
  await page.getByLabel('密码').fill('mokelay123')
  await page.getByRole('button', { name: '注册并进入控制台' }).click()

  await expect(page).toHaveURL(/\/dashboard/)
  await expect(page.getByRole('heading', { name: /欢迎，E2E Builder/ })).toBeVisible()

  await page.getByRole('button', { name: '退出登录' }).click()
  await expect(page).toHaveURL(/\/login/)
})
