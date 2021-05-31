## Requirements

```bash
yarn global add balm-core balm-cli
# OR
npm install -g balm-core balm-cli
```

```bash
# Verify
balm -V

# Output:
# balm-cli: 2.0.0
# balm-core: 3.0.0
```

## Installation

```bash
balm init vue-wechat-mp my-project

cd my-project
yarn
# or
npm i
```

## Enjoy

```bash
# For web development
npm run web:dev

# For miniprogram development
npm run mp:dev

# For web and miniprogram development
npm run dev
```

> 使用微信开发者工具导入项目 `.tmp`，之后便可以像开发 web 项目一样开发小程序

```bash
# For web and miniprogram production
npm run prod
```

> 使用微信开发者工具导入项目 `dist/mp`，之后便可预览构建好的小程序
