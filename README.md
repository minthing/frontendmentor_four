# Frontend Mentor - Interactive pricing component

![Design preview for the Interactive pricing component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

📍 완성본 : https://compassionate-booth-f5db51.netlify.app/

##### 발견한 문제점

* label element, title undefined, aria-label undefined, aria-labelledby undefined. -> 접근성에 관련해서 제출하기 전에 미리 해당 부분에 대해 알아봤어야 했다. input에 해당 접근성에 관한 요소가 들어간다는 사실을 알지 못했음. 이후 조사해 볼 것.

* 크롬 개발자 도구로 보았을 때는 정상적으로 화면이 출력되었는데, 실제 모바일 기기에서 보니 배경과 타이틀이 깨져서 나오는대다 range가 움직이지 않는 이슈가 있음. 추후 수정할 것.

* 사파리에서 range input 작동 안함. 고질적인 문제인듯. 아예 range를 사용하지 말아야 하나 고민중..
(스텍오버플로우에서 가져온 js 수정법 : https://stackoverflow.com/questions/33343854/input-range-slider-not-working-on-ios-safari-when-clicking-on-track)
```javascript

let diagramSlider = document.querySelector(".slider");

function iosPolyfill(e) {
  let val = (e.pageX - diagramSlider.getBoundingClientRect().left) /
   (diagramSlider.getBoundingClientRect().right - diagramSlider.getBoundingClientRect().left),
  max = diagramSlider.getAttribute("max"),
  segment = 1 / (max - 1),
  segmentArr = [];

  max++;

  for (let i = 0; i < max; i++) {
    segmentArr.push(segment * i);
  }

  let segCopy = segmentArr.slice(),
  ind = segmentArr.sort((a, b) => Math.abs(val - a) - Math.abs(val - b))[0];

  diagramSlider.value = segCopy.indexOf(ind) + 1;
}

if (!!navigator.platform.match(/iPhone|iPod|iPad/)) {
  diagramSlider.addEventListener("touchend", iosPolyfill, {passive: true});
}

```

* 수정사항 반영하니까 되기는 하는데... 슬라이드가 끝난 시점에 바뀌는 게 아니라 클릭 해야만 바뀌고 백그라운드 컬러가 자연스럽게 연결되지 않음... 이부분 좀 더 봐야할듯