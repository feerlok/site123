import { useState } from 'react';
import { 
  Brain, 
  MessageSquare, 
  Lightbulb, 
  Users, 
  Code, 
  RefreshCw,
  ChevronDown,
  Star,
  Target
} from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  importance: number;
  category: 'hard' | 'soft';
  color: string;
}

const skills: Skill[] = [
  {
    id: 'prompt',
    name: 'Промпт-инжиниринг',
    icon: <MessageSquare className="w-6 h-6" />,
    description: 'Умение эффективно общаться с ИИ, формулировать запросы для получения точных результатов',
    details: [
      'Составление чётких инструкций для нейросетей',
      'Итеративное улучшение запросов',
      'Понимание ограничений разных моделей',
      'Создание шаблонов для повторяющихся задач'
    ],
    importance: 95,
    category: 'hard',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'critical',
    name: 'Критическое мышление',
    icon: <Brain className="w-6 h-6" />,
    description: 'Способность анализировать информацию, проверять факты и принимать взвешенные решения',
    details: [
      'Проверка ответов ИИ на достоверность',
      'Выявление логических ошибок и предвзятостей',
      'Анализ источников информации',
      'Принятие решений в неоднозначных ситуациях'
    ],
    importance: 90,
    category: 'soft',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'creativity',
    name: 'Креативность',
    icon: <Lightbulb className="w-6 h-6" />,
    description: 'Способность генерировать оригинальные идеи и находить нестандартные решения',
    details: [
      'Генерация уникальных концепций',
      'Комбинирование идей из разных областей',
      'Визуализация абстрактных концепций',
      'Создание эмоционально resonant контента'
    ],
    importance: 85,
    category: 'soft',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'emotional',
    name: 'Эмоциональный интеллект',
    icon: <Users className="w-6 h-6" />,
    description: 'Умение понимать эмоции людей, эмпатия и навыки межличностного общения',
    details: [
      'Распознавание эмоционального состояния',
      'Эффективная коммуникация в команде',
      'Управление конфликтами',
      'Построение доверительных отношений'
    ],
    importance: 88,
    category: 'soft',
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 'tech',
    name: 'Техническая грамотность',
    icon: <Code className="w-6 h-6" />,
    description: 'Понимание принципов работы ИИ и базовые технические навыки',
    details: [
      'Основы машинного обучения',
      'Работа с API нейросетей',
      'Автоматизация рабочих процессов',
      'Базовое программирование'
    ],
    importance: 80,
    category: 'hard',
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 'adaptability',
    name: 'Адаптивность',
    icon: <RefreshCw className="w-6 h-6" />,
    description: 'Готовность к постоянному обучению и быстрой адаптации к изменениям',
    details: [
      'Непрерывное обучение новым инструментам',
      'Гибкость в изменении подходов',
      'Открытость к экспериментам',
      'Быстрое восстановление после неудач'
    ],
    importance: 92,
    category: 'soft',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function FutureSkills() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'hard' | 'soft'>('all');

  const filteredSkills = skills.filter(s => filter === 'all' || s.category === filter);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 mb-6">
            <Target className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-200">Компетенции будущего</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Навыки <span className="gradient-text">будущего</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Какие компетенции станут ключевыми в эпоху ИИ и почему их стоит развивать уже сейчас
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { key: 'all', label: 'Все навыки' },
            { key: 'hard', label: 'Hard skills' },
            { key: 'soft', label: 'Soft skills' }
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as any)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                filter === f.key
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="gradient-border rounded-xl overflow-hidden glass card-hover"
            >
              {/* Card Header */}
              <div 
                className="p-5 cursor-pointer"
                onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-amber-400">{skill.importance}%</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{skill.description}</p>

                {/* Importance bar */}
                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-3">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.importance}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${
                    skill.category === 'hard' 
                      ? 'bg-purple-500/20 text-purple-400' 
                      : 'bg-cyan-500/20 text-cyan-400'
                  }`}>
                    {skill.category === 'hard' ? 'Hard skill' : 'Soft skill'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSkill === skill.id ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>

              {/* Expanded Content */}
              {expandedSkill === skill.id && (
                <div className="px-5 pb-5 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-400 mt-4 mb-3">Ключевые аспекты:</h4>
                  <ul className="space-y-2">
                    {skill.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${skill.color}`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 gradient-border rounded-2xl p-8 glass">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Главный вывод</h3>
              <p className="text-gray-400">
                В эпоху ИИ ценность человека определяется не тем, что он знает, а тем, как он мыслит. 
                Технические знания устаревают быстро, но критическое мышление, креативность и эмоциональный интеллект 
                остаются уникально человеческими качествами, которые невозможно автоматизировать.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
