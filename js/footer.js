const infoMoreButton = document.querySelector('.info .more .moreButton');
const infoText = document.querySelector('.info .infoText');
const infoTextDownIcon = document.querySelector('.moreButton .xi-caret-down');
let infoMoreButtonClickCount = 0;
infoMoreButton.addEventListener('click', e => {
    infoText.classList.toggle('on')
    infoMoreButtonClickCount++;
    if (infoMoreButtonClickCount % 2 == 0) {
        infoTextDownIcon.classList.replace('xi-caret-up', 'xi-caret-down')
    } else {
        infoTextDownIcon.classList.replace('xi-caret-down', 'xi-caret-up')
    }

})