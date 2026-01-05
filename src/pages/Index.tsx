import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    {
      icon: 'Stethoscope',
      title: 'Общая терапия',
      description: 'Диагностика и лечение заболеваний'
    },
    {
      icon: 'Scissors',
      title: 'Хирургия',
      description: 'Плановые и экстренные операции'
    },
    {
      icon: 'Syringe',
      title: 'Вакцинация',
      description: 'Профилактика инфекционных заболеваний'
    },
    {
      icon: 'Activity',
      title: 'УЗИ диагностика',
      description: 'Современное оборудование экспертного класса'
    },
    {
      icon: 'Pill',
      title: 'Стоматология',
      description: 'Лечение и удаление зубов'
    },
    {
      icon: 'Heart',
      title: 'Кардиология',
      description: 'Диагностика и лечение сердца'
    }
  ];

  const doctors = [
    {
      name: 'Иванова Мария',
      specialty: 'Главный ветеринарный врач',
      experience: '15 лет',
      image: 'https://cdn.poehali.dev/files/c8b87238-2f8c-44ff-95dd-ebc127b0006b_b37ccb52-8a0d-4a06-a33c-8bc1e9c23fa6.png'
    },
    {
      name: 'Петров Алексей',
      specialty: 'Ветеринарный хирург',
      experience: '12 лет',
      image: 'https://cdn.poehali.dev/files/GKVqpKtqhxXKb1v1HYQzaYGYIalEKNJUU2giXIAmAyTpMmiB0R7vX9zfqDP0wO-fh3tsSGtZ.jpg'
    },
    {
      name: 'Сидорова Елена',
      specialty: 'Ветеринарный терапевт',
      experience: '10 лет',
      image: 'https://cdn.poehali.dev/files/dbe88cbf-0041-4c29-bd0e-498888d5eb41_07dbf0ec-aa79-4978-94b7-07a7e85cb6f5.png'
    },
    {
      name: 'Козлов Дмитрий',
      specialty: 'Ветеринарный стоматолог',
      experience: '8 лет',
      image: 'https://cdn.poehali.dev/files/daa0e329-afab-4bdd-96e3-dfa05da7b6e2_5480c101-d29d-4d88-9059-71ce42b6e146.png'
    }
  ];

  const reviews = [
    {
      name: 'Анна Смирнова',
      rating: 5,
      text: 'Прекрасная клиника! Врачи очень внимательные, всё подробно объясняют. Мой кот остался доволен приёмом.',
      pet: 'Кот Барсик'
    },
    {
      name: 'Михаил Соколов',
      rating: 5,
      text: 'Спасибо огромное доктору Ивановой! Спасла нашу собаку после сложной операции. Профессионалы своего дела!',
      pet: 'Собака Рекс'
    },
    {
      name: 'Ольга Морозова',
      rating: 5,
      text: 'Современное оборудование, чистота, внимательный персонал. Рекомендую всем владельцам питомцев!',
      pet: 'Кошка Мурка'
    }
  ];

  const blogPosts = [
    {
      title: 'Как подготовить питомца к вакцинации',
      excerpt: 'Важные правила и рекомендации перед прививкой',
      date: '15 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/b883302e-a5a2-4e00-bf3b-c8ab018cc310/files/8960d69f-bbfa-4fa6-8b4b-ee5a35f46eb3.jpg'
    },
    {
      title: 'Профилактика паразитов у собак и кошек',
      excerpt: 'Современные методы защиты от блох и клещей',
      date: '10 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/b883302e-a5a2-4e00-bf3b-c8ab018cc310/files/8960d69f-bbfa-4fa6-8b4b-ee5a35f46eb3.jpg'
    },
    {
      title: 'Правильное питание домашних животных',
      excerpt: 'Советы ветеринарного диетолога',
      date: '5 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/b883302e-a5a2-4e00-bf3b-c8ab018cc310/files/8960d69f-bbfa-4fa6-8b4b-ee5a35f46eb3.jpg'
    }
  ];

  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">ВетКлиника</h1>
                <p className="text-sm text-muted-foreground">Забота о ваших питомцах</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-foreground hover:text-primary transition">Услуги</a>
              <a href="#doctors" className="text-foreground hover:text-primary transition">Врачи</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition">Отзывы</a>
              <a href="#blog" className="text-foreground hover:text-primary transition">Блог</a>
              <a href="#about" className="text-foreground hover:text-primary transition">О клинике</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition">Контакты</a>
            </nav>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">
                  <Icon name="Calendar" className="mr-2" size={18} />
                  Записаться на приём
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Онлайн-запись на приём</DialogTitle>
                  <DialogDescription>
                    Выберите врача, дату и время для визита
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label>Выберите врача</Label>
                    <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите специалиста" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor.name} value={doctor.name}>
                            {doctor.name} - {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Выберите дату</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Выберите время</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          onClick={() => setSelectedTime(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="petName">Имя питомца</Label>
                    <Input id="petName" placeholder="Введите имя питомца" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Ваше имя</Label>
                    <Input id="ownerName" placeholder="Введите ваше имя" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Причина обращения</Label>
                    <Textarea id="reason" placeholder="Опишите симптомы или причину визита" />
                  </div>

                  <Button size="lg" className="w-full">
                    Подтвердить запись
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="w-fit">Профессиональная ветеринарная помощь</Badge>
              <h1 className="text-5xl font-bold leading-tight">
                Здоровье вашего питомца — наша главная забота
              </h1>
              <p className="text-xl text-muted-foreground">
                Современная клиника с опытными врачами и новейшим оборудованием. 
                Работаем с 2010 года, помогли более 15 000 питомцев.
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="text-lg">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Записаться на приём
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (951) 727-71-91
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15000+</div>
                  <div className="text-muted-foreground">пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">без выходных</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/b883302e-a5a2-4e00-bf3b-c8ab018cc310/files/c140ab87-c001-4c87-89fc-09eba68d1605.jpg"
                alt="Ветеринарная клиника"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Полный спектр ветеринарных услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современное оборудование и квалифицированные специалисты для здоровья вашего питомца
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-4xl font-bold mb-4">Опытные ветеринарные врачи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с высшим образованием и многолетним опытом работы
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {doctors.map((doctor, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition hover-scale">
                <CardHeader>
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={doctor.image} alt={doctor.name} />
                    <AvatarFallback>{doctor.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription>{doctor.specialty}</CardDescription>
                  <Badge variant="secondary" className="mt-2 w-fit mx-auto">
                    Опыт: {doctor.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Записаться
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 500 благодарных отзывов от владельцев питомцев
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-sm">{review.pet}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Полезные статьи</Badge>
            <h2 className="text-4xl font-bold mb-4">Блог с советами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Рекомендации ветеринарных врачей по уходу за питомцами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition hover-scale">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.date}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О клинике</Badge>
              <h2 className="text-4xl font-bold mb-6">Современная ветеринарная клиника</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Наша клиника работает с 2010 года и за это время помогла более 15 000 питомцев. 
                  Мы используем только современное оборудование экспертного класса и постоянно 
                  повышаем квалификацию наших врачей.
                </p>
                <p>
                  В клинике есть собственная лаборатория, операционная, стационар и кабинеты 
                  для различных видов диагностики. Мы работаем круглосуточно, включая выходные 
                  и праздничные дни.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Лицензированная клиника</div>
                    <div className="text-sm text-muted-foreground">Все разрешения и сертификаты</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Современное оборудование</div>
                    <div className="text-sm text-muted-foreground">Экспертный класс</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Опытные врачи</div>
                    <div className="text-sm text-muted-foreground">От 8 лет практики</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Круглосуточно</div>
                    <div className="text-sm text-muted-foreground">Без выходных</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/b883302e-a5a2-4e00-bf3b-c8ab018cc310/files/8960d69f-bbfa-4fa6-8b4b-ee5a35f46eb3.jpg"
                alt="О клинике"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  +7 (951) 727-71-91
                </CardDescription>
                <CardDescription>Круглосуточно</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  info@vetklinika.ru
                </CardDescription>
                <CardDescription>Ответим в течение часа</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  г. Москва, ул. Примерная, д. 10
                </CardDescription>
                <CardDescription>Рядом с метро</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" size={24} />
                <h3 className="text-xl font-bold">ВетКлиника</h3>
              </div>
              <p className="text-background/80">
                Профессиональная ветеринарная помощь с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#services" className="hover:text-background">Общая терапия</a></li>
                <li><a href="#services" className="hover:text-background">Хирургия</a></li>
                <li><a href="#services" className="hover:text-background">Вакцинация</a></li>
                <li><a href="#services" className="hover:text-background">УЗИ диагностика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#about" className="hover:text-background">О клинике</a></li>
                <li><a href="#doctors" className="hover:text-background">Наши врачи</a></li>
                <li><a href="#blog" className="hover:text-background">Блог</a></li>
                <li><a href="#reviews" className="hover:text-background">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>+7 (951) 727-71-91</li>
                <li>info@vetklinika.ru</li>
                <li>г. Москва, ул. Примерная, д. 10</li>
                <li>Круглосуточно, без выходных</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>© 2024 ВетКлиника. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;