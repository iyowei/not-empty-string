# notEmptyString(str)

> 如果是字符串，并且非空（`''`），则返回 `true`，否则 `false`。

## 使用

```javascript
import notEmptyString from '@iyowei/esm-not-empty-string';

console.log('notEmptyString("")', notEmptyString("")); // false
console.log('notEmptyString("text")', notEmptyString("text")); // true

console.log("notEmptyString(true)", notEmptyString(true)); // false
console.log("notEmptyString(1)", notEmptyString(1)); // false
console.log('notEmptyString(NaN)', notEmptyString(NaN)); // false
console.log('notEmptyString(null)', notEmptyString(null)); // false
```

## 安装

[![Node version](https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js)](https://nodejs.org/en/download/)

```shell
# Pnpm
pnpm add @iyowei/esm-not-empty-string

# yarn
yarn add @iyowei/esm-not-empty-string

# npm
npm add @iyowei/esm-not-empty-string
```

## 参与贡献
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
