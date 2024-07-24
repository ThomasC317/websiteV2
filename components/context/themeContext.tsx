import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface ThemeContextType {
  color: string;
  setColor: (color: string) => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [color, setColor] = useState<string>('white'); // Default color

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export {ThemeProvider, useTheme}