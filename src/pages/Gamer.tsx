import React from "react";
import { motion } from "motion/react";
import { 
  Gamepad2, 
  Monitor, 
  Smartphone, 
  Cpu, 
  Laptop,
  Trophy,
  History,
  Activity,
  ChevronRight,
  ExternalLink
} from "lucide-react";

// ── Shared glass card style ──────────────────────────────────────────────────

function GlassCard({
  className = "",
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`glass-card rounded-2xl relative overflow-hidden ${className}`}
      style={{
        background: "rgba(10, 14, 20, 0.6)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
        ...style,
      }}>
      {children}
    </div>
  );
}

// ── Asset Path Helper (relative to src/pages) ────────────────────────────────

const asset = (name: string) => `/src/assets/games files/${name}`;

// ── SECTION DATA ────────────────────────────────────────────────────────────

const officeSetup = [
  {
    name: "MacBook Pro M1",
    role: "Daily Driver for Office & Backend Development",
    specs: "8-Core CPU / 8-Core GPU / Apple Silicon",
    image: asset("Macbook bro m1.jpg"),
  },
  {
    name: "Rapoo 9010M Combo",
    role: "Multi-Device Wireless Keypad & Mouse",
    specs: "2.4GHz / Bluetooth 5.0 / Multi-Device Support (4 Devices)",
    image: asset("keyboard mouse for coding.jpg"),
    link: "https://amzn.in/d/0gv5PcjX"
  }
];

const gamingSetup = {
  laptop: {
    name: "Lenovo IdeaPad Gaming 3",
    specs: "Intel Core i5 10th Gen 10300H | 16GB RAM | 1TB SSD | GTX 1650 4GB | 120Hz Display",
    image: asset("lenovalaptop png.webp"),
  },
  peripherals: [
    {
      name: "Cosmic Byte Stellaris",
      type: "Controller",
      specs: "3-Mode (Wireless/BT/Wired) | Hall Effect Triggers | 1000mAh",
      image: asset("Game Contoller stellaris.jpg"),
      link: "https://amzn.in/d/00d9T0iK"
    },
    {
      name: "Cosmic Byte CB-GK-27 Vanth",
      type: "Mechanical Keyboard",
      specs: "Swappable Outemu Blue Switches | Rainbow LED | Mechanical",
      image: asset("cosmicbyte vanth.jpg"),
      link: "https://amzn.in/d/0g5zo1LA"
    },
    {
      name: "Soundcore Life Q10",
      type: "Headphones",
      specs: "Hi-Res Audio | 60-Hour Playtime | BassUp Technology",
      image: asset("soundcoreq10offical.jpg"),
    },
    {
      name: "OnePlus Nord Buds 2 Pro",
      type: "Earbuds",
      specs: "Active Noise Cancellation | Deep Bass | Fast Charge",
      image: asset("oneplusnordimg2.avif"),
    },
  ]
};

const pcGames = [
  { name: "GTA V", status: "Currently Playing", img: asset("GTA 5 currently playing.jpg"), tags: ["Adventure", "Open World"] },
  { name: "Clair Obscur: Expedition 33", status: "Upcoming", img: asset("Clair Obscur Expedition 33.png"), tags: ["RPG", "Turn-Based"] },
  { name: "Apex Legends", status: "Active", img: asset("Apex_legends_cover.jpg"), tags: ["FPS", "Battle Royale"] },
  { name: "Red Dead Redemption 1", status: "Completed", img: asset("RDR1.png"), tags: ["Story", "Masterpiece"] },
  { name: "Red Dead Redemption 2", status: "Completed", img: asset("rdr2.png"), tags: ["Cinematic", "Open World"] },
  { name: "Resident Evil 4 Remake", status: "Completed", img: asset("Resident_Evil_4_remake_cover_art.jpg"), tags: ["Horror", "Action"] },
  { name: "God of War Ragnarök", status: "Completed", img: asset("GODOFWAR RAGNORK.png"), tags: ["Action", "Adventure"] },
  { name: "God Hand", status: "Completed", img: asset("god-hand-.webp"), tags: ["Action", "Beat 'em up"] },
  { name: "God of War 4", status: "Completed", img: asset("godofwar 4.png"), tags: ["Masterpiece"] },
  { name: "God of War 1", status: "Completed", img: asset("godof war 1.png"), tags: ["Classic"] },
  { name: "God of War 2", status: "Completed", img: asset("godof war 2.png"), tags: ["Classic"] },
  { name: "God of War 3 Remastered", status: "Completed", img: asset("godwar 3.png"), tags: ["Cinematic"] },
];

const mobileGames = [
  { name: "PUBG Mobile", info: "ID: 34345435 | Lvl 75", status: "Active", img: asset("pubg.png") },
  { name: "GOW: Ghost of Sparta", info: "PPSSPP Emulator", status: "Completed", img: asset("GHOSTOFSPARATA.webp") },
  { name: "Mortal Kombat", info: "Fighting", status: "Completed", img: asset("Mortal KOMbat.jpg") },
  { name: "GTA San Andreas", info: "Mobile Edition", status: "Completed", img: asset("gta san andreas.png") },
  { name: "Clash of Clans", info: "Strategy", status: "Inactive", img: asset("clashofclans.png") },
  { name: "Candy Crush", info: "Casual", status: "Active", img: asset("candycrush.jpg") },
];

