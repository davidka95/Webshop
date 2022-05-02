export interface Colors {
  primary: string
  secondary: string
  accent: string
  background: string
  textPrimary: string
  textSecondary: string
  navBar: {
    background: string
  }
  tabBar: {
    background: string
    active: string
    inactive: string
  }
  card: {
    background: string
    shadow: string
  }
}

export const lightColors: Colors = {
  primary: '#E9DAC1',
  secondary: '#F7ECDE',
  accent: '#54BAB9',
  background: '#F7ECDE',
  textPrimary: '#1a1a1b',
  textSecondary: '#575A5C',
  navBar: {
    background: '#FBF8F1',
  },
  tabBar: {
    background: '#FBF8F1',
    active: '#54BAB9',
    inactive: '#54BAB99a',
  },
  card: {
    background: '#FBF8F1',
    shadow: '#45536512',
  },
}
export const darkColors: Colors = {
  primary: '#E9DAC1',
  secondary: '#F7ECDE',
  accent: '#54BAB9',
  background: '#F7ECDE',
  textPrimary: '#1a1a1b',
  textSecondary: '##878A8C',
  navBar: {
    background: '#FBF8F1',
  },
  tabBar: {
    background: '#FBF8F1',
    active: '#54BAB9',
    inactive: '#54BAB99a',
  },
  card: {
    background: '#FBF8F1',
    shadow: '#45536512',
  },
}
