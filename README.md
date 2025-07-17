# Tampermonkey-script-blocker

## 简介

**Tampermonkey-script-blocker** 是一个 Tampermonkey 用户脚本仓库，目前包含的脚本**WeiboBlock**可以自动在微博首页和微博搜索页（如 https://weibo.com 和 https://s.weibo.com）屏蔽含有指定敏感关键词的微博内容卡片，从而让你的微博浏览体验更加清爽、纯净。

## WeiboBlock

### 功能说明

- 自动隐藏微博首页和搜索页中，正文包含指定关键词的微博卡片
- 支持自动屏蔽动态加载的新微博
- 关键词列表可自行修改（在脚本顶部 `BLOCK_KEYWORDS` 变量中配置）
- 屏蔽内容在控制台有日志提示

### 屏蔽关键词

默认屏蔽以下关键词（可自行扩展或修改）：

```
男、女、父亲、母亲、大龄剩女、男性、女性、coser、儿子、体育生、
女儿、迪士尼、盲盒、奶茶、COSER、漫展、小孩、结婚、生娃、华为、
大龄女、大妈、单亲、女生、美女、女神、小姐姐、男子、女演员、
健身房、JK、身材、985、211
```

## 安装方法

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器插件
2. 新建脚本，将本仓库中的 `HappyWeibo.user.js` 粘贴保存
3. 刷新微博主页或搜索页，即可自动体验屏蔽效果

## 使用许可

本项目采用 MIT License 许可证开源，欢迎自由使用、修改和分发。

## 联系与反馈

如需添加新功能、报告问题或贡献代码，欢迎提交 issue 或 PR！
