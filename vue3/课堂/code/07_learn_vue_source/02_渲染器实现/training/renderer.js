const h = (tag, props, children) => {
  // vnode --> javascript对象
  return {
    tag,
    props,
    children
  }
}
const mount = (vnode, container) => {
  // 创建出真实的元素, 并且在vnode上保存el 方便后面的操作
  const el = vnode.el = document.createElement(vnode.tag)
  // 处理props
  if (vnode.props) {
    for (let key in vnode.props) {
      const value = vnode.props[key]
      if (key.startsWith("on")) {  // 是否是事件
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }
  // 处理子元素  字符串，数组
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children
    } else {
      // 数组 多个子元素 递归
      vnode.children.forEach(element => {
        mount(element, el)
      })
    }
  }
  // 将el挂载到container上
  container.appendChild(el)
}

const patch = (n1, n2) => {
  // n1旧 n2新
  // 如果父元素不一样直接替换
  if (n1.tag !== n2.tag) {
    // 获取父元素
    const n1Elparent = n1.el.parentElement
    // 移除旧节点
    n1Elparent.removeChild(n1.el)
    // 重新挂载新节点
    mount(n2, n1Elparent)
  } else {
    // 引用, 修改一个另一个也会改变, n1.el 在n1挂载(mount)时赋值
    const el = n2.el = n1.el 
    // 对比props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    // 把新的props添加到el上
    for (let key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      if (newValue !== oldValue) {
        if (key.startsWith("on")) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }
    // 删除旧的props 移除监听器, 属性
    for (let key in oldProps) {
      if (key.startsWith("on")) {
        el.removeEventListener(key.slice(2).toLowerCase(), oldProps[key])
      } else {
        if (!key in newProps) {
          el.removeAttribute(key)
        }
      }
    }
    // 对比children
    // children 可能是字符串, 数组, 对象(插槽), 字符串跟数组比较常见
    // n1 [v1, v2, v3, v4, v5]
    // n2 [v1, v7, v8]
    
    const oldChildren = n1.children || []
    const newChidlren = n2.children || []
    
    if (typeof newChidlren === 'string') {   // 如果newChidlren是字符串
      if (typeof oldChildren === "string") {
        if (newChidlren !== oldChildren) {
          el.textContent = newChidlren
        }
      } else {
        el.innerHtml = newChidlren
      }
    } else {  // 如果newChidlren是数组
      const oldLength = oldChildren.length
      const newLength = newChidlren.length
      const minLength = Math.min(oldLength, newLength)
      // 先对比相同长度的部分
      for (let i = 0; i <  minLength; i++) {
        patch(oldChildren[i], newChidlren[i])
      }
      // 如果新的比较长, 则mount新增的节点
      if (newLength > oldLength) {
        newChidlren.slice(minLength).forEach(item => {
          mount(item, el)
        })
      }
      // 如果旧的比较长, 则移除多余节点
      if (newLength < oldLength) {
        oldChildren.slice(minLength).forEach(item => {
          el.removeChild(item.el)
        })
      }
    }
  }
}