---
title: 网站地图(sitemap)
tags:
  - 科普
  - seo
categories: 技术
---

站点地图（Sitemap）描述了网站的架构。 它可以是一个任意形式的文档(xml/html)，是列出网站中所有页面的一个网页。

有助于访问者以及搜索引擎的爬虫找到网站中的页面(对seo有利)。

一般情况下，也就是 `https://domain.com/sitemap.xml`


## 格式

网站地图可以有多种格式 XML文件（sitemap.xml）、HTML文件(sitemap.html)、TXT文件(sitemap.txt)或RSS文件(rss.xml)，

通常是分级的XML结构

```xml
<?xml version='1.0' encoding='UTF-8'?>
<sitemapindex xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
  <sitemap>
    <loc>https://www.youtube.com/ads/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.youtube.com/sitemaps/misc.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.youtube.com/kids/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.youtube.com/trends/sitemap.xml</loc>
  </sitemap>
  ...
</sitemapindex>
```

如上面 从首页的`sitemap.xml`指向了子模块中的多个`sitemap.xml`

## Example

- b站的sitemap: `https://www.bilibili.com/sitemap.xml`
- github的sitemap(以html的格式): `https://github.com/sitemap`
- youtube的sitemap: `https://www.youtube.com/sitemaps/sitemap.xml`
- hexo的sitemap: `https://hexo.io/sitemap.xml`
  - hexo生成sitemap的插件 [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)
