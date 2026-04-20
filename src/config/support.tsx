import { Phone, Headset, Building2 } from "lucide-react";

export const SUPPORT_HEADER = {
  title: "الدعم الفني والجامعات",
  description:
    "نحن هنا لمساعدتك في أي وقت، تواصل مع الممثل المعتمد لجامعتك.",
};

export const SUPPORT_CARDS = [
  {
    type: "support",
    title: "الدعم التقني",
    description: "للمشاكل التقنية واستفسارات النظام",
    phone: "+963 99 411 7607",
    icon: Headset,
    featured: true,
  },
  {
    type: "university",
    title: "جامعة اللاذقيّــة",
    description: "مكتب شؤون الطلاب",
    phone: "017 467 0000",
    icon: Phone,
  },
  {
    type: "university",
    title: "جامعة الشــام الخاصة",
    description: "كلية طب الأسنان",
    phone: "017 233 0000",
    icon: Phone,
  },
  {
    type: "university",
    title: "جامعة المنـــارة",
    description: "الدعم الأكاديمي",
    phone: "017 258 0000",
    icon: Building2,
  },
  {
    type: "university",
    title: "جامعة الأندلس",
    description: "الدعم الأكاديمي",
    phone: "017 258 2312",
    icon: Building2,
  },
];