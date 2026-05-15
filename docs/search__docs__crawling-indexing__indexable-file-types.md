---
title: "Google 编入索引的文件类型"
source: https://developers.google.com/search/docs/crawling-indexing/indexable-file-types?hl=zh_CN
slug: search__docs__crawling-indexing__indexable-file-types
path: /search/docs/crawling-indexing/indexable-file-types
---

# Google 编入索引的文件类型

> 来源: https://developers.google.com/search/docs/crawling-indexing/indexable-file-types?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Google 编入索引的文件类型

 Google 可以将大多数文本文件和某些已编码文档格式的内容编入索引。文件类型由 Google 抓取文件时返回的 `Content-Type` HTTP 标头确定，不过在某些情况下，如果 `Content-Type` 标头缺失或不正确，Google 可能会使用文件扩展名或使用其他解析器重新解析文件。

## 支持的平面文件类型

 支持以下平面文件类型。这些文件的内容以未编码的纯文本形式存储（不过它们可能会使用标记）。

- 以逗号分隔的值 (.csv)
- Google 地球（.kml、.kmz）
- GPS 交换格式 (.gpx)
- HTML（.htm、.html、其他文件扩展名）
- 可缩放矢量图形 (.svg)
- TeX/LaTeX (.tex)
-  文本文件（.txt、.text、其他文件扩展名），包括采用常用编程语言的源代码，例如：

  - Basic 源代码 (.bas)
  - C/C++ 源代码（.c、.cc、.cpp、.cxx、.h、.hpp）
  - C# 源代码 (.cs)
  - Java 源代码 (.java)
  - Perl 源代码 (.pl)
  - Python 源代码 (.py)

- 无线标记语言（.wml、.wap）
- XML (.xml)

## 支持的编码文件类型

 支持以下编码文件类型。这些是二进制文件或复杂的容器，需要使用特定的解析器才能提取人类可读的文本。

- Adobe 便携式文档格式 (.pdf)
- Adobe PostScript (.ps)
- 电子出版物 (.epub)
- Hancom Hanword (.hwp)
- Microsoft Excel（.xls、.xlsx）
- Microsoft PowerPoint（.ppt、.pptx）
- Microsoft Word（.doc、.docx）
- OpenOffice 演示文稿 (.odp)
- OpenOffice 电子表格 (.ods)
- OpenOffice 文本文件 (.odt)
- 富文本格式 (.rtf)

## 支持的媒体格式

 Google 还可以将以下媒体格式的内容编入索引：

-  图片格式： BMP、GIF、JPEG、PNG、WebP、SVG 和 AVIF
-  视频格式： 3GP、3G2、ASF、AVI、DivX、M2V、M3U、M3U8、M4V、MKV、MOV、MP4、MPEG、OGV、QVT、RAM、RM、VOB、WebM、WMV 和 XAP

## 按文件类型搜索

 您可以在 Google 搜索中使用 `filetype:` 运算符，将搜索结果限制为特定文件类型或文件扩展名。例如，`[filetype:rtf galway](https://www.google.com/search?q=filetype%3Artf+galway&hl=zh-cn)` 会搜索以 `.rtf` 结尾且内容包含“galway”一词的 RTF 文件和网址。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-02-06。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-02-06。"],[],["Google indexes various text-based files and encoded document formats, including PDFs, HTML, Microsoft Office files, and OpenOffice formats. It also indexes source code files (like .c, .java, .py), XML, and more. Media formats such as common image types (JPEG, PNG) and video types (MP4, AVI) are indexable. Users can search for specific file types using the `filetype:` operator, to filter results to those formats.\n"]]

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
