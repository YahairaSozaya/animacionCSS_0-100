const numero=document.getElementById("numero");

function imprime(){
    var i=0;
    setInterval(() => {
        if (i<101){
            numero.innerHTML=`${i}%`;
            numero.style.fontSize=`${eval(60 + 2*i)}px`;
            numero.style.opacity=`${eval (i/100)}`;
            i++;
        } else {
            clearInterval;
        }
    }, 50);
}

imprime();