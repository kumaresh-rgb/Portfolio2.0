import {
  Cloud,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  Send,
  Download,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
interface PlanetData {
  id: string;
  rPct: number;
  speed: number;
  startAngle: number;
  name: string;
  color: string;
}

interface TechIconProps {
  name: string;
  color: string;
  delay: number;
}

const Home = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbitAnimRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const [sceneSize, setSceneSize] = useState(0);
  const [imageError, setImageError] = useState(false);

  const PLANET_DATA: PlanetData[] = [
    {
      id: "ic0",
      rPct: 14.5,
      speed: 0.55,
      startAngle: 0,
      name: ".NET",
      color: "rgba(120,80,255,0.6)",
    },
    {
      id: "ic1",
      rPct: 19,
      speed: 0.44,
      startAngle: 60,
      name: "React",
      color: "rgba(0,230,255,0.6)",
    },
    {
      id: "ic2",
      rPct: 23.5,
      speed: 0.36,
      startAngle: 130,
      name: "Angular",
      color: "rgba(255,60,60,0.6)",
    },
    {
      id: "ic3",
      rPct: 28,
      speed: 0.3,
      startAngle: 200,
      name: "Redis",
      color: "rgba(220,50,50,0.6)",
    },
    {
      id: "ic4",
      rPct: 32.5,
      speed: 0.25,
      startAngle: 270,
      name: "SQL Server",
      color: "rgba(220,50,50,0.6)",
    },
    {
      id: "ic5",
      rPct: 37,
      speed: 0.2,
      startAngle: 310,
      name: "Power BI",
      color: "rgba(255,200,0,0.6)",
    },
    {
      id: "ic6",
      rPct: 41.5,
      speed: 0.17,
      startAngle: 40,
      name: "Kubernetes",
      color: "rgba(50,108,229,0.6)",
    },
    {
      id: "ic7",
      rPct: 37,
      speed: 0.22,
      startAngle: 340,
      name: "DevOps",
      color: "rgba(0,180,255,0.6)",
    },
    {
      id: "ic8",
      rPct: 41.5,
      speed: 0.17,
      startAngle: 220,
      name: "MS Fabric",
      color: "rgba(0,210,240,0.6)",
    },
    {
      id: "ic9",
      rPct: 32.5,
      speed: 0.25,
      startAngle: 90,
      name: "C#",
      color: "rgba(190,80,255,0.6)",
    },
    {
      id: "ic10",
      rPct: 50,
      speed: 0.12,
      startAngle: 280,
      name: "EF Core",
      color: "rgba(100,80,200,0.6)",
    },
    {
      id: "ic11",
      rPct: 55,
      speed: 0.1,
      startAngle: 340,
      name: "Docker",
      color: "rgba(0,200,150,0.6)",
    },
    {
      id: "ic12",
      rPct: 60,
      speed: 0.08,
      startAngle: 30,
      name: "SSMS",
      color: "rgba(255,140,0,0.6)",
    },
    {
      id: "ic13",
      rPct: 48,
      speed: 0.14,
      startAngle: 110,
      name: "Azure",
      color: "rgba(0,120,212,0.6)",
    },
  ];

  const TechIcon: React.FC<TechIconProps> = ({ name, color, delay }) => {
    const imgMap: Record<string, string> = {
      ".NET": "/Microsoft_.NET_logo.png",
      React: "/React.png",
      Angular: "/Angular.png",
      Redis: "/pngegg.png",
      "SQL Server": "/sql-database.png",
      "Power BI": "/power_bi.png",
      Kubernetes: "/kubernetes-services.png",
      DevOps: "/azure-devops.png",
      "MS Fabric": "/fabric.png",
      "C#": "/Logo_C_sharp.png",
      "EF Core": "/Entity.svg",
      Docker: "/Docker.png",
      SSMS: "/ssms_21.png",
      Azure: "/Azure.png",
    };

    return (
      <div className="icon-pill-inner">
        <div
          className="ibox"
          style={
            {
              "--gc": color,
              "--gsize": "14px",
              "--pd": `${3.5 + delay * 0.4}s`,
              "--poff": `${delay * 0.15}s`,
            } as React.CSSProperties
          }>
          {imgMap[name] && (
            <img
              src={imgMap[name]}
              alt={name}
              style={{
                width: "70%",
                height: "70%",
                objectFit: "contain",
                filter: `drop-shadow(0 0 4px ${color})`,
                position: "relative",
                zIndex: 1,
              }}
            />
          )}
        </div>
        <span className="ilabel">{name}</span>
      </div>
    );
  };

  // ── Scene size ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      if (sceneRef.current) {
        setSceneSize(
          Math.min(sceneRef.current.offsetWidth, sceneRef.current.offsetHeight),
        );
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ── Orbit animation (timestamp-based) — handles burst AND lag ─────────────────
  useEffect(() => {
    if (!sceneSize) return;
    const elements = PLANET_DATA.map((p) => document.getElementById(p.id));
    startTimeRef.current = null;
    const LAUNCH_MS = 1200;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const getHalf = () => {
      const el = elements[0]?.querySelector(".ibox") as HTMLElement | null;
      return el ? el.offsetWidth / 2 : 27;
    };

    const loop = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const elapsed = ts - startTimeRef.current;
      const half = getHalf();
      const labelH = 20;

      PLANET_DATA.forEach((p, i) => {
        const r = (p.rPct / 100) * sceneSize;
        let x: number, y: number;

        if (elapsed < LAUNCH_MS) {
          // Explosive burst phase
          const t = easeOut(elapsed / LAUNCH_MS);
          const a = (p.startAngle * Math.PI) / 180;
          x = Math.cos(a) * r * t - half;
          y = Math.sin(a) * r * t - half - labelH / 2;
        } else {
          // Stable orbit phase
          const sec = (elapsed - LAUNCH_MS) / 1000;
          const a = ((p.startAngle + sec * p.speed * 60) * Math.PI) / 180;
          x = Math.cos(a) * r - half;
          y = Math.sin(a) * r - half - labelH / 2;
        }

        if (elements[i]) {
          (elements[i] as HTMLElement).style.transform =
            `translate(${x}px,${y}px)`;
        }
      });

      orbitAnimRef.current = requestAnimationFrame(loop);
    };

    orbitAnimRef.current = requestAnimationFrame(loop);
    return () => {
      if (orbitAnimRef.current) cancelAnimationFrame(orbitAnimRef.current);
    };
  }, [sceneSize]);

  // ── Galaxy canvas ───────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    // Offscreen nebula layer — rendered once, blitted every frame (cheap)
    const offscreen = document.createElement("canvas");
    const octx = offscreen.getContext("2d")!;

    const buildNebula = () => {
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;
      const W = canvas.width,
        H = canvas.height;

      // True black base
      octx.fillStyle = "#00030a";
      octx.fillRect(0, 0, W, H);

      // Nebula clouds
      const clouds = [
        { x: 0.15, y: 0.22, rx: 0.38, ry: 0.25, a: -0.3, c: "30,10,90" },
        { x: 0.82, y: 0.18, rx: 0.3, ry: 0.2, a: 0.5, c: "0,20,80" },
        { x: 0.6, y: 0.78, rx: 0.34, ry: 0.22, a: 0.2, c: "0,40,100" },
        { x: 0.08, y: 0.68, rx: 0.26, ry: 0.18, a: -0.5, c: "20,5,70" },
        { x: 0.5, y: 0.44, rx: 0.42, ry: 0.3, a: 0.1, c: "0,15,60" },
        { x: 0.92, y: 0.58, rx: 0.24, ry: 0.16, a: 0.4, c: "15,0,65" },
      ];

      clouds.forEach(({ x, y, rx, ry, a, c }) => {
        const cx = x * W,
          cy = y * H;
        const rr = rx * Math.min(W, H);
        octx.save();
        octx.translate(cx, cy);
        octx.rotate(a);
        octx.scale(1, ry / rx);
        const g = octx.createRadialGradient(0, 0, 0, 0, 0, rr);
        g.addColorStop(0, `rgba(${c},0.22)`);
        g.addColorStop(0.5, `rgba(${c},0.08)`);
        g.addColorStop(1, `rgba(${c},0)`);
        octx.beginPath();
        octx.arc(0, 0, rr, 0, Math.PI * 2);
        octx.fillStyle = g;
        octx.fill();
        octx.restore();
      });

      // Milky Way diagonal band
      const mw = octx.createLinearGradient(0, H * 0.25, W, H * 0.75);
      mw.addColorStop(0, "rgba(0,0,0,0)");
      mw.addColorStop(0.35, "rgba(25,45,110,0.07)");
      mw.addColorStop(0.5, "rgba(35,60,140,0.11)");
      mw.addColorStop(0.65, "rgba(25,45,110,0.07)");
      mw.addColorStop(1, "rgba(0,0,0,0)");
      octx.fillStyle = mw;
      octx.fillRect(0, 0, W, H);

      // Static stars — realistic density & colour spread
      const count = Math.floor((W * H) / 1600);
      for (let i = 0; i < count; i++) {
        const sx = Math.random() * W;
        const sy = Math.random() * H;
        const rnd = Math.random();

        if (rnd < 0.72) {
          // tiny dim
          const r = Math.random() * 0.55 + 0.15;
          const al = Math.random() * 0.35 + 0.08;
          octx.beginPath();
          octx.arc(sx, sy, r, 0, Math.PI * 2);
          octx.fillStyle = `rgba(200,215,255,${al})`;
          octx.fill();
        } else if (rnd < 0.93) {
          // medium coloured
          const r = Math.random() * 0.9 + 0.4;
          const al = Math.random() * 0.45 + 0.25;
          const h = Math.random();
          const col =
            h < 0.3
              ? `rgba(170,200,255,${al})`
              : h < 0.6
                ? `rgba(255,255,245,${al})`
                : `rgba(255,215,170,${al})`;
          octx.beginPath();
          octx.arc(sx, sy, r, 0, Math.PI * 2);
          octx.fillStyle = col;
          octx.fill();
        } else {
          // bright with diffraction glow
          const r = Math.random() * 1.4 + 0.8;
          const al = Math.random() * 0.35 + 0.65;
          const gw = octx.createRadialGradient(sx, sy, 0, sx, sy, r * 6);
          gw.addColorStop(0, `rgba(255,255,255,${al})`);
          gw.addColorStop(0.25, `rgba(210,230,255,${al * 0.45})`);
          gw.addColorStop(1, "rgba(0,0,0,0)");
          octx.beginPath();
          octx.arc(sx, sy, r * 6, 0, Math.PI * 2);
          octx.fillStyle = gw;
          octx.fill();
          octx.beginPath();
          octx.arc(sx, sy, r, 0, Math.PI * 2);
          octx.fillStyle = `rgba(255,255,255,${al})`;
          octx.fill();
          // diffraction cross spikes
          octx.strokeStyle = `rgba(255,255,255,${al * 0.25})`;
          octx.lineWidth = 0.5;
          octx.beginPath();
          octx.moveTo(sx - r * 5, sy);
          octx.lineTo(sx + r * 5, sy);
          octx.stroke();
          octx.beginPath();
          octx.moveTo(sx, sy - r * 5);
          octx.lineTo(sx, sy + r * 5);
          octx.stroke();
        }
      }
    };

    // Twinkling star layer
    interface Twinkler {
      x: number;
      y: number;
      r: number;
      phase: number;
      speed: number;
      base: number;
    }
    let twinklers: Twinkler[] = [];

    const buildTwinklers = () => {
      twinklers = [];
      const n = Math.floor((canvas.width * canvas.height) / 5500);
      for (let i = 0; i < n; i++) {
        twinklers.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.6 + 0.4,
          phase: Math.random() * Math.PI * 2,
          speed: 0.35 + Math.random() * 1.4,
          base: 0.2 + Math.random() * 0.55,
        });
      }
    };

    // Shooting star (meteor) layer
    interface Meteor {
      x: number;
      y: number;
      vx: number;
      vy: number;
      len: number;
      alpha: number;
      active: boolean;
      timer: number;
    }
    const meteors: Meteor[] = Array.from({ length: 5 }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      len: 0,
      alpha: 0,
      active: false,
      timer: Math.random() * 250,
    }));

    const spawnMeteor = (m: Meteor) => {
      m.x = Math.random() * canvas.width;
      m.y = Math.random() < 0.5 ? -10 : Math.random() * canvas.height * 0.4;
      const ang = ((25 + Math.random() * 35) * Math.PI) / 180;
      const spd = 9 + Math.random() * 12;
      m.vx = Math.cos(ang) * spd;
      m.vy = Math.sin(ang) * spd;
      m.len = 70 + Math.random() * 130;
      m.alpha = 1;
      m.active = true;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildNebula();
      buildTwinklers();
    };

    resize();
    window.addEventListener("resize", resize);

    const render = (ts: number) => {
      const t = ts / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Nebula + static star layer
      ctx.drawImage(offscreen, 0, 0);

      // 2. Twinkling stars
      twinklers.forEach((s) => {
        const al =
          s.base * (0.35 + 0.65 * Math.abs(Math.sin(t * s.speed + s.phase)));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${al})`;
        ctx.fill();
      });

      // 3. Meteors
      meteors.forEach((m) => {
        if (!m.active) {
          m.timer--;
          if (m.timer <= 0) spawnMeteor(m);
          return;
        }
        m.x += m.vx;
        m.y += m.vy;
        m.alpha -= 0.016;
        if (
          m.alpha <= 0 ||
          m.x > canvas.width + 60 ||
          m.y > canvas.height + 60
        ) {
          m.active = false;
          m.timer = 200 + Math.random() * 350;
          return;
        }
        const spd = Math.sqrt(m.vx * m.vx + m.vy * m.vy);
        const tx = m.x - (m.vx / spd) * m.len;
        const ty = m.y - (m.vy / spd) * m.len;
        const grad = ctx.createLinearGradient(tx, ty, m.x, m.y);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(0.6, `rgba(180,225,255,${m.alpha * 0.45})`);
        grad.addColorStop(1, `rgba(255,255,255,${m.alpha})`);
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        const tg = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 5);
        tg.addColorStop(0, `rgba(255,255,255,${m.alpha})`);
        tg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(m.x, m.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = tg;
        ctx.fill();
      });

      // 4. Soft center glow behind solar system
      const cx = canvas.width / 2,
        cy = canvas.height / 2;
      const pr = 130 + Math.sin(t * 0.5) * 18;
      const pg = ctx.createRadialGradient(cx, cy, 0, cx, cy, pr);
      pg.addColorStop(0, `rgba(0,140,255,${0.07 + Math.sin(t * 0.7) * 0.03})`);
      pg.addColorStop(0.5, "rgba(0,80,200,0.04)");
      pg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, pr, 0, Math.PI * 2);
      ctx.fillStyle = pg;
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Override root background for galaxy effect */
        html, body { background: #00030a !important; margin: 0; padding: 0; }
        
        /* Preserved Solar System styles */
        .orbit-ring {
          position:absolute; 
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border-radius:50%;
          border:1px solid rgba(0,150,255,0.09); pointer-events:none;
          animation:ring-breathe 6s ease-in-out infinite;
          width:calc(var(--rp)*1%); height:calc(var(--rp)*1%);
        }
        @keyframes ring-breathe {
          0%,100% { border-color:rgba(0,150,255,0.07); }
          50%      { border-color:rgba(0,200,255,0.18); }
        }

        .aura {
          position:absolute; width:36%; height:36%; border-radius:50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background:radial-gradient(circle,rgba(0,145,255,0.2) 0%,rgba(0,65,200,0.06) 52%,transparent 72%);
          animation:aura-pulse 3s ease-in-out infinite; z-index:2;
        }
        @keyframes aura-pulse {
          0%,100% { transform: translate(-50%, -50%) scale(1);   opacity:0.8; }
          50%      { transform: translate(-50%, -50%) scale(1.1); opacity:1;   }
        }

        .center {
          position:absolute;
          top: 50%; left: 50%;
          /* Translate vertically by half the photo height to make it the true center */
          transform: translate(-50%, calc(-1 * clamp(50px, 11vmin, 80px)));
          z-index:10;
          display:flex; flex-direction:column; align-items:center;
          gap:clamp(10px,2.5vmin,24px);
          pointer-events: none;
        }
        .center > * { pointer-events: auto; }

        .photo-circle {
          width:clamp(100px, 22vmin, 160px); height:clamp(100px, 22vmin, 160px);
          border-radius:50%; overflow:hidden;
          border:clamp(3px,0.6vmin,5px) solid rgba(0,195,255,0.9);
          box-shadow:
            0 0 0 clamp(4px,1vmin,8px) rgba(0,120,255,0.15),
            0 0 clamp(25px,5vmin,50px) rgba(0,170,255,0.6),
            0 0 clamp(55px,10vmin,110px) rgba(0,95,230,0.3),
            inset 0 0 clamp(14px,3vmin,28px) rgba(0,0,0,0.2);
          animation:photo-glow 3.5s ease-in-out infinite;
          background:linear-gradient(145deg,#0a1929,#1e3a5f);
          flex-shrink: 0;
        }
        @keyframes photo-glow {
          0%,100% { border-color:rgba(0,195,255,0.9); transform:scale(1); }
          50% {
            border-color:rgba(0,240,255,1); transform:scale(1.02);
            box-shadow:
              0 0 0 clamp(6px,1.5vmin,12px) rgba(0,140,255,0.25),
              0 0 clamp(40px,7vmin,78px) rgba(0,225,255,0.8),
              0 0 clamp(80px,14vmin,155px) rgba(0,115,248,0.5),
              inset 0 0 clamp(14px,3vmin,28px) rgba(0,0,0,0.15);
          }
        }

        .nametag { text-align:center; padding:0 clamp(12px,3vmin,32px); margin-top: 4px; }
        .nametag h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(22px, 4.2vmin, 38px); 
          font-weight: 800; 
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 8px;
          background: linear-gradient(to right, #fff 20%, #47ccff 50%, #bb86fc 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 12px rgba(71, 204, 255, 0.3));
          white-space: nowrap;
        }
        .nametag p {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(10px, 1.8vmin, 14px); 
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 600;
          margin-top: 4px;
        }

        .icon-pill-inner {
          display:flex; flex-direction:column; align-items:center;
          gap:clamp(3px,0.8vmin,6px); pointer-events:none;
        }

        .ibox {
          width:clamp(36px,7.5vmin,54px); height:clamp(36px,7.5vmin,54px);
          border-radius:clamp(8px,1.8vmin,14px);
          background:rgba(4,14,42,0.93);
          border:1.5px solid rgba(0,165,255,0.38);
          display:flex; align-items:center; justify-content:center;
          box-shadow:
            0 4px 20px rgba(0,0,0,0.65),
            inset 0 1px 0 rgba(255,255,255,0.07),
            0 0 var(--gsize,14px) var(--gc,rgba(0,130,255,0.25));
          position:relative; overflow:hidden; will-change:box-shadow;
          animation:icon-pulse var(--pd,3s) ease-in-out infinite var(--poff,0s);
        }
        .ibox::before {
          content:''; position:absolute; inset:0; border-radius:inherit;
          background:linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 55%);
        }
        @keyframes icon-pulse {
          0%,100% { box-shadow:0 4px 20px rgba(0,0,0,0.65),inset 0 1px 0 rgba(255,255,255,0.07),0 0 var(--gsize,14px) var(--gc,rgba(0,130,255,0.25)); }
          50%      { box-shadow:0 4px 20px rgba(0,0,0,0.65),inset 0 1px 0 rgba(255,255,255,0.07),0 0 calc(var(--gsize,14px)*2.2) var(--gc,rgba(0,130,255,0.5)); }
        }

        .ilabel {
          font-size:clamp(6px,1.1vmin,9px); color:rgba(170,225,255,0.88);
          font-family:'Rajdhani',sans-serif; font-weight:700;
          letter-spacing:0.6px; text-transform:uppercase; white-space:nowrap;
          text-shadow:0 0 8px rgba(0,175,255,0.75);
        }

        .cta-group {
          display: flex; gap: 15px; margin-top: 25px;
          flex-wrap: wrap; justify-content: center;
          z-index: 20; position: relative;
        }
        .cta-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 28px; border-radius: 50px;
          font-family: 'Rajdhani', sans-serif; font-weight: 700;
          text-transform: uppercase; font-size: 13px;
          letter-spacing: 1.2px; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer; text-decoration: none;
          position: relative; overflow: hidden;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .cta-primary {
          background: rgba(0, 145, 255, 0.12);
          border: 1.5px solid rgba(0, 195, 255, 0.65);
          color: #fff;
          box-shadow: 0 0 25px rgba(0, 140, 255, 0.25);
        }
        .cta-primary::after {
          content: ''; position: absolute; top: -50%; left: -60%;
          width: 40%; height: 200%; background: linear-gradient(
            to right, transparent, rgba(255, 255, 255, 0.15), transparent
          );
          transform: rotate(35deg); transition: 0.7s;
        }
        .cta-primary:hover::after {
          left: 120%;
        }
        .cta-primary:hover {
          background: rgba(0, 145, 255, 0.25);
          border-color: #fff;
          box-shadow: 0 0 45px rgba(0, 195, 255, 0.6);
          transform: translateY(-2px) scale(1.03);
          text-shadow: 0 0 10px #fff;
        }

        .cta-secondary {
          background: rgba(195, 146, 252, 0.08);
          border: 1.5px solid rgba(195, 146, 252, 0.45);
          color: #d1a9ff;
          box-shadow: 0 0 20px rgba(195, 146, 252, 0.15);
        }
        .cta-secondary:hover {
          background: rgba(195, 146, 252, 0.18);
          border-color: #fff;
          color: #fff;
          box-shadow: 0 0 35px rgba(195, 146, 252, 0.4);
          transform: translateY(-2px) scale(1.03);
        }

        @media (max-width:480px) {
          .orbit-ring { animation:none; border-color:rgba(0,150,255,0.07); }
          .aura        { animation:none; }
          .cta-btn { padding: 10px 20px; font-size: 11px; }
          .cta-group { margin-top: 15px; }
        }
        @media (prefers-reduced-motion:reduce) {
          .orbit-ring,.aura,.photo-circle,.ibox { animation:none !important; }
          .cta-primary::after { display: none; }
        }
      `}</style>
      {/* Galaxy Background Canvas — fixed, z:0, behind ALL content */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
          display: "block",
        }}
      />
      {/* Main content container — z:10 */}
      <section
        style={{
          minHeight: "100vh",
          background: "transparent" /* NOT bg-gray-900 */,
          position: "relative",
          overflow: "hidden",
        }}>
        {/* Solar system scene */}
        <div
          ref={sceneRef}
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            width: "100vmin",
            height: "100vmin",
            maxWidth: "760px",
            maxHeight: "760px",
            margin: "0 auto",
          }}>
          {/* Orbit rings */}
          {[29, 38, 47, 56, 65, 74, 83, 93].map((radius, index) => (
            <div
              key={radius}
              className="orbit-ring"
              style={
                {
                  "--rp": radius,
                  animationDelay: `${index * 0.4}s`,
                } as React.CSSProperties
              }
            />
          ))}

          <div className="aura" />

          <div className="center">
            <div className="photo-circle">
              {!imageError ? (
                <img
                  src="/cropped_circle_image.png"
                  alt="Kumaresh"
                  onError={() => setImageError(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 8%",
                    borderRadius: "inherit",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(145deg,#0a1929,#1e3a5f)",
                    borderRadius: "inherit",
                    fontSize: "clamp(48px,8vmin,72px)",
                    fontWeight: "bold",
                    color: "white",
                  }}>
                  K
                </div>
              )}
            </div>
            <div className="nametag">
              <h1>Microsoft Stack Developer</h1>
              <p>.NET · Azure · React · SQL · DevOps</p>
            </div>

            <div className="cta-group">
              <Link to="/contact" className="cta-btn cta-primary">
                <Send size={16} />
                Get in Touch
              </Link>
              <a
                href={import.meta.env.VITE_RESUME_URL}
                className="cta-btn cta-secondary"
                target="_blank"
                rel="noopener noreferrer">
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>

          {PLANET_DATA.map((planet, index) => (
            <div
              key={planet.id}
              id={planet.id}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                pointerEvents: "none",
                willChange: "transform",
                contain: "layout style",
                zIndex: 5,
              }}>
              <TechIcon
                name={planet.name}
                color={planet.color}
                delay={index * 0.3}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Section B: The Enterprise Lifecycle */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Side: Production Grade Card */}
          {/* Removed aspect-video on mobile to allow card to grow with text */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative group cursor-pointer">
              {/* --- THE MISSING OUTSIDE HOVER EFFECT --- */}
              {/* This div sits BEHIND the card and expands outward on hover */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#47ccff]/20 via-[#a259ff]/25 to-[#47ccff]/20 rounded-[3rem] blur-[50px] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-105" />

              {/* Main Glass Card */}
              <div className="relative rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl overflow-hidden p-8 md:p-12 min-h-[380px] flex flex-col justify-between transition-all duration-500 group-hover:border-[#47ccff]/40 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_50px_rgba(71,204,255,0.1)]">
                <div className="flex justify-between items-start mb-8">
                  {/* Icon with Neon Pulse */}
                  <div className="p-4 bg-[#47ccff]/10 rounded-2xl border border-[#47ccff]/20 group-hover:bg-[#47ccff]/20 group-hover:border-[#47ccff]/50 transition-all duration-300">
                    <ShieldCheck
                      className="text-[#47ccff] drop-shadow-[0_0_10px_rgba(71,204,255,0.8)]"
                      size={30}
                    />
                  </div>

                  <div className="text-right">
                    <span className="block text-[10px] tracking-[0.3em] text-[#a6abb4] uppercase mb-1 font-semibold group-hover:text-white transition-colors">
                      Infrastructure
                    </span>
                    <span className="text-2xl font-mono font-bold text-white group-hover:text-[#47ccff] transition-colors duration-300">
                      99.9% SLI
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 italic text-white tracking-tight group-hover:text-[#47ccff] transition-colors duration-300">
                    Production Grade.
                  </h3>
                  <p className="text-[#a6abb4] text-sm md:text-base leading-relaxed max-w-md group-hover:text-white transition-colors duration-300">
                    Deploying high-availability systems where downtime isn't an
                    option. Built on the Microsoft Stack, hardened for global
                    scale.
                  </p>
                </div>

                {/* Internal Accent Glow (Bottom Right) */}
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#a259ff]/15 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Engineering Text */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-white">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47ccff] via-[#7e93ff] to-[#a259ff] drop-shadow-[0_0_15px_rgba(71,204,255,0.3)]">
                End-to-End.
              </span>
            </motion.h2>

            <div className="relative space-y-12">
              {/* Animated Vertical Progress Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-0 top-0 w-px bg-gradient-to-b from-[#47ccff] via-white/20 to-transparent origin-top"
              />

              {[
                {
                  label: "Discovery",
                  text: "Translating business logic into technical requirements.",
                },
                {
                  label: "Architect",
                  text: "Designing scalable microservices and cloud infrastructure.",
                },
                {
                  label: "Develop",
                  text: "Clean code with strict type safety and automated testing.",
                },
              ].map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative pl-8 group cursor-default">
                  <div className="absolute -left-[4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/10 group-hover:bg-[#47ccff] group-hover:shadow-[0_0_15px_#47ccff] transition-all duration-300 z-10" />

                  <h4 className="font-bold text-lg mb-2 text-white group-hover:text-[#47ccff] transition-all duration-300">
                    {s.label}
                  </h4>

                  <p className="text-sm text-[#a6abb4] group-hover:text-white transition-colors duration-300">
                    {s.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section C: The Data Intelligence Layer (Refined with Transparency) */}
      <section className="py-24 px-8 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-[#47ccff] font-mono text-[10px] tracking-[0.5em] uppercase">
              .Net Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
              Worked with Mostly <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#47ccff] to-[#a259ff]">
                Semantic Intelligence.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Power BI Analyst",
                skills: ["DAX Optimization", "Semantic Modeling"],
                icon: <Zap size={18} />,
                accent: "#f29111",
                glow: "group-hover:shadow-[0_0_20px_rgba(242,145,17,0.2)]",
              },
              {
                title: "High-Perf Querying",
                skills: ["DuckDB", "Analytical SQL"],
                icon: <Database size={18} />,
                accent: "#ffde59",
                glow: "group-hover:shadow-[0_0_20px_rgba(255,222,89,0.2)]",
              },
              {
                title: "Tabular Services",
                skills: ["ADOMD.NET", "Metadata Management"],
                icon: <Layers size={18} />,
                accent: "#47ccff",
                glow: "group-hover:shadow-[0_0_20px_rgba(71,204,255,0.2)]",
              },
              {
                title: "Modern Storage",
                skills: ["Parquet", "CSV/Delta"],
                icon: <Cloud size={18} />,
                accent: "#a259ff",
                glow: "group-hover:shadow-[0_0_20px_rgba(162,89,255,0.2)]",
              },
            ].map((item, i) => (
              <div
                key={i}
                /* CHANGED: Swapped solid bg for transparent glass with backdrop blur */
                className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
            hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default ${item.glow}`}>
                {/* Accent Line - Slimmer */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ backgroundColor: item.accent }}
                />

                <div
                  className="mb-4 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ color: item.accent }}>
                  {item.icon}
                </div>

                <h3 className="font-bold text-lg mb-3 text-white group-hover:text-[#47ccff] transition-colors">
                  {item.title}
                </h3>

                <ul className="space-y-2">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[12px] text-[#a6abb4] flex items-center gap-2 group-hover:text-white transition-colors">
                      <div
                        className="w-1 h-1 rounded-full opacity-30 group-hover:opacity-100 transition-all"
                        style={{ backgroundColor: item.accent }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Bottom detail - Slimmer */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="w-6 h-0.5 bg-white/5 group-hover:w-full group-hover:bg-white/10 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Floating Badge - Transparent Glass Update */}
          <div className="mt-8 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-dashed border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[".CSV", ".PARQUET", ".JSON"].map((ext) => (
                  <div
                    key={ext}
                    className="px-2 py-0.5 bg-black/60 text-[9px] font-mono border border-white/10 rounded backdrop-blur-sm">
                    {ext}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#a6abb4]">
                Expertise in large-scale metadata & tabular structures.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section D: Performance Engineering - Transparent Glass Update */}
      <section className="py-24 px-8 bg-transparent relative overflow-hidden">
        {/* Soft ambient glow to highlight the content without blocking stars */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#47ccff]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <span className="text-[#a259ff] font-mono text-[10px] tracking-[0.5em] uppercase">
              Performance Engineering
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-white leading-tight">
              Native <br />
              <span className="text-[#47ccff]">Cache Migration.</span>
            </h2>
            <p className="text-sm text-[#a6abb4] leading-relaxed mb-8">
              Successfully migrated the application layer from third-party Redis
              to <strong>Microsoft In-Memory Cache</strong>. This strategic
              shift eliminated external dependency overhead while maintaining
              100% functional parity.
            </p>

            <div className="space-y-4">
              {[
                {
                  label: "Performance Gain",
                  value: "90% Faster",
                  color: "#47ccff",
                },
                { label: "API Cache Uptime", value: "> 92%", color: "#a259ff" },
                {
                  label: "Architecture",
                  value: "Zero-Dependency",
                  color: "#ffde59",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    x: 10,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm transition-colors cursor-default">
                  <span className="text-[11px] uppercase tracking-wider text-[#a6abb4]">
                    {stat.label}
                  </span>
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Technical Visualization Element - Glass Terminal */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group perspective-1000">
              {/* Window Controls */}
              <div className="absolute top-4 left-6 flex gap-1.5 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/50 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500/50 transition-colors" />
              </div>

              {/* CHANGED: Swapped solid black bg for transparent glass backdrop */}
              <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 pt-14 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Live Migration Logs */}
                  <div className="space-y-3 font-mono text-[10px] leading-tight">
                    <div className="text-[#a259ff]/60">
                      [MIGRATION] Decommissioning Redis Nodes...
                    </div>
                    <div className="text-green-400/80">
                      [SUCCESS] Microsoft.Extensions.Caching initialized.
                    </div>
                    <div className="text-white/40">
                      [METRIC] Response time:{" "}
                      <span className="text-[#47ccff]">12ms</span> (was 120ms)
                    </div>
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-[#ffde59]">
                      &gt; IMemoryCache active: 0.0ms lookup latency
                    </motion.div>
                  </div>

                  {/* Grid-Based Memory Matrix - Transparent inner card */}
                  <div className="flex flex-col items-center justify-center p-8 bg-black/20 rounded-2xl border border-white/5 relative overflow-hidden group/viz">
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20 p-4">
                      {[...Array(36)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            backgroundColor:
                              Math.random() > 0.8
                                ? ["#121b25", "#47ccff", "#121b25"]
                                : "#121b25",
                            opacity: [0.2, 0.5, 0.2],
                          }}
                          transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                          }}
                          className="w-full h-full rounded-sm border border-white/5"
                        />
                      ))}
                    </div>

                    <div className="relative z-10 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative">
                        <div className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(71,204,255,0.3)]">
                          90<span className="text-xl text-[#47ccff]">%</span>
                        </div>
                        <div className="mt-2 inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-[#47ccff] font-bold">
                            Latency Drop
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#47ccff]/30 group">
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-2 h-2 rounded-full bg-green-500/50"
                      />
                      <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] group-hover:bg-[#47ccff] group-hover:shadow-[#47ccff]/60 transition-all" />
                    </div>
                    <span className="text-[10px] text-white/70 font-mono font-medium tracking-[0.15em] uppercase">
                      Status:{" "}
                      <span className="text-white group-hover:text-[#47ccff]">
                        Engine_Optimized
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 px-3 py-1.5 bg-[#47ccff]/5 border border-[#47ccff]/20 rounded-lg text-[#47ccff]">
                      <Cpu size={14} className="animate-pulse" />
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em]">
                        STABLE_BUILD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Final CTA - Transparent Gradient */}
      {/* Final CTA - Completely Transparent & Minimalist */}
      <section className="py-40 text-center relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-6xl font-bold mb-10 text-white max-w-4xl mx-auto leading-tight tracking-tight">
            Ready to build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47ccff] to-[#a259ff]">
              Scalable Enterprise Product?
            </span>
          </h2>
          <Link to="/contact">
            <button className="px-12 py-4 bg-white text-slate-950 font-black rounded-full hover:scale-110 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-95 shadow-xl">
              LET'S TALK
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
