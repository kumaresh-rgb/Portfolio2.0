import { useEffect, useRef, useState, useCallback } from "react";
import { VisitorTelemetry } from "./VisitorTelemetry";

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
  const animationRef = useRef<number | null>(null);
  const orbitAnimRef = useRef<number | null>(null);
  const [sceneSize, setSceneSize] = useState(0);
  const [imageError, setImageError] = useState(false);
  const frameRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

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
    const getIcon = () => {
      const imgMap: Record<string, { src: string; alt: string }> = {
        ".NET": { src: "/Microsoft_.NET_logo.png", alt: ".NET" },
        React: { src: "/React.png", alt: "React" },
        Angular: { src: "/Angular.png", alt: "Angular" },
        Redis: { src: "/pngegg.png", alt: "Redis" },
        "SQL Server": { src: "/sql-database.png", alt: "SQL Server" },
        "Power BI": { src: "/power_bi.png", alt: "Power BI" },
        Kubernetes: { src: "/kubernetes-services.png", alt: "Kubernetes" },
        DevOps: { src: "/azure-devops.png", alt: "DevOps" },
        "MS Fabric": { src: "/fabric.png", alt: "MS Fabric" },
        "C#": { src: "/Logo_C_sharp.png", alt: "C#" },
        "EF Core": { src: "/Entity.svg", alt: "EF Core" },
        Docker: { src: "/Docker.png", alt: "Docker" },
        SSMS: { src: "/ssms_21.png", alt: "SSMS" },
        Azure: { src: "/Azure.png", alt: "Azure" },
      };
      const info = imgMap[name];
      if (!info) return null;
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <img
            src={info.src}
            alt={info.alt}
            style={{
              width: "70%",
              height: "70%",
              objectFit: "contain",
              filter: `drop-shadow(0 0 4px ${color})`,
            }}
          />
        </div>
      );
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
          {getIcon()}
        </div>
        <span className="ilabel">{name}</span>
      </div>
    );
  };

  // Scene size
  useEffect(() => {
    const update = () => {
      if (sceneRef.current) {
        const size = Math.min(
          sceneRef.current.offsetWidth,
          sceneRef.current.offsetHeight,
        );
        setSceneSize(size);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Orbit animation — uses timestamp-based timing for smoothness, no jank
  useEffect(() => {
    if (!sceneSize) return;

    const elements = PLANET_DATA.map((p) => document.getElementById(p.id));
    startTimeRef.current = null;

    // LAUNCH_DURATION in ms — smooth cubic ease-out over 1.2s
    const LAUNCH_DURATION = 1200;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const getIconHalf = () => {
      const ibox = elements[0]?.querySelector(".ibox") as HTMLElement | null;
      return ibox ? ibox.offsetWidth / 2 : 27;
    };

    const loop = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const half = getIconHalf();
      const labelH = 20;

      PLANET_DATA.forEach((p, i) => {
        const r = (p.rPct / 100) * sceneSize;
        let x: number, y: number;

        if (elapsed < LAUNCH_DURATION) {
          const t = easeOutCubic(elapsed / LAUNCH_DURATION);
          const targetA = (p.startAngle * Math.PI) / 180;
          const targetX = Math.cos(targetA) * r - half;
          const targetY = Math.sin(targetA) * r - half - labelH / 2;
          x = targetX * t;
          y = targetY * t;
        } else {
          const orbitTime = (elapsed - LAUNCH_DURATION) / 1000; // seconds
          const a = ((p.startAngle + orbitTime * p.speed * 60) * Math.PI) / 180;
          x = Math.cos(a) * r - half;
          y = Math.sin(a) * r - half - labelH / 2;
        }

        if (elements[i]) {
          (elements[i] as HTMLElement).style.transform =
            `translate(${x}px, ${y}px)`;
        }
      });

      orbitAnimRef.current = requestAnimationFrame(loop);
    };

    orbitAnimRef.current = requestAnimationFrame(loop);
    return () => {
      if (orbitAnimRef.current) cancelAnimationFrame(orbitAnimRef.current);
    };
  }, [sceneSize]);

  // Galaxy canvas background — deep space with nebula, stars, shooting stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStaticNebula();
    };

    // Static nebula clouds drawn once onto an offscreen canvas
    const nebulaCanvas = document.createElement("canvas");
    const nCtx = nebulaCanvas.getContext("2d")!;

    const drawStaticNebula = () => {
      nebulaCanvas.width = canvas.width;
      nebulaCanvas.height = canvas.height;
      nCtx.clearRect(0, 0, nebulaCanvas.width, nebulaCanvas.height);

      // Deep space background
      const bgGrad = nCtx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8,
      );
      bgGrad.addColorStop(0, "rgba(3,8,25,1)");
      bgGrad.addColorStop(0.4, "rgba(1,4,18,1)");
      bgGrad.addColorStop(1, "rgba(0,0,8,1)");
      nCtx.fillStyle = bgGrad;
      nCtx.fillRect(0, 0, nebulaCanvas.width, nebulaCanvas.height);

      // Nebula blobs
      const nebulae = [
        { x: 0.15, y: 0.2, r: 0.35, c: "rgba(30,10,80," },
        { x: 0.8, y: 0.15, r: 0.28, c: "rgba(0,20,70," },
        { x: 0.6, y: 0.75, r: 0.32, c: "rgba(0,35,90," },
        { x: 0.1, y: 0.7, r: 0.25, c: "rgba(20,5,60," },
        { x: 0.5, y: 0.45, r: 0.4, c: "rgba(0,15,50," },
        { x: 0.9, y: 0.55, r: 0.22, c: "rgba(15,0,55," },
      ];

      nebulae.forEach(({ x, y, r, c }) => {
        const cx = x * canvas.width;
        const cy = y * canvas.height;
        const rad = r * Math.min(canvas.width, canvas.height);
        const g = nCtx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, c + "0.18)");
        g.addColorStop(0.5, c + "0.07)");
        g.addColorStop(1, c + "0)");
        nCtx.beginPath();
        nCtx.ellipse(
          cx,
          cy,
          rad,
          rad * 0.65,
          Math.random() * Math.PI,
          0,
          Math.PI * 2,
        );
        nCtx.fillStyle = g;
        nCtx.fill();
      });

      // Milky way band
      const mwGrad = nCtx.createLinearGradient(
        0,
        canvas.height * 0.3,
        canvas.width,
        canvas.height * 0.7,
      );
      mwGrad.addColorStop(0, "rgba(0,0,0,0)");
      mwGrad.addColorStop(0.3, "rgba(20,30,80,0.06)");
      mwGrad.addColorStop(0.5, "rgba(30,50,120,0.09)");
      mwGrad.addColorStop(0.7, "rgba(20,30,80,0.06)");
      mwGrad.addColorStop(1, "rgba(0,0,0,0)");
      nCtx.fillStyle = mwGrad;
      nCtx.fillRect(0, 0, canvas.width, canvas.height);

      // Static stars (many sizes, realistic distribution)
      const starCount = Math.floor((canvas.width * canvas.height) / 1800);
      for (let i = 0; i < starCount; i++) {
        const sx = Math.random() * canvas.width;
        const sy = Math.random() * canvas.height;
        const sz = Math.random();
        let radius: number, opacity: number, color: string;

        if (sz < 0.7) {
          // dim tiny stars
          radius = Math.random() * 0.5 + 0.2;
          opacity = Math.random() * 0.4 + 0.1;
          color = `rgba(200,210,255,${opacity})`;
        } else if (sz < 0.92) {
          // medium stars
          radius = Math.random() * 0.8 + 0.5;
          opacity = Math.random() * 0.5 + 0.3;
          const hue = Math.random();
          color =
            hue < 0.3
              ? `rgba(180,200,255,${opacity})`
              : hue < 0.6
                ? `rgba(255,250,240,${opacity})`
                : `rgba(255,220,180,${opacity})`;
        } else {
          // bright stars with glow
          radius = Math.random() * 1.2 + 0.8;
          opacity = Math.random() * 0.4 + 0.6;
          const g2 = nCtx.createRadialGradient(sx, sy, 0, sx, sy, radius * 5);
          g2.addColorStop(0, `rgba(255,255,255,${opacity})`);
          g2.addColorStop(0.3, `rgba(200,220,255,${opacity * 0.4})`);
          g2.addColorStop(1, "rgba(0,0,0,0)");
          nCtx.beginPath();
          nCtx.arc(sx, sy, radius * 5, 0, Math.PI * 2);
          nCtx.fillStyle = g2;
          nCtx.fill();
          color = `rgba(255,255,255,${opacity})`;
        }

        nCtx.beginPath();
        nCtx.arc(sx, sy, radius, 0, Math.PI * 2);
        nCtx.fillStyle = color;
        nCtx.fill();
      }
    };

    // Twinkling stars (animated layer)
    interface TwinkleStar {
      x: number;
      y: number;
      r: number;
      phase: number;
      speed: number;
      baseAlpha: number;
    }
    const twinkleStars: TwinkleStar[] = [];
    const initTwinklers = () => {
      twinkleStars.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      for (let i = 0; i < count; i++) {
        twinkleStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.5,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 1.2,
          baseAlpha: 0.2 + Math.random() * 0.5,
        });
      }
    };

    // Shooting stars
    interface ShootingStar {
      x: number;
      y: number;
      vx: number;
      vy: number;
      len: number;
      alpha: number;
      active: boolean;
      timer: number;
    }
    const shootingStars: ShootingStar[] = Array(6)
      .fill(null)
      .map(() => ({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        len: 0,
        alpha: 0,
        active: false,
        timer: Math.random() * 300,
      }));

    const spawnShootingStar = (s: ShootingStar) => {
      const side = Math.floor(Math.random() * 2);
      if (side === 0) {
        s.x = Math.random() * canvas.width;
        s.y = -10;
      } else {
        s.x = -10;
        s.y = Math.random() * canvas.height * 0.5;
      }
      const angle = ((Math.random() * 30 + 20) * Math.PI) / 180;
      const speed = 8 + Math.random() * 14;
      s.vx = Math.cos(angle) * speed;
      s.vy = Math.sin(angle) * speed;
      s.len = 60 + Math.random() * 120;
      s.alpha = 1;
      s.active = true;
      s.timer = 200 + Math.random() * 400;
    };

    resize();
    initTwinklers();
    window.addEventListener("resize", () => {
      resize();
      initTwinklers();
    });

    let frame = 0;
    const render = (timestamp: number) => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw static nebula layer
      ctx.drawImage(nebulaCanvas, 0, 0);

      // Twinkling stars
      const t = timestamp / 1000;
      twinkleStars.forEach((s) => {
        const alpha =
          s.baseAlpha * (0.4 + 0.6 * Math.abs(Math.sin(t * s.speed + s.phase)));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      // Shooting stars
      shootingStars.forEach((s) => {
        if (!s.active) {
          s.timer--;
          if (s.timer <= 0) spawnShootingStar(s);
          return;
        }
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.018;

        if (
          s.alpha <= 0 ||
          s.x > canvas.width + 50 ||
          s.y > canvas.height + 50
        ) {
          s.active = false;
          s.timer = 180 + Math.random() * 300;
          return;
        }

        const tailX =
          s.x - s.vx * (s.len / Math.sqrt(s.vx * s.vx + s.vy * s.vy));
        const tailY =
          s.y - s.vy * (s.len / Math.sqrt(s.vx * s.vx + s.vy * s.vy));
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.7, `rgba(180,220,255,${s.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(255,255,255,${s.alpha})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Tip glow
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 4);
        glow.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(s.x, s.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      });

      // Center glow (behind the solar system scene)
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const pr = 120 + Math.sin(t * 0.5) * 15;
      const pGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, pr);
      pGrad.addColorStop(
        0,
        `rgba(0,140,255,${0.08 + Math.sin(t * 0.7) * 0.03})`,
      );
      pGrad.addColorStop(0.5, `rgba(0,80,200,0.04)`);
      pGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, pr, 0, Math.PI * 2);
      ctx.fillStyle = pGrad;
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
    <section className="home-section">
      {/* Galaxy Canvas */}

      <canvas ref={canvasRef} className="galaxy-canvas" />

      {/* Main Scene */}
      <div ref={sceneRef} className="solar-scene">
        {/* Orbit Rings */}
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

        {/* Aura */}
        <div className="aura" />

        {/* Center Content */}
        <div className="center">
          <div className="photo-circle">
            {!imageError ? (
              <img
                src="/cropped_circle_image.png"
                alt="Kumaresh - Microsoft Stack Developer"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="photo-fallback">K</div>
            )}
          </div>
          <div className="nametag">
            <h1>Microsoft Stack Developer</h1>
            <p>.NET · Azure · React · SQL · DevOps</p>
          </div>
        </div>

        {/* Orbiting Icons */}
        {PLANET_DATA.map((planet, index) => (
          <div key={planet.id} id={planet.id} className="icon-wrapper">
            <TechIcon
              name={planet.name}
              color={planet.color}
              delay={index * 0.3}
            />
          </div>
        ))}
      </div>

      <style>{`
        .home-section {
          min-height: 100vh;
          background: #000508;
          position: relative;
          overflow: hidden;
        }

        .galaxy-canvas {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        /* Main solar scene */
        .solar-scene {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100vmin;
          height: 100vmin;
          max-width: 760px;
          max-height: 760px;
          margin: 0 auto;
        }

        /* Orbit Rings */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(0, 150, 255, 0.1);
          pointer-events: none;
          animation: ring-breathe 6s ease-in-out infinite;
          width: calc(var(--rp) * 1%);
          height: calc(var(--rp) * 1%);
        }

        @keyframes ring-breathe {
          0%, 100% { border-color: rgba(0, 150, 255, 0.07); }
          50% { border-color: rgba(0, 200, 255, 0.18); }
        }

        /* Aura */
        .aura {
          position: absolute;
          width: 36%;
          height: 36%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,145,255,0.2) 0%, rgba(0,65,200,0.06) 52%, transparent 72%);
          animation: aura-pulse 3s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes aura-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        /* Center */
        .center {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(10px, 2.5vmin, 24px);
        }

        .photo-circle {
          width: clamp(120px, 26vmin, 195px);
          height: clamp(120px, 26vmin, 195px);
          border-radius: 50%;
          overflow: hidden;
          border: clamp(3px, 0.6vmin, 5px) solid rgba(0,195,255,0.9);
          box-shadow:
            0 0 0 clamp(4px, 1vmin, 8px) rgba(0,120,255,0.15),
            0 0 clamp(25px, 5vmin, 50px) rgba(0,170,255,0.6),
            0 0 clamp(55px, 10vmin, 110px) rgba(0,95,230,0.3),
            inset 0 0 clamp(14px, 3vmin, 28px) rgba(0,0,0,0.2);
          animation: photo-glow 3.5s ease-in-out infinite;
          background: linear-gradient(145deg, #0a1929, #1e3a5f);
        }

        .photo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 8%;
        }

        .photo-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #0a1929, #1e3a5f);
          font-size: clamp(48px, 8vmin, 72px);
          font-weight: bold;
          color: white;
        }

        @keyframes photo-glow {
          0%, 100% {
            border-color: rgba(0,195,255,0.9);
            transform: scale(1);
          }
          50% {
            border-color: rgba(0,240,255,1);
            transform: scale(1.02);
            box-shadow:
              0 0 0 clamp(6px, 1.5vmin, 12px) rgba(0,140,255,0.25),
              0 0 clamp(40px, 7vmin, 78px) rgba(0,225,255,0.8),
              0 0 clamp(80px, 14vmin, 155px) rgba(0,115,248,0.5),
              inset 0 0 clamp(14px, 3vmin, 28px) rgba(0,0,0,0.15);
          }
        }

        .nametag {
          text-align: center;
          padding: 0 clamp(8px, 2vmin, 20px);
        }

        .nametag h1 {
          font-family: 'Orbitron', monospace;
          font-size: clamp(8px, 2.2vmin, 17px);
          font-weight: 900;
          color: #fff;
          letter-spacing: clamp(1px, 0.6vmin, 4px);
          text-shadow: 0 0 20px rgba(0,185,255,0.95), 0 0 50px rgba(0,115,255,0.5);
          white-space: nowrap;
        }

        .nametag p {
          font-size: clamp(7px, 1.5vmin, 11px);
          color: rgba(100,205,255,0.6);
          letter-spacing: clamp(0.5px, 0.4vmin, 2.5px);
          margin-top: clamp(3px, 0.6vmin, 6px);
          font-weight: 300;
        }

        /* Icon wrapper — GPU compositing layer */
        .icon-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          pointer-events: none;
          will-change: transform;
          transform: translate(0, 0); /* initial so browser pre-composites */
          contain: layout style;
        }

        .icon-pill-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(3px, 0.8vmin, 6px);
          pointer-events: none;
        }

        .ibox {
          width: clamp(36px, 7.5vmin, 54px);
          height: clamp(36px, 7.5vmin, 54px);
          border-radius: clamp(8px, 1.8vmin, 14px);
          background: rgba(4,14,42,0.93);
          border: 1.5px solid rgba(0,165,255,0.38);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 4px 20px rgba(0,0,0,0.65),
            inset 0 1px 0 rgba(255,255,255,0.07),
            0 0 var(--gsize, 14px) var(--gc, rgba(0,130,255,0.25));
          position: relative;
          overflow: hidden;
          animation: icon-pulse var(--pd, 3s) ease-in-out infinite var(--poff, 0s);
          will-change: box-shadow;
        }

        @keyframes icon-pulse {
          0%, 100% {
            box-shadow:
              0 4px 20px rgba(0,0,0,0.65),
              inset 0 1px 0 rgba(255,255,255,0.07),
              0 0 var(--gsize, 14px) var(--gc, rgba(0,130,255,0.25));
          }
          50% {
            box-shadow:
              0 4px 20px rgba(0,0,0,0.65),
              inset 0 1px 0 rgba(255,255,255,0.07),
              0 0 calc(var(--gsize, 14px) * 2.2) var(--gc, rgba(0,130,255,0.5));
          }
        }

        .ibox::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 55%);
        }

        .ibox img {
          position: relative;
          z-index: 1;
        }

        .ilabel {
          font-size: clamp(6px, 1.1vmin, 9px);
          color: rgba(170,225,255,0.88);
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: 0 0 8px rgba(0,175,255,0.75);
        }

        /* Mobile performance — reduce effects on low-power devices */
        @media (max-width: 480px) {
          .orbit-ring {
            animation: none;
            border-color: rgba(0,150,255,0.08);
          }
          .aura {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-ring,
          .aura,
          .photo-circle,
          .ibox {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
