const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path=require('path');
const CSSExtract=new ExtractTextPlugin('styles.css')
module.exports={
  entry: './src/app.js',
  output: {
    path:path.join(__dirname,'public'),
    filename:'bundle.js'
  },
  module:{
    rules:[{
      loader:'babel-loader',
      test:/\.js$/,
      exclude:/node_modules/
    },{
      test: /\.s?css$/,
      use:CSSExtract.extract({
        use: [ 'css-loader','sass-loader' ]
      })
      
    }
  ]
  },
  plugins:[
    CSSExtract
  ],
  devtool:'source-map',
  devServer:{
    contentBase:path.join(__dirname,'public'),
    historyApiFallback:true
  }
  
};
