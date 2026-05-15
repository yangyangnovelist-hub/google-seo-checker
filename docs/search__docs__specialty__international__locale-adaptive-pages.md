---
title: "Google 如何抓取语言区域自适应网页"
source: https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages?hl=zh_CN
slug: search__docs__specialty__international__locale-adaptive-pages
path: /search/docs/specialty/international/locale-adaptive-pages
---

# Google 如何抓取语言区域自适应网页

> 来源: https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Google 如何抓取语言区域自适应网页

如果您的网站包含*语言区域自适应*网页（也就是说，您的网站会根据检测到的访问者所在国家/地区或访问者首选语言返回不同的内容），Google 可能不会将您的不同语言区域网页的所有内容都纳入抓取/索引/排名范围。这是因为，Googlebot 抓取工具的默认 IP 地址看起来是位于美国境内的。另外，该抓取工具在发送 HTTP 请求时并不会在请求标头中设置 `Accept-Language`。

**重要提示**：我们建议使用单独的语言区域网址配置，并为它们添加 [`rel="alternate"` hreflang 注解](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=zh-cn)。

## 基于地理位置的抓取

除了使用美国境内的 IP 地址之外，Googlebot 还会使用美国境外的 IP 地址进行抓取。

正如我们一直建议的，当 Googlebot 看似来自特定国家/地区时，请像对待来自该国家/地区的任何其他用户一样对待它。这意味着，如果您阻止位于美国的用户访问您的内容，但允许来自澳大利亚的用户访问，那么您的服务器就应该阻止看似来自美国的 Googlebot 访问，但允许看似来自澳大利亚的 Googlebot 访问。

### 其他注意事项

- Googlebot 对所有抓取配置使用相同的用户代理字符串。详细了解 [Google 抓取工具使用的用户代理字符串](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=zh-cn)。
- 您可以使用 DNS 反向查找来[验证 Googlebot 基于地理位置的抓取](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=zh-cn)。
- 如果您的网站使用的是 [*robots 协议*](https://www.rfc-editor.org/rfc/rfc9309.html)，请确保在所有语言区域内一致地应用该协议。这意味着，[漫游器 `meta` 标记](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn)和 [robots.txt 文件](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=zh-cn)必须为每个语言区域指定相同的规则。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["Google crawls locale-adaptive pages using IP addresses from various locations, not just the USA. When Googlebot appears to be from a specific country, treat it like a user from that region. For locale-adaptive sites, using separate URL configurations with `rel=\"alternate\"` hreflang annotations is recommended. Ensure consistent application of robots exclusion protocols, such as robots.txt and meta tags, across all locales. You can verify Googlebot's geo-distributed crawls through reverse DNS lookups.\n"]]

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
