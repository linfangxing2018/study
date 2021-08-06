## 尽量减少代码重复
* 代码可维护性的最大要素是尽量减少改动时要编辑的地方
* 当某些值相互依赖时，应该把他们的相互关系用代码表达出来

    font-size：1em;
    line-height: 1.5;

* 有时候，代码易维护和代码量少不可兼得

    border-width: 10px 10px 10px 0;  // 日后要改东边框的宽度，要改动3个地方

    border-width: 10px;     // 这样改动起来方便一点
    border-left-width: 0

*  currentColor
*  inherit 继承


## 相信你的眼睛，而不是数字

## 关于响应式网页设计

* 每个媒体查询都会增加成本,媒体查询的断点不应该由具体的设备来决定，而应该根据设计自身来决定。
* 使用百分比长度来取代固定长度。如果实在做不到这一点，也应该尝试使用与视口相关的单位（vw、vh、vmin 和 vmax），它们的值解析为视口宽度或高度的百分比
* 当你需要在较大分辨率下得到固定宽度时，使用 max-width 而不是
* 不要忘记为替换元素（比如 img、object、video、iframe 等）设置一个 max-width，值为 100%width，因为它可以适应较小的分辨率，而无需使用媒体查询
* 假如背景图片需要完整地铺满一个容器，不管容器的尺寸如何变化，background-size: cover 这个属性都可以做到。但是，我们也要时刻牢记——带宽并不是无限的，因此在移动网页中通过 CSS 把一张大图缩小显示往往是不太明智的
* 当图片（或其他元素）以行列式进行布局时，让视口的宽度来决定列的数量。弹性盒布局（即 Flexbox）或者 display: inline-block加上常规的文本折行行为，都可以实现这一点。
* 在 使 用 多 列 文 本 时， 指 定 column-width（ 列 宽 ） 而 不 是 指 定column-count（列数），这样它就可以在较小的屏幕上自动显示为单列布局。

### 尽最大努力实现弹性可伸缩的布局，并在媒体查询的各个断点区间内指定相应的尺寸。


## 合理使用简写

    background: rebeccapurple;
    background-color: rebeccapurple;

* 合理使用简写是一种良好的防卫性编码方式，可以抵御未来的风险
* 展开式属性与简写属性的配合使用也是非常有用的

    <!-- 使用多张背景图片 -->
    background: url(tr.png) no-repeat top right / 2em 2em,
    url(br.png) no-repeat bottom right / 2em 2em,
    url(bl.png) no-repeat bottom left / 2em 2em;

    background: url(tr.png) top right,
    url(br.png) bottom right,
    url(bl.png) bottom left;
    background-size: 2em 2em;
    background-repeat: no-repeat;