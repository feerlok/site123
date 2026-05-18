import { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  Briefcase, 
  Code, 
  PenTool, 
  Calculator,
  Truck,
  Stethoscope,
  Brain,
  Users,
  Wrench,
  GraduationCap,
  Search,
  Filter
} from 'lucide-react';

interface Profession {
  name: string;
  category: string;
  risk: 'high' | 'medium' | 'low';
  riskPercent: number;
  icon: React.ReactNode;
  description: string;
}

const professions: Profession[] = [
  // High risk
  { name: 'Бухгалтер', category: 'Финансы', risk: 'high', riskPercent: 95, icon: <Calculator className="w-5 h-5" />, description: 'Автоматизация расчётов и отчётности' },
  { name: 'Курьер', category: 'Логистика', risk: 'high', riskPercent: 85, icon: <Truck className="w-5 h-5" />, description: 'Беспилотная доставка' },
  { name: 'Копирайтер', category: 'Маркетинг', risk: 'high', riskPercent: 80, icon: <PenTool className="w-5 h-5" />, description: 'Генерация текстов нейросетями' },
  { name: 'Программист (junior)', category: 'IT', risk: 'high', riskPercent: 75, icon: <Code className="w-5 h-5" />, description: 'Автоматическая генерация кода' },
  { name: 'Оператор колл-центра', category: 'Сервис', risk: 'high', riskPercent: 90, icon: <Users className="w-5 h-5" />, description: 'Голосовые ассистенты' },
  
  // Medium risk
  { name: 'Юрист', category: 'Право', risk: 'medium', riskPercent: 50, icon: <Briefcase className="w-5 h-5" />, description: 'Анализ документов ИИ' },
  { name: 'Аналитик', category: 'IT', risk: 'medium', riskPercent: 45, icon: <Brain className="w-5 h-5" />, description: 'Автоматизация отчётов' },
  { name: 'Переводчик', category: 'Языки', risk: 'medium', riskPercent: 60, icon: <GraduationCap className="w-5 h-5" />, description: 'Нейропереводчики' },
  
  // Low risk
  { name: 'Врач', category: 'Медицина', risk: 'low', riskPercent: 15, icon: <Stethoscope className="w-5 h-5" />, description: 'Сложная диагностика и эмпатия' },
  { name: 'Психолог', category: 'Медицина', risk: 'low', riskPercent: 10, icon: <Brain className="w-5 h-5" />, description: 'Эмоциональный интеллект' },
  { name: 'Инженер-робототехник', category: 'Инженерия', risk: 'low', riskPercent: 20, icon: <Wrench className="w-5 h-5" />, description: 'Создание и обслуживание ИИ' },
  { name: 'Преподаватель', category: 'Образование', risk: 'low', riskPercent: 25, icon: <GraduationCap className="w-5 h-5" />, description: 'Наставничество и мотивация' },
];

const categories = ['Все', ...Array.from(new Set(professions.map(p => p.category)))];

export default function RiskMap() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProf, setSelectedProf] = useState<Profession | null>(null);

  const filteredProfessions = professions.filter(p => {
    const matchesCategory = selectedCategory === 'Все' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'from-red-500 to-orange-500';
      case 'medium': return 'from-yellow-500 to-amber-500';
      case 'low': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getRiskBg = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-500/10 border-red-500/30';
      case 'medium': return 'bg-yellow-500/10 border-yellow-500/30';
      case 'low': return 'bg-green-500/10 border-green-500/30';
      default: return 'bg-gray-500/10 border-gray-500/30';
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-6">
            <AlertTriangle className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200">Анализ рисков</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Карта рисков</span> автоматизации
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Исследуйте, какие профессии подвержены автоматизации больше всего, 
            а какие останутся в безопасности
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Поиск профессии..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex gap-2 flex-wrap">
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
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-red-500 to-orange-500" />
            <span className="text-sm text-gray-400">Высокий риск (70-100%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-yellow-500 to-amber-500" />
            <span className="text-sm text-gray-400">Средний риск (30-70%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-green-500 to-emerald-500" />
            <span className="text-sm text-gray-400">Низкий риск (0-30%)</span>
          </div>
        </div>

        {/* Professions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProfessions.map((prof) => (
            <div
              key={prof.name}
              onClick={() => setSelectedProf(prof)}
              className={`gradient-border rounded-xl p-5 cursor-pointer card-hover ${getRiskBg(prof.risk)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getRiskColor(prof.risk)}`}>
                    {prof.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{prof.name}</h3>
                    <span className="text-xs text-gray-500">{prof.category}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${getRiskColor(prof.risk)} bg-clip-text text-transparent`}>
                    {prof.riskPercent}%
                  </span>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${getRiskColor(prof.risk)} transition-all duration-1000`}
                  style={{ width: `${prof.riskPercent}%` }}
                />
              </div>
              
              <p className="mt-3 text-sm text-gray-400">{prof.description}</p>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedProf && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProf(null)}
          >
            <div 
              className="gradient-border rounded-2xl p-8 max-w-md w-full glass"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${getRiskColor(selectedProf.risk)}`}>
                  {selectedProf.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProf.name}</h3>
                  <span className="text-gray-400">{selectedProf.category}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Риск автоматизации</span>
                  <span className={`text-3xl font-bold bg-gradient-to-r ${getRiskColor(selectedProf.risk)} bg-clip-text text-transparent`}>
                    {selectedProf.riskPercent}%
                  </span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getRiskColor(selectedProf.risk)}`}
                    style={{ width: `${selectedProf.riskPercent}%` }}
                  />
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{selectedProf.description}</p>
              
              <div className={`p-4 rounded-xl ${getRiskBg(selectedProf.risk)}`}>
                <div className="flex items-center gap-2 mb-2">
                  {selectedProf.risk === 'low' ? (
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                  )}
                  <span className="font-semibold text-white">
                    {selectedProf.risk === 'low' ? 'Профессия в безопасности' : 
                     selectedProf.risk === 'medium' ? 'Требуется адаптация' : 'Высокий риск замены'}
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  {selectedProf.risk === 'low' 
                    ? 'Эта профессия требует уникальных человеческих качеств: эмпатии, креативности и сложного принятия решений.'
                    : selectedProf.risk === 'medium'
                    ? 'ИИ станет помощником, но полная замена маловероятна. Важно осваивать новые инструменты.'
                    : 'Рутинные задачи будут автоматизированы. Рекомендуется переквалификация или углубление в узкую специализацию.'}
                </p>
              </div>
              
              <button
                onClick={() => setSelectedProf(null)}
                className="w-full mt-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
