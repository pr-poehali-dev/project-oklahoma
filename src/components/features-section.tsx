import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "50+ нейросетей",
    description: "GPT-4o, Claude 3.5, Gemini Ultra, Mistral, LLaMA, Grok и многие другие — доступны в одном интерфейсе без переключения между сайтами.",
    icon: "brain",
    badge: "OpenRouter",
  },
  {
    title: "Безопасные платежи",
    description: "Пополнение баланса через Яндекс Кассу — банковские карты, СБП, ЮMoney. Токены зачисляются моментально.",
    icon: "lock",
    badge: "ЮКасса",
  },
  {
    title: "Единый чат",
    description: "Один привычный интерфейс для всех моделей. Переключайтесь между ИИ прямо в диалоге и сравнивайте ответы.",
    icon: "globe",
    badge: "Удобно",
  },
  {
    title: "Токены без переплат",
    description: "Покупайте токены по оптовым ценам OpenRouter. Никаких скрытых комиссий — платите только за реальное использование.",
    icon: "zap",
    badge: "Выгодно",
  },
  {
    title: "История и контекст",
    description: "Все диалоги сохраняются в личном кабинете. Возобновляйте разговор с любой моделью в любое время.",
    icon: "link",
    badge: "Память",
  },
  {
    title: "API для разработчиков",
    description: "Подключайте наш API к своим приложениям и получайте доступ ко всем моделям через единый ключ.",
    icon: "target",
    badge: "API",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё, что нужно для работы с ИИ</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Забудьте про десятки подписок — доступ ко всем топовым нейросетям за один платёж
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}