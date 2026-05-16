<template>
  <div class="parking-wrap">
    <svg
      class="lot-svg"
      viewBox="0 0 440 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="vf" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b"/>
          <feColorMatrix in="b" type="matrix"
            values="1.8 0 0 0 0.4  0 0 0 0 0  0 0 0 0 0  0 0 0 1.8 0"
            result="r"/>
          <feMerge>
            <feMergeNode in="r"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="asphalt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0b1422"/>
          <stop offset="1" stop-color="#0e1b2e"/>
        </linearGradient>
        <linearGradient id="scan-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"   stop-color="rgba(59,130,246,0)"/>
          <stop offset="0.5" stop-color="rgba(59,130,246,0.07)"/>
          <stop offset="1"   stop-color="rgba(59,130,246,0)"/>
        </linearGradient>
        <radialGradient id="vignette" cx="50%" cy="50%" r="65%">
          <stop offset="55%" stop-color="transparent"/>
          <stop offset="100%" stop-color="#040a14" stop-opacity="0.8"/>
        </radialGradient>
      </defs>

      <!-- BACKGROUND -->
      <rect width="440" height="290" fill="#060d1a"/>

      <!-- BUILDING SILHOUETTES -->
      <rect x="0"   y="0"  width="440" height="37" fill="#060d1a"/>
      <rect x="6"   y="3"  width="54"  height="34" rx="2" fill="#0a1525"/>
      <rect x="68"  y="7"  width="46"  height="30" rx="2" fill="#0c1830"/>
      <rect x="122" y="1"  width="74"  height="36" rx="2" fill="#091320"/>
      <rect x="204" y="5"  width="48"  height="32" rx="2" fill="#0a1525"/>
      <rect x="260" y="0"  width="40"  height="37" rx="2" fill="#0d1c30"/>
      <rect x="308" y="4"  width="64"  height="33" rx="2" fill="#0c1830"/>
      <rect x="380" y="2"  width="60"  height="35" rx="2" fill="#091320"/>
      <!-- Building windows -->
      <g fill="#1e4070" fill-opacity="0.6">
        <rect x="14" y="7"  width="6" height="8" rx="1"/><rect x="26" y="7"  width="6" height="8" rx="1"/>
        <rect x="38" y="7"  width="6" height="8" rx="1"/><rect x="50" y="7"  width="6" height="8" rx="1"/>
        <rect x="14" y="19" width="6" height="8" rx="1"/><rect x="38" y="19" width="6" height="8" rx="1"/>
        <rect x="76" y="11" width="6" height="7" rx="1"/><rect x="88" y="11" width="6" height="7" rx="1"/>
        <rect x="100" y="11" width="6" height="7" rx="1"/>
        <rect x="130" y="5"  width="6" height="8" rx="1"/><rect x="142" y="5" width="6" height="8" rx="1"/>
        <rect x="154" y="5"  width="6" height="8" rx="1"/><rect x="166" y="5" width="6" height="8" rx="1"/>
        <rect x="178" y="5"  width="6" height="8" rx="1"/>
        <rect x="130" y="17" width="6" height="8" rx="1"/><rect x="154" y="17" width="6" height="8" rx="1"/>
        <rect x="166" y="17" width="6" height="8" rx="1"/>
        <rect x="212" y="9" width="6" height="7" rx="1"/><rect x="224" y="9" width="6" height="7" rx="1"/>
        <rect x="236" y="9" width="6" height="7" rx="1"/>
        <rect x="268" y="4" width="6" height="8" rx="1"/><rect x="280" y="4" width="6" height="8" rx="1"/>
        <rect x="292" y="4" width="6" height="8" rx="1"/>
        <rect x="316" y="8" width="6" height="7" rx="1"/><rect x="328" y="8" width="6" height="7" rx="1"/>
        <rect x="340" y="8" width="6" height="7" rx="1"/><rect x="352" y="8" width="6" height="7" rx="1"/>
        <rect x="316" y="19" width="6" height="7" rx="1"/><rect x="340" y="19" width="6" height="7" rx="1"/>
        <rect x="388" y="6" width="6" height="8" rx="1"/><rect x="400" y="6" width="6" height="8" rx="1"/>
        <rect x="412" y="6" width="6" height="8" rx="1"/><rect x="424" y="6" width="6" height="8" rx="1"/>
        <rect x="388" y="18" width="6" height="8" rx="1"/><rect x="412" y="18" width="6" height="8" rx="1"/>
      </g>

      <!-- ASPHALT SURFACE -->
      <rect x="0" y="37" width="440" height="235" fill="url(#asphalt)"/>
      <!-- Curb edges -->
      <rect x="0" y="37"  width="440" height="2.5" fill="white" fill-opacity="0.16"/>
      <rect x="0" y="269" width="440" height="2.5" fill="white" fill-opacity="0.16"/>

      <!-- ═══ ROW 1 (y: 43–123) ═══ -->
      <line x1="0" y1="43"  x2="440" y2="43"  stroke="white" stroke-opacity="0.22" stroke-width="1"/>
      <line x1="0" y1="123" x2="440" y2="123" stroke="white" stroke-opacity="0.22" stroke-width="1"/>
      <!-- Space dividers: 8 spaces of 50px starting at x=20 -->
      <line x1="20"  y1="43" x2="20"  y2="123" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="70"  y1="43" x2="70"  y2="123" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="120" y1="43" x2="120" y2="123" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="170" y1="43" x2="170" y2="123" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="220" y1="43" x2="220" y2="123" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="270" y1="43" x2="270" y2="123" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="320" y1="43" x2="320" y2="123" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="370" y1="43" x2="370" y2="123" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="420" y1="43" x2="420" y2="123" stroke="white" stroke-opacity="0.15" stroke-width="1"/>

      <!-- Cars Row 1: hood faces DOWN (toward lane) -->
      <!-- Space 0: navy -->
      <g transform="translate(29,53)">
        <rect width="32" height="58" rx="5" fill="#1a3a6c"/>
        <rect x="4" y="44" width="24" height="11" rx="2" fill="#2a5498" fill-opacity="0.7"/>
        <rect x="5" y="4"  width="22" height="9"  rx="2" fill="#1e4888" fill-opacity="0.45"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.55"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.55"/>
        <rect x="4"  y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.65"/>
        <rect x="22" y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.65"/>
      </g>
      <!-- Space 1: charcoal -->
      <g transform="translate(79,53)">
        <rect width="32" height="58" rx="5" fill="#142030"/>
        <rect x="4" y="44" width="24" height="11" rx="2" fill="#1a2e44" fill-opacity="0.7"/>
        <rect x="5" y="4"  width="22" height="9"  rx="2" fill="#162840" fill-opacity="0.45"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="4"  y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.55"/>
        <rect x="22" y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.55"/>
      </g>
      <!-- Space 2: VIOLATION -->
      <g class="violation-car" transform="translate(129,53)" filter="url(#vf)">
        <rect width="32" height="58" rx="5" fill="#3a1212"/>
        <rect x="4" y="44" width="24" height="11" rx="2" fill="#4a1c1c" fill-opacity="0.9"/>
        <rect x="5" y="4"  width="22" height="9"  rx="2" fill="#3e1818" fill-opacity="0.5"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ff3300" fill-opacity="0.9"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ff3300" fill-opacity="0.9"/>
        <rect x="4"  y="2"  width="6" height="3" rx="1" fill="#ff2200"/>
        <rect x="22" y="2"  width="6" height="3" rx="1" fill="#ff2200"/>
      </g>
      <ellipse class="viol-ring" cx="145" cy="82" rx="22" ry="34" fill="none" stroke="#ff4422" stroke-width="2"/>
      <!-- Space 3: empty -->
      <text x="195" y="89" text-anchor="middle" fill="white" fill-opacity="0.07" font-size="22" font-weight="900" font-family="Arial Black,Arial,sans-serif">P</text>
      <!-- Space 4: dark navy -->
      <g transform="translate(229,53)">
        <rect width="32" height="58" rx="5" fill="#1a3050"/>
        <rect x="4" y="44" width="24" height="11" rx="2" fill="#223868" fill-opacity="0.7"/>
        <rect x="5" y="4"  width="22" height="9"  rx="2" fill="#1c3460" fill-opacity="0.45"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="4"  y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.5"/>
        <rect x="22" y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.5"/>
      </g>
      <!-- Space 5 -->
      <g transform="translate(279,53)">
        <rect width="32" height="58" rx="5" fill="#1d3555"/>
        <rect x="4" y="44" width="24" height="11" rx="2" fill="#263d65" fill-opacity="0.7"/>
        <rect x="5" y="4"  width="22" height="9"  rx="2" fill="#1f3860" fill-opacity="0.45"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.5"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.5"/>
        <rect x="4"  y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.45"/>
        <rect x="22" y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.45"/>
      </g>
      <!-- Space 6 -->
      <g transform="translate(329,53)">
        <rect width="32" height="58" rx="5" fill="#0f1c2e"/>
        <rect x="4" y="44" width="24" height="11" rx="2" fill="#182536" fill-opacity="0.7"/>
        <rect x="5" y="4"  width="22" height="9"  rx="2" fill="#122030" fill-opacity="0.45"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.4"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.4"/>
        <rect x="4"  y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.45"/>
        <rect x="22" y="2"  width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.45"/>
      </g>
      <!-- Space 7: empty -->
      <text x="395" y="89" text-anchor="middle" fill="white" fill-opacity="0.07" font-size="22" font-weight="900" font-family="Arial Black,Arial,sans-serif">P</text>

      <!-- ═══ CENTRAL LANE (y: 123–189) ═══ -->
      <line x1="0" y1="156" x2="440" y2="156" stroke="white" stroke-opacity="0.2" stroke-dasharray="16 10" stroke-width="1.5"/>

      <!-- ═══ ROW 2 (y: 189–269) — hood faces UP (toward lane) ═══ -->
      <line x1="0" y1="189" x2="440" y2="189" stroke="white" stroke-opacity="0.22" stroke-width="1"/>
      <line x1="0" y1="269" x2="440" y2="269" stroke="white" stroke-opacity="0.22" stroke-width="1"/>
      <line x1="20"  y1="189" x2="20"  y2="269" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="70"  y1="189" x2="70"  y2="269" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="120" y1="189" x2="120" y2="269" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="170" y1="189" x2="170" y2="269" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="220" y1="189" x2="220" y2="269" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="270" y1="189" x2="270" y2="269" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="320" y1="189" x2="320" y2="269" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="370" y1="189" x2="370" y2="269" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="420" y1="189" x2="420" y2="269" stroke="white" stroke-opacity="0.15" stroke-width="1"/>

      <!-- Cars Row 2: hood at top (y=197), tail at bottom -->
      <!-- Space 0 -->
      <g transform="translate(29,197)">
        <rect width="32" height="58" rx="5" fill="#142030"/>
        <rect x="4" y="4"  width="24" height="11" rx="2" fill="#1a2e44" fill-opacity="0.7"/>
        <rect x="5" y="44" width="22" height="9"  rx="2" fill="#162840" fill-opacity="0.45"/>
        <rect x="4"  y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="22" y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.55"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.55"/>
      </g>
      <!-- Space 1: empty -->
      <text x="95" y="241" text-anchor="middle" fill="white" fill-opacity="0.07" font-size="22" font-weight="900" font-family="Arial Black,Arial,sans-serif">P</text>
      <!-- Space 2 -->
      <g transform="translate(129,197)">
        <rect width="32" height="58" rx="5" fill="#1a3a6c"/>
        <rect x="4" y="4"  width="24" height="11" rx="2" fill="#2a5498" fill-opacity="0.7"/>
        <rect x="5" y="44" width="22" height="9"  rx="2" fill="#1e4888" fill-opacity="0.45"/>
        <rect x="4"  y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.55"/>
        <rect x="22" y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.55"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.65"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.65"/>
      </g>
      <!-- Space 3 -->
      <g transform="translate(179,197)">
        <rect width="32" height="58" rx="5" fill="#1d3555"/>
        <rect x="4" y="4"  width="24" height="11" rx="2" fill="#263d65" fill-opacity="0.7"/>
        <rect x="5" y="44" width="22" height="9"  rx="2" fill="#1f3860" fill-opacity="0.45"/>
        <rect x="4"  y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.5"/>
        <rect x="22" y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.5"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.5"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.5"/>
      </g>
      <!-- Space 4 -->
      <g transform="translate(229,197)">
        <rect width="32" height="58" rx="5" fill="#1a3050"/>
        <rect x="4" y="4"  width="24" height="11" rx="2" fill="#223868" fill-opacity="0.7"/>
        <rect x="5" y="44" width="22" height="9"  rx="2" fill="#1c3460" fill-opacity="0.45"/>
        <rect x="4"  y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="22" y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.5"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.5"/>
      </g>
      <!-- Space 5 -->
      <g transform="translate(279,197)">
        <rect width="32" height="58" rx="5" fill="#0f1c2e"/>
        <rect x="4" y="4"  width="24" height="11" rx="2" fill="#182536" fill-opacity="0.7"/>
        <rect x="5" y="44" width="22" height="9"  rx="2" fill="#122030" fill-opacity="0.45"/>
        <rect x="4"  y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.4"/>
        <rect x="22" y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.4"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.45"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.45"/>
      </g>
      <!-- Space 6 -->
      <g transform="translate(329,197)">
        <rect width="32" height="58" rx="5" fill="#142030"/>
        <rect x="4" y="4"  width="24" height="11" rx="2" fill="#1a2e44" fill-opacity="0.7"/>
        <rect x="5" y="44" width="22" height="9"  rx="2" fill="#162840" fill-opacity="0.45"/>
        <rect x="4"  y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="22" y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.45"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.55"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.55"/>
      </g>
      <!-- Space 7 -->
      <g transform="translate(379,197)">
        <rect width="32" height="58" rx="5" fill="#1d3555"/>
        <rect x="4" y="4"  width="24" height="11" rx="2" fill="#263d65" fill-opacity="0.7"/>
        <rect x="5" y="44" width="22" height="9"  rx="2" fill="#1f3860" fill-opacity="0.45"/>
        <rect x="4"  y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.5"/>
        <rect x="22" y="0"  width="6" height="3" rx="1" fill="#ffffaa" fill-opacity="0.5"/>
        <rect x="4"  y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.5"/>
        <rect x="22" y="54" width="6" height="3" rx="1" fill="#ff4422" fill-opacity="0.5"/>
      </g>

      <!-- ═══ NORDICPARK PATROL CAR (animated in lane) ═══ -->
      <!-- Horizontal car: 62px long, 26px wide, facing right, centered at origin -->
      <g class="patrol-car">
        <rect x="-31" y="-13" width="62" height="26" rx="5" fill="#003fa0"/>
        <!-- Gold stripe -->
        <rect x="-31" y="-3" width="62" height="6" fill="#facc15" fill-opacity="0.92"/>
        <!-- Windshield (front/right) -->
        <rect x="13"  y="-10" width="14" height="20" rx="3" fill="#5599cc" fill-opacity="0.42"/>
        <!-- Rear window -->
        <rect x="-27" y="-9"  width="12" height="18" rx="2" fill="#253550" fill-opacity="0.6"/>
        <!-- Light bar housing -->
        <rect x="-13" y="-18" width="26" height="5.5" rx="2.5" fill="#0a1a34"/>
        <!-- Flashing lights -->
        <rect class="flash-blue" x="-12" y="-17" width="11" height="3.5" rx="1.5" fill="#3b82f6"/>
        <rect class="flash-red"  x="1"   y="-17" width="11" height="3.5" rx="1.5" fill="#ef4444"/>
        <!-- Front headlights -->
        <rect x="27"  y="-10" width="4" height="4" rx="1" fill="#ffffcc" fill-opacity="0.9"/>
        <rect x="27"  y="6"   width="4" height="4" rx="1" fill="#ffffcc" fill-opacity="0.9"/>
        <!-- Rear lights -->
        <rect x="-31" y="-10" width="4" height="4" rx="1" fill="#ff2200" fill-opacity="0.85"/>
        <rect x="-31" y="6"   width="4" height="4" rx="1" fill="#ff2200" fill-opacity="0.85"/>
        <!-- NP label -->
        <text x="-6" y="4.5" text-anchor="middle" fill="white" fill-opacity="0.55"
          font-size="7" font-weight="800" font-family="system-ui,sans-serif" letter-spacing="1">NP</text>
      </g>

      <!-- SCAN SWEEP LINE -->
      <rect class="scan-line" x="0" y="0" width="440" height="28" fill="url(#scan-grad)"/>

      <!-- VIGNETTE -->
      <rect width="440" height="290" fill="url(#vignette)"/>

      <!-- AKTIV KONTROLZONE badge -->
      <g transform="translate(296,8)">
        <rect width="136" height="20" rx="10" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.28)" stroke-width="0.8"/>
        <circle class="status-dot" cx="11" cy="10" r="3.5" fill="#34d399"/>
        <text x="21" y="14" fill="#6ee7b7" font-size="7.5" font-weight="700"
          font-family="system-ui,sans-serif" letter-spacing="0.7">AKTIV KONTROLZONE</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
