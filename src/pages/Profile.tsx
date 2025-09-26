import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const achievements = [
    { name: 'Эко-герой', icon: 'Trophy', color: 'text-yellow-600', bg: 'bg-yellow-50', date: '15 сен 2024' },
    { name: 'Водосбер', icon: 'Droplets', color: 'text-blue-600', bg: 'bg-blue-50', date: '10 сен 2024' },
    { name: 'Эко-сортер', icon: 'Recycle', color: 'text-green-600', bg: 'bg-green-50', date: '5 сен 2024' },
    { name: 'Велосипедист', icon: 'Bike', color: 'text-purple-600', bg: 'bg-purple-50', date: '1 сен 2024' }
  ];

  const stats = [
    { label: 'Дней в приложении', value: '45' },
    { label: 'Выполнено заданий', value: '127' },
    { label: 'Сэкономлено CO₂', value: '42.8 кг' },
    { label: 'Сэкономлено воды', value: '1,240 л' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-eco-100">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {/* Header */}
        <div className="bg-eco-600 text-white p-6 rounded-b-3xl">
          <h1 className="text-2xl font-bold">Профиль</h1>
          <p className="text-eco-100">Ваши достижения и настройки</p>
        </div>

        <div className="p-6 space-y-6 pb-32">
          {/* Profile Info */}
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-eco-500 text-white text-2xl">А</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Анна Петрова</h3>
                  <p className="text-gray-600">Эко-энтузиаст с 2024 года</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-eco-100 text-eco-700">Уровень 5</Badge>
                    <Badge variant="outline">#12 в рейтинге</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Icon name="Edit" size={16} />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-eco-50 rounded-lg">
                  <p className="text-2xl font-bold text-eco-600">1,248</p>
                  <p className="text-sm text-gray-600">Эко-очки</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">45</p>
                  <p className="text-sm text-gray-600">Заданий</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">12</p>
                  <p className="text-sm text-gray-600">Дней подряд</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">8</p>
                  <p className="text-sm text-gray-600">Достижений</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Award" size={20} />
                Последние достижения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-lg ${achievement.bg}`}>
                      <Icon name={achievement.icon} size={20} className={achievement.color} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{achievement.name}</p>
                      <p className="text-sm text-gray-500">{achievement.date}</p>
                    </div>
                    <Icon name="ChevronRight" size={16} className="text-gray-400" />
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Посмотреть все достижения
              </Button>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={20} />
                Моя статистика
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-eco-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Settings" size={20} />
                Настройки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Bell" size={20} />
                  <div>
                    <p className="font-medium">Уведомления</p>
                    <p className="text-sm text-gray-500">Напоминания о заданиях</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <div>
                    <p className="font-medium">Email-рассылка</p>
                    <p className="text-sm text-gray-500">Еженедельные отчеты</p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Eye" size={20} />
                  <div>
                    <p className="font-medium">Приватный профиль</p>
                    <p className="text-sm text-gray-500">Скрыть из рейтинга</p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="space-y-2 pt-4 border-t">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={20} />
                    <span>Приватность и безопасность</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="HelpCircle" size={20} />
                    <span>Помощь и поддержка</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="Info" size={20} />
                    <span>О приложении</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>

                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="LogOut" size={20} className="text-red-600" />
                    <span className="text-red-600">Выйти из аккаунта</span>
                  </div>
                  <Icon name="ChevronRight" size={16} className="text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;