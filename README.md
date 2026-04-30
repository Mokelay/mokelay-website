# Mokelay Website

Mokelay IDE 官网，基于 Nuxt 4、Vue 3、TypeScript、Nuxt Server/Nitro、nuxt-auth-utils、PostgreSQL 和 Drizzle ORM。

## 功能

- 首页产品介绍、功能卖点、工作流展示、FAQ 和转化 CTA。
- `/pricing` 静态价格方案：Free、Pro、Team、Enterprise。
- `/login`、`/register` 完整账号入口。
- `/dashboard` 受保护控制台页面。
- `/api/auth/register`、`/api/auth/login`、`/api/auth/logout`、`/api/me`、`/api/billing/webhook`。

## 快速开始

```bash
npm install
cp .env.example .env
npm run dev
```

`NUXT_SESSION_PASSWORD` 必须至少 32 个字符。未配置 `DATABASE_URL` 时，开发环境会使用进程内存用户库，方便本地预览和 E2E；生产环境请配置 PostgreSQL。

## 数据库

Drizzle schema 位于 `server/database/schema.ts`。

```bash
npm run db:generate
npm run db:migrate
```

## 测试

```bash
npm run typecheck
npm run test:unit
npm run test:e2e
```

Playwright 会自动启动 Nuxt dev server，并使用内存用户库跑通注册、控制台和登出流程。

## 项目结构

- `app/pages`：官网页面和控制台页面。
- `app/components`：营销区块、价格卡片、认证表单和导航组件。
- `server/api`：Nitro API route。
- `server/utils`：数据库、用户存储和校验工具。
- `server/database`：Drizzle schema。
- `tests/unit`：Vitest 单元测试。
- `tests/e2e`：Playwright E2E 测试。
