import { useEffect, useRef } from 'react';
import { Brain, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const colors = ['#a855f7', '#06b6d4', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(8, 9, 12, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-200">Исследование 2026</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text animate-gradient">Влияние ИИ</span>
          <br />
          <span className="text-white">на рынок труда</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Как искусственный интеллект меняет профессии, какие навыки станут важнее 
          и как подготовиться к будущему, которое уже наступило
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="gradient-border rounded-2xl p-6 glass card-hover">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-1">800 млн</div>
            <div className="text-sm text-gray-400">рабочих мест под угрозой автоматизации</div>
          </div>

          <div className="gradient-border rounded-2xl p-6 glass card-hover">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-1">$15.7 трлн</div>
            <div className="text-sm text-gray-400">вклад ИИ в мировую экономику к 2030</div>
          </div>

          <div className="gradient-border rounded-2xl p-6 glass card-hover">
            <div className="flex items-center justify-center gap-3 mb-3">
              <AlertTriangle className="w-8 h-8 text-amber-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-1">85%</div>
            <div className="text-sm text-gray-400">компаний внедряют ИИ в 2026</div>
          </div>
        </div>

 	{/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-sm">Узнать больше</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
