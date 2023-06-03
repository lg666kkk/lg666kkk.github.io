/**
 * created by lvfan
 * 2018-09-04
 */

/**
 * @description 获取实时时间，写入 id 为 now-time 的标签中
 */
(function () {
    const divTime = document.getElementById('now-time');

    function getTime() {
        let time = new Date();
        let hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        let minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        let second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
        divTime.innerText = hour + ':' + minute + ':' + second;
    }

    getTime();
    setInterval(function () {
        getTime();
    }, 1000);
}());

/**
 * @description 判断当前页面是否为活动页
 */
(function () {
    // 网页当前状态判断
    let state, visibilityChange, status, doc = document;
    if (typeof document.hidden !== 'undefined') {
        visibilityChange = 'visibilitychange';
        state = 'visibilityState';
    } else if (typeof document.mozHidden !== 'undefined') {
        visibilityChange = 'mozvisibilitychange';
        state = 'mozVisibilityState';
    } else if (typeof document.msHidden !== 'undefined') {
        visibilityChange = 'msvisibilitychange';
        state = 'msVisibilityState';
    } else if (typeof document.webkitHidden !== 'undefined') {
        visibilityChange = 'webkitvisibilitychange';
        state = 'webkitVisibilityState';
    }
    let docText = doc.title;
    // 添加监听器，在title里显示状态变化
    doc.addEventListener(visibilityChange, function () {
        if (doc[state] === 'visible') {
            doc.title = '欢迎回来';
            status = setTimeout(() => {
                doc.title = docText;
            }, 1000);
        } else {
            doc.title = '不想见你,哼哼';
            if (status) {
                clearTimeout(status);
            }
        }
    }, false);
    // 初始化页面状态
    // doc.title = 'lg的宝库';
}());
