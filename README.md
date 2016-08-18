# gallery-by-react
## a photo gallery project based on react

基于ReactJS构架的图片画廊应用-仿造慕课网课程编写

因为课程是老版本，和最新版本有很多不同，改动了一些东西，自己也进了不少了坑，多少次有想死的感觉，想放弃，又于心不忍，还好一步一步填完了所有的坑，最终实现了想要达到的效果

```
git clone https://github.com/wangyongzhi/gallery-by-react
npm i
npm start
```

完事会自动打开http://localhost:8000/webpack-dev-server/可看效果

如果你想先睹为快，也可通过 http://zhige.me/gallery-by-react/ 查看效果

当然，学一门新技术可能会遇到很多问题，尤其是最新版本和教程已经有很不同之处，这需要有足够的耐心，一步一步去解决它。

<!--more-->

## 项目搭建

尤其是刚开始项目搭建的时候就会遇到很多问题，比如：

`yo react-webapack projectName`之后不会出现很教程里面类似的目录，这时候，不要方，试想一下，版本的迭代更新之后，肯定是向着越来越简单的方向走的，比如没有Gruntfile.js，没有关系，很多都已经迁移到webpack.config.js和cfg/defaults.js下了

还有一点是刚开始的时候把post-css选为yes,因为后面用到的autoprefixer-loader is deprecated，具体可看

 https://github.com/passy/autoprefixer-loader

## 命令

启动命令改了：`npm start`

build命令也改了：`npm run dist`

可参考官网

https://github.com/react-webpack-generators/generator-react-webpack

`npm ls -g --depth=1 2>/dev/null | grep generator- `

这个命令运行之后 可查看generator的各个版本

## .eslintrc文件

.eslintrc文件里面可以加一些代码检查：

比如我加了强制分号结尾

```
"semi": [2, "always"],//语句强制分号结尾
```

具体可查看[eslint](http://eslint.org/)，我发现了一篇文章也不错[01-Eslint静态代码检查](http://www.jianshu.com/p/1682b91756b1)

## css get到的

scrollWidth：对象的实际内容的宽度，不包边线宽度，会随对象中内容超过可视区后而变大。 

clientWidth：对象内容的可视区的宽度，不包滚动条等边线，会随对象显示大小的变化而改变。 

offsetWidth：对象整体的实际宽度，包滚动条等边线，会随对象显示大小的变化而改变。

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

切不可大意，不过遇到问题，慢慢解决就好，代码不会犯错，只有人会犯错

## 最后

[materliu](https://github.com/materliu)是个非常好的带有文艺气息的高水平的程序员，已经路转粉了。