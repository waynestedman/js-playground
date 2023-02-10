const apodInfo = "https://api.nasa.gov/planetary/apod?api_key=foS14fwwleKtG8LQa30Y4Ln3vT1N2gxLAbGksAUT&count=5";

getText(apodInfo);

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("app").innerHTML = myText;
}

export default apodInfo;