---
title: "“包裹跟踪”功能尝鲜者计划"
source: https://developers.google.com/search/docs/appearance/package-tracking?hl=zh_CN
slug: search__docs__appearance__package-tracking
path: /search/docs/appearance/package-tracking
---

# “包裹跟踪”功能尝鲜者计划

> 来源: https://developers.google.com/search/docs/appearance/package-tracking?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# “包裹跟踪”功能尝鲜者计划

 “包裹跟踪”是一项在 Google 上显示包裹跟踪相关信息的功能。借助此功能，当用户想要通过 Google 搜索跟踪由贵公司运输的包裹时，只需直接输入包裹编号即可。该功能会使用您的 API 检索包裹跟踪信息，然后将其显示给用户。下方展示了当用户试图跟踪某个包裹时，他们可能会在 Google 搜索上看到的包裹跟踪信息画面。

 **注意**：在 Google 搜索结果中的实际呈现效果可能会有不同。

##  功能可用性

 “包裹跟踪”功能适用于 Google 搜索支持的所有语言及国家/地区。

##  要求

 如需申请加入“包裹跟踪”功能尝鲜者计划，您必须满足以下要求：

-  您的包裹配送公司必须位于印度、日本或巴西境外，或者是服务于这些地区的某家包裹配送公司的唯一包裹跟踪信息授权提供方。
-  Google“包裹跟踪”功能会实时调用 RESTful JSON API（仅限 POST 请求），以检索包裹跟踪信息。如果您已经有可以返回此类信息的 API，我们可以帮助您重复利用该 API。您的 API 必须符合[可用性和响应性要求](#availability)，并提供[必要内容](#content)。

### 可用性和响应性

 我们希望您的 API 几乎不会停机，并要求 API 的平均响应时间不超过 700 毫秒，95% 以上的响应不超过 1,000 毫秒。如果您的 API 不符合上述要求，我们可能会停止显示您的包裹跟踪信息。

### 内容

 为了使集成功能正常运行，您的 API 必须返回以下信息：

必填字段

`CurrentStatus`

包裹的当前状态。这包括此状态生效的日期和时间，以及任何错误状态。

 此外，我们强烈建议您让 API 返回以下信息：

建议字段

`DeliveredDate`

包裹的送达日期和时间（如果包裹已送达）。

`PromisedDate`

包裹的预计送达日期。

`TrackingNumber`

包裹的跟踪编号。

`TrackingURL`

用户可以在上面查看包裹跟踪信息和其他潜在详情的网站网址。

`SupportPhoneNumbers`

按地区列出可用的支持电话号码。

`TransitEvents`

表示包裹在送达收件人前的阶段性变动，包括日期、时间、城市、州和国家/地区（如果适用）。

`CreateDate`

跟踪编号的创建日期和时间。

`PickupDate`

运输公司揽收包裹的日期。

`TimestampEvent`

与指定包裹相关联的事件的时间戳。

`LocationEvent`

与指定包裹相关联的事件的地点。

`CanReschedule`

是否可以重新安排此包裹的运送时间。

 我们不接受以下信息：

- 包裹收件人或发件人的任何个人数据。
- 包裹收件人或发件人的任何地理位置信息。

##  填写申请表单

 想要加入“包裹跟踪”功能尝鲜者计划？请[填写此表单](https://docs.google.com/forms/d/e/1FAIpQLSeHkDALO5vJg1l4GaUkkBzxeqDtkJukJokBBOtbmlH9Vk9M_w/viewform?hl=zh-cn)。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["The Package Tracking Early Adopters Program allows companies to display package tracking information on Google Search. Participants must have a RESTful JSON API that Google can query to retrieve package data via POST requests. The API must be highly available, respond within 700ms on average, and include the `CurrentStatus`. It's recommended to also return fields such as `DeliveredDate`, `PromisedDate`, `TrackingNumber`, and `TransitEvents`. Eligible companies must serve India, Japan, or Brazil. The API cannot return sender or recipient personal data.\n"]]

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
