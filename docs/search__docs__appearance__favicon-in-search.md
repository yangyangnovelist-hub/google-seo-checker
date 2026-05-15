---
title: "定义要在搜索结果中显示的网站图标"
source: https://developers.google.com/search/docs/appearance/favicon-in-search?hl=zh_CN
slug: search__docs__appearance__favicon-in-search
path: /search/docs/appearance/favicon-in-search
---

# 定义要在搜索结果中显示的网站图标

> 来源: https://developers.google.com/search/docs/appearance/favicon-in-search?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 定义要在搜索结果中显示的网站图标

 如果您的网站有[网站图标](https://www.google.com/search?q=what+is+a+favicon&hl=zh-cn)，则它可以显示在与您网站对应的 Google 搜索结果中。

 本文档适用于自然搜索结果。对于 Google Ads 搜索结果中的徽标，请参阅[商家徽标规范](https://support.google.com/adspolicy/answer/12499303?hl=zh-cn#business_logo)。

## 实现

下面介绍了在 Google 搜索结果中显示网站图标需要满足的条件：

1. 按照[指南](#guidelines)中的说明创建网站图标。
2. 使用以下语法将 `<link>` 标记添加到您网站[首页](#guidelines)的标头中：

```
<link rel="icon" href="/path/to/favicon.ico">
```

 为了提取网站图标信息，Google 依赖于 `link` 元素的以下属性：

属性

 `rel`

 Google 支持使用以下 `rel` 属性值来指定网站图标；请根据您的使用场景选择最合适的选项：

 `icon`

 代表您网站的图标，如 [HTML 标准](https://html.spec.whatwg.org/#rel-icon)中所定义。

出于历史原因，我们还支持 `shortcut icon`，它是 `icon` 的早期替代版本。

 `apple-touch-icon`

一个适合 iOS 的图标，代表您的网站，详情请参阅 [Apple 开发者文档](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)。

 `apple-touch-icon-precomposed`

早期版本的 iOS 的备用图标，详情请参阅 [Apple 开发者文档](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)。

 `href`

 网站图标的网址。该网址可以是相对路径 (`/smile.ico`)，也可以是绝对路径 (`https://example.com/smile.ico`)。该网址无需托管在您的网站上（例如，您的网站图标可以托管在内容分发网络 [CDN] 上）。

3.  请为 Google 留出相应的时间来重新抓取并处理首页上的新信息。请注意，抓取用时可能会从几天到几周不等，具体取决于系统判断内容所需的刷新频率。您可以使用网址检查工具[请求将网站首页编入索引](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=zh-cn)。

## 指南

 您必须遵循以下指南，才能使网站图标显示在 Google 搜索结果中。

 即使遵循了所有这些指南，我们也不能保证网站图标一定会显示在 Google 搜索结果中。

-  Google 搜索仅支持每个网站一个网站图标，其中“网站”**由主机名定义。例如，`https://www.example.com/` 和 `https://code.example.com/` 是两个不同的主机名，因此可以设置两个不同的网站图标。但是，`https://www.example.com/sub-site` 是网站的子目录，您只能为 `https://www.example.com/` 设置一个网站图标，该图标适用于相应网站及其子目录。
 **受支持**：`https://example.com`（这是网域级首页）
 **受支持**：`https://news.example.com`（这是子网域级首页）
 **不受支持**：`https://example.com/news`（这是子目录级首页）
-  Googlebot-Image 必须能够抓取网站图标文件，并且 Googlebot 必须能够抓取首页；它们不能被[禁止](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh-cn)抓取。
-  为便于用户在浏览搜索结果时快速识别您的网站，请确保网站图标的视觉设计能够代表您的网站品牌。
-  网站图标必须是方形（宽高比为 1:1），且尺寸至少为 8x8 像素。虽然最小尺寸要求为 8x8 像素，但我们建议使用尺寸大于 48x48 像素的网站图标，以便在各种平台上看起来效果不错。系统支持任何[有效的网站图标格式](https://en.wikipedia.org/wiki/Favicon#Image_file_format_support)。
- 网站图标网址必须保持稳定（请勿经常更改该网址）。
-  Google 不会显示任何被其视为不当内容的网站图标，包括色情图像或有仇恨含义的符号（例如 卐）。如果在网站图标中发现了此类图像，则 Google 会将该网站图标替换为默认图标。

## 提交有关搜索结果中网站图标的反馈

 如果您对 Google 在搜索结果中处理网站图标的方式有任何反馈意见，请[填写我们的网站图标反馈表单](https://forms.gle/KVBeuGWTg1yTwy7p9)。 请注意，您在此处提交的反馈旨在帮助我们的团队改进 Google 搜索的整体系统，但我们无法保证会针对您的每条反馈单独采取行动。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-02-20。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-02-20。"],[],["To show a favicon in Google Search results, create a square favicon (at least 8x8px, preferably \u003e48x48px) and add a `\u003clink\u003e` tag to your home page's header. Use `rel=\"icon\"` (or `shortcut icon`, `apple-touch-icon`, `apple-touch-icon-precomposed`) and `href` attributes with the favicon's URL. Ensure Googlebot-Image and Googlebot can crawl both the favicon and home page. Favicon must be appropriate and visually representative of the brand. Google supports one favicon per hostname.\n"]]

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
