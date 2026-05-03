import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full border-2 border-wedding-gold/60 bg-wedding-navy/80 backdrop-blur
        text-wedding-cream text-xs font-lato flex items-center justify-center
        hover:border-wedding-gold transition-colors active:scale-95"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'ع' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
