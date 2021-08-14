/*
*	调用腾讯小程序地图
* lat: 经度
* lon: 纬度
* address: 目的地址名称
*/


// 用户当前经纬度, 可以通过uni-app内置api获取uni.getLocation()

// 注意经纬度传值
export const openWxLocation = (lat, lon, address) => {
	let plugin = requirePlugin('routePlan'),
    key = 'TVWBZ-6CU65-APVIE-QM3YS-3H3Y5-GEBD5',  //使用在腾讯位置服务申请的key
    referer = '预约体检看医生',  //调用插件的app的名称
    endPoint = JSON.stringify({  //终点
        'name': `${address}`,
        'latitude': lon,
        'longitude': lat
    });
	uni.navigateTo({
	    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
	});
}