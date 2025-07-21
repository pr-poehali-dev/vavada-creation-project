import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
  const games = [
    {
      title: "Слоты",
      description: "Более 2000 игровых автоматов",
      icon: "Sparkles",
      image: "img/c1874121-965b-4353-a551-607a4cff6e74.jpg"
    },
    {
      title: "Рулетка",
      description: "Европейская и американская рулетка",
      icon: "Target",
      image: "img/c457c15d-3bb0-4285-ae1b-57a12c5b819e.jpg"
    },
    {
      title: "Блэкджек",
      description: "Классические и VIP столы",
      icon: "Spade",
      image: "img/c1874121-965b-4353-a551-607a4cff6e74.jpg"
    },
    {
      title: "Live Казино",
      description: "Игры с живыми дилерами",
      icon: "Video",
      image: "img/c457c15d-3bb0-4285-ae1b-57a12c5b819e.jpg"
    }
  ]

  const bonuses = [
    {
      title: "Приветственный бонус",
      amount: "100%",
      description: "До 25 000₽ + 100 фриспинов",
      color: "bg-casino-orange"
    },
    {
      title: "Ежедневный кэшбэк",
      amount: "10%",
      description: "Возврат средств каждый день",
      color: "bg-casino-blue"
    },
    {
      title: "VIP программа",
      amount: "∞",
      description: "Эксклюзивные привилегии",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500"
    }
  ]

  return (
    <div className="min-h-screen bg-casino-dark text-white">
      {/* Header */}
      <header className="border-b border-casino-gray">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">VAVADA</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#games" className="hover:text-casino-orange transition-colors">Игры</a>
            <a href="#bonuses" className="hover:text-casino-orange transition-colors">Бонусы</a>
            <a href="#tournaments" className="hover:text-casino-orange transition-colors">Турниры</a>
            <a href="#live" className="hover:text-casino-orange transition-colors">Live</a>
          </nav>
          <div className="flex gap-2">
            <Button variant="outline" className="border-casino-orange text-casino-orange hover:bg-casino-orange hover:text-white">
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
            <span className="text-gradient">VAVADA</span>
            <br />
            Casino Online
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Лучшее онлайн казино с лицензией и честной игрой. 
            Слоты, живые дилеры, турниры и щедрые бонусы!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-casino-blue text-casino-blue hover:bg-casino-blue hover:text-white text-lg px-8 py-6">
              <Icon name="Gift" className="mr-2" />
              Получить бонус
            </Button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 bg-casino-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Популярные игры</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <Card key={index} className="bg-casino-dark border-gray-700 hover:border-casino-orange transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-card rounded-lg mb-4 flex items-center justify-center">
                    <Icon name={game.icon} size={48} className="text-casino-orange" />
                  </div>
                  <CardTitle className="text-white">{game.title}</CardTitle>
                  <CardDescription className="text-gray-400">{game.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Бонусы и акции</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-casino-gray border-gray-600 hover:border-casino-orange transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${bonus.color} flex items-center justify-center mb-4`}>
                    <span className="text-2xl font-bold text-white">{bonus.amount}</span>
                  </div>
                  <CardTitle className="text-white text-xl">{bonus.title}</CardTitle>
                  <CardDescription className="text-gray-400">{bonus.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gradient-primary">Получить</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Casino Section */}
      <section id="live" className="py-16 bg-casino-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Live Casino</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Играйте с настоящими дилерами в режиме реального времени
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-casino-orange rounded-full flex items-center justify-center">
                    <Icon name="Video" className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">HD качество</h3>
                    <p className="text-gray-400">Игра в высоком разрешении</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-casino-blue rounded-full flex items-center justify-center">
                    <Icon name="Users" className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Профессиональные дилеры</h3>
                    <p className="text-gray-400">Опытные крупье со всего мира</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-casino-orange to-casino-blue rounded-full flex items-center justify-center">
                    <Icon name="Clock" className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">24/7 доступность</h3>
                    <p className="text-gray-400">Играйте в любое время</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="gradient-primary mt-8 w-full md:w-auto">
                <Icon name="Play" className="mr-2" />
                Играть Live
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center">
                <Icon name="Video" size={80} className="text-casino-orange" />
              </div>
              <Badge className="absolute top-4 right-4 bg-red-500">LIVE</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Турниры</span>
          </h2>
          <div className="bg-casino-gray rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Еженедельный турнир слотов</h3>
              <p className="text-gray-400">Призовой фонд: 500,000₽</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-casino-orange mb-2">🥇</div>
                <div className="text-xl font-semibold">1 место</div>
                <div className="text-casino-orange">200,000₽</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 mb-2">🥈</div>
                <div className="text-xl font-semibold">2 место</div>
                <div className="text-gray-300">100,000₽</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">🥉</div>
                <div className="text-xl font-semibold">3 место</div>
                <div className="text-gray-300">50,000₽</div>
              </div>
            </div>
            <div className="text-center">
              <Button className="gradient-primary" size="lg">
                <Icon name="Trophy" className="mr-2" />
                Участвовать
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-casino-dark border-t border-casino-gray py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-4">VAVADA</div>
              <p className="text-gray-400">
                Лицензированное онлайн казино с честной игрой и быстрыми выплатами.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Игры</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Слоты</li>
                <li>Рулетка</li>
                <li>Блэкджек</li>
                <li>Live Casino</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Чат 24/7</li>
                <li>support@vavada.com</li>
                <li>+7 (800) 555-35-35</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Безопасность</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Лицензия Кюрасао</li>
                <li>SSL шифрование</li>
                <li>Ответственная игра</li>
                <li>18+</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-casino-gray pt-8 text-center text-gray-400">
            <p>&copy; 2024 VAVADA Casino. Все права защищены.</p>
            <p className="mt-2 text-sm">
              Игра может вызвать зависимость. Играйте ответственно. 18+
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index