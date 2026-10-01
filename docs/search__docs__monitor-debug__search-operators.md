---
title: "Google 搜索运算符概览"
source: https://developers.google.com/search/docs/monitor-debug/search-operators?hl=zh_CN
slug: search__docs__monitor-debug__search-operators
path: /search/docs/monitor-debug/search-operators
---

# Google 搜索运算符概览

> 来源: https://developers.google.com/search/docs/monitor-debug/search-operators?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Google 搜索运算符概览

 Google 搜索支持[多种搜索运算符](https://support.google.com/websearch/answer/2466433?hl=zh-cn)，您可以使用这些搜索运算符优化或定位搜索。此外，以下搜索运算符还能在调试网站时发挥作用。

 例如，`site:` 搜索运算符可用于监控网站上的垃圾评论，而图片搜索运算符 `imagesize:` 可用于查找网站上的小图片。

 不过，由于搜索运算符受索引和检索局限性的制约，因此使用 Search Console 中的[网址检查](https://support.google.com/webmasters/answer/9012289?hl=zh-cn)工具进行调试要更加可靠。

 下表列出了可用于在 Google 搜索结果中检查网页各个方面的搜索运算符：

搜索运算符

## `filetype:`

 查找[特定文件类型](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types?hl=zh-cn)（由 `content-type` HTTP 标头或文件扩展名定义）的搜索结果。例如，您可以搜索以 `.rtf` 结尾且内容中包含“galway”一词的 RTF 文件和网址：

```
filetype:rtf galway
```

## [`imagesize:`](https://developers.google.com/search/docs/monitor-debug/search-operators/image-search?hl=zh-cn#imagesize)

 查找包含特定尺寸的图片的网页。此搜索运算符仅适用于 Google 图片。例如：

```
imagesize:1200x800
```

## [`site:`](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=zh-cn)

 查找来自特定的网域、网址或网址前缀的搜索结果。例如：

```
site:https://www.google.com/
```

## [`src:`](https://developers.google.com/search/docs/monitor-debug/search-operators/image-search?hl=zh-cn#src)

查找在 `src` 属性中引用了特定图片网址的网页。此搜索运算符仅适用于 Google 图片。例如：

```
src:https://www.example.com/images/peanut-butter.png
```

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["Google Search operators refine searches and aid website debugging. `filetype:` locates specific file types. `imagesize:` (in Google Images) finds pages with images of specified dimensions. `site:` shows results from a specific domain, URL, or prefix. `src:` (in Google Images) identifies pages referencing a particular image URL. While these are helpful, the URL Inspection tool in Search Console is more reliable due to indexing limitations.\n"]]

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
