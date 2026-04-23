import "./Home.css";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import { useLoadingContext } from "../../context/loadingContext";

const Home = () => {
  const { t } = useTranslation();
  const selectedLang = useLanguageContext().i18n.language;
  const { isFadeOutComplete } = useLoadingContext();
  const sectionRef = useRef(null);
  const waveCanvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = waveCanvasRef.current;
    if (!section || !canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let rafId = null;
    let width = 0;
    let height = 0;
    const pointer = { x: 0, y: 0, active: false };
    const pointerTarget = { x: 0, y: 0, active: false };
    const dpi = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      width = section.clientWidth;
      height = section.clientHeight;
      canvas.width = Math.floor(width * dpi);
      canvas.height = Math.floor(height * dpi);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpi, 0, 0, dpi, 0, 0);
    };

    const onPointerMove = (event) => {
      const rect = section.getBoundingClientRect();
      pointerTarget.x = event.clientX - rect.left;
      pointerTarget.y = event.clientY - rect.top;
      pointerTarget.active = true;
    };

    const onPointerLeave = () => {
      pointerTarget.active = false;
    };

    const draw = (timestamp) => {
      const time = timestamp * 0.001;
      ctx.clearRect(0, 0, width, height);

      pointer.x += (pointerTarget.x - pointer.x) * 0.13;
      pointer.y += (pointerTarget.y - pointer.y) * 0.13;
      pointer.active = pointerTarget.active;

      const startY = height * 0.47;
      const lineCount = 34;
      const yGap = 9;
      const xStep = 14;
      const radius = 190;
      const pushStrength = 56;
      const centerX = width * 0.62;
      const focus = Math.max(width * 0.26, 220);

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (let line = 0; line < lineCount; line += 1) {
        const ratio = line / Math.max(lineCount - 1, 1);
        const lineBaseY = startY + line * yGap;
        const lineAlpha = 0.16 + (1 - ratio) * 0.52;
        const points = [];

        for (let x = 0; x <= width + xStep; x += xStep) {
          const waveA = Math.sin(x * 0.018 + time * 1.85 + line * 0.3) * (16 - ratio * 6.5);
          const waveB = Math.sin(x * 0.0074 - time * 1.1 + line * 0.42) * (8 - ratio * 3);
          const waveC = Math.cos(x * 0.003 + time * 0.75 + line * 0.25) * 4.5;
          const pinchDistance = Math.abs(x - centerX);
          const pinch = 1 - Math.min(pinchDistance / focus, 1);
          const neck = Math.sin(time * 1.2 + ratio * 5) * 8 * pinch;
          let y = lineBaseY + waveA + waveB + waveC - neck;

          if (pointer.active) {
            const dx = x - pointer.x;
            const dy = y - pointer.y;
            const distance = Math.hypot(dx, dy);
            if (distance < radius && distance > 0) {
              const falloff = (1 - distance / radius) ** 1.7;
              y += (dy / distance) * pushStrength * falloff;
              y += Math.sin((x + time * 110) * 0.02) * 3 * falloff;
            }
          }

          points.push({ x, y });
        }

        if (points.length < 2) continue;

        const gradient = ctx.createLinearGradient(0, lineBaseY, width, lineBaseY);
        gradient.addColorStop(0, `rgba(230, 236, 246, ${lineAlpha * 0.9})`);
        gradient.addColorStop(0.52, `rgba(255, 255, 255, ${lineAlpha})`);
        gradient.addColorStop(1, `rgba(196, 206, 225, ${lineAlpha * 0.72})`);

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length - 1; i += 1) {
          const xc = (points[i].x + points[i + 1].x) * 0.5;
          const yc = (points[i].y + points[i + 1].y) * 0.5;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        const last = points[points.length - 1];
        ctx.lineTo(last.x, last.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ratio < 0.26 ? 1.7 : 1.1;
        ctx.stroke();
      }

      ctx.restore();
      rafId = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    rafId = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resizeCanvas);
    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="home-section"
        role="main"
        aria-label="Section d'accueil"
      >
        <div className="noise-overlay" aria-hidden="true" />
        <canvas ref={waveCanvasRef} className="point-wave-canvas" aria-hidden="true" />
        <div
          className={`home-panel ${
            isFadeOutComplete ? "home-panel--visible" : ""
          }`}
        >
          <div className="home-panel__inner">
            <h1 className="home-panel__title">
              {t(`${selectedLang}.Home.Occupation`)}
            </h1>
            <p className="home-panel__subtitle">
              {t(`${selectedLang}.Home.DesignEnthusiast`)}
            </p>
            <footer className="home-panel__footer">
              <span className="home-panel__cta">
                {t(`${selectedLang}.Home.ContactMe`)}
              </span>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
