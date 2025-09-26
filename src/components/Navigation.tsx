import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/home', icon: 'Home', label: 'Главная' },
    { path: '/stats', icon: 'BarChart3', label: 'Статистика' },
    { path: '/community', icon: 'Users', label: 'Сообщество' },
    { path: '/profile', icon: 'User', label: 'Профиль' }
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t rounded-t-2xl p-2 shadow-lg grid grid-cols-4 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive 
                ? 'bg-eco-100 text-eco-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Icon name={item.icon} size={20} />
            <span className="text-xs">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;