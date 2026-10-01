---
title: "使用 noindex 阻止搜索引擎编入索引"
source: https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=zh_CN
slug: search__docs__crawling-indexing__block-indexing
path: /search/docs/crawling-indexing/block-indexing
---

# 使用 noindex 阻止搜索引擎编入索引

> 来源: https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 使用 `noindex` 阻止搜索引擎编入索引

 `noindex` 是一个包含 `<meta>` 标记或 HTTP 响应标头的规则集，用于防止支持 `noindex` 规则的搜索引擎（例如 Google）将内容编入索引。当 Googlebot 抓取该网页并发现该标记或标头时，Google 就会完全阻止该网页出现在 Google 搜索结果中，不论是否有其他网站链接到该网页。

 **重要提示**：为让 `noindex` 规则生效，网页或资源**不得**被 robots.txt 文件屏蔽，并且必须能被抓取工具访问。如果该网页被 robots.txt 文件屏蔽或抓取工具无法访问该网页，那么抓取工具将永远无法看到 `noindex` 规则，因此该网页可能仍会显示在搜索结果中，例如，如果有其他网页链接到该网页。

 如果您不具备服务器的 root 权限，可借助非常实用的 `noindex` 控制对您网站中各个网页的访问权限。

## 实施 `noindex`

 实施 `noindex` 的方法有两种：将其作为 `<meta>` 标记实施，或作为 HTTP 响应标头实施。这两种方法的效果相同，从中选择更方便您网站采用并且更适合相应内容类型的那一种方法即可。Google 不支持在 robots.txt 文件中指定 `noindex` 规则。

 您还可以将 `noindex` 规则与其他控制索引的规则结合使用。例如，您可以结合使用 `nofollow` 提示和 `noindex` 规则： `<meta name="robots" content="**noindex, nofollow**" />`。

### `<meta>` 标记

 为防止支持 `noindex` 规则的所有搜索引擎**将您网站上的某个网页编入索引，并将以下 `<meta>` 标记添加到网页的 `<head>` 部分：

```

<meta name="**robots**" content="noindex">
```

若想仅阻止 Google 网页抓取工具将网页编入索引，请使用以下元标记**：

```

<meta name="**googlebot**" content="noindex">
```

 请注意，某些搜索引擎对 `noindex` 规则可能会有不同的解读。因此，您的网页可能仍会出现在其他搜索引擎的结果中。

 [详细了解 `noindex``<meta>` 标记](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#robotsmeta)。

 **如果您使用 Wix、WordPress 或 Blogger 等 CMS**，则可能无法直接修改 HTML，也可能不希望修改 HTML。实际上，您的 CMS 可能具有搜索引擎设置页面或其他某种机制，能够将 `meta` 标记告知搜索引擎。

 如果您要向网站添加 `meta` 标记，请在您的 CMS 上搜索有关修改网页 `<head>` 的说明（例如，搜索“wix add meta tags”）。

### HTTP 响应标头

 您可以在响应中返回值为 `noindex` 或 `none` 的 `X-Robots-Tag` HTTP 标头，而不是 `<meta>` 标记。 响应标头可用于非 HTML 资源，例如 PDF、视频文件和图片文件。下面是一个 HTTP 响应示例，它含有一个 `X-Robots-Tag` 标头，用来指示搜索引擎不要将某一网页编入索引：

```

HTTP/1.1 200 OK
(...)
**X-Robots-Tag: noindex**
(...)
```

 [详细了解 `noindex` 响应标头](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#xrobotstag)。

### 调试 `noindex` 问题

 我们必须抓取您的网页，才能看到 `<meta>` 标记和 HTTP 标头。如果某个网页仍显示在搜索结果中，可能是因为在您添加 `noindex` 规则后我们尚未抓取过该网页。根据该网页在互联网中的重要性，Googlebot 可能需要数月时间才能重新访问该网页。您可以使用[网址检查工具](https://support.google.com/webmasters/answer/9012289?hl=zh-cn)请求 Google 重新抓取您的网页。

 如果您需要从 Google 搜索结果中快速移除网站上的某个网页，请参阅我们的[移除说明文档](https://developers.google.com/search/docs/crawling-indexing/remove-information?hl=zh-cn)。

 此外，也可能是因为 robots.txt 文件阻止 Google 网页抓取工具访问该网址，因此这些抓取工具无法发现此标记。若要允许 Google 访问您的网页，您必须[修改 robots.txt 文件](https://developers.google.com/search/docs/crawling-indexing/robots/submit-updated-robots-txt?hl=zh-cn)。

 最后，请确保 `noindex` 规则对 Googlebot 可见。如需测试您的 `noindex` 实现是否正确，请使用[网址检查工具](https://support.google.com/webmasters/answer/9012289?hl=zh-cn)查看 Googlebot 在抓取该网页时收到的 HTML。 您还可以使用 Search Console 中的[“网页索引编制”报告](https://support.google.com/webmasters/answer/7440203?hl=zh-cn)监控您网站上 Googlebot 从中发现 `noindex` 规则的网页。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-31。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-31。"],[],["The `noindex` rule, implemented via a `\u003cmeta\u003e` tag or HTTP header, prevents search engines like Google from indexing specific content. To work, the page must be accessible to crawlers and not blocked by `robots.txt`. Implementation options include adding `\u003cmeta name=\"robots\" content=\"noindex\"\u003e` to a page's `\u003chead\u003e` or using the `X-Robots-Tag: noindex` HTTP header. Crawlers must revisit the page after `noindex` is added, which can be sped up using the URL Inspection tool. The rules can be tested using the URL Inspection tool.\n"]]

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
