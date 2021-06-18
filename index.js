const pageview_array = ["10K", "50K", "100K", "500K", "1M", "1M"];
let price_array = ["$8.00", "$12.00", "$16.00", "$24.00", "$32.00", "$32.00"];

const slider = document.querySelector('.slider');
const box = document.querySelector('.box');
const checkbox = box.querySelector('.checkbox');
const price_text = box.querySelector('.right em');
const pageview_text = box.querySelector('.left em');

let percentage = 2;

checkbox.addEventListener('click', e => {
  if(checkbox.checked == true){
    price_array = ["$72.00", "$108.00", "$144.00", "$216.00", "$324.00", "$324.00"]
    price_text.innerHTML = price_array[percentage];
  }else{
    price_array = ["$8.00", "$12.00", "$16.00", "$24.00", "$32.00", "$32.00"];
    price_text.innerHTML = price_array[percentage];
  }
})

slider.addEventListener('change', e => {
  let value = Math.floor(e.target.value*0.05);
  percentage = value;
//   if(percentage != 0){
//       percentage = value-1
//   }
  let green = e.target.value;
  console.log(percentage)
    slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "
  + green + "%, hsl(224, 65%, 95%) " + green + "%, hsl(224, 65%, 95%) 100%)";

  price_text.innerHTML = price_array[percentage];
  pageview_text.innerHTML = pageview_array[percentage];
})

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