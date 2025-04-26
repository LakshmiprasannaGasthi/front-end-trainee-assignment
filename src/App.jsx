import React, { useContext } from 'react';
import { WidgetContext } from './context/WidgetContext';
import CategoryList from './components/CategoryList';

function App() {
  const { categories, setSearchTerm } = useContext(WidgetContext);

  return (
    <div>
      <h1>Dynamic Dashboard</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Widgets..."
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {categories.map(cat => (
        <CategoryList key={cat.id} category={cat} />
      ))}
    </div>
  );
}

export default App;
