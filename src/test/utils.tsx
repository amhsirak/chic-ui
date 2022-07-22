import { ReactNode } from 'react';
import renderer from 'react-test-renderer';

import ThemeProvider from '../components/themeprovider';

// Provides UI Context to tested components
export const render = (node: ReactNode) =>
  renderer.create(<ThemeProvider>{node}</ThemeProvider>).toJSON();
