import { useEffect, useRef, useState } from "react";

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
  const [sceneSize, setSceneSize] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [iconsLaunched, setIconsLaunched] = useState(false);

  // Planet data for orbiting icons
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
      rPct: 46,
      speed: 0.14,
      startAngle: 160,
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
  ];

  // Technology icons
  const TechIcon: React.FC<TechIconProps> = ({ name, color, delay }) => {
    const getIcon = () => {
      switch (name) {
        case ".NET":
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
                src="/Microsoft_.NET_logo.png"
                alt=".NET"
                style={{
                  width: "75%",
                  height: "75%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(120, 80, 255, 0.6))",
                }}
              />
            </div>
          );
        case "React":
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
                src="/React.png"
                alt="React"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(0, 230, 255, 0.6))",
                }}
              />
            </div>
          );
        case "Angular":
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
                src="/Angular.png"
                alt="Angular"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(255, 60, 60, 0.6))",
                }}
              />
            </div>
          );
        case "Redis":
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
                src="/pngegg.png"
                alt="Redis"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(220, 50, 50, 0.6))",
                }}
              />
            </div>
          );
        case "SQL Server":
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
                src="/sql-database.png"
                alt="SQL Server"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(220, 50, 50, 0.6))",
                }}
              />
            </div>
          );
        case "Power BI":
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
                src="/power_bi.png"
                alt="Power BI"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(255, 200, 0, 0.6))",
                }}
              />
            </div>
          );
        case "Kubernetes":
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
                src="/kubernetes-services.png"
                alt="Kubernetes"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(50, 108, 229, 0.6))",
                }}
              />
            </div>
          );
        case "DevOps":
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
                src="/azure-devops.png"
                alt="DevOps"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(0, 180, 255, 0.6))",
                }}
              />
            </div>
          );
        case "MS Fabric":
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
                src="/fabric.png"
                alt="MS Fabric"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(0, 210, 240, 0.6))",
                }}
              />
            </div>
          );
        case "C#":
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
                src="/Logo_C_sharp.png"
                alt="C#"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(190, 80, 255, 0.6))",
                }}
              />
            </div>
          );
        case "EF Core":
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
                src="/public/Entity.svg"
                alt="EF Core"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(100, 80, 200, 0.6))",
                }}
              />
            </div>
          );
        case "Docker":
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
                src="/Docker.png"
                alt="Docker"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(0, 200, 150, 0.6))",
                }}
              />
            </div>
          );
        case "SSMS":
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
                src="/ssms_21.png"
                alt="SSMS"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(255, 140, 0, 0.6))",
                }}
              />
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div
        className="icon-pill"
        style={{
          animation: `icon-pulse ${3.5 + Math.random() * 2}s ease-in-out infinite ${delay}s`,
        }}>
        <div
          className="ibox"
          style={
            {
              "--gc": color as any,
              "--gsize": "14px",
              "--pd": `${2.5 + Math.random() * 2}s`,
              "--poff": `${delay}s`,
            } as React.CSSProperties
          }>
          {getIcon()}
        </div>
        <span className="ilabel">{name}</span>
      </div>
    );
  };

  // Initialize scene and animations
  useEffect(() => {
    const updateSceneSize = () => {
      if (sceneRef.current) {
        const size = Math.min(
          sceneRef.current.offsetWidth,
          sceneRef.current.offsetHeight,
        );
        setSceneSize(size);
      }
    };

    updateSceneSize();
    window.addEventListener("resize", updateSceneSize);

    return () => window.removeEventListener("resize", updateSceneSize);
  }, []);

  // Orbit animation
  useEffect(() => {
    if (!sceneRef.current || sceneSize === 0) return;

    const elements = PLANET_DATA.map((p) => document.getElementById(p.id));
    let frame = 0;

    const getIconHalf = () => {
      const ibox = elements[0]?.querySelector(".ibox");
      if (!ibox) return 27;
      return (ibox as HTMLElement).offsetWidth / 2;
    };

    const orbitLoop = () => {
      frame++;
      const half = getIconHalf();
      const labelH = 20;

      PLANET_DATA.forEach((p, i) => {
        let x, y;

        // Calculate launch progress (0 to 1 over 3 seconds for dramatic effect)
        const launchProgress = Math.min(frame / 180, 1); // 3 seconds at 60fps

        if (launchProgress < 1) {
          // Big Bang burst animation - explosive ease out
          const easeOut = 1 - Math.pow(1 - launchProgress, 4);
          const targetR = (p.rPct / 100) * sceneSize;
          const targetA = (p.startAngle * Math.PI) / 180; // Use initial angle, no rotation yet
          const targetX = Math.cos(targetA) * targetR - half;
          const targetY = Math.sin(targetA) * targetR - half - labelH / 2;

          // Burst from center with explosive force
          x = 0 + targetX * easeOut;
          y = 0 + targetY * easeOut;
        } else {
          // Normal orbiting after Big Bang burst
          const r = (p.rPct / 100) * sceneSize;
          const a = ((p.startAngle + (frame - 180) * p.speed) * Math.PI) / 180;
          x = Math.cos(a) * r - half;
          y = Math.sin(a) * r - half - labelH / 2;
        }

        if (elements[i]) {
          elements[i].style.transform = `translate(${x}px, ${y}px)`;
        }
      });

      animationRef.current = requestAnimationFrame(orbitLoop);
    };

    orbitLoop();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [sceneSize, iconsLaunched]);

  // Canvas background animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const CX = () => canvas.width / 2;
    const CY = () => canvas.height / 2;

    const PCOLS: [string, string][] = [
      ["rgba(120,80,255,", "rgba(190,140,255,"],
      ["rgba(0,215,255,", "rgba(100,255,255,"],
      ["rgba(255,50,50,", "rgba(255,130,130,"],
      ["rgba(0,120,255,", "rgba(80,200,255,"],
      ["rgba(220,30,30,", "rgba(255,100,100,"],
      ["rgba(255,200,0,", "rgba(255,245,100,"],
      ["rgba(40,100,230,", "rgba(100,170,255,"],
      ["rgba(0,165,255,", "rgba(80,230,255,"],
      ["rgba(0,200,230,", "rgba(80,245,255,"],
      ["rgba(180,70,255,", "rgba(220,150,255,"],
    ];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      sz: number;
      maxL: number;
      life: number;
      col: string;
      tail: boolean;
      tailL: number;
      dec: number;
      grav: number;
      twk: boolean;
      twkP: number;

      constructor(burst: boolean) {
        const a = Math.random() * Math.PI * 2;
        const spd = burst ? 1.2 + Math.random() * 5.8 : 0.1 + Math.random() * 1;
        this.x = CX() + (Math.random() - 0.5) * 30;
        this.y = CY() + (Math.random() - 0.5) * 30;
        this.vx = Math.cos(a) * spd;
        this.vy = Math.sin(a) * spd;
        this.sz = burst ? Math.random() * 3.5 + 0.5 : Math.random() * 1.8 + 0.3;
        this.maxL = burst
          ? 80 + Math.random() * 110
          : 110 + Math.random() * 150;
        this.life = this.maxL;
        const sec = Math.floor((a / (Math.PI * 2)) * 10);
        const cp = PCOLS[sec % 10];
        this.col = Math.random() > 0.5 ? cp[0] : cp[1];
        this.tail = burst && Math.random() > 0.35;
        this.tailL = 5 + Math.random() * 12;
        this.dec = 0.977 + Math.random() * 0.018;
        this.grav = burst ? 0 : 0.005;
        this.twk = !burst && Math.random() > 0.5;
        this.twkP = Math.random() * Math.PI * 2;
      }

      step() {
        this.life--;
        this.vx *= this.dec;
        this.vy *= this.dec;
        this.vy += this.grav;
        this.x += this.vx;
        this.y += this.vy;
        if (this.twk) this.twkP += 0.07;
      }

      draw() {
        let al = Math.max(0, this.life / this.maxL);
        if (this.twk) al *= 0.5 + 0.5 * Math.sin(this.twkP);

        if (this.tail) {
          ctx!.beginPath();
          ctx!.moveTo(this.x, this.y);
          ctx!.lineTo(
            this.x - this.vx * this.tailL,
            this.y - this.vy * this.tailL,
          );
          ctx!.strokeStyle = this.col + al * 0.5 + ")";
          ctx!.lineWidth = this.sz * 0.55;
          ctx!.stroke();
        }

        if (this.sz > 1.3) {
          const g = ctx!.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.sz * 4,
          );
          g.addColorStop(0, this.col + al * 0.55 + ")");
          g.addColorStop(1, this.col + "0)");
          ctx!.beginPath();
          ctx!.arc(this.x, this.y, this.sz * 4, 0, Math.PI * 2);
          ctx!.fillStyle = g;
          ctx!.fill();
        }

        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.sz * (0.4 + al * 0.6), 0, Math.PI * 2);
        ctx!.fillStyle = this.col + al + ")";
        ctx!.fill();
      }

      dead() {
        return this.life <= 0;
      }
    }

    class Wave {
      r: number;
      maxR: number;
      life: number;
      maxL: number;
      cp: [string, string];

      constructor(ci: number) {
        this.r = 5;
        this.maxR = Math.max(canvas.width, canvas.height) * 0.78;
        this.life = 65;
        this.maxL = 65;
        this.cp = PCOLS[ci % 10];
      }

      step() {
        this.r += this.maxR / this.maxL;
        this.life--;
      }

      draw() {
        const al = (this.life / this.maxL) * 0.5;
        const w = 2.5 + (1 - this.life / this.maxL) * 4;
        ctx!.beginPath();
        ctx!.arc(CX(), CY(), this.r, 0, Math.PI * 2);
        ctx!.strokeStyle = this.cp[0] + al + ")";
        ctx!.lineWidth = w;
        ctx!.stroke();
        ctx!.beginPath();
        ctx!.arc(CX(), CY(), this.r * 0.82, 0, Math.PI * 2);
        ctx!.strokeStyle = this.cp[1] + al * 0.4 + ")";
        ctx!.lineWidth = w * 0.5;
        ctx!.stroke();
      }

      dead() {
        return this.life <= 0;
      }
    }

    let pts: Particle[] = [],
      waves: Wave[] = [],
      fr2 = 0,
      bc = 0;

    const burst = (ci: number) => {
      for (let i = 0; i < 350; i++) pts.push(new Particle(true));
      for (let w = 0; w < 3; w++)
        setTimeout(() => waves.push(new Wave(ci + w)), w * 160);
    };

    // Big Bang effect only on initial page load
    burst(0);

    // Launch icons immediately with Big Bang
    setIconsLaunched(true);

    const render = () => {
      fr2++;
      ctx!.fillStyle = "rgba(2,8,16,0.15)";
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      if (fr2 % 2 === 0 && pts.length < 900) {
        const p = new Particle(false);
        p.col =
          PCOLS[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 2)];
        pts.push(p);
      }

      waves = waves.filter((w) => {
        w.step();
        w.draw();
        return !w.dead();
      });

      pts = pts.filter((p) => {
        p.step();
        p.draw();
        return !p.dead();
      });

      const r = 100 + Math.sin(fr2 * 0.04) * 12;
      const g = ctx!.createRadialGradient(CX(), CY(), 0, CX(), CY(), r);
      g.addColorStop(0, `rgba(0,155,255,${0.1 + Math.sin(fr2 * 0.05) * 0.05})`);
      g.addColorStop(0.5, `rgba(0,85,220,0.06)`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.beginPath();
      ctx!.arc(CX(), CY(), r, 0, Math.PI * 2);
      ctx!.fillStyle = g;
      ctx!.fill();

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(130)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2.4 + 0.3}px`,
              height: `${Math.random() * 2.4 + 0.3}px`,
              animationDuration: `${1.5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 7}s`,
            }}
          />
        ))}
      </div>

      {/* Main Scene */}
      <div
        ref={sceneRef}
        className="relative z-20 flex items-center justify-center min-h-screen"
        style={{
          width: "100vmin",
          height: "100vmin",
          maxWidth: "760px",
          maxHeight: "760px",
          margin: "0 auto",
        }}>
        {/* Orbit Rings */}
        {[29, 38, 47, 56, 65, 74, 83, 93].map((radius, index) => (
          <div
            key={radius}
            className="orbit-ring"
            style={
              {
                "--rp": radius as any,
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
                src="/public/cropped_circle_image.png"
                alt="Kumaresh - Microsoft Stack Developer"
                onError={() => setImageError(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
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
                  background: "linear-gradient(145deg, #0a1929, #1e3a5f)",
                  borderRadius: "inherit",
                  fontSize: "clamp(48px, 8vmin, 72px)",
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
        </div>

        {/* Orbiting Icons */}
        {PLANET_DATA.map((planet, index) => (
          <div
            key={planet.id}
            id={planet.id}
            className="icon-pill"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              pointerEvents: "none",
              willChange: "transform",
            }}>
            <TechIcon
              name={planet.name}
              color={planet.color}
              delay={index * 0.3}
            />
          </div>
        ))}
      </div>

      <style>{`
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
          0%, 100% { border-color: rgba(0, 150, 255, 0.08); }
          50% { border-color: rgba(0, 200, 255, 0.2); }
        }

        /* Aura */
        .aura {
          position: absolute;
          width: 36%;
          height: 36%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 145, 255, 0.22) 0%, rgba(0, 65, 200, 0.07) 52%, transparent 72%);
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
          border: clamp(3px, 0.6vmin, 5px) solid rgba(0, 195, 255, 0.9);
          box-shadow: 
            0 0 0 clamp(4px, 1vmin, 8px) rgba(0, 120, 255, 0.15),
            0 0 clamp(25px, 5vmin, 50px) rgba(0, 170, 255, 0.6),
            0 0 clamp(55px, 10vmin, 110px) rgba(0, 95, 230, 0.3),
            inset 0 0 clamp(14px, 3vmin, 28px) rgba(0, 0, 0, 0.2);
          animation: photo-glow 3.5s ease-in-out infinite;
          position: relative;
          background: linear-gradient(145deg, #0a1929, #1e3a5f);
        }

        @keyframes photo-glow {
          0%, 100% { 
            border-color: rgba(0, 195, 255, 0.9); 
            transform: scale(1);
          }
          50% { 
            border-color: rgba(0, 240, 255, 1); 
            transform: scale(1.02);
            box-shadow: 
              0 0 0 clamp(6px, 1.5vmin, 12px) rgba(0, 140, 255, 0.25),
              0 0 clamp(40px, 7vmin, 78px) rgba(0, 225, 255, 0.8),
              0 0 clamp(80px, 14vmin, 155px) rgba(0, 115, 248, 0.5),
              inset 0 0 clamp(14px, 3vmin, 28px) rgba(0, 0, 0, 0.15); 
          }
        }

        .photo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 8%;
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
          text-shadow: 0 0 20px rgba(0, 185, 255, 0.95), 0 0 50px rgba(0, 115, 255, 0.5);
          white-space: nowrap;
        }

        .nametag p {
          font-size: clamp(7px, 1.5vmin, 11px);
          color: rgba(100, 205, 255, 0.6);
          letter-spacing: clamp(0.5px, 0.4vmin, 2.5px);
          margin-top: clamp(3px, 0.6vmin, 6px);
          font-weight: 300;
        }

        /* Icon Pills */
        .icon-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(3px, 0.8vmin, 6px);
          pointer-events: none;
          will-change: transform;
        }

        .ibox {
          width: clamp(36px, 7.5vmin, 54px);
          height: clamp(36px, 7.5vmin, 54px);
          border-radius: clamp(8px, 1.8vmin, 14px);
          background: rgba(4, 14, 42, 0.93);
          border: 1.5px solid rgba(0, 165, 255, 0.38);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.65),
            inset 0 1px 0 rgba(255, 255, 255, 0.07),
            0 0 var(--gsize, 14px) var(--gc, rgba(0, 130, 255, 0.25));
          position: relative;
          overflow: hidden;
          animation: icon-pulse var(--pd, 3s) ease-in-out infinite var(--poff, 0s);
        }

        @keyframes icon-pulse {
          0%, 100% {
            box-shadow: 
              0 4px 20px rgba(0, 0, 0, 0.65),
              inset 0 1px 0 rgba(255, 255, 255, 0.07),
              0 0 var(--gsize, 14px) var(--gc, rgba(0, 130, 255, 0.25));
          }
          50% {
            box-shadow: 
              0 4px 20px rgba(0, 0, 0, 0.65),
              inset 0 1px 0 rgba(255, 255, 255, 0.07),
              0 0 calc(var(--gsize, 14px) * 2.2) var(--gc, rgba(0, 130, 255, 0.5));
          }
        }

        .ibox::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, transparent 55%);
        }

        .ibox svg {
          width: 65%;
          height: 65%;
          position: relative;
          z-index: 1;
        }

        .ilabel {
          font-size: clamp(6px, 1.1vmin, 9px);
          color: rgba(170, 225, 255, 0.88);
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: 0 0 8px rgba(0, 175, 255, 0.75);
        }

        /* Stars */
        .star {
          position: absolute;
          border-radius: 50%;
          background: white;
          animation: twinkle linear infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.75; }
        }
      `}</style>
    </section>
  );
};

export default Home;
