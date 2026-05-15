---
title: "精选摘要和您的网站"
source: https://developers.google.com/search/docs/appearance/featured-snippets?hl=zh_CN
slug: search__docs__appearance__featured-snippets
path: /search/docs/appearance/featured-snippets
---

# 精选摘要和您的网站

> 来源: https://developers.google.com/search/docs/appearance/featured-snippets?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 精选摘要和您的网站

精选摘要位于特殊方框中，其中呈现的搜索结果格式和常规格式相反，会首先显示描述性[摘要](https://developers.google.com/search/docs/appearance/snippet?hl=zh-cn)。它们还可出现在[相关问题组](https://developers.google.com/search/docs/appearance/visual-elements-gallery?hl=zh-cn#related-questions-group)（也称为“其他用户还问了以下问题”）中。 [详细了解 Google 精选摘要的运作方式。](https://support.google.com/websearch/answer/9351707?hl=zh-cn)

## 如何选择停用精选摘要？

您可以通过以下两种方式来选择停用精选摘要：

- [同时屏蔽精选和常规搜索摘要](#block-both)
- [仅屏蔽精选摘要](#block-fs)

### 屏蔽所有摘要

若要阻止显示某个网页的所有摘要（包括精选摘要和常规摘要），请为该网页添加 [`nosnippet` 规则](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#nosnippet)。

- 带有 [`data-nosnippet` HTML 属性](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#data-nosnippet-attr)标记的文本不会出现在精选摘要或常规摘要中。
- 如果某个网页同时有 `nosnippet` 和 `data-nosnippet` 规则，则优先适用 `nosnippet` 规则，不显示该网页的任何摘要。

### 仅屏蔽精选摘要

如果您希望保留常规搜索摘要，但又不想显示为精选摘要，请尝试缩小 [`max-snippet` 规则](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#max-snippet)的值。仅当可显示的文本长度足以生成有用的精选摘要时，才会显示精选摘要。

如果网页继续显示为精选摘要，请继续缩小此值。一般来说，`max-snippet` 规则的值越小，网页显示为精选摘要的可能性就越小。

Google 没有严格规定显示为精选摘要所需的最小长度。 这是因为最小长度取决于多种因素，包括但不限于摘要中的信息、语言和平台（移动设备、应用或桌面设备）。

 将 `max-snippet` 设置为较小的值并不能保证 Google 不会为您的网页显示精选摘要。如果您需要确保您的网页绝对不会显示为精选摘要，请使用 `nosnippet` 规则。

## 如何将我的网页标记为精选摘要？

您无法这样做。Google 系统会根据用户的搜索请求来判断某个网页是否适合显示为精选摘要，如果适合，就会将其升级为精选摘要。

## 用户点击精选摘要后会发生什么？

点击精选摘要后，用户会直接转到网页中出现在精选摘要里的部分。系统会自动滚动到出现在摘要中的位置，无需网站添加任何其他注解。如果浏览器不支持所需的底层技术，或者我们的系统无法准确确定要将点击操作定位到网页中的哪个具体位置，那么用户在点击精选摘要后会被转到源网页的顶部。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["Featured snippets display the descriptive snippet first in search results. To opt out, use the `nosnippet` rule to block all snippets or the `max-snippet` rule to reduce the likelihood of appearing in featured snippets, but with no guarantee. `nosnippet` takes priority over `data-nosnippet`. Google determines which pages are elevated to featured snippets. Clicking a featured snippet navigates users directly to the relevant section of the page, if technically possible.\n"]]

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
