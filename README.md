# gallery-by-react
## a photo gallery project based on react

基于ReactJS构架的图片画廊应用-仿造慕课网课程编写

因为课程是老版本，和最新版本有很多不同，改动了一些东西，自己也进了不少了坑，多少次有想死的感觉，想放弃，又于心不忍，还好一步一步填完了所有的坑，最终实现了想要达到的效果。

```
git clone https://github.com/wangyongzhi/gallery-by-react
npm i
npm start
```

完事会自动打开 http://localhost:8000/webpack-dev-server/ 可看效果

当然，学一门新技术可能会遇到很多问题，尤其是最新版本和教程已经有很不同之处，这需要有足够的耐心，一步一步去解决它。

## 项目搭建

上面的有点简单粗暴，下面就仔细分析一下项目的具体搭建过程。

首先此项目依赖nodejs，所以要先装node的环境,可去[nodejs官网]([https://nodejs.org/en/](https://nodejs.org/en/))自行下载安装,也可以用nvm,brew等工具，想用什么方法随便你，这里不再赘述，如果这个都不能自己搞定，那基本不用入门了，可以直接放弃了……

首先安装脚手架工具yeoman
`npm install -g yo`
`yo —version` 可查安装版本

接下来去[yeoman官网](http://yeoman.io/)，点Discovering generators，搜索react，找到react-webpack，点进去进入到它的[github介绍主页](https://github.com/react-webpack-generators/generator-react-webpack#readme)（懒得上面步骤的，直接点这个可看，懒得看的，直接用下面命令安装这个generator即可

`npm install -g generator-react-webpack`

由于国外镜像，国内有时候下载慢或者下载不了，可以换成国内淘宝镜像,步骤如下：

``` 
1、npm install -g cnpm
2、cnpm install -g generator-react-webpack
```

装完之后，这里教大家一个查generator版本的命令
`npm ls -g --depth=1 2>/dev/null | grep generator-`
这么长，什么意思呢？

``` 
npm ls -g 列出npm全局安装的所有npm包，因为npm的包会依赖其他的包，所以是树状展现出来的，超级多，比较难以查看所要查询的东西
而--depth=1就是限制树状结构只展示一层
2>/dev/null 这个是什么鬼呢？
尖括号>表示重定向
bash里面1表示标准输出standard output (stdout).
2表示标准错误standard error (stderr).
/dev/null表示空设备文件
所以2>/dev/null 的意思就是如果在执行npm ls -g的过程中有错误消息，把错误消息重定向到空设备文件上，其实就是输出中过滤掉了错误消息
| 表示管道，前面的输出是后面的输入
grep就是检索的意思
```

这么说就明白了吧，你可以都试试，不加的话会是神马情况。

安装完了就是使用了，使用之前呢，为了避免电脑宕机，可以为你自己的程序找到一个安身之所，我推荐选择github，我的地址是 [https://github.com/wangyongzhi](https://github.com/wangyongzhi) ，对github和git不清楚的可以自行搜索相关教程，当然，这个暂时不是必须的。

如果有github的创建一个仓库，用git clone 命令拷到本地来，没有的话自己创建个工程文件夹也行

`mkdir galleryProject && cd galleryProject` 

工程名随便起，尽量有意义比较好。

然后在终端运行

`yo react-webpack`

```
首先问我们
Please choose your application name (galleryProject)
	默认就是自己的工程，直接回车即可
Which style language do you want to use? 
❯ sass 
	这个地方会有几个选项，选sass
Enable postcss? (y/N) 
	这个要选y（yes），以后会解释
```

好了，下面你就可以去吃个饭或者约个会了……因为这个过程超级慢，一般都会卡到这个地方

```
> node-sass@3.8.0 install /Users/wangyongzhi/2016/workspace/gallery-project/node_modules/node-sass
> node scripts/install.js
```

为啥呢，GitHub 在国内访问本来就不稳定，然后还是用 [request](https://github.com/request/request) 去访问，就更慢了。

具体解决方法两种:

```
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install
```

或者在 `~/.npmrc` 里添加下面这行（[参考](https://github.com/sass/node-sass/blob/master/lib/extensions.js#L191)），保存后再 `npm install`
(如果是用的 cnpm，需要添加到 ~/.cnpmrc)

```
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

具体可看这篇文 [https://segmentfault.com/a/1190000005921721](https://segmentfault.com/a/1190000005921721)

现在在你的没有运行完的命令行里面，敲 `ctrl+c` 终止操作之后，运行

```
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install
```

秒下，效果就是不一般

## 目录结构

打开工程，目录结构如下，这个与视频之中有点不一样，没了Gruntfile.js和webpack.dist.config.js，莫方，容我一一道来

![img](https://camo.githubusercontent.com/462e6799f0488b933d625e0e6ad54b4e422af3c9/68747470733a2f2f7374617469632e64696e6774616c6b2e636f6d2f6d656469612f6c414c4f616a33785f63304248637a7a5f3234335f3238352e706e675f363230783130303030713930672e6a7067)

```
cfg: 配置文件
dist: 项目发布所在目录
node_modules: 项目编译所需node组件所在的包
src: 源代码所在目录
test: 测试代码所在目录
.babelrc: 支持ES6(ES2015)的文件
.editorconfig: 用来统一不同的编辑器（IDE）的编码风格,具体可看官网http://editorconfig.org/
.eslintrc: 代码风格检测工具
.yo-rc.json: yeoman的配置文件，用来记录当前项目的一些信息，基本是刚才安装的时候那些选择的东西
karma.conf.js: karma测试框架的配置
package.json: node项目的配置文件，项目依赖的包都在这
server.js: 运行项目所必须的server文件
webpack.config.js: webpack开发环境配置文件，不过基本信息都放到了cfg目录下了，所以课程中老版本纳闷的同学们，不必太在意Gruntfile.js没有生成了
```

## 运行

这时候可以来一发运行了

```
npm start # or
npm run serve
```

自动跳到 http://localhost:8000/webpack-dev-server/ 成功

好了，环境已经搭好，下面就是具体的代码开发了。

开发的入口文件是src下的index.html和index.js，查看其中就可以发现./components/Main.js才是真正的主入口文件。

代码就不在这里写了，可以查看[我github上本项目](https://github.com/wangyongzhi/gallery-by-react)的代码，拷贝下来可以直接使用，最好是自己参考着写。

## 注意事项

- 刚开始的时候把post-css选为yes,因为课程中用到的autoprefixer-loader is deprecated，具体可看

  [https://github.com/passy/autoprefixer-loader](https://github.com/passy/autoprefixer-loader)

- .eslintrc文件里面可以加一些代码检查：

  比如我加了强制分号结尾

  ```
  "semi": [2, "always"],//语句强制分号结尾
  ```

  具体可查看[eslint](http://eslint.org/)，我发现了一篇文章也不错[01-Eslint静态代码检查](http://www.jianshu.com/p/1682b91756b1)

- 调试react页面的时候可以选择React Developer Tools，可自行谷歌Chrome Web Store安装，可能需要翻墙的技能，没有也没关系。

## 其他要注意的地方

对前端调试不太熟练，一些简单的错误都会找上半天

```
//少了个斜杠
singeImageData.imageUrl = require('../images/'+singeImageData.fileName);
```

```
//因为' is-inverse'没加空格
imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';
```

切不可大意，不过遇到问题，慢慢解决就好，代码不会犯错，只有人会犯错。

## 最后
materliu是个非常好的带有文艺气息的高水平的程序员，已经路转粉了。

还有如果有什么地方有疑问或者我写的不对的地方，可以提出来，共同探讨，我会及时更新。
