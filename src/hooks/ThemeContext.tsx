"use client";
import { Themes } from '@/constants/themes';
import { createContext, useState } from 'react';
import { setCookie } from 'cookies-next';


// The following line will be hydrated by Next.js
export const LightThemeContext = createContext({theme: Themes.DARK, toggleTheme: () => {}});

export const ThemeProvider = ({serverTheme, children}) => {

    const [theme, setTheme] = useState(serverTheme);

    const toggleTheme = () => {
        let updatedTheme;
        switch (theme) {
            case Themes.DARK:
                updatedTheme = Themes.LIGHT;
                break;
            case Themes.LIGHT:
                updatedTheme = Themes.TWILIGHT;
                break;
            case Themes.TWILIGHT:
                updatedTheme = Themes.DARK;
                break;
            default:
                updatedTheme = Themes.DARK;
                break;
        }
        setTheme(updatedTheme);
        setCookie('theme', updatedTheme);
    };

    const providerValue = { theme, toggleTheme };
    return (
        <LightThemeContext.Provider value={providerValue}>
            {children}
        </LightThemeContext.Provider>
    );
};
