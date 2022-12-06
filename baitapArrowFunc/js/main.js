// arrow function 
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
const activeButton = document.getElementById("colorContainer").getElementsByClassName("color-button");
let loadMau = (colorList) => {
    var content = "";
    colorList.forEach(function (colors, index) {
        content += `<button class= "color-button ${colors}" onclick="selectColor('${colors}',${index})"></button>`;
    });
    document.getElementById("colorContainer").innerHTML = content;
}
loadMau(colorList);
let selectColor = (colorSelect, buttonSelect) => {
    colorList.forEach(function (colorX) {
        if (colorX != colorSelect) {
            document.getElementById("house").classList.remove(colorX);
        }
    });
    document.getElementById("house").classList.add(colorSelect);
    for (var i = 0; i < activeButton.length; i++) {
        if (i != buttonSelect) {
            activeButton[i].classList.remove("active");
        }
    }
    activeButton[buttonSelect].classList.add("active")
}
