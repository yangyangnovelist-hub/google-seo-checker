---
title: "将动态呈现作为临时解决方法"
source: https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering?hl=zh_CN
slug: search__docs__crawling-indexing__javascript__dynamic-rendering
path: /search/docs/crawling-indexing/javascript/dynamic-rendering
---

# 将动态呈现作为临时解决方法

> 来源: https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 将动态呈现作为临时解决方法

 动态呈现是一种临时解决方法，而非长期的解决方案，用于解决搜索引擎中 JavaScript 生成的内容的相关问题。 我们建议您使用[服务器端渲染](https://web.dev/articles/rendering-on-the-web?hl=zh-cn#server-side)、[静态渲染](https://web.dev/articles/rendering-on-the-web?hl=zh-cn#static)或 [hydration](https://web.dev/articles/rendering-on-the-web?hl=zh-cn#rehydration) 作为解决方案。

 在某些网站上，在浏览器中打开网页时，JavaScript 会加载其他内容。 这称为[客户端呈现](https://web.dev/articles/rendering-on-the-web?hl=zh-cn#client-side)。Google 搜索会看到此内容以及网站 HTML 中的内容。请注意，[Google 搜索中存在一些 JavaScript 限制](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=zh-cn#write-compatible-code)，因此某些网页的内容可能无法在所渲染的 HTML 中显示。其他搜索引擎可能会选择忽略 JavaScript 而看不到 JavaScript 生成的内容。

 对于 JavaScript 生成内容不可供搜索引擎访问的网站，动态呈现是一种临时解决方法。 动态渲染服务器会检测 JavaScript 生成内容时可能存在问题的漫游器，并向这些漫游器提供未启用 JavaScript 的服务器渲染版本，同时向用户显示客户端渲染的内容版本。

 动态呈现是一种临时解决方法，而非建议的解决方案，因为它会带来额外的复杂性和资源要求。

## 可能使用动态渲染的网站

 动态渲染是一种临时解决方法，适用于由 JavaScript 生成、可编入索引且快速变化的公开内容，或使用您关注的[抓取工具不支持的 JavaScript 功能](https://developers.google.com/search/docs/guides/rendering?hl=zh-cn)的内容。并非所有网站都需要使用动态渲染，并且有比动态渲染更好的解决方案，如[网页渲染概览](https://web.dev/articles/rendering-on-the-web?hl=zh-cn)中所述。

## 了解动态呈现的运作方式

 要采用动态渲染，您的网络服务器必须能够检测抓取工具（例如，通过检查用户代理）。如果您的网络服务器识别到来自抓取程序的请求不支持 JavaScript 或渲染内容所需的 JavaScript 功能，则会将此请求路由到渲染服务器。来自用户和抓取工具的请求如果没有 JavaScript 问题，则会正常呈现内容。渲染服务器会使用适合抓取工具的内容版本来响应请求，例如，它可能会提供静态 HTML 版本。 您可以选择为所有网页启用动态渲染程序，也可以逐个网页启用动态渲染程序。

## 动态呈现不属于伪装真实内容

 Googlebot 通常不会将动态渲染视为[伪装真实内容](https://developers.google.com/search/docs/essentials/spam-policies?hl=zh-cn#cloaking)。 只要您的动态呈现显示的是类似内容，Googlebot 便不会将动态呈现视为伪装真实内容。

 设置动态呈现后，您的网站可能会显示错误页面。Googlebot 不会将这些错误页面视为伪装真实内容，也不会[将错误视为任何其他错误页面](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=zh-cn#use-meaningful-http-status-codes)。

 使用动态渲染为用户和抓取工具提供完全不同的内容会被视为伪装真实内容。例如，某个网站向用户提供有关猫的页面，但向抓取工具提供有关狗的页面，则该网站会被视为伪装真实内容。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["Dynamic rendering serves search engine crawlers a server-rendered version of content, while users see client-side rendered content, as a workaround for JavaScript limitations. It detects crawler requests and routes them to a rendering server for static HTML delivery. While not considered cloaking if content is similar, serving entirely different content is. This method is complex and not recommended long-term; server-side, static rendering, or hydration are preferred alternatives. Dynamic rendering was used for public, rapidly changing or incompatible Javascript content.\n"]]

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
