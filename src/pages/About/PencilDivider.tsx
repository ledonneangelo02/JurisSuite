import './About.css'

export default function PencilDivider() {
  return (
    <div className="pencil-divider" aria-hidden="true">
      <svg className="pencil-svg" viewBox="0 0 1000 40" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="pencilBody" x1="0" x2="1">
            <stop offset="0" stopColor="#F4D03F" />
            <stop offset="1" stopColor="#F1C40F" />
          </linearGradient>
          <linearGradient id="metal" x1="0" x2="1">
            <stop offset="0" stopColor="#D0D0D0" />
            <stop offset="1" stopColor="#A8A8A8" />
          </linearGradient>
        </defs>

        <rect x="10" y="8" rx="3" ry="3" width="860" height="24" fill="url(#pencilBody)" />
        <polygon points="870,8 930,20 870,32" fill="#2C3E50" />
        <polygon points="832,14 870,20 832,26" fill="#E0A84B" />
        <rect x="800" y="9" width="32" height="22" rx="2" fill="url(#metal)" />
        <rect x="744" y="10" width="56" height="20" rx="3" fill="#FF6B9D" />
      </svg>
    </div>
  )
}
