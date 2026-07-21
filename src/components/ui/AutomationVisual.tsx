interface AutomationVisualProps {
  category: "whatsapp" | "instagram" | "crm" | "workflow" | "leads"
}

export default function AutomationVisual({ category }: AutomationVisualProps) {
  if (category === "whatsapp") {
    return (
      <svg viewBox="0 0 400 225" className="w-full h-full">
        <defs>
          <linearGradient id="wa-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#064E3B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#wa-bg)" rx="12" />
        {/* Header */}
        <rect x="16" y="12" width="368" height="32" rx="8" fill="rgba(255,255,255,0.06)" />
        <rect x="28" y="20" width="24" height="16" rx="4" fill="rgba(255,255,255,0.1)" />
        <rect x="60" y="22" width="80" height="12" rx="4" fill="rgba(255,255,255,0.15)" />
        {/* Chat bubble 1 - received */}
        <rect x="20" y="58" width="140" height="28" rx="8" fill="rgba(255,255,255,0.1)" />
        <rect x="28" y="65" width="40" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="76" y="65" width="56" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
        {/* Chat bubble 2 - sent */}
        <rect x="220" y="96" width="160" height="28" rx="8" fill="rgba(16,185,129,0.25)" />
        <rect x="230" y="103" width="60" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="298" y="103" width="40" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        {/* Chat bubble 3 - received */}
        <rect x="20" y="134" width="120" height="36" rx="8" fill="rgba(255,255,255,0.1)" />
        <rect x="28" y="142" width="50" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="86" y="142" width="30" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
        <rect x="28" y="154" width="70" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        {/* Chat bubble 4 - sent */}
        <rect x="200" y="180" width="180" height="28" rx="8" fill="rgba(16,185,129,0.25)" />
        <rect x="210" y="187" width="80" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="298" y="187" width="50" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        {/* Input bar */}
        <rect x="16" y="198" width="368" height="20" rx="6" fill="rgba(255,255,255,0.05)" />
        <circle cx="34" cy="208" r="5" fill="rgba(255,255,255,0.08)" />
        <rect x="48" y="205" width="200" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
      </svg>
    )
  }

  if (category === "instagram") {
    return (
      <svg viewBox="0 0 400 225" className="w-full h-full">
        <defs>
          <linearGradient id="ig-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#831843" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6D28D9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#DB2777" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#ig-bg)" rx="12" />
        {/* Phone frame */}
        <rect x="120" y="16" width="160" height="193" rx="16" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Story circles */}
        <circle cx="150" cy="38" r="12" fill="rgba(255,255,255,0.12)" stroke="rgba(219,39,119,0.4)" strokeWidth="1.5" />
        <circle cx="180" cy="38" r="12" fill="rgba(255,255,255,0.1)" stroke="rgba(219,39,119,0.3)" strokeWidth="1.5" />
        <circle cx="210" cy="38" r="12" fill="rgba(255,255,255,0.1)" stroke="rgba(219,39,119,0.3)" strokeWidth="1.5" />
        <circle cx="240" cy="38" r="12" fill="rgba(255,255,255,0.08)" stroke="rgba(219,39,119,0.2)" strokeWidth="1.5" />
        {/* Feed post */}
        <rect x="136" y="62" width="128" height="80" rx="4" fill="rgba(255,255,255,0.06)" />
        {/* Post header */}
        <rect x="140" y="66" width="120" height="16" rx="4" fill="rgba(255,255,255,0.06)" />
        <circle cx="148" cy="74" r="5" fill="rgba(255,255,255,0.1)" />
        <rect x="158" y="71" width="40" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
        {/* Post content */}
        <rect x="140" y="86" width="120" height="52" rx="4" fill="rgba(255,255,255,0.04)" />
        <rect x="148" y="96" width="60" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="148" y="108" width="80" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="148" y="120" width="40" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        {/* Actions row */}
        <rect x="140" y="146" width="16" height="14" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="164" y="146" width="14" height="14" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="186" y="146" width="14" height="14" rx="3" fill="rgba(255,255,255,0.06)" />
        {/* Bottom nav */}
        <rect x="140" y="182" width="120" height="16" rx="4" fill="rgba(255,255,255,0.04)" />
        <rect x="148" y="186" width="14" height="8" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="170" y="186" width="14" height="8" rx="2" fill="rgba(255,255,255,0.06)" />
        <rect x="192" y="186" width="14" height="8" rx="2" fill="rgba(255,255,255,0.06)" />
        <rect x="214" y="186" width="14" height="8" rx="2" fill="rgba(255,255,255,0.06)" />
        <rect x="240" y="186" width="14" height="8" rx="2" fill="rgba(255,255,255,0.06)" />
      </svg>
    )
  }

  if (category === "workflow") {
    return (
      <svg viewBox="0 0 400 225" className="w-full h-full">
        <defs>
          <linearGradient id="wf-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#164E63" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0891B2" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#wf-bg)" rx="12" />
        {/* Flow nodes */}
        {/* Node 1 - Trigger */}
        <rect x="160" y="20" width="80" height="32" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
        <rect x="172" y="32" width="24" height="4" rx="2" fill="rgba(6,182,212,0.5)" />
        <rect x="200" y="32" width="24" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
        {/* Arrow 1 */}
        <line x1="200" y1="52" x2="200" y2="68" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" />
        <polygon points="196,66 200,74 204,66" fill="rgba(6,182,212,0.3)" />
        {/* Node 2 - Process */}
        <rect x="140" y="74" width="120" height="36" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
        <rect x="154" y="86" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
        <rect x="200" y="86" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        {/* Branch lines */}
        <line x1="200" y1="110" x2="200" y2="128" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" />
        <line x1="120" y1="128" x2="280" y2="128" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
        <line x1="120" y1="128" x2="120" y2="142" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" />
        <line x1="280" y1="128" x2="280" y2="142" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" />
        <polygon points="116,140 120,148 124,140" fill="rgba(6,182,212,0.3)" />
        <polygon points="276,140 280,148 284,140" fill="rgba(6,182,212,0.3)" />
        {/* Node 3A */}
        <rect x="60" y="148" width="120" height="32" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
        <rect x="74" y="160" width="40" height="5" rx="2.5" fill="rgba(16,185,129,0.4)" />
        <rect x="120" y="160" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        {/* Node 3B */}
        <rect x="220" y="148" width="120" height="32" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(251,146,60,0.3)" strokeWidth="1" />
        <rect x="234" y="160" width="40" height="5" rx="2.5" fill="rgba(251,146,60,0.4)" />
        <rect x="280" y="160" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        {/* Node 4 - Output */}
        <rect x="160" y="192" width="80" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="176" y="200" width="48" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      </svg>
    )
  }

  if (category === "leads" || category === "crm") {
    return (
      <svg viewBox="0 0 400 225" className="w-full h-full">
        <defs>
          <linearGradient id="ld-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C2D12" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#ld-bg)" rx="12" />
        {/* Header */}
        <rect x="16" y="12" width="368" height="28" rx="6" fill="rgba(255,255,255,0.05)" />
        <rect x="28" y="20" width="60" height="12" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="300" y="20" width="40" height="12" rx="4" fill="rgba(234,88,12,0.3)" />
        {/* Metric cards */}
        <rect x="16" y="50" width="116" height="52" rx="8" fill="rgba(255,255,255,0.06)" />
        <rect x="26" y="58" width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        <rect x="26" y="68" width="40" height="10" rx="3" fill="rgba(234,88,12,0.4)" />
        <rect x="26" y="84" width="50" height="4" rx="2" fill="rgba(255,255,255,0.08)" />

        <rect x="142" y="50" width="116" height="52" rx="8" fill="rgba(255,255,255,0.06)" />
        <rect x="152" y="58" width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        <rect x="152" y="68" width="40" height="10" rx="3" fill="rgba(16,185,129,0.4)" />
        <rect x="152" y="84" width="50" height="4" rx="2" fill="rgba(255,255,255,0.08)" />

        <rect x="268" y="50" width="116" height="52" rx="8" fill="rgba(255,255,255,0.06)" />
        <rect x="278" y="58" width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        <rect x="278" y="68" width="40" height="10" rx="3" fill="rgba(99,102,241,0.4)" />
        <rect x="278" y="84" width="50" height="4" rx="2" fill="rgba(255,255,255,0.08)" />

        {/* Chart area */}
        <rect x="16" y="114" width="368" height="60" rx="8" fill="rgba(255,255,255,0.04)" />
        {/* Bar chart */}
        {[20, 35, 28, 42, 30, 48, 25].map((h, i) => (
          <rect key={i} x={36 + i * 48} y={160 - h} width="20" height={h} rx="3" fill={`rgba(234,88,12,${0.2 + i * 0.04})`} />
        ))}
        {/* X axis labels */}
        <rect x="36" y="164" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="84" y="164" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="132" y="164" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="180" y="164" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="228" y="164" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="276" y="164" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="324" y="164" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />

        {/* Growth arrow */}
        <line x1="340" y1="184" x2="370" y2="184" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" />
        <rect x="356" y="186" width="24" height="5" rx="2.5" fill="rgba(16,185,129,0.3)" />
        <polygon points="374,182 378,184 374,186" fill="rgba(16,185,129,0.5)" />
      </svg>
    )
  }

  return null
}
