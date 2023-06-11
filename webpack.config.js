const HtmlWebpackPlugin = require('html-webpack-plugin'); 
// HTML 파일을 생성, 웹팩으로 빌드된 스크립트를 자동주입

// 웹팩을 실행할 때 사용
module.exports = { 
  entry: './src/index.tsx', 
  // 엔트리 포인트 적어줌
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        // 웹팩이 .ts 또는 .tsx 확장자를 가진 파일을 만나면 변환할지 적어줌
        use: 'ts-loader', 
        // ts-loader를 가지고 ts -> js
        exclude: /node_modules/, 
        // node_modules 폴더는 제외(웹팩이 이 폴더의 파일을 처리하려고 하면 성능이 저하됨)
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'], 
    // 웹팩이 파일을 해석할 때, 주어진 확장자를 가진 파일을 찾도록 설정 (import나 require문에서 확장자를 생략)
  },

  output: {
    filename: 'bundle.js', 
    // 웹팩이 생성하는 번들 파일의 이름
    path: __dirname + '/dist', 
    // 번들 파일이 생성되는 위치를 지정합니다. __dirname은 현재 디렉토리의 절대 경로를 가리킵니다.
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // HtmlWebpackPlugin을 플러그인으로 추가
    // 이 플러그인은 src/index.html을 기반으로 HTML 파일을 생성 및 번들링된 파일 주입
  ],

  devServer: {
    static: './dist', 
    // 웹팩 개발 서버가 서비스할 정적 파일의 위치를 지정합니다.
    port: 7777, 
    // 웹팩 개발 서버가 실행될 포트 번호를 지정합니다.
  },
}; 