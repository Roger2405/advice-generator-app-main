const imageElement = document.querySelector('#dividerImage');


window.onresize = () => {
    if(window.innerWidth < 1440) {
        imageElement.setAttribute('src', '../../images/divider-mobile.svg');
    }
    else {
        imageElement.setAttribute('src', '../../images/divider-desktop.svg');
    }
}