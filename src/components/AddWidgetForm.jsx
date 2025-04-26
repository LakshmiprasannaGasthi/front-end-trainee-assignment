import React, { useState, useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';

const AddWidgetForm = ({ categoryId }) => {
  const { addWidget } = useContext(WidgetContext);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name && text) {
      addWidget(categoryId, { name, text });
      setName('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-widget-form">
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Widget Text"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
