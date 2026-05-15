---
title: "添加与电子商务有关的结构化数据"
source: https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce?hl=zh_CN
slug: search__docs__specialty__ecommerce__include-structured-data-relevant-to-ecommerce
path: /search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce
---

# 添加与电子商务有关的结构化数据

> 来源: https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 添加与电子商务有关的结构化数据

 Google 会像对待其他网站一样[抓取您的电子商务网站并将其编入索引](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=zh-cn)，并通过算法来了解您的内容及其意图。结构化数据是一种机器可读的标准化格式，用来提供网页的相关信息。这有助于 Google 更准确地了解您的内容。

 结构化数据通常并非仅针对电子商务网站，但也有一些结构化数据类型是这样的。以下资源有助于详细了解您的电子商务网站的结构化数据。

-  有关 Google 如何使用结构化数据的相关说明，请参阅[了解结构化数据的工作方式](https://developers.google.com/search/docs/guides/intro-structured-data?hl=zh-cn)。
-  如需了解电子商务网站的结构化数据（也称为架构标记）的广度，请参阅 [schema.org](https://schema.org/)。Google 支持很多（但并非全部）由 schema.org 定义的结构化数据类型。

 **是否使用内容管理系统 (CMS)？**如果您使用的是电子商务平台，那么通过集成式平台扩展程序或插件来添加结构化数据可能会更简单。

 以下类型的结构化数据与电子商务网站密切相关。请注意，买家可能处于其购物历程的不同阶段，除了寻找商品页面，他们还会寻求更多内容。

 电子商务结构化数据类型

####  [`BreadcrumbList`](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?hl=zh-cn)

 如需帮助 Google 了解您网站的网页层次结构，请参阅[面包屑导航标记文档](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?hl=zh-cn)。这有助于 Google 在搜索结果中显示更有意义的面包屑导航路径。

####  [`LocalBusiness`](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=zh-cn)

 如果您拥有实体店，请在您的商家信息页上向 Google 提供有关您商家的更多信息，例如使用 [`LocalBusiness`](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=zh-cn) 结构化数据提供商店地点以及营业时间。

 您可能还需要执行以下操作：

-  直接在 [Google 我的商家](https://www.google.com/business/?hl=zh-cn)中注册您的商家。
-  注册[您的实体店和商店代码](https://support.google.com/business/answer/4542487?hl=zh-cn)，以供 Google Merchant Center 使用。
-  如需更多建议，例如在您的网站上提供退货政策信息，请参阅 [Merchant Center 指南](https://support.google.com/merchants/answer/6363310?hl=zh-cn)。

####  [`Organization`](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=zh-cn)

 如需向 Google 详细介绍您的商家，例如徽标、联系信息、商家标识符和整个商家退货政策，请参阅 [`Organization` 结构化数据文档](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=zh-cn)。

####  [`Product`](https://developers.google.com/search/docs/appearance/structured-data/product?hl=zh-cn) 和 [`ProductGroup`](https://developers.google.com/search/docs/appearance/structured-data/product-variants?hl=zh-cn)

 如需向 Google 详细介绍您的商品，请参阅 [`Product` 结构化数据文档](https://developers.google.com/search/docs/appearance/structured-data/product?hl=zh-cn)（以及[商品款式/规格](https://developers.google.com/search/docs/appearance/structured-data/product-variants?hl=zh-cn)，如果适用）。另请参阅 Google Merchant Center 文档中的[为 Merchant Center 设置结构化数据](https://support.google.com/merchants/answer/7331077?hl=zh-cn)，了解如何更好地利用 Google 平台上的购物相关体验。

####  [`Review`](https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=zh-cn)

 要帮助 Google 了解您网站上的商品评价以及这些评价的适用情形，请参阅[评价摘要](https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=zh-cn)。

####  [`VideoObject`](https://developers.google.com/search/docs/appearance/structured-data/video?hl=zh-cn)

 如果您的网站包含主要涉及个别视频的网页，适当地标记预先录制的视频（例如在商品页面上）或直播活动，有助于 Google 在 Google 搜索结果中正确显示视频。详情请参阅我们的[视频架构标记文档](https://developers.google.com/search/docs/appearance/structured-data/video?hl=zh-cn) 。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["Google crawls and indexes ecommerce websites, using algorithms to understand content. Employing structured data, a standardized, machine-readable format, enhances Google's content comprehension. Ecommerce-relevant structured data types include `BreadcrumbList` (site hierarchy), `LocalBusiness` (physical store details), `Organization` (business information), `Product` and `ProductGroup` (product details), `Review` (product feedback), and `VideoObject` (video content). Implementing these markups, possibly via CMS plugins, helps Google display information more effectively in search results.\n"]]

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
