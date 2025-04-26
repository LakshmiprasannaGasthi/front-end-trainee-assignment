import React, { createContext, useState } from 'react';
import initialData from '../data/widgetsData.json';

export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialData.categories);
  const [searchTerm, setSearchTerm] = useState('');

  const addWidget = (categoryId, widget) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? { ...cat, widgets: [...cat.widgets, { id: Date.now(), ...widget }] }
          : cat
      )
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? { ...cat, widgets: cat.widgets.filter(w => w.id !== widgetId) }
          : cat
      )
    );
  };

  const filteredCategories = categories.map(cat => ({
    ...cat,
    widgets: cat.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <WidgetContext.Provider
      value={{ categories: filteredCategories, addWidget, removeWidget, setSearchTerm }}
    >
      {children}
    </WidgetContext.Provider>
  );
};
