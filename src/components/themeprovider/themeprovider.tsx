import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from 'config/global.styles';
import { theme } from 'config/themes';

const ThemeProvider: React.FC = ({ children }) => {
    return (
        <StyledThemeProvider theme={theme}>
        <GlobalStyles />
            {children}
        </StyledThemeProvider>
    )
} 

export default ThemeProvider