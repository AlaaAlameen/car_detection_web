import type { DashboardData } from "../models/dashboard.types";
import { DashboardRoutes } from "../routes/dashboardRoutes";
import { VehiclesRoutes } from "../../vehicles/routes/vehiclesRoutes";
import { VideoRoutes } from "../../video/routes/videoRoutes";
import { AnalysisRoutes } from "../../analysis/routes/analysisRoutes";
import { BlacklistRoutes } from "../../blacklist/routes/blacklistRoutes";

export const mockDashboardData: DashboardData = {
  user: {
    name: "Alaa Alameen",
    role: "مشرف النظام",
    avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ahmed",
  },
  activeMenuId: "dashboard",
  menuItems: [
    {
      id: "dashboard",
      label: "لوحة التحكم",
      icon: "dashboard",
      path: DashboardRoutes.home,
    },
    {
      id: "vehicles",
      label: "المركبات",
      icon: "vehicles",
      path: VehiclesRoutes.list,
    },
    {
      id: "blacklist",
      label: "القائمة السوداء",
      icon: "blacklist",
      path: BlacklistRoutes.list,
    },
    {
      id: "video",
      label: "تحليل الفيديو",
      icon: "video",
      path: VideoRoutes.upload,
    },
    {
      id: "analysis",
      label: "نتائج التحليل",
      icon: "analysis",
      path: AnalysisRoutes.results,
    },
    {
      id: "processedVideos",
      label: "الفيديوهات المعالجة",
      icon: "processedVideos",
      path: VideoRoutes.list,
    },
    {
      id: "settings",
      label: "الإعدادات",
      icon: "settings",
      path: "#",
    },
  ],
  stats: [
    // {
    //   id: "units",
    //   title: "وحدات الشرطة النشطة",
    //   value: 48,
    //   subtitle: "وحدة ميدانية",
    //   changePercent: 12.5,
    //   icon: "units",
    //   gradient: "from-blue-600/40 to-indigo-700/30",
    // },
    // {
    //   id: "scans",
    //   title: "اللوحات المفحوصة اليوم",
    //   value: 12840,
    //   subtitle: "فحص تلقائي",
    //   changePercent: 8.2,
    //   icon: "scans",
    //   gradient: "from-violet-600/40 to-purple-700/30",
    // },
    // {
    //   id: "alerts",
    //   title: "التنبيهات",
    //   value: 36,
    //   subtitle: "تحتاج مراجعة",
    //   changePercent: -4.1,
    //   icon: "alerts",
    //   gradient: "from-rose-600/40 to-orange-700/30",
    // },
    // {
    //   id: "wanted",
    //   title: "مركبات مطلوبة",
    //   value: 17,
    //   subtitle: "في نطاق المراقبة",
    //   changePercent: 2.8,
    //   icon: "wanted",
    //   gradient: "from-cyan-600/40 to-blue-700/30",
    // },
  ],
  weeklyScans: [
    { label: "السبت", value: 8200 },
    { label: "الأحد", value: 9400 },
    { label: "الإثنين", value: 11200 },
    { label: "الثلاثاء", value: 10500 },
    { label: "الأربعاء", value: 12100 },
    { label: "الخميس", value: 13400 },
    { label: "الجمعة", value: 12840 },
  ],
  colorDistribution: [
    { label: "أبيض", value: 32, color: "#E2E8F0" },
    { label: "أسود", value: 24, color: "#64748B" },
    { label: "فضي", value: 18, color: "#94A3B8" },
    { label: "أزرق", value: 14, color: "#3B82F6" },
    { label: "أحمر", value: 12, color: "#F43F5E" },
  ],
  vehicleTypes: [
    { label: "سيدان", value: 42, color: "#6366F1" },
    { label: "دفع رباعي", value: 28, color: "#8B5CF6" },
    { label: "شاحنة", value: 16, color: "#06B6D4" },
    { label: "دراجة", value: 8, color: "#F59E0B" },
    { label: "أخرى", value: 6, color: "#EC4899" },
  ],
  matchProgress: {
    label: "دقة المطابقة",
    percent: 87,
  },
  alerts: [
  {
    id: "a1",
    plateNumber: "أ ب ج 1234",
    carType: "تويوتا كامري",
    status: "مطلوب",
    imageUrl:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=200&h=140&fit=crop",
    time: "منذ 3 دقائق",
  },
  {
    id: "a2",
    plateNumber: "د هـ و 5678",
    carType: "نيسان التيما",
    status: "مطلوب",
    imageUrl:
      "https://images.unsplash.com/photo-1614602077554-61c72b1e4189?w=200&h=140&fit=crop",
    time: "منذ 12 دقيقة",
  },
  {
    id: "a3",
    plateNumber: "ر س ت 9012",
    carType: "هيونداي سوناتا",
    status: "مطلوب",
    imageUrl:
      "https://images.unsplash.com/photo-1549943436-983dffe333a1?w=200&h=140&fit=crop",
    time: "منذ 28 دقيقة",
  },
  {
    id: "a4",
    plateNumber: "ث خ ذ 3456",
    carType: "كيا أوبتيما",
    status: "مطلوب",
    imageUrl:
      "https://images.unsplash.com/photo-1749058983232-59b967855b18?w=200&h=140&fit=crop",
    time: "منذ ساعة",
  },
],
};