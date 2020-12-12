const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

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
                // test: /\.css$/,
                //use:['style-loader', 'css-loader']
                test: /\.scss$/,
                use:['style-loader', 'css-loader','sass-loader']
            }
            
            
        ]
    },

    //devtool:'cheap-module-eval-source-map',
    devServer:{
        port: 3000,
        contentBase:path.join(__dirname, 'build')
    }


    

}

/**
 *module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/,
                type:'asset/resorce'
            },
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            
        ]
    },
    
    plugins:[new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'./index.html')
    })],
}
 */