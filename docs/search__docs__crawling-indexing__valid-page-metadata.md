---
title: "使用有效的 HTML 指定网页元数据"
source: https://developers.google.com/search/docs/crawling-indexing/valid-page-metadata?hl=zh_CN
slug: search__docs__crawling-indexing__valid-page-metadata
path: /search/docs/crawling-indexing/valid-page-metadata
---

# 使用有效的 HTML 指定网页元数据

> 来源: https://developers.google.com/search/docs/crawling-indexing/valid-page-metadata?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 使用有效的 HTML 指定网页元数据

 使用有效的 HTML 指定页面元数据可确保 Google 能够使用所指定的元数据。 即使 HTML 无效或与 [HTML 标准](https://html.spec.whatwg.org/multipage/)不符，Google 也会尽力理解 HTML，但标记中的错误可能会导致 Google 搜索利用元数据的方式出现问题。 用于指定网页元数据的主要元素是 HTML 文档的 `<head>` 元素。如果您在 `<head>` 元素中使用了无效元素，Google 会忽略该无效元素之后显示的所有元素。

## 在 `<head>` 元素中使用有效元素

 根据 HTML 标准，`<head>` 元素只能包含以下有效元素（不得包含其他无效元素）：

- `title`
- `meta`
- `link`
- `script`
- `style`
- `base`
- `noscript`
- `template`

## 请勿在 `<head>` 元素中使用无效元素

 HTML 标准仅允许在 `<head>` 元素中使用上述元素。出现在 `<head>` 元素中会使其失效的常见元素包括：

- `iframe`
- `img`

 我们强烈建议您不要在 `<head>` 元素中使用这些无效元素，但如果必须使用，请将这些无效元素放置在您希望 Google 看到的元素之后。Google 检测到其中一个无效元素后，会假定到达 `<head>` 元素末尾，并停止读取 `<head>` 元素中的任何其他元素。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-31。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-31。"],[],["Valid HTML is crucial for Google to utilize page metadata correctly. The `\u003chead\u003e` element is key for this; only specific elements (`title`, `meta`, `link`, `script`, `style`, `base`, `noscript`, `template`) are allowed within it. Invalid elements, like `iframe` or `img`, cause Google to ignore any subsequent elements within `\u003chead\u003e`. Avoid invalid elements; if used, place them after valid ones to ensure Google reads the desired metadata first.\n"]]

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
