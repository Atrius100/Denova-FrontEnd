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
      reception: "الاستقبال",
      student: "الطالب",
      admin: "الأدمن",
    },
    hero: {
      title1: "منصتك الذكية لإدارة الحالات",
      title2: "المرضية لطلاب طب الأسنان",
      subtitle:
        "نظم، تابع، واعثر على الحالات التعليمية المطلوبة بسهولة.",
      ctaPrimary: "إنشاء الآن",
      ctaSecondary: "اشترك",
      statUnis: "جامعات",
      statStudents: "طالب",
      statCases: "حالة مسجَّلة",
    },
   about: {
  title:
    "نحو تجربة تعليمية وسريرية أكثر كفاءة",

  p1:
    "صُممت DENOVA لتقريب المسافة بين الطلاب والمرضى عبر تجربة رقمية منظمة تدعم التعلم العملي وتسهّل متابعة الحالات السنية.",

  p2:
    "وقد تم بناء المنصة بواسطة شركة Atrius كحل رقمي يهدف إلى دعم التعليم السريري وتقديم تجربة أكثر مرونة وكفاءة في إدارة الحالات السنية.",

  imageAlt: "يد تحمل أدوات طب الأسنان",
},
    benefits: {
      title: "ماذا يحصل على الطالب؟",
      subtitle: "تجربة احترافية حديثة لإدارة الحالات التعليمية",
cards: [
  "الوصول إلى الحالات السريرية",
  "حجز الحالة السريرية المناسبة",
  "ملف شخصي وسجل سريري"
]    },
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
  {
    title: "أنشئ حسابك",
    desc: "ابدأ رحلتك التعليمية من خلال إنشاء حسابك الشخصي."
  },

  {
    title: "فعّل اشتراكك",
    desc: "اشترك للوصول إلى الحالات السريرية المتاحة."
  },

  {
    title: "استعرض واحجز الحالة المناسبة",
    desc: "ابحث بين الحالات المتوفرة واحجز الحالة التي تناسب متطلباتك."
  },

  {
    title: "ابدأ رحلتك السريرية",
    desc: "بعد موافقة الإدارة يتم ربطك بالمريض ومتابعة الحالة من ملفك الشخصي."
  }
]
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
  title: "قدّم حالتك الآن",
  subtitle: "املأ البيانات وسيتم التواصل معك",

  patientName: "اسم المريض",
  age: "العمر",
  phone: "رقم الهاتف",
  nationalId: "الرقم الوطني",

  selectUniversity: "اختر الجامعة",

  notes: "ملاحظات إضافية",

  submit: "إرسال الطلب",

  universities: {
    tishreen: "جامعة تشرين",
    manara: "جامعة المنارة",
    sham: "جامعة الشام الخاصة",
  },
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
homeCta: {
  title: "ابدأ رحلتك الآن",
  description:
    "انضم إلى مجتمع DENOVA وفعّل اشتراكك للوصول الكامل إلى قاعدة الحالات التعليمية.",
  button: "اشترك الآن",
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
      reception: "Reception",
      student: "Student",
      admin: "Admin",
    },
    hero: {
      title1: "Your smart platform for clinical cases",
      title2: "Built for dentistry students",
      subtitle:
        "Organize, follow up, and find the educational cases you need—with ease.",
      ctaPrimary: "Create account",
      ctaSecondary: "Subscribe",
      statUnis: "Universities",
      statStudents: "Students",
      statCases: "Cases",
    },
   about: {
  title:
    "Towards a More Efficient Educational and Clinical Experience",

  p1:
    "DENOVA was designed to bridge the gap between students and patients through an organized digital experience that supports practical learning and simplifies the management of dental cases.",

  p2:
    "The platform was developed by Atrius as a digital solution aimed at supporting clinical education and providing a more flexible and efficient experience for managing dental cases.",

  imageAlt:
    "Hand holding dental instruments",
},
    benefits: {
      title: "What students get",
      subtitle: "A professional, modern way to manage educational cases",
      cards: [
  "Access Clinical Cases",
  "Reserve Suitable Cases",
  "Personal Profile & Clinical Record"
]
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
  {
    title: "Create Your Account",
    desc: "Start your educational journey by creating your personal account."
  },

  {
    title: "Activate Your Subscription",
    desc: "Subscribe to gain access to available clinical cases."
  },

  {
    title: "Browse and Reserve a Case",
    desc: "Explore available cases and reserve the one that matches your requirements."
  },

  {
    title: "Start Your Clinical Journey",
    desc: "Once approved by the administration, you will be connected with the patient and manage the case through your personal profile."
  }
]
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
  title: "Submit Your Case",
  subtitle: "Fill in your information and we will contact you",

  patientName: "Patient Name",
  age: "Age",
  phone: "Phone Number",
  nationalId: "National ID",

  selectUniversity: "Select University",

  notes: "Additional Notes",

  submit: "Submit Request",

  universities: {
    tishreen: "Tishreen University",
    manara: "Al Manara University",
    sham: "Al Sham Private University",
  },
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
homeCta: {
  title: "Start Your Journey Today",
  description:
    "Join the DENOVA community and activate your subscription for full access to the educational cases database.",
  button: "Subscribe Now",
},
    footer: {
      rights: "All rights reserved",
    },

  },
} as const;

export type LandingCopy = (typeof landingMessages)[Locale];
