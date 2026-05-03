import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';

const HennaSection = () => {
  const { t, isArabic } = useLanguage();

  return (
    <section className="relative px-6 py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF5E9 0%, #FCE8D0 30%, #F8DFC2 50%, #FCE8D0 70%, #FFF5E9 100%)' }}>

      {/* Warm henna-inspired watercolor wash */}
      <div className="absolute inset-0 opacity-[0.1]"
        style={{ background: 'radial-gradient(ellipse at 30% 40%, #D4876C 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, #C8813A 0%, transparent 50%)' }} />

      <div className="absolute inset-0 zellige-bg-rich opacity-[0.04]" />

      {/* Henna-inspired corner decorations */}
      <div className="absolute top-8 left-6 opacity-15">
        <svg viewBox="0 0 60 80" width="40" fill="none" stroke="#8B4513" strokeWidth="0.6">
          <path d="M30 0 Q28 20 15 35 Q8 45 12 60 Q14 70 10 80" />
          <circle cx="15" cy="35" r="4" />
          <circle cx="15" cy="35" r="2" fill="#8B4513" fillOpacity="0.1" />
          <path d="M12 28 Q15 25 18 28" />
          <path d="M10 42 Q15 38 20 42" />
          <circle cx="25" cy="20" r="3" />
          <path d="M22 15 Q25 12 28 15" />
        </svg>
      </div>
      <div className="absolute top-8 right-6 opacity-15 -scale-x-100">
        <svg viewBox="0 0 60 80" width="40" fill="none" stroke="#8B4513" strokeWidth="0.6">
          <path d="M30 0 Q28 20 15 35 Q8 45 12 60 Q14 70 10 80" />
          <circle cx="15" cy="35" r="4" />
          <circle cx="15" cy="35" r="2" fill="#8B4513" fillOpacity="0.1" />
          <path d="M12 28 Q15 25 18 28" />
          <path d="M10 42 Q15 38 20 42" />
        </svg>
      </div>

      <div className="max-w-sm mx-auto relative z-10">
        <div className="text-center mb-10">
          <Sparkles className="w-8 h-8 mx-auto mb-4 text-wedding-gold/60" />
          <h2 className={`text-3xl text-wedding-navy mb-2 ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
            {t('Evening Celebration', 'الاحتفال المسائي')}
          </h2>
          <p className={`text-wedding-navy/45 text-sm ${isArabic ? 'font-amiri text-base' : 'font-lato tracking-wide'}`}>
            {t('June 24th, 2026', '٢٤ يونيو ٢٠٢٦')}
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-[1px] bg-wedding-gold/30" />
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="#C8813A" strokeWidth="0.8" opacity="0.4">
              <path d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8Z" />
            </svg>
            <div className="w-12 h-[1px] bg-wedding-gold/30" />
          </div>
        </div>

        {/* Dinner card - for everyone */}
        <div className="rounded-3xl border border-wedding-gold/20 p-8 text-center relative overflow-hidden mb-6"
          style={{ background: 'linear-gradient(135deg, rgba(200,129,58,0.06) 0%, rgba(255,245,233,0.9) 100%)' }}>
          <div className="absolute inset-0 zellige-bg opacity-[0.03]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-wedding-teal/10 border border-wedding-teal/20 mb-5">
              <UtensilsCrossed className="w-3.5 h-3.5 text-wedding-teal" />
              <span className={`text-wedding-teal text-xs ${isArabic ? 'font-amiri text-sm' : 'font-lato tracking-wide'}`}>
                {t('Everyone Welcome', 'الجميع مدعوون')}
              </span>
            </div>

            <h3 className={`text-2xl text-wedding-navy mb-3 ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
              {t('Family Dinner', 'عشاء عائلي')}
            </h3>

            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-wedding-gold/60" />
              <p className={`text-wedding-navy text-base ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
                {t('Wednesday', 'الأربعاء')}
              </p>
            </div>

            <p className="font-playfair text-wedding-gold text-3xl mb-1">
              {t('June 24', '٢٤ يونيو')}
            </p>
            <p className="font-lato text-wedding-navy/40 text-sm tracking-[0.2em] mb-5">
              {isArabic ? '٢٠٢٦' : '2026'}
            </p>

            <div className="w-12 h-[0.5px] bg-wedding-gold/20 mx-auto mb-4" />

            <div className="mb-5 flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-wedding-gold/60" />
              <p className={`text-wedding-navy/70 text-base ${isArabic ? 'font-amiri' : 'font-lato'}`}>
                {t('7:00 PM', '٧:٠٠ مساءً')}
              </p>
            </div>

            <p className={`text-wedding-navy/60 text-base leading-relaxed ${isArabic ? 'font-amiri text-lg' : 'font-lato'}`}>
              {t(
                'Join us for a special dinner to celebrate with family and loved ones as we prepare for our wedding day.',
                'انضموا إلينا لعشاء خاص للاحتفال مع العائلة والأحباء استعداداً ليوم زفافنا.'
              )}
            </p>

            <div className="mt-5 flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5 text-sm text-wedding-teal/85">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span className={isArabic ? 'font-amiri' : 'font-lato'}>
                  {t('Salle Des Fêtes El Bourak Bardo', 'قاعة الأفراح إل بوراك، باردو')}
                </span>
              </div>
              <a
                href="https://share.google/zo0kDUwFPnRwfTah5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-wedding-teal/25 px-5 py-2 text-sm text-wedding-teal transition-colors hover:bg-wedding-teal/10"
              >
                <MapPin className="h-4 w-4" />
                {t('Open in Google Maps', 'فتح في خرائط جوجل')}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Henna/Tea party card */}
        <div className="rounded-3xl border border-wedding-pomegranate/15 p-8 text-center relative overflow-hidden mb-6"
          style={{ background: 'linear-gradient(135deg, rgba(139,26,46,0.04) 0%, rgba(255,245,233,0.9) 100%)' }}>
          <div className="absolute inset-0 zellige-bg opacity-[0.03]" />

          <div className="relative z-10">
            <h3 className={`text-2xl text-wedding-navy mb-3 ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
              {t('Henna Night & Tea Party', 'ليلة الحناء وحفل الشاي')}
            </h3>

            <p className={`text-wedding-navy/50 text-sm mb-3 ${isArabic ? 'font-amiri text-base' : 'font-lato'}`}>
              {t('Following dinner · Salle Des Fêtes El Bourak Bardo', 'بعد العشاء · قاعة الأفراح إل بوراك، باردو')}
            </p>

            <div className="mb-4 flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-wedding-pomegranate/70" />
              <p className={`text-wedding-navy/70 text-base ${isArabic ? 'font-amiri' : 'font-lato'}`}>
                {t('8:00 PM', '٨:٠٠ مساءً')}
              </p>
            </div>

            <div className="mx-auto mb-5 h-[0.5px] w-12 bg-wedding-pomegranate/15" />

            <p className={`text-wedding-navy/60 text-base leading-relaxed ${isArabic ? 'font-amiri text-lg' : 'font-lato'}`}>
              {t(
                'Join us at Salle Des Fêtes El Bourak Bardo for an intimate evening of henna art, tea, sweets, and celebration.',
                'انضموا إلينا في قاعة الأفراح إل بوراك، باردو لأمسية حميمة من فن الحناء والشاي والحلويات والاحتفال.'
              )}
            </p>

            <div className="mt-5 flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5 text-sm text-wedding-pomegranate/80">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span className={isArabic ? 'font-amiri' : 'font-lato'}>
                  {t('Salle Des Fêtes El Bourak Bardo', 'قاعة الأفراح إل بوراك، باردو')}
                </span>
              </div>
              <a
                href="https://share.google/zo0kDUwFPnRwfTah5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-wedding-pomegranate/25 px-5 py-2 text-sm text-wedding-pomegranate transition-colors hover:bg-wedding-pomegranate/10"
              >
                <MapPin className="h-4 w-4" />
                {t('Open in Google Maps', 'فتح في خرائط جوجل')}
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* Decorative henna hand */}
            <div className="mt-6">
              <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto" fill="none" stroke="#C8813A" strokeWidth="0.8" opacity="0.45">
                <path d="M40 10 Q38 25 35 35 Q30 45 32 55 Q33 62 40 70 Q47 62 48 55 Q50 45 45 35 Q42 25 40 10Z" />
                <circle cx="40" cy="35" r="3" />
                <circle cx="40" cy="45" r="2" />
                <circle cx="40" cy="55" r="1.5" />
                <path d="M35 30 Q40 27 45 30" />
                <path d="M33 40 Q40 37 47 40" />
                <path d="M34 50 Q40 47 46 50" />
                <path d="M30 25 L25 18" />
                <path d="M50 25 L55 18" />
                <circle cx="25" cy="18" r="2" />
                <circle cx="55" cy="18" r="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Wedding date reminder card */}
        <div className="rounded-3xl border border-wedding-gold/15 p-6 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(200,129,58,0.04) 0%, rgba(255,245,233,0.85) 100%)' }}>
          <div className="absolute inset-0 zellige-bg opacity-[0.02]" />
          <div className="relative z-10">
            <p className={`text-wedding-navy/40 text-xs mb-2 ${isArabic ? 'font-amiri text-sm' : 'font-lato tracking-[0.2em] uppercase'}`}>
              {t('Wedding Day', 'يوم الزفاف')}
            </p>
            <p className={`text-wedding-navy text-lg ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
              {t('Saturday, June 27, 2026', 'السبت، ٢٧ يونيو ٢٠٢٦')}
            </p>
            <p className="text-wedding-navy/40 text-sm font-lato mt-1">
              {t('7:00 PM · Salle des fêtes Dream', '٧:٠٠ مساءً · قاعة الأفراح دريم')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HennaSection;
