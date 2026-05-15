---
title: "控制与 Google 分享的内容"
source: https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh_CN
slug: search__docs__crawling-indexing__control-what-you-share
path: /search/docs/crawling-indexing/control-what-you-share
---

# 控制与 Google 分享的内容

> 来源: https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 控制与 Google 分享的内容

 Google 让网站所有者可通过多种方式控制在 Google 搜索结果中显示的内容。虽然大多数人想要的是将网页编入索引，但有时也可能需要采取与之相反的措施：阻止内容显示在 Google 搜索结果中。您可能会出于多种原因而希望阻止 Google 访问您的某些内容：

-  **限制数据**：您可能希望将自己网站上托管的数据仅呈现给已进入您网站的用户。您可以阻止 Google 抓取此类数据，使其不会显示在搜索结果中。
 另请注意，您网站上发布的某些文件可能包含可在 Google 搜索中显示的元数据。 [详细了解如何让隐去的信息不显示在 Google 搜索中](https://developers.google.com/search/docs/crawling-indexing/keep-redacted-information-out?hl=zh-cn)。
-  **避免向受众群体显示价值不大的内容**：您的网站可能包含质量低劣的内容，这类内容不应显示在 Google 搜索中。例如，如果您的网站允许用户创建内容，则其中部分内容可能[质量低劣，甚至是垃圾内容](https://developers.google.com/search/docs/essentials/spam-policies?hl=zh-cn#user-generated-spam)。 如果允许将此类内容编入索引，便可能会对您的网站在 Google 搜索结果中的排名产生负面影响。
-  **让 Google 专注于您的重要内容**：如果您的网站非常庞大（包含超过数十万个网址），且具有内容不太重要的网页，或者有大量重复内容，则可能需要阻止 Google 抓取重复或重要性较低的网页，从而使其专注于更重要的内容。

## 如何屏蔽内容

以下是阻止内容显示在 Google 中的主要方式：

方法

### 从您的网站中移除内容

 **适用对象：所有类型的内容**

 要想避免让内容出现在 Google 搜索中或互联网上的任何其他位置，最可靠的方法是将其从网站中移除。

### 通过密码保护文件

 **适用对象：所有类型的内容**

 如果您的网站上有机密或非公开的内容，则需要使用密码对其加以保护，以确保只有授权用户才能访问这些内容。这种方式还能阻止相应内容显示在 Google 搜索中。如果该内容已经显示在我们的搜索结果中，密码保护措施最终也会将其从搜索结果中移除。

[`noindex` 规则](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=zh-cn)

 **适用对象：所有类型的内容**

 `noindex`robots`meta` 标记是一项规则，它能告知 Google 不要将您的内容编入索引，也不要让其显示在 Google 搜索结果中。用户仍然可以通过其他网页链接到并访问您的内容，或直接输入链接来访问您的内容，但您的内容不会显示在 Google 搜索结果中。

###  使用 [robots.txt](https://developers.google.com/search/docs/crawling-indexing/prevent-images-on-your-page?hl=zh-cn#for-non-emergency-image-removal) 禁止抓取内容

 **适用对象：图片和视频**

 Google 只会将 Googlebot 可抓取的图片和视频编入索引。如要阻止 Googlebot 访问您的媒体文件，请使用 [robots.txt 规则屏蔽相应文件](https://developers.google.com/search/docs/crawling-indexing/prevent-images-on-your-page?hl=zh-cn#for-non-emergency-image-removal)。

 [停用特定的 Google 产品和服务](https://support.google.com/webmasters/answer/3035947?hl=zh-cn)

 **适用对象：网页**

 您可以告知 Google 不要将您网站上的内容包含在特定的 Google 产品和服务中，例如 [Google 购物](https://www.google.com/shopping?hl=zh-cn)、[Google 酒店](https://www.google.com/travel/hotels?hl=zh-cn)和民宿。

## 从 Google 中移除现有内容

 如果您网站上托管的内容已经显示在 Google 中，您可以要求移除相应搜索结果。不妨了解一下如何[从 Google 中移除托管在您网站上的网页](https://developers.google.com/search/docs/crawling-indexing/remove-information?hl=zh-cn)。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-31。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-31。"],[],["Site owners can control Google's search results by preventing specific content from appearing. Reasons include restricting data, hiding low-value content, and focusing Google on important content. Methods to block content include removing it from the site, password-protecting files, using the `noindex` rule, disallowing crawling via `robots.txt`, or opting out of specific Google properties. For content already indexed, site owners can request its removal from Google's search results. Site owners can opt-out of the page annotation feature.\n"]]

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
