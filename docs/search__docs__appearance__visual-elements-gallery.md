---
title: "Google 搜索的视觉元素库"
source: https://developers.google.com/search/docs/appearance/visual-elements-gallery?hl=zh_CN
slug: search__docs__appearance__visual-elements-gallery
path: /search/docs/appearance/visual-elements-gallery
---

# Google 搜索的视觉元素库

> 来源: https://developers.google.com/search/docs/appearance/visual-elements-gallery?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Google 搜索的视觉元素库

 视觉元素是 Google 搜索结果页的组成要素，用户可以看到这些元素或与之互动。视觉元素库是一个关于 Google 网页搜索中最常见界面元素的图示指南：其中说明了这些元素的外观、名称，以及您是否能够针对每种元素优化您的网站。

##  Google 搜索结果页剖析

 Google 搜索结果页包含一组不同类型的搜索结果视觉元素，而每个搜索结果都有自己的一组可能的子视觉元素。例如，**文本结果本身就是视觉元素，它包含各种子视觉元素，例如出处、标题链接和摘要。

 视觉元素的外观可能会随着时间而改变，并且给定搜索结果的显示方式也可能会有所不同，具体取决于您使用的是桌面设备还是手机、您所处的国家/地区、搜索查询的语言，以及许多其他因素。以下是在 Google 搜索中最常见到的几种搜索结果视觉元素：

