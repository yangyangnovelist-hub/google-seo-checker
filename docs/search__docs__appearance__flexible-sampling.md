---
title: "实施灵活抽样时需遵循的常规指南"
source: https://developers.google.com/search/docs/appearance/flexible-sampling?hl=zh_CN
slug: search__docs__appearance__flexible-sampling
path: /search/docs/appearance/flexible-sampling
---

# 实施灵活抽样时需遵循的常规指南

> 来源: https://developers.google.com/search/docs/appearance/flexible-sampling?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 实施灵活抽样时需遵循的常规指南

为了更好地了解抽样方面的更改可能会对 Google 用户和发布商的订阅模式产生怎样的影响，我们和发布合作伙伴共同开发了一系列实验。从这些实验中，我们了解到：即便是对当前抽样等级的细微更改，也可能会有损用户体验，并可能会无意中影响报道在 Google 搜索中的排名，因为用户访问权限受到了限制。

我们建议采用的抽样类型有两种：第一种是**计量供给** - 先为用户提供一定量的免费文章供浏览，然后要求用户订阅或登录，之后就会开始显示付费墙；第二种是**导入式抽样** - 仅提供一篇文章的部分内容，而不显示完整文章。

我们建议发布商使用不同数量的抽样内容谨慎地实验。 以下是实施灵活抽样时需遵循的一些常规指南。

## 计量供给

一般来说，对于计量供给，我们认为按月计量（而非按日计量）能提供更高的灵活性和更安全的测试环境。样本数量从一个整数值变成另一个整数值（例如，每月 10 个样本而不是每日 3 个样本），给用户所带来的影响不会那么显著。按月计量还具有以下优势：可将付费墙主要显示给互动程度最高的用户（即最有可能订阅的用户），同时也可让新用户和互动程度较低的用户在遇到付费墙之前有机会了解一下内容的价值。（在这种情况下，“付费墙”既可指必须订阅才能访问内容的障碍设置，也可指只需注册即可访问内容的障碍设置。）

### 多少内容？

对于各个行业，没有一个通用的最佳抽样值。不过，对于大多数每日新闻发布商，我们希望该值的范围介于每月每位用户 6 到 10 篇报道之间。我们认为，大多数发布商都能在该范围内找到一个可实现下述目标的值：既能为新的潜在订阅者提供良好的用户体验，又能提高互动程度最高的用户的转化率。

在探索新的方法时，建议您一开始每月向 Google 搜索用户提供 10 篇免费报道，然后以此值为基础不断调整。我们将具体数值的决定权交给各个发布商，因为他们最了解自己业务的独特需求。我们建议发布商先分析已遇到付费墙的搜索用户所占的百分比，然后再选择一个能达到近似结果的每月数值。确信自己已打好稳固的基础之后，您可以随时降低该值。

## 导入式抽样

除了计量供给之外，某些发布商会在计量供给用尽后，在付费墙的“首屏”中展示一篇报道的前几句内容。我们认为这是一种很棒的做法。与完全不让用户看到任何内容的网页相比，通过展示报道的开头部分，发布商可让用户了解该内容的价值，因此对用户更有意义。导入式抽样还会激发用户的好奇心，使他们非常想知道报道的下文，这可能会有助于促成转化。

## 如何更改

发布商需要尝试不同的抽样值，确定这些值对引荐流量和转化的影响。

请记住，我们的用户研究已表明，如果用户在只体验了少量内容时就被要求进行订阅，他们对该产品的兴趣就会大幅降低。我们的分析结果表明，如果付费墙在超过 10% 的时间里都是处于显示状态（这通常意味着约有 3% 的受众已遇到付费墙），整体的用户满意度就会开始明显下降。我们建议您切勿轻易接近这个限值，否则用户尚未对您的内容价值产生信心，就开始离开了。

如果发布商拥有更先进的技术资源，建议将精力专注于互动程度较高的细分受众群内的具体用户。通过确定总会用尽每月配额的用户，发布商便可有针对性地降低面向这些用户提供的样本限额，将他们视为目标客户；同时，通过向其他用户分配更多可供自由使用的限额，发布商还可避免令整体的用户行为和满意度受到不利影响的风险。

## 如何标示付费内容

请使用结构化数据标记付费内容，帮助 Google 区分付费内容与[伪装真实内容](https://developers.google.com/search/docs/advanced/guidelines/cloaking?hl=zh-cn)的做法；伪装真实内容是指向 Googlebot 提供的内容不同于向用户提供的内容。 如果您不希望在提供内容时浏览器能够访问相应内容，请选择一种不会向浏览器提供付费内容的付费墙实现方式。

详细了解如何[使用结构化数据标示付费内容](https://developers.google.com/search/docs/appearance/structured-data/paywalled-content?hl=zh-cn)，并参阅[关于使用 JavaScript 实现付费内容的指南](https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript?hl=zh-cn#paywall)。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["Publishers should experiment with metering and lead-in sampling for paywalled content. Metering, preferably monthly, grants a set number of articles before a paywall appears; 6-10 monthly articles is recommended, starting at 10. Lead-in shows a portion of the article above the paywall. Cautious experimentation is crucial as excessive paywalls (over 10% of user interactions) reduce user satisfaction. Publishers can target engaged users with stricter metering and should indicate paywalled content using structured data.\n"]]

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
