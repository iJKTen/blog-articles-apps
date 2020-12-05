const path = require('path');
const MergeIntoSingle = require('webpack-merge-and-include-globally');

module.exports = {
  entry: './src/one.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MergeIntoSingle({
      files: [{
        src: ['src/style.css', 'src/style2.css'],
        dest: 'bundle.css',
      }]
    })
  ]
};