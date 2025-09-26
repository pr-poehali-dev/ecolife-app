import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

const Home = () => {
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

        <div className="p-6 space-y-6 pb-32">
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
        </div>
      </div>
    </div>
  );
};

export default Home;