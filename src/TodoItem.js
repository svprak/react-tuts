import React from 'react';

export default function TodoItem() {
  const styles = {
    display: 'inline',
    marginLeft: 15,
  };

  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p style={styles}>Placeholder text here</p>
    </div>
  );
}
