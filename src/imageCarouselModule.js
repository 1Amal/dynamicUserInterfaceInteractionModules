// This Node module will allow you to use Image Carousels

export class imageCarousel {
  constructor() {
    this.imageDiv1 = document.querySelector(".imageCarouselImagesDiv");
    this.imageDiv2 = document.querySelector(".imageCarouselImagesDiv");
    this.imageDiv3 = document.querySelector(".imageCarouselImagesDiv");
  }

  userInput() {
    const leftButton = document.querySelector(".arrowButtonLeft");
    const rightButton = document.querySelector(".arrowButtonRight");
    const leftCircleButton = document.querySelector(".leftCircle");
    const middleCircleButton = document.querySelector(".middleCircle");
    const rightCircleButton = document.querySelector(".rightCircle");

    // Left button
    leftButton.addEventListener("click", () => {
      this.moveLeft();
    });

    //Right Button
    rightButton.addEventListener("click", () => {
      this.moveRight();
    });

    // 1st Circle Button

    leftCircleButton.addEventListener("click", () => {
      this.circleButton1Clicked();
    });

    // 2nd Circle Button

    middleCircleButton.addEventListener("click", () => {
      this.circleButton2Clicked();
    });

    // 3rd Circle Button
    rightCircleButton.addEventListener("click", () => {
      this.circleButton3Clicked();
    });
  }

  moveLeft() {
    this.imageDiv1.style["grid-area"] = "2/1/3/3";
  }

  moveRight() {
    this.imageDiv1.style["grid-area"] = "2/2/3/4";
  }

  circleButton1Clicked() {
    this.imageDiv1.style["grid-area"] = "2/2/3/3";
  }

  circleButton2Clicked() {
    this.imageDiv1.style["grid-area"] = "2/1/3/2";
  }

  circleButton3Clicked() {
    this.imageDiv1.style["grid-area"] = "2/3/3/4";
  }
}
