interface AuthBrandPanelProps {
  activeDot?: number;
}

export function AuthBrandPanel({ activeDot = 0 }: AuthBrandPanelProps) {
  return (
    <div className="relative flex min-h-[280px] w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-950 via-[#0B1220] to-violet-950 px-8 py-10 text-white md:min-h-screen md:w-1/2 md:px-12 md:py-14 lg:px-16">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="pointer-events-none absolute top-1/3 -left-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-blue-400/15 blur-2xl" />

      <div className="relative z-10">
        <p className="text-xl font-bold leading-tight tracking-tight">
          نظام المراقبة المرورية
        </p>
        <p className="mt-0.5 text-sm text-white/40">TrafficEye</p>
      </div>

      <div className="relative z-10 my-8 flex flex-1 flex-col justify-center md:my-0">
        <h1 className="max-w-md text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          كشف أسرع. تمييز أذكى. أمان أكثر.
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 md:text-base">
          نظام ذكاء اصطناعي للتعرف على لوحات المركبات وبيانات المركبات، مصمم
          لرجال المرور وجهات الأمن.
        </p>

        <div className="relative mt-8 hidden h-72 w-full max-w-lg md:block lg:h-96 lg:max-w-xl">
          <svg
            viewBox="0 0 680 380"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="كاميرا مراقبة ترصد سيارة وتعرض بياناتها الفنية"
          >
            <line x1="0" y1="300" x2="680" y2="300" stroke="#a78bfa" strokeWidth="1" opacity="0.3" />

            <rect x="60" y="60" width="8" height="120" fill="#4438a3" />
            <rect x="50" y="55" width="60" height="30" rx="6" fill="#8b7cf6" />
            <circle cx="105" cy="70" r="8" fill="#1c1440" />
            <circle cx="105" cy="70" r="4" fill="#38bdf8" />

            <path d="M110 65 L280 210 L280 250 L110 90 Z" fill="#8b7cf6" opacity="0.12" />
            <line x1="110" y1="65" x2="280" y2="210" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <line x1="110" y1="90" x2="280" y2="250" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

            <g transform="translate(220,255)">
              <rect x="0" y="-20" width="110" height="38" rx="10" fill="#f5f4ff" />
              <rect x="8" y="-32" width="42" height="22" rx="8" fill="#f5f4ff" />
              <circle cx="16" cy="18" r="11" fill="#1c1440" />
              <circle cx="94" cy="18" r="11" fill="#1c1440" />
              <rect x="30" y="-8" width="50" height="15" rx="3" fill="#241b52" />
              <text x="55" y="3" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#f5f4ff">
                AB 123
              </text>
            </g>

            <g stroke="#a78bfa" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M205 235 L205 218 L222 218" />
              <path d="M335 235 L335 218 L318 218" />
              <path d="M205 273 L205 290 L222 290" />
              <path d="M335 273 L335 290 L318 290" />
            </g>

            <line x1="335" y1="255" x2="400" y2="255" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

            <g transform="translate(410,150)">
              <rect width="230" height="175" rx="12" fill="#3b2f7a" stroke="#6d5fd8" strokeWidth="0.5" />
              <line x1="18" y1="42" x2="212" y2="42" stroke="#6d5fd8" strokeWidth="0.5" opacity="0.5" />

              <text x="80" y="28" textAnchor="start" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#f5f4ff">
                AB 123
              </text>
              <text x="200" y="64" textAnchor="start" fontFamily="sans-serif" fontSize="12" fill="#c9c2f7">
                الموديل: تويوتا كورولا
              </text>
              <text x="200" y="86" textAnchor="start" fontFamily="sans-serif" fontSize="12" fill="#c9c2f7">
                اللون: أبيض
              </text>
              <text x="200" y="108" textAnchor="start" fontFamily="sans-serif" fontSize="12" fill="#c9c2f7">
                النوع: سيدان
              </text>

              <circle cx="202" cy="145" r="5" fill="#4ade80" />
              <text x="190" y="148" textAnchor="start" fontFamily="sans-serif" fontSize="10" fill="#86efac">
                تم التحقق
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === activeDot ? "bg-white" : "bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}