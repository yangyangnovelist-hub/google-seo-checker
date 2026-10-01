---
title: "可朗读（Article、WebPage）结构化数据（Beta 版）"
source: https://developers.google.com/search/docs/appearance/structured-data/speakable?hl=zh_CN
slug: search__docs__appearance__structured-data__speakable
path: /search/docs/appearance/structured-data/speakable
---

# 可朗读（Article、WebPage）结构化数据（Beta 版）

> 来源: https://developers.google.com/search/docs/appearance/structured-data/speakable?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 可朗读（`Article`、`WebPage`）结构化数据（Beta 版）

此功能处于 Beta 版阶段，随时可能会变更。我们目前正在开发此功能，所以相关要求或指南可能会发生变更。

`speakable`[schema.org](https://schema.org/) 属性可用于标识报道或网页中最适合使用文字转语音 (TTS) 功能进行音频播放的版块。添加标记后，搜索引擎和其他应用可以识别出相应内容，并在内置 Google 助理的设备上使用 TTS 功能朗读这些内容。包含 `speakable` 结构化数据的网页可以使用 Google 助理来通过新渠道分发内容，并将内容呈现给更多的用户。

Google 助理会使用 `speakable` 结构化数据在智能音箱设备上对时事新闻查询进行回复。当用户询问有关特定主题的新闻时，Google 助理会从网络上返回最多 3 篇报道，并支持使用 TTS 功能对报道中包含 `speakable` 结构化数据的版块进行音频播放。当 Google 助理朗读某个 `speakable` 版块时，它会寻找内容的来源，并通过 Google 助理应用将完整的报道网址发送到用户的移动设备。

## 示例

下面是一个使用了 JSON-LD 代码和 xPath `content-locator` 值的 `speakable` 结构化数据示例：

```
<html>
  <head>
    <title>Speakable markup example</title>
    <meta name="description" content="This page is all about the quick brown fox" />
    <script type="application/ld+json">
    {
     "@context": "https://schema.org/",
     "@type": "WebPage",
     "name": "Quick Brown Fox",
     "speakable":
     {
      "@type": "SpeakableSpecification",
      "xPath": [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content"
        ]
      },
     "url": "https://www.example.com/quick-brown-fox"
     }
    </script>
  </head>
  <body>
  </body>
</html>
```

## 适用的国家/地区和语言

`speakable` 属性适用于将 Google Home 设备的语言设为“英语”的美国用户以及使用英语发布内容的发布商。我们希望，一旦实施 `speakable` 属性的发布商数量足够多，就能将它推广到其他国家/地区和语言版本。

## 使用入门

为了使您的新闻内容能够在用户查询时事新闻时作为答案呈现，请按以下步骤操作：

1. 确保遵循[我们的指南](#guidelines)。
2. 将 [`speakable` 结构化数据](#structured-data-type-definitions)添加到您的网页中。

## 指南

如需让您的 `speakable` 内容能够显示在新闻搜索结果中，您必须遵循以下指南。

- [技术指南](#technical-guidelines)
- [内容指南](#content-guidelines)
- [搜索要素](https://developers.google.com/search/docs/essentials?hl=zh-cn)
- [结构化数据常规指南](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=zh-cn)

### 技术指南

在为 Google 助理实施 `speakable` 标记时，请遵循以下指南。

- 不要将 `speakable` 结构化数据添加到在纯语音和语音转发的情况下听起来可能会令人困惑的内容中，如新闻电头（报道新闻的地点）、照片说明或信息来源说明。
- 应抓住重点，而不是使用 `speakable` 结构化数据强调整篇报道。这样能让听众明白新闻的主旨，不会因为使用了 TTS 朗读功能而漏掉重要细节。

### 内容指南

在编写打算使用 `speakable` 结构化数据标记的内容时，请遵循以下指南。

- 用 `speakable` 结构化数据标记的内容必须具有简明扼要的资讯标题和/或摘要，可为用户提供易懂且有用的信息。
- 如果您将新闻的开头包含在 `speakable` 结构化数据中，我们建议您重写新闻的开头，将信息拆分成多个句子，以便通过 TTS 功能更清楚地朗读。
- 为确保能够向用户提供最佳音频体验，我们建议每段 `speakable` 结构化数据包含大约 20-30 秒的内容，或者大概 2-3 个句子。

## 结构化数据类型定义

[Speakable](https://pending.schema.org/speakable) 属性供 [`Article`](https://pending.schema.org/Article) 或 [`Webpage`](https://pending.schema.org/WebPage) 对象使用。 如需了解 `speakable` 的完整定义，请访问 [schema.org/speakable](https://schema.org/speakable)。为了能够使用此功能，您必须为内容添加必要属性。

`speakable` 属性可以重复任意次数使用，有两种可能的 `content-locator` 值：CSS 选择器和 xPath。请使用下列属性之一：

必要属性

`cssSelector`

`[Text](https://schema.org/Text)`

对带注释的网页中的内容（如类属性）寻址。使用 `cssSelector` 或 `xPath`，但不要同时使用这两者。例如：

```
"speakable":
  {
  "@type": "SpeakableSpecification",
  "cssSelector": [
    ".headline",
    ".summary"
  ]
}
```

`xPath`

`[Text](https://schema.org/Text)`

使用 xPath 对内容寻址（假设该内容使用 XML 视图）。使用 `cssSelector` 或 `xPath`，但不要同时使用这两者。例如：

```
"speakable":
  {
  "@type": "SpeakableSpecification",
  "xPath": [
    "/html/head/title",
    "/html/head/meta[@name='description']/@content"
  ]
}
```

## 问题排查

 如果您在实施或调试结构化数据时遇到问题，请查看下面列出的一些实用资源。

- 如果您使用了内容管理系统 (CMS) 或其他人负责管理您的网站，请向其寻求帮助。请务必向其转发列明问题细节的任何 Search Console 消息。
- Google 不能保证使用结构化数据的功能一定会显示在搜索结果中。如需查看导致 Google 无法将您的内容显示为富媒体搜索结果的各种常见原因，请参阅[结构化数据常规指南](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=zh-cn)。
- 您的结构化数据可能存在错误。请查看[结构化数据错误列表](https://support.google.com/webmasters/answer/13300873?hl=zh-cn)和[“无法解析的结构化数据”报告](https://support.google.com/webmasters/answer/9166415?hl=zh-cn)。
- 如果您的网页受到结构化数据手动操作的影响，其中的结构化数据将会被忽略（但该网页仍可能会出现在 Google 搜索结果中）。如需修正[结构化数据问题](https://support.google.com/webmasters/answer/9044175?hl=zh-cn#zippy=,structured-data-issue)，请使用[“人工处置措施”报告](https://support.google.com/webmasters/answer/9044175?hl=zh-cn)。
- 再次查看相关[指南](#guidelines)，确认您的内容是否未遵循指南。问题可能是因为出现垃圾内容或使用垃圾标记导致的。不过，问题可能不是语法问题，因此富媒体搜索结果测试无法识别这些问题。
- 结构化数据问题可能会影响网站内容在搜索结果中的显示方式。请参阅[针对富媒体搜索结果缺失/富媒体搜索结果总数下降进行问题排查](https://support.google.com/webmasters/answer/13300208?hl=zh-cn)指南，了解在 Search Console 中发现、修正和验证这些问题的分步方法。
- 请等待一段时间，以便 Google 重新抓取您的网页并重新将其编入索引。请注意，网页发布后，Google 可能需要几天时间才会找到和抓取该网页。有关抓取和索引编制的常见问题，请参阅 [Google 搜索抓取和索引编制常见问题解答](https://developers.google.com/search/help/crawling-index-faq?hl=zh-cn)。
- 在 [Google 搜索中心论坛](https://support.google.com/webmasters/community?hl=zh-cn)中发帖提问。

### 无法触发内容

*error***问题**：您无法通过 Google 助理使用 TTS 音频触发您的内容。

*done***解决问题**

1. 尝试以下语音指令：

  - “与 $topic 相关的最新消息是什么？”
  - “与 $topic 相关的最新资讯是什么？”
  - “播放与 $topic 相关的新闻。”

2. 如果问题仍然存在，可能是因为排名是通过算法确定的。通过 TTS 音频播放，Google 助理可提供最多 3 篇来自不同新闻发布来源的报道。有关 Google 如何对报道进行排名的详情，请参阅 [Google 搜索的运作方式](https://www.google.com/search/howsearchworks/?hl=zh-cn)。

## 更多音频解决方案

除了 `speakable` 结构化数据之外，您还可以将其他 Google 助理音频解决方案用于您的新闻内容，比如实现 Google 助理与您自定义应用的高级集成。例如，允许用户通过 Google 助理与应用进行互动。有关详情，请参阅 [Actions on Google 开发者指南](https://developers.google.com/actions?hl=zh-cn)。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-09-15。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-09-15。"],[],["The `speakable` property, currently in beta, identifies sections of web pages or articles suitable for text-to-speech (TTS) playback. Publishers should add this structured data to enable Google Assistant to read aloud specific content sections, especially for topical news queries. Key actions include following technical and content guidelines, marking up content with either `cssSelector` or `xPath` properties, and focusing on concise, clear headlines and summaries. Content should be 20-30 seconds per section for optimal TTS experience.\n"]]

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
