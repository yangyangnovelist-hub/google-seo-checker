---
title: "使用 JavaScript 生成结构化数据"
source: https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript?hl=zh_CN
slug: search__docs__appearance__structured-data__generate-structured-data-with-javascript
path: /search/docs/appearance/structured-data/generate-structured-data-with-javascript
---

# 使用 JavaScript 生成结构化数据

> 来源: https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 使用 JavaScript 生成结构化数据

现代网站会使用 JavaScript 显示大量动态内容。使用 JavaScript 在网站上生成结构化数据时，您需要注意一些事项，而本指南介绍了最佳做法和实施策略。如果您不熟悉结构化数据，可以详细了解[结构化数据的运作方式](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=zh-cn)。

使用 JavaScript 生成结构化数据的方法有多种，最常见的方法有：

- [Google 跟踪代码管理器](#use-google-tag-manager)
- [自定义 JavaScript](#custom-javascript)

**使用了 `Product` 标记？**请注意，动态生成的标记可能会导致购物内容抓取频率降低且不太可靠，这可能会对商品库存状况和价格等快速变化的内容造成影响。如果您是针对所有类型的购物搜索结果进行优化的商家，请确保您的服务器有足够的计算资源来处理来自 Google 的更多流量。

## 使用 Google 跟踪代码管理器动态生成 JSON-LD

通过 [Google 跟踪代码管理器](https://tagmanager.google.com/?hl=zh-cn)这一平台，您无需修改代码即可管理网站上的标记。如需使用 Google 跟踪代码管理器生成结构化数据，请按以下步骤操作：

1. 在您的网站上[设置并安装 Google 跟踪代码管理器](https://support.google.com/tagmanager/answer/6103696?hl=zh-cn)。
2. 向容器添加新的**自定义 HTML** 标记。
3. 将[支持的结构化数据](https://developers.google.com/search/docs/guides/search-gallery?hl=zh-cn)块粘贴到标记内容中。
4. 按照容器管理菜单中的**安装 Google 跟踪代码管理器**部分所示安装容器。
5. 若要将该标记添加到您的网站中，请在 Google 跟踪代码管理器界面中发布容器。
6. [测试实现效果](#testing)。

### 在 Google 跟踪代码管理器中使用变量

Google 跟踪代码管理器 (GTM) 支持[变量](https://support.google.com/tagmanager/topic/7683268?ref_topic=3441647&hl=zh-cn)，使您能够将网页上的信息用在结构化数据中。您可以使用变量从网页中提取结构化数据，而不是在 GTM 中复制信息。在 GTM 中复制信息会导致网页内容与通过 GTM 插入的结构化数据不一致的风险增大。

例如，您可以通过创建以下名为 `recipe_name` 的自定义变量，动态创建将网页标题用作食谱名称的 [Recipe](https://developers.google.com/search/docs/appearance/structured-data/recipe?hl=zh-cn) JSON-LD 块：

```
function() { return document.title; }
```

然后，您可以在自定义 HTML 代码中使用 `{{recipe_name}}`。

我们建议您创建变量，并使用这些变量从网页中收集所有必要信息。

下面是自定义 HTML 代码内容的示例：

```
<script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "{{recipe_name}}",
    "image": [ "{{recipe_image}}" ],
    "author": {
      "@type": "Person",
      "name": "{{recipe_author}}"
    }
  }
</script>
```

**注意：**上一个示例假设您在 GTM 中定义了 `recipe_name`、`recipe_image` 和 `recipe_author` 变量。

## 使用自定义 JavaScript 生成结构化数据

您还可以通过另一种方法生成结构化数据：使用 JavaScript 生成所有结构化数据，或者向服务器端呈现的结构化数据添加更多信息。无论采用上述哪种方式，Google 搜索都能在渲染网页时理解和处理 DOM 中提供的结构化数据。如需详细了解 Google 搜索如何处理 JavaScript，请参阅 [JavaScript 基础知识指南](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=zh-cn)。

下面是 JavaScript 生成的结构化数据的示例：

1. [查找您想使用的结构化数据类型](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=zh-cn)。
2. 修改您网站的 HTML，并添加如以下示例所示的 JavaScript 代码段（请参阅您的 CMS 或托管服务提供商的文档，或者咨询您的开发者）。

```
fetch('https://api.example.com/recipes/123')
.then(response => response.text())
.then(structuredDataText => {
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = structuredDataText;
  document.head.appendChild(script);
});
```

3. [使用富媒体搜索结果测试来测试您的实现效果](#testing)。

## 使用服务器端呈现

如果您使用的是[服务器端渲染](https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=zh-cn#server-rendering)，还可以在渲染的输出中包含结构化数据。查看您所用框架的文档，了解如何为您想使用的[结构化数据类型](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=zh-cn)生成 JSON-LD。

## 测试实现效果

若要确保 Google 搜索可以抓取您的结构化数据并将其编入索引，请测试您的实现效果：

1. 打开[富媒体搜索结果测试](https://goo.gle/richresults)。
2. 输入您要测试的网址。
我们建议您使用网址输入（而非代码输入），因为使用代码输入时存在 JavaScript 限制（例如 CORS 限制）。

3. 点击**测试网址**。

**成功**：如果您的所有操作都正确无误，并且[该工具支持您的结构化数据类型](https://support.google.com/webmasters/answer/7445569?hl=zh-cn)，系统会显示“网页能显示富媒体搜索结果”这一消息。
 如果您要测试富媒体搜索结果测试工具不支持的结构化数据类型，请检查所呈现的 HTML。 如果所呈现的 HTML 包含相应结构化数据，Google 搜索将能够处理该结构化数据。

**重试**：如果您看到错误或警告，则很可能是语法错误或属性缺失。 请阅读[您的结构化数据类型对应的文档](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=zh-cn)，并确保您已添加所有属性。如果问题仍然存在，还请务必查看[解决与 Google 搜索相关的 JavaScript 问题](https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript?hl=zh-cn)的指南。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["JavaScript dynamically generates website content and structured data through methods like Google Tag Manager (GTM) or custom JavaScript. GTM allows adding structured data via Custom HTML tags and using variables to avoid data duplication. Custom JavaScript can generate or augment structured data, which becomes available in the DOM. Server-side rendering can also include structured data. Implementation should be validated with the Rich Results Test, ensuring the data is crawlable and indexable by Google Search.\n"]]

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
