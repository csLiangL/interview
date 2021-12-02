/**
 *  - Webpack能处理js/json资源，不能处理css和img资源。
 *  - production模式比development模式多了 压缩代码。 
 * 
 */
import "./index.css"
import "./title.less"

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));