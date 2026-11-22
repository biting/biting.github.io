# 原风格整合版：本次更新

## 更新
- 保留白底蓝色卡片风格。
- 同时显示 tingbi [AT] hust.edu.cn 和 ting.bi [AT] ieee.org，点击可复制完整邮箱。
- 个人信息左侧、照片右侧；移动端同样保留右侧照片。
- 首页顺序：个人信息 → 个人简介 → 研究方向 → 最新动态 → 学术服务 → 分类代表作。
- 首页4个领域各3篇代表作，独立publications.html显示全部64条记录。
- 中文简介两段按用户要求替换，英文对应同步；个人陈述含IEEE INFOCOM的名称替换系按用户提供文本执行，并非本次重新核验成果。
- 不显示独立教育与经历板块。

## 部署
先备份，然后把本包文件覆盖到原仓库根目录。保留原有assets/avatar.jpg，本包不含头像。
新版只加载data.js、script.js、style.css，无需旧site-config.js、research-upgrade.*或about-patch.js。
可清理旧文件，但不是必需；不要误删头像。

在已有仓库运行：
    git add index.html publications.html data.js script.js style.css README.md CHECKS.md .nojekyll
    git commit -m "Update emails profile text layout and section order"
    git push

## 维护
本版将所有文案与数据整合回data.js，不再依赖site-config.js。
- about.en / about.zh：简介；recruiting：招生
- emails：双邮箱配置（当前页面为两邮箱提供复制按钮）
- directions：研究方向介绍
- selectedPublications：每组3个论文id
- publicationAreas：文献id对应media/agents/networks/security/other；新id未配置归其他
- publications：全部64条记录，保留上传内容，不更改论文元数据

BibTeX展示时把源数据中的字面量\n转成换行，不更改其书目内容。
文献数据来自用户上传data.js，本次没有重新核验DOI、作者身份或收录状态。
本包已本地浏览器测试，不能代替推送后的线上检查。
