import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое токены и как они работают?",
      answer:
        "Токены — это единица измерения текста в нейросетях. Примерно 1000 токенов = 750 слов. Вы пополняете баланс в рублях, а система автоматически списывает токены при каждом запросе к ИИ. Цена зависит от выбранной модели.",
    },
    {
      question: "Какие нейросети доступны?",
      answer:
        "Через OpenRouter мы подключаем более 50 моделей: GPT-4o, GPT-4 Turbo, Claude 3.5 Sonnet, Claude 3 Opus, Gemini 1.5 Pro, Mistral Large, LLaMA 3.1, Grok и другие. Список регулярно пополняется.",
    },
    {
      question: "Как пополнить баланс?",
      answer:
        "Заходите в личный кабинет → раздел «Пополнить». Принимаем банковские карты (Visa, MasterCard, МИР), СБП, ЮMoney. Платёж обрабатывается Яндекс Кассой — это безопасно и мгновенно.",
    },
    {
      question: "Есть ли минимальная сумма пополнения?",
      answer:
        "Минимальная сумма пополнения — 100 рублей. Баланс не сгорает — используйте токены в любое удобное время без ограничений по сроку.",
    },
    {
      question: "Чем Neural Hub лучше отдельных подписок?",
      answer:
        "Подписка на ChatGPT Plus стоит $20/мес, Claude Pro — $20/мес. У нас — одна оплата, все модели. Платите только за реальное использование, без фиксированных ежемесячных списаний.",
    },
    {
      question: "Есть ли API для разработчиков?",
      answer:
        "Да! В личном кабинете можно получить API-ключ и использовать его в своих приложениях. Один ключ даёт доступ ко всем подключённым моделям через единый endpoint.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать о токенах, оплате и работе с нейросетями на Neural Hub.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}