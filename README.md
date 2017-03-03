# react-webpack
+ npm init 创建package.json文件
+ 安装所需要的包
+ dependencies 与devDependencies dependencies是生产环境 devDependencies则是开发环境
+ npm install  1：--save //安装到生产环境中;2: -D ＝= --save-dev//安装到开发环境中
+ 新建app文件夹 它下面主要是components组件和入口文件index.js;新建build文件夹，它主要是打包后的文件，build.js是打包输出的文件，index.html;node_modules是安装的包
+ 新建webpack.config.js//编写配置文件
+ box-sizing:border-box  比如. 如果 .box {width: 350px}; 而且 {border: 10px solid black;} 那么在浏览器中的渲染的实际宽度将是370px; 尺寸计算公式：width = 内容的宽度，height = 内容的高度。宽度和高度都不包含内容的边框（border）和内边距（padding）
+ box-sizing:content-box;  比如  .box {width: 350px; border: 10px solid black;} 浏览器渲染出的宽度将是350px. 如果计算后的最内部的内容宽度为负值，都会被计算成0，内容还在，所以不可能通过border-box来隐藏元素。尺寸计算公式：width = border + padding + 内容的宽度，height = border + padding + 内容的高度 
