const html = document.documentElement;
const body = document.body;
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const langToggle = document.querySelector(".lang-toggle");
const reveals = document.querySelectorAll(".reveal");
const yearEls = document.querySelectorAll(".year");
const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

const translations = {
  en: {
    // Common / Brand
    brand: "Nawah",
    lang_btn: "AR",
    footer_text: "Ultra-efficient intelligence for real-world autonomous and edge applications.",
    footer_copy: "All rights reserved.",

    // Navigation
    nav_home: "Home",
    nav_technology: "Technology",
    nav_solutions: "Solutions",
    nav_industries: "Industries",
    nav_partners: "Partners",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cta: "Partner With Us",
    nav_get_in_touch: "Get in Touch",

    // Home — Hero
    hero_eyebrow: "Beyond the Surface",
    hero_title: "Ultra-low-power intelligence for real-world autonomous and edge applications.",
    hero_text: "Nawah designs and deploys advanced edge-AI systems that deliver real-time, low-power intelligence — from optimized AI models to custom hardware architectures.",
    hero_btn1: "Explore Technology",
    hero_btn2: "Partner With Us",
    hero_panel_t: "At the Core",
    hero_panel_d: "Engineering intelligence across models, hardware, and system integration.",

    // Home — Intro
    intro_eyebrow: "Why Nawah",
    intro_title: "A full-stack edge AI engineering company.",
    intro_text: "Our work spans AI models, acceleration, embedded systems, and advanced edge research — enabling deployable intelligence for real environments.",

    // Home — Metrics
    metrics_1_t: "Low Power",
    metrics_1_d: "Efficiency-first engineering decisions",
    metrics_2_t: "Real Time",
    metrics_2_d: "Fast response where latency matters",
    metrics_3_t: "Edge Native",
    metrics_3_d: "Designed for constrained deployment",
    metrics_4_t: "R&D Driven",
    metrics_4_d: "Research-backed technical depth",

    // Home — Pillars
    pillars_eyebrow: "Technology Pillars",
    pillars_title: "The Engineering Foundation Behind Nawah",
    pillars_text: "Our technology stack spans the full pipeline — from AI models to hardware architecture and system-level integration — enabling intelligent, efficient, and production-ready edge systems.",
    pillar_1_t: "AI Models",
    pillar_1_d: "From computer vision and anomaly detection to NLP, LLM-powered chatbots, time-series forecasting, generative and multimodal AI — we build scalable models engineered for real-world deployment.",
    pillar_2_t: "AI Acceleration",
    pillar_2_d: "Hardware-aware optimization and specialized compute platforms designed to balance performance, power, and latency.",
    pillar_3_t: "PCB & Embedded Systems",
    pillar_3_d: "Precision hardware engineering that transforms AI capability into reliable, deployable products.",
    pillar_4_t: "Advanced Edge Architectures",
    pillar_4_d: "Research-driven innovation in next-generation, energy-efficient computing paradigms for autonomous and constrained environments.",

    // Home — Quote
    quote_text: "Technology is only valuable when it is deployable.",
    quote_by: "Nawah engineering philosophy",

    // Home — Edge AI
    edge_eyebrow: "Why Edge AI",
    edge_title: "Why Edge AI Matters",
    edge_text: "Edge AI enables intelligent systems to operate directly where data is generated — supporting faster response, efficient resource utilization, and reliable system performance.",
    edge_1_t: "Real-Time Decision Making",
    edge_1_d: "Immediate processing enables faster responses in time-critical environments such as automation, monitoring, and autonomous systems.",
    edge_2_t: "Energy Efficiency",
    edge_2_d: "Low-power AI systems reduce operational costs and enable intelligent functionality in battery-powered and embedded devices.",
    edge_3_t: "Data Privacy & Security",
    edge_3_d: "Processing data directly on-device minimizes data transfer and helps protect sensitive information.",
    edge_4_t: "Reliable Operation",
    edge_4_d: "Edge systems continue operating even with limited or unstable connectivity, ensuring consistent performance in real-world environments.",

    // Home — Process
    process_eyebrow: "How We Work",
    process_title: "From concept to deployable system",
    step_1_t: "Define the use case",
    step_1_d: "We translate the business or research objective into a deployable edge-AI scope.",
    step_2_t: "Design the intelligence stack",
    step_2_d: "Model selection, hardware alignment, data flow, and acceleration strategy are defined together.",
    step_3_t: "Build and integrate",
    step_3_d: "We implement the system across software, firmware, and hardware integration layers.",
    step_4_t: "Validate for the real world",
    step_4_d: "Performance is measured against real constraints: latency, power, reliability, and deployment conditions.",

    // Home — Industries
    industries_eyebrow: "Industries",
    industries_title: "Where Our Technology Applies",
    ind_1_t: "Robotics & Automation",
    ind_1_d: "Real-time control, perception, and hardware integration for autonomous and industrial systems.",
    ind_2_t: "Industrial IoT",
    ind_2_d: "Sensor intelligence, predictive maintenance, and optimized manufacturing workflows.",
    ind_3_t: "Smart Cities",
    ind_3_d: "Scalable, energy-efficient infrastructure systems for monitoring and automation.",
    ind_4_t: "Consumer & Edge Devices",
    ind_4_d: "On-device intelligence for privacy-focused and performance-critical consumer technologies.",
    explore_industries: "Explore Industries",
    explore_technology: "Explore Technology",
    explore_solutions: "Explore Solutions",

    // Home — Solutions
    solutions_eyebrow: "Solutions",
    solutions_title: "Engineering Services",
    solutions_text: "Nawah provides capabilities across AI development, hardware design, and advanced computing systems — supporting clients from early system design through real-world deployment.",
    sol_1_t: "AI & Model Deployment",
    sol_1_d: "Edge-optimized AI systems and deployment workflows.",
    sol_2_t: "Data & Analytics",
    sol_2_d: "Data pipelines, labeling, governance, and real-time analytics.",
    sol_3_t: "Hardware & PCB Engineering",
    sol_3_d: "Hardware realization for intelligent deployable products.",
    sol_4_t: "Digital & Chip Design",
    sol_4_d: "RTL, FPGA prototyping, architecture, and integration.",
    sol_5_t: "Advanced Edge R&D",
    sol_5_d: "Research into ultra-efficient and neuromorphic-inspired computing systems.",

    // Home — Partners
    partners_eyebrow: "Partners",
    partners_title: "Partners & Collaborators",
    partners_text: "We work with research institutions, technology providers, and industry partners to advance next-generation edge intelligence.",

    // Home — CTA
    cta_eyebrow: "From Here Forward",
    cta_title: "Build the Future of Edge Intelligence",
    cta_text: "Partner with Nawah to develop ultra-efficient, real-time AI systems engineered for real-world performance.",
    cta_btn1: "Get in Touch",
    cta_btn2: "Explore Technology",

    // About page
    about_hero_eyebrow: "About Nawah",
    about_hero_title: "Engineering the future of edge intelligence",
    about_hero_text: "Nawah is a Saudi company focused on ultra-efficient edge-AI systems for real-world autonomous and embedded applications.",
    about_defines_label: "What defines Nawah",
    about_define_1: "Real-world deployability",
    about_define_2: "Low-power intelligence",
    about_define_3: "Hardware-aware engineering",
    about_define_4: "Research-driven execution",
    about_who_eyebrow: "Who We Are",
    about_who_title: "A Saudi edge-AI and neuromorphic systems company",
    about_who_p1: "Nawah is a Saudi neuromorphic and edge-AI systems company focused on delivering ultra-efficient intelligence for real-world autonomous and embedded applications.",
    about_who_p2: "While our long-term mission is to develop Saudi-designed neuromorphic integrated circuits, today we enable customers to deploy production-ready edge-AI systems through different platforms, custom hardware, and system-level engineering.",
    about_card_a_t: "Deployable AI",
    about_card_a_d: "Edge-ready systems for real-world use",
    about_card_b_t: "Neuromorphic Vision",
    about_card_b_d: "Brain-inspired efficiency at the system level",
    about_vision_eyebrow: "Vision",
    about_vision_title: "Building Saudi leadership in advanced edge systems",
    about_vision_text: "To position Saudi Arabia as a global leader in brain-inspired computing and advanced edge intelligence.",
    about_mission_eyebrow: "Mission",
    about_mission_title: "Designing ultra-efficient computing for the next generation",
    about_mission_text: "To design ultra-efficient computing systems that deliver real-time, low-power intelligence for next-generation edge applications.",
    about_why_eyebrow: "Why Nawah",
    about_why_title: "From research depth to deployable systems",
    about_feat_1_t: "AI + Hardware",
    about_feat_1_d: "We bridge intelligent models with embedded and hardware-aware implementation.",
    about_feat_2_t: "Edge-first approach",
    about_feat_2_d: "We design for latency, power, reliability, and real deployment constraints.",
    about_feat_3_t: "Research-backed",
    about_feat_3_d: "Our direction is informed by long-term work in advanced computing paradigms.",
    about_feat_4_t: "Production mindset",
    about_feat_4_d: "We focus on systems that can move from concept into usable products.",
    about_cta_title: "Let’s build the next generation of edge intelligence",
    about_cta_text: "Partner with Nawah to explore efficient, real-world AI systems designed for deployment — not just demonstration.",

    // Industries page
    ind_hero_title: "Where Our Technology Applies",
    ind_3_full_t: "Smart Cities & Infrastructure",
    ind_3_full_d: "Traffic monitoring, environmental sensing, and intelligent infrastructure management.",
    ind_1_full_d: "Real-time perception and control for industrial robots, autonomous systems, and precision motion applications.",
    ind_2_full_d: "Predictive maintenance, sensor intelligence, and optimized manufacturing systems.",
    ind_4_full_d: "Low-latency, privacy-preserving intelligence for smart home systems, wearables, and embedded consumer devices.",

    // Solutions page
    sol_hero_title: "Engineering Services",
    sol_hero_text: "Nawah provides advanced capabilities across AI systems, hardware design, and next-generation computing platforms — supporting clients from early research and prototyping to real-world system deployment.",
    sol_1_li_1: "Edge-optimized computer vision systems",
    sol_1_li_2: "Anomaly detection for industrial applications",
    sol_1_li_3: "Predictive maintenance and time-series forecasting",
    sol_1_li_4: "Model compression and hardware-aware optimization",
    sol_1_li_5: "End-to-end deployment on embedded platforms",
    sol_2_li_1: "Sensor integration and data pipelines",
    sol_2_li_2: "Data cleaning, labeling, and governance",
    sol_2_li_3: "Dataset preparation for AI and SNN systems",
    sol_2_li_4: "Real-time dashboards and analytics",
    sol_2_li_5: "Data strategy and quality management",
    sol_3_li_1: "High-speed multilayer PCB design",
    sol_3_li_2: "Power & thermal optimization",
    sol_3_li_3: "Schematic design and component selection",
    sol_3_li_4: "Manufacturing coordination",
    sol_3_li_5: "Validation & testing",
    sol_4_li_1: "RTL design and verification",
    sol_4_li_2: "FPGA prototyping",
    sol_4_li_3: "Architecture & PPA analysis",
    sol_4_li_4: "IP integration (CPUs, accelerators, memory controllers)",
    sol_4_li_5: "Roadmap toward custom IC development",
    sol_5_full_t: "Advanced Edge Research",
    sol_5_li_1: "Neuromorphic computing Research",
    sol_5_li_2: "Spiking neural architectures",
    sol_5_li_3: "Event-driven perception",
    sol_5_li_4: "Hardware–algorithm co-design",

    // Technology page
    tech_hero_title: "Engineering Intelligence for Real-World Edge Systems",
    tech_hero_p1: "Nawah develops edge-AI systems designed for real-world deployment — where latency, power, reliability, and hardware constraints define performance.",
    tech_hero_p2: "Our technology stack spans from AI model design to hardware acceleration and system-level integration, ensuring that intelligence is not only accurate, but deployable.",
    tech_stack_1: "AI Model Design",
    tech_stack_2: "Hardware Acceleration",
    tech_stack_3: "System-Level Integration",
    tech_stack_4: "Deployable Edge Intelligence",
    tech_stack_label: "Technology Stack",
    tech_stack_desc: "From model design to acceleration to deployable edge systems.",
    tech_anchor_1: "Challenge",
    tech_anchor_2: "Models",
    tech_anchor_3: "Acceleration",
    tech_anchor_4: "Integration",
    tech_anchor_5: "Research",
    tech_anchor_6: "Contact",
    tech_challenge_eyebrow: "CHALLENGE",
    tech_challenge_title: "The Edge Engineering Challenge",
    tech_challenge_lead: "Deploying AI in real environments introduces constraints that do not exist in cloud infrastructure. Edge systems must operate within:",
    tech_con_1: "Limited power budgets",
    tech_con_2: "Restricted memory capacity",
    tech_con_3: "Thermal boundaries",
    tech_con_4: "Connectivity limitations",
    tech_con_5: "Real-time requirements",
    tech_challenge_panel_1: "These constraints require tight coordination between algorithms, hardware architecture, and embedded system design.",
    tech_challenge_panel_2: "At Nawah, Edge AI is engineered — not simply deployed.",
    tech_models_eyebrow: "MODELS",
    tech_models_title: "Model Architectures for Edge Systems",
    tech_models_lead: "AI models are the computational foundation of intelligent systems. However, different architectures behave differently under edge constraints.",
    tech_ann_title: "Traditional Neural Networks (ANNs)",
    tech_ann_p1: "Artificial Neural Networks — including CNNs and transformer-based models — rely on dense numerical computation and are widely used in vision, language, and signal processing.",
    tech_ann_p2: "They provide strong accuracy, but can be resource-intensive depending on architecture size and deployment target.",
    tech_snn_title: "Event-Driven Architectures (SNNs)",
    tech_snn_p1: "Spiking Neural Networks operate through time-based discrete events rather than continuous numerical propagation.",
    tech_snn_p2: "This approach aligns naturally with temporal data and event-driven sensing environments.",
    tech_snn_adv_label: "Potential advantages include:",
    tech_snn_adv_1: "Sparse activation patterns",
    tech_snn_adv_2: "Time-domain processing",
    tech_snn_adv_3: "Energy-aware computation",
    tech_snn_select_label: "Architecture selection depends on:",
    tech_snn_select_1: "Data modality",
    tech_snn_select_2: "Application requirements",
    tech_snn_select_3: "Deployment constraints",
    tech_snn_select_4: "Hardware alignment",
    tech_models_statement: "There is no universal model — only appropriate engineering decisions.",
    tech_accel_eyebrow: "ACCELERATION",
    tech_accel_title: "Hardware-Aware Acceleration",
    tech_accel_lead_1: "Efficient AI deployment requires specialized compute optimization.",
    tech_accel_lead_2: "Many AI workloads involve repetitive numerical operations. Running them on general-purpose processors can lead to excessive power consumption or latency bottlenecks.",
    tech_accel_platforms_t: "Acceleration platforms may include:",
    tech_accel_p_1: "GPUs (Graphics Processing Units)",
    tech_accel_p_2: "NPUs (Neural Processing Units)",
    tech_accel_p_3: "FPGAs (Field-Programmable Gate Arrays)",
    tech_accel_p_4: "ASICs (Application-Specific Integrated Circuits)",
    tech_accel_opt_t: "Optimization techniques include:",
    tech_accel_o_1: "Quantization",
    tech_accel_o_2: "Pruning",
    tech_accel_o_3: "Computational graph optimization",
    tech_accel_o_4: "Memory-access tuning",
    tech_accel_statement: "The goal is not raw performance — but a balanced system optimized for accuracy, latency, and power efficiency.",
    tech_int_eyebrow: "INTEGRATION",
    tech_int_title: "System-Level Integration",
    tech_int_lead_1: "AI systems must be physically realized through hardware engineering.",
    tech_int_lead_2: "PCB and embedded system design transform computational capability into functional products.",
    tech_int_1_t: "AI Systems",
    tech_int_1_d: "Computational intelligence starts with model behavior and performance requirements.",
    tech_int_2_t: "Hardware Engineering",
    tech_int_2_d: "Architecture choices must align with power, timing, and physical implementation limits.",
    tech_int_3_t: "PCB & Embedded System Design",
    tech_int_3_d: "System realization translates compute capability into stable and manufacturable hardware.",
    tech_int_4_t: "Functional Products",
    tech_int_4_d: "Final deployment requires integrated performance, reliability, and real-world operation.",
    tech_int_eng_t: "Key engineering considerations include:",
    tech_int_eng_1: "Power delivery and regulation",
    tech_int_eng_2: "Signal integrity",
    tech_int_eng_3: "Thermal management",
    tech_int_eng_4: "Electromagnetic compatibility",
    tech_int_eng_5: "Sensor and memory interfacing",
    tech_int_ens_t: "Embedded engineering ensures:",
    tech_int_ens_1: "Resource-aware firmware",
    tech_int_ens_2: "Real-time performance tuning",
    tech_int_ens_3: "Stable system operation",
    tech_int_statement: "True edge intelligence requires full-stack integration.",
    tech_res_eyebrow: "RESEARCH",
    tech_res_title: "Advancing Edge Architectures",
    tech_res_lead_1: "Nawah invests in research exploring next-generation computing approaches designed for constrained environments.",
    tech_res_lead_2: "Research areas include:",
    tech_res_1: "Event-driven computation",
    tech_res_2: "Sparse processing models",
    tech_res_3: "Memory–compute proximity",
    tech_res_4: "Energy-efficient hardware-algorithm co-design",
    tech_res_statement: "These efforts support our long-term direction toward ultra-efficient, autonomous computing systems designed for real-world deployment.",

    // Contact page
    contact_hero_title: "Get in Touch",
    contact_hero_text: "We welcome collaboration with industry partners, research institutions, and technology innovators.",
    contact_options_title: "Contact Options",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    contact_office_label: "Office Location",
    contact_office_value: "Saudi Arabia",
    contact_usecases_label: "Use Cases",
    contact_usecases_value: "Project inquiry · Request a meeting · Collaboration",
    contact_title: "Send an Inquiry",
    contact_name: "Full name*",
    contact_email: "Email address*",
    contact_company: "Company / Organization",
    contact_subject: "Subject",
    contact_message: "Tell us about your project or inquiry*",
    contact_submit: "Submit Inquiry",
  },

  ar: {
    // Common / Brand
    brand: "نواة",
    lang_btn: "EN",
    footer_text: "ذكاء عالي الكفاءة للتطبيقات الطرفية والأنظمة ذاتية التشغيل في البيئات الواقعية.",
    footer_copy: "جميع الحقوق محفوظة.",

    // Navigation
    nav_home: "الرئيسية",
    nav_technology: "التقنية",
    nav_solutions: "الحلول",
    nav_industries: "القطاعات",
    nav_partners: "الشركاء",
    nav_about: "من نحن",
    nav_contact: "تواصل معنا",
    nav_cta: "تواصل معنا",
    nav_get_in_touch: "تواصل معنا",

    // Home — Hero
    hero_eyebrow: "ما وراء السطح",
    hero_title: "ذكاء اصطناعي بطاقة منخفضة للتطبيقات الطرفية والأنظمة ذاتية التشغيل في البيئات الواقعية.",
    hero_text: "تُصمّم نواة وتُطوّر أنظمة ذكاء اصطناعي طرفية متقدمة، تُقدّم أداءً لحظياً باستهلاك طاقة منخفض — من نماذج الذكاء المُحسَّنة إلى بنى عتاد مُخصَّصة.",
    hero_btn1: "استكشف التقنية",
    hero_btn2: "تواصل معنا",
    hero_panel_t: "في الجوهر",
    hero_panel_d: "هندسة الذكاء عبر النماذج والعتاد وتكامل الأنظمة.",

    // Home — Intro
    intro_eyebrow: "لماذا نواة",
    intro_title: "شركة هندسية متكاملة في الذكاء الاصطناعي الطرفي.",
    intro_text: "يمتد عملنا من تصميم نماذج الذكاء الاصطناعي وتسريعها، إلى الأنظمة المدمجة والأبحاث المتقدمة — لتقديم ذكاء قابل للنشر الفعلي في البيئات الواقعية.",

    // Home — Metrics
    metrics_1_t: "كفاءة في الطاقة",
    metrics_1_d: "قرارات هندسية تضع الكفاءة أولاً",
    metrics_2_t: "أداء لحظي",
    metrics_2_d: "استجابة فورية في التطبيقات الحسّاسة لزمن التأخير",
    metrics_3_t: "مصمَّم للأنظمة الطرفية",
    metrics_3_d: "مبنيّ لبيئات التشغيل محدودة الموارد",
    metrics_4_t: "بحث وتطوير",
    metrics_4_d: "عمق تقني تدعمه الأبحاث",

    // Home — Pillars
    pillars_eyebrow: "ركائز التقنية",
    pillars_title: "الأساس الهندسي الذي تقوم عليه نواة",
    pillars_text: "تغطّي حزمتنا التقنية المسار الكامل — من نماذج الذكاء الاصطناعي، إلى بنية العتاد، إلى تكامل الأنظمة — لتقديم أنظمة طرفية ذكية، كفؤة، وجاهزة للإنتاج.",
    pillar_1_t: "نماذج الذكاء الاصطناعي",
    pillar_1_d: "من الرؤية الحاسوبية واكتشاف الأعطال، إلى معالجة اللغة والنماذج اللغوية الكبيرة، والتنبؤ بالسلاسل الزمنية، والذكاء التوليدي ومتعدد الوسائط — نبني نماذج قابلة للتوسّع ومصمَّمة للنشر الفعلي.",
    pillar_2_t: "تسريع الذكاء الاصطناعي",
    pillar_2_d: "تحسينات متكاملة مع العتاد ومنصّات حوسبة متخصصة، لتحقيق التوازن بين الأداء، والاستهلاك، وزمن الاستجابة.",
    pillar_3_t: "اللوحات الإلكترونية والأنظمة المدمجة",
    pillar_3_d: "هندسة عتاد دقيقة تُحوّل قدرات الذكاء الاصطناعي إلى منتجات موثوقة قابلة للنشر.",
    pillar_4_t: "معماريات طرفية متقدمة",
    pillar_4_d: "ابتكار بحثي في نماذج حوسبة الجيل القادم، بكفاءة عالية في الطاقة، لبيئات التشغيل الذاتي ومحدودة الموارد.",

    // Home — Quote
    quote_text: "لا قيمة للتقنية ما لم تكن قابلة للنشر.",
    quote_by: "فلسفة نواة الهندسية",

    // Home — Edge AI
    edge_eyebrow: "لماذا الذكاء الطرفي",
    edge_title: "أهمية الذكاء الاصطناعي الطرفي",
    edge_text: "يُمكّن الذكاء الطرفي الأنظمة الذكية من العمل مباشرة عند مصدر البيانات — فيُحقّق استجابة أسرع، واستخداماً أكفأ للموارد، وأداءً ثابتاً وموثوقاً.",
    edge_1_t: "قرارات لحظية",
    edge_1_d: "المعالجة الفورية تُتيح استجابة أسرع في البيئات الحسّاسة زمنياً: الأتمتة، والمراقبة، والأنظمة ذاتية التشغيل.",
    edge_2_t: "كفاءة الطاقة",
    edge_2_d: "أنظمة الذكاء منخفضة الاستهلاك تُقلّل التكاليف التشغيلية وتُتيح الوظائف الذكية في الأجهزة المدمجة والمعتمدة على البطاريات.",
    edge_3_t: "خصوصية البيانات وأمنها",
    edge_3_d: "معالجة البيانات على الجهاز مباشرة تُقلّل حركة النقل وتحمي المعلومات الحسّاسة.",
    edge_4_t: "تشغيل موثوق",
    edge_4_d: "تواصل الأنظمة الطرفية عملها حتى مع انقطاع الاتصال أو تذبذبه، ما يضمن أداءً ثابتاً في البيئات الواقعية.",

    // Home — Process
    process_eyebrow: "كيف نعمل",
    process_title: "من الفكرة إلى نظام جاهز للنشر",
    step_1_t: "تحديد حالة الاستخدام",
    step_1_d: "نُحوّل الهدف التجاري أو البحثي إلى نطاق ذكاء طرفي قابل للتنفيذ.",
    step_2_t: "تصميم حزمة الذكاء",
    step_2_d: "نُحدّد النموذج المناسب، وتوافق العتاد، وتدفّق البيانات، واستراتيجية التسريع في قرار واحد متكامل.",
    step_3_t: "التنفيذ والتكامل",
    step_3_d: "نبني النظام عبر طبقات البرمجيات، والبرامج الثابتة، وتكامل العتاد.",
    step_4_t: "الاختبار في البيئة الفعلية",
    step_4_d: "يُقاس الأداء بمعايير حقيقية: زمن الاستجابة، والطاقة، والموثوقية، وظروف التشغيل الفعلية.",

    // Home — Industries
    industries_eyebrow: "القطاعات",
    industries_title: "أين تُوظَّف تقنياتنا",
    ind_1_t: "الروبوتات والأتمتة",
    ind_1_d: "إدراك وتحكم لحظي، وتكامل عتادي، للأنظمة ذاتية التشغيل والبيئات الصناعية.",
    ind_2_t: "إنترنت الأشياء الصناعي",
    ind_2_d: "ذكاء المستشعرات، والصيانة التنبؤية، وتدفّقات تصنيع مُحسَّنة.",
    ind_3_t: "المدن الذكية",
    ind_3_d: "بنى تحتية قابلة للتوسّع وكفؤة في الطاقة، للمراقبة والأتمتة.",
    ind_4_t: "الأجهزة الاستهلاكية والطرفية",
    ind_4_d: "ذكاء محلي على الجهاز، للتقنيات التي تتطلّب خصوصية وأداءً عالياً.",
    explore_industries: "استكشف القطاعات",
    explore_technology: "استكشف التقنية",
    explore_solutions: "استكشف الحلول",

    // Home — Solutions
    solutions_eyebrow: "الحلول",
    solutions_title: "الخدمات الهندسية",
    solutions_text: "تُقدّم نواة قدرات متكاملة في تطوير الذكاء الاصطناعي، وتصميم العتاد، وأنظمة الحوسبة المتقدمة — من مرحلة التصميم المبكّر إلى النشر الفعلي.",
    sol_1_t: "الذكاء الاصطناعي ونشر النماذج",
    sol_1_d: "أنظمة ذكاء اصطناعي مُحسَّنة للبيئات الطرفية، وتدفّقات نشر جاهزة.",
    sol_2_t: "البيانات والتحليلات",
    sol_2_d: "أنابيب بيانات، ووسم، وحوكمة، وتحليلات لحظية.",
    sol_3_t: "هندسة العتاد واللوحات الإلكترونية",
    sol_3_d: "هندسة عتاد لمنتجات ذكية قابلة للنشر.",
    sol_4_t: "التصميم الرقمي وتصميم الشرائح",
    sol_4_d: "تصميم RTL، ونماذج FPGA، ومعماريات، وتكامل مكونات.",
    sol_5_t: "بحث وتطوير متقدم للأنظمة الطرفية",
    sol_5_d: "أبحاث في أنظمة حوسبة فائقة الكفاءة ومستلهَمة من الدماغ.",

    // Home — Partners
    partners_eyebrow: "الشركاء",
    partners_title: "الشركاء",
    partners_text: "نعمل مع مؤسسات بحثية، ومزوّدي تقنية، وشركاء صناعيين، لتطوير الذكاء الطرفي للجيل القادم.",

    // Home — CTA
    cta_eyebrow: "انطلاقاً من هنا",
    cta_title: "ابنِ مستقبل الذكاء الطرفي",
    cta_text: "تعاوَن مع نواة لتطوير أنظمة ذكاء اصطناعي لحظية عالية الكفاءة، مصمَّمة لأداء فعلي في البيئات الواقعية.",
    cta_btn1: "تواصل معنا",
    cta_btn2: "استكشف التقنية",

    // About page
    about_hero_eyebrow: "عن نواة",
    about_hero_title: "هندسة مستقبل الذكاء الطرفي",
    about_hero_text: "نواة شركة سعودية متخصصة في أنظمة الذكاء الاصطناعي الطرفية فائقة الكفاءة، للتطبيقات ذاتية التشغيل والأنظمة المدمجة في البيئات الواقعية.",
    about_defines_label: "ما الذي يُميّز نواة",
    about_define_1: "قابلية النشر في البيئات الواقعية",
    about_define_2: "ذكاء منخفض الاستهلاك",
    about_define_3: "هندسة متكاملة مع العتاد",
    about_define_4: "تنفيذ يقوم على البحث",
    about_who_eyebrow: "من نحن",
    about_who_title: "شركة سعودية في الذكاء الطرفي وأنظمة الحوسبة المستلهَمة من الدماغ",
    about_who_p1: "نواة شركة سعودية متخصصة في أنظمة الذكاء الاصطناعي الطرفية والأنظمة المستلهَمة من الدماغ، مع التركيز على توفير ذكاء فائق الكفاءة للتطبيقات ذاتية التشغيل والمدمجة في البيئات الواقعية.",
    about_who_p2: "رؤيتنا بعيدة المدى هي تطوير دوائر متكاملة سعودية التصميم مستلهَمة من الدماغ. وفي المرحلة الحالية، نُمكّن عملاءنا من نشر أنظمة ذكاء طرفية جاهزة للإنتاج، عبر منصات متعددة، وعتاد مخصَّص، وهندسة متكاملة على مستوى النظام.",
    about_card_a_t: "ذكاء جاهز للنشر",
    about_card_a_d: "أنظمة طرفية جاهزة للاستخدام الفعلي",
    about_card_b_t: "رؤية مستلهَمة من الدماغ",
    about_card_b_d: "كفاءة على مستوى النظام مستلهَمة من الدماغ",
    about_vision_eyebrow: "الرؤية",
    about_vision_title: "بناء ريادة سعودية في الأنظمة الطرفية المتقدمة",
    about_vision_text: "أن تتصدّر المملكة العربية السعودية عالمياً في الحوسبة المستلهَمة من الدماغ والذكاء الطرفي المتقدم.",
    about_mission_eyebrow: "الرسالة",
    about_mission_title: "تصميم حوسبة فائقة الكفاءة للجيل القادم",
    about_mission_text: "تصميم أنظمة حوسبة فائقة الكفاءة، تُقدّم ذكاءً لحظياً منخفض الاستهلاك، لتطبيقات الجيل القادم من الأنظمة الطرفية.",
    about_why_eyebrow: "لماذا نواة",
    about_why_title: "من عمق البحث إلى أنظمة قابلة للنشر",
    about_feat_1_t: "ذكاء اصطناعي + عتاد",
    about_feat_1_d: "نربط النماذج الذكية بتنفيذ عتادي مدمج ومتكامل.",
    about_feat_2_t: "نهج يبدأ من الطرف",
    about_feat_2_d: "نُصمّم بوعي كامل بزمن الاستجابة، والطاقة، والموثوقية، وقيود التشغيل الفعلي.",
    about_feat_3_t: "يستند إلى البحث",
    about_feat_3_d: "يتشكّل اتجاهنا من عمل طويل الأمد في نماذج الحوسبة المتقدمة.",
    about_feat_4_t: "عقلية إنتاج",
    about_feat_4_d: "نركّز على أنظمة تنتقل من الفكرة إلى منتجات جاهزة للاستخدام.",
    about_cta_title: "لِنَبْنِ الجيل القادم من الذكاء الطرفي",
    about_cta_text: "تعاوَن مع نواة لاستكشاف أنظمة ذكاء اصطناعي كفؤة، مصمَّمة للنشر الفعلي — لا للعرض فقط.",

    // Industries page
    ind_hero_title: "أين تُطبق تقنياتنا",
    ind_3_full_t: "المدن الذكية والبنية التحتية",
    ind_3_full_d: "مراقبة حركة المرور، واستشعار البيئة، وإدارة ذكية للبنية التحتية.",
    ind_1_full_d: "إدراك وتحكم لحظي، للروبوتات الصناعية، والأنظمة ذاتية التشغيل، وتطبيقات الحركة الدقيقة.",
    ind_2_full_d: "صيانة تنبؤية، وذكاء مستشعرات، وأنظمة تصنيع مُحسَّنة.",
    ind_4_full_d: "ذكاء منخفض زمن الاستجابة يحافظ على الخصوصية، لأنظمة المنازل الذكية، والأجهزة القابلة للارتداء، والأجهزة الاستهلاكية المدمجة.",

    // Solutions page
    sol_hero_title: "الخدمات الهندسية",
    sol_hero_text: "تُقدّم نواة قدرات متقدمة في أنظمة الذكاء الاصطناعي، وتصميم العتاد، ومنصّات الحوسبة للجيل القادم — من البحث المبكّر والنماذج الأولية إلى النشر الفعلي.",
    sol_1_li_1: "أنظمة رؤية حاسوبية مُحسَّنة للبيئات الطرفية",
    sol_1_li_2: "اكتشاف الأعطال في التطبيقات الصناعية",
    sol_1_li_3: "الصيانة التنبؤية والتنبؤ بالسلاسل الزمنية",
    sol_1_li_4: "ضغط النماذج وتحسينها بوعي عتادي",
    sol_1_li_5: "نشر شامل على المنصّات المدمجة",
    sol_2_li_1: "تكامل المستشعرات وأنابيب البيانات",
    sol_2_li_2: "تنظيف البيانات ووسمها وحوكمتها",
    sol_2_li_3: "إعداد البيانات لأنظمة الذكاء الاصطناعي والشبكات النابضة",
    sol_2_li_4: "لوحات معلومات وتحليلات لحظية",
    sol_2_li_5: "استراتيجية بيانات وإدارة جودة",
    sol_3_li_1: "تصميم لوحات متعددة الطبقات عالية السرعة",
    sol_3_li_2: "تحسين الطاقة والإدارة الحرارية",
    sol_3_li_3: "تصميم المخططات واختيار المكونات",
    sol_3_li_4: "تنسيق التصنيع",
    sol_3_li_5: "التحقق والاختبار",
    sol_4_li_1: "تصميم RTL والتحقق منه",
    sol_4_li_2: "النماذج الأولية على FPGA",
    sol_4_li_3: "تحليل المعمارية والأداء والطاقة والمساحة",
    sol_4_li_4: "تكامل IP (معالجات، مسرّعات، متحكمات ذاكرة)",
    sol_4_li_5: "خارطة طريق نحو دوائر متكاملة مخصَّصة",
    sol_5_full_t: "بحث وتطوير متقدم للأنظمة الطرفية",
    sol_5_li_1: "أبحاث الحوسبة المستلهَمة من الدماغ",
    sol_5_li_2: "معماريات الشبكات العصبية النابضة",
    sol_5_li_3: "الإدراك القائم على الأحداث",
    sol_5_li_4: "التصميم المشترك بين العتاد والخوارزمية",

    // Technology page
    tech_hero_title: "هندسة الذكاء لأنظمة طرفية في البيئات الواقعية",
    tech_hero_p1: "تُطوّر نواة أنظمة ذكاء اصطناعي طرفية، مصمَّمة للنشر في البيئات الواقعية — حيث يُحدّد الأداءَ زمنُ الاستجابة، والطاقة، والموثوقية، وقيود العتاد.",
    tech_hero_p2: "تمتد حزمتنا التقنية من تصميم نماذج الذكاء الاصطناعي، إلى تسريع العتاد، إلى التكامل على مستوى النظام، لضمان أن يكون الذكاء دقيقاً وقابلاً للنشر في آنٍ واحد.",
    tech_stack_1: "تصميم نماذج الذكاء الاصطناعي",
    tech_stack_2: "تسريع العتاد",
    tech_stack_3: "التكامل على مستوى النظام",
    tech_stack_4: "ذكاء طرفي قابل للنشر",
    tech_stack_label: "الحزمة التقنية",
    tech_stack_desc: "من تصميم النموذج إلى التسريع، إلى أنظمة طرفية جاهزة للنشر.",
    tech_anchor_1: "التحدي",
    tech_anchor_2: "النماذج",
    tech_anchor_3: "التسريع",
    tech_anchor_4: "التكامل",
    tech_anchor_5: "البحث",
    tech_anchor_6: "تواصل",
    tech_challenge_eyebrow: "التحدي",
    tech_challenge_title: "تحدي هندسة الأنظمة الطرفية",
    tech_challenge_lead: "يُدخل نشر الذكاء الاصطناعي في البيئات الواقعية قيوداً لا توجد في البنية السحابية. يجب أن تعمل الأنظمة الطرفية ضمن:",
    tech_con_1: "ميزانيات طاقة محدودة",
    tech_con_2: "سعة ذاكرة مقيَّدة",
    tech_con_3: "حدود حرارية",
    tech_con_4: "قيود على الاتصال",
    tech_con_5: "متطلبات لحظية",
    tech_challenge_panel_1: "تتطلّب هذه القيود تنسيقاً دقيقاً بين الخوارزميات، وبنية العتاد، وتصميم الأنظمة المدمجة.",
    tech_challenge_panel_2: "في نواة، الذكاء الطرفي يُهندَس — لا يُنشَر فقط.",
    tech_models_eyebrow: "النماذج",
    tech_models_title: "معماريات النماذج للأنظمة الطرفية",
    tech_models_lead: "نماذج الذكاء الاصطناعي هي الأساس الحسابي للأنظمة الذكية. لكن المعماريات المختلفة تتصرّف بشكل مختلف تحت قيود الأنظمة الطرفية.",
    tech_ann_title: "الشبكات العصبية التقليدية (ANNs)",
    tech_ann_p1: "تعتمد الشبكات العصبية الاصطناعية — بما فيها CNNs والنماذج القائمة على المحوّلات (Transformers) — على حسابات رقمية كثيفة، وتُستخدم على نطاق واسع في الرؤية الحاسوبية، واللغة، ومعالجة الإشارات.",
    tech_ann_p2: "تُقدّم دقة عالية، لكنها قد تكون مُستهلِكة للموارد وفقاً لحجم المعمارية وهدف النشر.",
    tech_snn_title: "المعماريات القائمة على الأحداث (SNNs)",
    tech_snn_p1: "تعمل الشبكات العصبية النابضة عبر أحداث زمنية منفصلة، بدلاً من الانتشار العددي المستمر.",
    tech_snn_p2: "يتماشى هذا النهج مع البيانات الزمنية وبيئات الاستشعار القائمة على الأحداث.",
    tech_snn_adv_label: "من مزاياها المحتملة:",
    tech_snn_adv_1: "أنماط تفعيل متفرّقة",
    tech_snn_adv_2: "معالجة في النطاق الزمني",
    tech_snn_adv_3: "حوسبة واعية بالطاقة",
    tech_snn_select_label: "يعتمد اختيار المعمارية على:",
    tech_snn_select_1: "نوع البيانات",
    tech_snn_select_2: "متطلبات التطبيق",
    tech_snn_select_3: "قيود النشر",
    tech_snn_select_4: "توافق العتاد",
    tech_models_statement: "لا يوجد نموذج شامل — بل قرارات هندسية ملائمة لكل حالة.",
    tech_accel_eyebrow: "التسريع",
    tech_accel_title: "تسريع متكامل مع العتاد",
    tech_accel_lead_1: "يتطلّب النشر الكفؤ للذكاء الاصطناعي تحسيناً حوسبياً متخصصاً.",
    tech_accel_lead_2: "تتضمّن كثير من أحمال الذكاء الاصطناعي عمليات رقمية متكرّرة، وتشغيلها على معالجات عامة الغرض قد يؤدي إلى استهلاك طاقة مُفرط، أو اختناقات في زمن الاستجابة.",
    tech_accel_platforms_t: "من منصّات التسريع:",
    tech_accel_p_1: "وحدات المعالجة الرسومية (GPUs)",
    tech_accel_p_2: "وحدات المعالجة العصبية (NPUs)",
    tech_accel_p_3: "المصفوفات القابلة للبرمجة (FPGAs)",
    tech_accel_p_4: "الدوائر المتكاملة المتخصصة (ASICs)",
    tech_accel_opt_t: "من تقنيات التحسين:",
    tech_accel_o_1: "التكميم (Quantization)",
    tech_accel_o_2: "التشذيب (Pruning)",
    tech_accel_o_3: "تحسين الرسم البياني الحسابي",
    tech_accel_o_4: "ضبط الوصول للذاكرة",
    tech_accel_statement: "الهدف ليس الأداء الخام، بل نظام متوازن مُحسَّن للدقة، وزمن الاستجابة، وكفاءة الطاقة.",
    tech_int_eyebrow: "التكامل",
    tech_int_title: "التكامل على مستوى النظام",
    tech_int_lead_1: "يجب تجسيد أنظمة الذكاء الاصطناعي مادياً عبر هندسة العتاد.",
    tech_int_lead_2: "يُحوّل تصميم اللوحات الإلكترونية والأنظمة المدمجة القدرات الحسابية إلى منتجات وظيفية.",
    tech_int_1_t: "أنظمة الذكاء الاصطناعي",
    tech_int_1_d: "يبدأ الذكاء الحسابي من سلوك النموذج ومتطلبات الأداء.",
    tech_int_2_t: "هندسة العتاد",
    tech_int_2_d: "يجب أن تتوافق خيارات المعمارية مع الطاقة، والتوقيت، وحدود التنفيذ المادي.",
    tech_int_3_t: "تصميم اللوحات والأنظمة المدمجة",
    tech_int_3_d: "يُترجم تحقيق النظام القدرات الحسابية إلى عتاد مستقر وقابل للتصنيع.",
    tech_int_4_t: "منتجات وظيفية",
    tech_int_4_d: "يتطلّب النشر النهائي أداءً متكاملاً، وموثوقية، وتشغيلاً في البيئات الواقعية.",
    tech_int_eng_t: "من الاعتبارات الهندسية الرئيسية:",
    tech_int_eng_1: "تسليم الطاقة وتنظيمها",
    tech_int_eng_2: "سلامة الإشارة",
    tech_int_eng_3: "الإدارة الحرارية",
    tech_int_eng_4: "التوافق الكهرومغناطيسي",
    tech_int_eng_5: "التوصيل بالمستشعرات والذاكرة",
    tech_int_ens_t: "الهندسة المدمجة تضمن:",
    tech_int_ens_1: "برامج ثابتة واعية بالموارد",
    tech_int_ens_2: "ضبط أداء لحظي",
    tech_int_ens_3: "تشغيل نظام مستقر",
    tech_int_statement: "الذكاء الطرفي الحقيقي يتطلّب تكاملاً عبر الحزمة بأكملها.",
    tech_res_eyebrow: "البحث",
    tech_res_title: "تطوير معماريات الأنظمة الطرفية",
    tech_res_lead_1: "تستثمر نواة في أبحاث تستكشف نهج الحوسبة للجيل القادم، المصمَّمة للبيئات ذات الموارد المحدودة.",
    tech_res_lead_2: "من مجالات البحث:",
    tech_res_1: "الحوسبة القائمة على الأحداث",
    tech_res_2: "نماذج المعالجة المتفرّقة",
    tech_res_3: "قرب الذاكرة من وحدة الحوسبة",
    tech_res_4: "تصميم عتاد-خوارزمية متكامل وكفؤ في الطاقة",
    tech_res_statement: "تدعم هذه الجهود اتجاهنا طويل الأمد نحو أنظمة حوسبة ذاتية فائقة الكفاءة، مصمَّمة للنشر في البيئات الواقعية.",

    // Contact page
    contact_hero_title: "تواصل معنا",
    contact_hero_text: "نرحّب بالتعاون مع الشركاء الصناعيين، والمؤسسات البحثية، ومبتكري التقنية.",
    contact_options_title: "خيارات التواصل",
    contact_email_label: "البريد الإلكتروني",
    contact_phone_label: "الهاتف",
    contact_office_label: "موقع المكتب",
    contact_office_value: "المملكة العربية السعودية",
    contact_usecases_label: "حالات الاستخدام",
    contact_usecases_value: "استفسار مشروع · طلب اجتماع · تعاون",
    contact_title: "أرسل استفسارك",
    contact_name: "الاسم الكامل*",
    contact_email: "البريد الإلكتروني*",
    contact_company: "الجهة / الشركة",
    contact_subject: "الموضوع",
    contact_message: "حدّثنا عن مشروعك أو استفسارك*",
    contact_submit: "إرسال الاستفسار",
  }
};

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  html.lang = lang;
  body.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("nawah-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  if (langToggle) langToggle.textContent = dict.lang_btn;
}

