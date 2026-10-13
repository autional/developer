// 家族 npm 实况单一出处（2026-10-06 registry.npmjs.org 实测 8/8 存在）。
// 描述与 docs 站 sdk 页（sites/docs/src/pages/sdk.astro）保持同族口径；
// 页面上的安装命令、软件包清单与服务数一律从这里取，勿在页面内重复字面量。
//
// B2 单源双区（2026-10-07 合并）：显示文案字段（desc）键化——descKey 指向 src/i18n 的
// packages.desc.*（两语言同键集，check-i18n 门禁）；包名 / install 命令等结构字段随数据文件留存。

export const PACKAGES = [
  { name: '@autional/react', descKey: 'packages.desc.react', install: 'npm install @autional/react' },
  { name: '@autional/vue', descKey: 'packages.desc.vue', install: 'npm install @autional/vue' },
  { name: '@autional/next', descKey: 'packages.desc.next', install: 'npm install @autional/next' },
  { name: '@autional/node', descKey: 'packages.desc.node', install: 'npm install @autional/node' },
  { name: '@autional/react-native', descKey: 'packages.desc.reactNative', install: 'npm install @autional/react-native' },
  { name: '@autional/miniapp', descKey: 'packages.desc.miniapp', install: 'npm install @autional/miniapp' },
  { name: '@autional/core', descKey: 'packages.desc.core', install: 'npm install @autional/core' },
  { name: '@autional/onboard', descKey: 'packages.desc.onboard', install: 'npx @autional/onboard' },
  { name: '@autional/ui', descKey: 'packages.desc.ui', install: 'npm install @autional/ui' },
  { name: '@autional/tokens', descKey: 'packages.desc.tokens', install: 'npm install @autional/tokens' },
  { name: '@autional/tailwind-preset', descKey: 'packages.desc.tailwindPreset', install: 'npm install @autional/tailwind-preset' },
  { name: '@autional/shared', descKey: 'packages.desc.shared', install: 'npm install @autional/shared' },
  { name: '@autional/plugin-mfa', descKey: 'packages.desc.pluginMfa', install: 'npm install @autional/plugin-mfa' },
  { name: '@autional/plugin-passkey', descKey: 'packages.desc.pluginPasskey', install: 'npm install @autional/plugin-passkey' },
  { name: '@autional/plugin-tenant', descKey: 'packages.desc.pluginTenant', install: 'npm install @autional/plugin-tenant' },
  { name: '@autional/eslint-config', descKey: 'packages.desc.eslintConfig', install: 'npm install -D @autional/eslint-config' },
  { name: '@autional/tsconfig', descKey: 'packages.desc.tsconfig', install: 'npm install -D @autional/tsconfig' },
];

// 按服务划分的 API 客户端：已随 SDK 主线发布到 npm（@autional/api-*）。
export const API_CLIENTS = [
  'api-identity', 'api-mfa', 'api-oauth', 'api-session', 'api-profile', 'api-tenant', 'api-rbac',
  'api-billing', 'api-audit', 'api-compliance', 'api-wallet', 'api-point', 'api-pay', 'api-storage',
  'api-notification', 'api-communication', 'api-secret', 'api-status', 'api-saml', 'api-verification',
];

// 已发布软件包总数单源 = 上列核心/适配器/插件包 + 按服务划分的 API 客户端（从数组长度派生，避免字面量漂移）。
export const TOTAL_PACKAGES = PACKAGES.length + API_CLIENTS.length;

// 家族服务数单源（与 reference 站 / docs 站口径一致）。
export const SERVICE_COUNT = 27;
