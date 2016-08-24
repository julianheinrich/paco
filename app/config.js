module.exports = {
  development: {
    baseURL: '',
    ocpu: {
      baseURL: '//localhost:5307/ocpu/library/paco/R',
    },
  },
  production: {
    baseURL: '',
    ocpu: {
      baseURL: 'https://julianheinrich.ocpu.io/paco/R',
    },
  },
  staging: {
    baseURL: '',
    ocpu: {
      baseURL: '../R',
    },
  },
};