const savedLang = localStorage.getItem("nawah-lang") || "en";
applyTranslations(savedLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = localStorage.getItem("nawah-lang") || "en";
    const next = current === "en" ? "ar" : "en";
    applyTranslations(next);
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Close the mobile menu when any nav link is tapped
  nav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

reveals.forEach((item) => observer.observe(item));

yearEls.forEach((y) => {
  y.textContent = new Date().getFullYear();
});

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const lang = localStorage.getItem("nawah-lang") || "en";
    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const message = form.querySelector("[name='message']").value.trim();
    const submitBtn = form.querySelector("button[type='submit']");

    // Basic validation
    if (!name || !email || !message) {
      if (formMessage) {
        formMessage.textContent = lang === "ar"
          ? "الرجاء تعبئة الحقول المطلوبة."
          : "Please fill in the required fields.";
        formMessage.style.color = "#ff9b9b";
      }
      return;
    }

    // Disable button and show sending state
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    submitBtn.style.cursor = "wait";
    submitBtn.textContent = lang === "ar" ? "جاري الإرسال..." : "Sending...";

    if (formMessage) {
      formMessage.textContent = "";
    }

    try {
      const formData = new FormData(form);
      // Use FormSubmit's AJAX endpoint (returns JSON instead of redirecting)
      const ajaxEndpoint = form.action.replace(
        "https://formsubmit.co/",
        "https://formsubmit.co/ajax/"
      );
      const response = await fetch(ajaxEndpoint, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        if (formMessage) {
          formMessage.textContent = lang === "ar"
            ? "تم إرسال استفسارك بنجاح. سنتواصل معك قريباً."
            : "Your inquiry has been sent successfully. We will be in touch soon.";
          formMessage.style.color = "#7cffc8";
        }
        form.reset();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      if (formMessage) {
        formMessage.textContent = lang === "ar"
          ? "حدث خطأ أثناء الإرسال. حاول مرة أخرى أو راسلنا على info@nawah.sa"
          : "Something went wrong. Please try again or email us at info@nawah.sa";
        formMessage.style.color = "#ff9b9b";
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "";
      submitBtn.style.cursor = "";
      submitBtn.textContent = originalBtnText;
    }
  });
}


const canvas = document.getElementById("neuroCanvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  let width, height;
  let nodes = [];

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;
  }

  window.addEventListener("resize", resize);
  resize();

  const NODE_COUNT = 70;

  function createNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      });
    }
  }

  createNodes();

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, width
    );
    gradient.addColorStop(0, "rgba(124,255,200,0.08)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(124,255,200,${1 - dist / 120})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#7cffc8";
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#7cffc8";
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(draw);
  }

  draw();
}
