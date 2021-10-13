function changeColor(){
    let red = Number(document.getElementById('red').value);
    let green = Number(document.getElementById('green').value);
    let blue = Number(document.getElementById('blue').value);
    let alpha = (Number(document.getElementById('alpha').value)/100).toFixed(1);

    let colorArea = document.getElementById("color-area");
    colorArea.innerText = `rgba(${red}, ${green}, ${blue}, ${alpha})`
    colorArea.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    document.getElementById("lbRed").innerText = red;
    document.getElementById("lbGreen").innerText = green;
    document.getElementById("lbBlue").innerText = blue;
    document.getElementById("lbAlpha").innerText = alpha;
}

changeColor();
