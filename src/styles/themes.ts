type Theme = {
  mode: 'dark' | 'light';
  appBar: {
    height: string;
  };
  border: {
    full: number;
  };
  zIndex: {
    dialog: number;
    floatingWindow: number;
    appBar: number;
    footer: number;
    modal: number;
    overlay: number;
    notification: number;
    drawer: number;
  };
  shadow: {
    color: string;
  };
  system: Record<string, unknown>;
  color: {
    primary: string;
    secondary: string;
    black: string;
    grey: string;
    greyLight: string;
    white: string;
    red: string;
    accent: string;
  };
  common: {
    circularEdge: string;
  };
};
const theme: Theme = {
  mode: 'light',
  color: {
    primary: '#5568FE',
    secondary: '#FB7173',
    black: '#232149',
    grey: '#F3F4F6',
    red: '#e32b3a',
    accent: '#56538D',
    greyLight: '#F3F4F6',
    white: '#FEFEFE',
  },
  border: {
    full: 999,
  },
  zIndex: {
    appBar: 700,
    footer: 700,
    floatingWindow: 1000,
    modal: 1100,
    dialog: 1100,
    overlay: 1000,
    notification: 1400,
    drawer: 1200,
  },
  common: {
    circularEdge: '9999em',
  },
  shadow: {
    color: 'rgba(0,0,0,.1)',
  },
  system: {},
  appBar: {
    height: '3em',
  },
};
export { theme, Theme };
