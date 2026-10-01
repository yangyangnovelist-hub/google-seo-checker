---
title: "Search Console 使用入门"
source: https://developers.google.com/search/docs/monitor-debug/search-console-start?hl=zh_CN
slug: search__docs__monitor-debug__search-console-start
path: /search/docs/monitor-debug/search-console-start
---

# Search Console 使用入门

> 来源: https://developers.google.com/search/docs/monitor-debug/search-console-start?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Search Console 使用入门

 [Search Console](https://goo.gle/searchconsole) 是 Google 推出的一款工具，可以帮助任何网站所有者了解其网站在 Google 搜索中的表现，以及如何改进网站在 Google 搜索上的呈现效果，使网站获得更相关的流量。

 Search Console 提供了与 [Google 如何抓取网站、将网站编入索引和呈现网站](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=zh-cn)相关的信息。这有助于网站所有者监控和优化其网站在 Google 搜索上的表现。

 无需每天都登录本工具。如果 Google 在您的网站中发现了新问题，Search Console 会通过发送电子邮件提醒您。不过，建议您大致每个月或每当更改网站内容时检查一次您的账号，确保数据稳定可靠。详细了解如何[使用 Search Console 管理您的网站](https://support.google.com/webmasters/answer/6258314?hl=zh-cn)。

 如需开始使用本工具，请按以下步骤操作：

1. **验证对网站的所有权**。访问 Search Console 提供的所有信息。 详细了解[如何验证您对网站的所有权](https://support.google.com/webmasters/answer/9008080?hl=zh-cn)。
2. **确保 Google 能够找到并读取您的网页**。借助[“索引涵盖范围”报告](https://support.google.com/webmasters/answer/7440203?hl=zh-cn)，您可以大致了解 Google 已编入索引或已尝试编入索引的您网站中的所有网页。查看系统提供的列表，并尝试修正网页错误和解决警告的问题。
3. **考虑向 Search Console 提交站点地图**。即使您未执行这个步骤，Google 也能够发现您网站中的网页。不过，通过 Search Console 提交站点地图可能会使 Google 更快地发现您网站中的网页。如果您决定通过本工具提交站点地图，将能够监控与之相关的信息。详细了解[“站点地图”报告](https://support.google.com/webmasters/answer/7451001?hl=zh-cn)。
4. **监控您网站的表现**。[“搜索效果”报告](https://support.google.com/webmasters/answer/7576553?hl=zh-cn)会显示您的网站从 Google 搜索那获得了多少流量，包括按查询、网页和国家/地区细分的数据。根据每种细分数据，您可以了解展示次数、点击次数和其他指标的趋势。 如果您的流量下降，不妨[调试流量下降问题](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=zh-cn)，这有助于您确定各项工作的优先级。

 如果您希望更深入地了解 Search Console，可以重点关注两个大方面。我们在这里提供了一系列与 Web 开发者最相关的报告，以及与 SEO 专家、数字营销人员和网站管理员最相关的报告。虽然这些人群有多个交叉点，但尽量为每个人群提供最相关的报告仍然很有用。

## 面向 SEO 专家、数字营销人员和网站管理员的实用报告

 以下列表包含最有用的 Search Console 报告，可帮助您从各个方面管理 Google 搜索抓取、呈现网站并将其编入索引的方式。

- **了解我们是否对您的网站执行了 Google 搜索人工处置措施**。如果我们对某个网站采取了人工处置措施，那么该网站的部分或全部内容可能无法显示在 Google 搜索结果中。[“人工处置措施”报告](https://support.google.com/webmasters/answer/9044175?hl=zh-cn)会显示所有问题、问题位于您网站的哪个版块中以及在何处了解详情。
- **暂时不让网页显示在 Google 搜索结果中**。借助[“移除”工具](https://support.google.com/webmasters/answer/9689846?hl=zh-cn)，您可以快速从 Google 搜索结果中移除您网站上的内容。如果您的请求获得了批准，有效期仅会持续 6 个月左右，您可利用这段时间找到允许相应内容被用户看到或永久移除该内容的解决方案。
- **将网站迁移情况告知 Google**。当您将网站从一个网域/子网域迁移到另一个网域/子网域时，[地址更改工具](https://support.google.com/webmasters/answer/9370220?hl=zh-cn)会将您的更改告知 Google，并帮助您将旧网站的 Google 搜索结果流量迁移至新网站。
- **检查结构化数据实施方面的问题**。[“富媒体搜索结果状态”报告](https://support.google.com/webmasters/answer/7552505?hl=zh-cn)会显示 Google 可以或无法从您的网站读取哪些结构化数据。您可以详细了解导致您的网页无法显示为富媒体搜索结果的错误、可能会限制网页呈现效果的警告，以及有关如何调试和修正问题的信息。

## 面向 Web 开发者的实用报告

 以下报告可帮助开发者构建健康运行、便于发现且针对 Google 搜索进行优化的网站。

- **了解网站级搜索索引编制问题**。[“索引涵盖范围”报告](https://support.google.com/webmasters/answer/7440203?hl=zh-cn)会显示哪些网页存在错误、警告或已从 Google 搜索中排除。此外，该报告还会显示网站网页在 Google 搜索上累积的展示次数，从而帮助您了解相关问题可能对您的自然流量造成的影响。
- **调试网页级搜索索引编制问题**。[网址检查工具](https://support.google.com/webmasters/answer/9012289?hl=zh-cn)提供了网站网页的当前索引状态和一些选项，您可以使用这些选项测试实际网址、请求 Google 抓取特定网页，以及查看有关该网页的已加载资源的详细信息及其他信息。
- **查找并修复影响您网站的威胁**。[“安全问题”报告](https://support.google.com/webmasters/answer/9044101?hl=zh-cn)会显示与以下情形有关的警告：Google 发现某个网站可能已遭到黑客入侵，或者网站的使用方式可能会危害访问者或其设备。
- **确保您的网站能向用户提供良好的网页体验**。[“Core Web Vitals”报告](https://support.google.com/webmasters/answer/9205520?hl=zh-cn)会根据实际使用情况数据（有时称为实测数据）显示网页的表现。

[获取 Search Console 报告和工具的完整列表](https://support.google.com/webmasters/answer/9133276?hl=zh-cn)

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["Search Console helps website owners understand and improve their Google Search performance. Key actions include verifying site ownership, ensuring Google can access pages via the Index Coverage report, and optionally submitting a sitemap. The Search Performance report monitors traffic trends, allowing debugging of drops. The tool also offers reports for SEO specialists to manage manual actions, removals, site migrations, and rich results. Developers can use it to understand indexing, debug page issues, check for security threats, and monitor user page experience.\n"]]

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
