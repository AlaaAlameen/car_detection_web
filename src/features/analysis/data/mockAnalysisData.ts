import type {
  AnalysisAlert,
  AnalysisStat,
  AnalysisVideoSummary,
} from "../models/analysis.types";

export const ANALYSIS_PAGE_SIZE = 8;

export const alertTypeOptions = [
  "الكل",
  "مطلوب",
  "سرعة زائدة",
  "لوحة مزورة",
  "سلوك مشبوه",
  "قائمة سوداء",
] as const;

export const severityOptions = [
  "الكل",
  "عالية",
  "متوسطة",
  "منخفضة",
] as const;

export const mockAnalysisVideo: AnalysisVideoSummary = {
  id: "av1",
  fileName: "traffic_video_2026_08_10.mp4",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=320&h=180&fit=crop",
  processedAt: "2026-08-10 14:35",
  duration: "03:15",
  formattedSize: "178 MB",
  status: "completed",
};

export const mockAnalysisStats: AnalysisStat[] = [
  {
    id: "total",
    title: "إجمالي السيارات المكتشفة",
    value: 248,
    percent: 100,
    subtitle: "خلال مدة الفيديو",
    icon: "vehicles",
    gradient: "from-blue-600/40 to-indigo-700/30",
    isPositive: true,
  },
  {
    id: "alerts",
    title: "سيارات لديها تنبيهات",
    value: 36,
    percent: 14.5,
    subtitle: "من إجمالي المكتشف",
    icon: "alerts",
    gradient: "from-violet-600/40 to-purple-700/30",
    isPositive: false,
  },
  {
    id: "high",
    title: "سيارات عالية الخطورة",
    value: 12,
    percent: 4.8,
    subtitle: "تتطلب تدخل فوري",
    icon: "wanted",
    gradient: "from-rose-600/40 to-orange-700/30",
    isPositive: false,
  },
  {
    id: "medium",
    title: "سيارات متوسطة الخطورة",
    value: 15,
    percent: 6.0,
    subtitle: "تحتاج متابعة",
    icon: "scans",
    gradient: "from-amber-600/40 to-yellow-700/30",
    isPositive: false,
  },
  {
    id: "low",
    title: "سيارات منخفضة الخطورة",
    value: 9,
    percent: 3.6,
    subtitle: "مراقبة روتينية",
    icon: "units",
    gradient: "from-emerald-600/40 to-teal-700/30",
    isPositive: true,
  },
];

export const mockAnalysisAlerts: AnalysisAlert[] = [
  {
    id: "a1",
    plateNumber: "أ ب ج 1234",
    alertType: "مطلوب",
    severity: "عالية",
    message: "مطابقة مع قائمة المطلوبين — يرجى الإبلاغ فوراً",
    timestamp: "00:12",
  },
  {
    id: "a2",
    plateNumber: "د هـ و 5678",
    alertType: "سرعة زائدة",
    severity: "متوسطة",
    message: "تجاوز السرعة المحددة بمقدار 35 كم/س",
    timestamp: "00:28",
  },
  {
    id: "a3",
    plateNumber: "ر س ت 9012",
    alertType: "قائمة سوداء",
    severity: "عالية",
    message: "المركبة مدرجة في القائمة السوداء للنظام",
    timestamp: "00:41",
  },
  {
    id: "a4",
    plateNumber: "ث خ ذ 3456",
    alertType: "لوحة مزورة",
    severity: "عالية",
    message: "احتمال تزوير اللوحة — عدم تطابق السمات البصرية",
    timestamp: "01:05",
  },
  {
    id: "a5",
    plateNumber: "ض ظ غ 7890",
    alertType: "سلوك مشبوه",
    severity: "منخفضة",
    message: "توقف متكرر غير اعتيادي في المنطقة المراقبة",
    timestamp: "01:22",
  },
  {
    id: "a6",
    plateNumber: "ف ق ك 2468",
    alertType: "سرعة زائدة",
    severity: "منخفضة",
    message: "تجاوز طفيف للسرعة بمقدار 12 كم/س",
    timestamp: "01:48",
  },
  {
    id: "a7",
    plateNumber: "ل م ن 1357",
    alertType: "مطلوب",
    severity: "عالية",
    message: "تطابق جزئي مع بلاغ سرقة مركبة",
    timestamp: "02:10",
  },
  {
    id: "a8",
    plateNumber: "هـ و ي 8642",
    alertType: "سلوك مشبوه",
    severity: "متوسطة",
    message: "تغيير مسار مفاجئ عدة مرات خلال فترة قصيرة",
    timestamp: "02:33",
  },
  {
    id: "a9",
    plateNumber: "أ ص د 4321",
    alertType: "قائمة سوداء",
    severity: "متوسطة",
    message: "مرتبطة ببلاغ سابق قيد المراجعة",
    timestamp: "02:51",
  },
  {
    id: "a10",
    plateNumber: "ج ح خ 7788",
    alertType: "سرعة زائدة",
    severity: "عالية",
    message: "تجاوز السرعة بمقدار 55 كم/س في منطقة سكنية",
    timestamp: "03:02",
  },
];
