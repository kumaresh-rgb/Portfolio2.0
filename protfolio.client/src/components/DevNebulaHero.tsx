import { useState, useEffect } from 'react';

const DevNebulaHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading and trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Add Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        rel="stylesheet" 
      />

      <main className="relative min-h-screen font-body overflow-x-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-lines pointer-events-none"></div>
        <div className="absolute inset-0 nebula-glow pointer-events-none"></div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
          {/* Orbit Container */}
          <div className="orbit-container flex items-center justify-center">
            {/* Center Profile */}
            <div className="relative z-20 w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-primary to-tertiary shadow-[0_0_50px_rgba(115,177,255,0.3)]">
              <img 
                alt="Developer Portrait" 
                className="w-full h-full object-cover rounded-full border-4 border-surface" 
                src="/Perfect Linkedlin.png"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-full h-full rounded-full border-4 border-surface bg-surface-container-highest flex items-center justify-center hidden">
                <span className="text-6xl font-bold text-primary">K</span>
              </div>
            </div>

            {/* Tech Icons - Static positions matching original */}
            <div className={`tech-icon -translate-x-[180px] -translate-y-[100px] w-14 h-14 rounded-full bg-surface-container-highest backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,120,212,0.4)] border border-outline-variant/20 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-1000 delay-300`}>
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>cloud</span>
            </div>
            
            <div className={`tech-icon translate-x-[160px] -translate-y-[140px] w-12 h-12 rounded-full bg-surface-container-highest backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(81,39,132,0.4)] border border-outline-variant/20 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-1000 delay-400`}>
              <span className="material-symbols-outlined text-secondary">terminal</span>
            </div>
            
            <div className={`tech-icon translate-x-[200px] translate-y-[60px] w-16 h-16 rounded-full bg-surface-container-highest backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(71,204,255,0.4)] border border-outline-variant/20 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-1000 delay-500`}>
              <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>deployed_code</span>
            </div>
            
            <div className={`tech-icon -translate-x-[120px] translate-y-[180px] w-14 h-14 rounded-full bg-surface-container-highest backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-outline-variant/20 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-1000 delay-600`}>
              <span className="material-symbols-outlined text-on-surface" style={{fontVariationSettings: "'FILL' 1"}}>database</span>
            </div>
            
            <div className={`tech-icon translate-x-[0px] translate-y-[220px] w-12 h-12 rounded-full bg-surface-container-highest backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(115,177,255,0.4)] border border-outline-variant/20 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-1000 delay-700`}>
              <span className="material-symbols-outlined text-primary-dim">memory</span>
            </div>
            
            <div className={`tech-icon -translate-x-[220px] translate-y-[20px] w-10 h-10 rounded-full bg-surface-container-highest backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,186,227,0.4)] border border-outline-variant/20 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-1000 delay-800`}>
              <span className="material-symbols-outlined text-tertiary-dim">package</span>
            </div>
            
            <div className={`tech-icon translate-x-[80px] -translate-y-[200px] w-14 h-14 rounded-full bg-surface-container-highest backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(195,146,252,0.4)] border border-outline-variant/20 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-1000 delay-900`}>
              <span className="material-symbols-outlined text-secondary">hub</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-12 text-center z-10">
            <h1 className={`font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-1000`}>
              Microsoft Stack Developer
            </h1>
            <p className={`font-body text-on-surface-variant text-lg max-w-2xl mx-auto px-6 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-1100`}>
              Architecting scalable cloud solutions with .NET, Azure, and modern frontend ecosystems. 
              Building the future of enterprise software, one microservice at a time.
            </p>
            <div className={`mt-8 flex gap-4 justify-center ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-1200`}>
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-semibold rounded-full hover:shadow-[0_0_30px_rgba(115,177,255,0.4)] transition-all duration-300 active:scale-95">
                View Projects
              </button>
              <button className="px-8 py-3 border border-outline-variant/20 bg-white/5 backdrop-blur-md text-on-surface font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </section>

        {/* Technical Arsenal Section */}
        <section className="py-32 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-[2px] w-12 bg-primary"></div>
              <h2 className="font-label text-sm uppercase tracking-widest text-primary">Technical Arsenal</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-8 rounded-xl bg-surface-container-highest border border-outline-variant/10 hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">cloud</span>
                <h3 className="font-headline text-xl font-bold mb-3">Azure Cloud</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Designing serverless architectures, App Services, and Azure SQL solutions with high availability.</p>
              </div>
              <div className="group p-8 rounded-xl bg-surface-container-highest border border-outline-variant/10 hover:border-secondary/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">terminal</span>
                <h3 className="font-headline text-xl font-bold mb-3">.NET Core</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Building high-performance APIs and microservices using C# and clean architecture principles.</p>
              </div>
              <div className="group p-8 rounded-xl bg-surface-container-highest border border-outline-variant/10 hover:border-tertiary/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
                <span className="material-symbols-outlined text-tertiary text-4xl mb-6 block">deployed_code</span>
                <h3 className="font-headline text-xl font-bold mb-3">Modern Web</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Crafting responsive interfaces with React, TypeScript, and state-of-the-art UI frameworks.</p>
              </div>
              <div className="group p-8 rounded-xl bg-surface-container-highest border border-outline-variant/10 hover:border-primary-dim/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-dim/5 rounded-full blur-2xl group-hover:bg-primary-dim/10 transition-colors"></div>
                <span className="material-symbols-outlined text-primary-dim text-4xl mb-6 block">database</span>
                <h3 className="font-headline text-xl font-bold mb-3">Data Engineering</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Optimizing SQL Server performance and implementing caching strategies with Redis.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Custom Styles */}
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .nebula-glow {
          background: radial-gradient(circle at center, rgba(115, 177, 255, 0.15) 0%, transparent 70%);
        }
        .grid-lines {
          background-image: linear-gradient(to right, rgba(66, 72, 80, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(66, 72, 80, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .orbit-container {
          position: relative;
          width: 500px;
          height: 500px;
        }
        .tech-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </>
  );
};

export default DevNebulaHero;
