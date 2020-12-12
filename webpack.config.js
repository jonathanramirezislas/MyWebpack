const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports={
    mode:"development",
    entry: './src/index.js',
    output:{
        path:path.join(__dirname,'build'),
        filename:'bundle.js'
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
        ]
    },

    //devtool:'cheap-module-eval-source-map',
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
        })

    ]


    

}
