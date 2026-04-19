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
    brand: "Nawah",
    nav_home: "Home",
    nav_technology: "Technology",
    nav_solutions: "Solutions",
    nav_industries: "Industries",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cta: "Partner With Us",
    lang_btn: "AR",
    hero_eyebrow: "Beyond the Surface",
    hero_title: "Ultra-low-power intelligence for real-world autonomous and edge applications.",
    hero_text: "Nawah designs and deploys advanced edge-AI systems that deliver real-time, low-power intelligence — from optimized AI models to custom hardware architectures.",
    hero_btn1: "Explore Technology",
    hero_btn2: "Partner With Us",
    hero_note1_t: "AI Models",
    hero_note1_d: "Built for constrained, real-world deployment.",
    hero_note2_t: "Acceleration",
    hero_note2_d: "Hardware-aware optimization and performance balance.",
    hero_note3_t: "Embedded Systems",
    hero_note3_d: "From PCB to production-ready edge products.",
    hero_panel_t: "At the Core",
    hero_panel_d: "Engineering intelligence across models, hardware, and system integration.",
    band_1: "AI Models",
    band_2: "AI Acceleration",
    band_3: "PCB & Embedded Systems",
    band_4: "Advanced Edge Architectures",
    band_5: "Real-World Deployment",
    intro_eyebrow: "Why Nawah",
    intro_title: "A full-stack edge AI engineering company.",
    intro_text: "Our work spans AI models, acceleration, embedded systems, and advanced edge research — enabling deployable intelligence for real environments.",
    metrics_1_t: "Low Power",
    metrics_1_d: "Efficiency-first engineering decisions",
    metrics_2_t: "Real Time",
    metrics_2_d: "Fast response where latency matters",
    metrics_3_t: "Edge Native",
    metrics_3_d: "Designed for constrained deployment",
    metrics_4_t: "R&D Driven",
    metrics_4_d: "Research-backed technical depth",
    footer_text: "Ultra-efficient intelligence for real-world autonomous and edge applications.",
    footer_copy: "All rights reserved.",
    contact_title: "Send an Inquiry",
    contact_name: "Full name*",
    contact_email: "Email address*",
    contact_company: "Company / Organization",
    contact_subject: "Subject",
    contact_message: "Tell us about your project or inquiry*",
    contact_submit: "Submit Inquiry",
    contact_note: "This form is front-end only. Connect it later to your backend or email API."
  },
  ar: {
    brand: "نواة",
    nav_home: "الرئيسية",
    nav_technology: "التقنية",
    nav_solutions: "الحلول",
    nav_industries: "القطاعات",
    nav_about: "من نحن",
    nav_contact: "تواصل معنا",
    nav_cta: "الشراكة معنا",
    lang_btn: "EN",
    hero_eyebrow: "ما وراء السطح",
    hero_title: "ذكاء منخفض الاستهلاك للطاقة لتطبيقات الحافة والأنظمة الذاتية في العالم الحقيقي.",
    hero_text: "تقوم نواة بتصميم ونشر أنظمة ذكاء اصطناعي طرفية متقدمة توفر ذكاءً لحظيًا منخفض الطاقة، بدءًا من النماذج المحسنة وصولًا إلى البنى العتادية المخصصة.",
    hero_btn1: "استكشف التقنية",
    hero_btn2: "تواصل للشراكة",
    hero_note1_t: "نماذج الذكاء",
    hero_note1_d: "مصممة للتشغيل الحقيقي ضمن بيئات محدودة الموارد.",
    hero_note2_t: "التسريع",
    hero_note2_d: "تحسين واعٍ بالعتاد وتوازن بين الأداء والطاقة.",
    hero_note3_t: "الأنظمة المدمجة",
    hero_note3_d: "من اللوحات الإلكترونية إلى منتجات جاهزة للنشر.",
    hero_panel_t: "في الجوهر",
    hero_panel_d: "هندسة الذكاء عبر النماذج والعتاد وتكامل الأنظمة.",
    band_1: "نماذج الذكاء الاصطناعي",
    band_2: "تسريع الذكاء الاصطناعي",
    band_3: "اللوحات الإلكترونية والأنظمة المدمجة",
    band_4: "معماريات الحافة المتقدمة",
    band_5: "نشر فعلي في الواقع",
    intro_eyebrow: "لماذا نواة",
    intro_title: "شركة هندسية متكاملة للذكاء الاصطناعي الطرفي.",
    intro_text: "يمتد عملنا من نماذج الذكاء والتسريع إلى الأنظمة المدمجة والأبحاث المتقدمة، لتمكين ذكاء قابل للنشر في البيئات الحقيقية.",
    metrics_1_t: "طاقة منخفضة",
    metrics_1_d: "قرارات هندسية تضع الكفاءة أولًا",
    metrics_2_t: "زمن حقيقي",
    metrics_2_d: "استجابة سريعة حيث تكون المدة الحرجة",
    metrics_3_t: "مصمم للحافة",
    metrics_3_d: "مبني لبيئات التشغيل المقيدة",
    metrics_4_t: "بحث وتطوير",
    metrics_4_d: "عمق تقني مدعوم بالأبحاث",
    footer_text: "ذكاء عالي الكفاءة لتطبيقات العالم الحقيقي والأنظمة الذاتية.",
    footer_copy: "جميع الحقوق محفوظة.",
    contact_title: "أرسل استفسارك",
    contact_name: "الاسم الكامل*",
    contact_email: "البريد الإلكتروني*",
    contact_company: "الجهة / الشركة",
    contact_subject: "الموضوع",
    contact_message: "حدثنا عن مشروعك أو استفسارك*",
    contact_submit: "إرسال الطلب",
    contact_note: "هذه الواجهة أمامية فقط. اربطي النموذج لاحقًا مع الـ backend أو خدمة البريد."
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
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = localStorage.getItem("nawah-lang") || "en";
    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const message = form.querySelector("[name='message']").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = lang === "ar"
        ? "فضلاً عبّئي الحقول المطلوبة."
        : "Please fill in the required fields.";
      formMessage.style.color = "#ff9b9b";
      return;
    }

    formMessage.textContent = lang === "ar"
      ? "تم التقاط الطلب داخل الواجهة. اربطي النموذج لاحقًا مع الـ backend."
      : "Your inquiry has been captured in the UI. Connect this form later to your backend.";
    formMessage.style.color = "#7cffc8";
    form.reset();
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

    // glow background
    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      width
    );
    gradient.addColorStop(0, "rgba(124,255,200,0.08)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // update nodes
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    // draw connections
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

    // draw nodes
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