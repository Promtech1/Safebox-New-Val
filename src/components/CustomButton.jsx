import React from 'react';

const CustomButton = ({
  text = 'Click Me',
  bgColor = '',
  textColor = '',
  className = '',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105 active:scale-95 ${bgColor} ${textColor} ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
