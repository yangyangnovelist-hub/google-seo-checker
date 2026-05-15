---
title: "Google 搜索中的翻译搜索结果功能"
source: https://developers.google.com/search/docs/appearance/translated-results?hl=zh_CN
slug: search__docs__appearance__translated-results
path: /search/docs/appearance/translated-results
---

# Google 搜索中的翻译搜索结果功能

> 来源: https://developers.google.com/search/docs/appearance/translated-results?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Google 搜索中的翻译搜索结果功能

 Google 搜索致力于让信息可供所有用户使用，使人人受益。用户通常会使用自己的本地语言搜索内容，但搜索结果中的内容不一定会使用相同的语言。为了弥合这种语言差异带来的内容和观点差距，如果搜索结果的语言与用户的搜索查询语言不一致，且系统支持将搜索结果翻译成用户搜索查询的语言，Google 可能会将搜索结果的标题链接和摘要翻译成用户搜索查询时使用的语言。经过翻译的搜索结果能让用户查看以其所用语言显示的其他语言的结果，并且可以帮助发布商覆盖更广泛的受众群体。

## 功能可用性

 目前，Google 可以将搜索结果翻译成以下语言：阿拉伯语、孟加拉语、英语、法语、德语、古吉拉特语、印地语、印度尼西亚语、卡纳达语、韩语、马拉雅拉姆语、马拉地语、波斯语、葡萄牙语、西班牙语、泰米尔语、泰卢固语、泰语、土耳其语、乌尔都语、越南语。此功能既支持移动设备，也支持桌面设备。

## 翻译搜索结果功能的运作方式

 如果用户点击翻译后的标题链接，则会看到一个经过机器翻译的网页。用户也可以选择查看原始搜索结果，并查看以原始语言显示的整个网页。

 Google 并不托管任何翻译版网页。通过翻译搜索结果打开网页与通过[谷歌翻译](https://support.google.com/translate/answer/2534559?hl=zh-cn)打开原始搜索结果或使用 [Chrome 浏览器内翻译功能](https://support.google.com/chrome/answer/173424?hl=zh-cn)查看网页没有区别。也就是说，网页上的 JavaScript 以及嵌入的图片和其他网页功能通常都受支持。

如果您运营一个广告网络，则可能需要执行额外的操作，以确保在用户点击翻译搜索结果后，该广告网络可正确显示。详细了解如何[让广告网络能够使用与翻译相关的 Google 搜索功能](https://developers.google.com/search/docs/appearance/ad-network-and-translation?hl=zh-cn)。

##  在 Search Console 中监控效果

 如需监控翻译搜索结果的点击次数和展示次数，您可以使用[效果报告](https://support.google.com/webmasters/answer/7576553?hl=zh-cn)中的[搜索结果呈现过滤条件](https://support.google.com/webmasters/answer/7576553?hl=zh-cn#zippy=,search-appearance)。

## 选择启用或停用翻译搜索结果功能

 此功能适用于所有网页和基于用户语言的搜索结果。此功能默认即已启用，您无需进行任何操作。

 翻译搜索结果功能与 Google 搜索中的其他翻译相关功能类似。如需选择停用 Google 搜索中的所有翻译功能，请使用 [`notranslate` 规则](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#notranslate)，该规则可以实现为 `meta` 标记或 HTTP 标头：

```
<!-- opt out of translation features on all search engines that support this rule -->
<meta name="robots" content="notranslate">
```

```
<!-- opt out of translation features on Google -->
<meta name="googlebot" content="notranslate">
```

或者，您也可以将该规则指定为 HTTP 响应标头：

```
HTTP/1.1 200 OK
Date: Tue, 25 May 2010 21:42:43 GMT
(...)
**X-Robots-Tag: notranslate**
(...)
```

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-02-20。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-02-20。"],[],["Google Search may translate the title link and snippet of search results into the user's language when the original content is in a different language. This allows users to view content in their own language and broadens the reach for publishers. Translated links open machine-translated pages, with options to view the original. To monitor performance, use the Search Appearance filter. Opt-out of all translation features with the `notranslate` rule via a `meta` tag or HTTP header. This is available on mobile and desktop.\n"]]

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
