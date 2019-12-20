# 模块
### require
require模块首次加载，会执行该模块，然后导出内容；
require模块曾被加载过，模块的代码不会再次执行，直接导出上次执行后的结果；
require可以接受表达式；

### 第3章. 资源输入输出
context: 资源入口的路径前缀，绝对路径；
entry： 
选择最后一个元素作为实际的入口；
定义多入口，使用对象形式；
传入对象，进行动态获取入口；
publicPath / Path ---截止阅读位置 3.3.2
# webpack-playground
### 第4章. 预处理器
在webpack中使用相对路径进行安装，会在项目node_modules 中创建一个指向实际 force-strict-loader目录的软链接；
之后可以随时修改loader源码，不需要重新安装；
extract-text-webpack-plugin 目前只有beta版本，其他版本不支持webpack4.0.0以上的版本
