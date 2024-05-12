"use client";
import { createContext, useContext, useState } from 'react';

export enum Themes {
    LIGHT = 'light',
    TWILIGHT = 'twilight',
    DARK = 'dark',
}

const LightThemeContext = createContext({ theme: Themes.DARK, toggleTheme: (): void => { } });

export const useTheme = () => useContext(LightThemeContext);

export const  ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(Themes.DARK);

    const toggleTheme = () => {
        switch (theme) {
            case Themes.DARK:
                setTheme(Themes.LIGHT);
                break;
            case Themes.LIGHT:
                setTheme(Themes.TWILIGHT);
                break;
            case Themes.TWILIGHT:
                setTheme(Themes.DARK);
                break;
            default:
                setTheme(Themes.DARK);
                break;
        }
    };

    const providerValue = { theme, toggleTheme };
    return (
        <LightThemeContext.Provider value={providerValue}>
            {children}
        </LightThemeContext.Provider>
    );
};
