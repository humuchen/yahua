import{e as S,g as m,h as D,i,j as e,w as N,F as v,k as u,u as P,n as f,t as n,v as T,l as L,o as l}from"./vendor-vue-Bg_1_mzo.js";import{_ as x}from"./index-Cb6S-3xK.js";const y=[{label:"压力容器",value:"pressure"},{label:"钢结构产品",value:"steel"},{label:"能源装备",value:"energy"},{label:"定制服务",value:"custom"}],I=new Map([["pressure",{title:"🏭 压力容器产品系列",desc:"年生产能力：5000吨 | 获得A1、A2级特种设备制造许可证",items:[{img:"⚗️",title:"反应釜",desc:"高效化学反应容器，适用于各类化学工艺流程",specs:[{title:"材质选项",desc:"碳钢、不锈钢"},{title:"规格范围",desc:"5-500m²"},{title:"工作压力",desc:"常压至16MPa"}]},{img:"🛢️",title:"储罐系列",desc:"各类化学液体、气体储存容器，防腐防漏",specs:[{title:"类型",desc:"液体储罐、气体储罐"},{title:"容积范围",desc:"10-1000m²"},{title:"防腐涂层",desc:"可选"}]},{img:"🔄",title:"热交换器",desc:"高效能热交换设备，工业冷却/加热方案",specs:[{title:"类型",desc:"板式、管式、空气冷却"},{title:"换热面积",desc:"5-500m²"},{title:"温度范围",desc:"-20℃～200℃"}]},{img:"⚙️",title:"分离器",desc:"液液/气液分离专用容器，分离效率高",specs:[{title:"分离类型",desc:"液液、气液、液固"},{title:"处理能力",desc:"可定制"},{title:"工艺",desc:"重力分离、离心分离"}]},{img:"🏗️",title:"蒸馏塔装置",desc:"精馏/蒸馏分离装置，工艺精准",specs:[{title:"塔径范围",desc:"0.5-5m"},{title:"塔板数",desc:"可定制"},{title:"分离效率",desc:">95%"}]},{img:"💎",title:"特种容器",desc:"特殊工艺、高难度容器定制方案",specs:[{title:"应用",desc:"高温、高压、腐蚀"},{title:"工艺",desc:"焊接、水压测试"},{title:"认证",desc:"A1、A2级"}]}]}],["steel",{title:"🏢 钢结构产品系列",desc:"年生产能力：10000吨 | 卷板机能力：90mm×3200mm",items:[{img:"🏗️",title:"框架结构",desc:"工业厂房、仓库、商业建筑钢结构框架",specs:[{title:"跨度范围",desc:"6-50m"},{title:"材质",desc:"Q235、Q345等"},{title:"防腐处理",desc:"喷砂防锈、热浸镀锌"}]},{img:"📐",title:"管道支架系统",desc:"管道、设备支撑架，结构稳定",specs:[{title:"载重能力",desc:"10-500吨"},{title:"应用场景",desc:"炼油、化工"},{title:"安装方式",desc:"焊接、螺栓"}]},{img:"📡",title:"塔筒结构件",desc:"高精度冷弯卷板，大型塔筒部件",specs:[{title:"卷板能力",desc:"90×3200mm"},{title:"精度等级",desc:"GB/T 1184 CT4"},{title:"厚度范围",desc:"2-50mm"}]},{img:"📦",title:"工业平台结构",desc:"多层工业平台、检修平台等",specs:[{title:"层高范围",desc:"灵活配置"},{title:"防火等级",desc:"可选"},{title:"承载等级",desc:"B1-B3"}]},{img:"🔧",title:"钢结构组件件",desc:"梁柱、板件、连接件等标准/非标件",specs:[{title:"加工方式",desc:"数控切割、刨边"},{title:"焊接工艺",desc:"自动焊、手工焊"},{title:"质量体系",desc:"ISO 9001"}]},{img:"🎨",title:"定制设计制造",desc:"根据客户需求，提供全套钢结构解决方案",specs:[{title:"设计支持：",desc:"CAD/3D建模"},{title:"制造周期：",desc:"快速交付"},{title:"安装指导：",desc:"技术支持"}]}]}],["energy",{title:"🔋 能源装备系列",desc:"新型化工、能源装备的研发与制造",items:[{img:"🔥",title:"工业锅炉装置",desc:"蒸汽、热水锅炉，各类工业加热应用",specs:[{title:"蒸发量",desc:"1-50t/h"},{title:"工作压力",desc:"0.7-4.0MPa"},{title:"燃料类型",desc:"气、油、煤"}]},{img:"❄️",title:"工业冷却系统",desc:"冷却塔、闭式冷却循环系统等",specs:[{title:"冷却能力",desc:"可定制"},{title:"类型",desc:"开式/闭式"},{title:"节能等级",desc:"A级"}]},{img:"💧",title:"污水处理装置",desc:"工业废水、废气处理设备",specs:[{title:"处理量",desc:"10-500m³/h"},{title:"工艺",desc:"多种可选"},{title:"排放标准",desc:"达国家标准"}]},{img:"🌡️",title:"高效换热设备",desc:"板翅式、螺旋板式等高效换热器",specs:[{title:"类型",desc:"多种规格"},{title:"传热系数",desc:"高效节能"},{title:"应用",desc:"LNG、制冷等"}]},{img:"🔐",title:"高压气体容器",desc:"氮气、氧气、各类气体储存",specs:[{title:"工作压力",desc:"1-300MPa"},{title:"容积",desc:"0.1-500L"},{title:"认证",desc:"TSG、ASME"}]},{img:"⚙️",title:"能源系统集成",desc:"余热回收、能量管理、智能控制系统",specs:[{title:"技术",desc:"自动化控制"},{title:"节能率",desc:"15-30%"},{title:"可靠性",desc:"99%以上"}]}]}],["custom",{title:"🎯 定制服务",desc:"根据您的特殊需求，提供完整的定制化解决方案",items:[{img:"📋",title:"工程设计服务",desc:"专业工程师团队提供全套设计方案",specs:[{title:"设计能力",desc:"A1、A2级许可"},{title:"工具",desc:"CAD/ANSYS/CFD"},{title:"周期",desc:"快速响应"}]},{img:"🔨",title:"技术改造升级",desc:"现有装备技术升级、性能改善",specs:[{title:"诊断评估",desc:"免费咨询"},{title:"改造方案",desc:"定制设计"},{title:"工期保证",desc:"按期交付"}]},{img:"🛠️",title:"设备维护保养",desc:"全生命周期维护保养、应急维修",specs:[{title:"服务方式",desc:"定期/应急"},{title:"响应时间",desc:"24小时内"},{title:"技术支持",desc:"在线/上门"}]},{img:"📦",title:"高端材料供应",desc:"特殊合金、高温材料、防腐材料",specs:[{title:"材料类型",desc:"多种特殊材料"},{title:"质量保证",desc:"进口认证"},{title:"供应周期",desc:"快速响应"}]},{img:"🔧",title:"安装调试服务",desc:"现场安装、调试、验收一站式服务",specs:[{title:"安装团队",desc:"专业工程师"},{title:"调试周期",desc:"快速高效"},{title:"售后支持",desc:"长期保障"}]},{img:"📚",title:"技术培训服务",desc:"操作员培训、管理人员培训、技工培训",specs:[{title:"培训形式",desc:"现场/在线"},{title:"培训周期",desc:"灵活安排"},{title:"证书颁发",desc:"正规认证"}]}]}]]),F={反应釜:{title:"反应釜",overview:"反应釜是我公司主力产品，采用先进的设计和制造工艺，适用于各类化学工艺流程。产品具有耐腐蚀、耐高温、搅拌均匀等特点。",specs:`材质可选：碳钢、不锈钢（304、316L等）
规格范围：5-500m³
工作压力：常压至16MPa
温度范围：-20℃～200℃
搅拌方式：多种可选`,application:"应用于精细化工、制药、食品、涂料等行业的化学反应过程。",advantage:`✓ A1、A2级制造许可认证
✓ 专业工程师设计，质量可靠
✓ 完善的售后服务体系
✓ 交期保证`},储罐系列:{title:"储罐系列",overview:"各类化学液体、气体储存容器，采用优质材料，具有防腐、防漏性能。可根据客户需求定制各类储罐。",specs:`类型：液体储罐、气体储罐、液化气储罐
容积范围：10-1000m³
防腐涂层：可选内外涂装
工作温度：-20℃～80℃
标准：GB 50160`,application:"广泛应用于化工、医药、食品、环保等行业的原料、产品储存。",advantage:`✓ 设计合理，容积利用率高
✓ 材质选择多样
✓ 防腐防漏性能优异
✓ 符合国家标准`},热交换器:{title:"热交换器",overview:"高效能热交换设备，采用先进的传热技术，为工业提供冷却/加热解决方案。",specs:`类型：板式、管式、空气冷却
换热面积：5-500m²
温度范围：-20℃～200℃
传热系数：500-8000 w/m²·k
压力等级：0.6-4.0MPa`,application:"应用于炼油、化工、制药、食品等行业的冷却、加热、冷凝等工艺。",advantage:`✓ 传热效率高，节能环保
✓ 结构紧凑，占地面积小
✓ 维护方便，易于清洗
✓ 经久耐用`},分离器:{title:"分离器",overview:"液液/气液分离专用容器，设计科学，分离效率高，是化工工艺的重要设备。",specs:`分离类型：液液、气液、液固分离
处理能力：可定制
工艺：重力分离、离心分离
分离效率：>95%
工作条件：可根据需求设计`,application:"广泛应用于油气分离、水处理、化工分离等领域。",advantage:`✓ 分离效率高
✓ 设计科学合理
✓ 操作简便
✓ 维护成本低`},蒸馏塔装置:{title:"蒸馏塔装置",overview:"精馏/蒸馏分离装置，采用先进的填料、塔板技术，工艺精准，分离效果显著。",specs:`塔径范围：0.5-5m
塔板数：可定制
分离效率：>95%
理论板：10-50块
工作压力：常压～10MPa`,application:"应用于精细化工、石油化工、制药等行业的分离蒸馏工艺。",advantage:`✓ 分离效率高，产品纯度好
✓ 操作灵活，适应性强
✓ 设计规范，质量稳定
✓ 技术先进`},特种容器:{title:"特种容器",overview:"针对特殊工艺、高难度容器的定制方案，应用于高温、高压、腐蚀等恶劣工况。",specs:`应用：高温、高压、腐蚀等特殊条件
材质：多种特殊合金可选
工艺：先进焊接、水压测试
认证：A1、A2级
质量保证：终身技术支持`,application:"应用于极端工况下的化学反应、储存、分离等工艺流程。",advantage:`✓ 材料选择多样
✓ 工艺先进可靠
✓ 质量管控严格
✓ 技术团队强大`},框架结构:{title:"框架结构",overview:"工业厂房、仓库、商业建筑钢结构框架，设计科学，施工便捷，质量稳定。",specs:`跨度范围：6-50m
层高：可灵活设计
材质：Q235、Q345等
防腐处理：喷砂防锈、热浸镀锌
质量标准：GB 50017`,application:"广泛应用于工业厂房、仓储物流、商业建筑等领域。",advantage:`✓ 设计规范，施工快速
✓ 质量可靠，成本优化
✓ 防腐处理完善
✓ 技术服务全面`},管道支架系统:{title:"管道支架系统",overview:"管道、设备支撑架系统，结构稳定，能满足各种载重需求，是工业装置的重要组成部分。",specs:`载重能力：10-500吨
应用场景：炼油、化工、电力等
安装方式：焊接、螺栓连接
防腐等级：可选
设计标准：GB 50017`,application:"应用于石油、化工、电力等行业的管道、设备支撑。",advantage:`✓ 结构紧凑，美观大方
✓ 承载能力强
✓ 安装灵活
✓ 维护方便`},塔筒结构件:{title:"塔筒结构件",overview:"高精度冷弯卷板，适用于大型塔筒部件的制造，精度高，质量稳定。",specs:`卷板能力：90mm×3200mm
精度等级：GB/T 1184 CT4
厚度范围：2-50mm
材料：各种钢材
加工工艺：数控冷弯、焊接`,application:"应用于石油、化工、冶金等行业的大型塔筒、筒体类结构件。",advantage:`✓ 精度高，质量稳定
✓ 工艺先进
✓ 加工能力强
✓ 交期保证`},工业平台结构:{title:"工业平台结构",overview:"多层工业平台结构，设计灵活，承载能力强，广泛应用于工业厂房。",specs:`层高范围：灵活配置
防火等级：可选
承载等级：B1-B3
材质：钢结构
标准：GB 50017`,application:"应用于工业生产、仓储物流、商业建筑等对平台有要求的场景。",advantage:`✓ 设计灵活，满足多种需求
✓ 承载能力强
✓ 美观实用
✓ 施工快速`},钢结构组件件:{title:"钢结构组件件",overview:"钢结构组件件（梁、柱、板、连接件等），加工工艺先进，质量控制严格。",specs:`加工方式：数控切割、刨边、焊接
焊接工艺：自动焊、手工焊、埋弧焊
精度等级：GB/T 1184 CT4
质量体系：ISO 9001
交付形式：原件/组装件`,application:"应用于钢结构工程、大型设备、特殊构件等领域。",advantage:`✓ 加工精度高
✓ 质量稳定可靠
✓ 交期快
✓ 价格优竞争力强`},定制设计制造:{title:"定制设计制造",overview:"根据客户特殊需求，提供全套钢结构设计、制造、安装解决方案。",specs:`设计支持：CAD/3D建模、结构分析
制造周期：快速交付
安装指导：技术支持、人员培训
质量保证：终身技术支持
交付形式：上门安装`,application:"应用于各种特殊用途的钢结构工程。",advantage:`✓ 设计方案专业
✓ 制造工艺先进
✓ 交期保证
✓ 售后服务完善`},工业锅炉装置:{title:"工业锅炉装置",overview:"工业蒸汽、热水锅炉装置，技术先进，能效高，安全可靠。",specs:`蒸发量：1-50t/h
工作压力：0.7-4.0MPa
燃料类型：气、油、煤
效率：>90%
认证：国家锅炉许可证`,application:"广泛应用于食品加工、纺织印染、化工生产等行业的加热、蒸汽供应。",advantage:`✓ 能效高，经济运行
✓ 安全可靠
✓ 自动控制
✓ 维护保养便捷`},工业冷却系统:{title:"工业冷却系统",overview:"工业冷却系统（冷却塔、闭式冷却循环等），设计合理，冷却效果显著。",specs:`冷却能力：可定制
类型：开式/闭式冷却塔
节能等级：A级
材质：玻璃钢/不锈钢可选
应用工况：多种可选`,application:"应用于电力、钢铁、化工、制冷等行业的工艺冷却。",advantage:`✓ 冷却效率高
✓ 节能环保
✓ 噪音低
✓ 维护简单`},污水处理装置:{title:"污水处理装置",overview:"工业废水、废气处理设备，工艺先进，处理效果达到国家标准。",specs:`处理量：10-500m³/h
工艺：多种可选（活性污泥法、MBR、氧化等）
排放标准：达国家GB 8978
处理效率：>90%
运维成本：低`,application:"应用于化工、制药、食品、纺织等行业的污水处理。",advantage:`✓ 工艺先进，处理效果好
✓ 成本低
✓ 自动化程度高
✓ 环保达标`},高效换热设备:{title:"高效换热设备",overview:"高效换热设备（板翅式、螺旋板式等），采用先进传热技术，节能高效。",specs:`类型：多种规格可选
传热系数：高效节能
应用：LNG、制冷、液化等
材质：多种可选
工作条件：极低温～高温`,application:"应用于LNG产业、低温液化、制冷、深冷等特殊工艺。",advantage:`✓ 换热效率极高
✓ 结构紧凑
✓ 能耗低
✓ 技术先进`},高压气体容器:{title:"高压气体容器",overview:"高压气体容器，用于氮气、氧气、各类特殊气体的储存，安全可靠。",specs:`工作压力：1-300MPa
容积：0.1-500L
材质：合金钢等
认证：TSG、ASME等
安全系数：完整安全阀、压力表`,application:"应用于工业气体储存、供应、特种气体储备等领域。",advantage:`✓ 安全系数高
✓ 质量可靠
✓ 认证完整
✓ 维护保养便利`},能源系统集成:{title:"能源系统集成",overview:"余热回收、能量管理、智能控制系统整体方案，帮助企业降低能耗。",specs:`技术：自动化控制、大数据分析
节能率：15-30%
可靠性：99%以上
实时监测：远程在线监控
集成方案：完整能源管理`,application:"应用于各类工业企业的能源管理、余热回收、节能改造。",advantage:`✓ 节能效果显著
✓ 投资回报快
✓ 技术成熟
✓ 运维简单`},工程设计服务:{title:"工程设计服务",overview:"专业工程师团队提供全套设计方案，包括可行性研究、方案设计、详细设计等。",specs:`设计能力：A1、A2级许可
设计工具：CAD/ANSYS/CFD等
响应周期：快速
设计团队：高级工程师、工程师
质量标准：符合相关国家标准`,application:"适用于各类化工装备、钢结构、能源设备等工程项目。",advantage:`✓ 设计方案专业合理
✓ 质量控制严格
✓ 交期保证
✓ 技术支持长期有效`},技术改造升级:{title:"技术改造升级",overview:"针对现有装备的技术升级、性能改善，提供完整的诊断、设计、施工、验收方案。",specs:`诊断评估：免费咨询
改造方案：定制设计
施工工期：保证按期交付
质量验收：严格把关
售后保障：长期技术支持`,application:"适用于各类在役化工装备、钢结构的升级改造。",advantage:`✓ 诊断准确
✓ 方案合理
✓ 施工专业
✓ 风险低`},设备维护保养:{title:"设备维护保养",overview:"提供全生命周期设备维护保养服务、应急维修，确保设备长期稳定运行。",specs:`服务方式：定期维护、应急维修
响应时间：24小时内
技术支持：在线/上门
维修配件：原厂配件
维护计划：定制方案`,application:"适用于各类化工装备、机械设备的日常维护保养。",advantage:`✓ 响应迅速
✓ 技术专业
✓ 配件齐全
✓ 价格合理`},高端材料供应:{title:"高端材料供应",overview:"供应各类特殊合金、高温材料、防腐材料，质量保证，供应稳定。",specs:`材料类型：不锈钢、合金钢、镍基合金等
质量保证：进口认证
供应周期：快速响应
库存充足：常规材料现货
技术支持：材料选用咨询`,application:"为各类化工装备、特殊工程提供高质量材料。",advantage:`✓ 材料品质优秀
✓ 种类齐全
✓ 供应稳定
✓ 价格有竞争力`},安装调试服务:{title:"安装调试服务",overview:"提供现场安装、调试、验收一站式服务，确保设备安全投产。",specs:`安装团队：专业工程师
调试周期：快速高效
验收标准：严格把关
售后支持：长期保障
培训服务：技术人员培训`,application:"适用于各类化工装备、机械设备的现场安装调试。",advantage:`✓ 安装规范
✓ 调试专业
✓ 验收严格
✓ 售后有保障`},技术培训服务:{title:"技术培训服务",overview:"提供操作员培训、管理人员培训、技工培训等多层次技术培训服务。",specs:`培训形式：现场/在线灵活选择
培训周期：灵活安排
证书颁发：正规认证
讲师资质：资深工程师
课程内容：理论+实操`,application:"为企业培养专业的设备操作、维护、管理人才。",advantage:`✓ 培训专业有效
✓ 形式灵活多样
✓ 证书认可度高
✓ 长期技术支持`}},Q={class:"container"},$={class:"nav"},E={class:"nav-container"},O=["onClick"],V={class:"container"},Y={class:f(["category-section","active"])},j={class:"section-title"},z={style:{"margin-bottom":"30px",color:"#666"}},H={class:"products-grid"},R={class:"product-card"},U={class:"product-image"},q={class:"product-content"},J={class:"product-name"},K={class:"product-desc"},W={class:"product-specs"},X={class:"product-spec-item"},Z=["onClick"],ee={class:"modal-title"},te={class:"modal-section"},se={class:"modal-section"},ne={id:"modalSpecs"},ie={class:"modal-section"},le={id:"modalApplication"},ce={class:"modal-section"},ae={id:"modalAdvantage"},de=S({__name:"index",setup(oe){const p=m("pressure"),a=m(!1),r=D(()=>I.get(p.value)),c=m(),k=d=>{p.value=d},G=d=>{c.value=F[d],a.value=!0},M=()=>{alert(`感谢您的咨询！

联系方式：
电话：0513-80779670
邮箱：info@yahua.com
地址：南通市港闸区

我们的工作人员将尽快与您联系。`)};return(d,t)=>{var g,_,w,h,A,C,b,B;return l(),i(v,null,[t[7]||(t[7]=e("div",{class:"header"},[e("h1",null,"产品中心"),e("p",null,"探索我们的产品范围，满足您的需求")],-1)),e("div",Q,[e("div",$,[e("div",E,[(l(!0),i(v,null,u(P(y),s=>(l(),i("button",{key:s.value,class:f(["nav-btn",{active:s.value===p.value}]),onClick:o=>k(s.value)},n(s.label),11,O))),128))])]),e("div",V,[e("div",Y,[e("h2",j,n((g=r.value)==null?void 0:g.title),1),e("p",z,n((_=r.value)==null?void 0:_.desc),1),e("div",H,[(l(!0),i(v,null,u((w=r.value)==null?void 0:w.items,s=>(l(),i("div",R,[e("div",U,n(s.img),1),e("div",q,[e("div",J,n(s.title),1),e("div",K,n(s.desc),1),e("div",W,[(l(!0),i(v,null,u(s.specs,o=>(l(),i("div",X,[e("strong",null,n(o.title),1),L(" "+n(o.desc),1)]))),256))]),e("button",{class:"btn-details",onClick:o=>G(s.title)}," 查看详情 ",8,Z)])]))),256))])])])]),N(e("div",{class:"modal",onClick:t[2]||(t[2]=s=>a.value=!1)},[e("div",{class:"modal-content",onClick:t[1]||(t[1]=s=>s.stopPropagation())},[e("button",{class:"close-btn",onClick:t[0]||(t[0]=s=>a.value=!1)},"×"),e("h2",ee,n((h=c.value)==null?void 0:h.title),1),e("div",te,[t[3]||(t[3]=e("h3",null,"产品概述",-1)),e("p",null,n((A=c.value)==null?void 0:A.overview),1)]),e("div",se,[t[4]||(t[4]=e("h3",null,"技术参数",-1)),e("p",ne,n((C=c.value)==null?void 0:C.specs),1)]),e("div",ie,[t[5]||(t[5]=e("h3",null,"应用领域",-1)),e("p",le,n((b=c.value)==null?void 0:b.application),1)]),e("div",ce,[t[6]||(t[6]=e("h3",null,"我们的优势",-1)),e("p",ae,n((B=c.value)==null?void 0:B.advantage),1)]),e("div",{class:"modal-section"},[e("button",{class:"btn-details",onClick:M},"立即咨询")])])],512),[[T,a.value]])],64)}}}),re=x(de,[["__scopeId","data-v-527fb6cf"]]);export{re as default};
