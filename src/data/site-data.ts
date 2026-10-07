// 家族 npm 实况单一出处（2026-10-06 registry.npmjs.org 实测 8/8 存在）。
// 描述与 docs 站 sdk 页（sites/docs/src/pages/sdk.astro）保持同族口径；
// 页面上的安装命令、软件包清单与服务数一律从这里取，勿在页面内重复字面量。

export const PACKAGES = [
  { name: '@autional/react', desc: 'React SDK：认证 hooks 与组件', install: 'npm install @autional/react' },
  { name: '@autional/onboard', desc: '接入脚手架 CLI：创建并接入 React / Vue / Next.js 项目', install: 'npx @autional/onboard' },
  { name: '@autional/ui', desc: 'React 组件库', install: 'npm install @autional/ui' },
  { name: '@autional/tokens', desc: '设计令牌（CSS 变量）', install: 'npm install @autional/tokens' },
  { name: '@autional/tailwind-preset', desc: 'Tailwind 预设（品牌主题）', install: 'npm install @autional/tailwind-preset' },
  { name: '@autional/shared', desc: '共享工具：API client、认证、类型与 hooks', install: 'npm install @autional/shared' },
  { name: '@autional/eslint-config', desc: 'ESLint 共享配置', install: 'npm install -D @autional/eslint-config' },
  { name: '@autional/tsconfig', desc: 'TypeScript 共享配置', install: 'npm install -D @autional/tsconfig' },
];

// 按服务划分的 API 客户端：已随 SDK 主线发布到 npm（@autional/api-*）。
export const API_CLIENTS = [
  'api-identity', 'api-mfa', 'api-oauth', 'api-session', 'api-profile', 'api-tenant', 'api-rbac',
  'api-billing', 'api-audit', 'api-compliance', 'api-wallet', 'api-point', 'api-pay', 'api-storage',
  'api-notification', 'api-communication', 'api-secret', 'api-status', 'api-saml', 'api-verification',
];

// 主线已发布软件包总数单源（SDK 30 包 + 接入脚手架 CLI；2026-10-07 随 SDK 重命名发版）。
export const TOTAL_PACKAGES = 31;

// 家族服务数单源（与 reference 站 / docs 站口径一致）。
export const SERVICE_COUNT = 27;
