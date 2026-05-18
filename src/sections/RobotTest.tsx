import { useState } from 'react';
import { 
  Bot, 
  User, 
  ArrowRight, 
  RotateCcw, 
  AlertTriangle,
  CheckCircle2,
  Brain,
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: number;
    field: string;
  }[];
}

interface Result {
  title: string;
  description: string;
  risk: 'low' | 'medium' | 'high';
  advice: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Какое у тебя направление обучения или работы?',
    options: [
      { text: 'IT, программирование, аналитика', value: 60, field: 'tech' },
      { text: 'Творческие профессии (дизайн, искусство)', value: 40, field: 'creative' },
      { text: 'Гуманитарные науки, психология', value: 20, field: 'human' },
      { text: 'Инженерия, производство', value: 50, field: 'engineering' },
      { text: 'Медицина, здравоохранение', value: 15, field: 'medical' },
      { text: 'Финансы, бухгалтерия', value: 80, field: 'finance' },
    ]
  },
  {
    id: 2,
    text: 'Сколько в твоей работе рутинных, повторяющихся задач?',
    options: [
      { text: 'Большинство задач — рутина', value: 30, field: 'routine' },
      { text: 'Примерно половина', value: 15, field: 'routine' },
      { text: 'Мало рутины, много творчества', value: 5, field: 'routine' },
      { text: 'Каждый день разный', value: 0, field: 'routine' },
    ]
  },
  {
    id: 3,
    text: 'Насколько важна в твоей работе коммуникация с людьми?',
    options: [
      { text: 'Основа работы — постоянное общение', value: -20, field: 'comm' },
      { text: 'Часто приходится общаться', value: -10, field: 'comm' },
      { text: 'Иногда, но не критично', value: 0, field: 'comm' },
      { text: 'Работаю в основном один', value: 10, field: 'comm' },
    ]
  },
  {
    id: 4,
    text: 'Требуется ли в работе креативное мышление и нестандартные решения?',
    options: [
      { text: 'Постоянно придумываю что-то новое', value: -15, field: 'creative' },
      { text: 'Часто нужно проявлять креативность', value: -10, field: 'creative' },
      { text: 'Иногда', value: 0, field: 'creative' },
      { text: 'Работаю по чётким инструкциям', value: 15, field: 'creative' },
    ]
  },
  {
    id: 5,
    text: 'Используешь ли ты уже ИИ-инструменты в работе?',
    options: [
      { text: 'Да, активно использую', value: -15, field: 'ai' },
      { text: 'Пробовал, но редко', value: -5, field: 'ai' },
      { text: 'Пока нет, но планирую', value: 5, field: 'ai' },
      { text: 'Не вижу применения', value: 15, field: 'ai' },
    ]
  }
];

const getResult = (score: number): Result => {
  if (score <= 30) {
    return {
      title: 'Твоя профессия в безопасности',
      description: 'Твоя работа требует уникально человеческих качеств: эмпатии, креативности и сложного принятия решений. ИИ может стать твоим помощником, но не заменой.',
      risk: 'low',
      advice: [
        'Продолжай развивать soft skills',
        'Изучи, как ИИ может помочь в твоей работе',
        'Фокусируйся на уникально человеческих аспектах'
      ]
    };
  } else if (score <= 60) {
    return {
      title: 'Умеренный риск — время адаптироваться',
      description: 'ИИ изменит твою профессию, но полностью не заменит. Ключ к успеху — научиться работать с ИИ как с инструментом.',
      risk: 'medium',
      advice: [
        'Освой промпт-инжиниринг',
        'Автоматизируй рутину с помощью ИИ',
        'Развивай навыки, которые дополняют ИИ'
      ]
    };
  } else {
    return {
      title: 'Высокий риск автоматизации',
      description: 'Твоя профессия подвержена сильному влиянию ИИ. Но это не приговор — это возможность трансформировать свою карьеру.',
      risk: 'high',
      advice: [
        'Срочно начни изучать ИИ-инструменты',
        'Подумай о переквалификации в смежную область',
        'Развивай навыки, которые сложно автоматизировать'
      ]
    };
  }
};

export default function RobotTest() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(50);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (value: number) => {
    setScore(prev => Math.max(0, Math.min(100, prev + value)));
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setStarted(false);
    setCurrentQ(0);
    setScore(50);
    setFinished(false);
  };

  const result = finished ? getResult(score) : null;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-cyan-500/5" />
      
      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-6">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200">Интерактивный тест</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Заменит ли тебя</span> робот?
          </h2>
          <p className="text-xl text-gray-400">
            Пройди короткий тест и узнай, насколько твоя профессия подвержена автоматизации
          </p>
        </div>

        {/* Test Container */}
        <div className="gradient-border rounded-2xl p-8 glass">
          {!started ? (
            // Start screen
            <div className="text-center py-8">
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center mb-3 mx-auto">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm text-gray-400">Ты</span>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl text-gray-600">VS</span>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-3 mx-auto">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm text-gray-400">ИИ</span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                5 простых вопросов помогут оценить риск автоматизации твоей профессии 
                и дадут рекомендации по подготовке к будущему
              </p>
              
              <button
                onClick={() => setStarted(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto"
              >
                Начать тест
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : finished && result ? (
            // Results screen
            <div className="text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                result.risk === 'low' ? 'bg-green-500/20 text-green-400' :
                result.risk === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {result.risk === 'low' ? <CheckCircle2 className="w-5 h-5" /> :
                 result.risk === 'medium' ? <Sparkles className="w-5 h-5" /> :
                 <AlertTriangle className="w-5 h-5" />}
                <span className="font-semibold">
                  Риск автоматизации: {score}%
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{result.title}</h3>
              <p className="text-gray-400 mb-8">{result.description}</p>

              {/* Risk meter */}
              <div className="mb-8">
                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      result.risk === 'low' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                      result.risk === 'medium' ? 'bg-gradient-to-r from-yellow-500 to-amber-500' :
                      'bg-gradient-to-r from-red-500 to-orange-500'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Безопасно</span>
                  <span>Средний риск</span>
                  <span>Высокий риск</span>
                </div>
              </div>

              {/* Advice */}
              <div className="text-left mb-8">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Рекомендации:
                </h4>
                <ul className="space-y-2">
                  {result.advice.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <TrendingUp className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={reset}
                className="px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" />
                Пройти ещё раз
              </button>
            </div>
          ) : (
            // Question screen
            <div>
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">
                  Вопрос {currentQ + 1} из {questions.length}
                </span>
                <div className="flex gap-1">
                  {questions.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-8 h-1 rounded-full ${
                        idx <= currentQ ? 'bg-purple-500' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <h3 className="text-xl font-semibold text-white mb-6">
                {questions[currentQ].text}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentQ].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all text-left"
                  >
                    <span className="text-gray-300">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
