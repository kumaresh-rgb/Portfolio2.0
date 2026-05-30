import { useEffect, useId, useRef } from "react";

interface Props {
  chart: string;
}

export const MermaidDiagram = ({ chart }: Props) => {
  const id = useId().replace(/:/g, "mmd");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      const mermaid = (await import("mermaid")).default;

      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          background: "#11161d",
          primaryColor: "#11161d",
          primaryBorderColor: "#334155",
          primaryTextColor: "#e8ecf0",
          lineColor: "#475569",
          secondaryColor: "#1a212a",
          tertiaryColor: "#1e293b",
          edgeLabelBackground: "#11161d",
          clusterBkg: "#0d1117",
          titleColor: "#e8ecf0",
          nodeTextColor: "#e8ecf0",
        },
        flowchart: { htmlLabels: true, curve: "basis" },
        securityLevel: "loose",
      });

      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, chart);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
          // Make SVG responsive
          const svgEl = ref.current.querySelector("svg");
          if (svgEl) {
            svgEl.style.maxWidth = "100%";
            svgEl.style.height = "auto";
          }
        }
      } catch (err) {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = `<pre style="color:#f87171;font-size:12px;padding:12px">${err}</pre>`;
        }
      }
    };

    render();
    return () => { cancelled = true; };
  }, [chart, id]);

  return (
    <div
      ref={ref}
      className="w-full overflow-x-auto rounded-xl border border-outline-variant p-4"
      style={{ background: "#0d1117", minHeight: 120 }}
    />
  );
};
