import React from 'react';
import { useTheme } from '../context/themeContext';

// Define the type for button click handler
// type ColorPickerProps = {
//   onColorChange: (color: string) => void;
// };

// Functional React component
const ColorPicker: React.FC = () => {
  // Handler for button click
//   const handleColorChange = (color: string) => {
//     onColorChange(color);
//   };

  const { color,setColor } = useTheme();

  return (
    <div className={`flex gap-5 w-[112px] items-center bg-${color}-50 border rounded-3xl p-1.5`}>
      <div className="relative w-full h-7">
        <button
          id="red"
          title="Red Color"
          className="size-7 p-0.5 top-0 absolute"
          style={{ left: '0px', right: 'unset' }}
          type="button"
          onClick={() => setColor('coral-red')}
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-coral-red-400 rounded-3xl"
          >
            <title>Red</title>
            <path d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"></path>
          </svg>
        </button>
        <button
          id="yellow"
          title="Yellow Color"
          className="size-7 p-0.5 top-0 absolute"
          style={{ left: '16px', right: 'unset' }}
          type="button"
          onClick={() => setColor('gorse')}
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-gorse-400 rounded-3xl"
          >
            <title>Yellow</title>
            <path d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"></path>
          </svg>
        </button>
        <button
          id="blue"
          title="Blue Color"
          className="size-7 p-0.5 top-0 absolute"
          style={{ left: '32px', right: 'unset' }}
          type="button"
          onClick={() => setColor('azure-radiance')}
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-azure-radiance-400 rounded-3xl"
          >
            <title>Blue</title>
            <path d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"></path>
          </svg>
        </button>
        <button
          id="light"
          title="Light Color"
          className="size-7 p-0.5 top-0 absolute"
          style={{ left: 'unset', right: '0px' }}
          type="button"
          onClick={() => setColor('white')}
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-foreground stroke-foreground"
          >
            <title>Light</title>
            <path d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
