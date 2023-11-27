## 介绍

本程序是关于DDracenetwork的辅助程序，具有查询游戏分数、排名等相关查询功能。
this project aim at remaking the outdated web of https://ddnet.org by using vue3+ts+vite and other new technologies
您可以在 DDNet 网站上获取二进制版本，在 Steam 上找到它或从存储库安装。
## 使用说明

输入游戏id可以查询相关信息

## 目录

├─index.html
├─README.md
├─update.ts
├─src
|  ├─App.vue
|  ├─main.ts
|  ├─views
|  ├─tools
|  ├─stores
|  ├─router
|  ├─i18n
|  ├─components
|  ├─axios
|  ├─assets
|  |   ├─svg
|  |   ├─responsive
|  |   ├─countryflags
|  |   ├─background
├─public
|   ├─favicon.ico
|   ├─favicon.png
|   ├─favicon~1.ico
|   └loader.svg
## 常见问题说明


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile countries flags
```sh
npm run update
```

### Preview project
```sh
npm run preview
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
