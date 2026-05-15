---
title: "开始在 Google 搜索中使用 Signed Exchange"
source: https://developers.google.com/search/docs/appearance/signed-exchange?hl=zh_CN
slug: search__docs__appearance__signed-exchange
path: /search/docs/appearance/signed-exchange
---

# 开始在 Google 搜索中使用 Signed Exchange

> 来源: https://developers.google.com/search/docs/appearance/signed-exchange?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 开始在 Google 搜索中使用 Signed Exchange

 [Signed Exchange](https://web.dev/articles/signed-exchanges?hl=zh-cn) (SXG) 让 Google 搜索能够预提取您的内容，同时又不损及用户隐私。在实践中，这意味着如果相关网站支持 SXG，则 Google 搜索中显示的 AMP 和非 AMP 结果可能会以注重隐私保护的方式预提取一些关键资源（例如 HTML、JavaScript、CSS、图片或字体）。

 当用户最终点击结果时，由于已有可用的关键资源，网页会更快地开始渲染，从而提供更出色的用户体验。因此，内容的 [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp?hl=zh-cn) 得分可能会降低，进而从整体上改善[网页体验](https://developers.google.com/search/docs/appearance/page-experience?hl=zh-cn)。

## 实现 SXG

 如需实现 SXG，请遵循 [web.dev 上的详细指南](https://web.dev/articles/signed-exchanges?hl=zh-cn#tooling)。实现此机制后，请按照 [Chrome 指南：使用 Signed Exchange 优化 LCP](https://developer.chrome.com/blog/optimizing-lcp-using-signed-exchanges?hl=zh-cn) 进行操作。

对于 AMP 网页，请遵循 [amp.dev 上的详细指南](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/signed-exchange/)。

### Google 搜索的其他要求

 Google 使用 SXG 缓存来预提取内容。Google 可能会多次提供这些缓存的 SXG。

 为了确保在 Google 搜索中显示最新内容，请适当设置 SXG 的失效日期。一般来说，应确保失效日期早于以下两个日期：

- 由 HTTP 标头确定的缓存失效日期
- 如果内容是 JavaScript 或内联 JavaScript，则为 1 天后；否则为 7 天后

 为了确保内容在多种设备上提供时能正确显示，请执行以下操作：

1. 将个性化内容（如购物车）迁移到 SXG 外部的延迟加载元素中。或者，也可以添加带有 `Vary: Cookie` 签名的标头；带有此标头的 SXG 将只向您网站的没有 Cookie 的访问者显示。
2. 采用[自适应设计](https://web.dev/articles/responsive-web-design-basics?hl=zh-cn)构建网页。或者，使用[单独的网址](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=zh-cn#separate-urls)提供桌面版和移动版网页，或使用 [`supported-media``meta` 标记](https://github.com/google/webpackager/blob/main/docs/supported_media.md)为网页添加注释，声明网页不是自适应网页。 例如，在网页的 `<head>` 元素中添加以下标记：

```
<meta name=supported-media content="only screen and (max-width: 640px)">
```

## 监控和调试 SXG

 如需了解有哪些工具可用于调试 SXG，请参阅 [web.dev 上的 SXG 工具指南](https://web.dev/articles/signed-exchanges?hl=zh-cn#tooling)。

 如果 Googlebot 无法解析 SXG，则可能会重新抓取 `Accept` 标头中不带 `application/signed-exchange;v=b3` 的网址，以检索 `text/html` 变体。如果出现任何 SXG 索引编制错误，Google 搜索都会链接到未实施 SXG 的原始网址。

对于 AMP 网页，请使用 Search Console 中的[“AMP 状态”报告](https://support.google.com/webmasters/answer/7450883?hl=zh-cn)监控 [SXG 错误](https://support.google.com/webmasters/answer/7450883?hl=zh-cn#sgx_warning_list)。

## 调试 Google SXG 缓存

如需确定 SXG 是否符合缓存要求，请使用 [SXG Validator Chrome 扩展程序](https://chrome.google.com/webstore/detail/sxg-validator/hiijcdgcphjeljafieaejfhodfbpmgoe?hl=zh-cn)。

 或者，请直接查询 Google SXG 缓存。 例如，如果 SXG 网址为 `https://signed-exchange-testing.dev/sxgs/valid.html`，则相应的缓存网址格式如下：

 `https://signed--exchange--testing-dev.webpkgcache.com/doc/-/s/signed-exchange-testing.dev/sxgs/valid.html`

用于计算子网域和网址路径后缀的算法与 [AMP Cache 相同](https://amp.dev/documentation/guides-and-tutorials/learn/amp-caches-and-cors/amp-cache-urls/)，但中缀字符串 `/doc/-/` 有所不同。

 如果响应为 SXG，这意味着来自源服务器的响应符合 Google SXG [缓存要求](https://github.com/google/webpackager/blob/main/docs/cache_requirements.md)。否则，响应中将包含指明原因的 HTTP 标头。

- 如果存在 `Warning` 标头，则表示出现了错误，导致 SXG 不符合缓存要求。
- 如果存在 `Location` 标头，则表示相应资源尚未被缓存系统提取。这不是 SXG 中存在的错误。

 无论给出了怎样的响应，缓存系统都会在队列中加入一个对原始网址的请求，以获取一份最新副本。多种因素都会影响系统何时以及是否发出此请求，包括 Googlebot 抓取您网站的速度有多快。

 Google 缓存 SXG 的时间不会超出 SXG 签名的 `expires` 值或 SXG 响应的未签名标头的[新鲜度生命周期](https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.1)。

对于 AMP 网页，可以使用[网址检查工具](https://support.google.com/webmasters/answer/9012289?hl=zh-cn)调试缓存错误。

## 随时掌握最新信息

 订阅 [webpackaging-announce](https://groups.google.com/g/webpackaging-announce?hl=zh-cn) 邮寄名单，随时掌握关于以下变更的最新消息：

- Google SXG 缓存系统的变更，包括增添新功能或弃用现有功能的变更。
- SXG 工具 Web Packager、NGINX SXG 模块和 libsxg 的重大变更。

如果您对在 Google 搜索中使用 SXG 有任何疑问，请访问[搜索中心帮助社区](https://support.google.com/webmasters/community?hl=zh-cn)。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-02-20。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-02-20。"],[],["Signed exchanges (SXG) enable Google Search to prefetch website content, improving user experience by reducing page load times. To implement SXG, use guides from web.dev or amp.dev (for AMP pages). Ensure up-to-date content by setting SXG expiration to less than one day (for JavaScript) or seven days, or less than the HTTP cache expiration. Optimize for multiple devices, and use debugging tools like the SXG Validator extension. Monitor SXG performance and errors via Google Search Console, and stay informed of updates via the webpackaging-announce mailing list.\n"]]

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
