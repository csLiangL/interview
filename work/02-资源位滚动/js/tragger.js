let parent = document.querySelector(".resource-item-wrapper");

parent.addEventListener("click", (e)=>{
  window.open(e.target.getAttribute("data"))
})


const mouseDownHandler = function (e) {
    pos = {
        left: parent.scrollLeft,
        x: e.clientX,
    };

    parent.addEventListener('mousemove', mouseMoveHandler);
    parent.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    parent.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
    parent.removeEventListener('mousemove', mouseMoveHandler);
    parent.removeEventListener('mouseup', mouseUpHandler);
};

parent.addEventListener("mousedown", mouseDownHandler);

// TODO: 点击图片进行拖动后，会触发图片的点击事件，从而产生跳转。(bug)

// TODO: 点击图片进行拖动后，如果在wrapper区域外部松开，则监听不到mouseup事件，则再次拖拽时产生“不点击也会拖拽“的bug。