
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

// let yeomanImage = require('../images/yeoman.png');
//利用自执行函数,讲图片名信息转成图片URL路径信息

imageDatas = (function getImageUrl(imageDataArr) {
  for (var i=0; i<imageDataArr.length;i++){
    var singeImageData = imageDataArr[i];
    singeImageData.imageUrl = require('../images'+singeImageData.fileName);
    imageDataArr[i] = singeImageData;
  }
  return imageDataArr;
})(imageDatas);


  class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      // </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
