import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  level: string;
  topics: string[];
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Основы бухгалтерского учёта',
    description: 'Комплексный курс для начинающих бухгалтеров. Изучите основы учёта, проводки, первичную документацию.',
    duration: '8 недель',
    price: 25000,
    level: 'Начальный',
    topics: ['Первичные документы', 'Проводки', 'План счетов', 'Баланс', 'Отчётность']
  },
  {
    id: 2,
    title: 'Налоговый учёт и отчётность',
    description: 'Углублённое изучение налогообложения, НДС, налога на прибыль, НДФЛ и страховых взносов.',
    duration: '10 недель',
    price: 35000,
    level: 'Продвинутый',
    topics: ['НДС', 'Налог на прибыль', 'НДФЛ', 'Страховые взносы', '1С:Бухгалтерия']
  },
  {
    id: 3,
    title: 'Управленческий учёт',
    description: 'Практические инструменты для анализа финансовых показателей и принятия управленческих решений.',
    duration: '6 недель',
    price: 30000,
    level: 'Продвинутый',
    topics: ['Бюджетирование', 'Центры ответственности', 'Финансовый анализ', 'KPI', 'Excel для аналитики']
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Анна Петрова',
    position: 'Главный бухгалтер',
    text: 'Отличные курсы! Всё структурировано и понятно. Получила практические навыки, которые сразу применяю в работе.',
    rating: 5
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    position: 'Финансовый директор',
    text: 'Курс по управленческому учёту превзошёл ожидания. Преподаватель — настоящий профессионал с большим опытом.',
    rating: 5
  },
  {
    id: 3,
    name: 'Елена Иванова',
    position: 'Бухгалтер',
    text: 'Начинала с нуля, теперь уверенно веду учёт. Спасибо за доступное объяснение сложных тем!',
    rating: 5
  }
];

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen">
      <header className="bg-secondary text-secondary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-heading">Альма Санакоти</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#courses" className="hover:text-primary transition-colors">Курсы</a>
            <a href="#about" className="hover:text-primary transition-colors">О преподавателе</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 animate-fade-in">
            Профессиональное обучение бухгалтерскому учёту
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            Авторские курсы от практикующего эксперта с 15-летним опытом. Получите востребованную профессию или повысьте квалификацию.
          </p>
          <Button size="lg" className="animate-scale-in" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
            <Icon name="GraduationCap" className="mr-2" size={20} />
            Выбрать курс
          </Button>
        </div>
      </section>

      <section id="courses" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Наши курсы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={course.level === 'Начальный' ? 'secondary' : 'default'}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <CardTitle className="font-heading">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Вы изучите:</p>
                    <ul className="space-y-1">
                      {course.topics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold font-heading text-primary">
                      {course.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button onClick={() => setSelectedCourse(course)}>
                        Купить курс
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Оформление курса</DialogTitle>
                        <DialogDescription>
                          {selectedCourse?.title}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-2">Стоимость:</p>
                          <p className="text-3xl font-bold text-primary">
                            {selectedCourse?.price.toLocaleString('ru-RU')} ₽
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="font-semibold">Что входит в курс:</p>
                          <ul className="space-y-1">
                            {selectedCourse?.topics.map((topic, idx) => (
                              <li key={idx} className="text-sm flex items-start">
                                <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <Button className="w-full" size="lg">
                            <Icon name="CreditCard" className="mr-2" size={18} />
                            Оплатить картой
                          </Button>
                          <p className="text-xs text-center text-muted-foreground">
                            После оплаты вы получите доступ к материалам курса на email
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/9adb3721-d65d-45f9-872a-d96f89f06a66/files/1006359f-214f-474f-a5e6-a6d9df62d0b7.jpg"
                alt="Преподаватель"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold font-heading">О преподавателе</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Марина Викторовна Смирнова</strong> — дипломированный бухгалтер-эксперт с 15-летним стажем работы в крупных компаниях и аудиторских фирмах.
                </p>
                <p>
                  Аттестованный аудитор, автор статей в профессиональных изданиях, преподаватель с опытом обучения более 500 специалистов.
                </p>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center">
                    <Icon name="Award" className="mr-3 text-primary" size={20} />
                    <span>Аттестат аудитора</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="BookOpen" className="mr-3 text-primary" size={20} />
                    <span>Автор 50+ публикаций</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" className="mr-3 text-primary" size={20} />
                    <span>500+ выпускников</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Briefcase" className="mr-3 text-primary" size={20} />
                    <span>15 лет практического опыта</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Отзывы студентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.position}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="animate-scale-in">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Icon name="Mail" className="mr-4 text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@accounting-courses.ru" className="text-primary hover:underline">
                        info@accounting-courses.ru
                      </a>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start">
                    <Icon name="Phone" className="mr-4 text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+74951234567" className="text-primary hover:underline">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start">
                    <Icon name="MessageCircle" className="mr-4 text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold mb-1">Telegram</p>
                      <a href="https://t.me/accounting_courses" className="text-primary hover:underline">
                        @accounting_courses
                      </a>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start">
                    <Icon name="Clock" className="mr-4 text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Сб-Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-heading font-bold">Академия Бухгалтерии</p>
          <p className="text-sm opacity-80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;