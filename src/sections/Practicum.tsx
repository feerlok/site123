import { useState } from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  Bot, 
  Code, 
  Palette, 
  PenTool,
  Video,
  Music,
  Search,
  Star,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  free: boolean;
  category: string;
}

interface Course {
  name: string;
  provider: string;
  description: string;
  duration: string;
  level: string;
  link: string;
}

const tools: Tool[] = [
  {
    name: 'ChatGPT',
    description: 'Универсальный ИИ-ассистент для текста, кода и анализа',
    icon: <Bot className="w-6 h-6" />,
    link: 'https://chat.openai.com',
    free: true,
    category: 'Универсальный'
  },
  {
    name: 'Claude',
    description: 'Продвинутый ИИ для сложных задач и длинных текстов',
    icon: <Bot className="w-6 h-6" />,
    link: 'https://claude.ai',
    free: true,
    category: 'Универсальный'
  },
  {
    name: 'GitHub Copilot',
    description: 'ИИ-помощник для программистов',
    icon: <Code className="w-6 h-6" />,
    link: 'https://github.com/features/copilot',
    free: false,
    category: 'Программирование'
  },
  {
    name: 'Midjourney',
    description: 'Генерация изображений по текстовому описанию',
    icon: <Palette className="w-6 h-6" />,
    link: 'https://midjourney.com',
    free: false,
    category: 'Дизайн'
  },
  {
    name: 'Canva AI',
    description: 'Дизайн с помощью ИИ-инструментов',
    icon: <Palette className="w-6 h-6" />,
    link: 'https://canva.com',
    free: true,
    category: 'Дизайн'
  },
  {
    name: 'Notion AI',
    description: 'ИИ для организации заметок и работы с текстом',
    icon: <PenTool className="w-6 h-6" />,
    link: 'https://notion.so',
    free: false,
    category: 'Продуктивность'
  },
  {
    name: 'Runway ML',
    description: 'Инструменты для видео и генерации контента',
    icon: <Video className="w-6 h-6" />,
    link: 'https://runwayml.com',
    free: true,
    category: 'Видео'
  },
  {
    name: 'Suno',
    description: 'Генерация музыки с помощью ИИ',
    icon: <Music className="w-6 h-6" />,
    link: 'https://suno.ai',
    free: true,
    category: 'Музыка'
  },
  {
    name: 'Perplexity',
    description: 'ИИ-поисковик с источниками',
    icon: <Search className="w-6 h-6" />,
    link: 'https://perplexity.ai',
    free: true,
    category: 'Поиск'
  }
];

const courses: Course[] = [
  {
    name: 'Введение в искусственный интеллект',
    provider: 'Stepik',
    description: 'Базовый курс об ИИ для школьников и начинающих',
    duration: '4 недели',
    level: 'Начинающий',
    link: 'https://stepik.org'
  },
  {
    name: 'Промпт-инжиниринг для всех',
    provider: 'Coursera',
    description: 'Как эффективно общаться с нейросетями',
    duration: '3 недели',
    level: 'Начинающий',
    link: 'https://coursera.org'
  },
  {
    name: 'Python для анализа данных',
    provider: 'Kaggle',
    description: 'Программирование и работа с ИИ-инструментами',
    duration: '6 недель',
    level: 'Средний',
    link: 'https://kaggle.com'
  },
  {
    name: 'Основы машинного обучения',
    provider: 'Яндекс Практикум',
    description: 'Как работают нейросети изнутри',
    duration: '3 месяца',
    level: 'Продвинутый',
    link: 'https://practicum.yandex.ru'
  },
  {
    name: 'ИИ в образовании',
    provider: 'Открытое образование',
    description: 'Как использовать ИИ для учёбы',
    duration: '2 недели',
    level: 'Начинающий',
    link: 'https://openedu.ru'
  }
];

const categories = ['Все', ...Array.from(new Set(tools.map(t => t.category)))];

export default function Practicum() {
  const [activeTab, setActiveTab] = useState<'tools' | 'courses'>('tools');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredTools = selectedCategory === 'Все' 
    ? tools 
    : tools.filter(t => t.category === selectedCategory);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/30 mb-6">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-200">Начни прямо сейчас</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Практикум</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Бесплатные нейросети и курсы, которые можно начать изучать уже в школе
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'tools'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <Bot className="w-5 h-5" />
            Нейросети
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'courses'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            Курсы
          </button>
        </div>

        {activeTab === 'tools' ? (
          <>
            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-border rounded-xl p-5 glass card-hover group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500">
                      {tool.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {tool.free && (
                        <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                          Бесплатно
                        </span>
                      )}
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{tool.description}</p>
                  <span className="text-xs text-gray-500">{tool.category}</span>
                </a>
              ))}
            </div>
          </>
        ) : (
          /* Courses List */
          <div className="space-y-4">
            {courses.map((course) => (
              <a
                key={course.name}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border rounded-xl p-6 glass card-hover group flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {course.name}
                    </h3>
                    <span className="px-2 py-1 rounded text-xs bg-white/10 text-gray-400">
                      {course.provider}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{course.description}</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Star className="w-4 h-4" />
                    {course.level}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-amber-400 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 gradient-border rounded-2xl p-8 glass">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Готов начать?</h3>
              <p className="text-gray-400">
                Лучшее время начать изучать ИИ — сейчас. Выбери инструмент или курс и сделай первый шаг 
                к профессиям будущего.
              </p>
            </div>
            <button 
              onClick={() => setActiveTab('tools')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Выбрать инструмент
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
