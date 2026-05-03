import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = ({ onSelect }: { onSelect: () => void }) => {
  const { setLanguage } = useLanguage();

  const handleSelect = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    onSelect();
  };

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden animate-fade-in"
      style={{ background: 'linear-gradient(160deg, #2A2A4E 0%, #1E1E3A 40%, #1A1A2E 100%)' }}>

      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(200,129,58,0.25), transparent 60%)' }} />

      <div className="absolute inset-0 zellige-bg-rich opacity-10" />

      <div className="relative z-10 text-center animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        {/* Ornament */}
        <svg viewBox="0 0 60 60" className="w-12 h-12 mx-auto mb-6" fill="none" stroke="#C8813A" strokeWidth="0.6" opacity="0.4">
          <path d="M30 5L34 22L47 10L38 25L55 28L38 33L47 48L34 38L30 55L26 38L13 48L22 33L5 28L22 25L13 10L26 22Z" />
          <circle cx="30" cy="30" r="6" />
        </svg>

        <p className="font-playfair text-wedding-cream/60 text-lg mb-2 tracking-wide">Choose your language</p>
        <p className="font-amiri text-wedding-cream/40 text-lg mb-10" dir="rtl">اختر لغتك</p>

        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={() => handleSelect('en')}
            className="w-56 h-16 rounded-2xl border border-wedding-gold/30 text-wedding-cream font-playfair text-xl
              hover:bg-wedding-gold/10 hover:border-wedding-gold/60 transition-all duration-300
              active:scale-95 backdrop-blur-sm"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            English
          </button>
          <button
            onClick={() => handleSelect('ar')}
            className="w-56 h-16 rounded-2xl border border-wedding-gold/30 text-wedding-cream font-amiri text-2xl
              hover:bg-wedding-gold/10 hover:border-wedding-gold/60 transition-all duration-300
              active:scale-95 backdrop-blur-sm"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            dir="rtl"
          >
            عربي
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
