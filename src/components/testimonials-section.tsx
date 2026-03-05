import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Сергей К.",
    role: "Маркетолог, малый бизнес",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Раньше платил отдельно за ChatGPT и Claude. Теперь всё в одном месте и вдвое дешевле. Экономия 4000 рублей в месяц!",
  },
  {
    name: "Анастасия М.",
    role: "Копирайтер-фрилансер",
    avatar: "/professional-woman-scientist.png",
    content:
      "Удобно сравнивать ответы разных моделей прямо в одном окне. Производительность выросла — теперь успеваю в два раза больше задач.",
  },
  {
    name: "Дмитрий Р.",
    role: "Разработчик, стартап",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Подключил API к своему боту за час. Один ключ — доступ ко всем моделям. Именно то, что нужно было для нашего проекта.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят пользователи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи специалистов уже работают с нейросетями через Neural Hub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}