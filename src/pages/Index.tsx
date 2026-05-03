import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import EnvelopeScreen from '@/components/EnvelopeScreen';

import HeroNames from '@/components/HeroNames';
import CelebrationDetailsSection from '@/components/CelebrationDetailsSection';
import DateLocation from '@/components/DateLocation';
import AboutCouple from '@/components/AboutCouple';
import DressCode from '@/components/DressCode';
import RSVPSection from '@/components/RSVPSection';
import WeddingFooter from '@/components/WeddingFooter';
import LanguageToggle from '@/components/LanguageToggle';
import ConfettiEffect from '@/components/ConfettiEffect';

type Screen = 'envelope' | 'transitioning' | 'main';

const Index = () => {
  const [screen, setScreen] = useState<Screen>('envelope');
  const [shakeConfetti, setShakeConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preload audio so it plays instantly on tap
  useEffect(() => {
    const audio = new Audio('/music/background.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'auto';
    audioRef.current = audio;
  }, []);

  // Pause music when tab/browser is not visible, resume when back
  useEffect(() => {
    const handleVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) {
        audio.pause();
      } else if (audio.currentTime > 0) {
        audio.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const handleEnvelopeOpen = useCallback(() => {
    // Play music immediately on tap
    audioRef.current?.play().catch(() => {});

    setScreen('transitioning');
    setTimeout(() => setScreen('main'), 1400);
  }, []);

  // Shake gesture detection
  useEffect(() => {
    let lastX = 0, lastY = 0, lastZ = 0;
    let lastTime = 0;

    const handleMotion = (e: DeviceMotionEvent) => {
      const acc = e.accelerationIncludingGravity;
      if (!acc || acc.x === null || acc.y === null || acc.z === null) return;
      const now = Date.now();
      if (now - lastTime < 100) return;
      const dx = Math.abs(acc.x - lastX);
      const dy = Math.abs(acc.y - lastY);
      const dz = Math.abs(acc.z - lastZ);
      if (dx + dy + dz > 30) {
        setShakeConfetti(true);
        setTimeout(() => setShakeConfetti(false), 3000);
      }
      lastX = acc.x; lastY = acc.y; lastZ = acc.z; lastTime = now;
    };

    window.addEventListener('devicemotion', handleMotion);
    return () => window.removeEventListener('devicemotion', handleMotion);
  }, []);

  const showMain = screen === 'transitioning' || screen === 'main';

  return (
    <div className="no-scrollbar">
      {shakeConfetti && <ConfettiEffect />}

      {/* Main content renders underneath during transition */}
      {showMain && (
        <>
          <LanguageToggle />
          <HeroNames />
          <CelebrationDetailsSection />
          <DateLocation showOnly={['wedding']} />
          <AboutCouple />
          <DressCode />
          <RSVPSection />
          <WeddingFooter />
        </>
      )}

      {/* Envelope overlays on top and fades out */}
      {screen !== 'main' && <EnvelopeScreen onOpen={handleEnvelopeOpen} />}
    </div>
  );
};

export default Index;