const SITE_DATA = {
  emailUser: "tingbi",
  emailDomain: "hust.edu.cn",
  lastUpdated: "2026-11",

  ui: {
    en: {
      pageTitle: "Ting Bi (毕挺) | Associate Professor, HUST",
      langBtn: "中文",
      nav: { about: "About", news: "News", publications: "Publications", experience: "Experience", service: "Service" },
      sections: { about: "About", interests: "Research Interests", news: "News", publications: "Selected Publications", experience: "Experience", education: "Education", service: "Academic Service" },
      pub: {
        all: "All", journal: "Journal", conference: "Conference",
        searchPlaceholder: "Filter by keyword or venue...",
        note: 'For a complete list, please see <a href="https://scholar.google.com/citations?user=-nJOb1kAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a> or <a href="https://dblp.org/pid/141/1974.html" target="_blank" rel="noopener">DBLP</a>.',
        empty: "No matching publications found.", paper: "Paper", code: "Code", bibtex: "BibTeX", copy: "Copy"
      },
      toast: { emailCopied: "Email copied to clipboard", bibtexCopied: "BibTeX copied to clipboard" },
      footer: { copy: "© 2026 Ting Bi. All rights reserved.", updated: "Last updated: Nov 2026" }
    },
    zh: {
      pageTitle: "毕挺 (Ting Bi) | 华中科技大学副教授",
      langBtn: "EN",
      nav: { about: "个人简介", news: "最新动态", publications: "代表论文", experience: "经历与教育", service: "学术服务" },
      sections: { about: "个人简介", interests: "研究方向", news: "最新动态", publications: "代表性论文", experience: "工作经历", education: "教育背景", service: "学术服务" },
      pub: {
        all: "全部", journal: "期刊", conference: "会议",
        searchPlaceholder: "按关键词、期刊或会议筛选...",
        note: '完整论文列表请访问 <a href="https://scholar.google.com/citations?user=-nJOb1kAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a> 或 <a href="https://dblp.org/pid/141/1974.html" target="_blank" rel="noopener">DBLP</a>。',
        empty: "未找到匹配的论文。", paper: "论文", code: "代码", bibtex: "BibTeX", copy: "复制"
      },
      toast: { emailCopied: "邮箱已复制到剪贴板", bibtexCopied: "BibTeX 已复制到剪贴板" },
      footer: { copy: "© 2026 毕挺 (Ting Bi). 保留所有权利。", updated: "最近更新：2026年11月" }
    }
  },

  profile: {
    en: {
      name: "Ting Bi",
      secondaryName: "毕挺",
      role: "Associate Professor",
      affiliation: "Research Center of 6G Mobile Communications, School of Cyber Science and Engineering (CSE), Huazhong University of Science and Technology (HUST), China",
      office: "Room B506, East 17th Building, HUST"
    },
    zh: {
      name: "毕挺",
      secondaryName: "Ting Bi",
      role: "副教授",
      affiliation: "华中科技大学 网络空间安全学院 6G移动通信研究中心（天地一体化实验室）",
      office: "华中科技大学东十七楼B区506室"
    },
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=-nJOb1kAAAAJ&hl=en" },
      { label: "DBLP", url: "https://dblp.org/pid/141/1974.html" },
      { label: "HUST Lab Page", url: "https://cse-sinclab.hust.edu.cn/info/1014/1173.htm" }
    ]
  },

  about: {
    en: [
      "I am an Associate Professor at the Research Center of 6G Mobile Communications (SINC Lab), School of Cyber Science and Engineering (CSE), Huazhong University of Science and Technology (HUST), China. I serve as an Associate Editor for <em>IEEE Transactions on Broadcasting</em> and am a member of IEEE and ACM.",
      "I received my B.Eng. in Software Engineering from Wuhan University in 2010, and my M.Eng. (2011) and Ph.D. (2017) in Telecommunications from Dublin City University (DCU), Ireland. Prior to joining HUST in July 2023, I worked as a Postdoctoral Researcher at the Performance Engineering Laboratory and the Insight Centre for Data Analytics at DCU (2017–2020), and subsequently as an Assistant Professor at Maynooth University, Ireland (2020–2023)."
    ],
    zh: [
      "现为华中科技大学网络空间安全学院 6G 移动通信研究中心（天地一体化实验室）副教授，担任国际期刊 <em>IEEE Transactions on Broadcasting</em> 副主编（Associate Editor），IEEE / ACM 会员。",
      "2010 年获武汉大学软件工程学士学位，2011 年和 2017 年先后获爱尔兰都柏林城市大学（Dublin City University, DCU）通信工程硕士与博士学位。2017–2020 年在 DCU（Performance Engineering Laboratory & Insight Centre for Data Analytics）担任博士后研究员，2020–2023 年在爱尔兰梅努斯大学（Maynooth University）担任助理教授，2023 年 7 月加入华中科技大学。"
    ]
  },

  recruiting: {
    en: "<strong>Recruiting:</strong> Looking for self-motivated Ph.D. and Master's students interested in <strong>Multi-sensory Media, 6G Wireless Networks, XR, HCI, and Trustworthy Multimodal AI</strong>. Please feel free to reach out via email with your CV.",
    zh: "<strong>招生信息：</strong>长期招收对<strong>多感官媒体、6G 无线网络、扩展现实（XR）、人机交互（HCI）以及可信多模态人工智能</strong>感兴趣的博士生、硕士生及科研实习生。欢迎发送个人简历至邮箱联系！"
  },

  interests: {
    en: [
      "6G Mobile & Wireless Communications",
      "Multimedia & Multi-Sensory Media Streaming",
      "Mobile Augmented Reality (AR / XR)",
      "Quality of Experience (QoE)",
      "Edge Computing & Real-Time Video Analytics",
      "Multimodal LLM & AI Security"
    ],
    zh: [
      "6G 移动与无线通信",
      "多媒体与多感官媒体传输",
      "移动增强现实（AR / XR）",
      "用户体验质量（QoE）",
      "边缘计算与实时视频分析",
      "多模态大模型与 AI 安全"
    ]
  },

  news: [
    {
      pinned: true,
      date: { en: "Pinned", zh: "置顶" },
      text: {
        en: "We are actively recruiting motivated Ph.D./Master students and research interns at HUST. Feel free to send your CV!",
        zh: "课题组在华中科技大学持续招收博士生、硕士生及科研实习生，欢迎感兴趣的同学发邮件联系！"
      }
    },
    {
      date: { en: "2026", zh: "2026" },
      text: {
        en: "One paper on MultiModal LLMs and AR Social Engineering Attacks has been accepted by <strong>AAAI 2026</strong>.",
        zh: "关于多模态大模型与 AR 社会工程攻击的论文被 <strong>AAAI 2026</strong> 录用。"
      }
    },
    {
      date: { en: "2025", zh: "2025" },
      text: {
        en: "Papers have been accepted by <strong>IEEE TMC</strong>, <strong>IEEE TCCN</strong>, and <strong>ACM MM 2025</strong>.",
        zh: "多篇研究成果被 <strong>IEEE TMC</strong>、<strong>IEEE TCCN</strong> 及 <strong>ACM MM 2025</strong> 录用。"
      }
    }
  ],

  publications: [
    {
      id: "bi2026feasibility",
      year: 2026,
      type: "conference",
      badge: "AAAI '26",
      title: "On the Feasibility of Using MultiModal LLMs to Execute AR Social Engineering Attacks",
      authors: "<strong>Ting Bi</strong>, Chenghang Ye, Zheyu Yang, Ziyi Zhou, Cui Tang, Zui Tao, Jun Zhang, Kailong Wang, Liting Zhou, Yang Yang, Tianlong Yu",
      venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI), 2026.",
      paperUrl: "https://doi.org/10.1609/aaai.v40i45.41164",
      codeUrl: "",
      bibtex: `@article{bi2026feasibility,
  author  = {Bi, Ting and Ye, Chenghang and Yang, Zheyu and Zhou, Ziyi and Tang, Cui and Tao, Zui and Zhang, Jun and Wang, Kailong and Zhou, Liting and Yang, Yang and Yu, Tianlong},
  title   = {{On the Feasibility of Using MultiModal LLMs to Execute AR Social Engineering Attacks}},
  journal = {Proceedings of the AAAI Conference on Artificial Intelligence},
  volume  = {40},
  number  = {45},
  pages   = {38252--38260},
  year    = {2026},
  doi     = {10.1609/aaai.v40i45.41164}
}`
    },
    {
      id: "yu2025sear",
      year: 2025,
      type: "conference",
      badge: "ACM MM '25",
      title: "SEAR: A Multimodal Dataset for Analyzing AR-LLM-Driven Social Engineering Behaviors",
      authors: "Tianlong Yu, Chenghang Ye, Zheyu Yang, Ziyi Zhou, Cui Tang, Zui Tao, Jun Zhang, Kailong Wang, Liting Zhou, Yang Yang, <strong>Ting Bi</strong>",
      venue: "Proceedings of the 33rd ACM International Conference on Multimedia (ACM MM), 2025.",
      paperUrl: "https://doi.org/10.1145/3746027.3758245",
      codeUrl: "",
      bibtex: `@inproceedings{yu2025sear,
  author    = {Yu, Tianlong and Ye, Chenghang and Yang, Zheyu and Zhou, Ziyi and Tang, Cui and Tao, Zui and Zhang, Jun and Wang, Kailong and Zhou, Liting and Yang, Yang and Bi, Ting},
  title     = {{SEAR: A Multimodal Dataset for Analyzing AR-LLM-Driven Social Engineering Behaviors}},
  booktitle = {Proceedings of the 33rd ACM International Conference on Multimedia},
  pages     = {12981--12987},
  year      = {2025},
  publisher = {ACM},
  doi       = {10.1145/3746027.3758245}
}`
    },
    {
      id: "feng2025loca",
      year: 2025,
      type: "journal",
      badge: "IEEE TMC '25",
      title: "LOCA: Long-Term Optimization based on Chunk-Level Analysis in Edge-Assisted Massive Mobile Live Streaming",
      authors: "Fangzheng Feng, Yu Zhang, Xinkun Zheng, <strong>Ting Bi</strong>, Tao Jiang",
      venue: "IEEE Transactions on Mobile Computing (TMC), 2025.",
      paperUrl: "",
      codeUrl: "",
      bibtex: `@article{feng2025loca,
  author  = {Feng, Fangzheng and Zhang, Yu and Zheng, Xinkun and Bi, Ting and Jiang, Tao},
  title   = {{LOCA: Long-Term Optimization based on Chunk-Level Analysis in Edge-Assisted Massive Mobile Live Streaming}},
  journal = {IEEE Transactions on Mobile Computing},
  year    = {2025},
  publisher = {IEEE}
}`
    },
    {
      id: "gomos2025tccn",
      year: 2025,
      type: "journal",
      badge: "IEEE TCCN '25",
      title: "GOMOS: A GNN-Assisted Network-Media Integrated Optimization Framework for Massive Mobile Live Streaming",
      authors: "Feng, Fangzheng, <strong>Ting Bi</strong>, Mingjie Feng, Tao Jiang",
      venue: "IEEE Transactions on Cognitive Communications and Networking (TCCN), 2025.",
      paperUrl: "",
      codeUrl: "",
      bibtex: `@article{gomos2025tccn,
  author  = {Feng, Fangzheng  and Bi, Ting and Feng, Mingjie and Jiang, Tao},
  title   = {{GOMOS: A GNN-Assisted Network-Media Integrated Optimization Framework for Massive Mobile Live Streaming}},
  journal = {IEEE Transactions on Cognitive Communications and Networking},
  year    = {2025},
  publisher = {IEEE}
}`
    },
    {
      id: "feng2024edge",
      year: 2024,
      type: "journal",
      badge: "IEEE TMC '24",
      title: "Edge Selective Sharing for Massive Mobile Video Streaming with Cross-Layer Optimization",
      authors: "Fangzheng Feng, Guanghua Liu, <strong>Ting Bi</strong>, Tao Jiang",
      venue: "IEEE Transactions on Mobile Computing (TMC), 2024.",
      paperUrl: "",
      codeUrl: "",
      bibtex: `@article{feng2024edge,
  author  = {Feng, Fangzheng and Liu, Guanghua and Bi, Ting and Jiang, Tao},
  title   = {{Edge Selective Sharing for Massive Mobile Video Streaming with Cross-Layer Optimization}},
  journal = {IEEE Transactions on Mobile Computing},
  year    = {2024},
  publisher = {IEEE}
}`
    }
  ],

  experience: {
    en: [
      { period: "2023 – Present", role: "Associate Professor", org: "School of Cyber Science and Engineering, Huazhong University of Science and Technology (HUST), China" },
      { period: "2020 – 2023", role: "Assistant Professor", org: "Maynooth University, Ireland" },
      { period: "2017 – 2020", role: "Postdoctoral Researcher", org: "Performance Engineering Laboratory & Insight Centre for Data Analytics, Dublin City University (DCU), Ireland" }
    ],
    zh: [
      { period: "2023 – 至今", role: "副教授", org: "华中科技大学 网络空间安全学院" },
      { period: "2020 – 2023", role: "助理教授", org: "爱尔兰梅努斯大学（Maynooth University）" },
      { period: "2017 – 2020", role: "博士后研究员", org: "爱尔兰都柏林城市大学（DCU）性能工程实验室 & Insight 数据分析中心" }
    ]
  },

  education: {
    en: [
      { period: "2017", role: "Ph.D. in Telecommunications", org: "Dublin City University (DCU), Ireland" },
      { period: "2011", role: "M.Eng. in Telecommunications", org: "Dublin City University (DCU), Ireland" },
      { period: "2010", role: "B.Eng. in Software Engineering", org: "Wuhan University, China" }
    ],
    zh: [
      { period: "2017", role: "通信工程 博士", org: "爱尔兰都柏林城市大学（Dublin City University, DCU）" },
      { period: "2011", role: "通信工程 硕士", org: "爱尔兰都柏林城市大学（Dublin City University, DCU）" },
      { period: "2010", role: "软件工程 学士", org: "武汉大学" }
    ]
  },

  service: {
    en: [
      { title: "Associate Editor", content: "IEEE Transactions on Broadcasting" },
      { title: "Membership", content: "IEEE Member, ACM Member, IEEE Communications Society, IEEE Broadcast Technology Society" },
      { title: "TPC Member & Reviewer", content: "ACM Web Conference (WWW 2027), AAAI 2026, ACM Multimedia (MM 2025–2026), INFOCOM, GLOBECOM, ICC, WCNC, IEEE TMC, IEEE IoTJ, IEEE TWC, IEEE TVT, etc." }
    ],
    zh: [
      { title: "期刊副编辑（Associate Editor）", content: "IEEE Transactions on Broadcasting" },
      { title: "学术会员", content: "IEEE 会员、ACM 会员、IEEE 通信学会（ComSoc）、IEEE 广播技术学会（BTS）" },
      { title: "程序委员会委员 / 审稿人", content: "ACM Web Conference (WWW 2027)、AAAI 2026、ACM Multimedia (MM2025–2026)、INFOCOM、GLOBECOM、ICC、WCNC、IEEE TMC、IoTJ、TWC、TVT 等。" }
    ]
  }
};
