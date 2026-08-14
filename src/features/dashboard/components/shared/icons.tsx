interface IconProps {
  className?: string;
}

export function DashboardIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  );
}

export function VehiclesIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M3 13h18l-1.5-5.5A2 2 0 0 0 17.6 6H6.4a2 2 0 0 0-1.9 1.5L3 13Z" />
      <path d="M5 13v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4" />
      <circle cx="7.5" cy="16.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="16.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BlacklistIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M7 7l10 10" />
    </svg>
  );
}

export function UnitsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M12 3 4 7v4c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-4Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function AlertsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M12 3a6 6 0 0 1 6 6v3.5l1.5 2.5H4.5L6 12.5V9a6 6 0 0 1 6-6Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function ReportsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5M8 13h8M8 17h5" />
    </svg>
  );
}

export function VideoIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="6" width="14" height="12" rx="2" />
      <path d="M17 10l4-2v8l-4-2" />
    </svg>
  );
}

export function SettingsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>
  );
}

export function ScansIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 12h10M3 10h18" />
    </svg>
  );
}

export function WantedIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-3.5 4.2-5 8-5s6.5 1.5 8 5" />
      <path d="M16 4l4 2-1.5 4" />
    </svg>
  );
}

export function BellIcon({ className = "h-5 w-5" }: IconProps) {
  return <AlertsIcon className={className} />;
}

export function FullscreenIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5" />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/**
 * نتائج التحليل — رسم بياني + عدسة تفحص، للتمييز عن "التقارير" (مستند)
 * وعن "تحليل الفيديو" (كاميرا).
 */
export function AnalysisIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M3.5 20V13.5M8.5 20V9M13.5 20V15.5" />
      <circle cx="17.5" cy="8" r="4" />
      <path d="M20.5 11l2 2" />
    </svg>
  );
}

/**
 * الفيديوهات المعالجة — إطار فيديو + شارة صح، للتمييز عن "تحليل الفيديو"
 * (كاميرا) ويدل أن المعالجة اكتملت.
 */
export function ProcessedVideosIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="2.5" y="5" width="13" height="11" rx="2" />
      <path d="M7.5 8.2v4.6l4-2.3-4-2.3Z" fill="currentColor" stroke="none" />
      <circle cx="18" cy="16.5" r="4.2" />
      <path d="M16.3 16.5l1.2 1.2 2.2-2.4" />
    </svg>
  );
}

/**
 * تسجيل الخروج — باب + سهم خارج، أيقونة الخروج التقليدية.
 */
export function LogoutIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

/**
 * شعار النظام — درع أمني وبداخله سيارة، يرمز لدور الشرطة/الأمن
 * بمراقبة المركبات. اختير من بين عدة تصاميم مقترحة.
 */
export function LogoIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#logoGrad)" />
      <path
        d="M20 7.5c6.2 2 8.2 3 8.2 3v8.2c0 7.3-3.6 11.4-8.2 13.4-4.6-2-8.2-6.1-8.2-13.4v-8.2s2-1 8.2-3Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 21.5h13l-1.4-4.2a1.4 1.4 0 0 0-1.3-.9h-8.6a1.4 1.4 0 0 0-1.3.9l-1.4 4.2Z"
        fill="#ffffff"
      />
      <rect x="13.2" y="21.5" width="13.6" height="2.6" rx="0.6" fill="#ffffff" />
      <circle cx="16" cy="24.2" r="1.5" fill="#0B1220" />
      <circle cx="24" cy="24.2" r="1.5" fill="#0B1220" />
    </svg>
  );
}

const iconMap = {
  dashboard: DashboardIcon,
  vehicles: VehiclesIcon,
  blacklist: BlacklistIcon,
  units: UnitsIcon,
  alerts: AlertsIcon,
  reports: ReportsIcon,
  video: VideoIcon,
  settings: SettingsIcon,
  scans: ScansIcon,
  wanted: WantedIcon,
  analysis: AnalysisIcon,
  processedVideos: ProcessedVideosIcon,
  logout: LogoutIcon,
} as const;

export type MenuIconKey = keyof typeof iconMap;

export function MenuGlyph({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name as MenuIconKey] ?? DashboardIcon;
  return <Icon className={className} />;
}