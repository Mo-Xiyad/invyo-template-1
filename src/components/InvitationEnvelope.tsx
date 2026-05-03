import { useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Stage = 'sealed' | 'cracking' | 'opening' | 'fading';

interface Props {
  onOpen: () => void;
}

const InvitationEnvelope = ({ onOpen }: Props) => {
  const [stage, setStage] = useState<Stage>('sealed');
  const { t, isArabic } = useLanguage();

  const handleTap = useCallback(() => {
    if (stage !== 'sealed') return;
    setStage('cracking');
    setTimeout(() => setStage('opening'), 800);
    setTimeout(() => {
      setStage('fading');
      onOpen();
    }, 3000);
  }, [stage, onOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-[1200ms] ${
        stage === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: 'linear-gradient(160deg, #F5ECD7 0%, #EDE0C8 40%, #E8D8B8 70%, #F0E4C8 100%)' }}
      onClick={handleTap}
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")' }} />

      {/* Envelope body with fold lines */}
      <div className="relative w-[340px] h-[460px] max-w-[90vw]" style={{ perspective: '800px' }}>
        
        {/* Bottom envelope body */}
        <div className="absolute inset-0 rounded-sm overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #F0E4C8 0%, #E8D5AE 100%)', boxShadow: '0 8px 40px rgba(0,0,0,0.08), inset 0 0 60px rgba(200,129,58,0.05)' }}>
          
          {/* Diagonal fold lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 460" fill="none">
            {/* Left fold */}
            <path d="M0 0 L170 160" stroke="#C8813A" strokeWidth="0.3" opacity="0.15" />
            {/* Right fold */}
            <path d="M340 0 L170 160" stroke="#C8813A" strokeWidth="0.3" opacity="0.15" />
            {/* Bottom folds */}
            <path d="M0 460 L170 280" stroke="#C8813A" strokeWidth="0.2" opacity="0.1" />
            <path d="M340 460 L170 280" stroke="#C8813A" strokeWidth="0.2" opacity="0.1" />
            
            {/* Corner arabesque details */}
            <g opacity="0.12">
              <path d="M15 15 Q30 5 45 15 Q55 30 45 45 Q30 55 15 45 Q5 30 15 15Z" stroke="#C8813A" strokeWidth="0.5" fill="none" />
              <path d="M295 15 Q310 5 325 15 Q335 30 325 45 Q310 55 295 45 Q285 30 295 15Z" stroke="#C8813A" strokeWidth="0.5" fill="none" />
              <path d="M15 415 Q30 405 45 415 Q55 430 45 445 Q30 455 15 445 Q5 430 15 415Z" stroke="#C8813A" strokeWidth="0.5" fill="none" />
              <path d="M295 415 Q310 405 325 415 Q335 430 325 445 Q310 455 295 445 Q285 430 295 415Z" stroke="#C8813A" strokeWidth="0.5" fill="none" />
            </g>

            {/* Zellige border pattern */}
            {Array.from({ length: 17 }, (_, i) => (
              <g key={`top-${i}`} opacity="0.1">
                <path d={`M${i * 20 + 10} 8 L${i * 20 + 18} 16 L${i * 20 + 10} 24 L${i * 20 + 2} 16Z`} stroke="#C8813A" strokeWidth="0.4" fill="none" />
              </g>
            ))}
            {Array.from({ length: 17 }, (_, i) => (
              <g key={`bot-${i}`} opacity="0.1">
                <path d={`M${i * 20 + 10} 436 L${i * 20 + 18} 444 L${i * 20 + 10} 452 L${i * 20 + 2} 444Z`} stroke="#C8813A" strokeWidth="0.4" fill="none" />
              </g>
            ))}
          </svg>

          {/* Pearl bead border */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 460" fill="none">
            {/* Top edge pearls */}
            {Array.from({ length: 23 }, (_, i) => (
              <circle key={`pt-${i}`} cx={i * 15 + 7} cy="4" r="1.5" fill="#D4AF7A" fillOpacity="0.3" />
            ))}
            {/* Bottom edge pearls */}
            {Array.from({ length: 23 }, (_, i) => (
              <circle key={`pb-${i}`} cx={i * 15 + 7} cy="456" r="1.5" fill="#D4AF7A" fillOpacity="0.3" />
            ))}
            {/* Left edge pearls */}
            {Array.from({ length: 30 }, (_, i) => (
              <circle key={`pl-${i}`} cx="4" cy={i * 15 + 10} r="1.5" fill="#D4AF7A" fillOpacity="0.3" />
            ))}
            {/* Right edge pearls */}
            {Array.from({ length: 30 }, (_, i) => (
              <circle key={`pr-${i}`} cx="336" cy={i * 15 + 10} r="1.5" fill="#D4AF7A" fillOpacity="0.3" />
            ))}
          </svg>
        </div>

        {/* Top flap — opens upward */}
        <div
          className={`absolute top-0 left-0 right-0 h-[180px] z-10 ${
            stage === 'opening' || stage === 'fading' ? 'animate-envelope-flap-open' : ''
          }`}
          style={{ transformOrigin: 'top center', perspective: '800px' }}
        >
          <svg viewBox="0 0 340 180" className="w-full h-full" fill="none">
            <path d="M0 0 L170 160 L340 0 L340 0 L0 0Z"
              fill="url(#flapGrad)" stroke="#C8813A" strokeWidth="0.3" strokeOpacity="0.2" />
            <defs>
              <linearGradient id="flapGrad" x1="170" y1="0" x2="170" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E8D5AE" />
                <stop offset="100%" stopColor="#DCC89A" />
              </linearGradient>
            </defs>
            {/* Pearl beads along flap edges */}
            {Array.from({ length: 12 }, (_, i) => {
              const t = (i + 1) / 13;
              return (
                <g key={`fl-${i}`}>
                  <circle cx={170 * t} cy={160 * t} r="1.3" fill="#D4AF7A" fillOpacity="0.35" />
                  <circle cx={340 - 170 * t} cy={160 * t} r="1.3" fill="#D4AF7A" fillOpacity="0.35" />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Wax Seal */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative w-[100px] h-[100px]">
            {/* Seal base */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="sealGrad" cx="40%" cy="40%">
                  <stop offset="0%" stopColor="#A0294A" />
                  <stop offset="50%" stopColor="#8B1A2E" />
                  <stop offset="100%" stopColor="#6B1222" />
                </radialGradient>
                <filter id="sealShadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
                </filter>
              </defs>
              {/* Wax drip edges */}
              <path d="M50 5 Q62 3 72 10 Q82 8 88 18 Q95 25 93 38 Q98 48 94 58 Q97 68 90 76 Q85 85 75 88 Q68 95 55 93 Q48 97 38 93 Q28 95 20 88 Q12 82 8 72 Q3 62 6 52 Q2 42 7 32 Q5 22 12 14 Q20 6 30 5 Q38 2 50 5Z"
                fill="url(#sealGrad)" filter="url(#sealShadow)" />
              {/* Inner circle border */}
              <circle cx="50" cy="50" r="32" stroke="#D4AF7A" strokeWidth="0.8" fill="none" opacity="0.6" />
              <circle cx="50" cy="50" r="28" stroke="#D4AF7A" strokeWidth="0.4" fill="none" opacity="0.4" />
              {/* Monogram */}
              <text x="50" y="46" textAnchor="middle" dominantBaseline="middle"
                fill="#D4AF7A" fontFamily="'Playfair Display', serif" fontSize="18" fontWeight="700" opacity="0.9">
                X
              </text>
              <text x="50" y="54" textAnchor="middle" dominantBaseline="hanging"
                fill="#D4AF7A" fontFamily="'Playfair Display', serif" fontSize="10" opacity="0.7">
                &amp;  R
              </text>
              {/* Decorative dots around inner circle */}
              {Array.from({ length: 16 }, (_, i) => {
                const angle = (i * 360) / 16 * Math.PI / 180;
                return (
                  <circle key={i} cx={50 + Math.cos(angle) * 36} cy={50 + Math.sin(angle) * 36}
                    r="1" fill="#D4AF7A" fillOpacity="0.5" />
                );
              })}
            </svg>

            {/* Crack lines — appear during 'cracking' stage */}
            {(stage === 'cracking' || stage === 'opening' || stage === 'fading') && (
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <path d="M50 18 L48 30 L44 38 L50 50" stroke="#F5ECD7" strokeWidth="1.2" className="animate-crack" style={{ animationDelay: '0ms' }} />
                <path d="M50 50 L56 62 L52 72 L54 82" stroke="#F5ECD7" strokeWidth="1" className="animate-crack" style={{ animationDelay: '150ms' }} />
                <path d="M50 50 L38 54 L28 50 L18 52" stroke="#F5ECD7" strokeWidth="0.8" className="animate-crack" style={{ animationDelay: '300ms' }} />
                <path d="M50 50 L62 46 L72 50 L82 48" stroke="#F5ECD7" strokeWidth="0.8" className="animate-crack" style={{ animationDelay: '250ms' }} />
                <path d="M50 50 L42 42 L36 32" stroke="#F5ECD7" strokeWidth="0.6" className="animate-crack" style={{ animationDelay: '400ms' }} />
                <path d="M50 50 L58 58 L64 68" stroke="#F5ECD7" strokeWidth="0.6" className="animate-crack" style={{ animationDelay: '350ms' }} />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Cupid / angel illustration */}
      <div className="mt-6 opacity-20">
        <svg viewBox="0 0 60 50" width="50" fill="none">
          <path d="M30 10 Q35 0 40 8 Q45 16 38 18 L30 28 L22 18 Q15 16 20 8 Q25 0 30 10Z"
            fill="#C8813A" fillOpacity="0.4" />
          <path d="M20 22 Q10 18 8 28 Q6 38 16 36 L30 28 L44 36 Q54 38 52 28 Q50 18 40 22"
            stroke="#C8813A" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M30 28 L30 44" stroke="#C8813A" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      {/* Tap to open */}
      <p className={`mt-4 text-sm tracking-[0.2em] uppercase animate-pulse-glow ${isArabic ? 'font-amiri' : 'font-lato'}`}
        style={{ color: 'hsl(32, 55%, 50%)' }}>
        {stage === 'sealed' ? t('Tap to Open', 'انقر للفتح') : ''}
      </p>
    </div>
  );
};

export default InvitationEnvelope;
