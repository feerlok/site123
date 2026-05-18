import { useState } from 'react';
import { 
  Stethoscope, 
  Scale, 
  Palette, 
  Code, 
  ChevronRight,
  Clock,
  Zap,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

interface Example {
  id: string;
  profession: string;
  icon: React.ReactNode;
  before: string;
  after: string;
  timeBefore: string;
  timeAfter: string;
  benefits: string[];
  color: string;
}

const examples: Example[] = [
  {
    id: 'doctor',
    profession: 'Врач-диагност',
    icon: <Stethoscope className="w-6 h-6" />,
    before: 'Врач анализирует снимки вручную, сверяется с медицинской литературой, консультируется с коллегами',
    after: 'ИИ предварительно анализирует снимки, выделяет аномалии, предлагает возможные диагнозы на основе миллионов кейсов',
    timeBefore: '2-3 часа',
    timeAfter: '30-45 минут',
    benefits: ['Точность диагностики +25%', 'Меньше упущенных случаев', 'Больше времени на пациентов'],
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 'lawyer',
    profession: 'Юрист',
    icon: <Scale className="w-6 h-6" />,
    before: 'Ручная проверка каждого договора, поиск несоответствий в десятках документов',
    after: 'ИИ мгновенно находит рисковые пункты, сравнивает с шаблонами, предлагает правки',
    timeBefore: '4-6 часов',
    timeAfter: '30-60 минут',
    benefits: ['На 90% меньше ошибок', 'Быстрая проверка NDA', 'Автоматический анализ прецедентов'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'designer',
    profession: 'Дизайнер',
    icon: <Palette className="w-6 h-6" />,
    before: 'Создание десятков макетов вручную, правки по обратной связи',
    after: 'ИИ генерирует варианты по описанию, автоматически адаптирует под разные форматы',
    timeBefore: '2-3 дня',
    timeAfter: '2-4 часа',
    benefits: ['Больше креативных идей', 'Быстрые прототипы', 'Автоматическая адаптация'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'developer',
    profession: 'Программист',
    icon: <Code className="w-6 h-6" />,
    before: 'Поиск решений в документации, написание шаблонного кода, отладка',
    after: 'ИИ пишет код по описанию, объясняет сложные концепции, находит баги',
    timeBefore: '6-8 часов',
    timeAfter: '2-3 часа',
    benefits: ['Фокус на архитектуре', 'Меньше рутинного кода', 'Быстрое обучение новым технологиям'],
    color: 'from-emerald-500 to-green-500'
  }
];

export default function AIPartner() {
  const [activeExample, setActiveExample] = useState<Example>(examples[0]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-200">ИИ как инструмент</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ИИ — <span className="gradient-text">напарник</span>, не замена
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Нейросети не отбирают работу — они делают её эффективнее. 
            Посмотрите, как профессионалы используют ИИ прямо сейчас
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Profession selector */}
          <div className="space-y-4">
            {examples.map((example) => (
              <button
                key={example.id}
                onClick={() => setActiveExample(example)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                  activeExample.id === example.id
                    ? 'glass border border-purple-500/50'
                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${example.color}`}>
                    {example.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg">{example.profession}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-400">
                        {example.timeBefore} → {example.timeAfter}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeExample.id === example.id ? 'rotate-90 text-purple-400' : 'text-gray-600'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Comparison display */}
          <div className="gradient-border rounded-2xl p-6 glass">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${activeExample.color}`}>
                {activeExample.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{activeExample.profession}</h3>
            </div>

            {/* Before/After comparison */}
            <div className="space-y-6">
              {/* Before */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded text-xs bg-red-500/20 text-red-400">БЕЗ ИИ</span>
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-400">{activeExample.timeBefore}</span>
                </div>
                <p className="text-gray-300">{activeExample.before}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* After */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">С ИИ</span>
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-green-400">{activeExample.timeAfter}</span>
                </div>
                <p className="text-gray-200">{activeExample.after}</p>
              </div>

              {/* Benefits */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Преимущества:</h4>
                <div className="space-y-2">
                  {activeExample.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
