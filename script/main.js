const inputColor = document.getElementById("color");

inputColor.addEventListener("input", () => {
  const colorPicker = document.getElementById("color").value;
  document.getElementsByTagName("body")[0].style.backgroundColor = colorPicker;
  document.getElementsByTagName("label")[0].style.backgroundColor = colorPicker;
});
