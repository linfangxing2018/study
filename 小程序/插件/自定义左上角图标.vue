<template>
	<div class="custom">
		<u-sticky offset-top="0">
			<div
				class="nav" 
				@click="handleBack"
				:style="{height: navHeight + 'px', paddingTop: statusBarHeight + 'px'}"
			>
				<div class="fs15 tc h_top">
					<div 
						class="left_icon" 
						v-if="is_show"
						:class="{left_icon2: show_back || show_home}"
					>
						<span class="back" v-if="back" @click.stop="handleBack"></span>
						<span class="line" v-if="back && home">|</span>
						<span class="home" v-if="home" @click.stop="handleHome"></span>
					</div>
					<span class="tit_style">{{ title }}</span>
				</div>
			</div>
		</u-sticky>
	</div>
</template>
<script>
	/*
		home: Boolean 返回首页按钮
		back: Boolean 返回上一级按钮
		以上两个按钮 根据需要进行配置
	*/
	export default {
		props: {
			title: {
				type: String,
				default: '欢迎'
			},
			back: {
				type: Boolean,
				default: false
			},
			home: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				statusBarHeight: '',
				navHeight: '',
				pad_top: '',
			}
		},
		computed: {
			is_show() {
				return this.back || this.home;
			},
			show_back() {
				return this.back && !this.home
			},
			show_home() {
				return !this.back && this.home
			}
		},
		methods: {
			handleBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleHome() {
				uni.reLaunch({
					url: '/page/index/index'
				})
			}
		},
		mounted() {
			// #ifdef MP-WEIXIN
				uni.getSystemInfo({
					success: (res) => {
						const menuButton = uni.getMenuButtonBoundingClientRect()  // 胶囊
						const navBarPadding = (menuButton.top - res.statusBarHeight) *2;
						this.statusBarHeight = menuButton.top;
						const { top } = menuButton;
						// 24 是非刘海屏    不同苹果手机样式兼容
						if(top == 24 || top == 28) {
							this.navHeight = menuButton.height * 2;
						} else {
							this.navHeight = menuButton.height * 2.5;
						}
						if (
							res.model.indexOf('iPhone X') != -1 || 
							res.model.indexOf("iPhone XR") != -1  || 
							res.model.indexOf("iPhone XS Max") != -1 ||
							res.model.indexOf('iPhone 11' ) > -1 ||
							res.model.indexOf('iPhone 12') > -1
						) {
							this.navHeight += 10;
						}
						let num = 0;
						
						// console.log('输出高度=================================')
						// console.log(top)
						const offsetTop = this.navHeight * 2;
						
						if (top == 24 || top == 28) {
								num = offsetTop;
						} else if(top == 52) {
								num = offsetTop - 16;
						} else if(top == 54) {
								num = offsetTop - 14;
						} else if(top == 26) {
								num = offsetTop - 14;
						} else {
								num = offsetTop - 8;
						}
						this.$emit('top', num)
					}
				})			
			// #endif
		},
	}
</script>
<style lang="scss" scoped>
	.custom {
		background-color: #D0F4F4;
	}
	.nav {
		width: 100%;
		background-color: #D0F4F4;
		color: #000000;
		/* #ifdef H5 */
		height: 86rpx;
		/* #endif */
		.h_top {
			width: 100%;
			display: flex;
			align-items: baseline;
			justify-content: center;
			text-align: center;
			background-color: #D0F4F4;
			position: relative;
		}
		.left_icon {
			display: flex;
			justify-content: space-between;
			align-self: center;
			width: 87px;
			height: 32px;
			background: rgba(255,255,255,0.6);
			border-radius: 90rpx;
			align-items: center;
			position: absolute;
			left: 14rpx;
			top: 0;
			border: 1px solid #EAEAEA;
			.home {
				margin-right: 20rpx;
			}
			.back {
				margin-left: 22rpx;
			}
		}
		.left_icon2 {
			display: flex;
			justify-content: center;
			align-self: center;
			width: 87px;
			height: 32px;
			background: rgba(255,255,255,0.6);
			border: 1px solid #EAEAEA;
			border-radius: 90rpx;
			align-items: center;
			position: absolute;
			left: 14rpx;
			top: 0;
			.home {
				margin-right: 0;
			}
			.back {
				margin-left: 0;
			}
		}
		.back {
			display: inline-block;
			width: 48rpx;
			height: 48rpx;
			background: url('@/static/image/back.png')no-repeat;
			background-size: 100%;
			background-position: center;
		}
		.home {
			display: inline-block;
			width: 48rpx;
			height: 48rpx;
			background: url('@/static/image/home.png')no-repeat;
			background-size: 100%;
			background-position: center;
		}
		.line {
			display: inline-block;
			border: none;
			width: 2rpx;
			height: 42rpx;
			color: #ccc;
			padding-left: 4rpx;
			padding-right: 8rpx;
		}
	}
	.tit_style {
		font-size: 34rpx;
		color: #000;
		font-weight: 600;
	}
</style>