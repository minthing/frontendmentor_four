const pageview_array = ["10K", "50K", "100K", "500K", "1M"];
let price_array = ["$8.00", "$12.00", "$16.00", "$24.00", "$32.00"];

const slider = document.querySelector('.slider');
const box = document.querySelector('.box');
const checkbox = box.querySelector('.checkbox');
const price_text = box.querySelector('.right em');
const pageview_text = box.querySelector('.left em');

let percentage = 2;

console.log(price_text, pageview_text)

checkbox.addEventListener('click', e => {
  if(checkbox.checked == true){
    price_array = ["$72.00", "$108.00", "$144.00", "$216.00", "$324.00"]
    price_text.innerHTML = price_array[percentage];
  }else{
    price_array = ["$8.00", "$12.00", "$16.00", "$24.00", "$32.00"];
    price_text.innerHTML = price_array[percentage];
  }
})

slider.addEventListener('change', e => {
  let value = e.target.value;
  percentage = value-1;
  let green = (percentage) * 25
    slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "
  + green + "%, hsl(224, 65%, 95%) " + green + "%, hsl(224, 65%, 95%) 100%)";

  console.log(price_array[percentage]);
  price_text.innerHTML = price_array[percentage];
  pageview_text.innerHTML = pageview_array[percentage];
})