// Pure SVG + CSS — no JS runtime needed
</script>

<style scoped>
.parking-wrap {
  width: 100%;
  max-width: 440px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 28px 56px rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.lot-svg {
  display: block;
  width: 100%;
  height: auto;
}

/* Patrol car drives left → right across center lane (y=156) */
.patrol-car {
  transform: translate(-90px, 156px);
  animation: drive 9s linear infinite;
}

@keyframes drive {
  from { transform: translate(-90px, 156px); }
  to   { transform: translate(530px, 156px); }
}

/* Violation car glow pulses */
.violation-car {
  animation: viol-pulse 2s ease-in-out infinite;
}

@keyframes viol-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.68; }
}

/* Violation ring expands and fades */
.viol-ring {
  transform-box: fill-box;
  transform-origin: center;
  animation: ring-pulse 2s ease-in-out infinite;
}

@keyframes ring-pulse {
  0%, 100% { opacity: 0.6; transform: scale(1);    stroke-width: 2; }
  50%       { opacity: 0.1; transform: scale(1.18); stroke-width: 3; }
}

/* Flashing light bar */
.flash-blue {
  animation: f-blue 0.55s ease-in-out infinite alternate;
}
.flash-red {
  animation: f-red 0.55s ease-in-out infinite alternate-reverse;
}

@keyframes f-blue {
  from { opacity: 1; }
  to   { opacity: 0.06; }
}

@keyframes f-red {
  from { opacity: 1; }
  to   { opacity: 0.06; }
}

/* Scan sweep */
.scan-line {
  animation: scan-sweep 6s linear infinite;
}

@keyframes scan-sweep {
  from { transform: translateY(-28px); }
  to   { transform: translateY(300px); }
}

/* Status dot */
.status-dot {
  animation: dot-blink 2.5s ease-in-out infinite;
}

@keyframes dot-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
</style>
