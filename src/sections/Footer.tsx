import { Brain, Github, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">ИИ и Рынок Труда</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Исследование влияния искусственного интеллекта на профессии будущего. 
              Создано для помощи в навигации по меняющемуся миру работы.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Разделы</h4>
            <ul className="space-y-2">
              {[
                { label: 'Главная', href: '#hero' },
                { label: 'Карта рисков', href: '#risk-map' },
                { label: 'ИИ как напарник', href: '#ai-partner' },
                { label: 'Навыки будущего', href: '#skills' },
                { label: 'Тест', href: '#test' },
                { label: 'Практикум', href: '#practicum' },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              {[
                { label: 'OpenAI', href: 'https://openai.com' },
                { label: 'Google AI', href: 'https://ai.google' },
                { label: 'Stepik', href: 'https://stepik.org' },
                { label: 'Coursera', href: 'https://coursera.org' },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            {currentYear} ИИ и Рынок Труда. Образовательный проект.
          </p>
          <p className="text-sm text-gray-500">
            Создано с помощью React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
