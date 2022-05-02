export interface Colors {
  primary: string
  secondary: string
  accent: string
  background: string
  textPrimary: string
  textPrimaryLight: string
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
  textInput: {
    placeholder: string
    text: string
    background: string
    error: string
  }
  loader: {
    background: string
    center: string
    indicator: string
  }
}

export const lightColors: Colors = {
  primary: '#E9DAC1',
  secondary: '#F7ECDE',
  accent: '#54BAB9',
  background: '#F7ECDE',
  textPrimary: '#1a1a1b',
  textPrimaryLight: '#575A5C',
  textSecondary: '#FBF8F1',
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
  textInput: {
    placeholder: '#575A5C',
    text: '#1a1a1b',
    background: '#FBF8F1',
    error: '#B00020',
  },
  loader: {
    background: '#54BAB955',
    center: '#FBF8F1',
    indicator: '#54BAB9',
  },
}
export const darkColors: Colors = {
  primary: '#E9DAC1',
  secondary: '#F7ECDE',
  accent: '#54BAB9',
  background: '#F7ECDE',
  textPrimary: '#1a1a1b',
  textPrimaryLight: '#575A5C',
  textSecondary: '#FBF8F1',
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
  textInput: {
    placeholder: '#575A5C',
    text: '#1a1a1b',
    background: '#FBF8F1',
    error: '#B00020',
  },
  loader: {
    background: '#54BAB99a',
    center: '#F7ECDE',
    indicator: '#54BAB9',
  },
}
