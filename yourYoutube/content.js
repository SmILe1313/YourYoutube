function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.ytp-ad-overlay-slot { display: none !important; }');
addGlobalStyle('.ytp-ad-image-overlay { display: none !important; }');
addGlobalStyle('.ytp-ad-overlay-image { display: none !important; }');
addGlobalStyle('.ytp-ad-overlay-container { display: none !important; }');
// Верхний кусок честно угнан у keesiemeijer, т.к. его решение очень простое

var adSkipCnt = 0;
setInterval(() => {
    var elements = window.document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text");
    if (elements.length !== 0) {
      try {
        elements[0].click();
        adSkipCnt += 1;
        console.log('Реклама пропущена :)');
        console.log('Всего пропущено: ', adSkipCnt);
      } catch (e) {
        e => console.log(e)
      }
    }
  }, 2500);
