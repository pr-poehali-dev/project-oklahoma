import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Зарегистрируйся",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Создайте аккаунт за 30 секунд. Никаких лишних данных — только email и пароль. 
            После регистрации вы сразу попадаете в личный кабинет с балансом токенов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Быстрая регистрация без верификации документов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Личный кабинет с историей всех запросов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Приветственные бонусные токены при регистрации
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Пополни баланс",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Пополняйте баланс токенов через Яндекс Кассу любым удобным способом. 
            Деньги зачисляются мгновенно — можно сразу начинать работу с нейросетями.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Банковские карты Visa, MasterCard, МИР
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              СБП, ЮMoney, оплата по QR-коду
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Минимальный платёж от 100 рублей
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Работай с любым ИИ",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Выбирайте нужную модель прямо в чате и решайте любые задачи — написание текстов, 
            анализ данных, программирование, перевод, генерация идей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro и другие топ-модели
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Сравнивайте ответы разных моделей на один вопрос
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Платите только за токены — без месячных подписок
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как начать работать</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три простых шага — и вы уже общаетесь с лучшими нейросетями мира без лишних подписок и ограничений.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}