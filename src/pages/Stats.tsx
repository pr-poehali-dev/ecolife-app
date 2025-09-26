import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Stats = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-eco-100">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {/* Header */}
        <div className="bg-eco-600 text-white p-6 rounded-b-3xl">
          <h1 className="text-2xl font-bold">Статистика</h1>
          <p className="text-eco-100">Ваш экологический прогресс</p>
        </div>

        <div className="p-6 space-y-6 pb-32">
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
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Экотранспорт</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Summary */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                Итоги месяца
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-eco-50 rounded-lg">
                  <Icon name="Leaf" size={32} className="text-eco-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-eco-600">42.8 кг</p>
                  <p className="text-sm text-gray-600">CO₂ сэкономлено</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Icon name="Droplets" size={32} className="text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">1,240 л</p>
                  <p className="text-sm text-gray-600">Воды сэкономлено</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Icon name="Recycle" size={32} className="text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-600">125 кг</p>
                  <p className="text-sm text-gray-600">Переработано</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Icon name="Bike" size={32} className="text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-600">89 км</p>
                  <p className="text-sm text-gray-600">На эко-транспорте</p>
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
                  <p className="text-xs text-gray-500">Уровень 5</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Icon name="Droplets" size={24} className="text-blue-600 mx-auto mb-1" />
                  <p className="text-xs font-medium">Водосбер</p>
                  <p className="text-xs text-gray-500">30 дней</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Icon name="Recycle" size={24} className="text-green-600 mx-auto mb-1" />
                  <p className="text-xs font-medium">Эко-сортер</p>
                  <p className="text-xs text-gray-500">100 кг</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <Icon name="Bike" size={24} className="text-purple-600 mx-auto mb-1" />
                  <p className="text-xs font-medium">Велосипедист</p>
                  <p className="text-xs text-gray-500">50 км</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <Icon name="Zap" size={24} className="text-orange-600 mx-auto mb-1" />
                  <p className="text-xs font-medium">Энергосбер</p>
                  <p className="text-xs text-gray-500">20%</p>
                </div>
                <div className="text-center p-3 bg-pink-50 rounded-lg">
                  <Icon name="Heart" size={24} className="text-pink-600 mx-auto mb-1" />
                  <p className="text-xs font-medium">Эко-активист</p>
                  <p className="text-xs text-gray-500">60 дней</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" size={20} />
                Цели на месяц
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Сэкономить 50 кг CO₂</span>
                  <span className="text-sm text-gray-600">42.8/50 кг</span>
                </div>
                <Progress value={86} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">1500 л воды</span>
                  <span className="text-sm text-gray-600">1,240/1,500 л</span>
                </div>
                <Progress value={83} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">100 км на велосипеде</span>
                  <span className="text-sm text-gray-600">89/100 км</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Stats;