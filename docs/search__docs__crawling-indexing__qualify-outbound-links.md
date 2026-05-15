---
title: "向 Google 说明您的出站链接的用意"
source: https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=zh_CN
slug: search__docs__crawling-indexing__qualify-outbound-links
path: /search/docs/crawling-indexing/qualify-outbound-links
---

# 向 Google 说明您的出站链接的用意

> 来源: https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 向 Google 说明您的出站链接的用意

对于您网站上的某些链接，您可能需要向 Google 说明您的网站与链接页之间的关系。为此，请在 `<a>` 标记中使用下列 `rel` 属性值之一。

对于您希望 Google 无任何限定条件便直接提取和解析的常规链接，您无需添加 `rel` 属性。例如：

```
<p>My favorite horse is the <a href="https://horses.example.com/Palomino">palomino</a>.</p>
```

对于其他链接，请使用以下一个或多个值：

`rel` 值

### `rel="sponsored"`

请使用 `sponsored` 值标记广告链接或付费展示位置链接（通常称为“付费链接”**）。详细了解 [Google 对付费链接的态度](https://developers.google.com/search/docs/essentials/spam-policies?hl=zh-cn#link-spam)。

```
<a **rel="sponsored"** href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a>
```

**注意：**对于这类链接，[以前推荐](https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify?hl=zh-cn)使用 `nofollow` 属性，现在，您仍可以使用该属性进行标记，但更建议您使用 `sponsored` 标记。

### `rel="ugc"`

建议您使用 `ugc` 值标记用户生成的内容（例如评论和论坛帖子）的链接。

```
<a **rel="ugc"** href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a>
```

如果您想对值得信赖的贡献者（始终如一地做出高质量贡献的成员或用户）表示认可和奖励，则可从他们发布的链接中移除此属性。 详细了解如何[防止网站和平台存在用户生成的垃圾内容](https://developers.google.com/search/docs/monitor-debug/prevent-abuse?hl=zh-cn)。

### `rel="nofollow"`

如果其他值不适用，并且您希望 Google 不跟踪您网站上的出站链接，或不从您的网站上抓取链接页，请使用 `nofollow` 值。对于您网站中的链接，请使用 [robots.txt `disallow` 规则](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt?hl=zh-cn#disallow)。

```
<a **rel="nofollow"** href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a>
```

### **多个值

您可以使用以空格或英文逗号分隔的列表，指定多个 `rel` 值。**示例**：

```
<p>I love <a **rel="ugc nofollow"** href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a> cheese.</p>
```

```
<p>I hate <a **rel="ugc,nofollow"** href="https://cheese.example.com/blue_cheese">Blue</a> cheese.</p>
```

Google 通常不会跟踪标有这些 `rel` 属性的链接。请注意，链接页也可能经由其他途径找到（例如站点地图或其他网站的出站链接），因此仍有可能被抓取。这些 `rel` 属性仅能在 [Google 可抓取的 `<a>` 元素](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=zh-cn#crawlable-links)中使用，但 `nofollow` 除外，该属性还可用作[漫游器 `meta` 标记](https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=zh-cn)。

如果您不想让 Google 提取指向您的站内网页的链接，请使用 [robots.txt `disallow` 规则](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt?hl=zh-cn#disallow)。

如果您不想让 Google 将某个网页编入索引，请允许抓取并使用 [`noindex` robots 规则](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=zh-cn)。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-03-08。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-03-08。"],[],["To manage how Google interacts with outbound links, use `rel` attributes within `\u003ca\u003e` tags. `rel=\"sponsored\"` marks paid links; `rel=\"ugc\"` designates user-generated content. `rel=\"nofollow\"` signals that Google should not associate your site with the linked page or crawl it. Multiple `rel` values can be used together. Links with these attributes generally won't be followed, but can still be found through other sources. For links on your site, use the `robots.txt disallow` rule.\n"]]

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