// ── Components ─────────────────────────────────────────────────────────────

const Gamer = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/30">
      
      {/* ── HERO SECTION ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/gamer_hero_background_1775384506777.png" 
            alt="Gaming Setup Background" 
            className="w-full h-full object-cover opacity-50 scale-110 blur-sm animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-md">
              <Gamepad2 className="w-5 h-5 text-primary" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">Gaming Profile & Battle-Station</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-secondary">LEVEL UP</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl mx-auto text-lg">
              Exploring the convergence of high-performance engineering and visceral digital storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-20 space-y-32">
        
        {/* ── SECTION 1: OFFICE SETUP ── */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <Laptop className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">Professional Workflow</h2>
              <p className="text-on-surface-variant text-sm font-mono tracking-widest uppercase">Office Tools & Dev Rig</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeSetup.map((item, idx) => (
              <GlassCard key={idx} className="group hover:border-primary/30 transition-all duration-500">
                <div className="p-8">
                  <div className="h-56 mb-8 overflow-hidden rounded-2xl bg-surface-container/50 relative border border-white/5 p-4 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="max-h-full w-full object-contain group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-primary text-sm font-semibold mb-1">{item.role}</p>
                      <p className="text-on-surface-variant text-xs mb-4">{item.specs}</p>
                    </div>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: THE GAMING RIG ── */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">The Battle-Station</h2>
              <p className="text-primary text-sm font-mono tracking-widest uppercase">High-Performance Hardware</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Laptop Card */}
            <GlassCard className="lg:col-span-2 p-10 flex flex-col md:flex-row gap-12 items-center border-primary/20">
              <div className="w-full md:w-1/2">
                <img src={gamingSetup.laptop.image} alt={gamingSetup.laptop.name} className="w-full h-auto drop-shadow-[0_0_40px_rgba(0,120,212,0.3)] hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">Master Rig</div>
                <h3 className="text-3xl font-black text-white mb-4 leading-tight">{gamingSetup.laptop.name}</h3>
                <div className="space-y-4">
                  {gamingSetup.laptop.specs.split("|").map((spec, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-on-surface font-medium">{spec.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Support List Cards */}
            <div className="grid grid-cols-1 gap-4">
              {gamingSetup.peripherals.map((item, idx) => (
                <GlassCard key={idx} className="p-4 flex items-center gap-4 group hover:bg-white/[0.03] transition-colors">
                  <div className="w-16 h-16 rounded-lg bg-surface flex-shrink-0 overflow-hidden border border-white/5 flex items-center justify-center p-1.5">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold text-white leading-tight">{item.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">{item.type}</p>
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 text-white/40 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  )}
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: PC MASTERPIECES ── */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                <Monitor className="w-6 h-6 text-tertiary" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white tracking-tight uppercase">PC Collection</h2>
                <p className="text-tertiary text-sm font-mono tracking-widest uppercase">Adventures & Narrative Epics</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pcGames.map((game, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={game.img} alt={game.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-black/40 transition-all duration-300" />
                
                {(game.status === "Currently Playing" || game.name === "GTA V") && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-green-500/80 backdrop-blur-md text-[10px] font-black text-black flex items-center gap-1.5 animate-pulse">
                    <Activity className="w-3 h-3" />
                    PLAYING NOW
                  </div>
                )}

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h4 className="text-lg font-black text-white leading-tight mb-2">{game.name}</h4>
                  <div className="flex gap-2">
                    {game.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold text-white/50">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: MOBILE COMMAND ── */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
              <Smartphone className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">Mobile Command</h2>
              <p className="text-secondary text-sm font-mono tracking-widest uppercase">Active Field Ops</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {mobileGames.map((game, idx) => (
              <GlassCard key={idx} className="p-6 flex items-center gap-6 group hover:border-secondary/30 transition-all">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5 shadow-xl">
                  <img src={game.img} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-lg font-black text-white group-hover:text-secondary transition-colors">{game.name}</h4>
                    {game.status === "Active" ? (
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                    ) : game.status === "Inactive" ? (
                      <span className="w-2 h-2 rounded-full bg-red-400 opacity-40" />
                    ) : (
                      <Trophy className="w-4 h-4 text-yellow-500/60" />
                    )}
                  </div>
                  <p className="text-xs text-on-surface-variant font-medium leading-relaxed">{game.info}</p>
                  <p className={`text-[10px] font-black uppercase tracking-tighter mt-2 ${game.status === 'Active' ? 'text-green-500' : 'text-white/20'}`}>
                    {game.status === "Active" ? "Operational" : game.status === "Inactive" ? "Standby" : "Mission Complete"}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

      </main>

      <footer className="py-20 text-center bg-black/40 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <History className="w-10 h-10 text-on-surface-variant mx-auto mb-6 opacity-20" />
          <h5 className="text-white font-bold opacity-60 italic mb-2">"When the code stops, the play begins."</h5>
          <p className="text-sm text-on-surface-variant font-medium tracking-tight">© 2026 PLAYER ONE: MKUMARESH</p>
        </div>
      </footer>
    </div>
  );
};

export default Gamer;
