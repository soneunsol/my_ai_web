/**
 * DevDesign Hub 전문 SVG 로고 컴포넌트
 * @param {'nav'|'login'} variant - nav: 가로형(NavBar용), login: 세로형(로그인 페이지용)
 */
const Logo = ({ variant = 'nav' }) => {
  const isLogin = variant === 'login';
  const iconSize = isLogin ? 56 : 36;

  const icon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#42a5f5" />
          <stop offset="100%" stopColor="#7b1fa2" />
        </linearGradient>
      </defs>

      {/* 배경 라운드 사각형 */}
      <rect width="56" height="56" rx="14" fill="url(#logoGrad)" />

      {/* 코드 브래킷 < */}
      <polyline
        points="14,22 8,28 14,34"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* 코드 브래킷 > */}
      <polyline
        points="42,22 48,28 42,34"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* 슬래시 / */}
      <line
        x1="32" y1="18" x2="24" y2="38"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* 디자인 다이아몬드 점 */}
      <circle cx="28" cy="10" r="2.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="28" cy="46" r="2.5" fill="rgba(255,255,255,0.6)" />
    </svg>
  );

  if (isLogin) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        {icon}
        <div style={{ marginTop: 12, textAlign: 'center' }}>
          <div style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 1.5,
            background: 'linear-gradient(90deg, #1976d2, #7b1fa2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
          }}>
            DevDesign Hub
          </div>
          <div style={{ fontSize: 12, color: '#888', marginTop: 4, letterSpacing: 0.5 }}>
            Design &amp; Dev Sharing Community
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
      {icon}
      <div>
        <div style={{
          fontSize: 17,
          fontWeight: 800,
          letterSpacing: 0.8,
          color: '#fff',
          lineHeight: 1.15,
        }}>
          DevDesign Hub
        </div>
        <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.65)', letterSpacing: 0.3 }}>
          Design &amp; Dev Sharing
        </div>
      </div>
    </div>
  );
};

export default Logo;
