# Frontend Mentor - Interactive pricing component

![Design preview for the Interactive pricing component coding challenge](./design/desktop-preview.jpg)

## Welcome! ๐

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

๐ ์์ฑ๋ณธ : https://compassionate-booth-f5db51.netlify.app/

##### ๋ฐ๊ฒฌํ ๋ฌธ์ ์ 

* label element, title undefined, aria-label undefined, aria-labelledby undefined. -> ์ ๊ทผ์ฑ์ ๊ด๋ จํด์ ์ ์ถํ๊ธฐ ์ ์ ๋ฏธ๋ฆฌ ํด๋น ๋ถ๋ถ์ ๋ํด ์์๋ดค์ด์ผ ํ๋ค. input์ ํด๋น ์ ๊ทผ์ฑ์ ๊ดํ ์์๊ฐ ๋ค์ด๊ฐ๋ค๋ ์ฌ์ค์ ์์ง ๋ชปํ์. ์ดํ ์กฐ์ฌํด ๋ณผ ๊ฒ.

* ํฌ๋กฌ ๊ฐ๋ฐ์ ๋๊ตฌ๋ก ๋ณด์์ ๋๋ ์ ์์ ์ผ๋ก ํ๋ฉด์ด ์ถ๋ ฅ๋์๋๋ฐ, ์ค์  ๋ชจ๋ฐ์ผ ๊ธฐ๊ธฐ์์ ๋ณด๋ ๋ฐฐ๊ฒฝ๊ณผ ํ์ดํ์ด ๊นจ์ ธ์ ๋์ค๋๋๋ค range๊ฐ ์์ง์ด์ง ์๋ ์ด์๊ฐ ์์. ์ถํ ์์ ํ  ๊ฒ.

* ์ฌํ๋ฆฌ์์ range input ์๋ ์ํจ. ๊ณ ์ง์ ์ธ ๋ฌธ์ ์ธ๋ฏ. ์์ range๋ฅผ ์ฌ์ฉํ์ง ๋ง์์ผ ํ๋ ๊ณ ๋ฏผ์ค..
(์คํ์ค๋ฒํ๋ก์ฐ์์ ๊ฐ์ ธ์จ js ์์ ๋ฒ : https://stackoverflow.com/questions/33343854/input-range-slider-not-working-on-ios-safari-when-clicking-on-track)
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

* ์์ ์ฌํญ ๋ฐ์ํ๋๊น ๋๊ธฐ๋ ํ๋๋ฐ... ์ฌ๋ผ์ด๋๊ฐ ๋๋ ์์ ์ ๋ฐ๋๋ ๊ฒ ์๋๋ผ ํด๋ฆญ ํด์ผ๋ง ๋ฐ๋๊ณ  ๋ฐฑ๊ทธ๋ผ์ด๋ ์ปฌ๋ฌ๊ฐ ์์ฐ์ค๋ฝ๊ฒ ์ฐ๊ฒฐ๋์ง ์์... ์ด๋ถ๋ถ ์ข ๋ ๋ด์ผํ ๋ฏ