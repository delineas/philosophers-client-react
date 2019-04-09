import React from 'react';

const Author = ({ philosopher, quote }) => {
  console.log(philosopher);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/23/Nietzsche1882.jpg"
            alt="{ philosopher.name }"
          />
        </figure>
      </div>
      <div className="card-content">
        <p className="title">“{quote}”</p>
        <p className="subtitle">{philosopher.name}</p>
      </div>
    </div>
  );
};

export default Author;
