# uni-app 技术文档 
挂号小程序组贡献


## 组件使用中的坑
* 使用web-view打开外部链接，如果实在当前页面动态获取到url在进行打开的话，首先使用v-if判断url存不存在，要不页面会卡住,使用这个不可以通过左上角按钮返回
  
        <web-view v-if="url" :webview-styles="webviewStyles" :src="url"></web-view>

    最好的话是使用，uni.navgateTo()

        link =`https://weixin.91160.com/h5/shop/shop/serviceIndex.html?top_catalogue_id=${arr[0]}`
        uni.navigateTo({   
            url: `/page/webview/index?url=${encodeURIComponent(JSON.stringify(link))}` 
        });

  比平时使用这个api多了   /page/webview/index?url=

* u-field组件
    如果不设置type=“textarea”的话，在ios下，清空图标有问题

* vue-qrcode插件不支持，可以使用uqrcode插件，  [插件文档地址](https://ext.dcloud.net.cn/plugin?id=1287)  
  
        注意： 使用uqrcode插件的时候，画布尺寸大小，size请与 <canvas/> 所设 width ， height 保持一致（默认：354），
        size的单位为px，如果width，height使用rpx，记的乘以2
     
* img便签有默认250px的高度，可以导致布局有问题，可以使用background设为背景图片，也可以重新设高度, 还可以在image标签中加上属性mode=” widthFix”,就可以了。

* 不是图标的i标签要换成span标签 

* 页面重新编译vuex中的数据也会重新刷新，刷新的话，vuex里面的数据如果没有触发重新保存就会丢失，也可以同时利用缓存保存一份

* 微信 小程序右上角的胶囊按钮是去不掉的

* v-html渲染出a标签，但是a标签在uni-app里面不可以点击，可以使用u-parse来弄，但是也只是能复制链接到外部打开
  
* 要在mounted中才能拿到路由参数，created拿不到

* 样式穿透使用/deep/ ，使用>>> 不起效

* 使用uni-app内置的调用地图api有点问题，uni.openLocation(),进入的时候，苹果系统没有自动定位到自己当前的位置，需要手动点击那个定位的圈圈才可以定位到自己位置，可以使用腾讯地图

* uni-app拿不到元素的类名

* uni-app不使用cookie



## 页面跳转

  一般进行页面跳转使用的是uni.navgateTo(),但是使用这个页面跳转路径有层级限制(10个)，不能无限制跳转新页面，到达一定的数量，页面出现卡顿以及无法点击这些bug。所以对于一些没有必要返回上一层的页面，可以使用uni.redirectTo(),这个
  点击返回会回到上上个页面。有时候必须返回上一个页面，但是跳转的层级太多，可以利用uni.navigateBack来自定义导航栏的左上角的返回图标。 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 和navigateBack方法则不会。 


## onShow

  * 生命周期里面的onShow, 当 uni-app 启动，或从后台进入前台显示,  应用生命周期仅可在App.vue中监听，在其它页面监听无效。
  
  * 页面生命周期里面的的onShow，监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面。有时候你使用mounted的时候，只有在页面进来的时候触发一次，返回的时候不可以触发，这个时候可以使用onShow

 

    
