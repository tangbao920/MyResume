
FastClick.attach(document.body);

//->REM
~function () {
    var desW = 375,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW,
        oMain = document.querySelector('.main');
    if (winW > desW) {
        oMain.style.margin = '0 auto';
        oMain.style.width = desW + 'px';
        return;
    }
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}();
new Swiper('.swiper-container', {
    direction: 'horizontal',//垂直方向
    pagination : '.swiper-pagination',
    paginationType : 'progress',
    loop: true,
    onSlideChangeEnd: function (swiper) {
        //swiper.slides:获取当前一共有多少个活动块(包含LOOP模式先前后多加的两个)
        //swiper.activeIndex:当前展示这个区域的索引
        var slideAry = swiper.slides,
            curIn = swiper.activeIndex,
            total = slideAry.length;

        //->计算ID是PAGE?
        var targetId = 'page';
        switch (curIn) {
            case 0:
                targetId += total - 2;
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIn;
        }

        //->给当前的活动快设置ID即可,还要把其余的移除
        [].forEach.call(slideAry, function (item, index) {
            if (curIn === index) {
                item.id = targetId;
                return;
            }
            item.id = null;
        });
    }
});
~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click', function () {
        if (musicAudio.paused) {//->暂停
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    }, false);

    function controlMusic() {
        musicAudio.volume = 0.1;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        }, false);
    }

    window.setTimeout(controlMusic, 1000);
}();