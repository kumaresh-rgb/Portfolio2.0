import React, { useState, useEffect, useRef } from "react";
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

const TopSection = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [sceneSize, setSceneSize] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [iconsLaunched, setIconsLaunched] = useState(false);

  const PLANET_DATA: PlanetData[] = [
    {
      id: "ic1",
      rPct: 23,
      speed: 0.4,
      startAngle: 45,
      name: ".NET",
      color: "rgba(120,80,255,0.6)",
    },
    {
      id: "ic2",
      rPct: 28,
      speed: 0.36,
      startAngle: 130,
      name: "Angular",
      color: "rgba(255,60,60,0.6)",
    },
    {
      id: "ic3",
      rPct: 28,
      speed: 0.3,
      startAngle: 310,
      name: "Power BI",
      color: "rgba(255,200,0,0.6)",
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
                src="/EF Core.png"
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
        case "Azure":
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
                src="/Azure.png"
                alt="Azure"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 4px rgba(0, 120, 212, 0.6))",
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
          <div className="icon">{getIcon()}</div>
          <div className="label">{name}</div>
        </div>
      </div>
    );
  };

  // Set scene size and start animations
  useEffect(() => {
    const updateSceneSize = () => {
      if (sceneRef.current) {
        const size = Math.min(window.innerWidth, window.innerHeight) * 0.9;
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

    const elements = sceneRef.current.querySelectorAll(".icon-pill");
    let frame = 0;

    const getIconHalf = () => 30; // Half of icon size

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
          // Normal orbital motion after launch
          const r = (p.rPct / 100) * sceneSize;
          const a = ((p.startAngle + (frame - 180) * p.speed) * Math.PI) / 180;
          x = Math.cos(a) * r - half;
          y = Math.sin(a) * r - half - labelH / 2;
        }

        if (elements[i]) {
          (elements[i] as HTMLElement).style.transform =
            `translate(${x}px, ${y}px)`;
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

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const CX = () => canvas.width / 2;
    const CY = () => canvas.height / 2;

    const PCOLS = [
      ["#00d4ff", "#0099cc"],
      ["#ff6b6b", "#cc5555"],
      ["#4ecdc4", "#3aa39f"],
      ["#45b7d1", "#3498db"],
      ["#f9ca24", "#f0b90b"],
      ["#6c5ce7", "#5f4bd8"],
      ["#a29bfe", "#9b88ff"],
      ["#fd79a8", "#e84393"],
      ["#fdcb6e", "#f39c12"],
      ["#00b894", "#00a085"],
    ];

    class Particle {
      isBurst: boolean;
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      col: string;

      constructor(isBurst: boolean) {
        this.isBurst = isBurst;
        this.x = CX();
        this.y = CY();

        if (isBurst) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 2 + Math.random() * 6;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
        } else {
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
        }

        this.life = 1;
        this.maxLife = isBurst
          ? 60 + Math.random() * 60
          : 100 + Math.random() * 100;
        const colSet = PCOLS[Math.floor(Math.random() * PCOLS.length)];
        this.col = colSet[Math.floor(Math.random() * colSet.length)];
      }

      step() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 1 / this.maxLife;

        if (this.isBurst) {
          this.vx *= 0.98;
          this.vy *= 0.98;
        }
      }

      draw() {
        ctx!.save();
        ctx!.globalAlpha = Math.max(0, this.life);
        ctx!.fillStyle = this.col;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.isBurst ? 2 : 1, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }

      dead() {
        return this.life <= 0;
      }
    }

    class Wave {
      x: number;
      y: number;
      r: number;
      maxR: number;
      life: number;

      constructor(offset: number = 0) {
        this.x = CX();
        this.y = CY();
        this.r = 0;
        this.maxR = 200 + offset * 30;
        this.life = 1;
      }

      step() {
        this.r += 3;
        this.life = 1 - this.r / this.maxR;
      }

      draw() {
        ctx!.save();
        ctx!.globalAlpha = this.life * 0.3;
        ctx!.strokeStyle = "#00d4ff";
        ctx!.lineWidth = 2;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.restore();
      }

      dead() {
        return this.life <= 0;
      }
    }

    let pts: Particle[] = [],
      waves: Wave[] = [],
      fr2 = 0;

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
      // Cleanup if needed
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Orbit Scene */}
        <div
          ref={sceneRef}
          className="absolute"
          style={{
            width: `${sceneSize}px`,
            height: `${sceneSize}px`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          {/* Orbit Rings */}
          {PLANET_DATA.map((planet) => (
            <div
              key={planet.id}
              className="orbit-ring"
              style={
                {
                  "--rp": `${planet.rPct}%`,
                  "--gc": planet.color,
                  animationDelay: `${Math.random() * 2}s`,
                } as React.CSSProperties
              }
            />
          ))}

          {/* Tech Icons */}
          {PLANET_DATA.map((planet, index) => (
            <TechIcon
              key={planet.id}
              name={planet.name}
              color={planet.color}
              delay={index * 0.1}
            />
          ))}

          {/* Center Content */}
          <div className="center">
            {/* Aura */}
            <div className="aura" />

            {/* Profile Photo */}
            <div className="photo-circle">
              {imageError ? (
                <div className="fallback-avatar">K</div>
              ) : (
                <img
                  src="/Perfect Linkedlin.png"
                  alt="Profile"
                  className="profile-image"
                  onError={() => setImageError(true)}
                />
              )}
            </div>

            {/* Name and Title */}
            <div className="text-center">
              <h1 className="name-title">Kumaresh R</h1>
              <p className="subtitle">
                Full Stack Developer | Microsoft Stack Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
