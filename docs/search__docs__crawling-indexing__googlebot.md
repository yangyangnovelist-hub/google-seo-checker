---
title: "Googlebot"
source: https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=zh_CN
slug: search__docs__crawling-indexing__googlebot
path: /search/docs/crawling-indexing/googlebot
---

# Googlebot

> 来源: https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Googlebot

 Googlebot 是 Google 搜索使用的两种[网页抓取工具](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=zh-cn)的通用名称：

-  [**Googlebot 智能手机版**](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers?hl=zh-cn#googlebot-smartphone)：模拟移动设备用户的移动版抓取工具。
-  [**Googlebot 桌面版**](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers?hl=zh-cn#googlebot-desktop)：模拟桌面设备用户的桌面版抓取工具。

您可以通过查看请求中的 [HTTP `user-agent` 请求标头](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=zh-cn)来确定 Googlebot 的子类型。不过，这两类抓取工具都遵循 robots.txt 中的同一产品令牌（用户代理令牌），因此您无法通过使用 robots.txt 有选择地指定 Googlebot 智能手机版或 Googlebot 桌面版。

 对于大多数网站中的内容，Google 主要[将移动版编入索引](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=zh-cn)。因此，多数 Googlebot 抓取请求都会通过移动版抓取工具发出，少数请求会通过桌面版抓取工具发出。

## Googlebot 如何访问您的网站

 对于大多数网站，Googlebot 的平均访问频率不会高于几秒钟一次。不过，由于存在延迟，在一小段时间内，此频率可能会略高一些。 如果您的网站跟不上 Google 的抓取请求频率，您可以[减慢抓取速度](https://developers.google.com/search/docs/crawling-indexing/reduce-crawl-rate?hl=zh-cn)。

 在为 Google 搜索进行抓取时，Googlebot 会抓取[受支持的文件类型](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types?hl=zh-cn)中的前 2MB 内容，以及 PDF 文件中的前 64MB 内容。从渲染的角度来看，HTML 中引用的每个资源（例如 CSS 和 JavaScript）都是独立抓取的，并且每次资源抓取都受到与其他文件（PDF 文件除外）相同的严格文件大小限制。
 达到上限后，Googlebot 会停止抓取，并且只发送已下载的文件部分以供编入索引。文件大小上限适用于未压缩的数据。其他 Google 抓取工具（例如 Googlebot Video 和 Googlebot Image）可能有[不同的限制](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers?hl=zh-cn#file-size-limits)。

 从美国的 IP 地址抓取内容时，Googlebot 的时区为[太平洋时间](https://g.co/kgs/WSf8oR)。

 [Googlebot 的其他技术属性](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=zh-cn#crawl-technical-props)在 Google 抓取工具概览中有所介绍。

## 禁止 Googlebot 访问您的网站

 Googlebot 主要通过之前已抓取的网页中嵌入的链接来发现要抓取的新网址。 对于网站，要想通过不发布指向它的链接来达到保密目的几乎是不可能的。例如，只要有人通过点击您的“私密”网站上的链接访问了另一网站，您的“私密”网址就可能会出现在引荐来源网址标记中，并可能会被所访问的网站存储和发布在其引荐来源网址日志中。

 如果您想阻止 Googlebot 抓取您网站上的内容，可以采用[多种方法](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh-cn)。请注意，抓取和编入索引是有区别的；****禁止 Googlebot 抓取某个网页并不会阻止该网页的网址显示在搜索结果中：

-  **要禁止 Googlebot 抓取网页吗？**请使用 [robots.txt 文件](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=zh-cn)。
-  **不希望 Google 将某个网页编入索引？**请使用 [`noindex`](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=zh-cn)。
-  **完全阻止抓取工具或用户访问某个网页？**请使用[其他方法，例如密码保护](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh-cn)。

 屏蔽 Googlebot 会影响 Google 搜索（包括 Google 探索和所有 Google 搜索功能）以及 Google 图片、Google 视频和 Google 新闻等其他产品。

## 验证 Googlebot

 在决定禁止 Googlebot 访问您的内容之前，请注意 Googlebot 所用的 HTTP `user-agent` 请求标头经常会被其他抓取工具假冒。因此，请务必验证有问题的请求是否确实来自 Google。若要验证请求是否确实来自 Googlebot，最佳方法就是对请求的来源 IP 地址[进行 DNS 反向查找](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=zh-cn#manual)，或将来源 IP 地址与 [Googlebot IP 地址范围](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=zh-cn#use-automatic-solutions)进行比对。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-02-06。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-02-06。"],[],["Googlebot, comprising Desktop and Smartphone crawlers, indexes web content, primarily favoring the mobile version. It crawls most sites at a rate of once every few seconds, fetching up to 15MB of HTML or text-based files and their resources. To manage Googlebot's access, sites can use `robots.txt` to block crawling or `noindex` to prevent indexing. Blocking crawling affects Google Search and related products. Verify Googlebot requests via reverse DNS lookup or by checking the IP range.\n"]]

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
