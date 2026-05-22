export type Locale = "ar" | "en";

export const landingMessages = {
  ar: {
    nav: {
      home: "الرئيسية",
      cases: "الحالات",
      universities: "الجامعات",
      about: "حول المنصة",
      login: "تسجيل الدخول",
      register: "ابدأ الآن",
      brandTagline: "Dental Platform",
    },
    hero: {
      title1: "منصتك الذكية لإدارة الحالات",
      title2: "المرضية لطلاب طب الأسنان",
      subtitle:
        "نظم، تابع، واعثر على الحالات التعليمية المطلوبة بسهولة.",
      ctaPrimary: "إنشاء الآن",
      ctaSecondary: "ابحث عن حالات",
      statUnis: "جامعات",
      statStudents: "طالب",
      statCases: "حالة مسجَّلة",
    },
    about: {
      title:
        "بنيت بواسطة الطالب، من أجل الطالب",
      p1:
        "من ضمن التحديات التي يواجهها طلاب طب الأسنان خلال سنوات التدريب؛ من ضياع سجلات المرضى إلى صعوبة تتبّع الحالات المرضية.",
      p2:
        "لذلك صمَّمنا بنيةً رقميةً متكاملة تجمع الدقة الطبية وسهولة الاستخدام التقني.",
      imageAlt: "يد تحمل أدوات طب الأسنان",
    },
    benefits: {
      title: "ماذا يحصل على الطالب؟",
      subtitle: "تجربة احترافية حديثة لإدارة الحالات التعليمية",
      cards: ["البحث المنظم للحالات", "انتشار شامل وتعليم كامل", "الوصول لحالات موثوقة"],
    },
    cases: {
      title: "معاينة الحالات المتاحة",
      subtitle: "استعرض الحالات التعليمية والطبية المتوفرة بسهولة",
      lockTitle: "سجّل الدخول لعرض الحالات",
      lockDesc:
        "هذا القسم يعرض الحالات الحقيقية من المنصة. أنشئ حساباً أو سجّل دخولك للمتابعة.",
      login: "تسجيل الدخول",
      searchPlaceholder: "ابحث في الحالات…",
      loading: "جاري تحميل الحالات…",
      empty: "لا توجد حالات مطابقة.",
      error: "تعذّر تحميل الحالات. تأكد من اتصالك وحاول مجدداً.",
      fallbackNotice:
        "تعذّر تحميل التصنيفات من الخادم — يُعرض محتوى افتراضي مؤقتًا.",
      items: [
        "علاج عصب",
        "قلع",
        "زراعة",
        "تقويم",
        "حشوة",
        "تجميل",
        "تنظيف",
        "أشعة",
      ],
    },
    journey: {
      title: "رحلتك مع المنصّة",
      subtitle: "خطوات بسيطة من التسجيل حتى متابعة تقدّمك",
      steps: [
        { title: "سجّل الآن", desc: "أنشئ حسابك وابدأ رحلتك التعليمية" },
        { title: "أرسل حالتك", desc: "أضف الحالة الطبية المطلوبة" },
        { title: "ابدأ البحث", desc: "ابحث عن الحالات المناسبة" },
        { title: "تقدَّم", desc: "تابع تطورك خطوة بخطوة" },
      ],
    },
    search: {
      title: "ابحث في قاعدة بيانات الحالات",
      subtitle: "استكشف الحالات التعليمية المتاحة بسهولة",
      placeholder: "ابحث بواسطة اسم الحالة أو التصنيف…",
      lockTitle: "هذا القسم متاح للمشتركين فقط",
      lockDesc:
        "أنشئ حسابك وأكمل الاشتراك للوصول إلى قاعدة بيانات الحالات التعليمية.",
      subscribe: "اشترِك الآن",
      login: "تسجيل الدخول",
      resultsTitle: "الحالات المتاحة لك",
      loading: "جاري تحميل الحالات…",
      empty: "لا توجد حالات مطابقة لبحثك.",
      error: "تعذّر تحميل الحالات. حاول مرة أخرى لاحقًا.",
    },
    submit: {
      title: "إرسال الحالة",
      subtitle: "قم بإدخال تفاصيل الحالة وإرفاق معلومات المريض",
      patientName: "اسم المريض",
      age: "العمر",
      caseType: "نوع الحالة",
      toothNumber: "رقم السن",
      notes: "ملاحظات إضافية",
      submit: "إرسال الحالة",
    },
    universities: {
      title: "فرق الدعم",
      subtitle: "تواصل مباشر مع فرق الدعم والجامعات التعليمية",
      support: "الدعم التقني",
      medicalSupport: "الدعم الإداري",
      branches: [
        {
          name: "جامعة اللاذقية",
          phone: "0911111111",
          email: "Lattakia@denova.com",
        },
        {
          name: "جامعة المنارة",
          phone: "0933333333",
          email: "Al-manara@denova.com",
        },
        {
          name: " جامعة الشام الخاصة",
          phone: "0922222222",
          email: "al-shamprivate@denova.com",
        },
        {
          name: "Atrius",
          phone: "0922222222",
          email: "atrius@denova.com",
        },
      ]
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    nav: {
      home: "Home",
      cases: "Cases",
      universities: "Universities",
      about: "About",
      login: "Log in",
      register: "Get started",
      brandTagline: "Dental Platform",
    },
    hero: {
      title1: "Your smart platform for clinical cases",
      title2: "Built for dentistry students",
      subtitle:
        "Organize, follow up, and find the educational cases you need—with ease.",
      ctaPrimary: "Create account",
      ctaSecondary: "Browse cases",
      statUnis: "Universities",
      statStudents: "Students",
      statCases: "Cases",
    },
    about: {
      title:
        "Built by students, for students",
      p1:
        "Dentistry students face real challenges during training—from lost patient records to difficulty tracking clinical cases.",
      p2:
        "So we designed a seamless digital layer that pairs medical rigor with a simple, modern experience.",
      imageAlt: "Hand holding dental tools",
    },
    benefits: {
      title: "What students get",
      subtitle: "A professional, modern way to manage educational cases",
      cards: [
        "Structured case search",
        "Broader reach & complete learning",
        "Access to trusted cases",
      ],
    },
    cases: {
      title: "Preview available cases",
      subtitle: "Browse educational and clinical cases at a glance",
      lockTitle: "Log in to view cases",
      lockDesc:
        "This section shows live cases from the platform. Sign in to continue.",
      login: "Log in",
      searchPlaceholder: "Search cases…",
      loading: "Loading cases…",
      empty: "No matching cases.",
      error: "Could not load cases. Check your connection and try again.",
      fallbackNotice:
        "Could not load categories from the server — showing temporary defaults.",
      items: [
        "Endodontics",
        "Extraction",
        "Implant",
        "Orthodontics",
        "Restoration",
        "Esthetic",
        "Cleaning",
        "Radiology",
      ],
    },
    journey: {
      title: "Your journey on the platform",
      subtitle: "Simple steps from signup to progress tracking",
      steps: [
        { title: "Sign up", desc: "Create your account and start learning" },
        { title: "Submit a case", desc: "Add the clinical case you need" },
        { title: "Start searching", desc: "Find the right cases for you" },
        { title: "Move forward", desc: "Track your progress step by step" },
      ],
    },
    search: {
      title: "Search the case database",
      subtitle: "Explore available educational cases easily",
      placeholder: "Search by case name or category…",
      lockTitle: "Subscribers only",
      lockDesc:
        "Create an account and complete your subscription to access the case database.",
      subscribe: "Subscribe",
      login: "Log in",
      resultsTitle: "Cases available to you",
      loading: "Loading cases…",
      empty: "No cases match your search.",
      error: "Could not load cases. Please try again later.",
    },
    submit: {
      title: "Submit a case",
      subtitle: "Enter case details and attach patient information",
      patientName: "Patient name",
      age: "Age",
      caseType: "Case type",
      toothNumber: "Tooth number",
      notes: "Additional notes",
      submit: "Submit case",
    },
    universities: {
      title: "Support teams",
      subtitle: "Reach support staff and partner universities directly",
      support: "Technical support",
      medicalSupport: "Medical support",
      branches: [
        {
          name: "Latakia University",
          phone: "0911111111",
          email: "Lattakia@denova.com",
        },
        {
          name: "Al-Manra University",
          phone: "0933333333",
          email: "Al-manara@denova.com",
        },
        {
          name: "Al-Sham Private University",
          phone: "0922222222",
          email: "al-shamprivate@denova.com",
        },
        {
          name: "Atrius",
          phone: "0922222222",
          email: "atrius@denova.com",
        },
      ]
    },
    footer: {
      rights: "All rights reserved",
    },
  },
} as const;

export type LandingCopy = (typeof landingMessages)[Locale];
