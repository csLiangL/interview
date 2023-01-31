let parent = document.querySelector(".resource-item-wrapper");
let dx = 0;
let flag = false;

Array.prototype.forEach.call(parent.children, itemDOM => {
    itemDOM.addEventListener("click", (e) => {
        console.log("click")
        !dx && window.open(e.target.getAttribute("data"))
    })
});


const mouseDownHandler = function (e) {
    flag = true;
    pos = {
        left: parent.scrollLeft,
        x: e.clientX,
    };

    parent.addEventListener('mousemove', mouseMoveHandler);
    parent.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    if (!flag) parent.removeEventListener('mousemove', mouseMoveHandler);
    dx = e.clientX - pos.x;
    parent.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function (e) {
    setTimeout(() => {
        dx = 0;
    });
    parent.removeEventListener('mousemove', mouseMoveHandler);
    parent.removeEventListener('mouseup', mouseUpHandler);
}

parent.addEventListener("mousedown", mouseDownHandler);

// TODO: 点击图片进行拖动后，会触发图片的点击事件，从而产生跳转。(bug)

// TODO: 点击图片进行拖动后，如果在wrapper区域外部松开，则监听不到mouseup事件，则再次拖拽时产生“不点击也会拖拽“的bug。