常见的搜索结果视觉元素类型

 文字搜索结果

 Google 搜索中根据网页的文字内容显示的搜索结果。详细了解[文字搜索结果视觉元素](#text-result)。

 富媒体搜索结果

 这种结果通常依赖于网页标记中的结构化数据来显示图形元素或互动体验。请参阅[结构化数据功能列表](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=zh-cn)。

 图片搜索结果

 根据网页中嵌入的图片显示的搜索结果。对于图片搜索查询，更有可能显示图片搜索结果。详细了解[图片搜索结果视觉元素](#image-result)。

 视频搜索结果

 根据网页中嵌入的视频显示的搜索结果。对于视频搜索查询，更有可能显示视频搜索结果。详细了解[视频搜索结果视觉元素](#video-result)。

 探索功能

 一项可帮助搜索用户扩展和优化初始搜索的功能。详细了解[探索功能](#exploration)。

##  来源/出处

 来源/出处用于说明搜索结果的来源，可以出现在各种搜索结果中，包括出现在文字搜索结果、图片搜索结果和视频搜索结果中。来源/出处可以包括来源的各方面信息，例如网站名称、网站图标和网页网址。

出处视觉元素

###  网站图标

 与网站关联的小图标。了解如何[提供网站图标](https://developers.google.com/search/docs/appearance/favicon-in-search?hl=zh-cn)。

###  网站名称

 网站的名称。了解如何[通过结构化数据提供网站名称](https://developers.google.com/search/docs/appearance/site-names?hl=zh-cn)。

###  可见网址

 以可读格式显示的网页网址。可见网址包含两个部分：域名和面包屑导航。

###  域名

 通过域名定义的网址。这是您在设置网站时选择的名称（例如 example.com）。

###  面包屑导航

 一个路径，显示网页在网站层次结构中的位置。了解如何使用[面包屑导航结构化数据](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?hl=zh-cn)来指定该路径。

##  文字搜索结果

 *文字搜索结果*（以前称为“网页搜索结果”或“普通的蓝色链接”）是 Google 搜索中根据网页的文字内容显示的搜索结果，其中包含来源/出处、标题链接和摘要等视觉元素。

 文字搜索结果可能还包括其他视觉元素，例如丰富属性或站点链接群组；请注意，给定文字搜索结果的显示方式可能会有所不同，具体取决于多种因素，例如您使用的设备、您搜索的内容或您使用的语言。您不会看到包含所有可能视觉元素的文字搜索结果。

文字搜索结果视觉元素

###  来源/出处

 网页的来源信息。了解[如何控制出处](#attribution)。

###  标题链接

 Google 搜索及其他 Google 产品和服务（例如 Google 新闻）上链接到该网页的搜索结果标题。了解如何[影响标题链接](https://developers.google.com/search/docs/appearance/title-link?hl=zh-cn)。

###  摘要

 Google 搜索及其他 Google 产品和服务（例如 Google 新闻）上的搜索结果中显示的描述或摘要部分。了解[如何控制摘要](https://developers.google.com/search/docs/appearance/snippet?hl=zh-cn)。

###  署名日期

 Google 估计的网页更新或发布日期。了解[如何提供署名日期](https://developers.google.com/search/docs/appearance/publication-dates?hl=zh-cn)。

###  站点链接群组

 来自同一个网域或其[本地化版本](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=zh-cn)、一起显示在一条文字搜索结果下的两个或更多个链接。例如，这些链接可能是相应网域中的其他网页、标题，或相应网页内的锚标记。

站点链接群组包含两个或更多个站点链接：

###  站点链接

 站点链接群组中的单个链接。虽然站点链接是自动显示的，但您也可以[遵循一些最佳实践来使系统显示更理想的链接](https://developers.google.com/search/docs/appearance/sitelinks?hl=zh-cn#sitelinks-best-practices)。

###  文字搜索结果图片

 *文字搜索结果图片*是特定网页中与给定查询最相关的图片。用户点按该图片后，会转到嵌入了该图片的网页。对于图片搜索查询，更有可能显示文字搜索结果图片。

 若要针对文字搜索结果图片进行优化，请遵循[图片搜索引擎优化 (SEO) 最佳实践](https://developers.google.com/search/docs/appearance/google-images?hl=zh-cn)。

###  丰富属性

 **丰富属性是关于网页的一行或多行附加信息，例如评价星级和食谱信息。这些信息通常依托于您提供的[结构化数据](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=zh-cn)。

##  图片搜索结果

 *图片搜索结果*是根据网页中嵌入的图片显示的搜索结果。 对于图片搜索查询，更有可能显示图片搜索结果。若要针对图片搜索结果优化您的图片，请遵循[图片搜索引擎优化 (SEO) 最佳实践](https://developers.google.com/search/docs/appearance/google-images?hl=zh-cn)。

图片搜索结果视觉元素

###  图片缩略图

 嵌入网页中的已编入索引图片的图片缩略图。用户点按或点击它后会转到图片。若要针对图片搜索结果优化您的图片，请遵循[图片搜索引擎优化 (SEO) 最佳实践](https://developers.google.com/search/docs/appearance/google-images?hl=zh-cn)。

###  归因

 嵌入了相应图片的网页的来源信息。了解[如何控制出处](#attribution)。

##  视频搜索结果

 *视频搜索结果*是根据网页中嵌入的视频显示的搜索结果。对于视频搜索查询，更有可能显示视频搜索结果。若要针对视频搜索结果优化您的视频，请遵循[视频最佳实践](https://developers.google.com/search/docs/appearance/video?hl=zh-cn)。

视频搜索结果视觉元素

###  视频缩略图

 嵌入网页中的已编入索引视频的视频缩略图。点按或点击该缩略图会将用户带到嵌入相应视频的网页。了解如何[指定视频缩略图](https://developers.google.com/search/docs/appearance/video?hl=zh-cn#video-thumbnail)。

###  标题链接

 视频着陆页的标题链接。了解如何[影响标题链接](https://developers.google.com/search/docs/appearance/title-link?hl=zh-cn)。

###  来源/出处

 视频着陆页的来源信息。了解[如何控制出处](#attribution)。

###  上传日期

 视频元数据中提供的视频发布日期。了解如何[优化您的视频](https://developers.google.com/search/docs/appearance/video?hl=zh-cn)。

##  探索功能

 探索功能有助于搜索用户探索更多与其原始搜索查询相关的问题或搜索内容，也称为“其他用户还问了以下问题”。虽然您无法控制此处显示的内容，但在考虑可以为您的网站撰写的主题时，留意相关搜索查询会很有帮助。

###  相关搜索群组

 **相关搜索群组是其他用户进行过的一系列相关搜索。用户点按或点击相关搜索后，会转到另一个搜索结果页。这些搜索是根据初始查询和用户搜索过的其他内容自动生成的。

###  相关问题群组

 “相关问题群组”是与用户最初搜索的内容相关的一系列问题（也称为“其他用户还问了以下问题”）。**当用户展开问题时，系统会显示一个精选摘要。 了解如何[管理精选摘要](https://developers.google.com/search/docs/appearance/featured-snippets?hl=zh-cn)。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-02-05。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-02-05。"],[],["Google Search results pages consist of various visual elements, including text, rich, image, and video results, along with exploration features. Each result type contains child elements like attribution, title links, and snippets. Attribution elements indicate the result's source, such as favicon, site name, and URL. Text results may also include byline dates or sitelinks. Image and video results have thumbnails. Exploration features offer related searches and questions, enabling users to refine their queries. The display can vary based on the device, location, and language.\n"]]

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
