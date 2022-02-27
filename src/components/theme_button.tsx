import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme_context';

function ThemeButton() {
  const { isLight, theme, toggleTheme } = useContext(ThemeContext);


  return (
			<button
        className={`flex align-center w-8 h-5 bg-purple-600`}
        onClick={() => toggleTheme()}
      >
        <div
          className={`rounded-br-full bg-pink-500 w-20 h-50 flex items-center justify-center ${isLight ? 'mr-auto ml-0' : 'ml-auto mr-0'}`}
        >
          {isLight ? '☀️' : '🌛'}
        </div>
      </button>
  )
}

export default ThemeButton;