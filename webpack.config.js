const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const Dotenv=require('dotenv-webpack');



module.exports={
    mode:"development",
    entry: ['@babel/polyfill','./src/index.js'],
    output:{
        path:path.join(__dirname,'build'),
        filename:'bundle.js'
    },
    devtool: "cheap-eval-source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test:/\.(png|jpg|jpeg|svg|gif)$/i,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'images/',
                        useRelativePath:true
                    }
                }
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                      },
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      webp: {
                        quality: 75
                      }
                    }
                  },
                ],
              }

          
        ]
    },

    devServer:{
        port: 3000,
        contentBase:path.join(__dirname, 'build')
    },


    plugins:[
        new HtmlWebpackPlugin({
          template:'./src/index.html',
          minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
          }
        }),
        new MiniCssExtractPlugin({
            filename:'styles.css'
        }),
        new Dotenv()
      
    ]


}
