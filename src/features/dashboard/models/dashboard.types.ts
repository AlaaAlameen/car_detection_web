export interface DashboardStat {
  id: string;
  title: string;
  value: number;
  subtitle: string;
  changePercent: number;
  icon: "units" | "scans" | "alerts" | "wanted";
  gradient: string;
}

export interface ChartPoint {
  label: string;
  value: number;
}

export interface PieSlice {
  label: string;
  value: number;
  color: string;
}

export interface BarItem {
  label: string;
  value: number;
  color: string;
}

export interface AlertItemData {
  id: string;
  plateNumber: string;
  carType: string;
  status: "مطلوب" | "مشبوه" | "مراقبة";
  imageUrl: string;
  time: string;
}

export interface MatchProgress {
  label: string;
  percent: number;
}

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface TopbarUser {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface DashboardData {
  stats: DashboardStat[];
  weeklyScans: ChartPoint[];
  colorDistribution: PieSlice[];
  vehicleTypes: BarItem[];
  matchProgress: MatchProgress;
  alerts: AlertItemData[];
  user: TopbarUser;
  menuItems: SidebarMenuItem[];
  activeMenuId: string;
}

export interface DashboardState {
  isSidebarOpen: boolean;
  activeMenuId: string;
}
