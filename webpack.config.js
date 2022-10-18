const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

    mode: 'development',

    output: {
        clean: true
    },
    
    module:{
        rules: [
            // importa un archivo html y lo carga en la carpeta de distribución
            {
                test: /\.html$/,    //busca los archivos con extension html
                loader: 'html-loader', // llama al html-loader que ya cargamos
                options: {
                    sources: false,
                    minimize: false
                },
            },
            // regla para importar archivos css como si fuera un archivo js
            {
                test:/\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader','css-loader']
            },
            // regla para cargar archivos css y coloarlo en la carpeta de distribucion
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],   
            },
            // regla para cargar archivos estaticos
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },            
        ]
    },

    optimization: {},
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi Webpack app',
            template:'./src/index.html', // el archivo del cual quiero q se base
            filename: './index.html', // coloca el nombre al archivo html
            inject: 'body'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css', // el hash ayuda a que algun cambio tambien lo obtenga el cliente
            ignoreOrder: false,
        }),

        new CopyPlugin({
            patterns: [
              { from: 'src/assets', to: 'assets/' },
             
            ],
          }),
    ]

}













