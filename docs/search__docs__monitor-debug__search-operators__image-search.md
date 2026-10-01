---
title: "Google 图片搜索运算符"
source: https://developers.google.com/search/docs/monitor-debug/search-operators/image-search?hl=zh_CN
slug: search__docs__monitor-debug__search-operators__image-search
path: /search/docs/monitor-debug/search-operators/image-search
---

# Google 图片搜索运算符

> 来源: https://developers.google.com/search/docs/monitor-debug/search-operators/image-search?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Google 图片搜索运算符

 与网页搜索类似，Google 图片也支持专用的搜索运算符，即 `src:` 和 `imagesize:`。这些运算符仅适用于 Google 图片；它们对其他 Google 产品和服务不起作用。

## `src:` 搜索运算符

 `src:` 搜索运算符将返回在 `src` 属性中引用了运算符中提供的图片网址的网页。例如：

```
**src:**https://example.com/media/carrot.jpg
```

 该运算符会显示来自任何网域的网页，而不仅仅是来自运算符中指定的网址所在网域的网页。这可能有助于了解您在网站上托管的哪些图片被其他网站建立了[热链接](https://en.wikipedia.org/wiki/Hotlink)。

## `imagesize:` 搜索运算符

 `imagesize:` 搜索运算符将显示运算符中指定的尺寸的图片。您必须以“宽 `x` 高”的格式指定尺寸。例如：

```
**imagesize:**1500x1000
```

 此运算符与 `src:` 和 `site:` 运算符配合使用时会非常有帮助。例如，您可以查找您的网站上已编入索引的特定大小图片：

```
**src:**https://example.com/media/carrot.jpg **imagesize:**500x1200
```

将 `imagesize:` 与 `site:` 运算符配合使用，可以按照精确的大小查找图片：

```
**site:**https://example.com/ **imagesize:**500x1200
```

## 限制

 由于图片搜索运算符受索引和检索局限性的制约，因此您可能不会看到在执行标准搜索查询的情况下可能会显示的所有结果。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-04-27。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-04-27。"],[],["Google Images supports the `src:` and `imagesize:` search operators. The `src:` operator finds pages referencing a specific image URL, revealing where images are used across the web, including hotlinked instances. The `imagesize:` operator filters images by specified dimensions (width x height). These operators can be combined, such as using `src:` with `imagesize:` to find a particular-sized image from a particular url. Note that limitations in indexing might lead to incomplete results compared to standard searches.\n"]]

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
