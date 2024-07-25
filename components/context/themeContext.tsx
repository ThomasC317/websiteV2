import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the context type
interface ThemeContextType {
  color: string;
  setColor: (color: string) => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Set initial color from local storage or default to 'white'
  const [color, setColor] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedColor = localStorage.getItem('themeColor');
      return savedColor ? savedColor : 'white';
    }
    return 'white';
  });

  // Update local storage whenever the color changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeColor', color);
    }
  }, [color]);

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

export { ThemeProvider, useTheme };
