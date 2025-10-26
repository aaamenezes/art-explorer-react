export default function ErrorIllustration() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="560"
      height="360"
      viewBox="0 0 560 360"
      role="img"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="544" height="344" rx="8" ry="8" fill="#2b2b2b" />
      <rect
        x="20"
        y="20"
        width="520"
        height="320"
        rx="6"
        ry="6"
        fill="#f7f5ef"
      />

      <rect
        x="44"
        y="40"
        width="472"
        height="272"
        rx="4"
        ry="4"
        fill="#fffefb"
        stroke="#e6e0d6"
        strokeWidth="1"
      />

      <g transform="translate(60,60)">
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffd8a8" />
            <stop offset="100%" stopColor="#ffc09f" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#bde0fe" />
            <stop offset="100%" stopColor="#a0c4ff" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="392" height="232" rx="2" fill="url(#g1)" />
        <circle cx="292" cy="72" r="44" fill="url(#g2)" opacity="0.95" />
        <path
          d="M40 180 C 110 120, 180 200, 260 150"
          stroke="#7c5c4a"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          opacity="0.25"
        />

        <g transform="translate(0,0)">
          <path
            d="M140 20
               L132 36 L140 52 L128 68 L136 86 L122 102 L130 118 L118 134
               L126 150 L110 166 L126 180 L140 168 L154 182 L168 170 L182 186
               L196 170 L210 186"
            fill="none"
            stroke="#3b2f2f"
            strokeWidth="4"
            strokeLinejoin="miter"
            strokeLinecap="butt"
            opacity="0.95"
          />
          <path
            d="M140 52 L154 60"
            stroke="#3b2f2f"
            strokeWidth="2"
            opacity="0.7"
          />
          <path
            d="M128 68 L116 58"
            stroke="#3b2f2f"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M126 150 L100 144"
            stroke="#3b2f2f"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M168 170 L184 156"
            stroke="#3b2f2f"
            strokeWidth="2"
            opacity="0.6"
          />
        </g>

        <g opacity="0.12" fill="white">
          <path d="M138 18 L150 34 L160 30 L148 14 Z" />
          <path d="M180 170 L194 184 L204 180 L190 166 Z" />
        </g>
      </g>

      <rect
        x="40"
        y="36"
        width="480"
        height="288"
        rx="6"
        ry="6"
        fill="none"
        stroke="#e0dcd5"
        strokeWidth="1"
      />
    </svg>
  );
}
