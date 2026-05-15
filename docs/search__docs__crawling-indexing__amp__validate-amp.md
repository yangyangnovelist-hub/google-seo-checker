---
title: "验证 AMP 内容是否可以显示在 Google 搜索结果中"
source: https://developers.google.com/search/docs/crawling-indexing/amp/validate-amp?hl=zh_CN
slug: search__docs__crawling-indexing__amp__validate-amp
path: /search/docs/crawling-indexing/amp/validate-amp
---

# 验证 AMP 内容是否可以显示在 Google 搜索结果中

> 来源: https://developers.google.com/search/docs/crawling-indexing/amp/validate-amp?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 验证 AMP 内容是否可以显示在 Google 搜索结果中

[创建 AMP 内容](https://developers.google.com/search/docs/guides/enhance-amp?hl=zh-cn)后，您可以通过以下几种方式验证 AMP 内容是否可以在 Google 搜索结果中显示：

- 使用 [AMP 测试工具](https://search.google.com/test/amp?hl=zh-cn)确保您的 AMP 内容能够在 Google 搜索结果中显示。
- 对于[适用的 AMP 内容类型](https://developers.google.com/search/docs/guides/about-amp?hl=zh-cn)，请使用[富媒体搜索结果测试](https://search.google.com/test/rich-results?hl=zh-cn)验证结构化数据能否正确解析。
- 使用 [AMP 状态报告](https://search.google.com/search-console/amp?hl=zh-cn)监控您网站上所有 AMP 网页的性能。

## 修正常见的 AMP 错误

 如果您的 AMP 网页没有在 Google 搜索结果中显示，请尝试以下步骤：

**注意**：Google 可能需要一段时间才能将您的 AMP 内容编入索引。 如果 Google 已将您的内容编入索引，而您有最新版本的内容要发布，需要立即更新 Google AMP Cache，那么请[更新 Google AMP Cache](https://developers.google.com/amp/cache/update-ping?hl=zh-cn)。

1. 关联相关网页，[使您的 AMP 网页可被轻松发现](https://www.ampproject.org/docs/guides/discovery)。

  - 您是否向规范网页添加了 `rel="amphtml"`？
  - 您是否向其他非 AMP 网页（例如移动版网页）添加了 `rel="amphtml"`？
  - 您是否向 AMP 网页添加了 `rel="canonical"`？

2. 遵循[针对 AMP 网页的 Google 搜索指南](https://developers.google.com/search/docs/crawling-indexing/amp?hl=zh-cn)。
3. 使您的 AMP 内容可供 Googlebot 访问：

  - 修改网站的 robots.txt，允许 Googlebot 抓取规范网页、AMP 网页以及结构化数据中的链接（若适用）。
  - 从规范内容和 AMP 内容中移除所有 robots`meta` 标记和 `X-Robots-Tag` HTTP 标头。如需了解详情，请参阅 [Robots`meta` 标记和 `X-Robots-Tag` HTTP 标头规范](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn)。

4. 确保您的结构化数据遵循适用于[您的网页和功能类型](https://developers.google.com/search/docs/guides/search-gallery?hl=zh-cn)的结构化数据指南。如需详细了解 AMP 的结构化数据要求，请参阅 [Google 搜索中的 AMP 网页简介](https://developers.google.com/search/docs/guides/about-amp?hl=zh-cn)。

完成相应步骤后，如果您的 AMP 网页仍然无法在 Google 搜索结果中显示，请参考下面列出的一些其他原因：

- 您所在的国家/地区可能无法使用某些 Google 搜索功能。
- 您的网站可能尚未编入索引。若要详细了解抓取和索引编制功能，请参阅[抓取和索引编制常见问题解答](https://developers.google.com/search/help/crawling-index-faq?hl=zh-cn)。

## 资源

要调试验证和缓存错误，请参阅以下 [ampproject.org](https://www.ampproject.org/) 资源：

- [AMP 验证错误](https://www.ampproject.org/docs/reference/validation_errors)
- [如何修复验证错误？](https://www.ampproject.org/docs/guides/validate#how-do-i-fix-validation-errors?)
- [调试 AMP Cache 问题](https://www.ampproject.org/docs/guides/amp-cache-debugging)

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["To validate AMP content for Google Search, use the AMP Test Tool, Rich Results Test, and AMP status report. If AMP pages don't appear, ensure they're discoverable by linking correctly with `rel=\"amphtml\"` and `rel=\"canonical\"`. Follow Google Search guidelines for AMP and allow Googlebot access via robots.txt. Check structured data validity and confirm Google Search features are available in your country. Consult ampproject.org resources for debugging validation and cache issues.\n"]]

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

  -  [ 转到帮助论坛 ](https://support.google.com/webmasters/community)
  -  [ 向“咨询交流时间”活动提交问题 ](/search/help/office-hours)
  -  [ 举报垃圾内容、钓鱼式攻击内容或恶意软件 ](/search/help/report-quality-issues)
  -  [ 更多的支持资源 ](/search/help)

-

### 资源

  -  [ 您需要 SEO 吗？ ](/search/docs/fundamentals/get-on-google)
  -  [ SEO 新手指南 ](/search/docs/fundamentals/seo-starter-guide)
  -  [ 搜索系统的状态 ](https://status.search.google.com)
  -  [ Search Console 文档 ](https://support.google.com/webmasters)
  -  [ 案例研究 ](/search/case-studies/overview)

-

### 工具

  -  [ Search Console ](https://search.google.com/search-console)
  -  [ 富媒体搜索结果测试 ](https://search.google.com/test/rich-results)
  -  [ PageSpeed Insights ](https://pagespeed.web.dev)
  -  [ AMP 测试 ](https://search.google.com/test/amp)

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
