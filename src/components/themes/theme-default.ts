import { Theme } from './models';

const theme: Theme = {
  padding: {
    sm: 5,
    md: 10,
    lg: 15,
  },

  fontSize: {
    sm: 12,
    md: 14,
    lg: 16,
  },

  toolbar: {
    bgColor: '#aec1ae',
    borderRadius: 5,
  },

  button: {
    borderColor: '#6e8e7f',
    borderRadius: 5,
    borderWidth: 2,
    bgColor: 'white',
    fontColor: '#6e8e7f',
    activeBgColor: '#6e8e7f',
    activeFontColor: 'white',
  },

  table: {
    borderColor: '#6e8e7f',
    borderRadius: 5,
    borderWidth: 2,
    headerBgColor: '#bf7c7a',
    evenRowBgColor: '#aec1ae',
    oddRowBgColor: '#e2eadb',
  },

  paginator: {
    borderColor: '#6e8e7f',
    borderRadius: 5,
    borderWidth: 2,
    bgColor: 'white',
    fontColor: '#6e8e7f',
    activeBgColor: '#6e8e7f',
    activeFontColor: 'white',
  },

  card: {
    borderColor: '#6e8e7f',
    borderRadius: 5,
    borderWidth: 2,
    bgColor: 'white',
  },
};

export { theme };
