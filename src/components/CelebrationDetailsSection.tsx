import { useLanguage } from '@/contexts/LanguageContext';
import CountdownTimer from '@/components/CountdownTimer';
import weddingCouple from '@/assets/wedding-couple.gif';

/**
 * Breathing room between the hero names and the rest of the page:
 * honour line, countdown, and date — Mediterranean / sea-garden tone.
 */
const CelebrationDetailsSection = () => {
  const { t, isArabic } = useLanguage();

  return (
    <section
      className="relative px-6 py-16 md:py-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #FAF7F0 0%, #F0F6F2 38%, #E8F1EC 72%, #E2EDE6 100%)',
      }}
    >
      {/* Soft top blend from hero footer paper (#FDF6EF) */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(253, 246, 239, 0.92) 0%, transparent 100%)',
        }}
      />

      {/* Sea haze + warm light */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 20%, rgba(61, 107, 94, 0.08), transparent 60%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(200, 129, 58, 0.06), transparent 55%)',
        }}
      />
      <div className="absolute inset-0 zellige-bg-dense opacity-[0.05]" />

      {/* Wave line — transition motif */}
      <div className="absolute top-0 inset-x-0 h-10 overflow-hidden opacity-80">
        <svg viewBox="0 0 1440 40" className="w-full h-full min-w-[800px]" preserveAspectRatio="none" fill="none" aria-hidden>
          <path
            d="M0 20 Q180 8 360 20 T720 20 T1080 20 T1440 20"
            stroke="#3D6B5E"
            strokeWidth="0.75"
            strokeOpacity="0.22"
          />
          <path
            d="M0 28 Q200 14 400 28 T800 28 T1200 28 T1440 28"
            stroke="#C8813A"
            strokeWidth="0.5"
            strokeOpacity="0.18"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center pt-4">
        {/* Wedding couple illustration */}
        <div className="flex justify-center mb-8">
          <img
            src={weddingCouple}
            alt="Wedding couple illustration"
            className="w-40 h-auto"
            loading="lazy"
          />
        </div>

        <p
          className={`text-[#1A1A2E]/50 leading-relaxed text-base md:text-lg ${isArabic ? 'font-amiri text-lg md:text-xl' : 'font-lato tracking-wide'}`}
        >
          {t(
            'We would be honoured by your presence at the celebration of our marriage',
            'يسعدنا ويشرفنا حضوركم حفل زفافنا',
          )}
        </p>

        <div className="mt-10 rounded-3xl border border-[#3D6B5E]/15 bg-white/35 backdrop-blur-md px-4 py-8 shadow-[0_8px_32px_rgba(26,26,46,0.04)]">
          <p
            className={`text-[11px] uppercase tracking-[0.28em] text-[#3D6B5E]/55 mb-6 ${isArabic ? 'font-amiri normal-case tracking-normal text-sm' : 'font-lato'}`}
          >
            {t('Until the celebration', 'العد التنازلي')}
          </p>
          <CountdownTimer className="mt-0" />
        </div>

        <div className="mt-10 inline-flex px-10 py-3.5 rounded-full border border-[#3D6B5E]/20 bg-gradient-to-br from-white/50 to-[#C8813A]/[0.06] shadow-sm">
          <p className="font-lato text-[#1A1A2E]/55 text-sm tracking-[0.18em]">
            {t('June 27, 2026 · Tunis', '27 جوان 2026 · تونس')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CelebrationDetailsSection;
