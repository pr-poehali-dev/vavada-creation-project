import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"

const Index = () => {
  const games = [
    {
      title: "Слоты",
      description: "Более 500 эксклюзивных игровых автоматов",
      icon: "Sparkles",
    },
    {
      title: "Рулетка",
      description: "Европейская и американская рулетка",
      icon: "Target",
    },
    {
      title: "Блэкджек",
      description: "Классические и VIP столы",
      icon: "Spade",
    },
    {
      title: "Live Казино",
      description: "Игры с живыми дилерами",
      icon: "Video",
    }
  ]

  const bonuses = [
    {
      title: "Приветственный бонус",
      amount: "100%",
      description: "До 30 000₽ + бесплатные вращения",
      color: "bg-vavada-gold"
    },
    {
      title: "Мгновенные выплаты",
      amount: "€50K",
      description: "Выплаты до €50 000",
      color: "bg-vavada-red"
    },
    {
      title: "500+ слотов",
      amount: "500+",
      description: "Эксклюзивные игровые автоматы",
      color: "bg-gradient-to-r from-vavada-gold to-vavada-red"
    }
  ]

  const paymentMethods = [
    { name: "VISA/MasterCard", commission: "0%", time: "1-3 дня" },
    { name: "Qiwi", commission: "1%", time: "До 30 минут" },
    { name: "Яндекс.Деньги", commission: "0.5%", time: "До 15 минут" }
  ]

  const reviews = [
    {
      author: "CyberNinja33",
      text: "Играю в Vavada Casino уже несколько месяцев, делюсь впечатлениями. Сайт удобный, интерфейс понятный, регистрация быстрая. Понравилось большое количество слотов и live-казино. Лично для меня главное - честность и прозрачность, здесь всё именно так. Вывод средств происходит без задержек, саппорт отзывчивый."
    },
    {
      author: "ninjaSky",
      text: "Недавно открыла для себя Vavada Casino и теперь точно знаю, где можно круто провести время! Сайт интуитивно понятный, регистрация заняла буквально пару минут. Особенно понравилось огромное количество игровых автоматов - есть из чего выбрать."
    },
    {
      author: "moonLight_star",
      text: "Недавно попробовала Vavada Casino и теперь точно могу сказать - это реально классное онлайн-казино! Интерфейс удобный, много интересных слотов. Регистрация быстрая, без проблем прошла верификацию."
    }
  ]

  return (
    <div className="min-h-screen bg-vavada-dark text-white">
      {/* Header */}
      <header className="border-b border-vavada-navy vavada-shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">VAVADA</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#games" className="hover:text-vavada-gold transition-colors">Игры</a>
            <a href="#bonuses" className="hover:text-vavada-gold transition-colors">Бонусы</a>
            <a href="#registration" className="hover:text-vavada-gold transition-colors">Регистрация</a>
            <a href="#mobile" className="hover:text-vavada-gold transition-colors">Мобильная версия</a>
          </nav>
          <div className="flex gap-2">
            <Button variant="outline" className="border-vavada-gold text-vavada-gold hover:bg-vavada-gold hover:text-vavada-dark">
              Вход
            </Button>
            <Button className="gradient-primary">Регистрация</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Vavada Casino</span>
            <br />
            Официальный сайт казино
          </h1>
          <div className="max-w-4xl mx-auto mb-8 text-lg md:text-xl text-gray-300 space-y-4">
            <p>
              Погрузитесь в <strong className="text-vavada-gold">захватывающую реальность</strong> азартных развлечений, где каждый клик может стать ключом к невероятным приключениям и моментальным трофеям!
            </p>
            <p>
              Наша платформа предлагает <em className="text-vavada-light">уникальный игровой опыт</em> с гарантированной честностью и прозрачностью механик:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-vavada-navy rounded-lg">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-vavada-gold font-semibold">Более 500 эксклюзивных слотов</div>
              </div>
              <div className="text-center p-4 bg-vavada-navy rounded-lg">
                <div className="text-2xl mb-2">🔥</div>
                <div className="text-vavada-gold font-semibold">Мгновенные выплаты до €50 000</div>
              </div>
              <div className="text-center p-4 bg-vavada-navy rounded-lg">
                <div className="text-2xl mb-2">💯</div>
                <div className="text-vavada-gold font-semibold">Бонус 100% от первого депозита</div>
              </div>
            </div>
            <p className="text-xl mt-6">
              Специальное предложение: <strong className="text-vavada-gold">Получите бесплатные вращения</strong> при регистрации прямо сейчас!
            </p>
            <p className="text-lg">
              Присоединяйтесь к элите азартных героев - <em className="text-vavada-light">ваша легендарная история начинается здесь!</em>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-lg px-8 py-6 vavada-shadow">
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-vavada-gold text-vavada-gold hover:bg-vavada-gold hover:text-vavada-dark text-lg px-8 py-6">
              <Icon name="Gift" className="mr-2" />
              Получить бонус
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Guide */}
      <section id="registration" className="py-16 bg-vavada-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Как зарегистрироваться в Vavada Casino: пошаговое руководство</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-gold rounded-full flex items-center justify-center text-vavada-dark font-bold">1</div>
                  <span>Откройте официальный сайт</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-gold rounded-full flex items-center justify-center text-vavada-dark font-bold">2</div>
                  <span>Нажмите на кнопку регистрации</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-gold rounded-full flex items-center justify-center text-vavada-dark font-bold">3</div>
                  <span>Введите адрес электронной почты</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-gold rounded-full flex items-center justify-center text-vavada-dark font-bold">4</div>
                  <span>Установите надежный пароль</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-gold rounded-full flex items-center justify-center text-vavada-dark font-bold">5</div>
                  <span>Выберите валюту для счета</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-red rounded-full flex items-center justify-center text-white font-bold">6</div>
                  <span>Подтвердите почту через полученную ссылку</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-red rounded-full flex items-center justify-center text-white font-bold">7</div>
                  <span>Перейдите в личный кабинет</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-red rounded-full flex items-center justify-center text-white font-bold">8</div>
                  <span>Завершите процесс, следуя указаниям</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-red rounded-full flex items-center justify-center text-white font-bold">9</div>
                  <span>Заполните личные данные в профиле</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-vavada-dark rounded-lg">
                  <div className="w-8 h-8 bg-vavada-red rounded-full flex items-center justify-center text-white font-bold">10</div>
                  <span>Проверьте информацию на корректность</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="text-gradient">Обзор игр: что попробовать в первую очередь</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12 text-gray-300">
            <p className="mb-6">
              <strong className="text-vavada-gold">Blackjack Classic</strong> предлагает идеальный старт для новичков с прозрачными правилами и невысоким порогом входа. Коэффициент возврата составляет 99,5%, что делает игру максимально привлекательной.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-vavada-gold">Топовые слот-автоматы</h3>
            <div className="space-y-4 mb-6">
              <p>
                <strong>Book of Ra</strong> - культовый египетский слот с расширяющимися символами и бонусными вращениями. Максимальный множитель достигает 5000x от начальной ставки, что гарантирует захватывающий игровой опыт.
              </p>
              <p>
                <strong>Gonzo's Quest</strong> отличается уникальной механикой падающих блоков и прогрессивным мультипликатором. При последовательных победах коэффициент может вырасти до 15x, открывая потенциал крупного выигрыша.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-vavada-gold">Рекомендации по стратегиям</h3>
            <p>
              Начните с минимальных ставок, изучите правила каждой игры. Рекомендуем протестировать демо-версии перед игрой на реальные средства. Следите за бонусными программами и еженедельными акциями для увеличения игрового капитала.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {games.map((game, index) => (
              <Card key={index} className="bg-vavada-navy border-vavada-accent hover:border-vavada-gold transition-all duration-300 transform hover:scale-105 cursor-pointer vavada-shadow">
                <CardHeader>
                  <div className="w-full h-48 gradient-card rounded-lg mb-4 flex items-center justify-center">
                    <Icon name={game.icon} size={48} className="text-vavada-gold" />
                  </div>
                  <CardTitle className="text-white">{game.title}</CardTitle>
                  <CardDescription className="text-vavada-light">{game.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-16 bg-vavada-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="text-gradient">Бонусы и акции: как максимизировать свои выигрыши</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12 text-gray-300 space-y-6">
            <p>
              Начните с изучения актуальных предложений, представленных на платформе. Многие заведения предлагают <strong className="text-vavada-gold">приветственные пакеты</strong> для новых пользователей, которые могут включать в себя дополнительные средства или бесплатные вращения. Это позволит увеличить стартовый капитал и повысить шансы на успех.
            </p>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-vavada-gold">Использование промокодов</h3>
              <p>
                Отслеживайте рекламные коды, которые предоставляют крупные игорные сайты. Они могут активировать дополнительные преимущества, такие как бонусные деньги или эксклюзивные акции. Регистрируйтесь на официальных страницах, чтобы не пропустить выгодные предложения.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-vavada-gold">Планирование стратегии</h3>
              <p>
                Внимательно изучите условия каждой акции: требования по отыгрышу, сроки их выполнения. Это поможет избежать неприятных сюрпризов. Опытные игроки рекомендуют делать умеренные ставки, чтобы дольше оставаться в игре и увеличивать шансы на прирост средств.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-vavada-dark border-vavada-accent hover:border-vavada-gold transition-all duration-300 vavada-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${bonus.color} flex items-center justify-center mb-4`}>
                    <span className="text-2xl font-bold text-white">{bonus.amount}</span>
                  </div>
                  <CardTitle className="text-white text-xl">{bonus.title}</CardTitle>
                  <CardDescription className="text-vavada-light">{bonus.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gradient-primary">Получить</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Безопасность и надежность: как Vavada защищает ваши данные</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-gray-300">
              <p className="mb-6">
                Современная платформа использует многоуровневую систему защиты персональной информации пользователей через передовые криптографические протоколы SSL/TLS 256-битного шифрования.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-vavada-gold">Основные меры защиты:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Icon name="Shield" className="text-vavada-gold" size={20} />
                      <span>Двухфакторная аутентификация блокирует несанкционированный доступ к профилю</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="CheckCircle" className="text-vavada-gold" size={20} />
                      <span>Регулярные независимые аудиты подтверждают безупречность системы безопасности</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="Eye" className="text-vavada-gold" size={20} />
                      <span>Круглосуточный мониторинг предотвращает любые атаки и вторжения</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-vavada-gold">Защита данных:</h3>
                  <ol className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-vavada-gold text-vavada-dark rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span>Полное шифрование личных файлов</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-vavada-gold text-vavada-dark rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span>Надежное резервное копирование</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-vavada-gold text-vavada-dark rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span>Строгое соответствие международным стандартам конфиденциальности</span>
                    </li>
                  </ol>
                </div>
              </div>
              
              <p>
                Дополнительная верификация через документы гарантирует максимальную защиту финансовых операций и личных сведений.
              </p>
            </div>
            
            {/* Payment Methods Table */}
            <div className="bg-vavada-navy rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center text-vavada-gold">Методы платежей</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-vavada-accent">
                      <th className="py-3 px-4 text-vavada-gold font-semibold">Метод</th>
                      <th className="py-3 px-4 text-vavada-gold font-semibold">Комиссия</th>
                      <th className="py-3 px-4 text-vavada-gold font-semibold">Время зачисления</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentMethods.map((method, index) => (
                      <tr key={index} className="border-b border-vavada-accent/50 hover:bg-vavada-dark/50 transition-colors">
                        <td className="py-3 px-4">{method.name}</td>
                        <td className="py-3 px-4 text-vavada-gold">{method.commission}</td>
                        <td className="py-3 px-4">{method.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section id="mobile" className="py-16 bg-vavada-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Мобильная версия: играйте в любом месте и в любое время</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-gray-300">
              <p className="mb-6">
                Скачайте мобильное приложение и получите доступ к полному функционалу платформы с любого смартфона или планшета. Современная адаптивная версия работает на iOS и Android, обеспечивая моментальный вход через личный аккаунт.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-vavada-gold">Преимущества мобильной платформы</h3>
                  <p className="mb-4">
                    Быстрая загрузка игр, поддержка всех популярных слот-автоматов и настольных развлечений. Оптимизированный интерфейс позволяет комфортно управлять ставками с экрана мобильного устройства. Никаких дополнительных затрат на скачивание - играйте через браузер.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-vavada-gold">Безопасность и конфиденциальность</h3>
                  <p className="mb-4">
                    Защищенное подключение с использованием современных протоколов шифрования гарантирует сохранность персональных данных. Двухфакторная аутентификация и анонимность - ключевые принципы мобильной версии.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" className="gradient-primary mr-4">
                  <Icon name="Download" className="mr-2" />
                  Скачать для Android
                </Button>
                <Button size="lg" variant="outline" className="border-vavada-gold text-vavada-gold hover:bg-vavada-gold hover:text-vavada-dark">
                  <Icon name="Download" className="mr-2" />
                  Скачать для iOS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Вопрос-ответ</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-vavada-navy border-vavada-accent rounded-lg px-6">
                <AccordionTrigger className="text-vavada-gold hover:text-vavada-light">
                  Как быстро происходит вывод денег в Vavada Casino?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Вывод средств в Vavada Casino занимает от 15 минут до 3 банковских дней, в зависимости от выбранного метода. Электронные кошельки работают быстрее - до 30 минут, банковские карты - до 3 дней. Важно иметь полностью подтвержденный аккаунт и пройти идентификацию.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-vavada-navy border-vavada-accent rounded-lg px-6">
                <AccordionTrigger className="text-vavada-gold hover:text-vavada-light">
                  Какие бонусы дает Vavada Casino новым игрокам?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Новые игроки получают welcome-бонус до 100% от первого депозита, который может достигать 30 000 рублей. Бонус разыгрывается с вейджером 40x, что считается достаточно лояльным условием среди онлайн-казино.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-vavada-navy border-vavada-accent rounded-lg px-6">
                <AccordionTrigger className="text-vavada-gold hover:text-vavada-light">
                  Можно ли играть в Vavada Casino с мобильного телефона?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Да, Vavada Casino полностью адаптирована под мобильные устройства. Есть мобильная версия сайта и приложения для iOS и Android. Игры корректно работают на смартфонах и планшетах, сохраняя качество графики и скорость работы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-vavada-navy border-vavada-accent rounded-lg px-6">
                <AccordionTrigger className="text-vavada-gold hover:text-vavada-light">
                  Какие игровые провайдеры представлены в Vavada Casino?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  В казино представлены провайдеры: NetEnt, Microgaming, Playtech, Evolution Gaming, Pragmatic Play, BGaming и другие. Всего около 30 известных разработчиков с лицензионными слотами, live-казино и настольными играми.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-vavada-navy border-vavada-accent rounded-lg px-6">
                <AccordionTrigger className="text-vavada-gold hover:text-vavada-light">
                  Как работает техническая поддержка Vavada Casino?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Техническая поддержка работает круглосуточно через онлайн-чат на сайте, электронную почту и телефон. Средняя скорость реакции - 5-10 минут. Специалисты помогают решать вопросы по выплатам, техническим проблемам и правилам игры.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-vavada-navy border-vavada-accent rounded-lg px-6">
                <AccordionTrigger className="text-vavada-gold hover:text-vavada-light">
                  Как начать играть в Vavada Casino?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Чтобы начать играть в Vavada Casino, нужно пройти простую регистрацию на официальном сайте. Введите корректные личные данные, подтвердите электронную почту, внесите первый депозит и получите приветственный бонус до 100% от суммы пополнения. После этого можно выбрать любимые игровые автоматы или столы и начать азартное приключение.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-vavada-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Отзывы</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-vavada-dark border-vavada-accent hover:border-vavada-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-vavada-gold text-lg">{review.author}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vavada-dark border-t border-vavada-navy py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-4">VAVADA</div>
              <p className="text-gray-400">
                Лицензированное онлайн казино с честной игрой и быстрыми выплатами. Служба поддержки готова помочь круглосуточно через чат на официальном сайте или по электронной почте.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-vavada-gold">Игры</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Слоты (500+ игр)</li>
                <li>Рулетка</li>
                <li>Блэкджек</li>
                <li>Live Casino</li>
                <li>Book of Ra</li>
                <li>Gonzo's Quest</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-vavada-gold">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Чат 24/7</li>
                <li>support@vavada.com</li>
                <li>+7 (800) 555-35-35</li>
                <li>GamblerKey партнер</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-vavada-gold">Безопасность</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Лицензия Кюрасао</li>
                <li>SSL шифрование</li>
                <li>Ответственная игра</li>
                <li>18+</li>
                <li>Верификация документов</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-vavada-navy pt-8 text-center text-gray-400">
            <p>&copy; 2024 VAVADA Casino. Все права защищены.</p>
            <p className="mt-2 text-sm">
              Игра может вызвать зависимость. Играйте ответственно. 18+
            </p>
            <p className="mt-2 text-xs">
              Для детальных инструкций и актуальной информации об акциях и бонусах посетите <a href="https://gamblerkey.org" className="text-vavada-gold hover:text-vavada-light">GamblerKey</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index