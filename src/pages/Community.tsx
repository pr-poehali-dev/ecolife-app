import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Community = () => {
  const leaderboard = [
    { name: 'Екатерина М.', points: 2850, avatar: 'Е', rank: 1, badge: 'Эко-чемпион' },
    { name: 'Алексей К.', points: 2640, avatar: 'А', rank: 2, badge: 'Зеленый гуру' },
    { name: 'Мария П.', points: 2420, avatar: 'М', rank: 3, badge: 'Эко-герой' },
    { name: 'Дмитрий С.', points: 2180, avatar: 'Д', rank: 4, badge: 'Планета-защитник' },
    { name: 'Анна Петрова', points: 1248, avatar: 'А', rank: 12, badge: 'Эко-энтузиаст', isMe: true }
  ];

  const recentActivities = [
    {
      user: 'Мария',
      avatar: 'М',
      action: 'сдала 5 кг макулатуры',
      points: 25,
      time: '2 часа назад',
      icon: 'Recycle'
    },
    {
      user: 'Алексей',
      avatar: 'А',
      action: 'проехал 10 км на велосипеде',
      points: 20,
      time: '4 часа назад',
      icon: 'Bike'
    },
    {
      user: 'Екатерина',
      avatar: 'Е',
      action: 'сэкономила 50л воды',
      points: 15,
      time: '6 часов назад',
      icon: 'Droplets'
    },
    {
      user: 'Дмитрий',
      avatar: 'Д',
      action: 'использовал солнечную энергию',
      points: 30,
      time: '8 часов назад',
      icon: 'Sun'
    }
  ];

  const challenges = [
    {
      title: 'Неделя без пластика',
      description: 'Откажитесь от одноразового пластика на 7 дней',
      participants: 1247,
      reward: 100,
      timeLeft: '3 дня',
      difficulty: 'Средняя'
    },
    {
      title: 'Велосипедный марафон',
      description: 'Проедьте 50 км на велосипеде за месяц',
      participants: 856,
      reward: 150,
      timeLeft: '15 дней',
      difficulty: 'Легкая'
    },
    {
      title: 'Экономия энергии',
      description: 'Сократите потребление электроэнергии на 20%',
      participants: 642,
      reward: 200,
      timeLeft: '10 дней',
      difficulty: 'Сложная'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-eco-100">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {/* Header */}
        <div className="bg-eco-600 text-white p-6 rounded-b-3xl">
          <h1 className="text-2xl font-bold">Сообщество</h1>
          <p className="text-eco-100">Объединяемся ради планеты</p>
        </div>

        <div className="p-6 space-y-6 pb-32">
          {/* Community Stats */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                Общая статистика
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-eco-600">12,456</p>
                  <p className="text-sm text-gray-600">Участников</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">2.8 т</p>
                  <p className="text-sm text-gray-600">CO₂ сэкономлено</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">45,320 л</p>
                  <p className="text-sm text-gray-600">Воды сэкономлено</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">1,280 кг</p>
                  <p className="text-sm text-gray-600">Переработано</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Trophy" size={20} />
                Топ экологов
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {leaderboard.map((user) => (
                <div 
                  key={user.rank} 
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    user.isMe ? 'bg-eco-50 border border-eco-200' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-lg font-bold ${
                      user.rank === 1 ? 'text-yellow-600' : 
                      user.rank === 2 ? 'text-gray-600' : 
                      user.rank === 3 ? 'text-orange-600' : 'text-gray-500'
                    }`}>
                      #{user.rank}
                    </span>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder-${user.avatar.toLowerCase()}.svg`} />
                      <AvatarFallback className={user.isMe ? 'bg-eco-500 text-white' : ''}>{user.avatar}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${user.isMe ? 'text-eco-700' : ''}`}>
                      {user.name}
                    </p>
                    <Badge variant="outline" className="text-xs">{user.badge}</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{user.points.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">очков</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Activity" size={20} />
                Активность сообщества
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{activity.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        <span className="text-eco-600">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">+{activity.points}</Badge>
                      <Icon name={activity.icon} size={16} className="text-eco-600" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Community Challenges */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" size={20} />
                Общие вызовы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{challenge.title}</h4>
                    <Badge variant={
                      challenge.difficulty === 'Легкая' ? 'default' :
                      challenge.difficulty === 'Средняя' ? 'secondary' : 'destructive'
                    }>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {challenge.participants}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {challenge.timeLeft}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-eco-600">
                      +{challenge.reward} очков
                    </span>
                  </div>
                  <Button className="w-full" variant="outline" size="sm">
                    Присоединиться
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;