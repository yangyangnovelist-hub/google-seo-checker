---
title: "在 Google 上启用网络故事"
source: https://developers.google.com/search/docs/appearance/enable-web-stories?hl=zh_CN
slug: search__docs__appearance__enable-web-stories
path: /search/docs/appearance/enable-web-stories
---

# 在 Google 上启用网络故事

> 来源: https://developers.google.com/search/docs/appearance/enable-web-stories?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 在 Google 上启用网络故事

 网络故事是热门“故事”格式的网络版本，可将视频、音频、图片、动画和文字融为一体，营造出动态的消费体验。借助这种直观的格式，您可以通过点按或者在不同内容之间进行滑动，按照自己的节奏进行探索。

 本指南介绍了如何使您的网络故事有资格显示在 Google 搜索（包括 [Google 探索](https://developers.google.com/search/docs/appearance/google-discover?hl=zh-cn)）中。

如果您是创作者，请查看[这些关于创作故事的资源](https://creators.google/en-us/content-creation-products/own-your-content/web-stories/?hl=zh-cn)，无需进行任何编码。

 下面简要介绍了如何在 Google 上启用网络故事：

1. [创建网络故事](#create)。
2. [确保网络故事是有效的 AMP](#valid-amp)。
3. [验证元数据](#metadata)。
4. [检查网络故事是否已编入索引](#indexed)。
5. 遵循[网络故事内容政策](https://developers.google.com/search/docs/guides/web-stories-content-policy?hl=zh-cn)。

##  功能可用性

 网络故事可以在 Google 搜索中显示为单个结果，并适用于所有可以使用 Google 搜索的区域和 Google 搜索支持的所有语言。

 在“探索”信息流中，网络故事可显示为单个卡片，您只需点按该卡片，即可浏览故事。虽然此呈现功能已在 Google 探索适用的所有区域以所有适用的语言推出，但在美国、印度和巴西最有可能展示。

## 创建网络故事

 网络故事本质上属于网页，必须遵循适用于发布常规网页的指南和最佳做法。您可以通过以下两种方式开始创建：

- 从众多[故事编辑器工具](https://creators.google/en-us/content-creation-products/own-your-content/web-stories/?hl=zh-cn#get-started-section)中选择一款开始创建故事，无需进行任何编码。
- 如果您有工程方面的资源，可以[使用 AMP 开始创建](https://amp.dev/about/stories)。为确保您的网络故事能够正常呈现，我们建议您使用 [Chrome 开发者工具](https://developers.google.com/web/tools/chrome-devtools/device-mode?hl=zh-cn#device)模拟不同的设备尺寸和格式。

 为确保顺利完成相关流程，请查看[创建网络故事的最佳做法](https://developers.google.com/search/docs/guides/web-stories-creation-best-practices?hl=zh-cn)。

## 确保网络故事是有效的 AMP

 创作完故事后，请确保网络故事是有效的 AMP。有效的 AMP 故事是指符合各种 [AMP 规范](https://amp.dev/documentation/guides-and-tutorials/learn/webstory_technical_details/)的故事。这样即可通过 AMP 缓存投放故事，确保为用户带来应有的效果和最佳体验。您可以使用以下工具确保网络故事是有效的 AMP：

- [网络故事 Google 测试工具](https://search.google.com/test/amp?hl=zh-cn)：检查网络故事是否有效。
- [网址检查工具](https://support.google.com/webmasters/answer/9012289?hl=zh-cn)：检查网络故事是不是有效的 AMP，并查看网址的 Google 索引编制状态。
- [AMP Linter](https://github.com/ampproject/amp-toolbox/tree/main/packages/linter)：在开发过程中，通过命令行验证网络故事。

## 验证元数据

 若要让网络故事显示在 Google 搜索或 Google 探索中，请提供必要的元数据，以便在预览中显示网络故事。

1. 请参阅[元数据的完整列表](https://amp.dev/documentation/components/amp-story/#metadata-guidelines)。
2. 在[网络故事 Google 测试工具](https://search.google.com/test/amp?hl=zh-cn)中验证您的网络故事预览能否正确显示。

 请注意，每个网络故事都需要包含以下字段：`publisher-logo-src`、`poster-portrait-src`、`title` 和 `publisher`。

## 检查网络故事是否已编入索引

 检查 Google 搜索是否已将您的网络故事编入索引。使用[网址检查工具](https://support.google.com/webmasters/answer/9012289?hl=zh-cn)提交单个网址或使用[“网页索引编制”报告](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=zh-cn)或[站点地图报告](https://support.google.com/webmasters/answer/7440203?hl=zh-cn)查看状态。 如果您的网络故事未编入索引：

1. 为了方便 Google 发现您的网络故事，请在您的网站上添加指向相应网络故事的链接，或者将网络故事的网址添加到站点地图。
2. 所有网络故事都必须是规范网页。确保每个网络故事都有自己的 [`link rel="canonical"`](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/discovery/)。例如：`<link rel="canonical" href="https://www.example.com/url/to/webstory.html">`
如果同一个故事有多个语言版本，请务必[告知 Google 本地化版本](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=zh-cn)。

3. 检查并确保您未通过 robot.txt 或 `noindex` 标记[禁止 Googlebot 访问](https://developers.google.com/search/docs/crawling-indexing?hl=zh-cn)相应网络故事网址。

 [
下一页
  创建网络故事的最佳实践   arrow_forward  ](https://developers.google.com/search/docs/appearance/web-stories-creation-best-practices?hl=zh-cn)

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["To enable Web Stories on Google, creators must first create the story, ensuring it's valid AMP. Key steps include verifying metadata with required fields like `publisher-logo-src`, `poster-portrait-src`, `title`, and `publisher`. Then, check if the story is indexed using the URL Inspection Tool. If not indexed, ensure the story is linked from the site, added to the sitemap, marked as canonical, and not blocked by robots.txt or a noindex tag.\n"]]

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
