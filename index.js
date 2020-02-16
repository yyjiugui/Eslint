/*
    Eslint的使用 和stylelint的使用
	  使用建议: 建议不要全局安装eslint
    1: npm install eslint --save-dev
		2: npx eslint init 初始化eslint配置 生成一个配置文件 .eslintrc.js文件  等同于./node_modules/.bin/eslint --init
		3: 运行 npx eslint xxx.js文件

		安装 eslint  npm install eslint -d
		安装eslint的规则包一般使用standard标准规则包。

		Eslint配置

		默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。
		ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
		process.env 处理环境 es6 commonjs node
		rules: [] 配置eslint校验规则

		babel-eslint的作用:
		有一些babel语法没有被eslint支持，使用 babel-eslint是导出一个解析器可以支持的index.js文件
		总的来说babel-eslint就是将不能被常规linter解析的代码转换为能被常规解析的代码。
		想要eslint处理vue单文件组件，必须要安装一个插件 eslint-plaus-html 并且配置。

		注意: 安装 eslint-config-standard 根据报错提示 还要安装一系列的eslint插件
		使用Vue的cli安装standard有一个包是 @vue-config-standrad 也要安装一系列插件
		*/

// 定义变量必须使用
const a = 10
console.log(a)

// 结尾逗号
const b = { name: 'zs', age: 30 }
console.log(b)

const c = [1, 2, 3]
console.log(c)
// 使用单引号
const d = 'hello world'
console.log(d)
// 结束语句不要使用分号
const e = 100
console.log(e)

// 禁止出现多行空行
const f = 1000

console.log(f)

const g = 'hello world'
console.log(g)
// 使用一个库 cross-env 运行跨平台设置和使用环境变量的脚本 npm install --save-dev cross-env
// 测试eslint 的生产和开发环境开启 debugger和console模式校验
/*
	在npm脚本中使用了它：

{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
*/
// console.log(process.env.NODE_ENV)
