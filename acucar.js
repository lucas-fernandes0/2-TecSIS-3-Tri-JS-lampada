function ON(){
    document.getElementById("lampada").src = "ligada.png";
    document.getElementById("body").style.backgroundColor = 'white';
    document.getElementById("lampada").style.opacity = '100%';
}
function OFF(){
    document.getElementById("lampada").src = "desligada.png";
    document.getElementById("body").style.backgroundColor='black';
    document.getElementById("lampada").style.opacity = '0%';
}
function QUEBRA(){
    document.getElementById("lampada").src = "quebrada.png";
}
function PISCA(){
    let intervalo = 0;
    let contador = 0;
    while(contador < 10){
        intervalo += 300;
        setTimeout(function(){
            document.getElementById('lampada').src = 'ligada.png';
            document.getElementById("body").style.backgroundColor='white';
            document.getElementById("lampada").style.opacity = '100%';
        },intervalo);

        intervalo += 300;
        setTimeout(function(){
            document.getElementById('lampada').src = 'desligada.png';
            document.getElementById("body").style.backgroundColor='black';
            document.getElementById("lampada").style.opacity = '0%';
        },intervalo);
        contador++;
    }
}
let lampada = document.getElementById('lampada');

lampada.addEventListener('mouseover',ON);
lampada.addEventListener('mouseleave',OFF);
lampada.addEventListener('dblclick',QUEBRA);