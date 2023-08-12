console.log('nav js loaded')

// 加遮罩
$('body').append(`<div class="mainMask"></div>`);

// 下拉選單
$('.downInsideMenu').on('click', function(e) {
    e.preventDefault(); //停止事件默認動作
    $(e.target).next('.downMenu').toggleClass('downOpen');
    $(e.target).toggleClass('rotateIcon');
});

// 確認裝置寬度
const checkWidth = () => {
    const windowInnerWidth = document.documentElement.clientWidth;
    isResultS = windowInnerWidth < 992;
    return isResultS
};


const burgerMenuOpen = () => {
    $('.hamburger').addClass('burgerCross');
    $('#nav-xs').addClass('burgerOpen');
};
const burgerMenuClose = () => {
    // icon轉變
    $('.hamburger').removeClass('burgerCross');
    // navbar 出現
    $('#nav-xs').removeClass('burgerOpen');
};

const memberMenuOpen = () => {
    // navbar 出現
    $('#downMemberMenu').addClass('downOpen');
    // 頭像加樣式
    $('.navMember').addClass('clickAdd');
};
const memberMenuClose = () => {
    // 頭像加樣式
    $('.navMember').removeClass('clickAdd');
    // navbar 
    $('#downMemberMenu').removeClass('downOpen');
}

// 小版 overlay 遮罩
const maskShowing = () => {
    $('.mainMask').addClass('mainShowing');
}
const maskClose = () => {
    $('.mainMask').removeClass('mainShowing');
}

// 鎖定螢幕高    
const HeighFix = function HeighFix(n) {
    let navInnerHeight = $('.navInnerHeight').height();
    $('body').height(navInnerHeight + 50);
    $('body').addClass('position-fixed');
}
const HeighFree = function HeighFix(n) {
    $('body').height('');
    $('body').removeClass('position-fixed');
}




// 登入會員下拉選單
$('.avatarBtn').on('click', function(e) {
    const memberHasMenu = $('#downMemberMenu').hasClass('downOpen');
    e.preventDefault();
    let checkWidthS = checkWidth();
    if (!checkWidthS === true && !memberHasMenu === true) { // 大版 + 選單關時
        memberMenuOpen();
    } else if (checkWidthS === true && !memberHasMenu === true) { // 小版 + 選單關時
        HeighFix();
        memberMenuOpen();
        burgerMenuClose();
        maskShowing();
    } else { // 大或小版 + 選單開時
        HeighFree();
        memberMenuClose();
        burgerMenuClose();
        maskClose();
    }
});

$('.hamburger').on('click', function(e) {
    e.preventDefault(); //停止事件默認動作        
    if (!$('#nav-xs').hasClass('burgerOpen') === true) {
        HeighFix();
        burgerMenuOpen();
        memberMenuClose();
        maskShowing();
    } else {
        HeighFree();
        burgerMenuClose();
        memberMenuClose();
        maskClose();
    }
});

// mask 
$('.mainMask').on('click', function(e) {
    HeighFree();
    burgerMenuClose();
    memberMenuClose();
    maskClose();
});