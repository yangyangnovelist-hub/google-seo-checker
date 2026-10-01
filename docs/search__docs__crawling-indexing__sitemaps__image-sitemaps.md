---
title: "图片站点地图"
source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps?hl=zh_CN
slug: search__docs__crawling-indexing__sitemaps__image-sitemaps
path: /search/docs/crawling-indexing/sitemaps/image-sitemaps
---

# 图片站点地图

> 来源: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 图片站点地图

 图片站点地图可以告知 Google 您网站上的其他图片，尤其是 Google 可能无法通过其他方式找到的图片（例如，您的网站通过 JavaScript 代码获取的图片）。您可以创建单独的图片站点地图，也可以向现有站点地图添加图片站点地图标记；这两种方法对 Google 来说都没有问题。

 图片站点地图以常规站点地图为基础，因此[常规站点地图最佳实践](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn#general-guidelines)也适用于图片站点地图。我们还建议您遵循[发布图片的常规最佳实践](https://developers.google.com/search/docs/appearance/google-images?hl=zh-cn)。

## 图片站点地图示例

 以下示例显示的是具有图片站点地图扩展的常规站点地图，其中包含两个 `<url>` 元素：

- `https://example.com/sample1.html`，其中包含两张图片
- `https://example.com/sample2.html`，其中包含一张图片

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://example.com/sample1.html</loc>
    <image:image>
      <image:loc>https://example.com/image.jpg</image:loc>
    </image:image>
    <image:image>
      <image:loc>https://example.com/photo.jpg</image:loc>
    </image:image>
  </url>
  <url>
    <loc>https://example.com/sample2.html</loc>
    <image:image>
      <image:loc>https://example.com/picture.jpg</image:loc>
    </image:image>
  </url>
</urlset>
```

## 图片站点地图引用

`image` 标记在图片站点地图命名空间中定义：[`http://www.google.com/schemas/sitemap-image/1.1`](http://www.google.com/schemas/sitemap-image/1.1?hl=zh-cn)

 为了确保 Google 能使用您的图片站点地图，您必须使用以下必需的标记：

必需的标记

`<image:image>`

 包含单张图片的所有相关信息。每个 `<url>` 标记最多可包含 1,000 个 `<image:image>` 标记。

`<image:loc>`

图片的网址。

 某些情况下，图片网址可能与您的主网站不在同一个网域中。即便如此也不必担心，只要您在 Search Console 中已验证这两个网域即可。例如，当您使用内容分发网络（如 Google 协作平台）托管图片时，请确保在 Search Console 中验证相应托管网站。此外，您应确保 [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=zh-cn) 文件允许抓取您想要编入索引的所有内容。

### 已弃用的标记和属性

 我们从文档中移除了以下标记和属性：`<image:caption>`、`<image:geo_location>`、`<image:title>`、`<image:license>`。如需了解详情，请参阅[弃用公告](https://developers.google.com/search/blog/2022/05/spring-cleaning-sitemap-extensions?hl=zh-cn)。

## 站点地图问题排查

 如果您在站点地图方面遇到问题，可以使用 Google Search Console 调查错误。 如需帮助，请参阅 Search Console 的[站点地图问题排查指南](https://support.google.com/webmasters/answer/7451001?hl=zh-cn#errors)。

##  其他资源

 希望了解更多信息？请参阅以下资源：

-  [将站点地图提交给 Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn#addsitemap)
-  [了解如何结合使用站点地图扩展](https://developers.google.com/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions?hl=zh-cn)

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-02-20。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-02-20。"],[],["Image sitemaps inform Google about images on a site, including those found via JavaScript. Create a separate image sitemap or add image tags to an existing one. Use the `\u003cimage:image\u003e` tag to enclose image details, allowing up to 1,000 per `\u003curl\u003e`, and utilize the `\u003cimage:loc\u003e` tag for the image's URL. Ensure both your main and any image hosting domains are verified in Search Console. Deprecated tags include `\u003cimage:caption\u003e`, `\u003cimage:geo_location\u003e`, `\u003cimage:title\u003e`, and `\u003cimage:license\u003e`.\n"]]

-  [ LinkedIn  ](https://www.linkedin.com/showcase/googlesearchcentral/)
在 LinkedIn 上加入我们

-  [ YouTube  ](https://www.youtube.com/channel/UCWf2ZlNsCGDS89VBF_awNvA?hl=zh-cn)
观看我们的视频

-  [ 博客  ](https://feeds.feedburner.com/blogspot/amDG)
订阅我们的 RSS Feed

-  [ 播客  ](https://pod.link/1512522198)
聆听 Search Off the Record（查无记录）

-  [ X (Twitter)  ](https://twitter.com/googlesearchc)
在 X (Twitter) 上加入我们

-

### 获取支持

  -  [ 转到帮助论坛 ](https://support.google.com/webmasters/community?hl=zh-cn)
  -  [ 向“咨询交流时间”活动提交问题 ](https://developers.google.com/search/help/office-hours?hl=zh-cn)
  -  [ 举报垃圾内容、钓鱼式攻击内容或恶意软件 ](https://developers.google.com/search/help/report-quality-issues?hl=zh-cn)
  -  [ 更多的支持资源 ](https://developers.google.com/search/help?hl=zh-cn)

-

### 资源

  -  [ 您需要 SEO 吗？ ](https://developers.google.com/search/docs/fundamentals/get-on-google?hl=zh-cn)
  -  [ SEO 新手指南 ](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-cn)
  -  [ 搜索系统的状态 ](https://status.search.google.com?hl=zh-cn)
  -  [ Search Console 文档 ](https://support.google.com/webmasters?hl=zh-cn)
  -  [ 案例研究 ](https://developers.google.com/search/case-studies/overview?hl=zh-cn)

-

### 工具

  -  [ Search Console ](https://search.google.com/search-console?hl=zh-cn)
  -  [ 富媒体搜索结果测试 ](https://search.google.com/test/rich-results?hl=zh-cn)
  -  [ PageSpeed Insights ](https://pagespeed.web.dev?hl=zh-cn)
  -  [ AMP 测试 ](https://search.google.com/test/amp?hl=zh-cn)

  [](https://developers.google.com/?hl=zh-cn)

-  [ Android ](//developer.android.com?hl=zh-cn)
-  [ Chrome ](//developer.chrome.com/home?hl=zh-cn)
-  [ Firebase ](//firebase.google.com?hl=zh-cn)
-  [ Google Cloud Platform ](//cloud.google.com?hl=zh-cn)
-  [ Google AI ](//ai.google.dev/?hl=zh-cn)
-  [ 所有产品 ](https://developers.google.com/products?hl=zh-cn)

-  [ 条款 ](https://developers.google.com/terms/site-terms?hl=zh-cn)
-  [ 隐私权政策 ](//policies.google.com/privacy?hl=zh-cn)
-  [ Manage cookies ](#)

-  [English]()
-  [Deutsch]()
-  [Español]()
-  [Español – América Latina]()
-  [Français]()
-  [Indonesia]()
-  [Italiano]()
-  [Polski]()
-  [Português – Brasil]()
-  [Tiếng Việt]()
-  [Türkçe]()
-  [Русский]()
-  [العربيّة]()
-  [हिंदी]()
-  [ภาษาไทย]()
-  [中文 – 简体]()
-  [中文 – 繁體]()
-  [日本語]()
-  [한국어]()
