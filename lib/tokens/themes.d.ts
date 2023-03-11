export type themeType = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light';
export interface ThemeValues {
    bgColor: string;
    hover: string;
    color: string;
}
export type Theme = Record<themeType, ThemeValues>;
export declare const theme: Theme;
//# sourceMappingURL=themes.d.ts.map