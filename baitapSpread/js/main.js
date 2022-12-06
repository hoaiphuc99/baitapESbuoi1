let textBefore = document.getElementsByClassName("heading")[0].textContent;
let textAfter = [...textBefore];
console.log(textBefore);
console.log(textAfter);
let renderHTML = () => {
    var content = "";
    textAfter.forEach(function (text) {
        content += `<span>${text}</span>`;
    });
    document.getElementsByClassName("heading")[0].innerHTML = content;
}
renderHTML();