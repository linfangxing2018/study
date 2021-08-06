# uni-app 技术文档 
挂号小程序组贡献


## 组件使用中的坑
* 使用web-view打开外部链接，如果实在当前页面动态获取到url在进行打开的话，首先使用v-if判断url存不存在，要不页面会卡住,使用这个不可以通过左上角按钮返回
	<web-view v-if="url" :webview-styles="webviewStyles" :src="url"></web-view>
  最好的话是使用，uni.navgateTo()
    link =`https://weixin.91160.com/h5/shop/shop/serviceIndex.html?top_catalogue_id=${arr[0]}&first_id=${arr[1]}&project_id=${program.id}&depth=1&cid=100012084`
	uni.navigateTo({ url: `/page/webview/index?url=${encodeURIComponent(JSON.stringify(link))}` });
  比平时使用这个api多了   /page/webview/index?url=

* 