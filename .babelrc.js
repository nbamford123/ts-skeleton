const isProduction = String(process.env.NODE_ENV) === 'production';
const isTest = String(process.env.NODE_ENV) === 'test';

modules.exports = {
  presets: [['@babel/preset-env', {modules: isTest ? 'commonjs': false}], '@babel/preset-react', '@babel/preset-typescript']
}