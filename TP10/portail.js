
const container = document.getElementById('sprites');

const cropX = 0;
const cropY = 128;
const cropWidth = 64;
const cropHeight = 64;


for (let i = 1; i <= 29; i++) {
    const label = document.createElement('label');
    label.setAttribute('for', `sprite${i}`);

    container.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('id', `sprite${i}`);
    input.setAttribute('name', `sprite`);
    input.setAttribute('value', `${i}`);
    input.required = true;

    let container2 = document.querySelector(`label[for="sprite${i}"]`)

    const canvas = document.createElement('canvas');
    canvas.width = cropWidth;
    canvas.height = cropHeight;
    container2.appendChild(canvas);
    container2.appendChild(input);

    let context = canvas.getContext('2d');
    const img = new Image();

    img.onload = function () {
        context.drawImage(
            img,
            cropX, cropY, cropWidth, cropHeight,
            0, 0, canvas.width, canvas.height
        );
    };
    img.src = `assets/${i}.png`;
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(document.querySelector('form'));
    const data = Object.fromEntries(formData);
    let number = data["sprite"];
    localStorage.setItem("name", data["name"]);
    localStorage.setItem("url", data["url"]);
    localStorage.setItem("skinPath", `assets/${number}.png`);
    window.location.href = "game.html";
});
