// 通过立即执行函数(闭包)来封装 "方法", 以及相关作用域变量。

let Event = (function () {
    let list = {},
        listen,
        trigger,
        remove;
    listen = function (id, fn) {
        if (!list[id]) {
            list[id] = [fn];
        } else {
            list[id].push(fn);
        }
    };
    trigger = function () {
        let key = Array.prototype.shift.call(arguments);
        if (list[key] && list[key].length > 0) {
            list[key].forEach(fn => {
                fn(...arguments);
            });
        }
    };
    remove = function () {
        let key = Array.prototype.shift.call(arguments);
        if (this.list[key] && this.list[key].length > 0) {
            for (let i = this.list[key].length - 1; i >= 0; i--) {
                if (this.list[key][i] === arguments[0]) {
                    this.list[key].splice(i, 1);
                }
            }
        }
    }

    return {
        listen,
        trigger,
        remove
    }
})()

export default Event