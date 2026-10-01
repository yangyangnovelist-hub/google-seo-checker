---
title: "Google 搜索使用入门：开发者指南"
source: https://developers.google.com/search/docs/fundamentals/get-started-developers?hl=zh_CN
slug: search__docs__fundamentals__get-started-developers
path: /search/docs/fundamentals/get-started-developers
---

# Google 搜索使用入门：开发者指南

> 来源: https://developers.google.com/search/docs/fundamentals/get-started-developers?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Google 搜索使用入门：开发者指南

 使您的内容易于搜索很重要，因为这样可以吸引更多相关用户浏览您的内容。这种做法称为搜索引擎优化 (SEO)，可为您的网站带来更多感兴趣的用户。如果 Google 搜索无法理解您的网页，那么您可能会错过重要的流量来源。

 本指南介绍了开发者可采取哪些措施，确保其网站与 Google 搜索完美兼容。除了遵守本指南中的各项要求之外，还要确保您的网站[安全](https://web.dev/explore/secure?hl=zh-cn)、[快速](https://web.dev/explore/fast?hl=zh-cn)、[可供所有用户无障碍使用](https://web.dev/explore/accessible?hl=zh-cn)且[可在所有设备上正常运行](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=zh-cn)。

如果需要非技术方面的帮助，请访问 [SEO 新手指南](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-cn)。SEO 入门指南涵盖了 SEO 的其他方面，例如创作内容。

## 了解 Google 如何发现您的网站

 首先，请在[网址检查工具](https://search.google.com/search-console?hl=zh-cn)或[富媒体搜索结果测试](https://search.google.com/test/rich-results?hl=zh-cn)中测试您的网站，查看 Google 所看到的网站样貌。[Googlebot 是 Google 的网页抓取漫游器](https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=zh-cn)，可发现新网页和更新过的网页并将它们添加到 Google 索引中。如需详细了解此过程，请访问 [Google 搜索的工作原理](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=zh-cn)。

 您可能会惊讶地发现，Google 并不总能看到您在浏览器中看到的所有内容。在下例中，Google 不知道该网页上有图片，因为该网页使用了一项不受 Google 支持的 JavaScript 功能。

“用户”视图

下图展示了用户在查看该网页时看到的网页样貌。用户可以在浏览器中看到图片和文字。

Google 视图

下图展示了 Google 看到的网页样貌。Google 不知道该网页上有图片，因为该网页使用了一项不受 Google 支持的 JavaScript 功能。

## 检查您的链接

 Googlebot 通过抓取和解析链接、站点地图和重定向在网址间导航。Googlebot 会将每个网址都作为在您的网站上看到的第一个也是唯一一个网址来处理。为了确保 Googlebot 能够找到您网站上的所有网址，请执行以下操作：

- 使用 [Google 可抓取的 `<a>` 元素](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=zh-cn#crawlable-links)。 确保网站上的所有网页均能通过其他可找到的网页上的链接转到。确保引荐链接包括与目标网页相关的文字（对于图片，则应包括 Alt 属性）。
- [构建并提交站点地图](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn)，协助 Googlebot 更智能地抓取您的网站。站点地图是一种文件，您可在其中提供与您网站中的网页、视频或其他文件有关的信息，也可以说明这些内容之间的关系。
- 对于只有 1 个 HTML 网页的 JavaScript 应用，请确保每个屏幕或每项具体内容都有一个网址。

## 检查 JavaScript 使用方式

 虽然 Google 能够运行 JavaScript，但您在设计网页和应用时需要考虑一些差异和限制，以适应抓取工具访问和呈现您的内容的方式。 详细了解 [JavaScript 搜索引擎优化的基础知识](https://developers.google.com/search/docs/guides/javascript-seo-basics?hl=zh-cn)或如何[解决与搜索相关的 JavaScript 问题](https://developers.google.com/search/docs/guides/fix-search-javascript?hl=zh-cn)。

 如需详细了解 Google 在抓取、呈现和编入索引时会如何处理 JavaScript，请观看以下视频。

## 当内容发生更改后及时告知 Google

为确保 Google 能够快速找到您的新网页或更新过的网页，请遵循以下要求：

- [提交站点地图](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn)。
- [让 Google 重新抓取您的网址](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=zh-cn)。

如果您的网页仍然无法编入索引，请查看服务器日志中是否有错误。

## 别忘了网页上所用的字词

 Googlebot 只能找到以文字形式显示的内容。例如，Googlebot 看不到视频中的文字。为确保 Google 搜索能够理解您的网页主题，请遵循以下要求：

- **确保为您的视觉内容附加文字形式的说明。**例如，如果某个商品类别网页包含一系列衬衫图片，但不含任何与每张图片有关的文字内容，那么该网页就会效果欠佳。在商品类别网页中，每张图片都应附有一些文字说明。
- **确保每个网页都有[描述性标题](https://developers.google.com/search/docs/appearance/title-link?hl=zh-cn#page-titles)和[元描述](https://developers.google.com/search/docs/appearance/snippet?hl=zh-cn#meta-descriptions)**。 独特的标题和元描述有助于 Google 显示您的网页与用户的相关程度，从而提升您的搜索流量。
- **使用语义 HTML**。尽管 Google 会将 HTML、PDF 内容、图片和视频编入索引，但它不会将那些需要使用插件（例如，Java 或 Silverlight）的内容或在画布中呈现的内容编入索引。请尽可能为您的内容使用语义 HTML 标记，而不要使用插件。
-  **确保您的文本内容在 [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) 中可访问。**[ 例如，通过 ](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)[CSS `content` 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/content)添加的内容不是 DOM 的一部分，Google 搜索目前会忽略此类内容。您可以为装饰性内容使用 `content` 属性；Google 搜索可能不会将此类内容编入索引。

## 将内容的其他版本告知 Google

 Google 无法自动知晓您的网站或内容有多个版本。例如，网站的移动版本、桌面版本或多国语言版本。要确保 Google 向用户提供正确的版本，您可以：

- [整合重复网址](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=zh-cn)。
- [将您网站的本地化版本告知 Google](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=zh-cn)。
- [使您的 AMP 网页可被轻松发现](https://www.ampproject.org/docs/fundamentals/discovery)。

## 控制 Google 看到的内容

您可通过多种方法禁止 Googlebot 处理您的内容，如下所示：

- 若要禁止 Google 查找您的网页，请仅允许已登录的用户访问您的内容（例如，设置登录页面或[使用密码保护您的网页](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh-cn)）。
- 若要禁止 Googlebot 抓取您的网页，请[创建 robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=zh-cn)。
robots.txt 并不是一种阻止 Google 访问某个网页的机制。若要阻止 Google 访问某个网页，请使用 `noindex`robots 规则或[使用密码保护](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh-cn)该网页。

- 若要禁止 Google 将您的网页编入索引，但仍允许抓取，请[添加 `noindex` 标记](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#noindex)。
混用多种抓取规则和索引编制规则可能会导致某些规则与其他规则产生冲突。请参阅[如何合并使用抓取规则与索引编制/内容显示规则](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#combining)，了解如何正确配置这些规则。

如果您的内容未显示在 Google 搜索中，但您想让它显示在其中，请按以下步骤操作：

- 使用[网址检查工具](https://support.google.com/webmasters/answer/9012289?hl=zh-cn)检查 Googlebot 能否访问该网页。
- [检查您的 robots.txt](https://support.google.com/webmasters/answer/6062598?hl=zh-cn) 文件，看看您是否在无意中禁止了 Googlebot 抓取自己的网站。
- 检查您的 HTML，看看 `meta` 标记中是否有 `noindex` 规则。

## 为网站启用富媒体搜索结果

 富媒体搜索结果可包含样式、图片或其他互动功能，帮助您的网站在搜索结果中脱颖而出。您可以[在网页上添加结构化数据](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=zh-cn)，提供与网页含义有关的明确线索，从而帮助 Google 更好地了解您的网页并在 Google 搜索中显示富媒体搜索结果。如果您不确定从何处着手，请[浏览我们的可用功能库](https://developers.google.com/search/docs/guides/search-gallery?hl=zh-cn)。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["Developers can optimize their sites for Google Search by ensuring they are secure, fast, and accessible. Key actions include testing the site with the URL inspection or Rich Results tools to see how Google views it. Use crawlable `\u003ca\u003e` elements, build sitemaps, and ensure each content piece has a unique URL. Also, use text to represent visual elements, add descriptive titles and meta descriptions, and utilize semantic HTML. Finally, use methods to notify Google about changes like updated content.\n"]]

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
