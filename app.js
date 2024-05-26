let getImage = document.getElementById("getImage");
let isOn = false;
function onOrOff() {
  isOn = !isOn;
  if (isOn) {
    getImage.src = "./assets/imgs/light-on-removebg-preview.png";
  } else {
    getImage.src = "./assets/imgs/light off.png";
  }
}
