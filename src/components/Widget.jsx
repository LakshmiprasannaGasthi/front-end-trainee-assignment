import React, { useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';
import { FaTimes } from 'react-icons/fa';

const Widget = ({ categoryId, widget }) => {
  const { removeWidget } = useContext(WidgetContext);

  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={() => removeWidget(categoryId, widget.id)}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Widget;
