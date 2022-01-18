var r1box1 = document.getElementById("r1box1");
var r1box2 = document.getElementById("r1box2");
var r1box3 = document.getElementById("r1box3");
var r2box1 = document.getElementById("r2box1");
var r2box2 = document.getElementById("r2box2");
var r2box3 = document.getElementById("r2box3");
var r3box1 = document.getElementById("r3box1");
var r3box2 = document.getElementById("r3box2");
var r3box3 = document.getElementById("r3box3");

var pregunta1 = document.getElementById("pregunta1");
var pregunta2 = document.getElementById("pregunta2");
var pregunta3 = document.getElementById("pregunta3");

var termino = false;
var gano = false;
var numAleatorio = 0;

window.onload = function() 
{
    if(document.getElementById("vacio").innerHTML == "trivia")
    {
        start();
    }
    else{
        document.getElementById("body").style.height = screen.height;
    }
};

function start()
{
    numAleatorio = Math.floor(Math.random() * (3 - 0)) + 0; //Numero entre 0 y 1
    if(numAleatorio == 0)
    {
        pregunta1.style.display = "block";
        pregunta2.style.display = "none";
        pregunta3.style.display = "none";

    }
    else if(numAleatorio == 1)
    {
        pregunta1.style.display = "none";
        pregunta2.style.display = "block";
        pregunta3.style.display = "none";
    }
    else if(numAleatorio == 2)
    {
        pregunta1.style.display = "none";
        pregunta2.style.display = "none";
        pregunta3.style.display = "block";
    }
}

function correcta(numero)
{
    if(termino == false)
    {
        if(numero == 1)
        {
            r1box1.style.backgroundColor = '#1e8540';
            r1box1.style.fontSize = "28px";
            r1box1.innerHTML = "✓";
        }
        else if(numero == 2)
        {
            r1box2.style.backgroundColor = '#1e8540';
            r1box1.style.fontSize = "28px";
            r1box2.innerHTML = "✓";
        }
        else if(numero == 3)
        {
            r1box3.style.backgroundColor = '#1e8540';
            r1box3.style.fontSize = "28px";
            r1box3.innerHTML = "✓";
        }
        else if(numero == 4)
        {
            r2box1.style.backgroundColor = '#1e8540';
            r2box1.style.fontSize = "28px";
            r2box1.innerHTML = "✓";
        }
        else if(numero == 5)
        {
            r2box2.style.backgroundColor = '#1e8540';
            r2box2.style.fontSize = "28px";
            r2box2.innerHTML = "✓";
        }
        else if(numero == 6)
        {
            r2box3.style.backgroundColor = '#1e8540';
            r2box3.style.fontSize = "28px";
            r2box3.innerHTML = "✓";
        }
        else if(numero == 7)
        {
            r3box1.style.backgroundColor = '#1e8540';
            r3box1.style.fontSize = "28px";
            r3box1.innerHTML = "✓";
        }
        else if(numero == 8)
        {
            r3box2.style.backgroundColor = '#1e8540';
            r3box2.style.fontSize = "28px";
            r3box2.innerHTML = "✓";
        }
        else if(numero == 9)
        {
            r3box3.style.backgroundColor = '#1e8540';
            r3box3.style.fontSize = "28px";
            r3box3.innerHTML = "✓";
        }

        numero = numero.toString();
        document.getElementById(numero).style.backgroundColor = '#31de6b';
        gano = true;
        termino = true;

        setTimeout(() => {
            cambiarPantalla();
          }, 2000);
    }
}

function incorrecta(numero)
{
    if(termino == false)
    {
        if(numero == 1)
        {
            r1box1.style.backgroundColor = '#851f1b';
            r1box1.innerHTML = "×";
        }
        else if(numero == 2)
        {
            r1box2.style.backgroundColor = '#851f1b';
            r1box2.innerHTML = "×";
        }
        else if(numero == 3)
        {
            r1box3.style.backgroundColor = '#851f1b';
            r1box3.innerHTML = "×";
        }
        else if(numero == 4)
        {
            r2box1.style.backgroundColor = '#851f1b';
            r2box1.innerHTML = "×";
        }
        else if(numero == 5)
        {
            r2box2.style.backgroundColor = '#851f1b';
            r2box2.innerHTML = "×";
        }
        else if(numero == 6)
        {
            r2box3.style.backgroundColor = '#851f1b';
            r2box3.innerHTML = "×";
        }
        else if(numero == 7)
        {
            r3box1.style.backgroundColor = '#851f1b';
            r3box1.innerHTML = "×";
        }
        else if(numero == 8)
        {
            r3box2.style.backgroundColor = '#851f1b';
            r3box2.innerHTML = "×";
        }
        else if(numero == 9)
        {
            r3box3.style.backgroundColor = '#851f1b';
            r3box3.innerHTML = "×";
        }
        numero = numero.toString();
        document.getElementById(numero).style.backgroundColor = '#de3731';
        var elems = document.getElementsByClassName('correcta');
        setTimeout(() => {
            for(var i = 0; i < elems.length; i++)
            {
                elems[i].style.backgroundColor = '#31de6b';
                elems[i].firstElementChild.style.backgroundColor = '#1e8540';
                elems[i].firstElementChild.style.fontSize = "28px";
                elems[i].firstElementChild.innerHTML = "✓";
            }
            setTimeout(() => {
                cambiarPantalla();
              }, 2000);
          }, 1000);
        gano = false;
        termino = true;
    }
}

function cambiarPantalla()
{
    if(document.getElementById("juego").innerHTML == "futbol")
    {
        window.location.href="./futbolTexto.html";
    }
    else if(document.getElementById("juego").innerHTML == "golf")
    {
        window.location.href="./golfTexto.html";
    }
    else if(document.getElementById("juego").innerHTML == "pelotas")
    {
        window.location.href="./pelotasTexto.html";
    }
    else if(document.getElementById("juego").innerHTML == "pistolas")
    {
        window.location.href="./pistolasTexto.html";
    }
}