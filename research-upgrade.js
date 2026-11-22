/* Load AFTER the existing script.js. Publication data is never modified. */
(() => {
  "use strict";
  const content = {
  "about": {
    "en": [
      "I am an Associate Professor at the Research Center of 6G Mobile Communications, School of Cyber Science and Engineering, Huazhong University of Science and Technology (HUST), China. I serve as an Associate Editor of <em>IEEE Transactions on Broadcasting</em> and am a member of IEEE and ACM.",
      "I received my B.Eng. in Software Engineering from Wuhan University in 2010, and my master’s (2011) and Ph.D. (2017) degrees in Telecommunications from Dublin City University (DCU), Ireland. Before joining HUST in July 2023, I was a Postdoctoral Researcher at DCU (2017–2020) and an Assistant Professor at Maynooth University (2020–2023).",
      "My research bridges wireless communications, multimedia systems, and artificial intelligence. My future work will focus on <strong>AI-Empowered Multi-Sensory Media</strong> and <strong>Multi-Agent Communications</strong>. The first explores AI-assisted generation and representation of sensory content, perception-aware transmission, cross-modal synchronization, and natural interaction across vision, hearing, touch, and smell. The second focuses on AI-assisted system architectures and communication frameworks for teams of intelligent devices, integrating communication, computation, and collaborative decision-making. A key goal is to develop and evaluate deployable systems for XR, robot collaboration, and edge intelligence."
    ],
    "zh": [
      "现任华中科技大学网络空间安全学院6G移动通信研究中心（天地一体化实验室）副教授，担任 <em>IEEE Transactions on Broadcasting</em> 副主编，IEEE / ACM会员。",
      "2010年获武汉大学软件工程学士学位，2011年和2017年先后获爱尔兰都柏林城市大学（DCU）通信工程硕士与博士学位。2017–2020年在DCU性能工程实验室与Insight数据分析中心从事博士后研究，2020–2023年任爱尔兰梅努斯大学助理教授，2023年7月加入华中科技大学。",
      "我的研究处于无线通信、多媒体系统与人工智能的交叉领域。未来将重点聚焦<strong>多体感媒体</strong>与<strong>多智能体通信</strong>：前者面向视觉、听觉、触觉和嗅觉等人的多维感知，探索AI辅助的感知内容生成与表征、感知驱动的高效传输、跨模态同步及自然交互；后者面向智能机器人、XR终端与边缘节点等设备，研究AI辅助的多智能体系统架构与协同通信框架，协同优化通信、计算与决策，并通过原型系统与真实场景验证推动技术落地。"
    ]
  },
  "directions": {
    "en": [
      {
        "title": "AI-Empowered Multi-Sensory Media & XR",
        "desc": "Building on research in adaptive mulsemedia delivery, sensory synchronization, and immersive video, this direction explores how AI can assist the generation, representation, transmission, and interaction of visual, auditory, haptic, and olfactory content. Future work will emphasize perceptual consistency, cross-modal synchronization, and user experience.",
        "focus": true
      },
      {
        "title": "Multi-Agent Communications & Edge Collaboration",
        "desc": "Building on collaborative mapping, robotic video analytics, and edge resource optimization, this direction investigates AI-assisted architectures for interconnected intelligent devices. Future work will focus on task-oriented information exchange, joint communication–computation–decision optimization, and deployable robot and edge collaboration systems.",
        "focus": true
      },
      {
        "title": "Intelligent Wireless Networks & Low-Latency Transport",
        "desc": "This direction studies cross-layer resource allocation, channel prediction, adaptive streaming, and learning-enhanced QUIC protocols. It provides communication and computing foundations for immersive media and collaborative devices operating under bandwidth, latency, reliability, and energy constraints.",
        "focus": false
      },
      {
        "title": "Trustworthy Multimodal AI & XR Security",
        "desc": "This direction examines social engineering risks arising from the integration of multimodal language models and augmented reality. It explores behavior analysis, evaluation datasets, and defense mechanisms, including model unlearning, to support trustworthy interactive and collaborative systems.",
        "focus": false
      }
    ],
    "zh": [
      {
        "title": "多体感媒体与沉浸式交互",
        "desc": "基于自适应多体感媒体传输、感官同步与沉浸式视频研究，探索AI如何辅助视觉、听觉、触觉和嗅觉等感知内容的生成、表征、传输与交互。未来重点关注感知一致性、跨模态同步和以人为中心的体验优化。",
        "focus": true
      },
      {
        "title": "多智能体通信与边缘协同",
        "desc": "基于协同语义建图、机器人视频分析及边缘资源优化研究，面向智能机器人、XR终端和边缘节点，研究AI辅助的系统架构与通信框架。未来重点探索任务驱动的信息共享、通信—计算—决策协同优化，以及多设备协作原型系统与真实场景应用。",
        "focus": true
      },
      {
        "title": "智能无线网络与低时延传输",
        "desc": "研究跨层资源分配、信道预测、自适应流媒体和机器学习增强的QUIC传输协议，在带宽、时延、可靠性和能耗约束下优化系统性能，为沉浸式媒体与多智能体设备协作提供网络和计算支撑。",
        "focus": false
      },
      {
        "title": "可信多模态人工智能与XR安全",
        "desc": "关注多模态大模型与增强现实融合产生的社会工程攻击风险，研究行为分析、评测数据集及包括模型遗忘在内的防御机制，为自然交互与智能协作系统提供可信安全保障。",
        "focus": false
      }
    ]
  },
  "recruiting": {
    "en": "<strong>Recruiting:</strong> Looking for self-motivated Ph.D. and Master's students and research interns interested in <strong>AI-empowered multi-sensory media and multi-agent communications</strong>, as well as XR, edge intelligence, and trustworthy multimodal AI. Please email your CV.",
    "zh": "<strong>招生信息：</strong>长期招收对<strong>多体感媒体与多智能体通信</strong>、XR、边缘智能及可信多模态人工智能感兴趣的博士生、硕士生和科研实习生，欢迎发送简历联系！"
  }
};
  function updateResearch() {
    const lang = document.documentElement.lang.toLowerCase().startsWith("zh") ? "zh" : "en";
    const about = document.getElementById("about-content");
    const recruiting = document.getElementById("recruiting-banner");
    const container = document.getElementById("interests-list");
    if (about) about.innerHTML = content.about[lang].map(p => `<p>${p}</p>`).join("");
    if (recruiting) recruiting.innerHTML = content.recruiting[lang];
    if (!container) return;
    container.classList.add("research-directions-grid");
    container.replaceChildren();
    content.directions[lang].forEach((direction, i) => {
      const card = document.createElement("article");
      card.className = "research-direction-card" + (direction.focus ? " research-direction-primary" : "");
      const meta = document.createElement("div");
      meta.className = "research-direction-meta";
      meta.textContent = String(i + 1).padStart(2, "0") + (direction.focus ? (lang === "zh" ? " · 未来重点" : " · Future focus") : (lang === "zh" ? " · 支撑方向" : " · Supporting direction"));
      const heading = document.createElement("h4");
      heading.textContent = direction.title;
      const paragraph = document.createElement("p");
      paragraph.textContent = direction.desc;
      card.append(meta, heading, paragraph);
      container.append(card);
    });
    const heading = document.querySelector('[data-i18n="sections.interests"]');
    if (heading) heading.textContent = lang === "zh" ? "研究方向" : "Research Directions";
  }
  function init() {
    updateResearch();
    // Capture schedules the update after the original language-switch handler.
    document.addEventListener("click", event => {
      if (event.target.closest("#lang-toggle")) queueMicrotask(updateResearch);
    }, true);
    new MutationObserver(updateResearch).observe(document.documentElement, {attributes:true, attributeFilter:["lang"]});
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, {once:true});
  else init();
})();
