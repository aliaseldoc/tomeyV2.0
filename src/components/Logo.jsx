const CENTER = 60;
const RADIUS = 38;
const LEAF_COUNT = 6;
const START_ANGLE = 100;
const END_ANGLE = 205;

const leafAngles = Array.from({ length: LEAF_COUNT }, (_, index) => {
  const step = (END_ANGLE - START_ANGLE) / (LEAF_COUNT - 1);
  return START_ANGLE + step * index;
});

function Leaf({ angleDeg, sizeScale }) {
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = CENTER + RADIUS * Math.cos(angleRad);
  const y = CENTER + RADIUS * Math.sin(angleRad);
  return (
    <ellipse
      cx={x}
      cy={y}
      rx={9 * sizeScale}
      ry={3.6 * sizeScale}
      fill="url(#tomeyLeafGradient)"
      transform={`rotate(${angleDeg + 90} ${x} ${y})`}
    />
  );
}

export function Logo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="El Desafío de Tomey">
      <defs>
        <linearGradient id="tomeyLeafGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e2a0" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <filter id="tomeyCrossGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g>
        {leafAngles.map((angleDeg, index) => (
          <Leaf key={`left-${index}`} angleDeg={angleDeg} sizeScale={0.75 + (index / (LEAF_COUNT - 1)) * 0.5} />
        ))}
      </g>
      <g transform={`translate(${CENTER * 2} 0) scale(-1 1)`}>
        {leafAngles.map((angleDeg, index) => (
          <Leaf key={`right-${index}`} angleDeg={angleDeg} sizeScale={0.75 + (index / (LEAF_COUNT - 1)) * 0.5} />
        ))}
      </g>

      <g filter="url(#tomeyCrossGlow)">
        <rect x="51" y="34" width="18" height="52" rx="4" fill="#00A4A6" />
        <rect x="34" y="51" width="52" height="18" rx="4" fill="#00A4A6" />
      </g>
    </svg>
  );
}
