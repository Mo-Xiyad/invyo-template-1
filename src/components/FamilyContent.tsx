import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Calendar, Clock, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const FamilyContent = () => {
  const { t, isArabic } = useLanguage();

  return (
    <div className="min-h-screen">

      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-16 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #FFF5E9 0%, #FCE8D0 20%, #F8DFC2 40%, #FCE8D0 70%, #FFF5E9 100%)' }}>

        <div className="absolute inset-0 opacity-[0.08]"
          style={{ background: 'radial-gradient(ellipse at 20% 30%, #D4876C 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, #C8813A 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, #85CDCA 0%, transparent 40%)' }} />
        <div className="absolute inset-0 zellige-bg-rich opacity-[0.05]" />

        {/* Henna corner decorations */}
        <div className="absolute top-12 left-4 opacity-20">
          <svg viewBox="0 0 80 120" width="50" fill="none" stroke="#8B4513" strokeWidth="0.6">
            <path d="M40 0 Q35 20 25 35 Q15 50 18 65 Q20 75 15 95 Q12 105 10 120" />
            <circle cx="25" cy="35" r="5" />
            <circle cx="25" cy="35" r="2.5" fill="#8B4513" fillOpacity="0.1" />
            <path d="M20 28 Q25 24 30 28" />
            <path d="M16 45 Q22 40 28 45" />
            <circle cx="18" cy="65" r="3.5" />
            <path d="M15 58 Q18 55 21 58" />
            <circle cx="30" cy="15" r="1.5" fill="#8B4513" fillOpacity="0.15" />
            <circle cx="35" cy="25" r="1" fill="#8B4513" fillOpacity="0.12" />
            <circle cx="22" cy="50" r="1.5" fill="#8B4513" fillOpacity="0.12" />
          </svg>
        </div>
        <div className="absolute top-12 right-4 opacity-20 -scale-x-100">
          <svg viewBox="0 0 80 120" width="50" fill="none" stroke="#8B4513" strokeWidth="0.6">
            <path d="M40 0 Q35 20 25 35 Q15 50 18 65 Q20 75 15 95 Q12 105 10 120" />
            <circle cx="25" cy="35" r="5" />
            <circle cx="25" cy="35" r="2.5" fill="#8B4513" fillOpacity="0.1" />
            <path d="M20 28 Q25 24 30 28" />
            <path d="M16 45 Q22 40 28 45" />
            <circle cx="18" cy="65" r="3.5" />
            <path d="M15 58 Q18 55 21 58" />
          </svg>
        </div>

        {/* Teapot decoration */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-15">
          <svg viewBox="0 0 120 60" width="100" fill="none" stroke="#C8813A" strokeWidth="0.7">
            <path d="M40 55 Q30 55 25 45 Q20 35 25 25 Q30 15 40 12 L80 12 Q90 15 95 25 Q100 35 95 45 Q90 55 80 55 Z" />
            <path d="M95 30 L110 25 Q115 30 110 35 L95 35" />
            <path d="M40 12 Q35 5 40 2 Q50 -2 55 5 L55 12" />
            <path d="M55 30 Q60 20 65 30 Q70 40 60 40 Q50 40 55 30" fill="#C8813A" fillOpacity="0.06" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-sm animate-fade-in-up">
          <p className="font-amiri text-wedding-navy/25 text-sm mb-6 tracking-wide" dir="rtl">بسم الله الرحمن الرحيم</p>

          {/* Henna hand ornament */}
          <svg viewBox="0 0 60 70" className="w-14 h-16 mb-5" fill="none" stroke="#C8813A" strokeWidth="0.6" opacity="0.4">
            <path d="M30 5 Q28 18 24 28 Q18 40 21 50 Q23 58 30 65 Q37 58 39 50 Q42 40 36 28 Q32 18 30 5Z" />
            <circle cx="30" cy="28" r="4" />
            <circle cx="30" cy="28" r="2" fill="#C8813A" fillOpacity="0.15" />
            <circle cx="30" cy="40" r="3" />
            <circle cx="30" cy="50" r="2" />
            <path d="M24 22 Q30 18 36 22" />
            <path d="M22 34 Q30 30 38 34" />
            <path d="M23 45 Q30 42 37 45" />
            <path d="M24 20 L18 10" />
            <path d="M36 20 L42 10" />
            <circle cx="18" cy="10" r="2.5" />
            <circle cx="42" cy="10" r="2.5" />
          </svg>

          <p className={`text-sm text-wedding-navy/40 mb-3 tracking-[0.3em] uppercase text-center ${isArabic ? 'font-amiri text-base tracking-normal' : 'font-lato'}`}>
            {t('You are cordially invited to', 'تتشرفون بدعوتكم لحضور')}
          </p>

          <h1 className={`text-center leading-tight mb-2 ${isArabic ? 'font-amiri text-[36px]' : 'font-playfair text-[34px]'} text-wedding-navy`}>
            {t('An Evening of Celebration', 'أمسية احتفالية')}
          </h1>

          <p className={`text-center mb-6 ${isArabic ? 'font-amiri text-lg text-wedding-navy/50' : 'font-lato text-sm text-wedding-navy/40 tracking-wide'}`}>
            {t('Dinner · Henna · Tea Party', 'عشاء · حناء · حفل شاي')}
          </p>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-[0.5px] bg-gradient-to-r from-transparent to-wedding-gold/40" />
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="#C8813A" fillOpacity="0.3">
              <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z" />
            </svg>
            <div className="w-10 h-[0.5px] bg-gradient-to-l from-transparent to-wedding-gold/40" />
          </div>

          {isArabic ? (
            <p className="font-amiri text-2xl text-wedding-navy text-center" dir="rtl">عمر محمود <span className="text-wedding-pomegranate/70 mx-1">و</span> ليلى منصور</p>
          ) : (
            <p className="font-playfair text-2xl text-wedding-navy text-center">Omar Mahmoud <span className="text-wedding-pomegranate/70 italic mx-1">&</span> Layla Mansour</p>
          )}

          <div className="mt-8 px-8 py-3 rounded-full border border-wedding-gold/20 bg-wedding-gold/[0.04]">
            <p className="font-lato text-wedding-navy/50 text-sm tracking-[0.15em]">
              {t('June 24, 2026 · Tunis', '٢٤ يونيو ٢٠٢٦ · تونس')}
            </p>
          </div>

          <CountdownTimer targetDate="2026-06-24T19:00:00" />
        </div>

        <div className="absolute bottom-7 animate-bounce-down">
          <ChevronDown className="w-6 h-6 text-wedding-gold/40" />
        </div>
      </section>

      {/* ===== FAMILY DINNER — WARM SAGE MEDITERRANEAN ===== */}
      <section className="relative px-6 py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F4F1EB 0%, #EDE9E0 20%, #E8E3D8 50%, #EDE9E0 80%, #F4F1EB 100%)' }}>

        {/* Warm olive/sage wash */}
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ background: 'radial-gradient(ellipse at 30% 30%, #9CAF88 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, #C8B890 0%, transparent 50%)' }} />

        {/* Subtle texture */}
        <div className="absolute inset-0 zellige-bg-rich opacity-[0.03]" />

        {/* Olive branch decorations — top corners */}
        <div className="absolute top-8 left-4 opacity-20">
          <svg viewBox="0 0 80 100" width="50" fill="none" stroke="#6B7F5E" strokeWidth="0.7">
            <path d="M45 0 Q40 25 30 45 Q22 60 25 75 Q27 85 22 100" />
            <ellipse cx="32" cy="25" rx="8" ry="4.5" transform="rotate(-35 32 25)" fill="#6B7F5E" fillOpacity="0.15" />
            <ellipse cx="25" cy="45" rx="7" ry="4" transform="rotate(10 25 45)" fill="#6B7F5E" fillOpacity="0.12" />
            <ellipse cx="35" cy="12" rx="6" ry="3.5" transform="rotate(-50 35 12)" fill="#6B7F5E" fillOpacity="0.15" />
            <ellipse cx="22" cy="65" rx="7" ry="4" transform="rotate(20 22 65)" fill="#6B7F5E" fillOpacity="0.1" />
            {/* Olives */}
            <circle cx="38" cy="18" r="2.5" fill="#5A6B4E" fillOpacity="0.2" />
            <circle cx="28" cy="38" r="2" fill="#5A6B4E" fillOpacity="0.18" />
            <circle cx="20" cy="58" r="2.5" fill="#5A6B4E" fillOpacity="0.15" />
          </svg>
        </div>
        <div className="absolute top-8 right-4 opacity-20 -scale-x-100">
          <svg viewBox="0 0 80 100" width="50" fill="none" stroke="#6B7F5E" strokeWidth="0.7">
            <path d="M45 0 Q40 25 30 45 Q22 60 25 75 Q27 85 22 100" />
            <ellipse cx="32" cy="25" rx="8" ry="4.5" transform="rotate(-35 32 25)" fill="#6B7F5E" fillOpacity="0.15" />
            <ellipse cx="25" cy="45" rx="7" ry="4" transform="rotate(10 25 45)" fill="#6B7F5E" fillOpacity="0.12" />
            <ellipse cx="35" cy="12" rx="6" ry="3.5" transform="rotate(-50 35 12)" fill="#6B7F5E" fillOpacity="0.15" />
            <circle cx="38" cy="18" r="2.5" fill="#5A6B4E" fillOpacity="0.2" />
            <circle cx="28" cy="38" r="2" fill="#5A6B4E" fillOpacity="0.18" />
          </svg>
        </div>

        {/* Top decorative border — olive green line */}
        <div className="absolute top-0 inset-x-0 h-1.5"
          style={{ background: 'linear-gradient(90deg, transparent 10%, #9CAF88 30%, #C8B890 50%, #9CAF88 70%, transparent 90%)', opacity: 0.2 }} />

        <div className="max-w-sm mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="mx-auto mb-5 w-16 h-16 rounded-full border border-[#9CAF88]/25 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(156,175,136,0.08), rgba(200,184,144,0.08))' }}>
              <UtensilsCrossed className="w-7 h-7 text-[#6B7F5E]/60" />
            </div>
            <h2 className={`text-3xl text-wedding-navy mb-2 ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
              {t('Family Dinner', 'عشاء عائلي')}
            </h2>
            <p className={`text-wedding-navy/35 text-sm ${isArabic ? 'font-amiri text-base' : 'font-lato tracking-[0.2em] uppercase'}`}>
              {t('Everyone Welcome', 'الجميع مدعوون')}
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-14 h-[0.5px] bg-[#9CAF88]/30" />
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" stroke="#6B7F5E" strokeWidth="0.8" opacity="0.4">
                <path d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8Z" />
              </svg>
              <div className="w-14 h-[0.5px] bg-[#9CAF88]/30" />
            </div>
          </div>

          {/* Date & Time card — warm parchment with sage accents */}
          <div className="rounded-3xl border border-[#9CAF88]/20 p-10 text-center relative overflow-hidden mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(244,241,235,0.97), rgba(255,255,255,0.92))', boxShadow: '0 6px 40px rgba(107,127,94,0.08)' }}>
            
            {/* Inner decorative border */}
            <div className="absolute inset-3 rounded-2xl border border-[#9CAF88]/10" />
            
            {/* Corner ornaments — top left */}
            <div className="absolute top-4 left-4 opacity-[0.12]">
              <svg viewBox="0 0 50 50" width="40" fill="none" stroke="#6B7F5E" strokeWidth="0.5">
                <path d="M0 0 Q25 5 40 20 Q45 25 50 50" />
                <path d="M0 8 Q20 12 32 24 Q38 30 42 50" />
                <circle cx="20" cy="12" r="2.5" fill="#9CAF88" fillOpacity="0.2" />
                <circle cx="32" cy="24" r="2" fill="#9CAF88" fillOpacity="0.15" />
                <path d="M8 2 Q12 8 10 14" />
                <ellipse cx="14" cy="8" rx="4" ry="2" transform="rotate(-30 14 8)" fill="#6B7F5E" fillOpacity="0.08" />
              </svg>
            </div>
            {/* Corner ornaments — top right */}
            <div className="absolute top-4 right-4 opacity-[0.12] -scale-x-100">
              <svg viewBox="0 0 50 50" width="40" fill="none" stroke="#6B7F5E" strokeWidth="0.5">
                <path d="M0 0 Q25 5 40 20 Q45 25 50 50" />
                <path d="M0 8 Q20 12 32 24 Q38 30 42 50" />
                <circle cx="20" cy="12" r="2.5" fill="#9CAF88" fillOpacity="0.2" />
                <circle cx="32" cy="24" r="2" fill="#9CAF88" fillOpacity="0.15" />
                <path d="M8 2 Q12 8 10 14" />
              </svg>
            </div>
            {/* Corner ornaments — bottom left */}
            <div className="absolute bottom-4 left-4 opacity-[0.12] -scale-y-100">
              <svg viewBox="0 0 50 50" width="40" fill="none" stroke="#6B7F5E" strokeWidth="0.5">
                <path d="M0 0 Q25 5 40 20 Q45 25 50 50" />
                <path d="M0 8 Q20 12 32 24 Q38 30 42 50" />
                <circle cx="20" cy="12" r="2.5" fill="#9CAF88" fillOpacity="0.2" />
              </svg>
            </div>
            {/* Corner ornaments — bottom right */}
            <div className="absolute bottom-4 right-4 opacity-[0.12] scale-x-[-1] scale-y-[-1]">
              <svg viewBox="0 0 50 50" width="40" fill="none" stroke="#6B7F5E" strokeWidth="0.5">
                <path d="M0 0 Q25 5 40 20 Q45 25 50 50" />
                <path d="M0 8 Q20 12 32 24 Q38 30 42 50" />
                <circle cx="20" cy="12" r="2.5" fill="#9CAF88" fillOpacity="0.2" />
              </svg>
            </div>

            {/* Zellige-inspired geometric pattern overlay */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%236B7F5E' stroke-width='0.5'/%3E%3Ccircle cx='20' cy='20' r='3' fill='none' stroke='%236B7F5E' stroke-width='0.3'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} />

            {/* Side decorative lines */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 h-2/3 w-[0.5px] bg-gradient-to-b from-transparent via-[#9CAF88]/15 to-transparent" />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 h-2/3 w-[0.5px] bg-gradient-to-b from-transparent via-[#9CAF88]/15 to-transparent" />

            <div className="relative z-10">
              {/* Ornate calendar icon with arch */}
              <div className="mx-auto mb-5 w-12 h-12 rounded-full border border-[#9CAF88]/20 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(156,175,136,0.06), rgba(200,184,144,0.06))' }}>
                <Calendar className="w-5 h-5 text-[#6B7F5E]/55" />
              </div>
              
              <p className={`text-wedding-navy/60 text-base mb-1 ${isArabic ? 'font-amiri text-lg' : 'font-playfair'}`}>
                {t('Wednesday', 'الأربعاء')}
              </p>
              <p className={`text-wedding-navy text-5xl my-3 tracking-wide ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
                {t('24', '٢٤')}
              </p>
              <p className={`text-wedding-navy/50 text-lg mb-1 ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
                {t('June 2026', 'يونيو ٢٠٢٦')}
              </p>

              {/* Ornate divider */}
              <div className="flex items-center justify-center gap-2 my-5">
                <div className="w-8 h-[0.5px] bg-[#9CAF88]/25" />
                <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="#6B7F5E" strokeWidth="0.6" opacity="0.35">
                  <path d="M8 1L10 6L15 8L10 10L8 15L6 10L1 8L6 6Z" />
                  <circle cx="8" cy="8" r="1.5" fill="#9CAF88" fillOpacity="0.2" />
                </svg>
                <div className="w-8 h-[0.5px] bg-[#9CAF88]/25" />
              </div>

              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-[#6B7F5E]/45" />
                <p className={`text-wedding-navy/55 text-lg ${isArabic ? 'font-amiri' : 'font-lato'}`}>
                  {t('7:00 PM', '٧:٠٠ مساءً')}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="px-2 py-6 text-center">
            <p className={`text-wedding-navy/50 text-base leading-relaxed ${isArabic ? 'font-amiri text-lg' : 'font-lato'}`}>
              {t(
                'Join us for an intimate family dinner as we gather to celebrate and share in the joy before our wedding day.',
                'انضموا إلينا لعشاء عائلي حميم حيث نجتمع للاحتفال ومشاركة الفرحة قبل يوم زفافنا.'
              )}
            </p>
          </div>

          {/* Venue card with map */}
          {/* Venue card */}
          <div className="rounded-3xl border border-[#9CAF88]/15 p-8 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(244,241,235,0.95), rgba(255,255,255,0.9))', boxShadow: '0 4px 30px rgba(107,127,94,0.06)' }}>
            <div className="relative z-10">
              <MapPin className="mx-auto mb-4 h-6 w-6 text-[#6B7F5E]/50" />
              <p className={`mb-2 text-xl text-wedding-navy ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
                {t('Salle Des Fêtes El Bourak Bardo', 'قاعة الأفراح إل بوراك، باردو')}
              </p>
              <p className="mb-5 font-lato text-base text-wedding-navy/40">
                {t('Tunis, Tunisia', 'تونس العاصمة، تونس')}
              </p>
              <a
                href="https://share.google/zo0kDUwFPnRwfTah5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#9CAF88]/30 px-5 py-2 text-sm text-[#6B7F5E] transition-colors hover:bg-[#9CAF88]/10"
              >
                <MapPin className="h-4 w-4" />
                {t('Open in Google Maps', 'فتح في خرائط جوجل')}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 inset-x-0 h-1.5"
          style={{ background: 'linear-gradient(90deg, transparent 10%, #9CAF88 30%, #C8B890 50%, #9CAF88 70%, transparent 90%)', opacity: 0.2 }} />
      </section>

      {/* ===== HENNA & TEA PARTY — LADIES ONLY ===== */}
      <section className="relative px-6 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #FFF5E9 0%, #FCE8D0 30%, #F8DFC2 50%, #FCE8D0 70%, #FFF5E9 100%)' }}>

        <div className="absolute inset-0 opacity-[0.1]"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, #D4876C 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, #C8813A 0%, transparent 50%)' }} />
        <div className="absolute inset-0 zellige-bg-rich opacity-[0.04]" />

        {/* Henna corner art */}
        <div className="absolute top-8 left-6 opacity-15">
          <svg viewBox="0 0 60 80" width="40" fill="none" stroke="#8B4513" strokeWidth="0.6">
            <path d="M30 0 Q28 20 15 35 Q8 45 12 60 Q14 70 10 80" />
            <circle cx="15" cy="35" r="4" />
            <circle cx="15" cy="35" r="2" fill="#8B4513" fillOpacity="0.1" />
            <path d="M12 28 Q15 25 18 28" />
            <path d="M10 42 Q15 38 20 42" />
            <circle cx="25" cy="20" r="3" />
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
          <div className="mb-10 text-center">
            <Sparkles className="mx-auto mb-4 h-8 w-8 text-wedding-pomegranate/50" />
            <h2 className={`mb-2 text-3xl text-wedding-navy ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
              {t('Henna Night & Tea Party', 'ليلة الحناء وحفل الشاي')}
            </h2>
            <p className={`mb-3 text-sm text-wedding-navy/45 ${isArabic ? 'font-amiri text-base' : 'font-lato tracking-wide'}`}>
              {t('Following dinner · Salle Des Fêtes El Bourak Bardo', 'بعد العشاء · قاعة الأفراح إل بوراك، باردو')}
            </p>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-wedding-pomegranate/70" />
              <p className={`text-base text-wedding-navy/70 ${isArabic ? 'font-amiri' : 'font-lato'}`}>
                {t('8:00 PM', '٨:٠٠ مساءً')}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-[1px] bg-wedding-pomegranate/20" />
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="#8B1A2E" strokeWidth="0.8" opacity="0.3">
                <path d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8Z" />
              </svg>
              <div className="w-12 h-[1px] bg-wedding-pomegranate/20" />
            </div>
          </div>

          {/* Henna party card */}
          <div className="rounded-3xl border border-wedding-pomegranate/15 p-8 text-center relative overflow-hidden mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(139,26,46,0.04) 0%, rgba(255,245,233,0.9) 100%)' }}>
            <div className="absolute inset-0 zellige-bg opacity-[0.03]" />
            <div className="relative z-10">
              <p className={`text-wedding-navy/60 text-base leading-relaxed mb-6 ${isArabic ? 'font-amiri text-lg' : 'font-lato'}`}>
                {t(
                  'Join us at Salle Des Fêtes El Bourak Bardo for an intimate evening of henna art, Tunisian tea, sweets, and celebration.',
                  'انضموا إلينا في قاعة الأفراح إل بوراك، باردو لأمسية حميمة من فن الحناء والشاي التونسي والحلويات والاحتفال.'
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

              {/* Activity icons */}
              <div className="flex justify-center gap-8 mb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full border border-wedding-gold/20 bg-wedding-gold/[0.06] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#8B4513" strokeWidth="1.2" opacity="0.6">
                      <path d="M12 3 Q10 10 8 14 Q5 20 8 22 Q10 23 12 22 Q14 23 16 22 Q19 20 16 14 Q14 10 12 3Z" />
                      <circle cx="12" cy="14" r="2" />
                    </svg>
                  </div>
                  <span className={`text-[11px] text-wedding-navy/45 ${isArabic ? 'font-amiri text-xs' : 'font-lato'}`}>
                    {t('Henna', 'حناء')}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full border border-wedding-gold/20 bg-wedding-gold/[0.06] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#C8813A" strokeWidth="1.2" opacity="0.6">
                      <path d="M8 20 Q6 20 5 18 Q4 16 5 14 Q6 10 8 8 L16 8 Q18 10 19 14 Q20 16 19 18 Q18 20 16 20 Z" />
                      <path d="M19 12 L22 10 Q23 12 22 14 L19 14" />
                      <path d="M10 8 Q10 4 12 3 Q14 4 14 8" />
                      <line x1="8" y1="20" x2="16" y2="20" />
                      <path d="M7 22 L17 22" />
                    </svg>
                  </div>
                  <span className={`text-[11px] text-wedding-navy/45 ${isArabic ? 'font-amiri text-xs' : 'font-lato'}`}>
                    {t('Tea', 'شاي')}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full border border-wedding-gold/20 bg-wedding-gold/[0.06] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#D4876C" strokeWidth="1.2" opacity="0.6">
                      <circle cx="12" cy="10" r="5" />
                      <path d="M8 14 Q12 20 16 14" />
                      <circle cx="12" cy="10" r="2" fill="#D4876C" fillOpacity="0.15" />
                      <path d="M7 10 L3 8" />
                      <path d="M17 10 L21 8" />
                    </svg>
                  </div>
                  <span className={`text-[11px] text-wedding-navy/45 ${isArabic ? 'font-amiri text-xs' : 'font-lato'}`}>
                    {t('Sweets', 'حلويات')}
                  </span>
                </div>
              </div>

              {/* Decorative henna hand */}
              <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto" fill="none" stroke="#C8813A" strokeWidth="0.8" opacity="0.35">
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
      </section>

      {/* ===== FOOTER ===== */}
      <section className="relative px-6 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FDFBF7 30%, #FAF6EF 50%, #FDFBF7 70%, #FFFFFF 100%)' }}>
        <div className="absolute inset-0 zellige-bg-rich opacity-[0.03]" />
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(200,129,58,0.3), transparent 60%)' }} />

        <div className="relative z-10 text-center max-w-sm mx-auto">
          <svg viewBox="0 0 120 120" className="w-28 h-28 mx-auto mb-8" fill="none" stroke="#C8813A" strokeWidth="0.5">
            <circle cx="60" cy="60" r="55" opacity="0.15" />
            <circle cx="60" cy="60" r="40" opacity="0.1" />
            <circle cx="60" cy="60" r="25" opacity="0.15" />
            <path d="M60 10L65 42L90 25L70 48L110 55L70 62L90 90L65 72L60 110L55 72L30 90L50 62L10 55L50 48L30 25L55 42Z"
              strokeWidth="0.6" opacity="0.2" />
            <circle cx="60" cy="60" r="12" opacity="0.2" />
            <path d="M60 48L64 56L72 58L66 63L67 72L60 68L53 72L54 63L48 58L56 56Z" fill="#C8813A" fillOpacity="0.08" stroke="#C8813A" strokeWidth="0.4" />
          </svg>

          <p className={`text-xl text-wedding-navy/50 mb-2 ${isArabic ? 'font-amiri' : 'font-lato'}`}>
            {t('With love & blessings,', 'مع الحب والبركة،')}
          </p>
          <p className={`text-2xl text-wedding-navy mt-1 ${isArabic ? 'font-amiri' : 'font-playfair'}`}>
            {t('Omar & Layla', 'عمر وليلى')}
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-12 h-[1px] bg-wedding-gold/15" />
            <svg viewBox="0 0 12 12" className="w-3 h-3" fill="#C8813A" fillOpacity="0.2">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
            </svg>
            <div className="w-12 h-[1px] bg-wedding-gold/15" />
          </div>

          <p className="text-wedding-navy/20 text-sm font-lato mt-6 tracking-[0.2em]">#OmarAndLayla2026</p>
        </div>
      </section>
    </div>
  );
};

export default FamilyContent;
