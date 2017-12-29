exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://www.jetblue.com',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/*.feature'
  ],
  cucumberOpts: {
    require: 'features/steps/*.steps.js',
    format: 'pretty'
  }
}
