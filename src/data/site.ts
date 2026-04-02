export const siteMeta = {
  title: "Benny's Blog",
  siteUrl: "https://onriver.top",
  author: "Benny",
  accent: "https://onriver.top/img/home-bg.jpg"
};

export const locales = ["zh-cn", "en"] as const;

export type Locale = (typeof locales)[number];

export const localeInfo: Record<
  Locale,
  { htmlLang: string; label: string; switchLabel: string; pathPrefix: string }
> = {
  "zh-cn": {
    htmlLang: "zh-CN",
    label: "中文",
    switchLabel: "English",
    pathPrefix: ""
  },
  en: {
    htmlLang: "en",
    label: "English",
    switchLabel: "中文",
    pathPrefix: "/en"
  }
};

export const copy = {
  "zh-cn": {
    description: "记录技术、阅读和日常想法。",
    nav: {
      home: "首页",
      about: "关于",
      tags: "标签"
    },
    hero: {
      eyebrow: "个人博客",
      title: "代码、阅读与值得记下来的生活片段",
      blurb:
        "保留旧站的影像与安静气质，用一套更轻、更现代的方式继续写下去。"
    },
    sections: {
      latest: "最新文章",
      archive: "按标签浏览",
      back: "返回首页",
      more: "继续阅读"
    },
    about: {
      title: "关于",
      description: "这是一个关于代码、工具、阅读和日常记录的小站。",
      intro:
        "这里是江上的博客，主要记录代码、工具、阅读和一些值得写下来的生活片段。如果这些内容刚好也能帮到你，那就再好不过。",
      notes: [
        "写作会同时覆盖中文与英文，方便以后整理和分享。",
        "旧站里保留下来的照片与封面图，会继续作为这个博客的视觉线索。"
      ]
    },
    footer: "用 Astro 重建，继续慢慢写。"
  },
  en: {
    description: "Notes on code, reading, and everyday life.",
    nav: {
      home: "Home",
      about: "About",
      tags: "Tags"
    },
    hero: {
      eyebrow: "Personal blog",
      title: "Code, reading, and the parts of life worth writing down",
      blurb:
        "The old images and quiet atmosphere stay. The stack underneath is now smaller, faster, and easier to keep for years."
    },
    sections: {
      latest: "Latest writing",
      archive: "Browse by tag",
      back: "Back home",
      more: "Read more"
    },
    about: {
      title: "About",
      description: "A small bilingual home for code, tools, reading, and life notes.",
      intro:
        "This is Benny's blog, a personal site for notes on code, tools, reading, and everyday life that feels worth remembering.",
      notes: [
        "Posts now have room to live in both Chinese and English.",
        "Images from the old site stay in place so the visual memory of the blog survives the rebuild."
      ]
    },
    footer: "Rebuilt with Astro for the next chapter."
  }
} as const;
