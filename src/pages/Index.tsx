import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface EcoTask {
  id: number;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  category: 'water' | 'energy' | 'waste' | 'transport';
}

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [tasks, setTasks] = useState<EcoTask[]>([
    {
      id: 1,
      title: 'Экономия воды',
      description: 'Принять душ вместо ванны',
      points: 10,
      completed: false,
      category: 'water'
    },
    {
      id: 2,
      title: 'Переработка',
      description: 'Сдать макулатуру',
      points: 15,
      completed: true,
      category: 'waste'
    },
    {
      id: 3,
      title: 'Экотранспорт',
      description: 'Поехать на работу на велосипеде',
      points: 20,
      completed: false,
      category: 'transport'
    }
  ]);

  const stats: StatCard[] = [
    {
      title: 'CO₂ сэкономлено',
      value: '2.4 кг',
      change: '+12%',
      icon: 'Leaf',
      color: 'text-eco-600'
    },
    {
      title: 'Вода сэкономлена',
      value: '150 л',
      change: '+8%',
      icon: 'Droplets',
      color: 'text-blue-600'
    },
    {
      title: 'Очки экологии',
      value: '1,248',
      change: '+25',
      icon: 'Trophy',
      color: 'text-yellow-600'
    },
    {
      title: 'Дней подряд',
      value: '12',
      change: '+1',
      icon: 'Calendar',
      color: 'text-purple-600'
    }
  ];

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'water': return 'Droplets';
      case 'energy': return 'Zap';
      case 'waste': return 'Recycle';
      case 'transport': return 'Bike';
      default: return 'Leaf';
    }
  };

  const totalPoints = tasks.filter(task => task.completed).reduce((sum, task) => sum + task.points, 0);
  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = (completedTasks / tasks.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-eco-100">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          {/* Header */}
          <div className="bg-eco-600 text-white p-6 rounded-b-3xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold">EcoLife</h1>
                <p className="text-eco-100">Привет, Анна! 🌱</p>
              </div>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-eco-500 text-white">А</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-eco-100">Дневной прогресс</span>
                <span className="text-sm font-semibold">{completedTasks}/{tasks.length}</span>
              </div>
              <Progress value={progressPercentage} className="h-2 bg-white/20" />
              <p className="text-xs text-eco-100 mt-2">
                Сегодня вы заработали {totalPoints} эко-очков!
              </p>
            </div>
          </div>

          <TabsContent value="home" className="p-6 space-y-6">
            {/* Daily Tasks */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Ежедневные задания</h2>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <Card key={task.id} className="animate-fade-in">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${task.completed ? 'bg-eco-100' : 'bg-gray-100'}`}>
                          <Icon 
                            name={getCategoryIcon(task.category)} 
                            size={20} 
                            className={task.completed ? 'text-eco-600' : 'text-gray-500'} 
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                            {task.title}
                          </h3>
                          <p className="text-sm text-gray-600">{task.description}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={task.completed ? "default" : "secondary"}>
                            +{task.points}
                          </Badge>
                          <Button
                            size="sm"
                            variant={task.completed ? "default" : "outline"}
                            className="mt-2 w-full"
                            onClick={() => toggleTask(task.id)}
                          >
                            <Icon name={task.completed ? "Check" : "Plus"} size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Быстрая статистика</h2>
              <div className="grid grid-cols-2 gap-3">
                {stats.slice(0, 4).map((stat, index) => (
                  <Card key={index} className="animate-scale-in">
                    <CardContent className="p-4 text-center">
                      <Icon name={stat.icon} size={24} className={`${stat.color} mx-auto mb-2`} />
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.title}</p>
                      <p className="text-xs text-eco-600 font-medium">{stat.change}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="p-6 space-y-6">
            <h2 className="text-2xl font-bold">Статистика</h2>
            
            {/* Weekly Progress */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Недельный прогресс
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Экономия CO₂</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Экономия воды</span>
                      <span>72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Переработка</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={20} />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <Icon name="Trophy" size={24} className="text-yellow-600 mx-auto mb-1" />
                    <p className="text-xs font-medium">Эко-герой</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Icon name="Droplets" size={24} className="text-blue-600 mx-auto mb-1" />
                    <p className="text-xs font-medium">Водосбер</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Icon name="Recycle" size={24} className="text-green-600 mx-auto mb-1" />
                    <p className="text-xs font-medium">Эко-сортер</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="p-6 space-y-6">
            <h2 className="text-2xl font-bold">Сообщество</h2>
            
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
                </div>
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
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>М</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Мария сдала 5 кг макулатуры</p>
                      <p className="text-xs text-gray-500">2 часа назад</p>
                    </div>
                    <Icon name="Recycle" size={16} className="text-eco-600" />
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>А</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Алексей проехал 10 км на велосипеде</p>
                      <p className="text-xs text-gray-500">4 часа назад</p>
                    </div>
                    <Icon name="Bike" size={16} className="text-eco-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="p-6 space-y-6">
            <h2 className="text-2xl font-bold">Профиль</h2>
            
            {/* Profile Info */}
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-eco-500 text-white text-xl">А</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Анна Петрова</h3>
                    <p className="text-gray-600">Эко-энтузиаст с 2024 года</p>
                    <Badge className="mt-1">Уровень 5</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-eco-600">1,248</p>
                    <p className="text-sm text-gray-600">Эко-очки</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">45</p>
                    <p className="text-sm text-gray-600">Заданий</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">12</p>
                    <p className="text-sm text-gray-600">Дней подряд</p>
                  </div>
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
                    <span>Уведомления</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={20} />
                    <span>Приватность</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="HelpCircle" size={20} />
                    <span>Помощь</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bottom Navigation */}
          <TabsList className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t rounded-t-2xl p-2 shadow-lg grid grid-cols-4">
            <TabsTrigger value="home" className="flex flex-col items-center gap-1 data-[state=active]:bg-eco-100 data-[state=active]:text-eco-700">
              <Icon name="Home" size={20} />
              <span className="text-xs">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex flex-col items-center gap-1 data-[state=active]:bg-eco-100 data-[state=active]:text-eco-700">
              <Icon name="BarChart3" size={20} />
              <span className="text-xs">Статистика</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex flex-col items-center gap-1 data-[state=active]:bg-eco-100 data-[state=active]:text-eco-700">
              <Icon name="Users" size={20} />
              <span className="text-xs">Сообщество</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col items-center gap-1 data-[state=active]:bg-eco-100 data-[state=active]:text-eco-700">
              <Icon name="User" size={20} />
              <span className="text-xs">Профиль</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;