import { useState } from 'react';

const DoorEnvelopeScreen = ({ onOpen }: { onOpen: () => void }) => {
  const [stage, setStage] = useState<'sealed' | 'knocking' | 'opening' | 'revealing' | 'fading'>('sealed');

  const handleKnock = () => {
    if (stage !== 'sealed') return;
    setStage('knocking');
    setTimeout(() => setStage('opening'), 900);
    setTimeout(() => setStage('revealing'), 2800);
    setTimeout(() => setStage('fading'), 4800);
    setTimeout(onOpen, 5800);
  };

  const isOpening = stage === 'opening' || stage === 'revealing' || stage === 'fading';
  const isRevealing = stage === 'revealing' || stage === 'fading';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity ${
        stage === 'fading' ? 'duration-[1000ms] opacity-0' : 'duration-500 opacity-100'
      }`}
      style={{ background: 'linear-gradient(180deg, #F5ECD7 0%, #EDE4CC 30%, #E8D5B0 100%)' }}
    >
      {/* Whitewashed wall texture */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(255,252,245,0.6) 0%, transparent 70%)',
      }} />
      
      {/* Subtle wall cracks/texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Bougainvillea vine decorations - top corners */}
      <div className="absolute top-0 left-0 w-40 h-48 pointer-events-none">
        <svg viewBox="0 0 160 192" fill="none" className="w-full h-full">
          <path d="M0 0C30 20 50 60 45 100C42 120 30 140 20 160" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.4"/>
          <path d="M10 0C35 25 48 55 44 85C40 110 28 130 18 150" stroke="#3A6B4A" strokeWidth="1" opacity="0.3"/>
          {/* Leaves */}
          {[{x:30,y:40},{x:42,y:70},{x:38,y:100},{x:28,y:130},{x:20,y:50},{x:45,y:85}].map((p, i) => (
            <ellipse key={i} cx={p.x} cy={p.y} rx="8" ry="5" fill="#3A6B4A" opacity="0.25" 
              transform={`rotate(${-30 + i*15} ${p.x} ${p.y})`}/>
          ))}
          {/* Bougainvillea flowers */}
          {[{x:25,y:35,c:'#C43250'},{x:40,y:55,c:'#D4457A'},{x:48,y:80,c:'#C43250'},{x:35,y:110,c:'#D4457A'},{x:22,y:140,c:'#C43250'},{x:15,y:60,c:'#B8285A'}].map((p, i) => (
            <g key={`f${i}`}>
              <circle cx={p.x} cy={p.y} r="4" fill={p.c} opacity="0.35"/>
              <circle cx={p.x+5} cy={p.y-3} r="3.5" fill={p.c} opacity="0.3"/>
              <circle cx={p.x-4} cy={p.y-4} r="3" fill={p.c} opacity="0.25"/>
            </g>
          ))}
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-40 h-48 pointer-events-none" style={{ transform: 'scaleX(-1)' }}>
        <svg viewBox="0 0 160 192" fill="none" className="w-full h-full">
          <path d="M0 0C30 20 50 60 45 100C42 120 30 140 20 160" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.4"/>
          <path d="M10 0C35 25 48 55 44 85C40 110 28 130 18 150" stroke="#3A6B4A" strokeWidth="1" opacity="0.3"/>
          {[{x:30,y:40},{x:42,y:70},{x:38,y:100},{x:28,y:130},{x:20,y:50},{x:45,y:85}].map((p, i) => (
            <ellipse key={i} cx={p.x} cy={p.y} rx="8" ry="5" fill="#3A6B4A" opacity="0.25"
              transform={`rotate(${-30 + i*15} ${p.x} ${p.y})`}/>
          ))}
          {[{x:25,y:35,c:'#C43250'},{x:40,y:55,c:'#D4457A'},{x:48,y:80,c:'#C43250'},{x:35,y:110,c:'#D4457A'},{x:22,y:140,c:'#C43250'}].map((p, i) => (
            <g key={`f${i}`}>
              <circle cx={p.x} cy={p.y} r="4" fill={p.c} opacity="0.35"/>
              <circle cx={p.x+5} cy={p.y-3} r="3.5" fill={p.c} opacity="0.3"/>
              <circle cx={p.x-4} cy={p.y-4} r="3" fill={p.c} opacity="0.25"/>
            </g>
          ))}
        </svg>
      </div>

      {/* ===== THE TUNISIAN DOOR ===== */}
      <div className="relative" style={{ width: '300px', height: '520px', perspective: '1200px' }}>
        
        {/* Door frame - stone archway */}
        <div className="absolute -inset-4 rounded-t-[160px]" style={{
          background: 'linear-gradient(180deg, #D4C5A0 0%, #C8B890 50%, #BCA87A 100%)',
          boxShadow: '0 0 0 3px #B8A570, 0 20px 60px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
        }}>
          {/* Arch keystone detail */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8" style={{
            background: 'linear-gradient(180deg, #C8B890, #BCA87A)',
            borderRadius: '0 0 8px 8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}/>
          
          {/* Carved stone pattern around arch */}
          <svg viewBox="0 0 308 528" className="absolute inset-0 w-full h-full" fill="none">
            {/* Arch border pattern - zellige inspired */}
            <path d="M154 8 Q280 8 296 160 L296 520 L12 520 L12 160 Q12 8 154 8" 
              stroke="#C8813A" strokeWidth="0.8" opacity="0.3" fill="none"/>
            <path d="M154 16 Q272 16 288 160 L288 512 L20 512 L20 160 Q20 16 154 16"
              stroke="#C8813A" strokeWidth="0.5" opacity="0.2" fill="none"/>
            
            {/* Small zellige stars around the arch */}
            {[0, 30, 60, 90, 120, 150, 180].map((angle, i) => {
              const rad = (angle - 90) * Math.PI / 180;
              const cx = 154 + 145 * Math.cos(rad);
              const cy = 160 - 145 * Math.sin(rad);
              if (cy < 10) return null;
              return (
                <g key={i} transform={`translate(${cx},${cy})`}>
                  <path d="M0 -4L1.5 -1.5L4 0L1.5 1.5L0 4L-1.5 1.5L-4 0L-1.5 -1.5Z"
                    stroke="#C8813A" strokeWidth="0.5" fill="#C8813A" fillOpacity="0.15" opacity="0.4"/>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Door panel - LEFT */}
        <div 
          className="absolute top-0 left-0 w-1/2 h-full origin-left rounded-tl-[150px]"
          style={{
            transformStyle: 'preserve-3d',
            transform: isOpening ? 'rotateY(-110deg)' : 'rotateY(0deg)',
            transition: isOpening ? 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            zIndex: isOpening ? 5 : 20,
          }}
        >
          <div className="w-full h-full rounded-tl-[150px] overflow-hidden" style={{
            background: 'linear-gradient(180deg, #1E6B9A 0%, #1A5F8A 30%, #165580 60%, #124A70 100%)',
            boxShadow: 'inset -2px 0 8px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.1)',
          }}>
            {/* Door nail studs */}
            {[
              {x: '20%', y: '25%'}, {x: '60%', y: '25%'},
              {x: '20%', y: '40%'}, {x: '60%', y: '40%'},
              {x: '20%', y: '55%'}, {x: '60%', y: '55%'},
              {x: '20%', y: '70%'}, {x: '60%', y: '70%'},
              {x: '20%', y: '85%'}, {x: '60%', y: '85%'},
            ].map((pos, i) => (
              <div key={i} className="absolute w-3 h-3 rounded-full" style={{
                left: pos.x, top: pos.y,
                background: 'radial-gradient(circle at 35% 35%, #E8D5B0, #C8A060, #A08040)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)',
              }}/>
            ))}
            
            {/* Zellige panel - top arch area */}
            <div className="absolute top-[8%] left-[12%] right-[8%] h-[18%]">
              <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
                <path d="M60 5L75 25L60 45L45 25Z" stroke="#7EC8E3" strokeWidth="0.8" opacity="0.4"/>
                <path d="M30 20L45 40L30 60L15 40Z" stroke="#7EC8E3" strokeWidth="0.6" opacity="0.3"/>
                <path d="M90 20L105 40L90 60L75 40Z" stroke="#7EC8E3" strokeWidth="0.6" opacity="0.3"/>
                <circle cx="60" cy="25" r="5" stroke="#C8813A" strokeWidth="0.5" opacity="0.3"/>
                <path d="M60 15L63 22L60 29L57 22Z" fill="#C8813A" fillOpacity="0.15"/>
              </svg>
            </div>

            {/* Carved panel - middle */}
            <div className="absolute top-[35%] left-[15%] right-[10%] h-[25%] rounded-lg border border-white/10"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.05))' }}>
              <svg viewBox="0 0 100 100" className="w-full h-full p-2" fill="none">
                {/* 8-pointed star */}
                <path d="M50 10L58 35L80 20L65 42L90 50L65 58L80 80L58 65L50 90L42 65L20 80L35 58L10 50L35 42L20 20L42 35Z"
                  stroke="#7EC8E3" strokeWidth="0.6" fill="#7EC8E3" fillOpacity="0.06" opacity="0.5"/>
                <circle cx="50" cy="50" r="12" stroke="#C8813A" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="50" cy="50" r="6" stroke="#C8813A" strokeWidth="0.4" opacity="0.2"/>
              </svg>
            </div>

            {/* Carved panel - bottom */}
            <div className="absolute top-[65%] left-[15%] right-[10%] h-[20%] rounded-lg border border-white/10"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.05))' }}>
              <svg viewBox="0 0 100 80" className="w-full h-full p-2" fill="none">
                <path d="M50 5L60 25L80 15L70 35L95 40L70 45L80 65L60 55L50 75L40 55L20 65L30 45L5 40L30 35L20 15L40 25Z"
                  stroke="#7EC8E3" strokeWidth="0.5" fill="#7EC8E3" fillOpacity="0.05" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Door panel - RIGHT */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full origin-right rounded-tr-[150px]"
          style={{
            transformStyle: 'preserve-3d',
            transform: isOpening ? 'rotateY(110deg)' : 'rotateY(0deg)',
            transition: isOpening ? 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            zIndex: isOpening ? 5 : 20,
          }}
        >
          <div className="w-full h-full rounded-tr-[150px] overflow-hidden" style={{
            background: 'linear-gradient(180deg, #1E6B9A 0%, #1A5F8A 30%, #165580 60%, #124A70 100%)',
            boxShadow: 'inset 2px 0 8px rgba(0,0,0,0.2), inset -2px 2px 4px rgba(255,255,255,0.1)',
          }}>
            {/* Door nail studs */}
            {[
              {x: '30%', y: '25%'}, {x: '70%', y: '25%'},
              {x: '30%', y: '40%'}, {x: '70%', y: '40%'},
              {x: '30%', y: '55%'}, {x: '70%', y: '55%'},
              {x: '30%', y: '70%'}, {x: '70%', y: '70%'},
              {x: '30%', y: '85%'}, {x: '70%', y: '85%'},
            ].map((pos, i) => (
              <div key={i} className="absolute w-3 h-3 rounded-full" style={{
                left: pos.x, top: pos.y,
                background: 'radial-gradient(circle at 35% 35%, #E8D5B0, #C8A060, #A08040)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)',
              }}/>
            ))}

            {/* Zellige panel - top */}
            <div className="absolute top-[8%] left-[8%] right-[12%] h-[18%]">
              <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
                <path d="M60 5L75 25L60 45L45 25Z" stroke="#7EC8E3" strokeWidth="0.8" opacity="0.4"/>
                <path d="M30 20L45 40L30 60L15 40Z" stroke="#7EC8E3" strokeWidth="0.6" opacity="0.3"/>
                <path d="M90 20L105 40L90 60L75 40Z" stroke="#7EC8E3" strokeWidth="0.6" opacity="0.3"/>
                <circle cx="60" cy="25" r="5" stroke="#C8813A" strokeWidth="0.5" opacity="0.3"/>
                <path d="M60 15L63 22L60 29L57 22Z" fill="#C8813A" fillOpacity="0.15"/>
              </svg>
            </div>

            {/* Carved panel - middle */}
            <div className="absolute top-[35%] left-[10%] right-[15%] h-[25%] rounded-lg border border-white/10"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.05))' }}>
              <svg viewBox="0 0 100 100" className="w-full h-full p-2" fill="none">
                <path d="M50 10L58 35L80 20L65 42L90 50L65 58L80 80L58 65L50 90L42 65L20 80L35 58L10 50L35 42L20 20L42 35Z"
                  stroke="#7EC8E3" strokeWidth="0.6" fill="#7EC8E3" fillOpacity="0.06" opacity="0.5"/>
                <circle cx="50" cy="50" r="12" stroke="#C8813A" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="50" cy="50" r="6" stroke="#C8813A" strokeWidth="0.4" opacity="0.2"/>
              </svg>
            </div>

            {/* Carved panel - bottom */}
            <div className="absolute top-[65%] left-[10%] right-[15%] h-[20%] rounded-lg border border-white/10"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.05))' }}>
              <svg viewBox="0 0 100 80" className="w-full h-full p-2" fill="none">
                <path d="M50 5L60 25L80 15L70 35L95 40L70 45L80 65L60 55L50 75L40 55L20 65L30 45L5 40L30 35L20 15L40 25Z"
                  stroke="#7EC8E3" strokeWidth="0.5" fill="#7EC8E3" fillOpacity="0.05" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>

        {/* === DOOR KNOCKER (the interactive element) === */}
        <div
          onClick={handleKnock}
          className={`absolute left-1/2 -translate-x-1/2 z-30 cursor-pointer transition-all ${
            stage === 'knocking' ? 'animate-door-knock' : 
            isOpening ? 'opacity-0 scale-75 duration-700' : 
            'hover:scale-110 duration-300'
          }`}
          style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          {/* Knocker backplate */}
          <div className="relative">
            <svg viewBox="0 0 80 100" className="w-20 h-24" fill="none">
              {/* Ornate backplate */}
              <defs>
                <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E8D5B0"/>
                  <stop offset="30%" stopColor="#D4AF7A"/>
                  <stop offset="60%" stopColor="#C8A060"/>
                  <stop offset="100%" stopColor="#B89050"/>
                </linearGradient>
                <radialGradient id="brassShine" cx="0.35" cy="0.3">
                  <stop offset="0%" stopColor="#F5E8C8" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="transparent"/>
                </radialGradient>
              </defs>
              
              {/* Decorative backplate shape - Khamsa/Hand of Fatima inspired */}
              <path d="M40 5 C55 5 65 15 65 30 L65 55 C65 70 55 80 40 85 C25 80 15 70 15 55 L15 30 C15 15 25 5 40 5Z"
                fill="url(#brassGrad)" stroke="#A08040" strokeWidth="1"/>
              <path d="M40 5 C55 5 65 15 65 30 L65 55 C65 70 55 80 40 85 C25 80 15 70 15 55 L15 30 C15 15 25 5 40 5Z"
                fill="url(#brassShine)"/>
              
              {/* Inner decorative border */}
              <path d="M40 12 C52 12 58 20 58 32 L58 53 C58 64 52 72 40 76 C28 72 22 64 22 53 L22 32 C22 20 28 12 40 12Z"
                fill="none" stroke="#A08040" strokeWidth="0.6" opacity="0.5"/>
              
              {/* 8-pointed star */}
              <path d="M40 18L43 30L52 24L47 35L58 38L47 41L52 52L43 46L40 58L37 46L28 52L33 41L22 38L33 35L28 24L37 30Z"
                fill="#C8813A" fillOpacity="0.2" stroke="#A08040" strokeWidth="0.4" opacity="0.6"/>
              
              {/* Center circle */}
              <circle cx="40" cy="38" r="6" fill="#C8813A" fillOpacity="0.15" stroke="#A08040" strokeWidth="0.5"/>
              
              {/* Ring knocker */}
              <circle cx="40" cy="68" r="10" fill="none" stroke="url(#brassGrad)" strokeWidth="3.5"/>
              <circle cx="40" cy="68" r="10" fill="none" stroke="#F5E8C8" strokeWidth="1" opacity="0.3"/>
              
              {/* Ring mount */}
              <circle cx="40" cy="58" r="4" fill="url(#brassGrad)" stroke="#A08040" strokeWidth="0.8"/>
              <circle cx="40" cy="58" r="2" fill="#B89050"/>
              
              {/* Top ornament */}
              <path d="M36 8L40 2L44 8" fill="#D4AF7A" stroke="#A08040" strokeWidth="0.5"/>
              
              {/* Shadow under knocker */}
              <ellipse cx="40" cy="82" rx="12" ry="3" fill="rgba(0,0,0,0.15)"/>
            </svg>

            {/* Pulse glow effect when sealed */}
            {stage === 'sealed' && (
              <div className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none"/>
            )}
          </div>
        </div>

        {/* Center seam line between doors */}
        <div className="absolute left-1/2 -translate-x-[0.5px] top-[28%] bottom-0 w-[1px] z-[21]" style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.2) 90%, transparent 100%)',
          opacity: isOpening ? 0 : 1,
          transition: 'opacity 0.5s',
        }}/>

        {/* === REVEALED CONTENT behind doors === */}
        <div className={`absolute inset-0 rounded-t-[150px] overflow-hidden transition-opacity duration-1000 ${
          isRevealing ? 'opacity-100' : 'opacity-0'
        }`} style={{
          background: 'linear-gradient(180deg, #FFFBF2 0%, #FAF3E4 30%, #F5ECD7 70%, #EDE4CC 100%)',
          zIndex: 2,
        }}>
          {/* Zellige watermark */}
          <div className="absolute inset-0 zellige-bg-rich opacity-[0.06]"/>
          
          {/* Gold border frame */}
          <div className="absolute inset-4 rounded-t-[130px] border border-wedding-gold/30"/>
          <div className="absolute inset-6 rounded-t-[120px] border border-wedding-gold/15"/>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
            {/* Top arch ornament */}
            <svg viewBox="0 0 80 40" className="w-20 h-10 mb-4" fill="none" stroke="#C8813A" strokeWidth="0.8" opacity="0.5">
              <path d="M10 35C10 15 25 5 40 5S70 15 70 35"/>
              <circle cx="40" cy="5" r="3" fill="#C8813A" fillOpacity="0.2"/>
              <path d="M20 30C20 18 30 10 40 10S60 18 60 30" strokeWidth="0.5"/>
            </svg>

            {/* Bismillah */}
            <p className="font-amiri text-wedding-navy/25 text-xs tracking-widest mb-6" dir="rtl">بسم الله الرحمن الرحيم</p>

            <p className="font-playfair text-wedding-navy/40 text-[10px] tracking-[0.4em] uppercase mb-4">You are invited to</p>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[0.5px] bg-gradient-to-r from-transparent to-wedding-gold/50"/>
              <svg viewBox="0 0 10 10" className="w-2 h-2" fill="#C8813A" fillOpacity="0.4">
                <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z"/>
              </svg>
              <div className="w-8 h-[0.5px] bg-gradient-to-l from-transparent to-wedding-gold/50"/>
            </div>

            <p className="font-playfair text-wedding-navy text-lg tracking-wide text-center">Dinner & Henna Night</p>
            <p className="font-amiri text-wedding-navy/50 text-sm mt-0.5" dir="rtl">عشاء وليلة الحناء</p>

            <div className="w-6 h-[0.5px] bg-wedding-gold/20 mx-auto my-3"/>

            <p className="font-playfair text-wedding-navy text-base tracking-wide text-center">Omar Mahmoud</p>
            <span className="font-playfair italic text-wedding-pomegranate text-xl my-1">&</span>
            <p className="font-playfair text-wedding-navy text-base tracking-wide">Layla Mansour</p>

            <div className="flex items-center gap-3 mt-4 mb-3">
              <div className="w-8 h-[0.5px] bg-gradient-to-r from-transparent to-wedding-gold/50"/>
              <svg viewBox="0 0 10 10" className="w-2 h-2" fill="#C8813A" fillOpacity="0.4">
                <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z"/>
              </svg>
              <div className="w-8 h-[0.5px] bg-gradient-to-l from-transparent to-wedding-gold/50"/>
            </div>

            <p className="font-lato text-wedding-navy/35 text-xs tracking-[0.25em] uppercase">an evening of celebration</p>
            <p className="font-amiri text-wedding-navy/30 text-xs mt-1" dir="rtl">أمسية احتفالية</p>
            
            <div className="w-10 h-[1px] bg-wedding-gold/20 mx-auto mt-4 mb-3"/>
            <p className="font-lato text-wedding-navy/40 text-xs tracking-[0.2em]">25 · 06 · 2026 · Tunis</p>
          </div>

          {/* Bottom zellige band */}
          <div className="absolute bottom-6 left-8 right-8">
            <svg viewBox="0 0 240 20" className="w-full h-4" fill="none" stroke="#C8813A" strokeWidth="0.4" opacity="0.2">
              {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216].map((x) => (
                <g key={x}>
                  <path d={`M${x+12} 0L${x+17} 8L${x+12} 16L${x+7} 8Z`}/>
                  <circle cx={x+12} cy={8} r={2}/>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Tap instruction */}
      {stage === 'sealed' && (
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <p className="font-lato text-wedding-navy/30 text-xs tracking-[0.3em] uppercase animate-pulse">
            Tap the knocker to enter
          </p>
          <p className="font-amiri text-wedding-navy/20 text-sm mt-1.5" dir="rtl">
            اضغط على المقرعة للدخول
          </p>
        </div>
      )}

      {/* Floating gold dust */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute rounded-full animate-float-particle"
            style={{
              width: `${2 + (i % 3)}px`, height: `${2 + (i % 3)}px`,
              background: `radial-gradient(circle, rgba(200,129,58,${0.2 + (i % 3) * 0.1}), transparent)`,
              left: `${10 + i * 10}%`, top: `${20 + (i % 4) * 15}%`,
              animationDelay: `${i * 0.5}s`, animationDuration: `${4 + (i % 3)}s`,
            }}/>
        ))}
      </div>
    </div>
  );
};

export default DoorEnvelopeScreen;
