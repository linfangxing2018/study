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
     
* img便签有默认250px的高度，可以导致布局有问题，可以使用background设为背景图片，也可以重新设高度