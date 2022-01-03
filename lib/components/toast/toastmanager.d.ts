import React from 'react';
import { themeType } from 'config/themes';
interface ToastOptions {
    id?: string;
    title: string;
    type?: themeType;
    message?: string;
    duration?: number;
    icon?: React.ElementType;
}
export declare class ToastManager {
    private containerRef;
    private toasts;
    constructor();
    open(options: ToastOptions): void;
    close(id: string): void;
    private render;
}
export declare const toast: ToastManager;
export {};
//# sourceMappingURL=toastmanager.d.ts.map