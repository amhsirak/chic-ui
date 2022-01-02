import React from 'react';
import ReactDOM from 'react-dom';
import Toast, { ToastProps } from './toast';
import { themeType } from 'config/themes';

interface ToastOptions {
  id?: string;
  title: string;
  type?: themeType;
  message?: string;
  duration?: number;
  icon?: React.ElementType;
}

export class ToastManager {
  private containerRef: HTMLDivElement;
  private toasts: ToastProps[] = [];

  constructor() {
    const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
    const toastContainer = document.createElement('div') as HTMLDivElement;
    toastContainer.id = 'main-toast-container';
    toastContainer.style.position = 'fixed';
    toastContainer.style.top = '10px';
    toastContainer.style.right = '10px';
    toastContainer.style.zIndex = '1000';
    body.insertAdjacentElement('beforeend', toastContainer);
    this.containerRef = toastContainer;
  }

  public open(options: ToastOptions): void {
    const toastId = Math.random().toString(36).substring(2, 9);
    const toast: ToastProps = {
      id: toastId,
      // if id is passed within options, it will overwrite the auto-generated one
      ...options,
      close: () => this.close(options.id ?? toastId)
    };

    this.toasts = [toast, ...this.toasts];
    this.render();
  }

  public close(id: string): void {
    this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id);
    this.render();
  }

  private render(): void {
    const toastsList = this.toasts.map((toastProps: ToastProps) => (
      <Toast key={toastProps.id} {...toastProps} />
    ));
    ReactDOM.render(toastsList, this.containerRef);
  }
}

export const toast = new ToastManager();
