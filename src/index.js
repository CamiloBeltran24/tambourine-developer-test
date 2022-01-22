// form buttons
document.querySelector('.buttonBook').addEventListener('click', showMe);
document.querySelector('#arrow').addEventListener('click', showMe);

function showMe() {
  const card = document.querySelector('.bookNow-formContainer');
  const parallax = document.querySelector('.parallax');
  console.log(parallax);
  if (card.classList.contains('hidde')) {
    card.classList.remove('hidde');
    card.classList.add('show');
    parallax.style.display = 'block';
  } else {
    card.classList.remove('show');
    card.classList.add('hidde');
    parallax.style.display = 'none';
  }
}

// ======== //
//  SLIDER  //
// ======== //
// const sliderBox = document.querySelector('.slider__box');

class Slider {
  constructor() {
    this.box = document.querySelector('.slider__box');
    this.count = 0;
    this.pos = 0;
  }
  auto(pos = 0) {
    this.pos = pos;
    setInterval(() => {
      if (this.pos < 300) {
        this.moved();
      } else {
        this.pos = 0;
        this.box.style.left = `-${this.pos}%`;
      }
    }, 8000);
  }
  movedReverse() {
    if (this.pos > 0) {
      this.pos = this.pos - 100;
    } else {
      this.pos = 300;
    }
    this.box.style.left = `-${this.pos}%`;
  }
  moved() {
    if (this.pos < 300) {
      this.pos = this.pos + 100;
    } else {
      this.pos = 0;
    }
    this.box.style.left = `-${this.pos}%`;
  }
}

let mySlider = new Slider();

mySlider.auto();

document.querySelector('.rightArrow').addEventListener('click', () => {
  mySlider.moved();
});

document.querySelector('.leftArrow').addEventListener('click', () => {
  mySlider.movedReverse();
});
